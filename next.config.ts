import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    qualities: [25, 50, 75, 85, 95],
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
