import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.showit.co',
        port: '',
        pathname: '/**',
      },
    ],
    qualities: [75, 90], // Add quality 90 to support the images
  },
};

export default nextConfig;
