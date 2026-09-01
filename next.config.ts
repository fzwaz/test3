import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/solutions",
        destination: "/solution",
      },
    ];
  },
};

export default nextConfig;
