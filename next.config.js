/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "i.postimg.cc",
      "miro.medium.com",
      "external-preview.redd.it",
      "www.aihr.com",
    ],
  },
};

module.exports = nextConfig;
