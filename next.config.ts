import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Servimos directamente los WebP pre-optimizados desde /public.
    // Evita el optimizador de Vercel (HTTP 402 al superar cuota Hobby).
    unoptimized: true,
  },
};

export default nextConfig;
