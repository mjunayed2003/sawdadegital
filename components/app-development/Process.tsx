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
      title: language === 'bn' ? '১. প্রোডাক্ট রিকোয়ারমেন্ট ও আর্কিটেকচার (Architecture)' : '01. Architecture & Tech Stack',
      description: language === 'bn'
        ? 'মোবাইল অ্যাপ ফিচার স্পেসিফিকেশন, ডেটাবেস স্কিমা এবং ক্লাউড এআই মডেল ইন্টিগ্রেশন প্ল্যান।'
        : 'Defining technical requirements, mobile screen flows, relational PostgreSQL database schemas, and AI pipeline routing.',
      align: "left"
    },
    {
      num: "02",
      title: language === 'bn' ? '২. ইউআই প্রোটোটাইপিং ও এআই ট্রেইনিং (Design & AI)' : '02. UI System & Model Tuning',
      description: language === 'bn'
        ? 'মোবাইলের প্রতিটি স্ক্রিন ডিজাইন এবং আপনার নিজস্ব ডেটার ওপর এআই মডেল/চ্যাটবট ট্রেনিং।'
        : 'Designing native iOS/Android screens in Figma and fine-tuning custom AI LLM agents on company domain data.',
      align: "right"
    },
    {
      num: "03",
      title: language === 'bn' ? '৩. ফুলস্ট্যাক অ্যাপ ও ব্যাকএন্ড কোডিং (Development)' : '03. Fullstack Native Engineering',
      description: language === 'bn'
        ? 'React Native/Flutter এ ৬০ FPS ফ্রন্টএন্ড এবং ক্লাউড মাইক্রোসার্ভিস ব্যাকএন্ড ডেভেলপমেন্ট।'
        : 'Coding 60 FPS mobile screens with offline state caching, automated push notifications, and resilient REST/GraphQL APIs.',
      align: "left"
    },
    {
      num: "04",
      title: language === 'bn' ? '৪. অ্যাপ স্টোর সাবমিশন ও লাইভ রিলিজ (Deployment)' : '04. App Store Approval & Launch',
      description: language === 'bn'
        ? 'অ্যাপল অ্যাপ স্টোর ও গুগল প্লে স্টোরে ১০০% অ্যাপ্রুভাল সহ লাইভ পাবলিশিং এবং মনিটরিং।'
        : 'Managing Apple App Store and Google Play Console review passes, automated crash monitoring, and continuous OTA updates.',
      align: "right"
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#161616] relative overflow-hidden transition-colors duration-300" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-24">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#E2E8CE] dark:bg-[#262626] border border-[#ACBFA4]/30 dark:border-white/10 text-[#262626] dark:text-white text-xs font-black tracking-widest mb-4 uppercase shadow-sm">
            {language === 'bn' ? 'অ্যাপ ডেভেলপমেন্ট প্রসেস' : 'ENGINEERING LIFECYCLE'}
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-[#111827] dark:text-white mb-4"
          >
            {language === 'bn' ? 'কনসেপ্ট থেকে অ্যাপ স্টোর রিলিজ' : 'From Concept to App Store Chart'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
          >
            {language === 'bn'
              ? 'একটি সুসংহত ৪-ধাপের প্রকৌশল যা নিশ্চিত করে দ্রুত ও ত্রুটিহীন মোবাইল অ্যাপ ডেলিভারি।'
              : 'A modern fullstack engineering pipeline designed to launch robust, crash-free apps on time.'}
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
