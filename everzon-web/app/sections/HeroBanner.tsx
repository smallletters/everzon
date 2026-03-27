/**
 * Hero 轮播图组件
 * @author <smallletters@sina.com>
 * @date 2026-03-27
 * @description 首页顶部轮播横幅，点击图片跳转
 */

"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { productLinks } from "../config/links";

const banners = [
  {
    id: 1,
    image: "/images/product_008.png",
    alt: "Spring Sale - Everzon",
    link: productLinks.heroBanners.banner1,
  },
  {
    id: 2,
    image: "/images/product_009.png",
    alt: "Spring Sale - Everzon Mobile",
    link: productLinks.heroBanners.banner2,
  },
];

export default function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  return (
    <section className="relative w-full bg-gray-100">
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.a
            key={currentIndex}
            href={banners[currentIndex].link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 block"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={banners[currentIndex].image}
              alt={banners[currentIndex].alt}
              className="w-full h-full object-contain bg-white"
            />
          </motion.a>
        </AnimatePresence>

        {/* 左右切换按钮 */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all z-10"
          aria-label="Previous banner"
        >
          <ChevronLeft size={24} className="text-gray-800" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all z-10"
          aria-label="Next banner"
        >
          <ChevronRight size={24} className="text-gray-800" />
        </button>

        {/* 指示器 */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-gray-800 w-6"
                  : "bg-gray-400/60 hover:bg-gray-400/80"
              }`}
              aria-label={`Go to banner ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
