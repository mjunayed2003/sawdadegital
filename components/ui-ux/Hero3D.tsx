"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaDesktop, FaFigma, FaLayerGroup, FaPenFancy } from 'react-icons/fa6';

export default function Hero3D() {
  return (
    <div className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-md lg:max-w-lg mx-auto flex items-center justify-center py-6 sm:py-0">
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-56 sm:w-72 h-56 sm:h-72 rounded-full bg-gradient-to-tr from-purple-500/25 to-[#FF7F11]/25 blur-3xl pointer-events-none"
      />

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full bg-[#111827] rounded-3xl p-5 sm:p-6 shadow-2xl border border-white/10 text-white relative z-10"
      >
        <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 mb-4 sm:mb-5">
          <span className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-[#FF7F11] tracking-wider uppercase">
            <FaDesktop className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> Design System Studio
          </span>
          <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[9px] sm:text-[10px] font-bold">
            Prototype
          </span>
        </div>

        <div className="bg-white/5 rounded-2xl p-3 sm:p-4 border border-white/5 space-y-2.5 sm:space-y-3 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="h-3.5 sm:h-4 w-20 sm:w-24 bg-white/20 rounded-full"></div>
            <div className="flex gap-1 sm:gap-1.5">
              <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-[#FF7F11]/40 border border-[#FF7F11]"></div>
              <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-emerald-400/40"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-1 sm:pt-2">
            <div className="h-14 sm:h-16 bg-white/10 rounded-xl p-2 sm:p-2.5 flex flex-col justify-between">
              <div className="h-2 w-10 sm:w-12 bg-white/30 rounded-full"></div>
              <div className="h-2.5 sm:h-3 w-14 sm:w-16 bg-[#FF7F11] rounded-md"></div>
            </div>
            <div className="h-14 sm:h-16 bg-white/10 rounded-xl p-2 sm:p-2.5 flex flex-col justify-between">
              <div className="h-2 w-10 sm:w-12 bg-white/30 rounded-full"></div>
              <div className="h-2.5 sm:h-3 w-14 sm:w-16 bg-purple-400 rounded-md"></div>
            </div>
          </div>

          <motion.div 
            animate={{ x: [0, 60, 30, 0], y: [0, 15, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 left-8 flex items-center gap-1 sm:gap-1.5 pointer-events-none"
          >
            <FaPenFancy className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#FF7F11] -rotate-45" />
            <span className="px-1.5 sm:px-2 py-0.5 rounded-full bg-[#FF7F11] text-white text-[8px] sm:text-[9px] font-bold shadow-md">
              Lead UX
            </span>
          </motion.div>
        </div>

        <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-xs">
          <span className="text-gray-400">Tokens & Components</span>
          <span className="text-emerald-400 font-mono">100% Synced</span>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-3 right-1 sm:-top-4 sm:-right-4 bg-white dark:bg-[#1f2937] px-3 sm:px-4 py-2 sm:py-3 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center gap-2 sm:gap-3 z-20"
      >
        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center text-xs sm:text-base">
          <FaFigma />
        </div>
        <div>
          <div className="text-[11px] sm:text-xs font-bold text-[#111827] dark:text-white">Figma Systems</div>
          <div className="text-[9px] sm:text-[10px] text-gray-400">Pixel-Perfect UI</div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-3 left-1 sm:-bottom-6 sm:-left-4 bg-white dark:bg-[#1f2937] px-3 sm:px-4 py-2 sm:py-3 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center gap-2 sm:gap-3 z-20"
      >
        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-[#FF7F11]/10 text-[#FF7F11] flex items-center justify-center text-xs sm:text-base">
          <FaLayerGroup />
        </div>
        <div>
          <div className="text-[11px] sm:text-xs font-bold text-[#111827] dark:text-white">User Tested</div>
          <div className="text-[9px] sm:text-[10px] text-gray-400">High Conversion UX</div>
        </div>
      </motion.div>
    </div>
  );
}
