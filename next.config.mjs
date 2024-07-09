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
        hostname: 'distant-lane-dmedinadev-0769eb58.koyeb.app',
        pathname: '/**'
      }
    ]

  }
}

export default nextConfig
