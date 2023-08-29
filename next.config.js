/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.hgbrasil.com/:path*',
      },
    ]
  },
}

module.exports = nextConfig
