import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

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

    await transporter.sendMail({
      from: `"FitKid svetainė" <${process.env.GMAIL_USER}>`,
      to: 'fitkidvilnius@gmail.com',
      replyTo: email,
      subject: `Nauja užklausa iš ${name}`,
      html: `
        <h2>Nauja užklausa iš fitkid.lt</h2>
        <table style="border-collapse:collapse;font-family:sans-serif">
          <tr><td style="padding:8px;font-weight:bold">Vardas:</td><td style="padding:8px">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">El. paštas:</td><td style="padding:8px">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Telefonas:</td><td style="padding:8px">${phone}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Žinutė:</td><td style="padding:8px">${message}</td></tr>
        </table>
      `,
      text: `Vardas: ${name}\nEl. paštas: ${email}\nTelefonas: ${phone}\nŽinutė: ${message}`,
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
