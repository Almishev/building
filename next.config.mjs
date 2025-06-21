/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/building',
  assetPrefix: '/building/',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
