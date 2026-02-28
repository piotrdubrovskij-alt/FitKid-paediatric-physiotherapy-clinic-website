import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    qualities: [25, 50, 75, 85, 95],
  },
  async redirects() {
    return [
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
