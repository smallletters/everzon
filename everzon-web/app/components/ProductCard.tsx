/**
 * 产品卡片组件
 * @author <smallletters@sina.com>
 * @date 2026-03-27
 * @description 可复用的产品卡片，显示产品图片、名称、价格和折扣标签
 */

import { motion } from "framer-motion";
import { ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  discount?: string;
  isNew?: boolean;
  link: string;
  index?: number;
}

export default function ProductCard({
  name,
  price,
  originalPrice,
  image,
  discount,
  isNew,
  link,
  index = 0,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 产品卡片主体 */}
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer w-full"
      >
        {/* 图片容器 */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={`Product image of ${name}`}
            className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          {/* 折扣标签 */}
          {discount && (
            <span className="absolute top-3 left-3 bg-gradient-to-r from-[#e53935] to-[#c62828] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              {discount}
            </span>
          )}

          {/* 新品标签 */}
          {isNew && !discount && (
            <span className="absolute top-3 left-3 bg-gradient-to-r from-[#4caf50] to-[#388e3c] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              NEW
            </span>
          )}

          {/* 悬停时显示的操作按钮 */}
          <div
            className={`absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <button
                className="flex-1 flex items-center justify-center gap-2 bg-white text-gray-800 py-2.5 rounded-lg font-medium text-sm hover:bg-[#e53935] hover:text-white transition-colors duration-200 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                }}
                aria-label={`Add ${name} to cart`}
              >
                <ShoppingCart size={16} />
                Add to Cart
              </button>
              <button
                className="p-2.5 bg-white/90 rounded-lg hover:bg-white transition-colors duration-200 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  setIsWishlisted(!isWishlisted);
                }}
                aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart
                  size={18}
                  className={
                    isWishlisted
                      ? "fill-[#e53935] text-[#e53935]"
                      : "text-gray-600"
                  }
                />
              </button>
            </div>
          </div>
        </div>

        {/* 产品信息 */}
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-800 mb-3 group-hover:text-[#e53935] transition-colors duration-200">
            {name}
          </h3>
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-[#e53935]">
                ${price.toFixed(2)}
              </span>
              {originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  ${originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            {originalPrice && (
              <span className="text-xs text-[#4caf50] font-medium">
                Save ${(originalPrice - price).toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
}
