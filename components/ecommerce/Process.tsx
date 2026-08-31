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
      title: language === 'bn' ? '১. স্টোর আর্কিটেকচার ও ক্যাটালগ প্ল্যান (Planning)' : '01. Store Architecture & Catalog',
      description: language === 'bn'
        ? 'প্রোডাক্ট ক্যাটাগরি, ভ্যারিয়েন্টস, শিপিং রুলস এবং পেমেন্ট গেটওয়ে সেটআপ প্ল্যান তৈরি।'
        : 'Designing database catalog structures, product variants, shipping fee matrix, and payment gateway routing.',
      align: "left"
    },
    {
      num: "02",
      title: language === 'bn' ? '২. হাই-কনভার্শন স্টোরফ্রন্ট ডিজাইন (UI/UX)' : '02. Conversion Storefront UI',
      description: language === 'bn'
        ? 'মোবাইল-বান্ধব প্রোডাক্ট পেজ, ১-ক্লিক চেকআউট এবং আকর্ষণীয় হোমপেজ ডিজাইন।'
        : 'Crafting frictionless mobile-first product cards, dynamic cart sliders, and clean 2-step checkout flows.',
      align: "right"
    },
    {
      num: "03",
      title: language === 'bn' ? '৩. পেমেন্ট, কুরিয়ার ও ইনভেন্টরি ইন্টিগ্রেশন (Build)' : '03. Payment & Courier API Sync',
      description: language === 'bn'
        ? 'বিকাশ, নগদ, ভিসা এবং Steadfast/Pathao কুরিয়ার এপিআইয়ের সাথে অটোমেটেড সংযোগ।'
        : 'Integrating bKash/Nagad automated IPN payment gateways, POS inventory sync, and Steadfast courier booking APIs.',
      align: "left"
    },
    {
      num: "04",
      title: language === 'bn' ? '৪. টেস্ট অর্ডার ও লাইভ লঞ্চ (Go Live)' : '04. Stress Test & Store Launch',
      description: language === 'bn'
        ? 'রিয়েল মানি পেমেন্ট টেস্ট, এসএমএস নোটিফিকেশন চেক এবং ক্লাউড হোস্টিংয়ে লাইভ লঞ্চ।'
        : 'End-to-end sandbox & live checkout testing, automated SMS order confirmation, and production CDN scaling.',
      align: "right"
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#161616] relative overflow-hidden transition-colors duration-300" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-24">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#FCE7F3] dark:bg-[#262626] border border-[#334155]/30 dark:border-white/10 text-[#262626] dark:text-white text-xs font-black tracking-widest mb-4 uppercase shadow-sm">
            {language === 'bn' ? 'ই-কমার্স প্রসেস' : 'DEVELOPMENT PIPELINE'}
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-[#111827] dark:text-white mb-4"
          >
            {language === 'bn' ? 'আইডিয়া থেকে লাইভ ই-কমার্স স্টোর' : 'How We Build Profitable Stores'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
          >
            {language === 'bn'
              ? 'একটি নির্ভরযোগ্য ও দ্রুতগতির ই-কমার্স প্ল্যাটফর্ম তৈরির ৪-ধাপের প্রকৌশল।'
              : 'A battle-tested 4-step engineering blueprint designed to launch high-converting online stores.'}
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
