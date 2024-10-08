/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'dist',
  basePath: "/interiorbr",
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
