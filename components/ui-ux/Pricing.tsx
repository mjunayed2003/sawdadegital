"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';
import { FaCheck, FaArrowRight } from 'react-icons/fa6';
import Link from 'next/link';

export default function Pricing() {
  const { language } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const pricingPlans = [
    {
      name: language === 'bn' ? 'স্টার্টার ল্যান্ডিং পেজ UI' : 'Starter Landing Page',
      description: language === 'bn' ? 'হাই-কনভার্শন ল্যান্ডিং পেজ বা প্রোডাক্ট শোকেসের জন্য।' : 'Perfect for modern high-converting product landing pages.',
      price: language === 'bn' ? '৳ ১৫,০০০' : '৳ 15,000',
      features: language === 'bn' 
        ? ["১টি কাস্টম ল্যান্ডিং পেজ ডিজাইন (Desktop & Mobile)", "ফিগমা কম্পোনেন্ট ও কালার টোকেন", "ক্লিকেবল ইন্টারঅ্যাক্টিভ প্রোটোটাইপ", "২টি ফ্রি রিভিশন", "ডেভেলপার হ্যান্ডঅফ এসেটস"]
        : ["1 Custom Landing Page (Desktop & Mobile)", "Figma Component & Color Tokens", "Clickable Interactive Prototype", "2 Free Revision Rounds", "Clean Developer Handoff Assets"],
      buttonBg: "bg-[#111827] dark:bg-white text-white dark:text-[#111827] hover:bg-[#9D224D] dark:hover:bg-[#9D224D] dark:hover:text-white"
    },
    {
      name: language === 'bn' ? 'মোবাইল বা ওয়েব অ্যাপ UI (জনপ্রিয়)' : 'Full Mobile/Web App (Popular)',
      description: language === 'bn' ? 'সম্পূর্ণ মোবাইল অ্যাপ বা ওয়েব অ্যাপের ইন্টারফেস ডিজাইন।' : 'Ideal for modern mobile apps and SaaS web platforms.',
      price: language === 'bn' ? '৳ ৩০,০০০' : '৳ 30,000',
      isPopular: true,
      features: language === 'bn'
        ? ["৮-১২টি স্ক্রিনের সম্পূর্ণ ইউআই/ইউএক্স", "সম্পূর্ণ ফিগমা ডিজাইন সিস্টেম (Design System)", "ডার্ক ও লাইট মোড ভ্যারিয়েন্টস", "ইউজার জার্নি ও ওয়্যারফ্রেম টেস্টিং", "আনলিমিটেড প্রোটোটাইপ রিভিশন"]
        : ["8-12 Complete UI Screens", "Full Modular Figma Design System", "Dark & Light Mode Variants", "User Journey Flow & Usability Audit", "Unlimited Interactive Prototype Tweaks"],
      buttonBg: "bg-[#9D224D] text-white hover:bg-[#7A173A]"
    },
    {
      name: language === 'bn' ? 'এন্টারপ্রাইজ SaaS ড্যাশবোর্ড' : 'Enterprise SaaS Portal',
      description: language === 'bn' ? 'জটিল ডেটা প্ল্যাটফর্ম ও মাল্টি-রোল SaaS সিস্টেম।' : 'Heavy data dashboards and multi-tenant platforms.',
      price: language === 'bn' ? '৳ ৬০,০০০+' : '৳ 60,000+',
      features: language === 'bn'
        ? ["২০+ জটিল ড্যাশবোর্ড স্ক্রিন ও টেবিল", "অটো-লেআউট ভ্যারিয়েবল ও টোকেন আর্কিটেকচার", "মাইক্রো-অ্যানিমেশন ও স্টেট ভেরিয়েশনস", "ইউজার ইন্টারভিউ ও হিউরিস্টিক অডিট", "ডেভেলপারদের সাথে ডিরেক্ট স্ল্যাক সাপোর্ট"]
        : ["20+ Complex Dashboard & Table Screens", "Advanced Auto-Layout & Variables", "Fluid Micro-Interactions & States", "In-Depth Usability & Heuristic Audit", "Direct Engineering Slack Collaboration"],
      buttonBg: "bg-[#111827] dark:bg-white text-white dark:text-[#111827] hover:bg-[#9D224D] dark:hover:bg-[#9D224D] dark:hover:text-white"
    },
    {
      name: language === 'bn' ? 'ইউএক্স অডিট ও রিডিজাইন' : 'UX Audit & Conversion CRO',
      description: language === 'bn' ? 'চলমান অ্যাপ বা ওয়েবসাইটের ড্রপ-অফ কমানোর জন্য।' : 'Fixing drop-offs and redesigning outdated interfaces.',
      price: language === 'bn' ? '৳ ২৫,০০০' : '৳ 25,000',
      features: language === 'bn'
        ? ["সম্পূর্ণ হিটম্যাপ ও ড্রপ-অফ অডিট", "ফ্রিকশন দূর করার ওয়্যারফ্রেম রিডিজাইন", "কনভার্সন বৃদ্ধির অ্যাকশনেবল রিপোর্ট", "১-অন-১ স্ট্র্যাটেজি কল"]
        : ["Full Funnel Friction & Drop-Off Audit", "Frictionless Checkout Redesign", "Actionable Heuristic Report PDF", "1-on-1 Executive Strategy Walkthrough"],
      buttonBg: "bg-[#111827] dark:bg-white text-white dark:text-[#111827] hover:bg-[#9D224D] dark:hover:bg-[#9D224D] dark:hover:text-white"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#FAFAFA] dark:bg-[#111111] relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#FCE7F3] dark:bg-[#262626] border border-[#334155]/30 dark:border-white/10 text-[#262626] dark:text-white text-xs font-black tracking-widest mb-4 uppercase shadow-sm">
            {language === 'bn' ? 'স্বচ্ছ ডিজাইন প্যাকেজ' : 'TRANSPARENT PRICING'}
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black text-[#111827] dark:text-white mb-6"
          >
            {language === 'bn' ? 'আপনার ইউআই/ইউএক্স প্যাকেজ নির্বাচন করুন' : 'Pick your UI/UX design package'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            {language === 'bn'
              ? 'স্পষ্ট স্ক্রিন কাউন্ট, সম্পূর্ণ ফিগমা ডিজাইন ফাইল এবং কোডিং ফ্রেন্ডলি হ্যান্ডঅফ।'
              : 'Clear scopes, fully organized Figma design systems, and seamless developer handoff.'}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className={`rounded-[2.5rem] p-8 flex flex-col justify-between transition-all duration-500 relative border ${
                plan.isPopular 
                  ? 'bg-white dark:bg-[#1a1a1a] border-[#9D224D] shadow-2xl scale-[1.03] z-10' 
                  : 'bg-white dark:bg-[#1a1a1a] border-[#FCE7F3] dark:border-white/10 shadow-md hover:shadow-xl'
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#9D224D] text-white text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                  {language === 'bn' ? 'সবচেয়ে জনপ্রিয়' : 'Most Popular'}
                </span>
              )}

              <div>
                <h3 className="text-xl font-bold text-[#111827] dark:text-white mb-2">{plan.name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-6 min-h-[36px]">{plan.description}</p>
                <div className="text-3xl sm:text-4xl font-black text-[#9D224D] mb-6">{plan.price}</div>

                <div className="space-y-3 pt-6 border-t border-gray-100 dark:border-white/10 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-2.5 text-xs text-gray-700 dark:text-gray-300">
                      <FaCheck className="w-3.5 h-3.5 text-[#9D224D] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className={`w-full py-3.5 rounded-full font-bold text-center text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-md ${plan.buttonBg}`}
              >
                <span>{language === 'bn' ? 'এই প্যাকেজটি নিন' : 'Choose Package'}</span>
                <FaArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
