"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';

export default function Process() {
  const { language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const steps = [
    {
      num: "01",
      title: language === 'bn' ? '১. প্রি-প্রোডাকশন ও স্ক্রিপ্টিং (Pre-Production)' : '01. Pre-Production & Concept',
      description: language === 'bn'
        ? 'স্ক্রিপ্ট রাইটিং, স্টোরিবোর্ডিং, লোকেশন স্কাউটিং এবং কাস্টিং চূড়ান্ত করে নির্ভুল শুটিং প্ল্যান তৈরি।'
        : 'Scriptwriting, storyboarding, moodboards, talent casting, and meticulous shoot scheduling.',
      align: "left"
    },
    {
      num: "02",
      title: language === 'bn' ? '২. সিনেমাটিক শুটিং ও প্রোডাকশন (Production)' : '02. 4K Cinema Production',
      description: language === 'bn'
        ? 'টপ-টায়ার সিনেমা ক্যামেরা, লাইটিং রিগ এবং অডিও ইকুইপমেন্ট নিয়ে দক্ষ ক্রু দ্বারা শুটিং পরিচালনা।'
        : 'Executing the vision with broadcast-grade cinema cameras, master lighting, and pristine on-set audio recording.',
      align: "right"
    },
    {
      num: "03",
      title: language === 'bn' ? '৩. পোস্ট-প্রোডাকশন ও এডিটিং (Post-Production)' : '03. Post-Production & Color',
      description: language === 'bn'
        ? 'সিনেমাটিক ভিডিও এডিটিং, DaVinci কালার গ্রেডিং, ২D/৩D মোশন এফেক্টস ও সাউন্ড ডিজাইনিং।'
        : 'Precision narrative editing, Hollywood-grade DaVinci Resolve color grading, motion graphics, and audio mastering.',
      align: "left"
    },
    {
      num: "04",
      title: language === 'bn' ? '৪. ফাইনাল রিভিউ ও মাল্টি-ফরম্যাট ডেলিভারি (Delivery)' : '04. Multi-Platform Delivery',
      description: language === 'bn'
        ? 'ক্লায়েন্ট রিভিউ সম্পন্ন করে ইউটিউব, টিভি, ফেসবুক ও রিলসের জন্য অপ্টিমাইজড ফরম্যাটে ফাইল হস্তান্তর।'
        : 'Final mastering and high-bitrate exports formatted for TV broadcast, YouTube 4K, and social vertical platforms.',
      align: "right"
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#161616] relative overflow-hidden transition-colors duration-300" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-24">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#FCE7F3] dark:bg-[#262626] border border-[#334155]/30 dark:border-white/10 text-[#262626] dark:text-white text-xs font-black tracking-widest mb-4 uppercase shadow-sm">
            {language === 'bn' ? 'আমাদের প্রোডাকশন প্রক্রিয়া' : 'PRODUCTION WORKFLOW'}
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-[#111827] dark:text-white mb-4"
          >
            {language === 'bn' ? 'আইডিয়া থেকে সিনেমাটিক মাস্টারপিস' : 'From Concept to Master Cut'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
          >
            {language === 'bn'
              ? 'একটি সুশৃঙ্খল স্টুডিও ওয়ার্কফ্লো যা প্রতিটি দৃশ্যে সিনেমাটিক পারফেকশন নিশ্চিত করে।'
              : 'A seamless 4-phase creative pipeline engineered to deliver broadcast-quality visual excellence on time.'}
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-8 bottom-8 w-1 bg-gray-100 dark:bg-white/10 hidden md:block" />
          
          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16`}>
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`w-full md:w-1/2 ${isEven ? 'md:text-right' : 'md:text-left'}`}
                  >
                    <div className="bg-[#FAFAFA] dark:bg-[#1a1a1a] p-8 md:p-10 rounded-[2rem] border border-[#FCE7F3] dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300">
                      <span className="text-3xl font-black text-[#9D224D] font-mono block mb-2">{step.num}</span>
                      <h3 className="text-xl md:text-2xl font-bold text-[#111827] dark:text-white mb-3">{step.title}</h3>
                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>

                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#9D224D] text-white font-bold flex items-center justify-center shadow-lg shadow-[#9D224D]/30 hidden md:flex shrink-0">
                    <span className="w-4 h-4 rounded-full bg-white animate-ping absolute opacity-50"></span>
                    <span className="text-sm">{step.num}</span>
                  </div>

                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
