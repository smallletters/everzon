/**
 * 导航栏组件
 * @author <smallletters@sina.com>
 * @date 2026-03-27
 * @description 网站顶部导航，包含Logo、菜单、搜索和购物车
 */

"use client";

import { useState } from "react";
import { Search, ShoppingCart, User, Menu, X, ChevronDown, Heart, Package } from "lucide-react";

const navItems: Array<{ name: string; href: string; hasDropdown?: boolean }> = [];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="w-full bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-[#e53935] transition-colors cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <a href="/" className="flex-shrink-0 cursor-pointer group">
            <h1 className="text-2xl font-black tracking-tighter text-[#1a1a1a] group-hover:text-[#e53935] transition-colors duration-200">
              EAEPZON
            </h1>
          </a>

          {/* Desktop Navigation */}
          {navItems.length > 0 && (
            <nav className="hidden lg:flex items-center space-x-1" role="navigation">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#e53935] transition-colors duration-200 cursor-pointer"
                >
                  <span className="relative z-10 flex items-center gap-1">
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown size={12} className="opacity-60 group-hover:opacity-100 transition-opacity duration-200" />
                    )}
                  </span>
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#e53935] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </a>
              ))}
            </nav>
          )}

          {/* Right Actions */}
          <div className="flex items-center space-x-2 lg:ml-auto">
            {/* Search */}
            <button
              className="p-2 text-gray-600 hover:text-[#e53935] transition-colors duration-200 cursor-pointer"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search products"
            >
              <Search size={20} />
            </button>

            {/* Wishlist */}
            <button
              className="hidden sm:flex p-2 text-gray-600 hover:text-[#e53935] transition-colors duration-200 cursor-pointer"
              aria-label="My wishlist"
            >
              <Heart size={20} />
            </button>

            {/* Orders */}
            <button
              className="hidden sm:flex p-2 text-gray-600 hover:text-[#e53935] transition-colors duration-200 cursor-pointer"
              aria-label="My orders"
            >
              <Package size={20} />
            </button>

            {/* User */}
            <button
              className="hidden sm:flex p-2 text-gray-600 hover:text-[#e53935] transition-colors duration-200 cursor-pointer"
              aria-label="My account"
            >
              <User size={20} />
            </button>

            {/* Cart */}
            <button
              className="p-2 text-gray-600 hover:text-[#e53935] transition-colors duration-200 cursor-pointer relative"
              aria-label="Shopping cart with 0 items"
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-[#e53935] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-gray-100 animate-fade-in">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-5 py-3 pl-12 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e53935] focus:bg-white transition-all duration-200 text-gray-800 placeholder-gray-400"
                autoFocus
                aria-label="Search products"
              />
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white animate-slide-up">
          <nav className="px-4 py-4 space-y-1" role="navigation">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center justify-between py-3 text-sm font-medium text-gray-700 hover:text-[#e53935] border-b border-gray-50 transition-colors duration-200 cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
                {item.hasDropdown && <ChevronDown size={16} />}
              </a>
            ))}
            <div className="flex items-center space-x-4 pt-4">
              <a href="#" className="flex items-center text-sm font-medium text-gray-700 hover:text-[#e53935] transition-colors duration-200 cursor-pointer">
                <Heart size={18} className="mr-2" />
                Wishlist
              </a>
              <a href="#" className="flex items-center text-sm font-medium text-gray-700 hover:text-[#e53935] transition-colors duration-200 cursor-pointer">
                <User size={18} className="mr-2" />
                Account
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
