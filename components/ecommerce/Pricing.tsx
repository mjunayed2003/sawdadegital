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
      name: language === 'bn' ? 'স্টার্টার অনলাইন শপ' : 'Starter Storefront',
      description: language === 'bn' ? 'নতুন পণ্য বা বুটিক বিজনেসের জন্য দ্রুত চেকআউট স্টোর।' : 'Perfect for small retailers launching direct-to-consumer sales.',
      price: language === 'bn' ? '৳ ২৫,০০০' : '$400',
      features: language === 'bn' 
        ? ["১০০টি পর্যন্ত প্রোডাক্ট ক্যাটালগ", "বিকাশ ও নগদ ম্যানুয়াল/অটো পেমেন্ট", "১-ক্লিক ফাস্ট মোবাইল চেকআউট", "অর্ডার ম্যানেজমেন্ট ড্যাশবোর্ড", "১ বছর ফ্রি টেকনিক্যাল সাপোর্ট"]
        : ["Up to 100 Products Catalog", "bKash & Nagad Payment Setup", "1-Click Mobile Fast Checkout", "Simple Order Admin Dashboard", "1-Year Maintenance & Hosting Support"],
      buttonBg: "bg-[#111827] dark:bg-white text-white dark:text-[#111827] hover:bg-[#9D224D] dark:hover:bg-[#9D224D] dark:hover:text-white"
    },
    {
      name: language === 'bn' ? 'প্রো কাস্টম ই-কমার্স (জনপ্রিয়)' : 'Pro Scale Store (Popular)',
      description: language === 'bn' ? 'গ্রোথ ব্র্যান্ড ও প্রতিষ্ঠিত ব্যবসার জন্য পূর্ণাঙ্গ স্টোর।' : 'Ideal for growing brands scaling high daily order volumes.',
      price: language === 'bn' ? '৳ ৬০,০০০' : '$950',
      isPopular: true,
      features: language === 'bn'
        ? ["আনলিমিটেড প্রোডাক্ট ও ক্যাটাগরি", "অটোমেটেড bKash/Nagad/Visa পেমেন্ট (IPN)", "Steadfast/Pathao কুরিয়ার API অটো সিঙ্ক", "এসএমএস ও হোয়াটসঅ্যাপ অর্ডার নোটিফিকেশন", "ডিসকাউন্ট কুপন ও ফ্ল্যাশ সেল সিস্টেম"]
        : ["Unlimited Products & Categories", "Automated IPN Gateways (Cards/bKash)", "Steadfast & Pathao Courier Auto-Sync", "Automated Customer SMS Notifications", "Dynamic Coupons & Flash Sale Engine"],
      buttonBg: "bg-[#9D224D] text-white hover:bg-[#7A173A]"
    },
    {
      name: language === 'bn' ? 'এন্টারপ্রাইজ মাল্টি-ভেন্ডর / POS' : 'Enterprise / Headless Store',
      description: language === 'bn' ? 'বড় ই-কমার্স, মাল্টি-ভেন্ডর মার্কেটপ্লেস বা POS ইন্টিগ্রেশন।' : 'Headless Next.js architecture with physical POS sync.',
      price: language === 'bn' ? '৳ ১,২০,০০০+' : '$2,000+',
      features: language === 'bn'
        ? ["হেডলেস Next.js আল্ট্রাফাস্ট আর্কিটেকচার (০.২s লোড)", "রিটেইল শপ POS ইনভেন্টরি রিয়েল-টাইম সিঙ্ক", "মাল্টি-কারেন্সি ও গ্লোবাল শিপিং", "আন্তর্জাতিক Stripe ও PayPal গেটওয়ে", "ডেডিকেটেড ফুলস্ট্যাক আর্কিটেক্ট"]
        : ["Headless Next.js (0.2s Instant Loads)", "Physical Retail POS Inventory Live Sync", "Multi-Currency & Global Logistics", "Stripe, PayPal & Local Automated Routing", "Dedicated Senior Fullstack Architect"],
      buttonBg: "bg-[#111827] dark:bg-white text-white dark:text-[#111827] hover:bg-[#9D224D] dark:hover:bg-[#9D224D] dark:hover:text-white"
    },
    {
      name: language === 'bn' ? 'মার্কেটপ্লেস / কাস্টম প্ল্যাটফর্ম' : 'Custom Marketplace',
      description: language === 'bn' ? 'দারাজ বা আলিবাবার মতো মাল্টি-ভেন্ডর সিস্টেম।' : 'Bespoke multi-vendor marketplace with vendor commissions.',
      price: language === 'bn' ? 'আলোচনা সাপেক্ষে' : "Custom Quote",
      features: language === 'bn'
        ? ["ভেন্ডর রেজিস্ট্রেশন ও নিজস্ব ড্যাশবোর্ড", "অটোমেটেড কমিশন ও পে-আউট সিস্টেম", "কাস্টম মোবাইল অ্যাপস ইন্টিগ্রেশন", "২৪/৭ এন্টারপ্রাইজ SLA সাপোর্ট"]
        : ["Multi-Vendor Portals & Commissions", "Automated Merchant Payout Gateways", "Native iOS & Android App Integration", "24/7 Enterprise High-Load SLA"],
      buttonBg: "bg-[#111827] dark:bg-white text-white dark:text-[#111827] hover:bg-[#9D224D] dark:hover:bg-[#9D224D] dark:hover:text-white"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#FAFAFA] dark:bg-[#111111] relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#FCE7F3] dark:bg-[#262626] border border-[#334155]/30 dark:border-white/10 text-[#262626] dark:text-white text-xs font-black tracking-widest mb-4 uppercase shadow-sm">
            {language === 'bn' ? 'স্বচ্ছ ই-কমার্স প্যাকেজ' : 'TRANSPARENT PRICING'}
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black text-[#111827] dark:text-white mb-6"
          >
            {language === 'bn' ? 'আপনার ই-কমার্স প্যাকেজ বেছে নিন' : 'Pick your e-commerce package'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            {language === 'bn'
              ? 'নিরাপদ পেমেন্ট গেটওয়ে, কুরিয়ার অটোমেশন এবং স্বচ্ছ মূল্যের নিশ্চয়তা।'
              : 'Complete custom digital storefronts with automated payments and courier logistics.'}
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
