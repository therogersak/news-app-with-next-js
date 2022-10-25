/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["upload.wikimedia.org"],
  },

  env: {
    API_KEY: "39045cf2b01f491e8489834953e4f85b",
  },
};

module.exports = nextConfig;
