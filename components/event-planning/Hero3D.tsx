"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarCheck, FaUsers, FaClock, FaLocationDot } from 'react-icons/fa6';

export default function Hero3D() {
  return (
    <div className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-md lg:max-w-lg mx-auto flex items-center justify-center py-6 sm:py-0">
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-56 sm:w-72 h-56 sm:h-72 rounded-full bg-gradient-to-tr from-amber-500/25 to-[#FF7F11]/25 blur-3xl pointer-events-none"
      />

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full bg-[#111827] rounded-3xl p-5 sm:p-6 shadow-2xl border border-white/10 text-white relative z-10"
      >
        <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 mb-4 sm:mb-5">
          <span className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-[#FF7F11] tracking-wider uppercase">
            <FaCalendarCheck className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> Event Experience
          </span>
          <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 text-[9px] sm:text-[10px] font-bold">
            Live Schedule
          </span>
        </div>

        <div className="bg-white/5 rounded-2xl p-3 sm:p-4 border border-white/5 space-y-2.5 sm:space-y-3">
          <div className="flex items-center justify-between bg-white/5 p-2.5 sm:p-3 rounded-xl">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs sm:text-base">
                <FaCalendarCheck />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-white">Global Product Launch</div>
                <div className="text-[8px] sm:text-[9px] text-gray-400">Hybrid & Live Stream</div>
              </div>
            </div>
            <span className="text-[9px] sm:text-[10px] text-emerald-400 font-mono">Confirmed</span>
          </div>

          <div className="flex items-center justify-between text-[10px] sm:text-xs text-gray-300 pt-1">
            <span className="flex items-center gap-1"><FaLocationDot className="text-[#FF7F11]" /> Dhaka, BD</span>
            <span className="flex items-center gap-1"><FaClock className="text-[#FF7F11]" /> 10:00 AM</span>
            <span className="flex items-center gap-1"><FaUsers className="text-[#FF7F11]" /> 1,500+</span>
          </div>
        </div>

        <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-xs">
          <span className="text-gray-400">Stage & Sound</span>
          <span className="text-emerald-400 font-mono">100% Turnkey</span>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-3 right-1 sm:-top-4 sm:-right-4 bg-white dark:bg-[#1f2937] px-3 sm:px-4 py-2 sm:py-3 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center gap-2 sm:gap-3 z-20"
      >
        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center text-xs sm:text-base">
          <FaCalendarCheck />
        </div>
        <div>
          <div className="text-[11px] sm:text-xs font-bold text-[#111827] dark:text-white">Corporate Events</div>
          <div className="text-[9px] sm:text-[10px] text-gray-400">Full Production</div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-3 left-1 sm:-bottom-6 sm:-left-4 bg-white dark:bg-[#1f2937] px-3 sm:px-4 py-2 sm:py-3 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center gap-2 sm:gap-3 z-20"
      >
        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-[#FF7F11]/10 text-[#FF7F11] flex items-center justify-center text-xs sm:text-base">
          <FaUsers />
        </div>
        <div>
          <div className="text-[11px] sm:text-xs font-bold text-[#111827] dark:text-white">Guest System</div>
          <div className="text-[9px] sm:text-[10px] text-gray-400">VIP Coordination</div>
        </div>
      </motion.div>
    </div>
  );
}
