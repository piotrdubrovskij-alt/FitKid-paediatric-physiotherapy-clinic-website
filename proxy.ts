import { createHash, timingSafeEqual } from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';

const VERIFY_HEADER = 'x-origin-verify';

function matchesOriginSecret(provided: string | null, expected: string): boolean {
  if (!provided) return false;

  // Hash first so timingSafeEqual always compares buffers of equal length.
  const actualHash = createHash('sha256').update(provided).digest();
  const expectedHash = createHash('sha256').update(expected).digest();
  return timingSafeEqual(actualHash, expectedHash);
}

export function proxy(request: NextRequest) {
  const secret = process.env.ORIGIN_VERIFY_TOKEN;

  // Enable only after the matching Cloudflare rule and Cloud Run secret are set.
  if (!secret) return NextResponse.next();

  if (!matchesOriginSecret(request.headers.get(VERIFY_HEADER), secret)) {
    return new NextResponse('Forbidden', { status: 403 });
  }

  const headers = new Headers(request.headers);
  headers.delete(VERIFY_HEADER);
  return NextResponse.next({ request: { headers } });
}

export const config = { matcher: '/:path*' };
