/**
 * 首页组件
 * @author <smallletters@sina.com>
 * @date 2026-03-27
 * @description Everzon 网站首页，与 everzon.com 布局完全一致
 */

import TopBanner from "./sections/TopBanner";
import Header from "./sections/Header";
import NewArrivals from "./sections/NewArrivals";
import BestSellers from "./sections/BestSellers";
import LatestBlog from "./sections/LatestBlog";
import Features from "./sections/Features";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      {/* 顶部警告栏 */}
      <TopBanner />
      
      {/* 导航栏 */}
      <Header />
      
      {/* 新品区 - NEW ARRIVALS */}
      <NewArrivals />
      
      {/* 畅销品区 - BEST SELLERS */}
      <BestSellers />
      
      {/* 博客区 - LATEST FROM BLOG */}
      <LatestBlog />
      
      {/* 服务特色 - Features */}
      <Features />
      
      {/* 页脚 - Footer */}
      <Footer />
    </main>
  );
}
