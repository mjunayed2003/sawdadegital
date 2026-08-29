"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaMobileScreenButton, FaRobot, FaApple, FaAndroid, FaBolt } from 'react-icons/fa6';

export default function Hero3D() {
  return (
    <div className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-md lg:max-w-lg mx-auto flex items-center justify-center py-6 sm:py-0">
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-56 sm:w-72 h-56 sm:h-72 rounded-full bg-gradient-to-tr from-cyan-500/25 to-[#FF7F11]/25 blur-3xl pointer-events-none"
      />

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full bg-[#111827] rounded-3xl p-5 sm:p-6 shadow-2xl border border-white/10 text-white relative z-10"
      >
        <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 mb-4 sm:mb-5">
          <span className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-[#FF7F11] tracking-wider uppercase">
            <FaMobileScreenButton className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> Mobile App & AI
          </span>
          <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[9px] sm:text-[10px] font-bold flex items-center gap-1">
            <FaBolt className="w-2 sm:w-2.5 h-2 sm:h-2.5" /> 60 FPS
          </span>
        </div>

        <div className="bg-white/5 rounded-2xl p-3 sm:p-4 border border-white/5 space-y-2.5 sm:space-y-3">
          <div className="flex items-center justify-between bg-white/5 p-2.5 sm:p-3 rounded-xl">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs sm:text-base">
                <FaRobot />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-white">Smart AI Engine</div>
                <div className="text-[8px] sm:text-[9px] text-gray-400">Automated workflows</div>
              </div>
            </div>
            <span className="text-[9px] sm:text-[10px] text-emerald-400 font-mono">Active</span>
          </div>

          <div className="flex items-center justify-between bg-white/5 p-2.5 sm:p-3 rounded-xl">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#FF7F11]/20 text-[#FF7F11] flex items-center justify-center text-xs sm:text-base">
                <FaMobileScreenButton />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-white">Cross-Platform App</div>
                <div className="text-[8px] sm:text-[9px] text-gray-400">iOS & Android synced</div>
              </div>
            </div>
            <span className="text-[9px] sm:text-[10px] text-emerald-400 font-mono">Verified</span>
          </div>
        </div>

        <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-xs">
          <div className="flex items-center gap-2 sm:gap-3 text-gray-300">
            <FaApple className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            <FaAndroid className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-emerald-400" />
            <span className="text-gray-400 text-[10px] sm:text-xs">React Native / Flutter</span>
          </div>
          <span className="text-emerald-400 font-mono">Native</span>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-3 right-1 sm:-top-4 sm:-right-4 bg-white dark:bg-[#1f2937] px-3 sm:px-4 py-2 sm:py-3 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center gap-2 sm:gap-3 z-20"
      >
        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xs sm:text-base">
          <FaMobileScreenButton />
        </div>
        <div>
          <div className="text-[11px] sm:text-xs font-bold text-[#111827] dark:text-white">iOS & Android</div>
          <div className="text-[9px] sm:text-[10px] text-gray-400">Dual App Publish</div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-3 left-1 sm:-bottom-6 sm:-left-4 bg-white dark:bg-[#1f2937] px-3 sm:px-4 py-2 sm:py-3 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center gap-2 sm:gap-3 z-20"
      >
        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-[#FF7F11]/10 text-[#FF7F11] flex items-center justify-center text-xs sm:text-base">
          <FaRobot />
        </div>
        <div>
          <div className="text-[11px] sm:text-xs font-bold text-[#111827] dark:text-white">AI Automation</div>
          <div className="text-[9px] sm:text-[10px] text-gray-400">Custom LLM & Agents</div>
        </div>
      </motion.div>
    </div>
  );
}
