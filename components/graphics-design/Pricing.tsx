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
      name: language === 'bn' ? 'স্টার্টার লোগো প্যাকেজ' : 'Starter Identity',
      description: language === 'bn' ? 'নতুন স্টার্টআপ বা ছোট ব্যবসার জন্য নিখুঁত লোগো।' : 'Perfect for new startups needing a clean vector logo.',
      price: language === 'bn' ? '৳ ৮,০০০' : '$150',
      features: language === 'bn' 
        ? ["২টি প্রাথমিক লোগো কনসেপ্ট", "হাই-রেজুলেশন ভেক্টর ফাইল (AI, PNG, SVG)", "রঙ ও ফন্ট প্যালেট গাইড", "২টি ফ্রি রিভিশন", "সম্পূর্ণ কপিরাইট ওনারশিপ"]
        : ["2 Custom Logo Concepts", "High-Resolution Vectors (AI, SVG, PNG)", "Color & Font Hierarchy", "2 Free Revisions", "100% Commercial IP Rights"],
      buttonBg: "bg-[#111827] dark:bg-white text-white dark:text-[#111827] hover:bg-[#D4AF37] dark:hover:bg-[#D4AF37] dark:hover:text-white"
    },
    {
      name: language === 'bn' ? 'পূর্ণাঙ্গ ব্র্যান্ডিং প্যাকেজ (জনপ্রিয়)' : 'Full Brand Suite (Popular)',
      description: language === 'bn' ? 'প্রতিষ্ঠিত ব্যবসার জন্য কমপ্লিট ব্র্যান্ড সিস্টেম।' : 'Ideal for growing companies wanting complete identity systems.',
      price: language === 'bn' ? '৳ ২৫,০০০' : '$450',
      isPopular: true,
      features: language === 'bn'
        ? ["৪টি প্রিমিয়াম লোগো কনসেপ্ট", "পূর্ণাঙ্গ ব্র্যান্ড গাইডলাইন বুকলেট", "ভিজিটিং কার্ড, প্যাড ও খাম ডিজাইন", "সোশ্যাল মিডিয়া কিট (ব্যানার ও ডিপি)", "সীমাহীন রিভিশন ও ৩D মকআপ"]
        : ["4 Premium Concept Variations", "Comprehensive Brand Guidelines Book", "Stationery Suite (Card, Letterhead)", "Social Media Kit (Banners & Avatars)", "Unlimited Revisions & 3D Mockups"],
      buttonBg: "bg-[#D4AF37] text-white hover:bg-[#B5952F]"
    },
    {
      name: language === 'bn' ? 'প্যাকেজিং ও কর্পোরেট কিট' : 'Packaging & Corporate',
      description: language === 'bn' ? 'প্রোডাক্ট ব্র্যান্ডিং ও রিটেইল প্যাকেজিং সলিউশন।' : 'Complete packaging architecture & corporate collaterals.',
      price: language === 'bn' ? '৳ ৫০,০০০+' : '$900+',
      features: language === 'bn'
        ? ["প্রোডাক্ট বক্স ও ডাই-লাইন ডিজাইন", "বোতল ও লেবেল আর্কিটেকচার", "প্রিন্ট-রেডি CMYK মাস্টার ফাইলস", "৩D ফটোরিয়েলিস্টিক প্রোডাক্ট রেন্ডার", "মার্কেটিং ব্রোশিওর ও ক্যাটালগ"]
        : ["Product Box & Die-Line Layout", "Bottle Label & Container Graphics", "Print-Ready CMYK Master Files", "3D Photorealistic Product Renders", "Corporate Brochure & Catalog"],
      buttonBg: "bg-[#111827] dark:bg-white text-white dark:text-[#111827] hover:bg-[#D4AF37] dark:hover:bg-[#D4AF37] dark:hover:text-white"
    },
    {
      name: language === 'bn' ? 'মাসিক ডিজাইন রিটেইনার' : 'Monthly Design Retainer',
      description: language === 'bn' ? 'নিয়মিত সোশ্যাল ও মার্কেটিং ডিজাইনের জন্য।' : 'Ongoing on-demand graphic design for fast-moving teams.',
      price: language === 'bn' ? '৳ ৩৫,০০০/মাস' : '$650/mo',
      features: language === 'bn'
        ? ["মাসিক ২৫টি ক্রিয়েটিভ ডিজাইন", "বিজ্ঞাপনী ব্যানার ও সোশ্যাল পোস্ট", "ফাস্ট ২৪ ঘণ্টার টার্নঅ্যারাউন্ড", "ডেডিকেটেড সিনিয়র আর্ট ডিরেক্টর"]
        : ["25 Monthly Custom Creatives", "Ad Banners & Social Post Sets", "Fast 24-Hour Turnaround", "Dedicated Senior Art Director"],
      buttonBg: "bg-[#111827] dark:bg-white text-white dark:text-[#111827] hover:bg-[#D4AF37] dark:hover:bg-[#D4AF37] dark:hover:text-white"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#FAFAFA] dark:bg-[#111111] relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#DBEAFE] dark:bg-[#262626] border border-[#1E3A8A]/30 dark:border-white/10 text-[#262626] dark:text-white text-xs font-black tracking-widest mb-4 uppercase shadow-sm">
            {language === 'bn' ? 'স্বচ্ছ ডিজাইন প্যাকেজ' : 'TRANSPARENT PRICING'}
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black text-[#111827] dark:text-white mb-6"
          >
            {language === 'bn' ? 'আপনার ব্র্যান্ডিং প্যাকেজ বেছে নিন' : 'Pick your design package'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            {language === 'bn'
              ? 'আইকনিক কোয়ালিটি, দ্রুত ডেলিভারি এবং ১০০% কমার্শিয়াল ওনারশিপ সহ স্বচ্ছ বাজেট।'
              : 'Clear scopes, vector perfection, and 100% commercial IP rights on every design.'}
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
                <span>{language === 'bn' ? 'এই প্যাকেজটি নিন' : 'Choose Package'}</span>
                <FaArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
