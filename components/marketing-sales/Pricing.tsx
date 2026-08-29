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
      name: language === 'bn' ? 'স্টার্টার সোশ্যাল গ্রোথ' : 'Starter Growth',
      description: language === 'bn' ? 'সোশ্যাল মিডিয়া উপস্থিতি ও ব্র্যান্ডিং শুরুর জন্য।' : 'Perfect for small businesses starting with paid ads & social.',
      price: language === 'bn' ? '৳ ২০,০০০/মাস' : '$400/mo',
      features: language === 'bn' 
        ? ["১২টি কাস্টম সোশ্যাল পোস্ট ও রিলস", "মেটা অ্যাডস সেটআপ ও মনিটরিং", "বেসিক অডিয়েন্স টার্গেটিং", "কমিউনিটি ম্যানেজমেন্ট", "মাসিক পারফরম্যান্স রিপোর্ট"]
        : ["12 Custom Social Posts & Reels", "Meta Ads Setup & Daily Monitoring", "Targeted Audience Research", "Basic Community Moderation", "Monthly ROI & Growth Report"],
      buttonBg: "bg-[#111827] dark:bg-white text-white dark:text-[#111827] hover:bg-[#FF7F11] dark:hover:bg-[#FF7F11] dark:hover:text-white"
    },
    {
      name: language === 'bn' ? 'প্রো স্কেলিং প্যাকেজ (জনপ্রিয়)' : 'Pro Growth (Popular)',
      description: language === 'bn' ? 'দ্রুত বিক্রি ও লিড বৃদ্ধির জন্য কমপ্লিট প্যাকেজ।' : 'Ideal for growing brands scaling paid customer acquisition.',
      price: language === 'bn' ? '৳ ৫০,০০০/মাস' : '$950/mo',
      isPopular: true,
      features: language === 'bn'
        ? ["Google ও Meta মাল্টি-চ্যানেল অ্যাডস", "২০টি ক্রিয়েটিভ ডিজাইন ও কপিরাইটিং", "A/B ক্রিয়েটিভ টেস্টিং ও ফানেল অডিট", "সার্ভার-সাইড ট্র্যাকিং ও রি-টার্গেটিং", "সাপ্তাহিক লাইভ মিটিং ও ড্যাশবোর্ড"]
        : ["Meta & Google Multi-Channel Ads", "20 High-Converting Ad Creatives", "Weekly A/B Split Testing", "Server-Side Tracking (CAPI)", "Weekly Strategy Call & Live Dashboard"],
      buttonBg: "bg-[#FF7F11] text-white hover:bg-[#e66a00]"
    },
    {
      name: language === 'bn' ? 'এন্টারপ্রাইজ সেলস ইঞ্জিন' : 'Enterprise Revenue',
      description: language === 'bn' ? 'বড় ব্র্যান্ড ও উচ্চ বাজেটের ক্যাম্পেইন স্কেলিং।' : 'Comprehensive acquisition & lifecycle marketing engine.',
      price: language === 'bn' ? '৳ ১,০০,০০০+/মাস' : '$1,800+/mo',
      features: language === 'bn'
        ? ["সীমাহীন অ্যাড ক্যাম্পেইন স্কেলিং", "ফুল-ফানেল ল্যান্ডিং পেজ CRO", "ইমেইল ও SMS ড্রিপ অটোমেশন", "ইনফ্লুয়েন্সার ও UGC কোলাবোরেশন", "ডেডিকেটেড চিফ গ্রোথ অফিসার"]
        : ["Unlimited Ad Spend Management", "Custom High-Converting Landing Page", "Full Klaviyo/Email Automation", "Influencer & UGC Outreach", "Dedicated Senior Growth Director"],
      buttonBg: "bg-[#111827] dark:bg-white text-white dark:text-[#111827] hover:bg-[#FF7F11] dark:hover:bg-[#FF7F11] dark:hover:text-white"
    },
    {
      name: language === 'bn' ? 'কাস্টম গ্রোথ অডিট' : 'Custom / B2B Pipeline',
      description: language === 'bn' ? 'বিশেষ বি২বি বা কাস্টম বিজনেস মডেলের জন্য।' : 'Bespoke high-ticket B2B outreach & omnichannel strategy.',
      price: language === 'bn' ? 'আলোচনা সাপেক্ষে' : "Custom Quote",
      features: language === 'bn'
        ? ["বি২বি লিঙ্কডইন আউটরিচ অটোমেশন", "ওয়েবিনার ও হাই-টিকেট সেলস ফানেল", "কাস্টম CRM ইন্টিগ্রেশন", "ফুল টিম ট্রেনিং ও গাইডেন্স"]
        : ["LinkedIn Cold Outreach Engine", "Webinar & High-Ticket Funnel", "HubSpot / Salesforce Integration", "Direct Executive Advisory"],
      buttonBg: "bg-[#111827] dark:bg-white text-white dark:text-[#111827] hover:bg-[#FF7F11] dark:hover:bg-[#FF7F11] dark:hover:text-white"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#FAFAFA] dark:bg-[#111111] relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#E2E8CE] dark:bg-[#262626] border border-[#ACBFA4]/30 dark:border-white/10 text-[#262626] dark:text-white text-xs font-black tracking-widest mb-4 uppercase shadow-sm">
            {language === 'bn' ? 'স্বচ্ছ মার্কেটিং প্যাকেজ' : 'TRANSPARENT PRICING'}
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black text-[#111827] dark:text-white mb-6"
          >
            {language === 'bn' ? 'আপনার মার্কেটিং প্যাকেজ নির্বাচন করুন' : 'Pick your marketing package'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            {language === 'bn'
              ? 'স্পষ্ট আরওআই ও পরিমাপযোগ্য বিক্রয় বৃদ্ধি। কোনো লুকানো চার্জ ছাড়া স্বচ্ছ পারফরম্যান্স মার্কেটিং।'
              : 'Measurable acquisition, clear deliverables, and predictable revenue growth for your brand.'}
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
                  ? 'bg-white dark:bg-[#1a1a1a] border-[#FF7F11] shadow-2xl scale-[1.03] z-10' 
                  : 'bg-white dark:bg-[#1a1a1a] border-[#E2E8CE] dark:border-white/10 shadow-md hover:shadow-xl'
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#FF7F11] text-white text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                  {language === 'bn' ? 'সবচেয়ে জনপ্রিয়' : 'Most Popular'}
                </span>
              )}

              <div>
                <h3 className="text-xl font-bold text-[#111827] dark:text-white mb-2">{plan.name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-6 min-h-[36px]">{plan.description}</p>
                <div className="text-3xl sm:text-4xl font-black text-[#FF7F11] mb-6">{plan.price}</div>

                <div className="space-y-3 pt-6 border-t border-gray-100 dark:border-white/10 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-2.5 text-xs text-gray-700 dark:text-gray-300">
                      <FaCheck className="w-3.5 h-3.5 text-[#FF7F11] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className={`w-full py-3.5 rounded-full font-bold text-center text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-md ${plan.buttonBg}`}
              >
                <span>{language === 'bn' ? 'এই প্ল্যানটি নিন' : 'Get Started'}</span>
                <FaArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
