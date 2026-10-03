import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*.local", "192.168.1.*"],
};

export default nextConfig;
