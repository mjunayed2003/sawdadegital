"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaToolbox, FaCheck, FaShieldAlt, FaRocket } from 'react-icons/fa';

export default function Hero3D() {
  return (
    <div className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-md lg:max-w-lg mx-auto flex items-center justify-center py-6 sm:py-0">
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-56 sm:w-72 h-56 sm:h-72 rounded-full bg-gradient-to-tr from-indigo-500/25 to-[#FF7F11]/25 blur-3xl pointer-events-none"
      />

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full bg-[#111827] rounded-3xl p-5 sm:p-6 shadow-2xl border border-white/10 text-white relative z-10"
      >
        <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 mb-4 sm:mb-5">
          <span className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-[#FF7F11] tracking-wider uppercase">
            <FaToolbox className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> Premium Suite
          </span>
          <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[9px] sm:text-[10px] font-bold">
            Licensed
          </span>
        </div>

        <div className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-5">
          {[
            { name: 'Enterprise Cloud Stack', status: 'Managed' },
            { name: 'Automated CI/CD Workflows', status: 'Active' },
            { name: 'Security & SLA Compliance', status: '99.99%' },
          ].map((tool, i) => (
            <div key={i} className="flex items-center justify-between bg-white/5 p-2.5 sm:p-3 rounded-xl border border-white/5 text-[11px] sm:text-xs">
              <span className="flex items-center gap-1.5 sm:gap-2 text-gray-200 truncate">
                <FaCheck className="text-emerald-400 w-2.5 sm:w-3 h-2.5 sm:h-3 shrink-0" /> {tool.name}
              </span>
              <span className="text-indigo-400 font-mono text-[9px] sm:text-[10px] shrink-0 ml-1">{tool.status}</span>
            </div>
          ))}
        </div>

        <div className="pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-xs">
          <span className="text-gray-400">Software Configuration</span>
          <span className="text-emerald-400 font-mono">100% Turnkey</span>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-3 right-1 sm:-top-4 sm:-right-4 bg-white dark:bg-[#1f2937] px-3 sm:px-4 py-2 sm:py-3 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center gap-2 sm:gap-3 z-20"
      >
        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center text-xs sm:text-base">
          <FaShieldAlt />
        </div>
        <div>
          <div className="text-[11px] sm:text-xs font-bold text-[#111827] dark:text-white">Enterprise Tools</div>
          <div className="text-[9px] sm:text-[10px] text-gray-400">Setup & Support</div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-3 left-1 sm:-bottom-6 sm:-left-4 bg-white dark:bg-[#1f2937] px-3 sm:px-4 py-2 sm:py-3 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center gap-2 sm:gap-3 z-20"
      >
        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-[#FF7F11]/10 text-[#FF7F11] flex items-center justify-center text-xs sm:text-base">
          <FaRocket />
        </div>
        <div>
          <div className="text-[11px] sm:text-xs font-bold text-[#111827] dark:text-white">Instant Scaling</div>
          <div className="text-[9px] sm:text-[10px] text-gray-400">Fast Integrations</div>
        </div>
      </motion.div>
    </div>
  );
}
