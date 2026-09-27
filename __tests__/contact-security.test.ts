// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const sendMail = vi.hoisted(() => vi.fn().mockResolvedValue({ messageId: 'test' }));

vi.mock('nodemailer', () => ({
  default: { createTransport: () => ({ sendMail }) },
}));

import { POST } from '../app/api/contact/route';
import { GET as getTurnstileConfig } from '../app/api/contact/turnstile-config/route';

const validForm = {
  name: 'Agnė Test',
  email: 'agne@example.com',
  phone: '+370 666 99676',
  message: 'Sveiki, norėčiau užsiregistruoti.',
};

function formRequest(body: unknown, contentType = 'application/json; charset=utf-8'): Request {
  return new Request('https://fitkid.lt/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': contentType },
    body: JSON.stringify(body),
  });
}

describe('contact endpoint', () => {
  beforeEach(() => {
    sendMail.mockClear();
    process.env.GMAIL_USER = 'test@fitkid.lt';
    process.env.GMAIL_APP_PASSWORD = 'test-password';
    delete process.env.TURNSTILE_SECRET_KEY;
    delete process.env.TURNSTILE_SITE_KEY;
  });

  afterEach(() => vi.unstubAllGlobals());

  it('sends a normal contact request with a structured reply address', async () => {
    const response = await POST(formRequest(validForm));
    expect(response.status).toBe(200);
    expect(sendMail).toHaveBeenCalledOnce();
    expect(sendMail.mock.calls[0][0].replyTo).toEqual({
      name: 'Agnė Test',
      address: 'agne@example.com',
    });
  });

  it('rejects non-JSON and oversized requests before sending mail', async () => {
    expect((await POST(formRequest(validForm, 'text/plain'))).status).toBe(415);
    expect((await POST(formRequest({ ...validForm, message: 'x'.repeat(9000) }))).status).toBe(413);
    expect(sendMail).not.toHaveBeenCalled();
  });

  it('rejects malformed fields and header-control characters', async () => {
    const invalidForms = [
      { ...validForm, name: { nested: 'not a name' } },
      { ...validForm, name: 'Agnė\r\nBcc: someone@example.com' },
      { ...validForm, email: 'invalid-email' },
      { ...validForm, phone: 'not-a-phone' },
      { ...validForm, message: '\u0000bad' },
      { ...validForm, message: 'x'.repeat(2001) },
    ];

    for (const form of invalidForms) {
      expect((await POST(formRequest(form))).status).toBe(400);
    }
    expect(sendMail).not.toHaveBeenCalled();
  });

  it('escapes user text in HTML email without losing plain-text content', async () => {
    const form = {
      ...validForm,
      name: '<img src=x onerror=alert(1)>',
      message: '<script>alert(1)</script>\nI & you',
    };
    const response = await POST(formRequest(form));
    expect(response.status).toBe(200);

    const mail = sendMail.mock.calls[0][0];
    expect(mail.html).toContain('&lt;img src=x onerror=alert(1)&gt;');
    expect(mail.html).toContain('&lt;script&gt;alert(1)&lt;/script&gt;<br>I &amp; you');
    expect(mail.html).not.toContain('<script>');
    expect(mail.text).toContain(form.message);
  });

  it('exposes only the public widget key and requires verification only after activation', async () => {
    const inactive = getTurnstileConfig();
    expect(await inactive.json()).toEqual({ required: false, siteKey: null });

    process.env.TURNSTILE_SECRET_KEY = 'private-test-secret';
    process.env.TURNSTILE_SITE_KEY = 'public-test-key';
    const active = getTurnstileConfig();
    expect(await active.json()).toEqual({ required: true, siteKey: 'public-test-key' });
    expect(active.headers.get('cache-control')).toBe('no-store');
  });

  it('rejects missing and oversized Turnstile tokens without contacting Cloudflare or sending mail', async () => {
    process.env.TURNSTILE_SECRET_KEY = 'private-test-secret';
    const verifyFetch = vi.fn();
    vi.stubGlobal('fetch', verifyFetch);

    expect((await POST(formRequest(validForm))).status).toBe(403);
    expect((await POST(formRequest({ ...validForm, turnstileToken: 'x'.repeat(2049) }))).status).toBe(403);
    expect(verifyFetch).not.toHaveBeenCalled();
    expect(sendMail).not.toHaveBeenCalled();
  });

  it('rejects failed validation, another hostname, and another action', async () => {
    process.env.TURNSTILE_SECRET_KEY = 'private-test-secret';
    const verifyFetch = vi.fn()
      .mockResolvedValueOnce(new Response(JSON.stringify({ success: false }), { status: 200 }))
      .mockResolvedValueOnce(new Response(JSON.stringify({ success: true, hostname: 'evil.example', action: 'contact' }), { status: 200 }))
      .mockResolvedValueOnce(new Response(JSON.stringify({ success: true, hostname: 'fitkid.lt', action: 'other' }), { status: 200 }));
    vi.stubGlobal('fetch', verifyFetch);

    for (let i = 0; i < 3; i++) {
      expect((await POST(formRequest({ ...validForm, turnstileToken: 'sample-token' }))).status).toBe(403);
    }
    expect(verifyFetch).toHaveBeenCalledTimes(3);
    expect(sendMail).not.toHaveBeenCalled();
  });

  it('validates the token with Cloudflare before a mocked email is sent', async () => {
    process.env.TURNSTILE_SECRET_KEY = 'private-test-secret';
    const verifyFetch = vi.fn().mockResolvedValue(new Response(
      JSON.stringify({ success: true, hostname: 'fitkid.lt', action: 'contact' }),
      { status: 200 },
    ));
    vi.stubGlobal('fetch', verifyFetch);

    expect((await POST(formRequest({ ...validForm, turnstileToken: 'sample-token' }))).status).toBe(200);
    expect(sendMail).toHaveBeenCalledOnce();
    expect(verifyFetch).toHaveBeenCalledOnce();
    expect(verifyFetch.mock.calls[0][0]).toBe('https://challenges.cloudflare.com/turnstile/v0/siteverify');
    const options = verifyFetch.mock.calls[0][1] as RequestInit;
    expect(options.method).toBe('POST');
    expect(new URLSearchParams(options.body as string).get('secret')).toBe('private-test-secret');
    expect(new URLSearchParams(options.body as string).get('response')).toBe('sample-token');
  });

  it('fails closed when Cloudflare validation is unavailable', async () => {
    process.env.TURNSTILE_SECRET_KEY = 'private-test-secret';
    const verifyFetch = vi.fn()
      .mockResolvedValueOnce(new Response('', { status: 502 }))
      .mockRejectedValueOnce(new Error('connection failure'));
    vi.stubGlobal('fetch', verifyFetch);

    expect((await POST(formRequest({ ...validForm, turnstileToken: 'sample-token' }))).status).toBe(503);
    expect((await POST(formRequest({ ...validForm, turnstileToken: 'sample-token' }))).status).toBe(503);
    expect(sendMail).not.toHaveBeenCalled();
  });
});
