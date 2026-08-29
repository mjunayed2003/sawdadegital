"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaPaintBrush, FaLayerGroup, FaPenNib } from 'react-icons/fa';

export default function Hero3D() {
  return (
    <div className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-md lg:max-w-lg mx-auto flex items-center justify-center py-6 sm:py-0">
      {/* Ambient glow */}
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-56 sm:w-72 h-56 sm:h-72 rounded-full bg-gradient-to-tr from-pink-500/25 to-[#FF7F11]/25 blur-3xl pointer-events-none"
      />

      {/* Main Vector Design Canvas Card */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full bg-[#111827] rounded-3xl p-5 sm:p-7 shadow-2xl border border-white/10 text-white relative z-10"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 mb-4 sm:mb-5">
          <span className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-[#FF7F11] tracking-wider uppercase">
            <FaPaintBrush className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Brand Identity Studio
          </span>
          <span className="text-[9px] sm:text-[10px] text-gray-400 font-mono">Vector 300 DPI</span>
        </div>

        {/* Color Palette Grid */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-6">
          {[
            { name: 'Accent', hex: '#FF7F11', bg: 'bg-[#FF7F11]' },
            { name: 'Primary', hex: '#001F3F', bg: 'bg-[#001F3F]' },
            { name: 'Sage', hex: '#ACBFA4', bg: 'bg-[#ACBFA4]' },
            { name: 'Pure', hex: '#FFFFFF', bg: 'bg-white' },
          ].map((color, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 p-1.5 sm:p-2 rounded-xl border border-white/5 flex flex-col items-center gap-1"
            >
              <div className={`w-full h-8 sm:h-10 rounded-lg ${color.bg} shadow-inner`}></div>
              <div className="text-[9px] sm:text-[10px] font-bold text-gray-300">{color.name}</div>
              <div className="text-[7px] sm:text-[8px] font-mono text-gray-500">{color.hex}</div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Logo Symbol Mockup */}
        <div className="bg-white/5 rounded-2xl p-3.5 sm:p-5 border border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-[#FF7F11] to-amber-400 flex items-center justify-center text-white text-lg sm:text-xl font-black shadow-lg shadow-[#FF7F11]/30">
              S
            </div>
            <div>
              <div className="text-xs sm:text-sm font-black text-white">Sawda Digital</div>
              <div className="text-[9px] sm:text-[10px] text-gray-400">Iconic Brand Mark</div>
            </div>
          </div>
          <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#FF7F11]/10 text-[#FF7F11] text-[10px] sm:text-xs font-bold border border-[#FF7F11]/20">
            Vectorized
          </span>
        </div>
      </motion.div>

      {/* Floating Badge 1 */}
      <motion.div 
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-3 right-1 sm:-top-4 sm:-right-4 bg-white dark:bg-[#1f2937] px-3 sm:px-4 py-2 sm:py-3 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center gap-2 sm:gap-3 z-20"
      >
        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-pink-500/10 text-pink-500 flex items-center justify-center text-xs sm:text-base">
          <FaPenNib />
        </div>
        <div>
          <div className="text-[11px] sm:text-xs font-bold text-[#111827] dark:text-white">Precision Paths</div>
          <div className="text-[9px] sm:text-[10px] text-gray-400">Geometric Logos</div>
        </div>
      </motion.div>

      {/* Floating Badge 2 */}
      <motion.div 
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-3 left-1 sm:-bottom-6 sm:-left-4 bg-white dark:bg-[#1f2937] px-3 sm:px-4 py-2 sm:py-3 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center gap-2 sm:gap-3 z-20"
      >
        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-[#FF7F11]/10 text-[#FF7F11] flex items-center justify-center text-xs sm:text-base">
          <FaLayerGroup />
        </div>
        <div>
          <div className="text-[11px] sm:text-xs font-bold text-[#111827] dark:text-white">Brand Book</div>
          <div className="text-[9px] sm:text-[10px] text-gray-400">Full Design Identity</div>
        </div>
      </motion.div>
    </div>
  );
}
