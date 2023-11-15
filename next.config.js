/** @type {import('next').NextConfig} */
const path = require('path')

const { NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL, NEXT_DEV_API_URL = process.env.NEXT_DEV_API_URL } =
  process.env

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  },
  env: {
    NEXT_PUBLIC_API_URL,
    NEXT_DEV_API_URL
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.dummyjson.com',
        port: '',
        pathname: '/data/products/**'
      }
    ]
  }
}

module.exports = nextConfig
