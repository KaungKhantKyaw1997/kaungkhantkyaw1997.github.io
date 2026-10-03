import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["*.local", "192.168.1.*"],
};

export default nextConfig;
