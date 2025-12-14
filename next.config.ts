import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.showit.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
