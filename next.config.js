/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://api.hgbrasil.com/:path*', // Replace this with your API endpoint
          },
        ];
      },
}

module.exports = nextConfig
