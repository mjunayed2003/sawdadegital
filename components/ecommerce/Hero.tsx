"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Hero3D from './Hero3D';
import { useLanguage } from '@/components/LanguageContext';
import { FaShoppingCart } from 'react-icons/fa';

export default function Hero() {
  const { language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section className="relative bg-[#FAFAFA] dark:bg-[#111111] py-16 md:py-24 overflow-hidden min-h-[85vh] flex items-center transition-colors duration-300">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          <motion.div 
            className="max-w-3xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-[#262626] border border-gray-200 dark:border-white/10 text-[#9D224D] text-xs font-black mb-8 shadow-sm tracking-wide uppercase">
              <span className="w-4 h-4 flex items-center justify-center">🛒</span>
              {language === 'bn' ? 'ই-কমার্স সলিউশনস' : 'E-COMMERCE ECOSYSTEMS'}
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-black text-[#111827] dark:text-white tracking-tight leading-[1.08]">
              {language === 'bn' 
                ? 'হাই-কনভার্শন ই-কমার্স প্ল্যাটফর্ম ও সেলস ফানেল।' 
                : 'High-converting custom storefronts built to scale.'}
            </motion.h1>
            
            <motion.p variants={itemVariants} className="mt-8 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
              {language === 'bn'
                ? 'বিকাশ, নগদ, ভিসা ও আন্তর্জাতিক পেমেন্ট গেটওয়ে, ১-ক্লিক ফাস্ট চেকআউট এবং রিয়েল-টাইম ইনভেন্টরি ম্যানেজমেন্ট—যা অনলাইন বিক্রয় বহুগুণ বৃদ্ধি করে।'
                : 'Custom digital storefronts engineered with frictionless checkouts, localized & global automated payment gateways (bKash, Nagad, Stripe), and real-time inventory management.'}
            </motion.p>

            <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row gap-5">
              <Link href="#pricing" className="bg-[#9D224D] hover:bg-[#7A173A] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(255,127,17,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2">
                <FaShoppingCart className="w-3.5 h-3.5" />
                {language === 'bn' ? 'ই-কমার্স প্যাকেজ দেখুন' : 'View Store Plans'}
              </Link>
              <Link href="/contact" className="bg-white dark:bg-[#1a1a1a] hover:bg-gray-100 dark:hover:bg-white/10 text-[#262626] dark:text-white border border-gray-200 dark:border-white/10 font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center">
                {language === 'bn' ? 'স্টোর কনসালটেশন' : 'Build Custom Store'}
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative w-full flex justify-center items-center"
          >
            <Hero3D />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
