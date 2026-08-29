"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';
import { FaApple, FaMicrosoft, FaGoogle, FaAmazon, FaFigma, FaSlack, FaStripe, FaSpotify } from 'react-icons/fa';

const logos = [
  { icon: <FaApple />, name: "Apple", colorClass: "text-[#262626] dark:text-white" },
  { icon: <FaMicrosoft />, name: "Microsoft", colorClass: "text-[#FF7F11]" },
  { icon: <FaGoogle />, name: "Google", colorClass: "text-[#ACBFA4] dark:text-[#E2E8CE]" },
  { icon: <FaAmazon />, name: "Amazon", colorClass: "text-[#262626] dark:text-white" },
  { icon: <FaFigma />, name: "Figma", colorClass: "text-[#FF7F11]" },
  { icon: <FaSlack />, name: "Slack", colorClass: "text-[#ACBFA4] dark:text-[#E2E8CE]" },
  { icon: <FaStripe />, name: "Stripe", colorClass: "text-[#262626] dark:text-white" },
  { icon: <FaSpotify />, name: "Spotify", colorClass: "text-[#FF7F11]" },
];

export default function Partnerships() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#FAFAFA] dark:bg-[#111111] relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#E2E8CE] dark:bg-[#262626] border border-[#ACBFA4]/30 dark:border-white/10 text-[#262626] dark:text-white text-xs font-black tracking-[0.2em] mb-4 uppercase transition-colors duration-300">
            {t('partnerships')}
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#262626] dark:text-white tracking-tight transition-colors duration-300">
            {t('brandsCollaborate')}
          </h2>
        </motion.div>
      </div>

      <div className="relative flex flex-col gap-6 overflow-hidden group">
        {/* Fading edges */}
        <div className="absolute top-0 bottom-0 left-0 w-40 bg-gradient-to-r from-[#FAFAFA] dark:from-[#111111] to-transparent z-10 transition-colors duration-300"></div>
        <div className="absolute top-0 bottom-0 right-0 w-40 bg-gradient-to-l from-[#FAFAFA] dark:from-[#111111] to-transparent z-10 transition-colors duration-300"></div>
        
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#E2E8CE] dark:bg-[#262626] rounded-full blur-[120px] opacity-40 pointer-events-none transition-colors duration-300"></div>

        {/* Row 1 - Moves Left */}
        <motion.div 
          className="flex gap-4 py-2 px-3 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div 
              key={`row1-${index}`} 
              className="flex items-center justify-center w-48 h-24 bg-white/80 dark:bg-[#262626]/80 backdrop-blur-sm rounded-3xl shadow-sm border border-[#E2E8CE]/50 dark:border-white/10 hover:shadow-md hover:border-[#ACBFA4] dark:hover:border-white/30 transition-all duration-300 group/logo"
            >
              <div 
                className={`text-4xl opacity-50 dark:opacity-40 group-hover/logo:opacity-100 transition-all duration-300 group-hover/logo:scale-110 drop-shadow-sm ${logo.colorClass}`}
              >
                {logo.icon}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Row 2 - Moves Right */}
        <motion.div 
          className="flex gap-4 py-2 px-3 w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 45, repeat: Infinity }}
        >
          {[...logos.reverse(), ...logos.reverse(), ...logos.reverse()].map((logo, index) => (
            <div 
              key={`row2-${index}`} 
              className="flex items-center justify-center w-40 h-20 bg-white/80 dark:bg-[#262626]/80 backdrop-blur-sm rounded-2xl shadow-sm border border-[#E2E8CE]/50 dark:border-white/10 hover:shadow-md hover:border-[#FF7F11] transition-all duration-300 group/logo"
            >
              <div 
                className={`text-3xl opacity-50 dark:opacity-40 group-hover/logo:opacity-100 transition-all duration-300 group-hover/logo:scale-110 drop-shadow-sm ${logo.colorClass}`}
              >
                {logo.icon}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
