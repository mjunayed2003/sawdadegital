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
      title: language === 'bn' ? '১. টেকনিক্যাল অডিট ও কিওয়ার্ড রিসার্চ (Audit)' : '01. Technical Audit & Keyword Map',
      description: language === 'bn'
        ? 'সাইটের সকল ক্রলিং ও স্পিড এরর শনাক্তকরণ এবং লাভজনক হাই-ইনটেন্ট কিওয়ার্ড ম্যাপিং।'
        : 'Comprehensive website health audit, fixing Core Web Vitals, and identifying high-intent commercial keywords.',
      align: "left"
    },
    {
      num: "02",
      title: language === 'bn' ? '২. অন-পেজ ও কনটেন্ট অপ্টিমাইজেশন (On-Page)' : '02. On-Page & Content Architecture',
      description: language === 'bn'
        ? 'মেটা ট্যাগ, হেডিং স্ট্রাকচার, স্কিমা ডেটা এবং আকর্ষণীয় এসইও-বান্ধব কনটেন্ট অপ্টিমাইজ।'
        : 'Restructuring metadata, schema structured data, internal linking silos, and semantic topical content clusters.',
      align: "right"
    },
    {
      num: "03",
      title: language === 'bn' ? '৩. অফ-পেজ ও অথরিটি ব্যাকলিংক (Off-Page)' : '03. Authority Link Building & PR',
      description: language === 'bn'
        ? 'হাই-ডোমেইন অথরিটি ওয়েবসাইট থেকে প্রাসঙ্গিক ব্যাকলিংক তৈরি ও ডিজিটাল পিআর ক্যাম্পেইন।'
        : 'Earning editorial backlinks from high DR 70+ industry publications to aggressively elevate domain authority.',
      align: "left"
    },
    {
      num: "04",
      title: language === 'bn' ? '৪. র‍্যাঙ্কিং ট্র্যাকিং ও গুগল অ্যাডস স্কেলিং (Growth)' : '04. Search Dominance & PPC Scale',
      description: language === 'bn'
        ? 'গুগলে কিওয়ার্ডের অবস্থান মনিটরিং এবং গুগল অ্যাডস অপ্টিমাইজেশনের মাধ্যমে আরওআই বৃদ্ধি।'
        : 'Continuous keyword rank monitoring, Google Search Ads optimization, and monthly transparent traffic dashboards.',
      align: "right"
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#161616] relative overflow-hidden transition-colors duration-300" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-24">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#FCE7F3] dark:bg-[#262626] border border-[#334155]/30 dark:border-white/10 text-[#262626] dark:text-white text-xs font-black tracking-widest mb-4 uppercase shadow-sm">
            {language === 'bn' ? 'এসইও প্রসেস' : 'RANKING FORMULA'}
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-[#111827] dark:text-white mb-4"
          >
            {language === 'bn' ? 'গুগলের শীর্ষ স্থানে পৌঁছানোর ৪টি ধাপ' : '4 Steps to Google #1 Rank'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
          >
            {language === 'bn'
              ? 'হোয়াইট-হ্যাট কৌশল ও টেকনিক্যাল পারফেকশনের মাধ্যমে দীর্ঘস্থায়ী অর্গানিক গ্রোথ।'
              : 'Sustainable white-hat methodologies engineered for long-term organic authority.'}
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
