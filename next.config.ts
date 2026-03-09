import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["googleapis"],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
