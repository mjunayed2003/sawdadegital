"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FaMicrochip, 
  FaBullhorn, 
  FaChartLine, 
  FaRocket, 
  FaCode, 
  FaBullseye, 
  FaShareNodes, 
  FaLaptopCode 
} from "react-icons/fa6";

// Custom 4-point sparkling star
function SparkleStar({
  size = 24,
  color = "#FBBF24",
  className = "",
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 0C12 7 17 12 24 12C17 12 12 17 12 24C12 17 7 12 0 12C7 12 12 7 12 0Z"
        fill={color}
      />
    </svg>
  );
}

// 8-point radiant cosmic star
function RadiantStar({
  size = 32,
  color = "#9D224D",
  className = "",
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16 0L19.5 11L30.5 8L23 16L30.5 24L19.5 21L16 32L12.5 21L1.5 24L9 16L1.5 8L12.5 11L16 0Z"
        fill={color}
      />
    </svg>
  );
}

// Diamond star
function DiamondStar({
  size = 18,
  color = "#38BDF8",
  className = "",
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <polygon points="10,0 20,10 10,20 0,10" fill={color} />
      <circle cx="10" cy="10" r="3" fill="#FFFFFF" />
    </svg>
  );
}

export default function DynamicCosmicBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* ============================================================ */}
      {/* 1. CPU & DIGITAL MARKETING FLOATING ANIMATED TECH ICONS      */}
      {/* ============================================================ */}

      {/* 1. CPU / Microchip Core (Top-Left Tech Node) */}
      <motion.div
        animate={{
          y: [0, -18, 12, -8, 0],
          x: [0, 10, -12, 8, 0],
          rotate: [-4, 6, -6, 4, -4],
          scale: [1, 1.06, 0.96, 1.04, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-8 left-[3%] md:left-[6%] p-3 md:p-3.5 rounded-2xl bg-white/70 dark:bg-white/[0.04] backdrop-blur-md border border-cyan-400/30 dark:border-cyan-500/20 shadow-lg shadow-cyan-500/10 flex items-center gap-2 text-cyan-600 dark:text-cyan-400"
      >
        <div className="relative flex items-center justify-center">
          <FaMicrochip className="w-5 h-5 md:w-6 md:h-6 text-cyan-500" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        </div>
        <span className="text-[10px] md:text-xs font-black tracking-wider uppercase opacity-80">CPU / AI Stack</span>
      </motion.div>

      {/* 2. Digital Marketing Bullhorn / Campaign (Top-Right Marketing Node) */}
      <motion.div
        animate={{
          y: [0, 20, -16, 10, 0],
          x: [0, -12, 14, -8, 0],
          rotate: [6, -5, 8, -4, 6],
          scale: [1, 1.08, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 8.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-12 right-[4%] md:right-[8%] p-3 md:p-3.5 rounded-2xl bg-white/70 dark:bg-white/[0.04] backdrop-blur-md border border-rose-400/30 dark:border-rose-500/20 shadow-lg shadow-rose-500/10 flex items-center gap-2 text-rose-600 dark:text-rose-400"
      >
        <div className="relative flex items-center justify-center">
          <FaBullhorn className="w-5 h-5 md:w-6 md:h-6 text-[#9D224D] dark:text-rose-400" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
        </div>
        <span className="text-[10px] md:text-xs font-black tracking-wider uppercase opacity-80">Digital Ads</span>
      </motion.div>

      {/* 3. Analytics & SEO Growth Chart (Mid-Left Floating ROI Node) */}
      <motion.div
        animate={{
          y: [0, -22, 18, -12, 0],
          x: [0, 14, -10, 12, 0],
          rotate: [-6, 8, -4, 6, -6],
          scale: [0.95, 1.06, 0.98, 1.05, 0.95],
        }}
        transition={{
          duration: 9.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[48%] left-[2%] md:left-[5%] p-3 rounded-2xl bg-white/70 dark:bg-white/[0.04] backdrop-blur-md border border-emerald-400/30 dark:border-emerald-500/20 shadow-lg shadow-emerald-500/10 flex items-center gap-2 text-emerald-600 dark:text-emerald-400"
      >
        <div className="w-8 h-8 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-500">
          <FaChartLine className="w-4 h-4" />
        </div>
        <div className="hidden sm:block">
          <div className="text-[10px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">SEO & Growth</div>
          <div className="text-[9px] font-bold text-gray-500 dark:text-gray-400">+240% ROI</div>
        </div>
      </motion.div>

      {/* 4. Target & Google Search Ads (Mid-Right Strategic Node) */}
      <motion.div
        animate={{
          y: [0, 18, -20, 14, 0],
          x: [0, -15, 12, -10, 0],
          rotate: [4, -8, 6, -4, 4],
          scale: [1, 1.05, 0.94, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[52%] right-[3%] md:right-[6%] p-3 rounded-2xl bg-white/70 dark:bg-white/[0.04] backdrop-blur-md border border-amber-400/30 dark:border-amber-500/20 shadow-lg shadow-amber-500/10 flex items-center gap-2 text-amber-600 dark:text-amber-400"
      >
        <div className="w-8 h-8 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-500">
          <FaBullseye className="w-4 h-4" />
        </div>
        <div className="hidden sm:block">
          <div className="text-[10px] font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">Target Ads</div>
          <div className="text-[9px] font-bold text-gray-500 dark:text-gray-400">Page 1 Ranking</div>
        </div>
      </motion.div>

      {/* 5. Modern Web Code & SaaS (Bottom-Left Architecture Node) */}
      <motion.div
        animate={{
          y: [0, -16, 22, -10, 0],
          x: [0, -12, 16, -8, 0],
          rotate: [8, -6, 5, -8, 8],
          scale: [0.98, 1.07, 0.95, 1.04, 0.98],
        }}
        transition={{
          duration: 7.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-16 left-[6%] md:left-[10%] p-2.5 md:p-3 rounded-2xl bg-white/70 dark:bg-white/[0.04] backdrop-blur-md border border-indigo-400/30 dark:border-indigo-500/20 shadow-lg shadow-indigo-500/10 flex items-center gap-2 text-indigo-600 dark:text-indigo-400"
      >
        <FaCode className="w-4 h-4 text-indigo-500" />
        <span className="text-[10px] font-black uppercase tracking-wider">Next.js & API</span>
      </motion.div>

      {/* 6. Rocket Fast Speed & Scale (Bottom-Right Performance Node) */}
      <motion.div
        animate={{
          y: [0, 24, -18, 12, 0],
          x: [0, 14, -12, 10, 0],
          rotate: [-8, 10, -6, 8, -8],
          scale: [1, 1.08, 0.96, 1.05, 1],
        }}
        transition={{
          duration: 8.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-[8%] md:right-[12%] p-2.5 md:p-3 rounded-2xl bg-white/70 dark:bg-white/[0.04] backdrop-blur-md border border-purple-400/30 dark:border-purple-500/20 shadow-lg shadow-purple-500/10 flex items-center gap-2 text-purple-600 dark:text-purple-400"
      >
        <FaRocket className="w-4 h-4 text-purple-500" />
        <span className="text-[10px] font-black uppercase tracking-wider">High Conversion</span>
      </motion.div>

      {/* 7. Social Network Nodes (Subtle Floating Center Accent) */}
      <motion.div
        animate={{
          y: [0, -14, 16, 0],
          x: [0, 12, -14, 0],
          rotate: [0, 360],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          y: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 7.2, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-[22%] left-[45%] w-9 h-9 rounded-full bg-pink-500/10 dark:bg-pink-500/20 border border-pink-400/30 flex items-center justify-center text-pink-500 shadow-sm"
      >
        <FaShareNodes className="w-4 h-4" />
      </motion.div>

      {/* ============================================================ */}
      {/* 2. ROTATING & FLOATING STARS (ঘূর্ণায়মান ও ভাসমান তারা) */}
      {/* ============================================================ */}

      {/* Star 1: Large Gold 4-Point Star (Top-Left) */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.25, 0.9, 1.15, 1],
          y: [0, -20, 15, -10, 0],
          x: [0, 15, -10, 20, 0],
        }}
        transition={{
          rotate: { duration: 12, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-28 left-[14%] md:left-[18%] drop-shadow-[0_0_12px_rgba(251,191,36,0.8)]"
      >
        <SparkleStar size={34} color="#FBBF24" />
      </motion.div>

      {/* Star 2: Crimson Radiant 8-Point Star (Top Right) */}
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [0.9, 1.3, 1, 1.2, 0.9],
          y: [0, 25, -20, 15, 0],
          x: [0, -20, 15, -10, 0],
        }}
        transition={{
          rotate: { duration: 16, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 9, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-36 right-[20%] md:right-[24%] drop-shadow-[0_0_15px_rgba(244,63,94,0.8)]"
      >
        <RadiantStar size={38} color="#F43F5E" />
      </motion.div>

      {/* Star 3: Electric Cyan Diamond Star (Center Right) */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.4, 0.85, 1],
          y: [0, -30, 20, -15, 0],
          x: [0, -25, 20, -10, 0],
        }}
        transition={{
          rotate: { duration: 10, repeat: Infinity, ease: "linear" },
          scale: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-[38%] right-[14%] md:right-[18%] drop-shadow-[0_0_14px_rgba(56,189,248,0.9)]"
      >
        <DiamondStar size={26} color="#00D2FF" />
      </motion.div>

      {/* Star 4: Purple Sparkling Star (Mid-Left) */}
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [0.8, 1.25, 0.95, 1.2, 0.8],
          y: [0, 20, -25, 10, 0],
          x: [0, 20, -15, 10, 0],
        }}
        transition={{
          rotate: { duration: 14, repeat: Infinity, ease: "linear" },
          scale: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 7.5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-[62%] left-[12%] md:left-[16%] drop-shadow-[0_0_14px_rgba(168,85,247,0.85)]"
      >
        <SparkleStar size={30} color="#A855F7" />
      </motion.div>

      {/* Star 5: Emerald Starburst (Bottom Right) */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 0.9, 1.15, 1],
          y: [0, -25, 15, -20, 0],
          x: [0, 15, -25, 10, 0],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 7.5, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-28 right-[26%] drop-shadow-[0_0_12px_rgba(16,185,129,0.8)]"
      >
        <RadiantStar size={28} color="#10B981" />
      </motion.div>

      {/* Star 6: Golden Sun Sparkle (Bottom Left) */}
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [0.9, 1.35, 0.8, 1.2, 0.9],
          y: [0, 30, -15, 20, 0],
          x: [0, -18, 22, -10, 0],
        }}
        transition={{
          rotate: { duration: 11, repeat: Infinity, ease: "linear" },
          scale: { duration: 3.8, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 6.8, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 7.2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-36 left-[22%] drop-shadow-[0_0_16px_rgba(245,158,11,0.9)]"
      >
        <SparkleStar size={32} color="#F59E0B" />
      </motion.div>

      {/* Star 7: Pure White Twinkle Star (Top Center) */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [0.7, 1.4, 0.7],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          rotate: { duration: 8, repeat: Infinity, ease: "linear" },
          scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-8 left-[35%] drop-shadow-[0_0_10px_#FFFFFF]"
      >
        <SparkleStar size={20} color="#FFFFFF" />
      </motion.div>

      {/* Star 8: Bright Cyan Diamond Star (Center) */}
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [0.8, 1.2, 0.8],
          opacity: [0.5, 0.95, 0.5],
        }}
        transition={{
          rotate: { duration: 13, repeat: Infinity, ease: "linear" },
          scale: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-[32%] left-[48%] drop-shadow-[0_0_12px_rgba(56,189,248,0.9)]"
      >
        <DiamondStar size={18} color="#38BDF8" />
      </motion.div>
    </div>
  );
}
