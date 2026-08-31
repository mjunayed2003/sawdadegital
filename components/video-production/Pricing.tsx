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
      name: language === 'bn' ? 'সোশ্যাল মিডিয়া রিলস ও শর্টস' : 'Social Ads & Reels',
      description: language === 'bn' ? 'সোশ্যাল মিডিয়ার জন্য হাই-এনগেজিং শর্ট-ফর্ম ভিডিও।' : 'Perfect for fast-turnaround vertical social campaigns.',
      price: language === 'bn' ? '৳ ১৫,০০০+' : '$300+',
      features: language === 'bn' 
        ? ["৬০-৯০ সেকেন্ডের শর্ট-ফর্ম ভিডিও", "ফাস্ট-পেসড এডিটিং ও ক্যাপশন", "ট্রেন্ডিং ব্যাকগ্রাউন্ড মিউজিক", "১টি ফ্রি রিভিশন", "১০৮০p ও ৪K অপ্টিমাইজড"]
        : ["60-90 Sec Vertical Video", "Fast-Paced Editing & Subtitles", "Licensed Background Music", "1 Round of Revisions", "1080p & 4K Social Exports"],
      buttonBg: "bg-[#111827] dark:bg-white text-white dark:text-[#111827] hover:bg-[#9D224D] dark:hover:bg-[#9D224D] dark:hover:text-white"
    },
    {
      name: language === 'bn' ? 'প্রো কমার্শিয়াল (জনপ্রিয়)' : 'Pro Commercial (Popular)',
      description: language === 'bn' ? 'ব্র্যান্ড প্রমোশন ও বাণিজ্যিক বিজ্ঞাপনের জন্য আদর্শ।' : 'Ideal for corporate presentations & brand storytelling.',
      price: language === 'bn' ? '৳ ৪৫,০০০+' : '$750+',
      isPopular: true,
      features: language === 'bn'
        ? ["২-৩ মিনিটের সিনেমাটিক ভিডিও", "DaVinci Resolve কালার গ্রেডিং", "২D মোশন গ্রাফিক্স ও টাইটেলস", "ভয়েসওভার ও স্টুডিও অডিও মিক্স", "২টি রিভিশন ও প্রফেশনাল লাইটিং"]
        : ["Up to 3-Minute Cinematic Film", "DaVinci Resolve Color Grade", "2D Motion Graphics & Intro", "Studio Voiceover & Sound Mix", "Full Production Lighting & Rig"],
      buttonBg: "bg-[#9D224D] text-white hover:bg-[#7A173A]"
    },
    {
      name: language === 'bn' ? 'ব্র্যান্ড ফিল্ম ও সিনেমাটিক অ্যাড' : 'Brand Film & TV Commercial',
      description: language === 'bn' ? 'বড় প্রতিষ্ঠান ও হাই-এন্ড ব্র্যান্ডের জন্য পূর্ণাঙ্গ প্যাকেজ।' : 'Comprehensive commercial campaigns and films.',
      price: language === 'bn' ? '৳ ৯০,০০০+' : '$1,500+',
      features: language === 'bn'
        ? ["ফুল সিনেমা ক্যামেরা (RED / Sony FX)", "প্রফেশনাল কাস্টিং ও লোকেশন", "৩D ভিজ্যুয়াল এফেক্টস (VFX)", "সিনেমাটিক সাউন্ড ডিজাইন ও স্কোর", "মাল্টি-প্ল্যাটফর্ম হাই-বিটরেট মাস্টার্স"]
        : ["Cinema Rig (RED / Sony FX)", "Professional Casting & Scout", "3D Motion & VFX Compositing", "Bespoke Orchestral Sound Design", "Unlimited Revisions & TV Exports"],
      buttonBg: "bg-[#111827] dark:bg-white text-white dark:text-[#111827] hover:bg-[#9D224D] dark:hover:bg-[#9D224D] dark:hover:text-white"
    },
    {
      name: language === 'bn' ? 'কাস্টম ডকুমেন্টারি' : 'Custom Feature / Event',
      description: language === 'bn' ? 'বড় ইভেন্ট বা কাস্টম প্রজেক্টের জন্য বিশেষ ব্যবস্থা।' : 'Tailored multi-day productions and documentaries.',
      price: language === 'bn' ? 'আলোচনা সাপেক্ষে' : "Let's Talk",
      features: language === 'bn'
        ? ["মাল্টি-ক্যামেরা লাইভ ক্রু", "ড্রোন ও এরিয়াল সিনেমাটোগ্রাফি", "আন্তর্জাতিক শুটিং লজিস্টিকস", "ডেডিকেটেড স্টুডিও ডিরেক্টর"]
        : ["Multi-Camera Live Broadcast", "Licensed Drone 4K Footage", "Full International Logistics", "Dedicated Senior Director"],
      buttonBg: "bg-[#111827] dark:bg-white text-white dark:text-[#111827] hover:bg-[#9D224D] dark:hover:bg-[#9D224D] dark:hover:text-white"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#FAFAFA] dark:bg-[#111111] relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#FCE7F3] dark:bg-[#262626] border border-[#334155]/30 dark:border-white/10 text-[#262626] dark:text-white text-xs font-black tracking-widest mb-4 uppercase shadow-sm">
            {language === 'bn' ? 'স্বচ্ছ ভিডিও প্যাকেজ' : 'TRANSPARENT PRICING'}
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black text-[#111827] dark:text-white mb-6"
          >
            {language === 'bn' ? 'আপনার প্রোডাকশন প্যাকেজ বেছে নিন' : 'Pick your production package'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            {language === 'bn'
              ? 'স্পষ্ট ডেলিভারিবলস এবং স্বচ্ছ বাজেট। কোনো লুকানো চার্জ ছাড়া সিনেমাটিক ভিজ্যুয়াল কোয়ালিটি।'
              : 'Clear scopes, broadcast-grade delivery, and transparent pricing tailored for your brand.'}
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
                <span>{language === 'bn' ? 'এই প্যাকেজটি নিন' : 'Choose Plan'}</span>
                <FaArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
