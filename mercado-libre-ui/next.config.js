/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["http2.mlstatic.com"],
    formats: ["image/avif", "image/webp"],
  },
};
