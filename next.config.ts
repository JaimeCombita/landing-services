import type { NextConfig } from "next";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  
  // Redirecciones desde vercel.app a dominio personalizado
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: '(.+)\\.vercel\\.app',
          },
        ],
        destination: 'https://jcengine.co/:path*',
        permanent: true,
      },
    ];
  },
  
  webpack: (config) => {
    return config;
  },
};

export default withVanillaExtract(nextConfig);
