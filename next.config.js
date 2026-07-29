/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "play.google.com",
        pathname: "/intl/**",
      },
      {
        protocol: "https",
        hostname: "destyastudio.com",
        pathname: "/apps/**",
      },
    ],
  },
};

export default nextConfig;
