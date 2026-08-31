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
      name: language === 'bn' ? 'স্টার্টার লোকাল এসইও' : 'Starter Local SEO',
      description: language === 'bn' ? 'লোকাল ব্যবসা ও গুগল ম্যাপসে শীর্ষস্থানের জন্য।' : 'Perfect for local service businesses aiming for Google Maps Top 3.',
      price: language === 'bn' ? '৳ ১৫,০০০/মাস' : '$300/mo',
      features: language === 'bn' 
        ? ["গুগল বিজনেস প্রোফাইল (GMB) অপ্টিমাইজ", "১০টি টার্গেটেড লোকাল কিওয়ার্ড", "অন-পেজ মেটা ট্যাগ ফিক্সিং", "লোকাল সাইটেশন বিল্ডিং", "মাসিক র‍্যাঙ্ক ট্র্যাকিং রিপোর্ট"]
        : ["Google Business Profile Setup", "10 Targeted Local Keywords", "On-Page Metadata Optimization", "Local Directory Citations", "Monthly Keyword Rank Report"],
      buttonBg: "bg-[#111827] dark:bg-white text-white dark:text-[#111827] hover:bg-[#9D224D] dark:hover:bg-[#9D224D] dark:hover:text-white"
    },
    {
      name: language === 'bn' ? 'প্রো গ্রোথ এসইও (জনপ্রিয়)' : 'Pro Organic (Popular)',
      description: language === 'bn' ? 'গুগল সার্চে অর্গানিক ট্রাফিক বহুগুণ বৃদ্ধির জন্য।' : 'Ideal for growing brands looking to dominate Google organic search.',
      price: language === 'bn' ? '৳ ৩৫,০০০/মাস' : '$650/mo',
      isPopular: true,
      features: language === 'bn'
        ? ["২৫টি হাই-ইনটেন্ট কমার্শিয়াল কিওয়ার্ড", "ফুল টেকনিক্যাল এসইও ও স্পিড ফিক্স", "হাই DA/DR কোয়ালিটি ব্যাকলিংকস", "কনটেন্ট অপ্টিমাইজেশন ও স্কিমা", "গুগল সার্চ কনসোল অডিট ও ড্যাশবোর্ড"]
        : ["25 High-Intent Commercial Keywords", "Full Core Web Vitals & Speed Fix", "High DA/DR Editorial Backlinks", "Content Silos & Schema Architecture", "Google Search Console Live Dashboard"],
      buttonBg: "bg-[#9D224D] text-white hover:bg-[#7A173A]"
    },
    {
      name: language === 'bn' ? 'গুগল অ্যাডস (PPC) + এসইও' : 'Google Ads + SEO Suite',
      description: language === 'bn' ? 'তাৎক্ষণিক পেইড ট্রাফিক ও দীর্ঘমেয়াদী অর্গানিক র‍্যাঙ্ক।' : 'Combined aggressive search ads + organic SEO dominance.',
      price: language === 'bn' ? '৳ ৬০,০০০/মাস' : '$1,100/mo',
      features: language === 'bn'
        ? ["গুগল সার্চ ও শপিং অ্যাডস ক্যাম্পেইন", "নেগেটিভ কিওয়ার্ড ও কোয়ালিটি স্কোর ৯/১০", "৫০+ কিওয়ার্ড র‍্যাঙ্কিং স্ট্র্যাটেজি", "কনভার্সন ট্র্যাকিং ও ল্যান্ডিং পেজ অডিট", "সাপ্তাহিক লাইভ মিটিং ও আরওআই রিপোর্ট"]
        : ["Google Search & Shopping Ads Setup", "Quality Score 9/10 Ad Management", "50+ Keyword Ranking Strategy", "Conversion Tracking & CRO Audit", "Weekly Strategy Call & Live Reporting"],
      buttonBg: "bg-[#111827] dark:bg-white text-white dark:text-[#111827] hover:bg-[#9D224D] dark:hover:bg-[#9D224D] dark:hover:text-white"
    },
    {
      name: language === 'bn' ? 'এন্টারপ্রাইজ / ই-কমার্স এসইও' : 'Enterprise E-Commerce',
      description: language === 'bn' ? 'হাজার হাজার প্রোডাক্ট যুক্ত বড় প্ল্যাটফর্মের জন্য।' : 'Full-scale SEO architecture for large e-commerce catalogs.',
      price: language === 'bn' ? 'আলোচনা সাপেক্ষে' : "Custom Quote",
      features: language === 'bn'
        ? ["আনলিমিটেড প্রোডাক্ট ও ক্যাটাগরি এসইও", "গুগল মার্চেন্ট সেন্টার অপ্টিমাইজেশন", "আন্তর্জাতিক মাল্টি-ল্যাঙ্গুয়েজ এসইও", "ডেডিকেটেড সিনিয়র এসইও ডিরেক্টর"]
        : ["Unlimited Product & Category SEO", "Google Merchant Center Integration", "International Hreflang Architecture", "Dedicated Senior SEO Strategist"],
      buttonBg: "bg-[#111827] dark:bg-white text-white dark:text-[#111827] hover:bg-[#9D224D] dark:hover:bg-[#9D224D] dark:hover:text-white"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#FAFAFA] dark:bg-[#111111] relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#FCE7F3] dark:bg-[#262626] border border-[#334155]/30 dark:border-white/10 text-[#262626] dark:text-white text-xs font-black tracking-widest mb-4 uppercase shadow-sm">
            {language === 'bn' ? 'স্বচ্ছ এসইও প্যাকেজ' : 'TRANSPARENT PRICING'}
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black text-[#111827] dark:text-white mb-6"
          >
            {language === 'bn' ? 'আপনার এসইও প্যাকেজ নির্বাচন করুন' : 'Pick your search package'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            {language === 'bn'
              ? 'গুগলে স্থায়ীভাবে প্রথম সারিতে থাকার জন্য স্বচ্ছ ও পরিমাপযোগ্য এসইও প্ল্যান।'
              : 'Proven search strategies that deliver long-term organic traffic without black-hat risks.'}
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
