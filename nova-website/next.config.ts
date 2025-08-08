import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // ✅ add Sanity's image CDN domain
  },
};

export default nextConfig;
