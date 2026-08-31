"use client";

import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';

export default function Process() {
  const { language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      num: "01",
      title: language === 'bn' ? '১. ইউজার রিসার্চ ও ইনফরমেশন আর্কিটেকচার (Empathize)' : '01. User Research & IA',
      description: language === 'bn'
        ? 'ব্যবহারকারীর মানসিকতা বোঝা, ইউজার পারসোনা তৈরি এবং সাইটম্যাপ/ইনফরমেশন আর্কিটেকচার চূড়ান্তকরণ।'
        : 'User interviews, competitive analysis, customer journey mapping, and building scalable information architecture.',
      align: "left"
    },
    {
      num: "02",
      title: language === 'bn' ? '২. লো-ফাই ওয়্যারফ্রেম ও ইউজার ফ্লো (Wireframes)' : '02. Low-Fi Wireframes & Flow',
      description: language === 'bn'
        ? 'প্রতিটি স্ক্রিনের মৌলিক গঠন ও নেভিগেশন ফ্লো তৈরি করে অপ্রয়োজনীয় জটিলতা দূর করা।'
        : 'Creating low-fidelity wireframes and user journeys to test layout clarity and eliminate conversion friction early.',
      align: "right"
    },
    {
      num: "03",
      title: language === 'bn' ? '৩. হাই-ফাই ফিগমা ডিজাইন ও টোকেনস (UI Design)' : '03. High-Fi Design System',
      description: language === 'bn'
        ? 'ফিগমায় পিক্সেল-পারফেক্ট ডিজাইন, কালার/টাইপোগ্রাফি টোকেন এবং সম্পূর্ণ ডিজাইন সিস্টেম নির্মাণ।'
        : 'Crafting pixel-perfect UI screens, design tokens, light/dark modes, and modular auto-layout component libraries.',
      align: "left"
    },
    {
      num: "04",
      title: language === 'bn' ? '৪. ইন্টারেক্টিভ প্রোটোটাইপ ও ডেভ হ্যান্ডঅফ (Handoff)' : '04. Prototype & Dev Handoff',
      description: language === 'bn'
        ? 'ক্লিকেবল প্রোটোটাইপ টেস্টিং এবং ডেভেলপারদের জন্য পরিষ্কার CSS স্পেসিফিকেশন ও সম্পদ প্রদান।'
        : 'Building realistic clickable prototypes, conducting usability testing, and generating clean specs for developers.',
      align: "right"
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#161616] relative overflow-hidden transition-colors duration-300" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-24">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#FCE7F3] dark:bg-[#262626] border border-[#334155]/30 dark:border-white/10 text-[#262626] dark:text-white text-xs font-black tracking-widest mb-4 uppercase shadow-sm">
            {language === 'bn' ? 'ইউআই/ইউএক্স প্রসেস' : 'DESIGN METHODOLOGY'}
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-[#111827] dark:text-white mb-4"
          >
            {language === 'bn' ? 'আইডিয়া থেকে পিক্সেল-পারফেক্ট ইউআই' : 'From Wireframe to Production UI'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
          >
            {language === 'bn'
              ? 'একটি সুশৃঙ্খল ডিজাইন ফ্রেমওয়ার্ক যা ইউজার এনগেজমেন্ট ও ব্যবসায়িক রূপান্তর নিশ্চিত করে।'
              : 'A battle-tested 4-stage UI/UX methodology engineered to maximize user delight and retention.'}
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
