/**
 * 页脚组件
 * @author <smallletters@sina.com>
 * @date 2026-03-27
 * @description 网站底部信息，包含链接分类、社交媒体和版权信息
 */

import { CreditCard } from "lucide-react";

const footerLinks = {
  shop: {
    title: "SHOP",
    links: [
      { name: "New Arrivals", href: "#" },
      { name: "Best Sellers", href: "#" },
      { name: "Devices", href: "#" },
      { name: "E-Liquid", href: "#" },
      { name: "Accessories", href: "#" },
    ],
  },
  support: {
    title: "SUPPORT",
    links: [
      { name: "Contact Us", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Shipping Info", href: "#" },
      { name: "Returns", href: "#" },
      { name: "Track Order", href: "#" },
    ],
  },
  company: {
    title: "COMPANY",
    links: [
      { name: "About Us", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  },
};

const socialLinks = [
  { name: "Facebook", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "Youtube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold tracking-tighter mb-4">EVERZON</h2>
            <p className="text-gray-400 text-sm mb-6 max-w-sm leading-relaxed">
              Your trusted source for premium vape devices. We offer authentic products 
              with fast shipping and excellent customer service.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-full hover:bg-[#e53935] hover:border-[#e53935] transition-all"
                  aria-label={social.name}
                >
                  <span className="text-sm">{social.name[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-[#e53935]">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Methods & Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4 text-gray-400">
              <CreditCard size={20} />
              <span className="text-sm">Payment Methods:</span>
              <div className="flex space-x-2">
                {["Visa", "MasterCard", "Amex", "PayPal"].map((method) => (
                  <div
                    key={method}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              © 2026 Everzon. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
