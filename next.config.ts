import type { NextConfig } from "next";

// WHAT: Next.js Configuration.
// WHY: Used for optimizing builds, images, and other environment-specific settings.
// HOW: Exporting a NextConfig object.
// IMPACT: Enhances core functionality like image loading and production builds.

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
  // Re-enable React Strict Mode for better debugging
  reactStrictMode: true,
  // Educational Note: You can also use this for rewrites, redirects, and environment variables.
};

export default nextConfig;
