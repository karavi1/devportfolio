import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = withMDX({
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});

export default nextConfig;