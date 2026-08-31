"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';
import { 
  FaVideo, 
  FaFilm, 
  FaTv, 
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
      id: "commercials",
      title: language === 'bn' ? 'হাই-এন্ড কমার্শিয়াল ও টিভি বিজ্ঞাপন' : 'High-End Broadcast Commercials',
      description: language === 'bn' 
        ? 'সিনেমাটিক কোয়ালিটি ৪K/৮K বিজ্ঞাপন যা দর্শকদের দৃষ্টি আকর্ষণ করে এবং ব্র্যান্ডের বিক্রি বৃদ্ধি করে। কনসেপ্ট স্ক্রিপ্ট থেকে ফাইনাল কালার গ্রেডিং পর্যন্ত সম্পূর্ণ সলিউশন।'
        : 'Cinematic commercial advertisements engineered to capture attention instantly and drive measurable brand growth. Full end-to-end studio production from concept to delivery.',
      icon: <FaVideo className="w-6 h-6 text-[#D4AF37]" />,
      colSpan: "lg:col-span-2",
      rowSpan: "lg:row-span-2",
      isHero: true,
      tags: ['4K/8K Cinema Cameras', 'Professional Casting', 'Sound Design & Score', 'Color Grading'],
      metric: language === 'bn' ? '🎬 ProRes 4K সিনেমাটিক' : '🎬 ProRes 4K Master',
    },
    {
      id: "motion",
      title: language === 'bn' ? '২D/৩D মোশন গ্রাফিক্স ও অ্যানিমেশন' : 'Motion Graphics & 3D Animation',
      description: language === 'bn'
        ? 'জটিল টেকনিক্যাল বিষয় বা প্রোডাক্ট ফিচারগুলোকে আকর্ষণীয় মোশন অ্যানিমেশনের মাধ্যমে সহজভাবে উপস্থাপন।'
        : 'Dynamic 2D/3D animations, kinetic typography, and product render animations that explain complex ideas flawlessly.',
      icon: <FaFilm className="w-6 h-6 text-white" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      isAccent: true,
      tags: ['3D Product Renders', 'Explainer Animation', 'Logo Reveals'],
      metric: language === 'bn' ? '⚡ 60 FPS স্মুথ রেন্ডার' : '⚡ 60 FPS Fluid Motion',
    },
    {
      id: "social_ads",
      title: language === 'bn' ? 'সোশ্যাল মিডিয়া ভিডিও অ্যাডস' : 'Social Media Video Ads (Reels/Shorts)',
      description: language === 'bn'
        ? 'TikTok, Instagram Reels, YouTube Shorts ও ফেসবুকের জন্য হাই-রিটেনশন শর্ট-ফর্ম ভিডিও কনটেন্ট।'
        : 'Bite-sized, high-retention vertical video creatives optimized for TikTok, Instagram Reels, and YouTube algorithms.',
      icon: <FaMobileScreen className="w-6 h-6 text-[#D4AF37]" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      tags: ['Vertical 9:16', 'UGC Style Content', 'Viral Hooks'],
      metric: language === 'bn' ? '📱 হাই এনগেজমেন্ট' : '📱 85% View Retention',
    },
    {
      id: "corporate",
      title: language === 'bn' ? 'কর্পোরেট স্টোরিটেলিং ও ব্র্যান্ড ফিল্ম' : 'Corporate Storytelling & Brand Films',
      description: language === 'bn'
        ? 'এক্সিকিউটিভ ইন্টারভিউ, কোম্পানির ডকুমেন্টারি এবং বি২বি ক্লায়েন্ট আকৃষ্ট করার মতো অথেনটিক স্টোরি।'
        : 'Executive leadership interviews, company documentaries, and authentic brand storytelling crafted for enterprise authority.',
      icon: <FaTv className="w-6 h-6 text-[#D4AF37]" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      tags: ['Documentary Style', 'Executive Interviews', 'Internal Training'],
      metric: language === 'bn' ? '🏆 ব্র্যান্ড অথরিটি' : '🏆 Premium Authority',
    },
    {
      id: "post_production",
      title: language === 'bn' ? 'পোস্ট-প্রোডাকশন ও কালার গ্রেডিং' : 'Post-Production & Studio Mix',
      description: language === 'bn'
        ? 'DaVinci Resolve সিনেমাটিক কালার গ্রেডিং, সাউন্ড ডিজাইন এবং স্পেশাল ভিজ্যুয়াল এফেক্টস (VFX)।'
        : 'Hollywood-grade DaVinci Resolve color grading, audio mastering, and advanced VFX compositing.',
      icon: <FaSliders className="w-6 h-6 text-[#D4AF37]" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      tags: ['DaVinci Resolve', 'Spatial Audio Mix', 'VFX Compositing'],
      metric: language === 'bn' ? '🎚️ স্টুডিও অডিও ও কালার' : '🎚️ Studio Mastering',
    },
    {
      id: "event_coverage",
      title: language === 'bn' ? 'ইভেন্ট কভারেজ ও লাইভ ব্রডকাস্ট' : 'Event Coverage & Multi-Cam Live',
      description: language === 'bn'
        ? 'হাই-প্রোফাইল কনফারেন্স, কনসার্ট ও প্রোডাক্ট লঞ্চের মাল্টি-ক্যামেরা লাইভ স্ট্রিমিং ও আফটারমুভি।'
        : 'Multi-camera cinematic live streaming, corporate event highlights, and fast-turnaround recap films.',
      icon: <FaVideo className="w-6 h-6 text-[#D4AF37]" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      tags: ['Multi-Cam Setup', 'Live 4K Stream', 'Same-Day Highlights'],
      metric: language === 'bn' ? '🎥 লাইভ কভারেজ' : '🎥 Zero Latency Broadcast',
    }
  ];

  return (
    <section className="py-24 bg-[#FAFAFA] dark:bg-[#111111] relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#1E3A8A]/15 rounded-full blur-3xl pointer-events-none" />

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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DBEAFE] dark:bg-[#262626] border border-[#1E3A8A]/30 dark:border-white/10 text-[#262626] dark:text-white text-xs font-black tracking-widest uppercase mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
              {language === 'bn' ? 'ভিডিও প্রোডাকশন সেবাসমূহ' : 'PRODUCTION CAPABILITIES'}
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] dark:text-white tracking-tight leading-tight">
              {language === 'bn' ? 'আমরা যে ধরনের ভিডিও নির্মাণ করি' : 'What We Produce & Deliver'}
            </h2>
            
            <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {language === 'bn'
                ? 'উচ্চমানের সিনেমাটোগ্রাফি, অত্যাধুনিক কালার গ্রেডিং এবং শক্তিশালী স্টোরিটেলিংয়ের মাধ্যমে তৈরি প্রিমিয়াম ভিডিও সলিউশন।'
                : 'Cinematic visual storytelling crafted with top-tier equipment, precision editing, and immersive sound design.'}
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
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#D4AF37] hover:bg-[#B5952F] text-white text-sm font-bold shadow-lg shadow-[#D4AF37]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <span>{language === 'bn' ? 'ভিডিও প্রোডাকশন শুরু করুন' : 'Book Video Production'}</span>
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
                  className={`${cap.colSpan} ${cap.rowSpan} relative bg-gradient-to-br from-[#001F3F] via-[#091E3A] to-[#040D1A] rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl border border-white/10 overflow-hidden flex flex-col justify-between group cursor-pointer transition-all duration-500 hover:border-[#D4AF37]/50`}
                >
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/15 rounded-full blur-[90px] pointer-events-none group-hover:bg-[#D4AF37]/25 transition-all duration-700"></div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-4 mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                        {cap.icon}
                      </div>
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-white/10 backdrop-blur-md text-[#D4AF37] border border-white/15">
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
                  className={`${cap.colSpan} ${cap.rowSpan} relative bg-gradient-to-br from-[#D4AF37] to-[#D96B00] rounded-[2rem] p-8 text-white shadow-xl border border-white/20 overflow-hidden flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/20`}
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
                className={`${cap.colSpan} ${cap.rowSpan} relative bg-white dark:bg-[#1a1a1a] rounded-[2rem] p-8 shadow-md hover:shadow-xl border border-[#DBEAFE] dark:border-white/10 overflow-hidden flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:border-[#D4AF37]/40`}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#FAFAFA] dark:bg-[#262626] border border-[#DBEAFE] dark:border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {cap.icon}
                    </div>
                    <span className="text-[11px] font-mono font-bold bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full border border-gray-200 dark:border-white/10">
                      {cap.metric}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#111827] dark:text-white mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
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
