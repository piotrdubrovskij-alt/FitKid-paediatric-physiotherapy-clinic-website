import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export function GET() {
  return NextResponse.json(
    {
      required: Boolean(process.env.TURNSTILE_SECRET_KEY),
      siteKey: process.env.TURNSTILE_SITE_KEY || null,
    },
    { headers: { 'Cache-Control': 'no-store' } },
  );
}
