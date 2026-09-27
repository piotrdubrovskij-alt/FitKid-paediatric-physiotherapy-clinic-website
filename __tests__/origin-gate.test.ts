// @vitest-environment node
import { afterEach, describe, expect, it, vi } from 'vitest';
import { NextRequest } from 'next/server';
import { proxy } from '../proxy';

afterEach(() => vi.unstubAllEnvs());

describe('Cloudflare origin verification', () => {
  const url = 'https://fitkid.lt/api/contact';

  it('stays inactive until the Cloudflare rule and Cloud Run secret are configured', () => {
    vi.stubEnv('ORIGIN_VERIFY_TOKEN', '');
    expect(proxy(new NextRequest(url)).status).toBe(200);
  });

  it('rejects direct and incorrect requests without revealing the secret', async () => {
    vi.stubEnv('ORIGIN_VERIFY_TOKEN', 'example-secret-for-test-only');
    for (const headers of [undefined, { 'x-origin-verify': 'wrong-secret' }]) {
      const response = proxy(new NextRequest(url, { headers }));
      expect(response.status).toBe(403);
      expect(await response.text()).toBe('Forbidden');
    }
  });

  it('lets a Cloudflare verified request through without forwarding the secret', () => {
    vi.stubEnv('ORIGIN_VERIFY_TOKEN', 'example-secret-for-test-only');
    const response = proxy(new NextRequest(url, {
      headers: { 'x-origin-verify': 'example-secret-for-test-only' },
    }));
    expect(response.status).toBe(200);
    expect(response.headers.get('x-middleware-request-x-origin-verify')).toBeNull();
  });
});
