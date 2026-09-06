"use client";

import React, { useState } from 'react';
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicePackages from "@/components/expertise/ServicePackages";
import { LanguageProvider, useLanguage } from "@/components/LanguageContext";
import { 
  FaShieldHalved, 
  FaHandHoldingDollar, 
  FaCodeCommit, 
  FaHeadset, 
  FaCircleQuestion, 
  FaChevronDown,
  FaWhatsapp,
  FaArrowRight
} from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

function PricingContent() {
  const { language } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const guarantees = [
    {
      icon: <FaHandHoldingDollar className="w-6 h-6 text-[#9D224D]" />,
      title: language === 'bn' ? 'কোনো লুকানো ফি নেই' : 'Zero Hidden Fees',
      desc: language === 'bn' 
        ? 'চুক্তির বাইরের কোনো অতিরিক্ত চার্জ নেই। যা চুক্তিপত্রে থাকবে, ঠিক ততটুকুই বাজেট।' 
        : 'Transparent scoped pricing. No surprise fees or hidden costs.'
    },
    {
      icon: <FaShieldHalved className="w-6 h-6 text-blue-600" />,
      title: language === 'bn' ? 'মাইলস্টোন পেমেন্ট নিরাপত্তা' : 'Milestone-Based Security',
      desc: language === 'bn' 
        ? 'কাজের অগ্রগতি যাচাই করে ধাপে ধাপে পেমেন্ট করার শতভাগ নিরাপদ ও স্বচ্ছ ব্যবস্থা।' 
        : 'Pay progressively in milestones as project deliverables are reviewed & approved.'
    },
    {
      icon: <FaCodeCommit className="w-6 h-6 text-emerald-600" />,
      title: language === 'bn' ? '১০০% সোর্স কোড ও স্বত্ব' : '100% IP & Asset Ownership',
      desc: language === 'bn' 
        ? 'প্রজেক্ট শেষে সমস্ত ডিজাইন ফাইল, সোর্স কোড ও কমার্শিয়াল লাইসেন্স সম্পূর্ণ আপনার।' 
        : 'Full commercial intellectual property and raw files handed over on delivery.'
    },
    {
      icon: <FaHeadset className="w-6 h-6 text-purple-600" />,
      title: language === 'bn' ? 'ডেডিকেটেড মেইনটেন্যান্স SLA' : 'Post-Launch Tech SLA',
      desc: language === 'bn' 
        ? 'ডেলিভারির পর ফ্রি টেকনিক্যাল সাপোর্ট, বাগ ফিক্সিং ও প্রয়োজনে নিয়মিত রক্ষণাবেক্ষণ।' 
        : 'Free post-launch warranty, ongoing maintenance, and responsive tech lead support.'
    }
  ];

  const faqs = [
    {
      q: language === 'bn' ? 'প্যাকেজের বাইরে আমার কি কাস্টম রিকোয়ারমেন্ট অনুযায়ী কাজ করা সম্ভব?' : 'Can I customize a package for my unique business requirements?',
      a: language === 'bn' 
        ? 'হ্যাঁ, অবশ্যই! প্রতিটি সার্ভিসের নিচে কাস্টম চেকবক্স রয়েছে যা দিয়ে আপনি প্রয়োজনমতো ফিচার যুক্ত বা বাদ দিতে পারেন। এছাড়া আপনার যদি সম্পূর্ণ ইউনিক বা বড় কোনো প্রজেক্ট থাকে, তবে সরাসরি আমাদের সাথে আলোচনা করে কাস্টম বাজেট নির্ধারণ করতে পারেন।'
        : 'Absolutely! Every service includes modular add-on checkboxes to tailor scope and budget. For bespoke platforms, contact us directly for an itemized custom proposal.'
    },
    {
      q: language === 'bn' ? 'পেমেন্ট মেথড ও প্রক্রিয়া কীভাবে সম্পন্ন হয়?' : 'What payment methods and milestone schedules do you accept?',
      a: language === 'bn' 
        ? 'আমরা বিকাশ, নগদ, ব্যাংক ট্রান্সফার (BEFTN/RTGS) এবং আন্তর্জাতিক ক্লায়েন্টদের জন্য ওয়্যার/স্ট্রাইপ সাপোর্ট করি। সাধারণত প্রজেক্ট শুরুর আগে ৫০% অ্যাডভান্স এবং ডেলিভারি ও ক্লায়েন্ট টেস্টের পর বাকি ৫০% পরিশোধ করতে হয়।'
        : 'We accept local mobile banking (bKash/Nagad), corporate bank wires, and cards. Projects are typically structured with a 50% kick-off deposit and 50% upon completed review.'
    },
    {
      q: language === 'bn' ? 'কাজ ডেলিভারির পর যদি কোনো পরিবর্তন বা সমস্যা হয়?' : 'What happens if we need revisions or bug fixes after launch?',
      a: language === 'bn' 
        ? 'আমাদের প্রতিটি প্যাকেজেই নির্দিষ্ট সংখ্যক ফ্রি রিভিশন এবং ১ থেকে ৬ মাসের টেকনিক্যাল ওয়ারেন্টি/সাপোর্ট অন্তর্ভুক্ত থাকে। নির্ধারিত সময়ের মধ্যে যে কোনো বাগ বা টেকনিক্যাল সমস্যা আমরা সম্পূর্ণ ফ্রিতে সমাধান করে দিই।'
        : 'All packages include free revision cycles and 1-6 months of post-launch technical warranty. Any bugs within the agreed scope are addressed without extra charge.'
    },
    {
      q: language === 'bn' ? 'প্রজেক্ট শেষ হতে সাধারণত কত দিন সময় লাগে?' : 'What is the typical turnaround timeline for projects?',
      a: language === 'bn' 
        ? 'ওয়ার্ডপ্রেস ও উইক্স ওয়েবসাইট সাধারণত ৩-৭ দিন, শপিফাই স্টোর ৫-১০ দিন, কাস্টম Next.js ওয়েব অ্যাপ ২-৩ সপ্তাহ এবং মোবাইল অ্যাপ ৩-৫ সপ্তাহের মধ্যে সম্পূর্ণ প্রস্তুত করে ডেলিভারি করা হয়। জরুরি প্রয়োজনে আমাদের ২৪-ঘণ্টা এক্সপ্রেস অপশনও রয়েছে।'
        : 'CMS sites typically take 3-7 days, Shopify stores 5-10 days, fullstack custom web apps 2-3 weeks, and mobile apps 3-5 weeks depending on scope.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0f0f11] text-slate-900 dark:text-slate-100 selection:bg-[#9D224D] selection:text-white">
      {/* Top Banner & Main Nav */}
      <Topbar />
      <Navbar />

      <main className="relative overflow-hidden pt-8 pb-20">
        {/* Hero Section */}
        <section className="relative pt-12 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCE7F3] dark:bg-white/10 border border-[#9D224D]/20 dark:border-white/10 text-[#9D224D] dark:text-pink-300 text-xs font-black tracking-widest uppercase mb-5 shadow-sm"
          >
            <span>{language === 'bn' ? 'স্বচ্ছ প্রাইসিং ও সার্ভিস প্যাকেজ' : 'TRANSPARENT ALL-SERVICE PACKAGES'}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#111827] dark:text-white mb-6 max-w-4xl mx-auto leading-tight"
          >
            {language === 'bn' 
              ? 'সকল ডিজিটাল সেবার মূল্য তালিকা ও প্যাকেজ' 
              : 'Enterprise Quality with Transparent BDT Pricing'}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            {language === 'bn'
              ? 'নিচের সাব-ন্যাভবারে যে কোনো সার্ভিসের নামে ক্লিক করুন। প্রতিটি সার্ভিসের বিস্তারিত প্যাকেজ, ডেলিভারেবল এবং কাস্টম চেকবক্স দিয়ে লাইভ বাজেট দেখুন।'
              : 'Click any service on the navigation bar below to view full deliverable tiers, modular add-on checkboxes, and instant budget calculations in Taka.'}
          </motion.p>
        </section>

        {/* Interactive Service Packages Hub (With sticky sub-navbar) */}
        <ServicePackages initialCategory="web-development" hideHeader={true} />

        {/* Trust & Guarantee Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-[#111827] dark:text-white mb-3">
              {language === 'bn' ? 'সাওদা ডিজিটালে আমাদের মূল অঙ্গীকার' : 'Our Quality & Financial Commitments'}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400">
              {language === 'bn' 
                ? 'আমরা শুধু সেবা দিই না, নিশ্চিত করি সর্বোচ্চ ব্যবসায়িক রিটার্ন ও দীর্ঘমেয়াদী আস্থা।' 
                : 'Engineered for highest return on investment with absolute contractual clarity.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-3xl bg-white dark:bg-[#1a1a1a] border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center mb-4 border border-slate-100 dark:border-white/5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-300 text-xs font-bold uppercase tracking-wider mb-3">
              <FaCircleQuestion className="text-[#9D224D]" />
              <span>FAQ</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#111827] dark:text-white">
              {language === 'bn' ? 'প্রাইসিং ও প্রজেক্ট সম্পর্কিত সাধারণ জিজ্ঞাসা' : 'Frequently Asked Questions'}
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl bg-white dark:bg-[#1a1a1a] border border-slate-200/80 dark:border-white/10 overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-white text-sm sm:text-base cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <FaChevronDown className={`w-4 h-4 text-[#9D224D] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-slate-100 dark:border-white/5"
                      >
                        <div className="p-6 pt-4 text-xs sm:text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom Fast CTA Banner */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-[#111827] via-[#1a2333] to-[#0f172a] text-white p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl border border-white/10">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-4xl font-black mb-4">
                {language === 'bn' 
                  ? 'আপনার প্রজেক্টের জন্য নিখুঁত বাজেট জানতে চান?' 
                  : 'Ready to bring your digital vision to life?'}
              </h2>
              <p className="text-sm sm:text-base text-gray-300 mb-8 leading-relaxed">
                {language === 'bn'
                  ? 'আমাদের টেকনিক্যাল এক্সপার্টদের সাথে সরাসরি হোয়াটসঅ্যাপে কথা বলুন অথবা ফ্রি কনসাল্টেশনের জন্য মেসেজ দিন।'
                  : 'Chat directly with our senior leads on WhatsApp or book a 30-minute discovery strategy session.'}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://wa.me/8801700000000?text=Hello%20Sawda%20Digital,%20I%20would%20like%20to%20discuss%20a%20project%20budget"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm flex items-center gap-3 transition-all shadow-lg shadow-emerald-500/30 hover:scale-105"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>{language === 'bn' ? 'হোয়াটসঅ্যাপে চ্যাট করুন' : 'WhatsApp Us Directly'}</span>
                </a>
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-white text-slate-900 hover:bg-[#FCE7F3] font-bold text-sm flex items-center gap-2 transition-all shadow-md hover:scale-105"
                >
                  <span>{language === 'bn' ? 'কাস্টম কোট পাঠান' : 'Submit Custom Brief'}</span>
                  <FaArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function PricingPage() {
  return (
    <LanguageProvider>
      <PricingContent />
    </LanguageProvider>
  );
}
