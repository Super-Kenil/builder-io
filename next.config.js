/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: '/superkenil/builder-io',
  // assetPrefix: '/superkenil/builder-io',
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.builder.io'
      }
    ],
    dangerouslyAllowSVG: true,
  }
}

module.exports = nextConfig
