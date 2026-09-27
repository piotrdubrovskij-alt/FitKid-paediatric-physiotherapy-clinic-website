import type { NextConfig } from "next";

// Keep the same policy across routes: client-side navigation preserves the CSP
// of the page where the visitor started, including when opening registration.
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self' https://manodaktaras.lt https://*.manodaktaras.lt",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.manodaktaras.lt",
  "script-src-attr 'none'",
  "style-src 'self' 'unsafe-inline' https://www.manodaktaras.lt",
  "img-src 'self' data: blob: https://www.googletagmanager.com https://*.google-analytics.com https://manodaktaras.lt https://*.manodaktaras.lt",
  "font-src 'self' data: https://www.manodaktaras.lt",
  "connect-src 'self' https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://*.google.com https://manodaktaras.lt https://*.manodaktaras.lt",
  "frame-src https://maps.google.com https://www.google.com https://manodaktaras.lt https://*.manodaktaras.lt",
  "media-src 'self' blob:",
  'upgrade-insecure-requests',
].join('; ');

const nextConfig: NextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  images: {
    qualities: [25, 50, 75, 85, 95],
  },
  async headers() {
    return [{
      source: '/:path*',
      headers: [
        { key: 'Content-Security-Policy', value: contentSecurityPolicy },
        { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      ],
    }];
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.fitkid.lt' }],
        destination: 'https://fitkid.lt/:path*',
        permanent: true,
      },
      {
        source: '/kreivakaklyte',
        destination: '/kudikio-kreivakakliste',
        permanent: true,
      },
      {
        source: '/en',
        destination: '/?lang=en',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
