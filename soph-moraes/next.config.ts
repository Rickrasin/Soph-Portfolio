import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost", "cms.seudominio.com", "localhost:1337", "127.0.0.1"] // colocar domínio do Strapi
  }
};

export default nextConfig;
