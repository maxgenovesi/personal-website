import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so Next.js ignores any stray
  // lockfiles higher up the directory tree.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
