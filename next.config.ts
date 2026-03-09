import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  serverExternalPackages: ["googleapis"],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
