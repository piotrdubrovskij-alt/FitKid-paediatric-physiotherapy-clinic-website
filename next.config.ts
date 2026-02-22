import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ];
  },
};

export default nextConfig;
