/**
 * 服务特色区组件
 * @author <smallletters@sina.com>
 * @date 2026-03-27
 * @description 展示网站服务特色
 */

"use client";

import { motion } from "framer-motion";
import { Truck, Clock, ShieldCheck, Lock } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "USA & UK WAREHOUSE",
    description: "2-5 days delivery",
  },
  {
    icon: Clock,
    title: "FAST SHIPPING",
    description: "Shipping within 24 hours",
  },
  {
    icon: ShieldCheck,
    title: "AUTHENTICITY GUARANTEED",
    description: "100% Authentic",
  },
  {
    icon: Lock,
    title: "100% PAYMENT SECURE",
    description: "Ensure secure payment",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#e53935]/10 to-[#e53935]/5 rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={28} className="text-[#e53935]" aria-hidden="true" />
                </div>

                <h3 className="text-sm font-bold text-[#1a1a1a] mb-1 tracking-wide">
                  {feature.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {feature.description}
                </p>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e53935] to-[#c62828] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
