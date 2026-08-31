"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';
import { FaPaintBrush } from 'react-icons/fa';
import { 
  FaLayerGroup, 
  FaPenNib, 
  FaBoxOpen, 
  FaImages, 
  FaCheck,
  FaArrowRight
} from 'react-icons/fa6';
import Link from 'next/link';

export default function Capabilities() {
  const { language } = useLanguage();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const capabilities = [
    {
      id: "brand_identity",
      title: language === 'bn' ? 'আইকনিক লোগো ও পূর্ণাঙ্গ ব্র্যান্ড আইডেন্টিটি' : 'Brand Identity & Visual System',
      description: language === 'bn' 
        ? 'ভেক্টর ৩oo DPI লোগো মার্ক, কালার প্যালেট, টাইপোগ্রাফি এবং ব্র্যান্ড গাইডলাইন বুক—যা আপনার ব্যবসাকে বাজারে সম্পূর্ণ অনন্য ও স্মরণীয় করে তোলে।'
        : 'Iconic vector logo systems, color palettes, typography hierarchy, and comprehensive brand books engineered to make you unforgettable.',
      icon: <FaPaintBrush className="w-6 h-6 text-[#9D224D]" />,
      colSpan: "lg:col-span-2",
      rowSpan: "lg:row-span-2",
      isHero: true,
      tags: ['Vector 300 DPI Logo', 'Brand Guidelines Book', 'Typography & Colors', 'Stationery Suite'],
      metric: language === 'bn' ? '🎨 ১০০% ইউনিক আইডেন্টিটি' : '🎨 100% Unique Vector',
    },
    {
      id: "packaging_design",
      title: language === 'bn' ? 'প্রোডাক্ট প্যাকেজিং ও লেবেল ডিজাইন' : 'Packaging & Label Architecture',
      description: language === 'bn'
        ? 'দোকানের শেলফে বা ই-কমার্সে ক্রেতার দৃষ্টি আকর্ষণকারী প্রিমিয়াম বক্স ও লেবেল ডিজাইন।'
        : 'High-impact retail packaging, 3D bottle labels, and unboxing experiences designed to win customer trust at first glance.',
      icon: <FaBoxOpen className="w-6 h-6 text-white" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      isAccent: true,
      tags: ['Dielines & 3D Mockups', 'Print-Ready Formats', 'Retail Box Packaging'],
      metric: language === 'bn' ? '📦 রিটেইল রেডি' : '📦 Retail Shelf-Ready',
    },
    {
      id: "marketing_creatives",
      title: language === 'bn' ? 'ডিজিটাল অ্যাড ও সোশ্যাল ক্রিয়েটিভস' : 'Marketing Creatives & Social Banners',
      description: language === 'bn'
        ? 'ফেসবুক ও গুগলে বেশি ক্লিক ও বিক্রি পাওয়ার উপযোগী হাই-কনভার্শন ব্যানার ও রিল থাম্বনেইল।'
        : 'High-conversion paid ad banners, carousel graphics, billboard designs, and scroll-stopping social visuals.',
      icon: <FaImages className="w-6 h-6 text-[#9D224D]" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      tags: ['Ad Banner Sets', 'Carousel Graphics', 'YouTube Thumbnails'],
      metric: language === 'bn' ? '⚡ ৩.২x ক্লিক রেট' : '⚡ 3.2x Click-Through',
    },
    {
      id: "vector_illustration",
      title: language === 'bn' ? 'কাস্টম ভেক্টর ইলাস্ট্রেশন ও আইকনোগ্রাফি' : 'Custom Vector Illustrations & Icons',
      description: language === 'bn'
        ? 'ওয়েবসাইট ও অ্যাপের জন্য কাস্টম আইকন প্যাক ও ব্র্যান্ডেড ইলাস্ট্রেশন সেট।'
        : 'Bespoke SVG icon systems, mascot illustrations, and editorial graphics crafted with surgical precision.',
      icon: <FaPenNib className="w-6 h-6 text-[#9D224D]" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      tags: ['Scalable SVG Assets', 'Custom Icon Packs', 'Mascot Design'],
      metric: language === 'bn' ? '✒️ পারফেক্ট পাথস' : '✒️ Precision Paths',
    },
    {
      id: "print_stationery",
      title: language === 'bn' ? 'কর্পোরেট স্টেশনারি ও প্রিন্ট ডিজাইন' : 'Print Collateral & Marketing Kits',
      description: language === 'bn'
        ? 'ভিজিটিং কার্ড, ফোল্ডার, লেটারহেড, ব্রোশিওর ও কোম্পানি প্রোফাইল ডিজাইন।'
        : 'Executive business cards, corporate brochures, pitch decks, catalogs, and trade show exhibition booths.',
      icon: <FaLayerGroup className="w-6 h-6 text-[#9D224D]" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      tags: ['Brochures & Catalogs', 'Executive Business Cards', 'Company Profile PDF'],
      metric: language === 'bn' ? '📄 প্রিন্ট রেডি' : '📄 CMYK Print Ready',
    },
    {
      id: "brand_rebranding",
      title: language === 'bn' ? 'ব্র্যান্ড রিফ্রেশ ও রিব্র্যান্ডিং' : 'Brand Refresh & Modernization',
      description: language === 'bn'
        ? 'পুরনো ব্র্যান্ডকে আধুনিক যুগে রূপান্তর এবং বাজার প্রতিযোগিতায় শীর্ষস্থানে নিয়ে যাওয়া।'
        : 'Modernizing legacy brands for the digital-first era with refreshed aesthetics and unified systems.',
      icon: <FaPaintBrush className="w-6 h-6 text-[#9D224D]" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      tags: ['Brand Evolution', 'Digital Transformation', 'Consistent Identity'],
      metric: language === 'bn' ? '🚀 আধুনিক ব্র্যান্ড' : '🚀 Modern Elevation',
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
              {language === 'bn' ? 'ডিজাইন ও ব্র্যান্ডিং সেবাসমূহ' : 'BRANDING CAPABILITIES'}
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] dark:text-white tracking-tight leading-tight">
              {language === 'bn' ? 'আমরা যে ধরনের ডিজাইন তৈরি করি' : 'Visual Assets Crafted to Lead'}
            </h2>
            
            <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {language === 'bn'
                ? 'আইকনিক ভেক্টর ভিজ্যুয়াল এবং মার্জিত গ্রাফিক্স যা আপনার ব্র্যান্ডকে যেকোনো বাজারে এক নম্বর অবস্থানে তুলে ধরে।'
                : 'Bespoke brand identities, packaging, and digital creatives that elevate your market presence and authority.'}
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
              <span>{language === 'bn' ? 'ডিজাইন প্রজেক্ট শুরু করুন' : 'Start Design Project'}</span>
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
