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
      name: language === 'bn' ? 'স্টার্টার' : 'Starter',
      description: language === 'bn' ? 'নতুন ব্যবসার জন্য আধুনিক ওয়েবসাইট ও অনলাইন উপস্থিতি।' : 'Perfect for new businesses needing a solid web presence.',
      price: language === 'bn' ? '৳ ২৫,০০০+' : '$450+',
      features: language === 'bn' 
        ? ["কাস্টম ল্যান্ডিং পেজ ডিজাইন", "মোবাইল রেসপনসিভ ও ফাস্ট", "অন-পেজ বেসিক এসইও", "কনট্যাক্ট ফর্ম ও হোয়াটসঅ্যাপ ইন্টিগ্রেশন", "ফ্রি ডোমেইন/হোস্টিং সেটআপ"]
        : ["Custom Landing Page", "Mobile Responsive & Fast", "Basic On-Page SEO", "Contact Form & WhatsApp Integration", "Free Setup Support"],
      buttonBg: "bg-[#111827] dark:bg-white text-white dark:text-[#111827] hover:bg-[#D4AF37] dark:hover:bg-[#D4AF37] dark:hover:text-white"
    },
    {
      name: language === 'bn' ? 'স্ট্যান্ডার্ড (জনপ্রিয়)' : 'Standard (Popular)',
      description: language === 'bn' ? 'উন্নতিশীল ব্যবসার জন্য মাল্টি-পেজ ও সিএমএস সুবিধা।' : 'Ideal for growing companies requiring more pages and CMS features.',
      price: language === 'bn' ? '৳ ৫০,০০০+' : '$850+',
      isPopular: true,
      features: language === 'bn'
        ? ["সর্বোচ্চ ৫-৭টি কাস্টম পেজ", "সহজ হেডলেস CMS প্যানেল", "এডভান্সড টেকনিক্যাল এসইও", "গুগল অ্যানালিটিক্স ও ট্র্যাকিং", "১০০/১০০ স্পিড অপ্টিমাইজেশন", "১ মাস ফ্রি মেইনটেন্যান্স"]
        : ["Up to 7 Custom Pages", "Easy Headless CMS", "Advanced Technical SEO", "Analytics & Conversion Tracking", "100/100 Speed Optimization", "1 Month Free Support"],
      buttonBg: "bg-[#D4AF37] text-white hover:bg-[#B5952F]"
    },
    {
      name: language === 'bn' ? 'ই-কমার্স / প্রিমিয়াম' : 'E-Commerce / Premium',
      description: language === 'bn' ? 'সম্পূর্ণ ই-কমার্স স্টোর বা কাস্টম ওয়েব প্ল্যাটফর্ম।' : 'Comprehensive solution for established brands and commerce.',
      price: language === 'bn' ? '৳ ৯০,০০০+' : '$1,500+',
      features: language === 'bn'
        ? ["কাস্টম ই-কমার্স বা SaaS অ্যাপ", "বিকাশ/নগদ/কার্ড অটো পেমেন্ট", "ইনভেন্টরি ও অর্ডার ড্যাশবোর্ড", "ইউজার একাউন্ট ও সিকিউরিটি", "ইনস্ট্যান্ট ১-ক্লিক চেকআউট", "৩ মাস ফ্রি টেকনিক্যাল সাপোর্ট"]
        : ["Full E-commerce or SaaS App", "Automated Payment Gateways", "Inventory & Order Management", "User Authentication & Dashboard", "Instant 1-Click Checkout", "3 Months Dedicated Support"],
      buttonBg: "bg-[#111827] dark:bg-white text-white dark:text-[#111827] hover:bg-[#D4AF37] dark:hover:bg-[#D4AF37] dark:hover:text-white"
    },
    {
      name: language === 'bn' ? 'কাস্টম এন্টারপ্রাইজ' : 'Custom Enterprise',
      description: language === 'bn' ? 'বড় প্রতিষ্ঠানের জন্য নিজস্ব ক্লাউড আর্কিটেকচার।' : 'Tailored enterprise architectures and bespoke platforms.',
      price: language === 'bn' ? 'আলোচনা সাপেক্ষে' : "Let's Talk",
      features: language === 'bn'
        ? ["ডেডিকেটেড ইঞ্জিনিয়ার টিম", "কাস্টম মাইক্রোসার্ভিস ক্লাউড", "হাই-সিকিউরিটি ও SLA সাপোর্ট", "দীর্ঘমেয়াদী মেইনটেন্যান্স ও আপগ্রেড"]
        : ["Dedicated Senior Engineers", "Custom Cloud Architecture", "Enterprise Security & SLA", "Ongoing Maintenance & Scale"],
      buttonBg: "bg-[#111827] dark:bg-white text-white dark:text-[#111827] hover:bg-[#D4AF37] dark:hover:bg-[#D4AF37] dark:hover:text-white"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#FAFAFA] dark:bg-[#111111] relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#DBEAFE] dark:bg-[#262626] border border-[#1E3A8A]/30 dark:border-white/10 text-[#262626] dark:text-white text-xs font-black tracking-widest mb-4 uppercase shadow-sm">
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
                  ? 'bg-white dark:bg-[#1a1a1a] border-[#D4AF37] shadow-2xl scale-[1.03] z-10' 
                  : 'bg-white dark:bg-[#1a1a1a] border-[#DBEAFE] dark:border-white/10 shadow-md hover:shadow-xl'
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#D4AF37] text-white text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                  {language === 'bn' ? 'সবচেয়ে জনপ্রিয়' : 'Most Popular'}
                </span>
              )}

              <div>
                <h3 className="text-xl font-bold text-[#111827] dark:text-white mb-2">{plan.name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-6 min-h-[36px]">{plan.description}</p>
                <div className="text-3xl sm:text-4xl font-black text-[#D4AF37] mb-6">{plan.price}</div>

                <div className="space-y-3 pt-6 border-t border-gray-100 dark:border-white/10 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-2.5 text-xs text-gray-700 dark:text-gray-300">
                      <FaCheck className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
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
