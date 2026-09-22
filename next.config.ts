import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export so this can deploy the same way as the other marieharvey.com
  // portfolio-concept subdomains (cPanel git auto-deploy of plain static files,
  // no Node server required).
  output: 'export',
};

export default nextConfig;
