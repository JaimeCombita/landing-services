import type { NextConfig } from "next";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  webpack: (config) => {
    return config;
  },
};

export default withVanillaExtract(nextConfig);
