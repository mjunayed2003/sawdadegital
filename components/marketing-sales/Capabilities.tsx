"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';
import { 
  FaBullhorn, 
  FaEnvelope, 
  FaChartLine, 
  FaUsers, 
  FaGoogle, 
  FaCheck,
  FaArrowRight
} from 'react-icons/fa6';
import Link from 'next/link';

export default function Capabilities() {
  const { language } = useLanguage();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const capabilities = [
    {
      id: "performance_marketing",
      title: language === 'bn' ? 'টার্গেটেড পারফরম্যান্স মার্কেটিং ও পেইড অ্যাডস' : 'Performance Marketing & Paid Acquisition',
      description: language === 'bn' 
        ? 'গুগল, মেটা (ফেসবুক ও ইনস্টাগ্রাম) এবং লিঙ্কডইন-এ ডেটা-ড্রিভেন পেইড অ্যাড ক্যাম্পেইন—যা সর্বোচ্চ রিটার্ন অন অ্যাড স্পেন্ড (ROAS) এবং কনভার্সন নিশ্চিত করে।'
        : 'Data-driven paid advertising across Google, Meta, and LinkedIn engineered for maximum ROAS, audience segmentation, and profitable acquisition.',
      icon: <FaBullhorn className="w-6 h-6 text-[#9D224D]" />,
      colSpan: "lg:col-span-2",
      rowSpan: "lg:row-span-2",
      isHero: true,
      tags: ['Google Search & Display Ads', 'Meta Ad Manager Scaling', 'Retargeting & Lookalikes', 'A/B Creative Testing'],
      metric: language === 'bn' ? '📈 ৩৪০% গড় ROAS' : '📈 +340% Avg ROAS',
    },
    {
      id: "conversion_funnel",
      title: language === 'bn' ? 'সেলস ফানেল ও কনভার্সন রেট অপ্টিমাইজেশন' : 'Conversion Rate Optimization (CRO)',
      description: language === 'bn'
        ? 'ল্যান্ডিং পেজ অপ্টিমাইজেশন এবং ফানেল অ্যানালিটিক্স—যা আপনার ট্রাফিককে পেইং কাস্টমারে রূপান্তর করে।'
        : 'Landing page architecture, friction removal, and multivariate testing to turn casual visitors into loyal paying customers.',
      icon: <FaChartLine className="w-6 h-6 text-white" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      isAccent: true,
      tags: ['High-Converting Funnels', 'Heatmaps & Audits', 'A/B Landing Pages'],
      metric: language === 'bn' ? '⚡ ৪.৮% কনভার্শন রেট' : '⚡ 4.8% Conv. Rate',
    },
    {
      id: "social_growth",
      title: language === 'bn' ? 'সোশ্যাল মিডিয়া ম্যানেজমেন্ট ও ব্র্যান্ডিং' : 'Social Media Management & Growth',
      description: language === 'bn'
        ? 'নিয়মিত মানসম্মত পোস্ট, ট্রেন্ডিং রিলস, কপিরাইটিং এবং সক্রিয় কমিউনিটি ম্যানেজমেন্ট।'
        : 'End-to-end social media strategy, viral creative calendar, copywriting, and 24/7 community engagement.',
      icon: <FaUsers className="w-6 h-6 text-[#9D224D]" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      tags: ['Daily Creative Content', 'Community Management', 'Influencer Collabs'],
      metric: language === 'bn' ? '👥 ১.২M+ মাসিক রিচ' : '👥 1.2M+ Monthly Reach',
    },
    {
      id: "email_automation",
      title: language === 'bn' ? 'ইমেইল ও অটোমেটেড ড্রিপ ক্যাম্পেইন' : 'Email & Marketing Automation',
      description: language === 'bn'
        ? 'স্মার্ট ড্রিপ সিকোয়েন্স, পরিত্যক্ত কার্ট রিকভারি এবং গ্রাহকদের নিয়মিত রি-এনগেজমেন্ট।'
        : 'Automated welcome series, abandoned cart recovery, and high-converting newsletters built with Klaviyo and HubSpot.',
      icon: <FaEnvelope className="w-6 h-6 text-[#9D224D]" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      tags: ['Abandoned Cart Flows', 'List Segmentation', 'High Open Rates'],
      metric: language === 'bn' ? '✉️ ৪৫% ওপেন রেট' : '✉️ 45% Open Rate',
    },
    {
      id: "lead_generation",
      title: language === 'bn' ? 'বি২বি লিড জেনারেশন ও আউটরিচ' : 'B2B Lead Generation Pipelines',
      description: language === 'bn'
        ? 'কোয়ালিফাইড লিড সংগ্রহ, লিঙ্কডইন আউটরিচ এবং বিজনেস পাইপলাইন শক্তিশালীকরণ।'
        : 'Predictable high-ticket B2B lead generation funnels, automated outreach, and appointment booking pipelines.',
      icon: <FaGoogle className="w-6 h-6 text-[#9D224D]" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      tags: ['Qualified Leads', 'Cold Outreach Systems', 'Webinar Funnels'],
      metric: language === 'bn' ? '🎯 ভেরিফাইড লিডস' : '🎯 High Intent Leads',
    },
    {
      id: "analytics",
      title: language === 'bn' ? 'লাইভ অ্যানালিটিক্স ও আরওআই ট্র্যাকিং' : 'Full-Funnel Analytics & Attribution',
      description: language === 'bn'
        ? 'রিয়েল-টাইম ড্যাশবোর্ড, পিক্সেল ট্র্যাকিং এবং সঠিক ডেটা অ্যানালাইসিস।'
        : 'Server-side tracking, Google Tag Manager, GA4 attribution, and transparent live dashboards.',
      icon: <FaChartLine className="w-6 h-6 text-[#9D224D]" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      tags: ['Server-Side Tracking', 'GA4 Custom Setup', 'Live ROI Dashboard'],
      metric: language === 'bn' ? '📊 ১০০% অ্যাকুরেট' : '📊 100% Attributed',
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
              {language === 'bn' ? 'মার্কেটিং সেবাসমূহ' : 'MARKETING CAPABILITIES'}
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] dark:text-white tracking-tight leading-tight">
              {language === 'bn' ? 'আমরা যেভাবে আপনার ব্র্যান্ড গ্রো করি' : 'How We Scale Your Revenue'}
            </h2>
            
            <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {language === 'bn'
                ? 'বিজ্ঞাপনী খরচ অপচয় না করে সঠিক টার্গেটেড অডিয়েন্সের কাছে পৌঁছানো এবং নিশ্চিত সেলস বৃদ্ধি।'
                : 'Data-driven acquisition, conversion-optimized funnels, and retention systems built to scale businesses.'}
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
              <span>{language === 'bn' ? 'মার্কেটিং শুরু করুন' : 'Launch Campaign'}</span>
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
