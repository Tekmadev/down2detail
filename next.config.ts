import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    domains: [],
    unoptimized: true,
  },
  trailingSlash: true,
  // Note: i18n is not compatible with output: 'export', so we'll handle it client-side
};

export default nextConfig;
