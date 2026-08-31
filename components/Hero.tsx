"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiSearch, FiArrowRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';

const demoImages = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
];

const motionVariants = [
  { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 1.1 } }, // Zoom
  { initial: { opacity: 0, x: 100 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -100 } }, // Slide left
  { initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -100 } }, // Slide up
  { initial: { opacity: 0, rotate: 15, scale: 0.9 }, animate: { opacity: 1, rotate: 0, scale: 1 }, exit: { opacity: 0, rotate: -15, scale: 0.9 } }, // Spin
];

export default function Hero() {
  const { t } = useLanguage();
  const [imgIndex, setImgIndex] = useState(0);
  const [animIndex, setAnimIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % demoImages.length);
      setAnimIndex(Math.floor(Math.random() * motionVariants.length));
    }, 2000); // 2 seconds as requested
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="relative bg-transparent py-16 md:py-24 overflow-hidden min-h-[85vh] flex items-center">
      {/* Subtle Background Pattern */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundImage: 'radial-gradient(#1E3A8A 1.5px, transparent 1.5px)', 
          backgroundSize: '30px 30px' 
        }}
      ></motion.div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DBEAFE] dark:bg-[#262626] border border-[#1E3A8A]/40 dark:border-white/10 text-[#262626] dark:text-white text-sm font-bold mb-8 shadow-sm transition-colors duration-300">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
              {t('discoverTop')}
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-[70px] font-black text-[#262626] dark:text-white tracking-tight leading-[1.1] transition-colors duration-300">
              {t('unlockYour')} <br />
              {t('brands')} <span className="relative inline-block text-white px-4 py-1 mt-2 bg-[#D4AF37] rounded-2xl -rotate-2 transform shadow-md">{t('potential')}</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="mt-8 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed font-medium transition-colors duration-300">
              {t('heroDesc')}
            </motion.p>

            {/* Action Area */}
            <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row gap-5">
              <button className="flex-1 bg-[#262626] dark:bg-[#111111] hover:bg-[#D4AF37] dark:hover:bg-[#D4AF37] text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(38,38,38,0.5)] dark:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_20px_-6px_rgba(255,127,17,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2">
                <FiSearch className="w-5 h-5" />
                {t('findAgency')}
              </button>
              <button className="flex-1 bg-white dark:bg-[#1a1a1a] hover:bg-[#DBEAFE] dark:hover:bg-[#262626] border-2 border-[#DBEAFE] dark:border-white/10 text-[#262626] dark:text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group">
                {t('contactUs')}
                <FiArrowRight className="w-5 h-5 text-[#1E3A8A] group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Popular Categories */}
            <motion.div variants={itemVariants} className="mt-12">
              <p className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-widest">{t('popularServices')}</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { key: 'digitalMarketing', label: t('digitalMarketing') },
                  { key: 'seoServices', label: t('seoServices') },
                  { key: 'webDevelopment', label: t('webDevelopment') },
                  { key: 'branding', label: t('branding') }
                ].map((category, idx) => (
                  <motion.div 
                    key={category.key}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + (idx * 0.1) }}
                  >
                    <Link
                      href="/expertise"
                      className="text-xs font-bold text-[#262626] dark:text-white bg-white dark:bg-[#1a1a1a] border border-[#DBEAFE] dark:border-white/10 hover:border-[#1E3A8A] dark:hover:border-white/30 hover:bg-[#262626] dark:hover:bg-[#262626] hover:text-white px-4 py-2 rounded-xl transition-colors shadow-sm block duration-300"
                    >
                      {category.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Demo Image Slider */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block h-[600px] w-full"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#DBEAFE] dark:bg-[#262626] rounded-full blur-3xl opacity-60 transition-colors duration-300"></div>
            
            {/* Main Image Container */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[480px] z-20">
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500 bg-[#DBEAFE]">
                <AnimatePresence mode="popLayout">
                  <motion.img 
                    key={imgIndex}
                    src={demoImages[imgIndex]} 
                    alt="Creative team working" 
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={motionVariants[animIndex].initial}
                    animate={motionVariants[animIndex].animate}
                    exit={motionVariants[animIndex].exit}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </AnimatePresence>
              </div>
              
              {/* Decorative Accent Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-[#262626] p-4 rounded-2xl shadow-xl border border-[#DBEAFE] dark:border-white/10 flex items-center gap-4 z-30 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-[#D4AF37] rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
                </div>
                <div>
                  <div className="text-[#262626] dark:text-white font-bold text-sm transition-colors duration-300">{t('topRated')}</div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs transition-colors duration-300">{t('agenciesWorldwide')}</div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Dots */}
            <motion.div 
              animate={{ 
                rotate: [0, 90, 180, 270, 360], 
                scale: [1, 1.1, 1] 
              }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="absolute top-12 right-12 w-24 h-24 bg-[#D4AF37] rounded-3xl -rotate-12 shadow-lg opacity-80 z-10"
            ></motion.div>
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-24 right-4 w-12 h-12 bg-[#1E3A8A] rounded-full shadow-lg opacity-90 z-10"
            ></motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
