import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['three', '@react-three/fiber'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ayresapparel.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
