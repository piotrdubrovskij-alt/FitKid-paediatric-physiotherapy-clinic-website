// @vitest-environment node
import { beforeEach, describe, expect, it, vi } from 'vitest';

const sendMail = vi.hoisted(() => vi.fn().mockResolvedValue({ messageId: 'test' }));

vi.mock('nodemailer', () => ({
  default: { createTransport: () => ({ sendMail }) },
}));

import { POST } from '../app/api/contact/route';

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
  });

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
});
