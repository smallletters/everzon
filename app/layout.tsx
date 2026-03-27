/**
 * 根布局组件
 * @author <smallletters@sina.com>
 * @date 2026-03-27
 * @description 网站根布局，包含全局元数据和字体配置
 */

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Everzon - Premium Vape Devices",
  description: "Your trusted source for premium vape devices. We offer authentic products with fast shipping and excellent customer service.",
  keywords: "vape, vaping, e-cigarette, vape devices, vape kits, e-liquid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
