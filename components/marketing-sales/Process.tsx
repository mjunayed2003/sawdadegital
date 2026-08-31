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
      title: language === 'bn' ? '১. অডিট ও প্রতিযোগী বিশ্লেষণ (Audit)' : '01. Deep Audit & Strategy',
      description: language === 'bn'
        ? 'আপনার বর্তমান সেলস ফানেল, বিজ্ঞাপন ব্যয়, টার্গেটেড অডিয়েন্স ও প্রতিযোগীদের পুঙ্খানুপুঙ্খ বিশ্লেষণ।'
        : 'Deep dive into your current metrics, competitor positioning, ad spend leaks, and high-value customer personas.',
      align: "left"
    },
    {
      num: "02",
      title: language === 'bn' ? '২. ক্রিয়েটিভ ও ফানেল ডেভেলপমেন্ট (Build)' : '02. Funnel & Creative Build',
      description: language === 'bn'
        ? 'উচ্চ কনভার্শনের অ্যাড ক্রিয়েটিভ, আকর্ষণীয় কপিরাইটিং এবং অপ্টিমাইজড ল্যান্ডিং পেজ তৈরি।'
        : 'Designing scroll-stopping ad creatives, copywriting high-converting hooks, and building frictionless landing pages.',
      align: "right"
    },
    {
      num: "03",
      title: language === 'bn' ? '৩. ক্যাম্পেইন লঞ্চ ও স্কেলিং (Launch & Scale)' : '03. Multi-Channel Launch',
      description: language === 'bn'
        ? 'টার্গেটেড বিজ্ঞাপন চালু, বাজেট অপ্টিমাইজেশন এবং বিজয়ী বিজ্ঞাপনগুলোতে বাজেট বৃদ্ধি।'
        : 'Launching targeted campaigns across Meta and Google, killing underperforming ads, and aggressively scaling winning assets.',
      align: "left"
    },
    {
      num: "04",
      title: language === 'bn' ? '৪. রিটেনশন ও লাইভ রিপোর্টিং (Retention)' : '04. Attribution & Retention',
      description: language === 'bn'
        ? 'ইমেইল অটোমেশন, সার্ভার-সাইড ট্র্যাকিং এবং সাপ্তাহিক স্বচ্ছ আরওআই রিপোর্ট প্রদান।'
        : 'Setting up automated email retargeting, server-side attribution, and delivering transparent weekly ROI dashboards.',
      align: "right"
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#161616] relative overflow-hidden transition-colors duration-300" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-24">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#DBEAFE] dark:bg-[#262626] border border-[#1E3A8A]/30 dark:border-white/10 text-[#262626] dark:text-white text-xs font-black tracking-widest mb-4 uppercase shadow-sm">
            {language === 'bn' ? 'গ্রোথ ফ্রেমওয়ার্ক' : 'GROWTH FRAMEWORK'}
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-[#111827] dark:text-white mb-4"
          >
            {language === 'bn' ? 'আমাদের মার্কেটিং ও সেলস পদ্ধতি' : 'Our Systematic Growth Formula'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
          >
            {language === 'bn'
              ? 'অনুমান নয়, নিখুঁত ডেটা অ্যানালিটিক্স ও প্রমাণিত বিজ্ঞাপনী কৌশলে ব্যবসার প্রবৃদ্ধি নিশ্চিত করা।'
              : 'No guesswork. A proven 4-stage growth engine engineered to scale revenue predictably.'}
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
                    <div className="bg-[#FAFAFA] dark:bg-[#1a1a1a] p-8 md:p-10 rounded-[2rem] border border-[#DBEAFE] dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300">
                      <span className="text-3xl font-black text-[#D4AF37] font-mono block mb-2">{step.num}</span>
                      <h3 className="text-xl md:text-2xl font-bold text-[#111827] dark:text-white mb-3">{step.title}</h3>
                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>

                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#D4AF37] text-white font-bold flex items-center justify-center shadow-lg shadow-[#D4AF37]/30 hidden md:flex shrink-0">
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
