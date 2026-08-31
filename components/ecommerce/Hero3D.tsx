"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaCreditCard, FaLock } from 'react-icons/fa';
import { FaArrowTrendUp } from 'react-icons/fa6';

export default function Hero3D() {
  return (
    <div className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-md lg:max-w-lg mx-auto flex items-center justify-center py-6 sm:py-0">
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-56 sm:w-72 h-56 sm:h-72 rounded-full bg-gradient-to-tr from-amber-500/25 to-[#D4AF37]/25 blur-3xl pointer-events-none"
      />

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full bg-[#111827] rounded-3xl p-5 sm:p-6 shadow-2xl border border-white/10 text-white relative z-10"
      >
        <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 mb-4 sm:mb-5">
          <span className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-[#D4AF37] tracking-wider uppercase">
            <FaShoppingCart className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> E-Commerce Platform
          </span>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[9px] sm:text-[10px] font-bold flex items-center gap-1">
            <FaLock className="w-2 sm:w-2.5 h-2 sm:h-2.5" /> 256-bit Secure
          </span>
        </div>

        <div className="bg-white/5 rounded-2xl p-3.5 sm:p-4 border border-white/5 space-y-2.5 sm:space-y-3.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-[#D4AF37] to-amber-400 flex items-center justify-center text-lg sm:text-xl text-white shadow-md">
                🛍️
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-white">Custom Order</div>
                <div className="text-[9px] sm:text-[10px] text-gray-400">1x Product Package</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs sm:text-sm font-black text-emerald-400">৳ ২৪,৫০০</div>
              <div className="text-[8px] sm:text-[9px] text-gray-400">Auto Verified</div>
            </div>
          </div>

          <div className="flex items-center justify-between bg-white/5 p-2 sm:p-2.5 rounded-xl border border-white/5 text-[9px] sm:text-[10px]">
            <span className="text-gray-300 flex items-center gap-1 sm:gap-1.5 truncate">
              <FaCreditCard className="text-[#D4AF37] shrink-0" /> bKash / Nagad / Visa / Stripe
            </span>
            <span className="text-emerald-400 font-bold shrink-0 ml-1">Live</span>
          </div>
        </div>

        <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-xs">
          <span className="flex items-center gap-1.5 sm:gap-2 text-emerald-400 font-bold">
            <FaArrowTrendUp className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> +240% Sales
          </span>
          <span className="text-gray-400 font-mono">⚡ 1-Click Buy</span>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-3 right-1 sm:-top-4 sm:-right-4 bg-white dark:bg-[#1f2937] px-3 sm:px-4 py-2 sm:py-3 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center gap-2 sm:gap-3 z-20"
      >
        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center text-xs sm:text-base">
          <FaShoppingCart />
        </div>
        <div>
          <div className="text-[11px] sm:text-xs font-bold text-[#111827] dark:text-white">High Conversion</div>
          <div className="text-[9px] sm:text-[10px] text-gray-400">Fast Checkout</div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-3 left-1 sm:-bottom-6 sm:-left-4 bg-white dark:bg-[#1f2937] px-3 sm:px-4 py-2 sm:py-3 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center gap-2 sm:gap-3 z-20"
      >
        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center text-xs sm:text-base">
          <FaCreditCard />
        </div>
        <div>
          <div className="text-[11px] sm:text-xs font-bold text-[#111827] dark:text-white">Payment Gateways</div>
          <div className="text-[9px] sm:text-[10px] text-gray-400">Local & Global</div>
        </div>
      </motion.div>
    </div>
  );
}
