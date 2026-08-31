"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaGoogle } from 'react-icons/fa';
import { FaArrowTrendUp, FaBolt } from 'react-icons/fa6';

export default function Hero3D() {
  return (
    <div className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-md lg:max-w-lg mx-auto flex items-center justify-center py-6 sm:py-0">
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-56 sm:w-72 h-56 sm:h-72 rounded-full bg-gradient-to-tr from-[#D4AF37]/25 to-blue-500/25 blur-3xl pointer-events-none"
      />

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full bg-[#111827] rounded-3xl p-5 sm:p-6 shadow-2xl border border-white/10 text-white relative z-10"
      >
        <div className="flex items-center gap-2 sm:gap-3 bg-white/5 border border-white/10 rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 mb-4 sm:mb-6">
          <FaGoogle className="text-white text-xs sm:text-sm" />
          <span className="text-[11px] sm:text-xs text-gray-300 font-medium flex-1 truncate">best digital agency bangladesh</span>
          <FaSearch className="text-[#D4AF37] text-[10px] sm:text-xs" />
        </div>

        <div className="bg-white/5 rounded-2xl p-3.5 sm:p-4 border border-emerald-500/30 relative">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[9px] sm:text-[10px] text-emerald-400 font-mono flex items-center gap-1">
              https://sawdadigital.com
            </span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[8px] sm:text-[9px] font-black uppercase">
              #1 Rank
            </span>
          </div>
          <h4 className="text-xs sm:text-sm font-bold text-blue-400 hover:underline cursor-pointer mb-1.5 line-clamp-1">
            Sawda Digital — Premier Digital Agency
          </h4>
          <p className="text-[10px] sm:text-xs text-gray-400 leading-relaxed line-clamp-2">
            Accelerating brand authority, custom e-commerce, and software engineered to rank #1.
          </p>
        </div>

        <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-xs">
          <span className="flex items-center gap-1.5 sm:gap-2 text-emerald-400 font-bold">
            <FaArrowTrendUp className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> +350% Traffic
          </span>
          <span className="text-gray-400 font-mono">⚡ 100% Crawled</span>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-3 right-1 sm:-top-4 sm:-right-4 bg-white dark:bg-[#1f2937] px-3 sm:px-4 py-2 sm:py-3 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center gap-2 sm:gap-3 z-20"
      >
        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xs sm:text-sm font-black">
          99
        </div>
        <div>
          <div className="text-[11px] sm:text-xs font-bold text-[#111827] dark:text-white">Technical SEO</div>
          <div className="text-[9px] sm:text-[10px] text-gray-400">Core Web Vitals</div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-3 left-1 sm:-bottom-6 sm:-left-4 bg-white dark:bg-[#1f2937] px-3 sm:px-4 py-2 sm:py-3 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center gap-2 sm:gap-3 z-20"
      >
        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center text-xs sm:text-base">
          <FaBolt />
        </div>
        <div>
          <div className="text-[11px] sm:text-xs font-bold text-[#111827] dark:text-white">Google Ads (PPC)</div>
          <div className="text-[9px] sm:text-[10px] text-gray-400">High-Intent Leads</div>
        </div>
      </motion.div>
    </div>
  );
}
