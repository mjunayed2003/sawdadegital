"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';
import { 
  FaDesktop, 
  FaFigma, 
  FaLayerGroup, 
  FaMobileScreen, 
  FaUsers, 
  FaCheck,
  FaArrowRight
} from 'react-icons/fa6';
import Link from 'next/link';

export default function Capabilities() {
  const { language } = useLanguage();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const capabilities = [
    {
      id: "figma_design_system",
      title: language === 'bn' ? 'ফিগমা ডিজাইন সিস্টেম ও কম্পোনেন্ট লাইব্রেরি' : 'Figma Design Systems & Tokens',
      description: language === 'bn' 
        ? 'স্কেলেবল ফিগমা ডিজাইন সিস্টেম, টোকেন আর্কিটেকচার, অটো-লেআউট এবং ডেভেলপার-হ্যান্ডঅফ ফ্রেন্ডলি কম্পোনেন্ট লাইব্রেরি।'
        : 'Enterprise-grade Figma design systems, design token hierarchies, dynamic variables, auto-layouts, and seamless developer handoff.',
      icon: <FaFigma className="w-6 h-6 text-[#9D224D]" />,
      colSpan: "lg:col-span-2",
      rowSpan: "lg:row-span-2",
      isHero: true,
      tags: ['Figma Variables & Tokens', 'Auto-Layout Components', 'Dev Handoff Ready', 'Dark/Light Variants'],
      metric: language === 'bn' ? '🎨 ১০০% ফিগমা সিঙ্কড' : '🎨 100% Synced Tokens',
    },
    {
      id: "interactive_prototyping",
      title: language === 'bn' ? 'ইন্টারেক্টিভ প্রোটোটাইপ ও মাইক্রো-অ্যানিমেশন' : 'Interactive Prototyping & Motion',
      description: language === 'bn'
        ? 'রিয়েল-টাইম ক্লিকেবল প্রোটোটাইপ এবং মসৃণ মাইক্রো-ইন্টারঅ্যাকশন যা কোডিংয়ের আগেই অ্যাপের অনুভূতি দেয়।'
        : 'Hyper-realistic clickable prototypes with fluid micro-interactions and animations that feel identical to native production apps.',
      icon: <FaDesktop className="w-6 h-6 text-white" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      isAccent: true,
      tags: ['Smart Animate', 'Micro-Interactions', 'Interactive States'],
      metric: language === 'bn' ? '⚡ ৬০ FPS প্রোটোটাইপ' : '⚡ 60 FPS Prototype',
    },
    {
      id: "mobile_app_ux",
      title: language === 'bn' ? 'মোবাইল অ্যাপ ইউআই/ইউএক্স (iOS ও Android)' : 'Mobile App UI/UX (iOS & Android)',
      description: language === 'bn'
        ? 'Apple Human Interface ও Google Material Design গাইডলাইন মেনে তৈরি কনভার্শন-অপ্টিমাইজড মোবাইল অ্যাপ।'
        : 'Pixel-perfect mobile experiences built in strict accordance with Apple HIG and Google Material Design 3 guidelines.',
      icon: <FaMobileScreen className="w-6 h-6 text-[#9D224D]" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      tags: ['Apple HIG Compliant', 'Material You Design', 'Thumb-Friendly Flow'],
      metric: language === 'bn' ? '📱 হাই কনভার্সন' : '📱 4.9★ UX Rating',
    },
    {
      id: "user_research",
      title: language === 'bn' ? 'ইউজার রিসার্চ ও ইউজেবিলিটি টেস্টিং' : 'User Research & Usability Audits',
      description: language === 'bn'
        ? 'ইউজার জার্নি ম্যাপিং, ওয়্যারফ্রেম টেস্টিং এবং ব্যবহারকারীর সমস্যার ডেটা-ভিত্তিক সমাধান।'
        : 'In-depth user interviews, journey mapping, heuristic evaluation, and unmoderated usability testing to eliminate user friction.',
      icon: <FaUsers className="w-6 h-6 text-[#9D224D]" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      tags: ['User Journey Maps', 'Heatmap Behavioral UX', 'Heuristic Evaluation'],
      metric: language === 'bn' ? '👥 ইউজার-কেন্দ্রিক' : '👥 Zero Friction UX',
    },
    {
      id: "saas_dashboard",
      title: language === 'bn' ? 'জটিল SaaS ড্যাশবোর্ড ও ওয়েব অ্যাপ' : 'Complex SaaS Dashboards & Portals',
      description: language === 'bn'
        ? 'জটিল ডেটা ভিজ্যুয়ালাইজেশন, ফিল্টারিং এবং সহজবোধ্য টেবিল সম্বলিত এন্টারপ্রাইজ SaaS প্ল্যাটফর্ম।'
        : 'Intuitive data tables, dynamic charting, role-based workflows, and enterprise SaaS dashboards that make heavy workflows effortless.',
      icon: <FaLayerGroup className="w-6 h-6 text-[#9D224D]" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      tags: ['Data Visualizations', 'Complex Filters', 'Responsive Tables'],
      metric: language === 'bn' ? '📊 এন্টারপ্রাইজ SaaS' : '📊 Enterprise Grade',
    },
    {
      id: "ux_redesign",
      title: language === 'bn' ? 'ইউএক্স রিডিজাইন ও কনভার্সন বুস্ট' : 'UX Audit & Conversion Redesign',
      description: language === 'bn'
        ? 'পুরনো প্ল্যাটফর্মের বাউন্স রেট কমিয়ে সাইন-আপ ও বিক্রি বাড়ানোর আধুনিক ইউজার ইন্টারফেস।'
        : 'Modernizing outdated user flows to dramatically reduce checkout abandonment and boost customer retention.',
      icon: <FaDesktop className="w-6 h-6 text-[#9D224D]" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      tags: ['Frictionless Checkout', 'Bounce Rate Reduction', 'Visual Refresh'],
      metric: language === 'bn' ? '🚀 ৩.৫x কনভার্সন' : '🚀 3.5x Conversion',
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
              {language === 'bn' ? 'ইউআই/ইউএক্স ডিজাইন সেবাসমূহ' : 'UI/UX CAPABILITIES'}
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] dark:text-white tracking-tight leading-tight">
              {language === 'bn' ? 'আমরা যেভাবে ডিজিটাল এক্সপেরিয়েন্স তৈরি করি' : 'User-Centered Digital Experiences'}
            </h2>
            
            <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {language === 'bn'
                ? 'সৌন্দর্য ও কার্যকারিতার নিখুঁত সংমিশ্রণে তৈরি ফিগমা ডিজাইন সিস্টেম ও হাই-কনভার্শন ইউজার ইন্টারফেস।'
                : 'Combining aesthetic beauty with conversion architecture to create effortless digital experiences.'}
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
              <span>{language === 'bn' ? 'ইউআই/ইউএক্স প্রজেক্ট শুরু করুন' : 'Start UI/UX Project'}</span>
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
