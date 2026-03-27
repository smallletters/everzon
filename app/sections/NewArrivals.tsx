/**
 * 新品区组件
 * @author <smallletters@sina.com>
 * @date 2026-03-27
 * @description 展示最新上架产品
 */

"use client";

import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import { productLinks } from "../config/links";

const newProducts = [
  {
    id: "new1",
    name: "Geekvape Aegis Boost 3 Kit 1600mAh",
    price: 45.99,
    originalPrice: 50.99,
    image: "/images/product_010.png",
    discount: "-9%",
    link: productLinks.newArrivals.product1,
  },
  {
    id: "new2",
    name: "OXVA SlimStick X Pod System Kit 1400mAh",
    price: 35.99,
    image: "/images/product_011.png",
    isNew: true,
    link: productLinks.newArrivals.product2,
  },
  {
    id: "new3",
    name: "OXVA SlimStick X Replacement Pod Cartridge (2pcs/pack)",
    price: 12.99,
    image: "/images/product_012.png",
    isNew: true,
    link: productLinks.newArrivals.product3,
  },
  {
    id: "new4",
    name: "OXVA XLIM GO Vape Device",
    price: 24.99,
    image: "/images/product_013.png",
    isNew: true,
    link: productLinks.newArrivals.product4,
  },
];

export default function NewArrivals() {
  return (
    <section id="new-arrivals" className="py-20 bg-white">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-[#1a1a1a] tracking-wide">
          NEW ARRIVALS
        </h2>
        <div className="mt-3 w-16 h-1 bg-gradient-to-r from-[#e53935] to-[#c62828] mx-auto rounded-full" />
      </motion.div>

      {/* 产品网格 - 4 个产品，居中布局 */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {newProducts.map((product, index) => (
          <div key={product.id} className="w-full max-w-[280px]">
            <ProductCard
              {...product}
              index={index}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
