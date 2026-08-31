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
      title: language === 'bn' ? '১. রিকোয়ারমেন্ট ও রিসার্চ (Discover)' : '01. Discover & Strategy',
      description: language === 'bn'
        ? 'আপনার ব্র্যান্ডের লক্ষ্য, অডিয়েন্স এবং প্রযুক্তিগত চাহিদা পুঙ্খানুপুঙ্খভাবে বিশ্লেষণ করে একটি শক্তিশালী ব্লুপ্রিন্ট তৈরি করা।'
        : 'We dive deep into your brand, objectives, and target audience to formulate a high-converting digital blueprint.',
      align: "left"
    },
    {
      num: "02",
      title: language === 'bn' ? '২. ইউআই/ইউএক্স প্রোটোটাইপিং (Design)' : '02. UI/UX Architecture',
      description: language === 'bn'
        ? 'পিক্সেল-পারফেক্ট ফিগমা ডিজাইন, ইন্টারেক্টিভ প্রোটোটাইপ এবং ইউজার-ফ্রেন্ডলি ইন্টারফেস আর্কিটেকচার তৈরি।'
        : 'Crafting intuitive, aesthetically stunning interfaces that maximize conversions and delight users on every device.',
      align: "right"
    },
    {
      num: "03",
      title: language === 'bn' ? '৩. সফটওয়্যার ও ওয়েব ডেভেলপমেন্ট (Build)' : '03. Full-Stack Engineering',
      description: language === 'bn'
        ? 'Next.js, TypeScript এবং আধুনিক ক্লাউড স্ট্যাক ব্যবহার করে দ্রুতগতির ও সুরক্ষিত অ্যাপ্লিকেশন ডেভেলপমেন্ট।'
        : 'Developing robust, scalable solutions using cutting-edge technologies (Next.js, TypeScript) and clean code best practices.',
      align: "left"
    },
    {
      num: "04",
      title: language === 'bn' ? '৪. কোয়ালিটি টেস্টিং ও লঞ্চ (Launch & Scale)' : '04. QA Testing & Go-Live',
      description: language === 'bn'
        ? 'নিখুঁত কোয়ালিটি টেস্টিং, স্পিড অপ্টিমাইজেশন এবং সফল ডেপ্লয়মেন্টের পর নিরবচ্ছিন্ন সাপোর্ট।'
        : 'Rigorous automated testing, speed optimization, and seamless cloud deployment with dedicated post-launch support.',
      align: "right"
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#161616] relative overflow-hidden transition-colors duration-300" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-24">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#FCE7F3] dark:bg-[#262626] border border-[#334155]/30 dark:border-white/10 text-[#262626] dark:text-white text-xs font-black tracking-widest mb-4 uppercase shadow-sm">
            {language === 'bn' ? 'আমাদের কার্যপ্রণালী' : 'OUR WORKFLOW'}
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-[#111827] dark:text-white mb-4"
          >
            {language === 'bn' ? 'প্ল্যানিং থেকে সফল লঞ্চ পর্যন্ত' : 'From Kickoff to Launch'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
          >
            {language === 'bn'
              ? 'একটি সুশৃঙ্খল ও প্রমাণিত ৪-ধাপের প্রক্রিয়া যা সময়ের আগেই বিশ্বমানের ফলাফল নিশ্চিত করে।'
              : 'A battle-tested 4-step framework designed to deliver high-impact results with zero friction.'}
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-8 bottom-8 w-1 bg-gray-100 dark:bg-white/10 hidden md:block" />
          
          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16`}>
                  
                  {/* Content Card */}
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

                  {/* Center Node */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#9D224D] text-white font-bold flex items-center justify-center shadow-lg shadow-[#9D224D]/30 hidden md:flex shrink-0">
                    <span className="w-4 h-4 rounded-full bg-white animate-ping absolute opacity-50"></span>
                    <span className="text-sm">{step.num}</span>
                  </div>

                  {/* Empty Spacer */}
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
