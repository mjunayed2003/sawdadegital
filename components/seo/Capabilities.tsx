"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';
import { FaSearch } from 'react-icons/fa';
import { 
  FaGoogle, 
  FaBolt, 
  FaLink, 
  FaChartLine, 
  FaCheck,
  FaArrowRight
} from 'react-icons/fa6';
import Link from 'next/link';

export default function Capabilities() {
  const { language } = useLanguage();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const capabilities = [
    {
      id: "technical_seo",
      title: language === 'bn' ? 'টেকনিক্যাল এসইও ও স্পিড অপ্টিমাইজেশন' : 'Technical SEO & Core Web Vitals',
      description: language === 'bn' 
        ? 'গুগলের কোর ওয়েব ভাইটালস অপ্টিমাইজেশন, ক্রলিং ও ইনডেক্সিং এরর ফিক্স, স্কিমা মার্কআপ এবং সাইট স্পিড ৯৯+ স্কোর নিশ্চিতকরণ।'
        : 'Full technical site audits, Core Web Vitals optimization, schema markup architecture, zero crawl errors, and lightning 0.2s load speeds.',
      icon: <FaBolt className="w-6 h-6 text-[#9D224D]" />,
      colSpan: "lg:col-span-2",
      rowSpan: "lg:row-span-2",
      isHero: true,
      tags: ['Core Web Vitals 99+', 'Schema Structured Data', 'Robots.txt & Sitemap', 'Mobile-First Indexing'],
      metric: language === 'bn' ? '⚡ ৯৯+ এসইও স্কোর' : '⚡ 99+ Health Score',
    },
    {
      id: "google_ads",
      title: language === 'bn' ? 'গুগল সার্চ ও পিপিসি অ্যাডস (PPC)' : 'Google Search Ads & High-Intent PPC',
      description: language === 'bn'
        ? 'হাই-ইনটেন্ট ক্রেতাদের লক্ষ্য করে গুগল সার্চ ও শপিং বিজ্ঞাপন—যা তাৎক্ষণিক কোয়ালিটি লিড নিয়ে আসে।'
        : 'High-intent Google Search Ads, Shopping campaigns, and negative keyword optimization that captures buyers with open wallets.',
      icon: <FaGoogle className="w-6 h-6 text-white" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      isAccent: true,
      tags: ['Google Search Ads', 'Negative Keywords', 'Quality Score 9/10'],
      metric: language === 'bn' ? '🎯 ১ নম্বর পজিশন' : '🎯 #1 Search Ad Rank',
    },
    {
      id: "keyword_strategy",
      title: language === 'bn' ? 'কিওয়ার্ড রিসার্চ ও কনটেন্ট স্ট্র্যাটেজি' : 'Keyword Research & Topical Authority',
      description: language === 'bn'
        ? 'উচ্চ সার্চ ভলিউম এবং লো-কম্পিটিশন কিওয়ার্ড ম্যাপিং—যা গুগলের ১ম পেজে দ্রুত র‍্যাঙ্ক করায়।'
        : 'Semantic keyword mapping, search intent analysis, and topical authority content clusters that outrank older competitors.',
      icon: <FaSearch className="w-6 h-6 text-[#9D224D]" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      tags: ['Topical Clusters', 'Search Intent Mapping', 'Competitor Gap Analysis'],
      metric: language === 'bn' ? '📈 ৩৫০% ট্রাফিক বৃদ্ধি' : '📈 +350% Traffic',
    },
    {
      id: "backlink_building",
      title: language === 'bn' ? 'হাই-অথরিটি ব্যাকলিংক বিল্ডিং' : 'High-Authority Backlink Acquisition',
      description: language === 'bn'
        ? 'হোয়াইট-হ্যাট আউটরিচ এবং প্রেস রিলিজের মাধ্যমে হাই DA/DR ডোমেইন থেকে কোয়ালিটি ব্যাকলিংক।'
        : 'White-hat digital PR, niche-relevant guest outreach, and high DR 70+ backlink acquisition to build permanent domain authority.',
      icon: <FaLink className="w-6 h-6 text-[#9D224D]" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      tags: ['High DR 70+ Links', 'White-Hat PR Outreach', 'Zero Spam Links'],
      metric: language === 'bn' ? '🔗 অথরিটি ব্যাকলিংক' : '🔗 Permanent Authority',
    },
    {
      id: "local_seo",
      title: language === 'bn' ? 'লোকাল এসইও ও গুগল ম্যাপস (GMB)' : 'Local SEO & Google Maps Dominance',
      description: language === 'bn'
        ? 'গুগল বিজনেস প্রোফাইল (GMB) অপ্টিমাইজেশন এবং স্থানীয় গ্রাহকদের কল ও ভিজিট বাড়ানো।'
        : 'Google Business Profile optimization, localized citations, and geo-targeted ranking to dominate local search map packs.',
      icon: <FaGoogle className="w-6 h-6 text-[#9D224D]" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      tags: ['Google Maps Top 3', 'Local Citations', 'Customer Review Systems'],
      metric: language === 'bn' ? '📍 ম্যাপ প্যাক টপ ৩' : '📍 Maps 3-Pack Rank',
    },
    {
      id: "ecommerce_seo",
      title: language === 'bn' ? 'ই-কমার্স ও প্রোডাক্ট এসইও' : 'E-commerce Product SEO',
      description: language === 'bn'
        ? 'হাজার হাজার প্রোডাক্ট পেজ, ক্যাটাগরি ফানেল এবং গুগল শপিংয়ের জন্য স্বয়ংক্রিয় এসইও।'
        : 'Category page optimization, product rich snippets, and Google Merchant Center sync to multiply organic product sales.',
      icon: <FaChartLine className="w-6 h-6 text-[#9D224D]" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      tags: ['Product Rich Snippets', 'Merchant Center Sync', 'Frictionless Crawling'],
      metric: language === 'bn' ? '🛍️ অরগানিক সেলস' : '🛍️ Organic Sales Flow',
    }
  ];

  return (
    <section className="py-24 bg-[#FAFAFA] dark:bg-[#111111] relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#9D224D]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#334155]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCE7F3] dark:bg-[#262626] border border-[#334155]/30 dark:border-white/10 text-[#262626] dark:text-white text-xs font-black tracking-widest uppercase mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#9D224D]"></span>
              {language === 'bn' ? 'এসইও ও গুগল সার্ভিসেস' : 'SEO CAPABILITIES'}
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] dark:text-white tracking-tight leading-tight">
              {language === 'bn' ? 'আমরা যেভাবে গুগল সার্চে ১ম স্থানে নিয়ে যাই' : 'Dominate Organic & Paid Search'}
            </h2>
            
            <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {language === 'bn'
                ? 'টেকনিক্যাল এসইও, কোয়ালিটি ব্যাকলিংক এবং টার্গেটেড গুগল বিজ্ঞাপনের মাধ্যমে স্থায়ী অর্গানিক ট্রাফিক নিশ্চিতকরণ।'
                : 'White-hat SEO and precision Google Ads engineered to place your brand directly in front of active buyers.'}
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
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#9D224D] hover:bg-[#7A173A] text-white text-sm font-bold shadow-lg shadow-[#9D224D]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <span>{language === 'bn' ? 'ফ্রি এসইও অডিট নিন' : 'Request SEO Audit'}</span>
              <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => {
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
                  className={`${cap.colSpan} ${cap.rowSpan} relative bg-gradient-to-br from-[#001F3F] via-[#091E3A] to-[#040D1A] rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl border border-white/10 overflow-hidden flex flex-col justify-between group cursor-pointer transition-all duration-500 hover:border-[#9D224D]/50`}
                >
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[#9D224D]/15 rounded-full blur-[90px] pointer-events-none group-hover:bg-[#9D224D]/25 transition-all duration-700"></div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-4 mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                        {cap.icon}
                      </div>
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-white/10 backdrop-blur-md text-[#9D224D] border border-white/15">
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
                  className={`${cap.colSpan} ${cap.rowSpan} relative bg-gradient-to-br from-[#9D224D] to-[#D96B00] rounded-[2rem] p-8 text-white shadow-xl border border-white/20 overflow-hidden flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-[#9D224D]/20`}
                >
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
                className={`${cap.colSpan} ${cap.rowSpan} relative bg-white dark:bg-[#1a1a1a] rounded-[2rem] p-8 shadow-md hover:shadow-xl border border-[#FCE7F3] dark:border-white/10 overflow-hidden flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:border-[#9D224D]/40`}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#FAFAFA] dark:bg-[#262626] border border-[#FCE7F3] dark:border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {cap.icon}
                    </div>
                    <span className="text-[11px] font-mono font-bold bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full border border-gray-200 dark:border-white/10">
                      {cap.metric}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#111827] dark:text-white mb-3 group-hover:text-[#9D224D] transition-colors duration-300">
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
