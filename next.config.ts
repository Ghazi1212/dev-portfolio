/** @type {import('next/config').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '', // Update this if you're not deploying to root
}

module.exports = nextConfig