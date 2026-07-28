/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "play.google.com",
        pathname: "/intl/**",
      },
    ],
  },
};

export default nextConfig;
