"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';
import { 
  FaLaptopCode, 
  FaCartShopping, 
  FaRocket, 
  FaServer, 
  FaMobileScreen, 
  FaSliders,
  FaCheck,
  FaArrowRight
} from 'react-icons/fa6';
import Link from 'next/link';

export default function Capabilities() {
  const { language } = useLanguage();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const capabilities = [
    {
      id: "saas",
      title: language === 'bn' ? 'এন্টারপ্রাইজ SaaS ও ওয়েব অ্যাপ্লিকেশন' : 'Enterprise SaaS & Web Applications',
      description: language === 'bn' 
        ? 'রিয়েল-টাইম অ্যানালিটিক্স ড্যাশবোর্ড, মাল্টি-টেন্যান্ট প্ল্যাটফর্ম এবং আধুনিক ক্লাউড আর্কিটেকচার যা সহজে স্কেল করা যায়।'
        : 'Complex web applications, real-time analytics dashboards, and multi-tenant architectures engineered with Next.js, TypeScript, and Node.js for limitless scalability.',
      icon: <FaLaptopCode className="w-6 h-6 text-[#FF7F11]" />,
      colSpan: "lg:col-span-2",
      rowSpan: "lg:row-span-2",
      isHero: true,
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Real-time Sync', 'AWS Cloud'],
      metric: language === 'bn' ? '⚡ ০.২ সে. রেসপন্স টাইম' : '⚡ 0.2s Avg Response',
    },
    {
      id: "ecommerce",
      title: language === 'bn' ? 'হাই-কনভার্শন ই-কমার্স ইকোসিস্টেম' : 'E-Commerce Ecosystems',
      description: language === 'bn'
        ? 'বিকাশ, নগদ, ভিসা ও স্ট্রাইপ পেমেন্ট গেটওয়ে, অটোমেটেড ইনভেন্টরি এবং দ্রুতগতির ১-ক্লিক চেকআউট সুবিধা।'
        : 'High-conversion storefronts featuring automated inventory sync, streamlined 1-click checkouts, and seamless payment gateways (bKash, Nagad, Stripe, SSLCommerz).',
      icon: <FaCartShopping className="w-6 h-6 text-white" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      isAccent: true,
      tags: ['Auto Payments', 'Instant Checkout', 'Multi-Currency'],
      metric: language === 'bn' ? '📈 +২৪০% সেলস গ্রোথ' : '📈 +240% Sales Conversion',
    },
    {
      id: "marketing",
      title: language === 'bn' ? 'হাই-পারফরম্যান্স মার্কেটিং সাইট' : 'Performance Marketing Sites',
      description: language === 'bn'
        ? '১০০/১০০ গুগল লাইটহাউস স্কোর, আধুনিক এনিমেশন এবং হাই-কনভার্শন লিড জেনারেশন ল্যান্ডিং পেজ।'
        : 'Bespoke corporate websites and landing pages optimized for sub-second load times, dynamic micro-interactions, and 100/100 Lighthouse performance.',
      icon: <FaRocket className="w-6 h-6 text-[#FF7F11]" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      tags: ['100/100 Lighthouse', 'SEO Dominance', 'Modern UI'],
      metric: language === 'bn' ? '🎯 ১ নম্বর গুগল র‍্যাঙ্ক' : '🎯 Top Google Ranking',
    },
    {
      id: "cms",
      title: language === 'bn' ? 'কাস্টম CMS ও অ্যাডমিন পোর্টাল' : 'Custom CMS & Admin Dashboards',
      description: language === 'bn'
        ? 'সহজ ও স্বজ্ঞাত কনটেন্ট ম্যানেজমেন্ট, রোল-ভিত্তিক ইউজার এক্সেস এবং অপারেশনাল অটোমেশন টুলস।'
        : 'Tailored headless CMS solutions, structured content publishing workflows, and granular role-based access controls designed for your team.',
      icon: <FaSliders className="w-6 h-6 text-[#FF7F11]" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      tags: ['Headless CMS', 'Role-Based Access', 'REST / GraphQL'],
      metric: language === 'bn' ? '🔒 নিরাপদ ও সহজ' : '🔒 Enterprise Security',
    },
    {
      id: "api",
      title: language === 'bn' ? 'ক্লাউড ব্যাকএন্ড ও স্কেলেবল API' : 'Cloud Backends & Robust APIs',
      description: language === 'bn'
        ? 'মাইক্রোসার্ভিস আর্কিটেকচার, অটোমেটেড CI/CD ডেপ্লয়মেন্ট এবং উচ্চ ট্রাফিক লোড ব্যালেন্সিং।'
        : 'High-concurrency microservices, automated CI/CD pipelines, and secure database clustering built to handle massive concurrent traffic spikes.',
      icon: <FaServer className="w-6 h-6 text-[#FF7F11]" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      tags: ['Microservices', 'GraphQL / REST', 'CI/CD Pipelines'],
      metric: language === 'bn' ? '🛡️ ৯৯.৯৯% আপটাইম' : '🛡️ 99.99% Uptime SLA',
    },
    {
      id: "pwa",
      title: language === 'bn' ? 'মোবাইল-ফার্স্ট প্রোগ্রেসিভ ওয়েব অ্যাপ' : 'Mobile-First PWA & Web Apps',
      description: language === 'bn'
        ? 'স্মার্টফোন ব্রাউজারেই নেটিভ অ্যাপের অভিজ্ঞতা—অফলাইন সাপোর্ট, পুশ নোটিফিকেশন ও স্মুথ জেসচার।'
        : 'Native app feel right in the browser with offline caching capabilities, push notifications, and responsive touch gestures across all devices.',
      icon: <FaMobileScreen className="w-6 h-6 text-[#FF7F11]" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      tags: ['Offline First', 'Push Alerts', 'Fluid Gestures'],
      metric: language === 'bn' ? '📱 ১০০% রেসপনসিভ' : '📱 100% Mobile Ready',
    }
  ];

  return (
    <section className="py-24 bg-[#FAFAFA] dark:bg-[#111111] relative overflow-hidden transition-colors duration-300">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#FF7F11]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#ACBFA4]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E2E8CE] dark:bg-[#262626] border border-[#ACBFA4]/30 dark:border-white/10 text-[#262626] dark:text-white text-xs font-black tracking-widest uppercase mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF7F11]"></span>
              {language === 'bn' ? 'আমাদের নির্মাণ ও দক্ষতাসমূহ' : 'OUR CORE CAPABILITIES'}
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] dark:text-white tracking-tight leading-tight">
              {language === 'bn' ? 'আমরা যা ডেভেলপ ও নির্মাণ করি' : 'What We Engineer & Build'}
            </h2>
            
            <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {language === 'bn'
                ? 'সর্বোচ্চ পারফরম্যান্স, নিরাপত্তা ও স্কেলাবিলিটি নিশ্চিত করে আপনার ব্যবসার জন্য তৈরি আধুনিক ডিজিটাল সমাধান।'
                : 'Specialized digital solutions engineered for peak performance, bulletproof security, and conversion scalability.'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#FF7F11] hover:bg-[#e66a00] text-white text-sm font-bold shadow-lg shadow-[#FF7F11]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <span>{language === 'bn' ? 'কাস্টম প্রজেক্ট শুরু করুন' : 'Start a Custom Project'}</span>
              <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* State-of-the-Art Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => {
            const isHovered = hoveredIdx === idx;

            if (cap.isHero) {
              return (
                <motion.div
                  key={cap.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`${cap.colSpan} ${cap.rowSpan} relative bg-gradient-to-br from-[#001F3F] via-[#091E3A] to-[#040D1A] rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl border border-white/10 overflow-hidden flex flex-col justify-between group cursor-pointer transition-all duration-500 hover:border-[#FF7F11]/50`}
                >
                  {/* Background ambient light */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF7F11]/15 rounded-full blur-[90px] pointer-events-none group-hover:bg-[#FF7F11]/25 transition-all duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ACBFA4]/10 rounded-full blur-[80px] pointer-events-none"></div>

                  {/* Card Top */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-4 mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                        {cap.icon}
                      </div>
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-white/10 backdrop-blur-md text-[#FF7F11] border border-white/15">
                        {cap.metric}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-4 group-hover:text-amber-400 transition-colors duration-300">
                      {cap.title}
                    </h3>

                    <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl mb-8">
                      {cap.description}
                    </p>
                  </div>

                  {/* Interactive Tech Tags & Terminal Snippet */}
                  <div className="relative z-10 pt-6 border-t border-white/10">
                    <div className="flex flex-wrap gap-2.5">
                      {cap.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-semibold text-gray-200 transition-colors flex items-center gap-1.5"
                        >
                          <FaCheck className="w-2.5 h-2.5 text-emerald-400" /> {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            }

            if (cap.isAccent) {
              return (
                <motion.div
                  key={cap.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`${cap.colSpan} ${cap.rowSpan} relative bg-gradient-to-br from-[#FF7F11] to-[#D96B00] rounded-[2rem] p-8 text-white shadow-xl border border-white/20 overflow-hidden flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF7F11]/20`}
                >
                  <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                        {cap.icon}
                      </div>
                      <span className="text-[11px] font-bold bg-black/20 backdrop-blur-md px-3 py-1 rounded-full text-white">
                        {cap.metric}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black mb-3 text-white">
                      {cap.title}
                    </h3>

                    <p className="text-white/90 text-sm leading-relaxed mb-6">
                      {cap.description}
                    </p>
                  </div>

                  <div className="relative z-10 flex flex-wrap gap-2 pt-4 border-t border-white/20">
                    {cap.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 rounded-lg bg-black/15 text-[11px] font-semibold text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`${cap.colSpan} ${cap.rowSpan} relative bg-white dark:bg-[#1a1a1a] rounded-[2rem] p-8 shadow-md hover:shadow-xl border border-[#E2E8CE] dark:border-white/10 overflow-hidden flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:border-[#FF7F11]/40`}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#FAFAFA] dark:bg-[#262626] border border-[#E2E8CE] dark:border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {cap.icon}
                    </div>
                    <span className="text-[11px] font-mono font-bold bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full border border-gray-200 dark:border-white/10">
                      {cap.metric}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#111827] dark:text-white mb-3 group-hover:text-[#FF7F11] transition-colors duration-300">
                    {cap.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                    {cap.description}
                  </p>
                </div>

                <div className="relative z-10 flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-white/10">
                  {cap.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 text-[11px] font-semibold text-gray-600 dark:text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
