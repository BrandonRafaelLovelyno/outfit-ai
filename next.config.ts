import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}/:path*`, // Use :path* to include dynamic segments
      },
    ];
  },
  output: "standalone"
};

export default nextConfig;
