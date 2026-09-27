import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const MAX_BODY_BYTES = 8 * 1024;
const HEADER_CONTROLS = /[\u0000-\u001f\u007f\u2028\u2029]/u;
const MESSAGE_CONTROLS = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/u;
const EMAIL_PATTERN = /^[^\s@<>(),"\\]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/u;
const PHONE_PATTERN = /^\+?[0-9][0-9(). -]*$/u;

function normalizeField(value: unknown, maxLength: number): string | null {
  if (typeof value !== 'string') return null;
  const normalized = value.trim();
  return normalized && normalized.length <= maxLength ? normalized : null;
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    switch (character) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      default: return '&#39;';
    }
  });
}

async function readLimitedBody(request: Request): Promise<string | null> {
  const reader = request.body?.getReader();
  if (!reader) return '';

  const chunks: Uint8Array[] = [];
  let size = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > MAX_BODY_BYTES) {
      await reader.cancel();
      return null;
    }
    chunks.push(value);
  }

  return new TextDecoder('utf-8', { fatal: true }).decode(Buffer.concat(chunks));
}

export async function POST(request: Request) {
  const contentType = request.headers.get('content-type')?.split(';', 1)[0].trim().toLowerCase();
  if (contentType !== 'application/json') {
    return NextResponse.json({ error: 'JSON content required' }, { status: 415 });
  }

  const declaredLength = request.headers.get('content-length');
  if (declaredLength && Number(declaredLength) > MAX_BODY_BYTES) {
    return NextResponse.json({ error: 'Request too large' }, { status: 413 });
  }

  let body: unknown;
  try {
    const rawBody = await readLimitedBody(request);
    if (rawBody === null) {
      return NextResponse.json({ error: 'Request too large' }, { status: 413 });
    }
    body = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return NextResponse.json({ error: 'Invalid form data' }, { status: 400 });
  }

  const form = body as Record<string, unknown>;
  const name = normalizeField(form.name, 120);
  const email = normalizeField(form.email, 254);
  const phone = normalizeField(form.phone, 32);
  const message = normalizeField(form.message, 2000);

  if (
    !name || !email || !phone || !message ||
    HEADER_CONTROLS.test(name) || HEADER_CONTROLS.test(email) || HEADER_CONTROLS.test(phone) ||
    MESSAGE_CONTROLS.test(message) ||
    !EMAIL_PATTERN.test(email) ||
    !PHONE_PATTERN.test(phone) || phone.replace(/\D/g, '').length < 5
  ) {
    return NextResponse.json({ error: 'Invalid form data' }, { status: 400 });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailPass) {
    console.error('Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars');
    return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: gmailUser, pass: gmailPass },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeMessage = escapeHtml(message).replace(/\r?\n/g, '<br>');

    await transporter.sendMail({
      from: { name: 'FitKid svetainė', address: gmailUser },
      to: 'info@fitkid.lt',
      replyTo: { name, address: email },
      subject: `Užklausa iš ${name} (${email})`,
      html: `
        <h2>Nauja užklausa iš fitkid.lt</h2>
        <p style="font-size:16px;font-family:sans-serif"><strong>Norėdami atsakyti, tiesiog spauskite Reply — atsakymas bus išsiųstas adresu ${safeEmail}</strong></p>
        <table style="border-collapse:collapse;font-family:sans-serif">
          <tr><td style="padding:8px;font-weight:bold">Vardas:</td><td style="padding:8px">${safeName}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">El. paštas:</td><td style="padding:8px"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold">Telefonas:</td><td style="padding:8px"><a href="tel:${safePhone}">${safePhone}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold">Žinutė:</td><td style="padding:8px">${safeMessage}</td></tr>
        </table>
      `,
      text: `Vardas: ${name}\nEl. paštas: ${email}\nTelefonas: ${phone}\nŽinutė: ${message}\n\nNorėdami atsakyti, tiesiog spauskite Reply.`,
    });

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
