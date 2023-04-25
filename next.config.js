/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: ["santajitpatra.netlify.app"],
  }
}

module.exports = nextConfig
