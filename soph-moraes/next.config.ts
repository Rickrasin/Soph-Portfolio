import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000", // ajuste se estiver usando outra porta
        pathname: "/**"
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/**"
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337", // ou a porta que estiver usando
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "cms.seudominio.com",
        port: "",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
