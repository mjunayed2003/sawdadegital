"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaVideo, FaFilm, FaSlidersH } from 'react-icons/fa';

export default function Hero3D() {
  return (
    <div className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-md lg:max-w-lg mx-auto flex items-center justify-center py-6 sm:py-0">
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-56 sm:w-72 h-56 sm:h-72 rounded-full bg-gradient-to-tr from-[#FF7F11]/25 to-rose-500/20 blur-3xl pointer-events-none"
      />

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full bg-[#111827] rounded-3xl p-5 sm:p-6 shadow-2xl border border-white/10 text-white relative z-10 overflow-hidden"
      >
        <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 mb-3 sm:mb-4">
          <span className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-[#FF7F11] tracking-wider uppercase">
            <FaVideo className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> 4K Cinema Studio
          </span>
          <span className="px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 text-[9px] sm:text-[10px] font-black tracking-widest flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span> REC
          </span>
        </div>

        <div className="relative h-36 sm:h-44 rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border border-white/5 flex items-center justify-center overflow-hidden mb-4 sm:mb-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,127,17,0.15)_0,transparent_70%)]"></div>
          
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#FF7F11] text-white flex items-center justify-center shadow-lg shadow-[#FF7F11]/40 cursor-pointer z-10 pl-0.5 sm:pl-1"
          >
            <FaPlay className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.div>

          <div className="absolute bottom-2 sm:bottom-3 left-3 sm:left-4 right-3 sm:right-4 flex items-end justify-between h-6 sm:h-8 gap-1 opacity-70">
            {[40, 75, 55, 90, 30, 85, 60, 95, 45, 70, 80, 50, 65, 85, 35, 75].map((h, i) => (
              <motion.div
                key={i}
                animate={{ height: [`${h * 0.4}%`, `${h}%`, `${h * 0.3}%`] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.08, ease: "easeInOut" }}
                className="flex-1 bg-gradient-to-t from-[#FF7F11] to-amber-300 rounded-full"
              />
            ))}
          </div>
        </div>

        <div className="space-y-1.5 sm:space-y-2 text-xs">
          <div className="flex justify-between text-gray-400 font-mono text-[9px] sm:text-[10px]">
            <span>01:24:08</span>
            <span className="text-[#FF7F11]">Color Grading Active</span>
            <span>03:45:00</span>
          </div>
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              animate={{ width: ['30%', '65%', '45%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-[#FF7F11] to-amber-400"
            />
          </div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-3 right-1 sm:-top-4 sm:-right-4 bg-white dark:bg-[#1f2937] px-3 sm:px-4 py-2 sm:py-3 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center gap-2 sm:gap-3 z-20"
      >
        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center text-xs sm:text-base">
          <FaFilm />
        </div>
        <div>
          <div className="text-[11px] sm:text-xs font-bold text-[#111827] dark:text-white">ProRes 4K HDR</div>
          <div className="text-[9px] sm:text-[10px] text-gray-400">Cinematic Delivery</div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-3 left-1 sm:-bottom-6 sm:-left-4 bg-white dark:bg-[#1f2937] px-3 sm:px-4 py-2 sm:py-3 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center gap-2 sm:gap-3 z-20"
      >
        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-[#FF7F11]/10 text-[#FF7F11] flex items-center justify-center text-xs sm:text-base">
          <FaSlidersH />
        </div>
        <div>
          <div className="text-[11px] sm:text-xs font-bold text-[#111827] dark:text-white">Spatial Audio</div>
          <div className="text-[9px] sm:text-[10px] text-gray-400">Studio Mix & FX</div>
        </div>
      </motion.div>
    </div>
  );
}
