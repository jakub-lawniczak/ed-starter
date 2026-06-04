import type { NextConfig } from 'next';

const nextConfig = {
  output: 'standalone'
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
