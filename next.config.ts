import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ⛔ Ignores ESLint errors during production builds
  },
  // other config options can go here
};

export default nextConfig;
