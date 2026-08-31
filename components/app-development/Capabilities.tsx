"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';
import { 
  FaMobileScreenButton, 
  FaRobot, 
  FaBolt, 
  FaCloud, 
  FaCodeBranch, 
  FaCheck,
  FaArrowRight
} from 'react-icons/fa6';
import Link from 'next/link';

export default function Capabilities() {
  const { language } = useLanguage();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const capabilities = [
    {
      id: "mobile_apps",
      title: language === 'bn' ? 'ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপস (iOS ও Android)' : 'Cross-Platform iOS & Android Apps',
      description: language === 'bn' 
        ? 'React Native ও Flutter দিয়ে তৈরি উচ্চগতির নেটিভ মোবাইল অ্যাপ্লিকেশন—যা মসৃণ ৬০ FPS পারফরম্যান্স, অফলাইন স্টোরেজ এবং পুশ নোটিফিকেশন প্রদান করে।'
        : 'Native-speed React Native & Flutter mobile applications built for fluid 60 FPS performance, offline data sync, and instant push notifications.',
      icon: <FaMobileScreenButton className="w-6 h-6 text-[#D4AF37]" />,
      colSpan: "lg:col-span-2",
      rowSpan: "lg:row-span-2",
      isHero: true,
      tags: ['React Native & Flutter', 'App Store & Play Store Ready', 'Offline-First SQLite Cache', 'Biometric FaceID Login'],
      metric: language === 'bn' ? '📱 ৬০ FPS নেটিভ স্পিড' : '📱 60 FPS Native Performance',
    },
    {
      id: "ai_workflows",
      title: language === 'bn' ? 'কাস্টম এআই ওয়ার্কফ্লো ও স্মার্ট অটোমেশন' : 'Custom AI Agents & Workflows',
      description: language === 'bn'
        ? 'আপনার নিজস্ব ডাটার ওপর প্রশিক্ষিত কাস্টম AI চ্যাটবট, ডকুমেন্ট প্রসেসিং এবং অটোমেটেড কাস্টমার সাপোর্ট।'
        : 'Enterprise LLM fine-tuning, automated intelligent agents, document extraction pipelines, and smart conversational support.',
      icon: <FaRobot className="w-6 h-6 text-white" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      isAccent: true,
      tags: ['Custom RAG Knowledge Bases', '24/7 AI Customer Support', 'Automated Operations'],
      metric: language === 'bn' ? '⚡ ৭০% খরচ সাশ্রয়' : '⚡ 70% Ops Cost Saved',
    },
    {
      id: "api_backend",
      title: language === 'bn' ? 'স্কেলেবল ক্লাউড ব্যাকএন্ড ও মাইক্রোসার্ভিস' : 'Scalable Cloud Backend & Node/Go',
      description: language === 'bn'
        ? 'মিলিয়ন ব্যবহারকারীর ট্রাফিক সামলানোর মতো স্কেলেবল Node.js, Go এবং PostgreSQL ব্যাকএন্ড।'
        : 'High-concurrency Node.js, Go, and PostgreSQL backends engineered with Redis caching and zero-downtime AWS scaling.',
      icon: <FaCloud className="w-6 h-6 text-[#D4AF37]" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      tags: ['Node.js & Go Microservices', 'PostgreSQL & Redis Cache', 'AWS / Google Cloud Auto-Scale'],
      metric: language === 'bn' ? '☁️ ৯৯.৯৯% আপটাইম' : '☁️ 99.99% Cloud Uptime',
    },
    {
      id: "app_store_publishing",
      title: language === 'bn' ? 'অ্যাপ স্টোর ও প্লে স্টোর পাবলিশিং' : 'App Store & Play Store Optimization',
      description: language === 'bn'
        ? 'অ্যাপলের কঠোর রিভিউ পাস, গুগল প্লে কনসোল কনফিগারেশন এবং ১০০% সিকিউর রিলিজ।'
        : 'End-to-end Apple App Store and Google Play Console publishing, compliance audits, and App Store Optimization (ASO).',
      icon: <FaBolt className="w-6 h-6 text-[#D4AF37]" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      tags: ['Apple App Store Review Pass', 'Google Play Store 100% Approved', 'ASO Keyword Ranking'],
      metric: language === 'bn' ? '🚀 ১০০% অ্যাপ্রুভাল' : '🚀 100% Store Approval',
    },
    {
      id: "ci_cd_devops",
      title: language === 'bn' ? 'অটোমেটেড CI/CD ও কোয়ালিটি টেস্টিং' : 'Automated CI/CD & Testing Pipelines',
      description: language === 'bn'
        ? 'স্বয়ংক্রিয় টেস্ট স্যুট, কোড কোয়ালিটি চেক এবং ওভার-দ্য-এয়ার (OTA) ইনস্ট্যান্ট অ্যাপ আপডেট।'
        : 'Automated unit & E2E integration test suites, GitHub Actions CI/CD pipelines, and zero-delay Over-The-Air (OTA) updates.',
      icon: <FaCodeBranch className="w-6 h-6 text-[#D4AF37]" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      tags: ['Over-The-Air (OTA) Updates', 'Automated E2E Testing', 'Crashlytics Live Monitoring'],
      metric: language === 'bn' ? '🛡️ জিরো ক্র্যাশ রেট' : '🛡️ 99.9% Crash-Free',
    },
    {
      id: "enterprise_security",
      title: language === 'bn' ? 'এন্টারপ্রাইজ সিকিউরিটি ও এনক্রিপশন' : 'Enterprise Security & Data Privacy',
      description: language === 'bn'
        ? 'এন্ড-টু-এন্ড ডাটা এনক্রিপশন, ওঅথ২ (OAuth2) এবং বায়োমেট্রিক সিকিউরিটি প্রোটোকল।'
        : 'Bank-grade AES-256 data encryption at rest and in transit, OAuth2 authentication, and strict privacy compliance.',
      icon: <FaMobileScreenButton className="w-6 h-6 text-[#D4AF37]" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      tags: ['AES-256 Bit Encryption', 'Biometric Authentication', 'SOC2 / GDPR Compliant'],
      metric: language === 'bn' ? '🔒 ব্যাংক-গ্রেড সিকিউর' : '🔒 Bank-Grade Security',
    }
  ];

  return (
    <section className="py-24 bg-[#FAFAFA] dark:bg-[#111111] relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#1E3A8A]/15 rounded-full blur-3xl pointer-events-none" />

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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DBEAFE] dark:bg-[#262626] border border-[#1E3A8A]/30 dark:border-white/10 text-[#262626] dark:text-white text-xs font-black tracking-widest uppercase mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
              {language === 'bn' ? 'অ্যাপ ও এআই সার্ভিসেস' : 'APP & AI CAPABILITIES'}
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] dark:text-white tracking-tight leading-tight">
              {language === 'bn' ? 'নেটিভ পারফরম্যান্স মোবাইল অ্যাপ ও স্মার্ট এআই' : 'High-Performance Apps & AI Engineering'}
            </h2>
            
            <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {language === 'bn'
                ? 'iOS ও Android ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ এবং কাস্টম এআই অটোমেশন—যা আপনার ব্যবসাকে ডিজিটালি এগিয়ে রাখে।'
                : 'High-performance React Native & Flutter mobile applications, custom AI workflows, and enterprise automation designed to scale flawlessly.'}
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
              <span>{language === 'bn' ? 'অ্যাপ ডেভেলপমেন্ট শুরু করুন' : 'Build Custom App'}</span>
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
