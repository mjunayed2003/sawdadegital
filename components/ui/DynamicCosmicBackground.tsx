"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FaMicrochip, 
  FaBullhorn, 
  FaRocket 
} from "react-icons/fa6";

export default function DynamicCosmicBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* 1. CPU / AI Stack (Top-Left) - Subtle, calm floating */}
      <motion.div
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-[4%] md:left-[7%] p-2.5 md:p-3 rounded-2xl bg-white/60 dark:bg-white/[0.03] backdrop-blur-md border border-cyan-400/20 dark:border-cyan-500/15 shadow-sm flex items-center gap-2 text-cyan-700 dark:text-cyan-400"
      >
        <div className="flex items-center justify-center">
          <FaMicrochip className="w-4 h-4 md:w-5 md:h-5 text-cyan-500" />
        </div>
        <span className="text-[10px] md:text-xs font-bold tracking-wider uppercase opacity-75">AI & Modern Tech</span>
      </motion.div>

      {/* 2. Digital Marketing (Top-Right) - Subtle, calm floating */}
      <motion.div
        animate={{
          y: [0, 6, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-12 right-[5%] md:right-[8%] p-2.5 md:p-3 rounded-2xl bg-white/60 dark:bg-white/[0.03] backdrop-blur-md border border-rose-400/20 dark:border-rose-500/15 shadow-sm flex items-center gap-2 text-rose-700 dark:text-rose-400"
      >
        <div className="flex items-center justify-center">
          <FaBullhorn className="w-4 h-4 md:w-5 md:h-5 text-[#9D224D] dark:text-rose-400" />
        </div>
        <span className="text-[10px] md:text-xs font-bold tracking-wider uppercase opacity-75">Digital Ads & ROI</span>
      </motion.div>

      {/* 3. Rocket Fast Scale (Bottom-Right) - Subtle, calm floating */}
      <motion.div
        animate={{
          y: [0, 7, 0],
        }}
        transition={{
          duration: 8.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-16 right-[7%] md:right-[10%] p-2.5 md:p-3 rounded-2xl bg-white/60 dark:bg-white/[0.03] backdrop-blur-md border border-purple-400/20 dark:border-purple-500/15 shadow-sm flex items-center gap-2 text-purple-700 dark:text-purple-400"
      >
        <FaRocket className="w-3.5 h-3.5 text-purple-500" />
        <span className="text-[10px] font-bold uppercase tracking-wider opacity-75">High Conversion</span>
      </motion.div>
    </div>
  );
}
