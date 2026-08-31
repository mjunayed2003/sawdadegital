"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import Image from 'next/image';

export default function Testimonials() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      quoteKey: 'testi1Quote',
      nameKey: 'testi1Name',
      roleKey: 'testi1Role',
      serviceKey: 'testi1Service',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      stars: 5
    },
    {
      quoteKey: 'testi2Quote',
      nameKey: 'testi2Name',
      roleKey: 'testi2Role',
      serviceKey: 'testi2Service',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
      stars: 5
    },
    {
      quoteKey: 'testi3Quote',
      nameKey: 'testi3Name',
      roleKey: 'testi3Role',
      serviceKey: 'testi3Service',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
      stars: 5
    }
  ];

  // Auto switch every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const current = reviews[activeIndex];

  return (
    <section className="py-24 bg-[#FAFAFA] dark:bg-[#111111] relative overflow-hidden transition-colors duration-300">
      {/* Decorative large quotes */}
      <div className="absolute top-10 left-10 text-[10rem] text-[#DBEAFE] dark:text-[#262626] opacity-30 pointer-events-none -rotate-12 z-0 font-serif transition-colors duration-300">
        "
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#DBEAFE] dark:bg-[#262626] border border-[#1E3A8A]/30 dark:border-white/10 text-[#262626] dark:text-white text-[10px] font-black tracking-[0.2em] mb-3 uppercase shadow-sm transition-colors duration-300">
            {t('testimonialsBadge')}
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#262626] dark:text-white tracking-tight transition-colors duration-300">
            {t('testimonialsTitle')}
          </h2>
        </motion.div>

        {/* Unique Testimonial Slider Card */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative bg-white dark:bg-[#1a1a1a] rounded-[2rem] p-8 md:p-14 shadow-xl border border-[#DBEAFE] dark:border-white/10 overflow-hidden group transition-colors duration-300 min-h-[360px] flex flex-col justify-between">
            
            {/* Ambient Background Glow inside card */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#1E3A8A] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"></div>
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#D4AF37] rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                {/* Header row with Quote icon, Service badge & Stars */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <FaQuoteLeft className="text-3xl text-[#D4AF37] opacity-70" />
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20">
                      {t(current.serviceKey)}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(current.stars)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                
                {/* Quote Text */}
                <p className="text-lg md:text-xl text-[#262626] dark:text-white font-medium leading-relaxed mb-8">
                  "{t(current.quoteKey)}"
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-white/10">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-md flex-shrink-0">
                    <Image 
                      src={current.image} 
                      alt={t(current.nameKey)} 
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#262626] dark:text-white transition-colors duration-300">
                      {t(current.nameKey)}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-medium transition-colors duration-300">
                      {t(current.roleKey)}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Prev / Next controls */}
            <div className="absolute right-6 bottom-8 z-20 hidden sm:flex items-center gap-2">
              <button 
                onClick={() => setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))}
                className="w-9 h-9 rounded-full bg-[#FAFAFA] dark:bg-[#262626] hover:bg-[#D4AF37] hover:text-white text-gray-600 dark:text-gray-300 border border-[#DBEAFE] dark:border-white/10 flex items-center justify-center transition-all duration-200"
                aria-label="Previous Review"
              >
                <FaChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={() => setActiveIndex((prev) => (prev + 1) % reviews.length)}
                className="w-9 h-9 rounded-full bg-[#FAFAFA] dark:bg-[#262626] hover:bg-[#D4AF37] hover:text-white text-gray-600 dark:text-gray-300 border border-[#DBEAFE] dark:border-white/10 flex items-center justify-center transition-all duration-200"
                aria-label="Next Review"
              >
                <FaChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
          
          {/* Custom Pagination Indicator */}
          <div className="flex justify-center items-center gap-3 mt-10">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === idx 
                    ? 'w-10 h-2.5 bg-[#D4AF37] shadow-sm' 
                    : 'w-2.5 h-2.5 bg-[#DBEAFE] dark:bg-[#262626] hover:bg-[#1E3A8A] dark:hover:bg-[#1E3A8A]'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
