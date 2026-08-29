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
      title: language === 'bn' ? '১. ব্র্যান্ড ডিসকভারি ও মুডবোর্ড (Discovery)' : '01. Brand Discovery & Research',
      description: language === 'bn'
        ? 'আপনার ব্র্যান্ডের উদ্দেশ্য, ব্যক্তিত্ব, টার্গেট অডিয়েন্স এবং ভিজ্যুয়াল মুডবোর্ড তৈরি।'
        : 'Exploring brand values, core audience emotions, market competitors, and curating collaborative visual moodboards.',
      align: "left"
    },
    {
      num: "02",
      title: language === 'bn' ? '২. কনসেপ্ট স্কেচিং ও ভেক্টর আর্ট (Concepts)' : '02. Concept Sketching & Vectoring',
      description: language === 'bn'
        ? 'একাধিক ইউনিক কনসেপ্ট স্কেচ করা এবং অ্যাডোবি ইলাস্ট্রেটরে নিখুঁত জ্যামিতিক ভেক্টরে রূপান্তর।'
        : 'Drafting bespoke geometric concept variations and refining precision vectors using mathematical grid alignments.',
      align: "right"
    },
    {
      num: "03",
      title: language === 'bn' ? '৩. কালার প্যালেট ও ব্র্যান্ড সিস্টেম (System)' : '03. Identity System & 3D Mockups',
      description: language === 'bn'
        ? 'কালার সাইকোলজি অনুযায়ী প্যালেট নির্ধারণ, টাইপোগ্রাফি পেয়ারিং এবং রিয়েল ৩D মকআপ তৈরি।'
        : 'Developing typography pairing, tailored color palettes, stationery layouts, and photorealistic 3D product mockups.',
      align: "left"
    },
    {
      num: "04",
      title: language === 'bn' ? '৪. মাস্টার ফাইলস ও ব্র্যান্ড বুক (Delivery)' : '04. Master Assets & Brand Book',
      description: language === 'bn'
        ? 'প্রিন্ট ও ডিজিটালের জন্য ভেক্টর ফাইল (AI, SVG, EPS, PNG) এবং সম্পূর্ণ ব্র্যান্ড গাইডলাইন ডেলিভারি।'
        : 'Exporting print-ready CMYK and digital RGB master files (AI, SVG, EPS, PDF, PNG) with full IP copyright handover.',
      align: "right"
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#161616] relative overflow-hidden transition-colors duration-300" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-24">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#E2E8CE] dark:bg-[#262626] border border-[#ACBFA4]/30 dark:border-white/10 text-[#262626] dark:text-white text-xs font-black tracking-widest mb-4 uppercase shadow-sm">
            {language === 'bn' ? 'ডিজাইন প্রসেস' : 'CREATIVE PROCESS'}
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-[#111827] dark:text-white mb-4"
          >
            {language === 'bn' ? 'কনসেপ্ট থেকে আইকনিক ব্র্যান্ড' : 'Crafting Iconic Brand Marks'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
          >
            {language === 'bn'
              ? 'একটি সুপরিকল্পিত ৪-ধাপের ডিজাইন ওয়ার্কফ্লো যা প্রতিটি ব্র্যান্ডের অনন্য পরিচয় প্রতিষ্ঠা করে।'
              : 'A rigorous 4-step creative journey that transforms abstract vision into timeless brand leadership.'}
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
                    <div className="bg-[#FAFAFA] dark:bg-[#1a1a1a] p-8 md:p-10 rounded-[2rem] border border-[#E2E8CE] dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300">
                      <span className="text-3xl font-black text-[#FF7F11] font-mono block mb-2">{step.num}</span>
                      <h3 className="text-xl md:text-2xl font-bold text-[#111827] dark:text-white mb-3">{step.title}</h3>
                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>

                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#FF7F11] text-white font-bold flex items-center justify-center shadow-lg shadow-[#FF7F11]/30 hidden md:flex shrink-0">
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
