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
      name: language === 'bn' ? 'ওয়ার্ডপ্রেস ও উইক্স স্টার্টার' : 'WordPress & Wix Starter',
      description: language === 'bn' ? 'নতুন ব্যবসা বা পার্সোনাল ব্র্যান্ডের জন্য ১-৩ পেজের দ্রুত ওয়েবসাইট।' : 'Perfect for small businesses wanting a fast, clean WordPress or Wix site.',
      price: language === 'bn' ? '৳ ২০,০০০' : '৳ 20,000',
      features: language === 'bn' 
        ? ["১-৩টি কাস্টম পেজ ও ক্লিন ডিজাইন", "মোবাইল ও ট্যাবলেট ১০০% রেসপনসিভ", "কন্ট্যাক্ট ফর্ম ও হোয়াটসঅ্যাপ চ্যাট বাটন", "অন-পেজ বেসিক এসইও সেটআপ", "২টি রিভিশন ও ফুল সেটআপ সাপোর্ট"]
        : ["1-3 Custom Pages & Clean Design", "100% Mobile & Tablet Responsive", "Contact Form & WhatsApp Integration", "Basic On-Page SEO Architecture", "2 Revisions & Full Setup Support"],
      buttonBg: "bg-[#111827] dark:bg-white text-white dark:text-[#111827] hover:bg-[#9D224D] dark:hover:bg-[#9D224D] dark:hover:text-white"
    },
    {
      name: language === 'bn' ? 'শপিফাই ও CMS স্টোর (জনপ্রিয়)' : 'Shopify & CMS Store (Popular)',
      description: language === 'bn' ? 'শপিফাই ই-কমার্স বা মাল্টি-পেজ ওয়ার্ডপ্রেস ওয়েবসাইট বিকাশ পেমেন্টসহ।' : 'Ideal for growing businesses launching a full Shopify or WooCommerce store.',
      price: language === 'bn' ? '৳ ৩৫,০০০' : '৳ 35,000',
      isPopular: true,
      features: language === 'bn'
        ? ["সর্বোচ্চ ৮টি পেজ / প্রোডাক্ট ক্যাটালগ", "বিকাশ ও নগদ পেমেন্ট গেটওয়ে সেটআপ", "অ্যাডভান্সড স্পিড ও সিকিউরিটি প্লাগইন", "ইনভেন্টরি ও অর্ডার ট্র্যাকিং ড্যাশবোর্ড", "১ মাস ফ্রি মেইনটেন্যান্স ও টেকনিক্যাল সাপোর্ট"]
        : ["Up to 8 Custom Pages / Catalog", "bKash & Nagad Payment Gateway Setup", "Speed & Security Optimization", "Inventory & Order Tracking Dashboard", "1 Month Free Technical Maintenance"],
      buttonBg: "bg-[#9D224D] text-white hover:bg-[#7A173A]"
    },
    {
      name: language === 'bn' ? 'কাস্টম Next.js ফুলস্ট্যাক ওয়েব' : 'Custom Next.js Fullstack Web',
      description: language === 'bn' ? 'হেডলেস CMS অ্যাডমিন প্যানেলসহ আল্ট্রাফাস্ট কাস্টম ওয়েব অ্যাপ্লিকেশন।' : 'Ultrafast custom React / Next.js web application with headless CMS.',
      price: language === 'bn' ? '৳ ৭৫,০০০' : '৳ 75,000',
      features: language === 'bn'
        ? ["Next.js App Router ফুলস্ট্যাক আর্কিটেকচার", "সহজ হেডলেস CMS (অ্যাডমিন প্যানেল)", "ডাইনামিক ব্লগ, পোর্টফোলিও ও সার্ভিসেস", "১০০/১০০ গুগল পেজস্পিড ও কোর ভাইটালস", "CI/CD ক্লাউড ডেপ্লয় ও ৩ মাস সাপোর্ট"]
        : ["Next.js App Router Fullstack Architecture", "Headless CMS (Custom Admin Panel)", "Dynamic Blog, Portfolio & Services", "100/100 Core Web Vitals & Speed", "Automated CI/CD Deploy & 3 Months SLA"],
      buttonBg: "bg-[#111827] dark:bg-white text-white dark:text-[#111827] hover:bg-[#9D224D] dark:hover:bg-[#9D224D] dark:hover:text-white"
    },
    {
      name: language === 'bn' ? 'এন্টারপ্রাইজ কাস্টম SaaS / প্ল্যাটফর্ম' : 'Enterprise SaaS / Cloud Platform',
      description: language === 'bn' ? 'জটিল বিজনেস লজিক, রোল-বেসড পোর্টাল ও স্কেলেবল ক্লাউড ব্যাকএন্ড।' : 'Complex enterprise web platforms, custom dashboards & cloud scale.',
      price: language === 'bn' ? '৳ ১,৫০,০০০+' : '৳ 150,000+',
      features: language === 'bn'
        ? ["স্কেলেবল ক্লাউড মাইক্রোসার্ভিস ব্যাকএন্ড", "রোল-বেসড অথেনটিকেশন ও সিকিউর ড্যাশবোর্ড", "থার্ড-পার্টি API, পেমেন্ট ও ওয়েবহুক", "ডেডিকেটেড ফুলস্ট্যাক লিড আর্কিটেক্ট", "৬ মাস এন্টারপ্রাইজ মেইনটেন্যান্স ও সাপোর্ট"]
        : ["Scalable Cloud Microservices Backend", "Role-Based Auth & Secure Portal", "Third-Party APIs & Automated Webhooks", "Dedicated Senior Fullstack Lead", "6 Months Enterprise Maintenance SLA"],
      buttonBg: "bg-[#111827] dark:bg-white text-white dark:text-[#111827] hover:bg-[#9D224D] dark:hover:bg-[#9D224D] dark:hover:text-white"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#FAFAFA] dark:bg-[#111111] relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#FCE7F3] dark:bg-[#262626] border border-[#334155]/30 dark:border-white/10 text-[#262626] dark:text-white text-xs font-black tracking-widest mb-4 uppercase shadow-sm">
            {language === 'bn' ? 'স্বচ্ছ প্রাইসিং প্ল্যান' : 'TRANSPARENT PRICING'}
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black text-[#111827] dark:text-white mb-6"
          >
            {language === 'bn' ? 'আপনার প্রয়োজনীয় প্যাকেজ বেছে নিন' : 'Pick your build package'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            {language === 'bn'
              ? 'স্পষ্ট কাজের পরিধি এবং স্বচ্ছ বাজেট। কোনো লুকানো চার্জ ছাড়া সেরা ডিজিটাল কোয়ালিটি।'
              : 'Fixed deliverables, clear scopes, and zero hidden fees engineered to give you the highest ROI.'}
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
