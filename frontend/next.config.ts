import type { NextConfig } from 'next';

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const basePath = isGitHubActions ? '/portfolio' : '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;