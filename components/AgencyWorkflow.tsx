"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';
import { 
  FaMagnifyingGlass, 
  FaBezierCurve, 
  FaCode, 
  FaCheckDouble, 
  FaRocket,
  FaShieldHalved,
  FaBolt,
  FaCodeCommit,
  FaHeadset
} from 'react-icons/fa6';
import Link from 'next/link';

export default function AgencyWorkflow() {
  const { language } = useLanguage();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const MotionDiv = (mounted ? motion.div : 'div') as any;

  const steps = [
    {
      num: '01',
      icon: <FaMagnifyingGlass className="w-5 h-5" />,
      title: language === 'bn' ? 'কৌশলগত গবেষণা ও লক্ষ্য নির্ধারণ' : 'Strategic Discovery & Analysis',
      desc: language === 'bn'
        ? 'আপনার ব্যবসার লক্ষ্য, প্রতিযোগী বিশ্লেষণ এবং কাঙ্ক্ষিত অডিয়েন্স রিসার্চের মাধ্যমে নিখুঁত ডিজিটাল রোডম্যাপ তৈরি।'
        : 'In-depth market research, competitor benchmarking, and target persona analysis to map out a winning digital roadmap.'
    },
    {
      num: '02',
      icon: <FaBezierCurve className="w-5 h-5" />,
      title: language === 'bn' ? 'ইউআই/ইউএক্স প্রোটোটাইপিং ও ডিজাইন' : 'Experience Design & Prototyping',
      desc: language === 'bn'
        ? 'আধুনিক ফিগমা প্রোটোটাইপ, ইউজার ফ্রেন্ডলি ওয়্যারফ্রেম এবং ব্র্যান্ড গাইডলাইন দিয়ে আকর্ষণীয় ইন্টারফেস তৈরি।'
        : 'User-centric wireframes, interactive Figma prototypes, and cohesive design systems crafted for high conversion.'
    },
    {
      num: '03',
      icon: <FaCode className="w-5 h-5" />,
      title: language === 'bn' ? 'কাস্টম কোডিং ও সফটওয়্যার আর্কিটেকচার' : 'Full-Stack Engineering & Development',
      desc: language === 'bn'
        ? 'Next.js, React, Node.js এবং আধুনিক ক্লাউড স্ট্যাক দিয়ে দ্রুতগতির, সুরক্ষিত এবং স্কেলেবল সফটওয়্যার ডেভেলপমেন্ট।'
        : 'Building clean, secure, and blazing-fast architectures using Next.js, React, Node.js, React Native, and cloud APIs.'
    },
    {
      num: '04',
      icon: <FaCheckDouble className="w-5 h-5" />,
      title: language === 'bn' ? 'নিখুঁত টেস্টিং ও স্পিড অপ্টিমাইজেশন' : 'Rigorous QA & Performance Testing',
      desc: language === 'bn'
        ? 'প্রতিটি ডিভাইসে রেসপনসিভনেস, ক্রস-ব্রাউজার কম্প্যাটিবিলিটি এবং সাব-সেকেন্ড লোডিং স্পিড নিশ্চিতকরণ।'
        : 'Exhaustive cross-device responsiveness, accessibility checks, bug testing, and 95+ Google PageSpeed optimization.'
    },
    {
      num: '05',
      icon: <FaRocket className="w-5 h-5" />,
      title: language === 'bn' ? 'লাইভ লঞ্চ ও এসইও গ্রোথ স্কেলিং' : 'Deployment & Data-Driven SEO Growth',
      desc: language === 'bn'
        ? 'ক্লাউড সার্ভারে লাইভ ডেপ্লয়মেন্ট, টেকনিক্যাল এসইও সেটআপ এবং গুগল ১ নম্বর র‍্যাঙ্কিং স্ট্র্যাটেজি বাস্তবায়ন।'
        : 'Seamless cloud deployment on AWS / Vercel, comprehensive technical SEO indexing, and continuous revenue scaling.'
    }
  ];

  const pillars = [
    {
      icon: <FaBolt className="w-6 h-6 text-amber-500" />,
      title: language === 'bn' ? 'সাব-সেকেন্ড লোডিং স্পিড' : 'Sub-Second Performance',
      desc: language === 'bn'
        ? 'আধুনিক Next.js ও অপ্টিমাইজড অ্যাসেট ব্যবহারের ফলে আমাদের তৈরি ওয়েবসাইটগুলো পলকের মধ্যে লোড হয়, যা ইউজার এনগেজমেন্ট ও গুগল র‍্যাঙ্কিং বৃদ্ধি করে।'
        : 'Modern server-side rendering and edge caching guarantee blazing fast sub-second load times that keep visitors engaged and boost search engine rankings.'
    },
    {
      icon: <FaShieldHalved className="w-6 h-6 text-blue-500" />,
      title: language === 'bn' ? 'মাইলস্টোন পেমেন্ট ও শতভাগ নিরাপত্তা' : 'Milestone-Based Security',
      desc: language === 'bn'
        ? 'কাজের প্রতিটি ধাপ রিভিউ ও অ্যাপ্রুভ করার পর ধাপে ধাপে পেমেন্ট করার স্বচ্ছ ব্যবস্থা। কোনো লুকানো চার্জ বা অপ্রত্যাশিত খরচ নেই।'
        : 'Pay progressively in milestone-based stages as deliverables are reviewed and approved. Absolute pricing transparency with zero hidden costs.'
    },
    {
      icon: <FaCodeCommit className="w-6 h-6 text-emerald-500" />,
      title: language === 'bn' ? '১০০% সোর্স কোড ও অ্যাসেট স্বত্ব' : '100% IP & Source Code Ownership',
      desc: language === 'bn'
        ? 'প্রজেক্ট সম্পন্ন হওয়ার পর সমস্ত সোর্স কোড, ফিগমা ডিজাইন ফাইল ও কমার্শিয়াল লাইসেন্স সম্পূর্ণ আপনার নামে হস্তান্তর করা হয়।'
        : 'Full commercial intellectual property and raw files are transferred to you upon delivery, backed by clean Git version control.'
    },
    {
      icon: <FaHeadset className="w-6 h-6 text-purple-500" />,
      title: language === 'bn' ? 'ডেডিকেটেড টেকনিক্যাল ওয়ারেন্টি' : 'Post-Launch Tech Support SLA',
      desc: language === 'bn'
        ? 'প্রজেক্ট ডেলিভারির পর আমরা বিনামূল্যে টেকনিক্যাল ওয়ারেন্টি, বাগ ফিক্সিং এবং জরুরি সাপোর্ট প্রদান করে আপনার ব্যবসাকে নিরাপদ রাখি।'
        : 'Every deployment includes a free post-launch warranty, continuous technical maintenance, and responsive direct communication with our senior leads.'
    }
  ];

  const industries = [
    {
      name: language === 'bn' ? 'ই-কমার্স ও রিটেল ব্র্যান্ড' : 'E-Commerce & Retail Brands',
      desc: language === 'bn' ? 'বিকাশ, নগদ ও আন্তর্জাতিক গেটওয়েযুক্ত হাই-কনভার্শন শপিফাই ও কাস্টম অনলাইন স্টোর।' : 'High-converting custom Shopify storefronts, automated inventory management, and bKash/Nagad checkout.'
    },
    {
      name: language === 'bn' ? 'এন্টারপ্রাইজ SaaS ও সফটওয়্যার' : 'Enterprise SaaS & Cloud Platforms',
      desc: language === 'bn' ? 'স্কেলেবল ওয়েব পোর্টাল, সাবস্ক্রিপশন ম্যানেজমেন্ট ও ক্লাউড ডাটাবেস আর্কিটেকচার।' : 'Scalable multi-tenant web portals, real-time analytics dashboards, and secure backend APIs.'
    },
    {
      name: language === 'bn' ? 'রিয়েল এস্টেট ও কনস্ট্রাকশন' : 'Real Estate & Property Development',
      desc: language === 'bn' ? 'প্রোপ্রার্টি লিস্টিং, ভার্চুয়াল ট্যুর এবং লিড জেনারেশন ফানেল।' : 'Interactive property listings, virtual unit showcases, and automated high-intent buyer inquiries.'
    },
    {
      name: language === 'bn' ? 'শিক্ষা ও এডটেক প্ল্যাটফর্ম' : 'Education & EdTech Portals',
      desc: language === 'bn' ? 'অনলাইন কোর্স, স্কুল ম্যানেজমেন্ট ও স্টুডেন্ট পোর্টাল সলিউশন।' : 'Learning management systems (LMS), student portals, course marketplaces, and automated certifications.'
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#111111] relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#FCE7F3] dark:bg-[#262626] border border-[#334155]/30 dark:border-white/10 text-[#262626] dark:text-white text-xs font-black tracking-widest mb-4 uppercase shadow-sm">
            {language === 'bn' ? 'আমাদের কার্যপ্রণালী' : 'HOW WE DELIVER EXCELLENCE'}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f172a] dark:text-white tracking-tight mb-6">
            {language === 'bn' ? 'পরিকল্পনা থেকে সাফল্য: আমাদের প্রমাণিত ৫ ধাপ' : 'From Vision to Market Leader: Our 5-Step Process'}
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
            {language === 'bn'
              ? 'সাওদা ডিজিটাল শুধুমাত্র কোড লেখে না—আমরা একটি সুশৃঙ্খল ফ্রেমওয়ার্ক অনুসরণ করে প্রতিটি প্রজেক্টকে একটি টেকসই এবং লাভজনক ব্যবসায়িক সম্পদে রূপান্তরিত করি।'
              : 'At Sawda Digital, we follow an engineering-first lifecycle that combines deep business strategy, world-class design, and robust modern code.'}
          </p>
        </div>

        {/* 5-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-24">
          {steps.map((step, idx) => (
            <MotionDiv
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-[#F8FAFC] dark:bg-[#1a1a1a] border border-slate-200/80 dark:border-white/10 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-[#9D224D]">{step.num}</span>
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-white/10 text-[#9D224D] flex items-center justify-center shadow-xs group-hover:bg-[#9D224D] group-hover:text-white transition-colors">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-base font-bold text-[#0f172a] dark:text-white mb-3 group-hover:text-[#9D224D] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </MotionDiv>
          ))}
        </div>

        {/* Why Ambitious Teams Choose Us */}
        <div className="bg-[#0f172a] rounded-[2.5rem] p-8 sm:p-14 text-white mb-24 relative overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#9D224D] rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl mb-12">
            <span className="text-xs font-bold text-[#f472b6] uppercase tracking-widest block mb-2">
              {language === 'bn' ? 'সাওদা ডিজিটাল সুবিধা' : 'THE SAWDA DIGITAL ADVANTAGE'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black mb-4">
              {language === 'bn' 
                ? 'যে কারণে শীর্ষ প্রতিষ্ঠানগুলো আমাদের ওপর আস্থা রাখে' 
                : 'Engineered for Performance, Reliability & Measurable Growth'}
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {language === 'bn'
                ? 'আমরা প্রথাগত আউটসোর্সিং মডেল ভেঙে সরাসরি সিনিয়র টিম এবং ডেডিকেটেড ইঞ্জিনিয়ারদের মাধ্যমে কাজ সম্পাদন করি, যা আপনার সময় ও বিনিয়োগের সর্বোচ্চ মূল্য নিশ্চিত করে।'
                : 'We eliminate technical debt, bloated agency overhead, and communication bottlenecks. You work directly with experienced software engineers and growth architects.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {pillars.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Verticals */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0f172a] dark:text-white mb-3">
              {language === 'bn' ? 'যেসব খাতে আমাদের বিশেষ অভিজ্ঞতা রয়েছে' : 'Industry Domains We Specialize In'}
            </h2>
            <p className="text-sm text-slate-500 dark:text-gray-400">
              {language === 'bn'
                ? 'বিভিন্ন সেক্টরের ব্যবসায়িক চ্যালেঞ্জ সমাধান করে বাস্তবসম্মত ডিজিটাল সমাধান তৈরি।'
                : 'Tailored digital solutions built around the unique regulatory and operational needs of key sectors.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-3xl bg-[#F8FAFC] dark:bg-[#1a1a1a] border border-slate-200/80 dark:border-white/10 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-[#0f172a] dark:text-white mb-2">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-white/5">
                  <Link 
                    href="/contact" 
                    className="text-xs font-bold text-[#9D224D] hover:underline flex items-center gap-1"
                  >
                    <span>{language === 'bn' ? 'পরামর্শ নিন' : 'Discuss Sector Scope'}</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
