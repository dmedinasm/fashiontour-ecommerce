/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'tailus.io',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        pathname: '/**'
      }

    ]

  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

export default nextConfig
