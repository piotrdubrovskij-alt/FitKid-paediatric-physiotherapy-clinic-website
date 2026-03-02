import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailPass) {
      console.error('Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    await transporter.sendMail({
      from: `"${name} per fitkid.lt" <${gmailUser}>`,
      to: 'info@fitkid.lt',
      replyTo: `"${name}" <${email}>`,
      subject: `Užklausa iš ${name} (${email})`,
      html: `
        <h2>Nauja užklausa iš fitkid.lt</h2>
        <p style="font-size:16px;font-family:sans-serif"><strong>Norėdami atsakyti, tiesiog spauskite Reply — atsakymas bus išsiųstas adresu ${email}</strong></p>
        <table style="border-collapse:collapse;font-family:sans-serif">
          <tr><td style="padding:8px;font-weight:bold">Vardas:</td><td style="padding:8px">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">El. paštas:</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold">Telefonas:</td><td style="padding:8px"><a href="tel:${phone}">${phone}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold">Žinutė:</td><td style="padding:8px">${message}</td></tr>
        </table>
      `,
      text: `Vardas: ${name}\nEl. paštas: ${email}\nTelefonas: ${phone}\nŽinutė: ${message}\n\nNorėdami atsakyti, tiesiog spauskite Reply.`,
    });

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
