"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';
import { FaShoppingCart } from 'react-icons/fa';
import { 
  FaCreditCard, 
  FaBolt, 
  FaBoxesStacked, 
  FaTruckFast, 
  FaCheck,
  FaArrowRight
} from 'react-icons/fa6';
import Link from 'next/link';

export default function Capabilities() {
  const { language } = useLanguage();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const capabilities = [
    {
      id: "custom_ecommerce",
      title: language === 'bn' ? 'হাই-কনভার্শন কাস্টম ই-কমার্স প্ল্যাটফর্ম' : 'High-Converting Custom Storefronts',
      description: language === 'bn' 
        ? 'বিকাশ, নগদ, ভিসা, মাস্টারকার্ড ও স্ট্রাইপ পেমেন্ট গেটওয়ে, ১-ক্লিক ফাস্ট চেকআউট এবং রিয়েল-টাইম ইনভেন্টরি ম্যানেজমেন্ট সম্বলিত সম্পূর্ণ স্টোর।'
        : 'Next.js & Shopify headless storefronts with instant bKash, Nagad, Stripe payment gateways, 1-click checkouts, and seamless inventory sync.',
      icon: <FaShoppingCart className="w-6 h-6 text-[#FF7F11]" />,
      colSpan: "lg:col-span-2",
      rowSpan: "lg:row-span-2",
      isHero: true,
      tags: ['bKash & Nagad Auto Gateways', '1-Click Frictionless Checkout', 'Real-Time Inventory Sync', '0.2s Instant Page Loads'],
      metric: language === 'bn' ? '🛍️ +২৪০% সেলস বৃদ্ধি' : '🛍️ +240% Sales Flow',
    },
    {
      id: "payment_gateways",
      title: language === 'bn' ? 'অটোমেটেড পেমেন্ট ও ইনভয়েস সিস্টেম' : 'Multi-Currency Payment Gateways',
      description: language === 'bn'
        ? 'লোকাল এবং আন্তর্জাতিক পেমেন্ট মেথড (SSLCommerz, Shurjopay, Stripe, PayPal) এর নিরাপদ ও অটোমেটেড সংযোগ।'
        : 'Zero-friction payment routing supporting local mobile banking (bKash/Nagad) and global multi-currency checkout gateways.',
      icon: <FaCreditCard className="w-6 h-6 text-white" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      isAccent: true,
      tags: ['SSLCommerz & Shurjopay', 'Stripe Global Credit Cards', 'Instant SMS Invoicing'],
      metric: language === 'bn' ? '🔒 ২৫৬-বিট এনক্রিপশন' : '🔒 256-Bit Encrypted',
    },
    {
      id: "inventory_pos",
      title: language === 'bn' ? 'ইনভেন্টরি ও পিওএস (POS) সিঙ্ক' : 'Inventory Management & POS Sync',
      description: language === 'bn'
        ? 'দোকান ও অনলাইন স্টোরের স্টক একসাথে রিয়েল-টাইমে ম্যানেজ করার স্মার্ট অটোমেশন।'
        : 'Unified multichannel stock synchronization between physical retail POS and online storefronts to prevent stockouts.',
      icon: <FaBoxesStacked className="w-6 h-6 text-[#FF7F11]" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      tags: ['Multichannel Stock Sync', 'Low Stock Auto Alerts', 'Barcode Scanner Ready'],
      metric: language === 'bn' ? '📦 ১০০% অটো সিঙ্ক' : '📦 100% Stock Synced',
    },
    {
      id: "fast_checkout",
      title: language === 'bn' ? 'ফাস্ট মোবাইল চেকআউট ও ড্রপ-অফ প্রিভেনশন' : 'Mobile-First Fast Checkout Architecture',
      description: language === 'bn'
        ? 'মোবাইলে দ্রুত অর্ডার প্লেস করার উপযোগী ফর্ম—যা কার্ট ড্রপ-অফ কমিয়ে বিক্রি বাড়ায়।'
        : 'Minimalist 2-step checkout flows engineered specifically for mobile shoppers to slash cart abandonment.',
      icon: <FaBolt className="w-6 h-6 text-[#FF7F11]" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      tags: ['2-Step Mobile Checkout', 'OTP Auto Verification', 'Guest Checkout Enabled'],
      metric: language === 'bn' ? '⚡ ১-ক্লিক অর্ডার' : '⚡ 1-Click Order Flow',
    },
    {
      id: "courier_shipping",
      title: language === 'bn' ? 'কুরিয়ার ও অটোমেটেড ডেলিভারি ট্র্যাকিং' : 'Courier & Logistics API Automation',
      description: language === 'bn'
        ? 'Steadfast, Pathao, RedX ও eCourier এর সাথে স্বয়ংক্রিয় অর্ডার ট্র্যাকিং ও পার্সেল বুকিং।'
        : 'Direct automated courier parcel booking with Steadfast, Pathao, and RedX with real-time customer SMS tracking.',
      icon: <FaTruckFast className="w-6 h-6 text-[#FF7F11]" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      tags: ['Steadfast & Pathao API', 'Auto Consignment Booking', 'Customer Live Tracking'],
      metric: language === 'bn' ? '🚚 অটো কুরিয়ার ট্র্যাকিং' : '🚚 Live Courier API',
    },
    {
      id: "ecommerce_analytics",
      title: language === 'bn' ? 'কাস্টমার ডাটা ও রিকভারি অটোমেশন' : 'Abandoned Cart & Lifetime Value',
      description: language === 'bn'
        ? 'হোয়াটসঅ্যাপ ও এসএমএস এর মাধ্যমে পরিত্যক্ত কার্ট রিকভারি এবং কাস্টমার লয়ালটি বৃদ্ধি।'
        : 'Automated WhatsApp and SMS cart recovery notifications that reclaim up to 25% of lost checkouts.',
      icon: <FaShoppingCart className="w-6 h-6 text-[#FF7F11]" />,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      tags: ['WhatsApp Cart Recovery', 'SMS Order Confirmation', 'Customer Loyalty System'],
      metric: language === 'bn' ? '💬 ২৫% কার্ট রিকভারি' : '💬 25% Reclaimed Carts',
    }
  ];

  return (
    <section className="py-24 bg-[#FAFAFA] dark:bg-[#111111] relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#FF7F11]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#ACBFA4]/15 rounded-full blur-3xl pointer-events-none" />

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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E2E8CE] dark:bg-[#262626] border border-[#ACBFA4]/30 dark:border-white/10 text-[#262626] dark:text-white text-xs font-black tracking-widest uppercase mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF7F11]"></span>
              {language === 'bn' ? 'ই-কমার্স সমাধান' : 'E-COMMERCE CAPABILITIES'}
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] dark:text-white tracking-tight leading-tight">
              {language === 'bn' ? 'অনলাইন বিক্রয় বৃদ্ধির জন্য আধুনিক প্ল্যাটফর্ম' : 'Built to Scale Online Stores'}
            </h2>
            
            <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {language === 'bn'
                ? 'বিকাশ/নগদ পেমেন্ট গেটওয়ে, কুরিয়ার ইন্টিগ্রেশন এবং দ্রুতগতির চেকআউট সম্বলিত আধুনিক ই-কমার্স প্ল্যাটফর্ম।'
                : 'Custom digital storefronts engineered with frictionless checkouts, automated payment gateways, and real-time inventory management.'}
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
              <span>{language === 'bn' ? 'ই-কমার্স স্টোর তৈরি করুন' : 'Launch E-Commerce Store'}</span>
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
                  className={`${cap.colSpan} ${cap.rowSpan} relative bg-gradient-to-br from-[#001F3F] via-[#091E3A] to-[#040D1A] rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl border border-white/10 overflow-hidden flex flex-col justify-between group cursor-pointer transition-all duration-500 hover:border-[#FF7F11]/50`}
                >
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF7F11]/15 rounded-full blur-[90px] pointer-events-none group-hover:bg-[#FF7F11]/25 transition-all duration-700"></div>

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
