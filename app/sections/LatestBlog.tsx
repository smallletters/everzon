/**
 * 博客区组件
 * @author <smallletters@sina.com>
 * @date 2026-03-27
 * @description 展示最新博客文章
 */

"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { productLinks } from "../config/links";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Vape Devices for Beginners in 2026",
    excerpt: "Discover the best starter kits that combine ease of use with great performance...",
    image: "/images/product_030.png",
    date: "Mar 25, 2026",
    readTime: "5 min read",
    link: productLinks.blogPosts.post1,
  },
  {
    id: 2,
    title: "How to Maintain Your Vape Device",
    excerpt: "Learn the essential tips for cleaning and maintaining your device for optimal performance...",
    image: "/images/product_031.png",
    date: "Mar 22, 2026",
    readTime: "4 min read",
    link: productLinks.blogPosts.post2,
  },
  {
    id: 3,
    title: "Understanding Coil Resistance and Wattage",
    excerpt: "A comprehensive guide to help you find the perfect settings for your vaping style...",
    image: "/images/product_032.png",
    date: "Mar 18, 2026",
    readTime: "6 min read",
    link: productLinks.blogPosts.post3,
  },
];

export default function LatestBlog() {
  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-white to-gray-50">
      {/* 标题区域 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-4"
      >
        <h2 className="text-3xl font-bold text-[#1a1a1a] tracking-wide">
          LATEST FROM BLOG
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-gray-500 mb-16"
      >
        The freshest and most exciting news
      </motion.p>

      {/* 博客文章网格 */}
      <div className="flex flex-wrap justify-center gap-8 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                  {/* 图片 */}
                  <div className="relative h-56 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* 内容 */}
                  <div className="p-6">
                    {/* 元信息 */}
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>

                    {/* 标题 */}
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2 group-hover:text-[#e53935] transition-colors">
                      {post.title}
                    </h3>

                    {/* 摘要 */}
                    <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>

                    {/* 阅读更多 */}
                    <span className="inline-flex items-center text-[#e53935] text-sm font-semibold group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
