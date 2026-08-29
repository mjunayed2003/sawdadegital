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
      name: language === 'bn' ? 'স্টার্টার এআই অটোমেশন' : 'Starter AI Workflow',
      description: language === 'bn' ? 'স্মার্ট কাস্টমার সাপোর্ট চ্যাটবট বা লিড কোয়ালিফিকেশন।' : 'Perfect for 24/7 customer service automation & lead capture.',
      price: language === 'bn' ? '৳ ৩০,০০০' : '$450',
      features: language === 'bn' 
        ? ["কাস্টম নলেজ বেস যুক্ত AI চ্যাটবট", "ওয়েবসাইট ও হোয়াটসঅ্যাপে ইন্টিগ্রেশন", "স্বয়ংক্রিয় লিড ক্যাপচারিং", "সহজ অ্যাডমিন ড্যাশবোর্ড", "৩ মাস ফ্রি মডেল সাপোর্ট"]
        : ["Custom RAG Knowledge AI Bot", "Website & WhatsApp Integration", "Automated Lead Capture & Routing", "Admin Conversation Analytics", "3-Month Free Model Maintenance"],
      buttonBg: "bg-[#111827] dark:bg-white text-white dark:text-[#111827] hover:bg-[#FF7F11] dark:hover:bg-[#FF7F11] dark:hover:text-white"
    },
    {
      name: language === 'bn' ? 'কমপ্লিট মোবাইল অ্যাপ (জনপ্রিয়)' : 'Full Mobile App (Popular)',
      description: language === 'bn' ? 'iOS ও Android উভয় প্ল্যাটফর্মের জন্য নেটিভ অ্যাপ।' : 'Ideal for startups launching a high-performance cross-platform app.',
      price: language === 'bn' ? '৳ ৮০,০০০+' : '$1,400+',
      isPopular: true,
      features: language === 'bn'
        ? ["React Native / Flutter ডুয়েল প্ল্যাটফর্ম অ্যাপ", "অ্যাপল অ্যাপ স্টোর ও প্লে স্টোর সাবমিশন", "পুশ নোটিফিকেশন ও অফলাইন ক্যাশিং", "পেমেন্ট গেটওয়ে ও ওঅথ লগইন", "সম্পূর্ণ সোর্স কোড ও ১ বছর সাপোর্ট"]
        : ["React Native / Flutter Dual OS App", "100% App Store & Play Store Approval", "Instant Push Notifications & Cache", "bKash / Stripe / Social Login", "Full Source Code & 1-Yr Support"],
      buttonBg: "bg-[#FF7F11] text-white hover:bg-[#e66a00]"
    },
    {
      name: language === 'bn' ? 'এন্টারপ্রাইজ অ্যাপ + AI ইঞ্জিন' : 'Enterprise App + AI Engine',
      description: language === 'bn' ? 'স্মার্ট এআই অটোমেশন ও জটিল ব্যাকএন্ড সম্বলিত অ্যাপ।' : 'Complex enterprise mobile apps with bespoke LLM agents.',
      price: language === 'bn' ? '৳ ১,৫০,০০০+' : '$2,500+',
      features: language === 'bn'
        ? ["কাস্টম AI রিকমেন্ডেশন ও অটোমেশন ইঞ্জিন", "স্কেলেবল ক্লাউড মাইক্রোসার্ভিস ব্যাকএন্ড", "রিয়েল-টাইম চ্যাট ও লাইভ ট্র্যাকিং", "CI/CD অটোমেটেড OTA আপডেট পাইপলাইন", "ডেডিকেটেড সিনিয়র মোবাইল আর্কিটেক্ট"]
        : ["Custom AI Agent Integration", "High-Concurrency Cloud Microservices", "Real-Time WebSocket Streaming", "CI/CD Pipeline with OTA Live Updates", "Dedicated Senior Mobile Architect"],
      buttonBg: "bg-[#111827] dark:bg-white text-white dark:text-[#111827] hover:bg-[#FF7F11] dark:hover:bg-[#FF7F11] dark:hover:text-white"
    },
    {
      name: language === 'bn' ? 'কাস্টম এন্টারপ্রাইজ সফটওয়্যার' : 'Custom SaaS / Core System',
      description: language === 'bn' ? 'বড় প্রতিষ্ঠান বা ইউনিক সফটওয়্যার সিস্টেমের জন্য।' : 'Bespoke high-scale mobile platforms & proprietary AI.',
      price: language === 'bn' ? 'আলোচনা সাপেক্ষে' : "Custom Quote",
      features: language === 'bn'
        ? ["প্রোপাইটরি এআই মডেল ফাইন-টিউনিং", "মাল্টি-টেন্যান্ট SaaS আর্কিটেকচার", "অন-প্রিমিস বা প্রাইভেট ক্লাউড ডেপ্লয়", "২৪/৭ এন্টারপ্রাইজ হাই-লোড SLA"]
        : ["Proprietary LLM Model Fine-Tuning", "Multi-Tenant Enterprise Architecture", "Private VPC On-Premise Deploy", "24/7 Dedicated High-Load SLA"],
      buttonBg: "bg-[#111827] dark:bg-white text-white dark:text-[#111827] hover:bg-[#FF7F11] dark:hover:bg-[#FF7F11] dark:hover:text-white"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#FAFAFA] dark:bg-[#111111] relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#E2E8CE] dark:bg-[#262626] border border-[#ACBFA4]/30 dark:border-white/10 text-[#262626] dark:text-white text-xs font-black tracking-widest mb-4 uppercase shadow-sm">
            {language === 'bn' ? 'স্বচ্ছ অ্যাপ প্যাকেজ' : 'TRANSPARENT PRICING'}
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black text-[#111827] dark:text-white mb-6"
          >
            {language === 'bn' ? 'আপনার অ্যাপ ও এআই প্যাকেজ বেছে নিন' : 'Pick your mobile app package'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            {language === 'bn'
              ? 'অ্যাপ স্টোর ও গুগল প্লে স্টোর পাবলিশিং সহ সম্পূর্ণ সোর্স কোড ও স্বচ্ছ বাজেট।'
              : 'Cross-platform mobile apps published directly to app stores with full source code ownership.'}
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
