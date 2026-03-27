/**
 * 邮件订阅区组件
 * @author <smallletters@sina.com>
 * @date 2026-03-27
 * @description 邮件订阅表单，用于收集用户邮箱
 */

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle, Sparkles } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setIsLoading(false);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#e53935] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#e53935] rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 right-10 h-px bg-gradient-to-r from-transparent via-[#e53935]/30 to-transparent" />
        <div className="absolute bottom-10 left-10 right-10 h-px bg-gradient-to-r from-transparent via-[#e53935]/30 to-transparent" />
      </div>

      <div className="px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e53935]/10 border border-[#e53935]/20 rounded-full text-[#e53935] text-sm font-medium mb-8">
              <Sparkles size={16} />
              Join 50,000+ subscribers
            </div>

            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#e53935] to-[#c62828] rounded-2xl mb-8 shadow-2xl shadow-[#e53935]/30">
              <Mail size={36} className="text-white" aria-hidden="true" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Stay in the <span className="text-[#e53935]">Loop</span>
            </h2>

            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Get exclusive offers, daily deals, and be the first to know about new arrivals. 
              Sign up for the Everzon newsletter today.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <div className="flex-1 relative">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e53935] focus:bg-white/10 transition-all duration-200 backdrop-blur-sm"
                  required
                  disabled={isLoading || isSubmitted}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading || isSubmitted}
                className="px-8 py-4 bg-gradient-to-r from-[#e53935] to-[#c62828] hover:from-[#c62828] hover:to-[#b71c1c] text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#e53935]/30 hover:shadow-xl hover:shadow-[#e53935]/40 disabled:opacity-70 cursor-pointer"
                aria-label={isSubmitted ? "Subscribed successfully" : "Subscribe to newsletter"}
              >
                {isLoading ? (
                  <span className="animate-pulse">Subscribing...</span>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle size={20} aria-hidden="true" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    <Send size={20} aria-hidden="true" />
                    Subscribe
                  </>
                )}
              </button>
            </form>

            <p className="text-gray-500 text-sm mt-6">
              By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
