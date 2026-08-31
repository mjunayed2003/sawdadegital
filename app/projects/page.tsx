"use client";
import React, { useState } from 'react';
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LanguageProvider, useLanguage } from "@/components/LanguageContext";
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

function ProjectsContent() {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");

  const filterList = [
    { id: "all", name: language === 'bn' ? 'সব প্রজেক্ট' : 'All Work' },
    { id: "web", name: language === 'bn' ? 'ওয়েব ও অ্যাপ' : 'Web & Apps' },
    { id: "brand", name: language === 'bn' ? 'ব্র্যান্ডিং ও মিডিয়া' : 'Branding & Media' },
    { id: "uiux", name: language === 'bn' ? 'ইউআই/ইউএক্স' : 'UI/UX Design' },
    { id: "growth", name: language === 'bn' ? 'গ্রোথ ও এসইও' : 'Growth & SEO' },
  ];

  const projects3Col = [
    { 
      id: 1, 
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', 
      title: language === 'bn' ? 'ডিজিটাল বাংলাদেশ - টেক পোর্টাল' : 'Digital Tech Ecosystem Portal',
      category: language === 'bn' ? 'ওয়েব প্ল্যাটফর্ম' : 'Web Platform'
    },
    { 
      id: 2, 
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80', 
      title: language === 'bn' ? 'স্মার্ট এডুকেশন ও স্কুল ম্যানেজমেন্ট' : 'Smart School Management System',
      category: language === 'bn' ? 'SaaS সফটওয়্যার' : 'SaaS Software'
    },
    { 
      id: 3, 
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', 
      title: language === 'bn' ? 'ক্লাউড ইনভেন্টরি ও পিওএস সফটওয়্যার' : 'Cloud Inventory & POS ERP',
      category: language === 'bn' ? 'এন্টারপ্রাইজ অ্যাপ' : 'Enterprise App'
    },
  ];

  const projects2Col = [
    { 
      id: 4, 
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80', 
      title: language === 'bn' ? 'ন্যাশনাল মিডিয়া ও লাইভ নিউজ পোর্টাল' : 'National Digital Media & News Portal',
      category: language === 'bn' ? 'মিডিয়া ও প্রকাশনা' : 'Media & Publishing'
    },
    { 
      id: 5, 
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&q=80', 
      title: language === 'bn' ? 'অ্যাগ্রো ও অর্গানিক ই-কমার্স প্ল্যাটফর্ম' : 'Agro Organic E-Commerce Storefront',
      category: language === 'bn' ? 'ই-কমার্স ইকোসিস্টেম' : 'E-Commerce Ecosystem'
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#111111] font-sans overflow-x-hidden text-[#0f172a] dark:text-white transition-colors duration-300">
      <Topbar />
      <Navbar />
      
      <main className="relative pb-32">
        <div className="absolute inset-0 top-0 h-[60vh] z-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        {/* Header Section */}
        <div className="relative z-10 pt-20 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#DBEAFE] dark:bg-[#262626] border border-[#1E3A8A]/30 dark:border-white/10 text-[#262626] dark:text-white text-xs font-black tracking-widest mb-6 uppercase shadow-sm">
              <span className="mr-2 text-[#D4AF37]">🛠</span> {language === 'bn' ? 'নির্বাচিত প্রজেক্টস' : 'SELECTED WORK'}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0f172a] dark:text-white tracking-tight mb-6">
              {language === 'bn' ? 'আমাদের সফল প্রজেক্ট ও পোর্টফোলিও' : "Recent projects we're proud of."}
            </h1>
            <p className="text-lg text-slate-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              {language === 'bn' 
                ? 'দেশ ও বিদেশের ক্লায়েন্টদের জন্য নির্মিত ব্র্যান্ড সিস্টেম, মার্কেটিং সাইট ও সম্পূর্ণ সফটওয়্যার প্রোডাক্টের একটি ঝলক।'
                : "A showcase of brand systems, marketing sites and full product builds we've shipped for clients across industries."}
            </p>

            {/* Filters */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4 bg-white/70 dark:bg-white/5 backdrop-blur-sm p-2 rounded-full border border-slate-200/80 dark:border-white/10 shadow-sm inline-flex">
              {filterList.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeFilter === filter.id 
                    ? 'bg-[#D4AF37] text-white shadow-md transform scale-105' 
                    : 'bg-transparent text-slate-600 dark:text-gray-300 hover:bg-white dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
          {/* 3 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {projects3Col.map((project) => (
              <div key={project.id} className="group relative rounded-3xl overflow-hidden bg-white dark:bg-[#1a1a1a] shadow-sm border border-slate-100 dark:border-white/10 hover:shadow-2xl transition-all duration-500 aspect-[4/3] cursor-pointer flex flex-col">
                <div className="h-8 bg-slate-50 dark:bg-white/5 border-b border-slate-100 dark:border-white/10 flex items-center px-4 gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 relative overflow-hidden bg-slate-100 dark:bg-[#262626]">
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-1">{project.category}</span>
                    <h3 className="text-white text-lg font-bold translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 2 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-24">
            {projects2Col.map(project => (
              <div key={project.id} className="group relative rounded-3xl overflow-hidden bg-white dark:bg-[#1a1a1a] shadow-sm border border-slate-100 dark:border-white/10 hover:shadow-2xl transition-all duration-500 aspect-[16/10] cursor-pointer flex flex-col">
                <div className="h-8 bg-slate-50 dark:bg-white/5 border-b border-slate-100 dark:border-white/10 flex items-center px-4 gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 relative overflow-hidden bg-slate-100 dark:bg-[#262626]">
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-1">{project.category}</span>
                    <h3 className="text-white text-2xl font-bold translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Case Study Section */}
          <div className="max-w-5xl mx-auto bg-white dark:bg-[#1a1a1a] rounded-[2.5rem] p-10 md:p-16 shadow-2xl border border-slate-100 dark:border-white/10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold tracking-widest mb-8 uppercase">
              {language === 'bn' ? 'কেস স্টাডি বিশ্লেষণ' : 'FEATURED CASE STUDY'}
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0f172a] dark:text-white leading-tight mb-6">
              {language === 'bn' 
                ? 'লুমেন অ্যানালিটিক্স: ৯০ দিনে ৩.২ গুণ সেলস গ্রোথ'
                : 'Lumen Analytics: 3.2x Pipeline in 90 Days.'}
            </h2>
            
            <p className="text-slate-500 dark:text-gray-300 text-lg mb-12 max-w-3xl leading-relaxed">
              {language === 'bn'
                ? 'আমরা লুমেনের জন্য সম্পূর্ণ নতুন ওয়েবসাইট, ব্র্যান্ড আইডেন্টিটি এবং ডেটা-চালিত এসইও ক্যাম্পেইন পরিচালনা করেছি যা তাদের রেভিনিউ মাত্র এক কোয়ার্টারে ৩ গুণ বৃদ্ধি করেছে।'
                : "We rebuilt Lumen's website from the ground up, introduced a new brand system, and shipped a paid acquisition program that tripled qualified pipeline in a single quarter."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-4xl font-black text-[#D4AF37] mb-2">+২১৮%</div>
                <div className="text-slate-500 dark:text-gray-400 font-medium text-sm">
                  {language === 'bn' ? 'অর্গানিক সার্চ ট্রাফিক' : 'Organic Traffic'}
                </div>
              </div>
              <div>
                <div className="text-4xl font-black text-[#D4AF37] mb-2">৩.২x</div>
                <div className="text-slate-500 dark:text-gray-400 font-medium text-sm">
                  {language === 'bn' ? 'কোয়ালিফাইড কাস্টমার লিডস' : 'Qualified Pipeline'}
                </div>
              </div>
              <div>
                <div className="text-4xl font-black text-[#D4AF37] mb-2">৪২%</div>
                <div className="text-slate-500 dark:text-gray-400 font-medium text-sm">
                  {language === 'bn' ? 'কম বিজ্ঞাপন খরচ (CAC)' : 'Lower CAC'}
                </div>
              </div>
            </div>

            <Link href="/contact" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4AF37] hover:bg-[#B5952F] text-white rounded-full font-bold shadow-lg shadow-[#D4AF37]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
              {language === 'bn' ? 'আপনার প্রজেক্ট আলোচনা করুন' : 'Start Similar Project'}
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <LanguageProvider>
      <ProjectsContent />
    </LanguageProvider>
  );
}
