"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';
import { FiArrowRight } from 'react-icons/fi';
import { FaPaperPlane } from 'react-icons/fa';
import Link from 'next/link';

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white dark:bg-[#1a1a1a] relative transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          className="relative w-full rounded-[3rem] bg-[#262626] overflow-hidden p-10 md:p-16 text-center group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Dynamic Background Glows */}
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#ACBFA4] rounded-full blur-[120px] opacity-20 mix-blend-screen group-hover:scale-110 transition-transform duration-1000 ease-out"></div>
          <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#FF7F11] rounded-full blur-[120px] opacity-20 mix-blend-screen group-hover:scale-110 transition-transform duration-1000 ease-out"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.3 }}
              className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/20 shadow-2xl rotate-12"
            >
              <FaPaperPlane className="text-2xl text-white -translate-x-1 translate-y-1" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              {t('ctaTitle')}
            </h2>
            
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
              {t('ctaDesc')}
            </p>
            
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#FF7F11] text-white font-black text-sm uppercase tracking-wider hover:bg-[#e66a00] hover:scale-105 hover:shadow-[0_0_40px_rgba(255,127,17,0.4)] transition-all duration-300 group/btn"
            >
              {t('ctaButton')}
              <FiArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
            </Link>

          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
