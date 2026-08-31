"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowTrendUp, FaUsers, FaBullhorn } from 'react-icons/fa6';

export default function Hero3D() {
  return (
    <div className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-md lg:max-w-lg mx-auto flex items-center justify-center py-6 sm:py-0">
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-56 sm:w-72 h-56 sm:h-72 rounded-full bg-gradient-to-tr from-[#D4AF37]/25 to-emerald-500/20 blur-3xl pointer-events-none"
      />

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full bg-[#111827] rounded-3xl p-5 sm:p-6 shadow-2xl border border-white/10 text-white relative z-10"
      >
        <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 mb-4 sm:mb-5">
          <span className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-[#D4AF37] tracking-wider uppercase">
            <FaBullhorn className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> Campaign Performance
          </span>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[9px] sm:text-[10px] font-bold">
            Live Stream
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-4 mb-4 sm:mb-6">
          <div className="bg-white/5 rounded-2xl p-2.5 sm:p-3.5 border border-white/5">
            <div className="text-[9px] sm:text-[10px] text-gray-400 font-medium">Conversion Rate</div>
            <div className="text-xl sm:text-2xl font-black text-white mt-0.5 sm:mt-1">4.8%</div>
            <div className="text-[8px] sm:text-[10px] text-emerald-400 font-bold mt-0.5 flex items-center gap-1">
              <FaArrowTrendUp className="w-2 sm:w-2.5 h-2 sm:h-2.5" /> +28.4% this week
            </div>
          </div>
          <div className="bg-white/5 rounded-2xl p-2.5 sm:p-3.5 border border-white/5">
            <div className="text-[9px] sm:text-[10px] text-gray-400 font-medium">Monthly Reach</div>
            <div className="text-xl sm:text-2xl font-black text-white mt-0.5 sm:mt-1">1.2M+</div>
            <div className="text-[8px] sm:text-[10px] text-emerald-400 font-bold mt-0.5 flex items-center gap-1">
              <FaArrowTrendUp className="w-2 sm:w-2.5 h-2 sm:h-2.5" /> +42% high intent
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between gap-2 sm:gap-3 h-20 sm:h-28 pt-2 sm:pt-4 px-1 sm:px-2">
          {[35, 45, 60, 50, 75, 90, 80, 100].map((val, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center gap-1 sm:gap-2">
              <motion.div 
                initial={{ height: 0 }}
                animate={{ height: `${val}%` }}
                transition={{ duration: 1, delay: idx * 0.1, ease: "easeOut" }}
                className={`w-full rounded-t-lg ${
                  idx >= 6 
                    ? 'bg-gradient-to-t from-[#D4AF37] to-amber-300' 
                    : 'bg-white/20'
                }`}
              />
              <span className="text-[8px] sm:text-[9px] text-gray-500">W{idx + 1}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-3 right-1 sm:-top-4 sm:-right-4 bg-white dark:bg-[#1f2937] px-3 sm:px-4 py-2 sm:py-3 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center gap-2 sm:gap-3 z-20"
      >
        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xs sm:text-base">
          <FaArrowTrendUp />
        </div>
        <div>
          <div className="text-[11px] sm:text-xs font-bold text-[#111827] dark:text-white">+340% ROI</div>
          <div className="text-[9px] sm:text-[10px] text-gray-400">Targeted Ad Spend</div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-3 left-1 sm:-bottom-6 sm:-left-4 bg-white dark:bg-[#1f2937] px-3 sm:px-4 py-2 sm:py-3 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center gap-2 sm:gap-3 z-20"
      >
        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center text-xs sm:text-base">
          <FaUsers />
        </div>
        <div>
          <div className="text-[11px] sm:text-xs font-bold text-[#111827] dark:text-white">Active Reach</div>
          <div className="text-[9px] sm:text-[10px] text-gray-400">Brand Engagement</div>
        </div>
      </motion.div>
    </div>
  );
}
