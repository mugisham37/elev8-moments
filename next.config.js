/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: ["sanity", "next-sanity"],
  experimental: {
    esmExternals: "loose",
  },
  webpack: (config, { isServer }) => {
    // Fix for webpack 5 compatibility
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      crypto: false,
    };

    // Fix for Next.js 15 compatibility
    config.externals = config.externals || [];
    if (isServer) {
      config.externals.push({
        "utf-8-validate": "commonjs utf-8-validate",
        bufferutil: "commonjs bufferutil",
      });
    }

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  // Note: We're using the App Router with middleware for internationalization
  // instead of the i18n config in next.config.js (which is for Pages Router)
};

module.exports = nextConfig;
