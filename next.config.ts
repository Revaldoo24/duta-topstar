import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  serverExternalPackages: ["googleapis"],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
