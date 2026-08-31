"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Hero3D from './Hero3D';
import { useLanguage } from '@/components/LanguageContext';
import { FaSearch } from 'react-icons/fa';

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
              <span className="w-4 h-4 flex items-center justify-center">🔍</span>
              {language === 'bn' ? 'এসইও ও গুগল মার্কেটিং' : 'SEO & GOOGLE ADS DOMINANCE'}
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-black text-[#111827] dark:text-white tracking-tight leading-[1.08]">
              {language === 'bn' 
                ? 'গুগলের ১ম পেজে র‍্যাঙ্কিং ও অর্গানিক কাস্টমার বৃদ্ধি।' 
                : 'Dominate Google search results and capture intent.'}
            </motion.h1>
            
            <motion.p variants={itemVariants} className="mt-8 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
              {language === 'bn'
                ? 'টেকনিক্যাল এসইও অডিট, হাই-ইনটেন্ট কিওয়ার্ড স্ট্র্যাটেজি এবং টার্গেটেড গুগল পিপিসি অ্যাডস ক্যাম্পেইনের মাধ্যমে উচ্চ রূপান্তরকারী কাস্টমার ট্রাফিক আকর্ষণ।'
                : 'Technical SEO audits, authority link building, and high-intent Google Search Ads engineered to place your business at the very top.'}
            </motion.p>

            <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row gap-5">
              <Link href="#pricing" className="bg-[#9D224D] hover:bg-[#7A173A] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(255,127,17,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2">
                <FaSearch className="w-3.5 h-3.5" />
                {language === 'bn' ? 'এসইও প্ল্যান দেখুন' : 'View SEO Plans'}
              </Link>
              <Link href="/contact" className="bg-white dark:bg-[#1a1a1a] hover:bg-gray-100 dark:hover:bg-white/10 text-[#262626] dark:text-white border border-gray-200 dark:border-white/10 font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center">
                {language === 'bn' ? 'ফ্রি এসইও অডিট' : 'Free SEO Audit'}
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
