/**
 * 顶部通知栏组件
 * @author <smallletters@sina.com>
 * @date 2026-03-27
 * @description 显示警告通知，与 everzon.com 一致
 */

"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="w-full bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-2 text-center text-xs text-gray-300">
          <p>
            WARNING: We only sell vape devices — no nicotine or other substances are included. 
            Devices must not be used to consume illegal materials.
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer p-2"
            aria-label="Close banner"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
