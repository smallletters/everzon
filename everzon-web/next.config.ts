/**
 * Next.js 配置文件
 * @author <smallletters@sina.com>
 * @date 2026-03-27
 * @description Next.js 应用配置
 */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
