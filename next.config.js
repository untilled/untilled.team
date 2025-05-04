/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
  },
  compiler: {
    emotion: true,
  },
  output: 'export',
}

module.exports = nextConfig
