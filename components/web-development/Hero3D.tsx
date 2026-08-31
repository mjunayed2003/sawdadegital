"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaCheckCircle, FaLaptopCode } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

export default function Hero3D() {
  return (
    <div className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-md lg:max-w-lg mx-auto flex items-center justify-center py-6 sm:py-0">
      {/* Ambient background glow */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-56 sm:w-72 h-56 sm:h-72 rounded-full bg-gradient-to-tr from-[#9D224D]/20 to-[#334155]/30 blur-3xl pointer-events-none"
      />

      {/* Main Code Window Card */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full bg-[#111827] rounded-3xl p-5 sm:p-6 shadow-2xl border border-white/10 text-white relative z-10"
      >
        {/* Window Topbar */}
        <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 mb-4 sm:mb-5">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-500/80"></span>
            <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-yellow-500/80"></span>
            <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-green-500/80"></span>
          </div>
          <span className="text-[10px] sm:text-xs font-mono text-gray-400 flex items-center gap-1.5">
            <FaCode className="text-[#9D224D]" /> App.tsx
          </span>
          <div className="w-6 sm:w-8"></div>
        </div>

        {/* Code Snippet */}
        <div className="font-mono text-[10px] sm:text-xs space-y-2 text-gray-300">
          <div className="text-[#9D224D]">import <span className="text-white">{"{ createScalableApp }"}</span> from <span className="text-emerald-400">'@sawda/core'</span>;</div>
          <div className="text-purple-400">const <span className="text-blue-300">platform</span> = <span className="text-yellow-300">createScalableApp</span>({`{`}</div>
          <div className="pl-3 sm:pl-4 text-gray-400">stack: [<span className="text-emerald-300">'Next.js'</span>, <span className="text-emerald-300">'TS'</span>],</div>
          <div className="pl-3 sm:pl-4 text-gray-400">performance: <span className="text-amber-400">'100/100'</span>,</div>
          <div className="pl-3 sm:pl-4 text-gray-400">security: <span className="text-emerald-400">'Enterprise Grade'</span>,</div>
          <div className="text-purple-400">{`}`});</div>
        </div>

        {/* Live Status Bar */}
        <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-xs">
          <span className="flex items-center gap-1.5 sm:gap-2 text-emerald-400 font-semibold">
            <FaCheckCircle className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> Ready for Prod
          </span>
          <span className="text-gray-400 font-mono">⚡ 0.2s load</span>
        </div>
      </motion.div>

      {/* Floating Badge 1: Speed Score */}
      <motion.div 
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-3 right-1 sm:-top-4 sm:-right-4 bg-white dark:bg-[#1f2937] px-3 sm:px-4 py-2 sm:py-3 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center gap-2 sm:gap-3 z-20"
      >
        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-black text-xs sm:text-sm">
          100
        </div>
        <div>
          <div className="text-[11px] sm:text-xs font-bold text-[#111827] dark:text-white">Performance</div>
          <div className="text-[9px] sm:text-[10px] text-gray-400">Lighthouse Score</div>
        </div>
      </motion.div>

      {/* Floating Badge 2: Tech Stack Pills */}
      <motion.div 
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-3 left-1 sm:-bottom-6 sm:-left-4 bg-white dark:bg-[#1f2937] px-3 sm:px-4 py-2 sm:py-3 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center gap-2 sm:gap-3 z-20"
      >
        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-[#9D224D]/10 text-[#9D224D] flex items-center justify-center text-xs sm:text-lg">
          <FaLaptopCode />
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-700 dark:text-gray-200 text-xs sm:text-sm">
          <SiNextdotjs className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
          <SiTypescript className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-blue-500" />
          <SiTailwindcss className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-cyan-400" />
        </div>
      </motion.div>
    </div>
  );
}
