/**
 * 畅销品区组件
 * @author <smallletters@sina.com>
 * @date 2026-03-27
 * @description 展示热销产品
 */

"use client";

import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import { productLinks } from "../config/links";

const bestSellerProducts = [
  {
    id: "bs1",
    name: "Geekvape Aegis Mini 5 Box Mod 75W",
    price: 40.99,
    originalPrice: 49.99,
    image: "/images/product_014.png",
    discount: "-18%",
    link: productLinks.bestSellers.product1,
  },
  {
    id: "bs2",
    name: "Geekvape Z Nano 3 Tank",
    price: 20.99,
    originalPrice: 24.99,
    image: "/images/product_015.png",
    discount: "-16%",
    link: productLinks.bestSellers.product2,
  },
  {
    id: "bs3",
    name: "Geekvape Aegis Force Pod Mod Kit 3200mAh",
    price: 42.99,
    originalPrice: 49.99,
    image: "/images/product_016.png",
    discount: "-14%",
    link: productLinks.bestSellers.product3,
  },
  {
    id: "bs4",
    name: "Geekvape Z Sub Ohm Tank 5",
    price: 22.99,
    originalPrice: 29.80,
    image: "/images/product_017.png",
    discount: "-23%",
    link: productLinks.bestSellers.product4,
  },
  {
    id: "bs5",
    name: "OXVA XLIM 3 Ultra Pod System Kit 1500mAh",
    price: 35.99,
    originalPrice: 39.99,
    image: "/images/product_018.jpg",
    discount: "-10%",
    link: productLinks.bestSellers.product5,
  },
  {
    id: "bs6",
    name: "OXVA Xlim Pro 3 Pod System Kit 1500mAh",
    price: 30.99,
    originalPrice: 35.99,
    image: "/images/product_019.jpg",
    discount: "-14%",
    link: productLinks.bestSellers.product6,
  },
  {
    id: "bs7",
    name: "Geekvape Aegis Force Pod Mod Kit 3200mAh",
    price: 42.99,
    originalPrice: 49.99,
    image: "/images/product_020.jpg",
    discount: "-14%",
    link: productLinks.bestSellers.product7,
  },
  {
    id: "bs8",
    name: "Geekvape Aegis Hero 5 Pod Mod Kit 2000mAh",
    price: 34.99,
    originalPrice: 39.99,
    image: "/images/product_021.png",
    discount: "-12%",
    link: productLinks.bestSellers.product8,
  },
  {
    id: "bs9",
    name: "Geekvape Soul 2 Pod System Kit 2100mAh",
    price: 24.99,
    originalPrice: 33.99,
    image: "/images/product_022.png",
    discount: "-26%",
    link: productLinks.bestSellers.product9,
  },
  {
    id: "bs10",
    name: "OXVA XLIM V3 Pod System Kit",
    price: 27.99,
    originalPrice: 32.99,
    image: "/images/product_023.png",
    discount: "-15%",
    link: productLinks.bestSellers.product10,
  },
  {
    id: "bs11",
    name: "OXVA Xlim Go 2 Pod System Kit 1500mAh",
    price: 15.90,
    originalPrice: 20.90,
    image: "/images/product_024.jpg",
    discount: "-24%",
    link: productLinks.bestSellers.product11,
  },
  {
    id: "bs12",
    name: "OXVA Xlim Pro 3 Pod System Kit 1500mAh",
    price: 30.99,
    originalPrice: 35.90,
    image: "/images/product_025.jpg",
    discount: "-14%",
    link: productLinks.bestSellers.product12,
  },
  {
    id: "bs13",
    name: "OXVA XLIM PRO 2 DNA Version Pod System Kit",
    price: 49.99,
    originalPrice: 55.99,
    image: "/images/product_026.jpg",
    discount: "-17%",
    link: productLinks.bestSellers.product13,
  },
  {
    id: "bs14",
    name: "OXVA NeXlim Pod Vape Kit",
    price: 29.99,
    originalPrice: 37.99,
    image: "/images/product_027.jpg",
    discount: "-21%",
    link: productLinks.bestSellers.product14,
  },
  {
    id: "bs15",
    name: "OXVA XLIM Pro 2 Kit",
    price: 24.90,
    originalPrice: 35.90,
    image: "/images/product_028.jpg",
    discount: "-31%",
    link: productLinks.bestSellers.product15,
  },
  {
    id: "bs16",
    name: "Geekvape Aegis Solo 3 Vape Mod Kit",
    price: 54.99,
    originalPrice: 72.00,
    image: "/images/product_029.jpg",
    discount: "-24%",
    link: productLinks.bestSellers.product16,
  },
];

export default function BestSellers() {
  return (
    <section id="best-sellers" className="py-20 bg-gray-50">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-[#1a1a1a] tracking-wide">
          BEST SELLERS
        </h2>
        <div className="mt-3 w-16 h-1 bg-gradient-to-r from-[#e53935] to-[#c62828] mx-auto rounded-full" />
      </motion.div>

      {/* 产品网格 - 16 个产品，居中布局 */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {bestSellerProducts.map((product, index) => (
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
