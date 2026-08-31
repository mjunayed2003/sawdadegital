"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';
import { FiPlus, FiMinus } from 'react-icons/fi';

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqs = [
    { q: 'faq1Q', a: 'faq1A' },
    { q: 'faq2Q', a: 'faq2A' },
    { q: 'faq3Q', a: 'faq3A' },
    { q: 'faq4Q', a: 'faq4A' },
    { q: 'faq5Q', a: 'faq5A' },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white dark:bg-[#1a1a1a] relative transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Sticky Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#DBEAFE] dark:bg-[#262626] border border-[#1E3A8A]/30 dark:border-white/10 text-[#262626] dark:text-white text-[10px] font-black tracking-[0.2em] mb-4 uppercase shadow-sm transition-colors duration-300">
                {t('faqBadge')}
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#262626] dark:text-white tracking-tight mb-4 leading-tight transition-colors duration-300">
                {t('faqTitle')}
              </h2>
              <p className="text-gray-500 dark:text-gray-300 text-base leading-relaxed max-w-md transition-colors duration-300">
                {t('faqDesc')}
              </p>
            </motion.div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7">
            <div className="flex flex-col gap-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className={`bg-[#FAFAFA] dark:bg-[#1a1a1a] rounded-2xl border transition-colors duration-300 ${isOpen ? 'border-[#D4AF37] shadow-md bg-white dark:bg-[#262626]' : 'border-[#DBEAFE] dark:border-white/10 hover:border-[#1E3A8A] dark:hover:border-white/30'}`}
                  >
                    <button 
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                    >
                      <h3 className={`text-base md:text-lg font-bold pr-8 transition-colors duration-300 ${isOpen ? 'text-[#D4AF37]' : 'text-[#262626] dark:text-white'}`}>
                        {t(faq.q)}
                      </h3>
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-[#D4AF37] text-white' : 'bg-[#DBEAFE] dark:bg-[#333] text-[#262626] dark:text-white'}`}>
                        {isOpen ? <FiMinus className="w-4 h-4" /> : <FiPlus className="w-4 h-4" />}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 md:px-8 pb-6 md:pb-8 text-gray-500 dark:text-gray-400 leading-relaxed border-t border-[#DBEAFE]/50 dark:border-white/10 mt-2 pt-6 transition-colors duration-300">
                            {t(faq.a)}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
