"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicePackages from "@/components/expertise/ServicePackages";
import { LanguageProvider, useLanguage } from "@/components/LanguageContext";
import { 
  FaCode, FaVideo, FaRobot, FaBullhorn, 
  FaPenNib, FaDesktop, FaMagnifyingGlass, 
  FaBriefcase, FaUsers, FaLayerGroup, FaClock, FaHandshake,
  FaCrown, FaLaptopCode, FaChartPie, FaShopify
} from 'react-icons/fa6';
import { FaLinkedinIn, FaXTwitter, FaFacebookF, FaGithub } from 'react-icons/fa6';
import { FiArrowRight } from 'react-icons/fi';
import { useSafeMotion } from '@/components/ui/SafeMotion';

function ExpertiseContent() {
  const { language } = useLanguage();
  const { MotionDiv } = useSafeMotion();

  const team = [
    { 
      name: language === 'bn' ? 'মোঃ খাইরুল বাশার' : 'Md Khairul Bashar', 
      role: language === 'bn' ? 'প্রতিষ্ঠাতা ও সিইও' : 'Founder & CEO', 
      initials: 'KB',
      image: '/team-member/MdKhairulBashar3.PNG',
      objectPosition: '',
      tag: language === 'bn' ? 'এক্সিকিউটিভ লিড' : 'Executive Lead',
      accentColor: 'from-amber-500 to-orange-600',
      lightBg: 'bg-amber-500/10 dark:bg-amber-500/15',
      tagColor: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-800/40',
      glowColor: 'group-hover:border-amber-500/40 group-hover:shadow-amber-500/10',
      badgeIcon: <FaCrown className="w-3.5 h-3.5 text-amber-500" />,
      avatarGradient: 'from-amber-400 via-orange-500 to-amber-600',
      description: language === 'bn' 
        ? 'দূরদর্শী নেতৃত্বের মাধ্যমে ডিজিটাল কৌশল, ব্যবসায়িক প্রবৃদ্ধি এবং ব্র্যান্ড ট্রান্সফর্মেশন পরিচালনা।'
        : 'Visionary leadership driving digital strategy, growth, and brand transformation.'
    },
    { 
      name: language === 'bn' ? 'মোঃ জুনায়েদ' : 'Md Junayed', 
      role: language === 'bn' ? 'হেড অব ওয়েব অ্যান্ড টেকনোলজি' : 'Head of Web & Technology', 
      initials: 'MJ',
      image: '/team-member/junayed3.jpeg',
      objectPosition: 'object-[center_15%] scale-[1]',
      tag: language === 'bn' ? 'ওয়েব ও টেকনোলজি' : 'Web & Technology',
      accentColor: 'from-blue-500 to-indigo-600',
      lightBg: 'bg-blue-500/10 dark:bg-blue-500/15',
      tagColor: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800/40',
      glowColor: 'group-hover:border-blue-500/40 group-hover:shadow-blue-500/10',
      badgeIcon: <FaLaptopCode className="w-3.5 h-3.5 text-blue-500" />,
      avatarGradient: 'from-blue-400 via-indigo-500 to-cyan-500',
      description: language === 'bn'
        ? 'স্কেলেবল, সুরক্ষিত এবং উচ্চগতির আধুনিক সফটওয়্যার আর্কিটেকচার ও ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্ট।'
        : 'Engineering scalable, secure, and modern digital architectures & applications.'
    },
    { 
      name: language === 'bn' ? 'মোঃ মহিবুল্লাহ ইসলাম রেজা' : 'Md Mohibullah Islam Reza', 
      role: language === 'bn' ? 'হেড অব স্ট্র্যাটেজি অ্যান্ড বিজনেস ডেভেলপমেন্ট' : 'Head of Strategy & Business Development', 
      initials: 'MR',
      image: '/team-member/reza.PNG',
      objectPosition: 'object-top',
      tag: language === 'bn' ? 'মার্কেট ও স্ট্র্যাটেজি' : 'Market & Strategy',
      accentColor: 'from-emerald-500 to-teal-600',
      lightBg: 'bg-emerald-500/10 dark:bg-emerald-500/15',
      tagColor: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-800/40',
      glowColor: 'group-hover:border-emerald-500/40 group-hover:shadow-emerald-500/10',
      badgeIcon: <FaChartPie className="w-3.5 h-3.5 text-emerald-500" />,
      avatarGradient: 'from-emerald-400 via-teal-500 to-green-600',
      description: language === 'bn'
        ? 'ডেটা-ভিত্তিক বাজার বিশ্লেষণ এবং ব্যবসায়িক প্রবৃদ্ধি বৃদ্ধির কৌশল প্রণয়ন।'
        : 'Developing data-driven market strategies and business optimization models.'
    },
    { 
      name: language === 'bn' ? 'মোঃ আসফিয়ার রহমান মারজান' : 'Md Asfier Rahman Marjan', 
      role: language === 'bn' ? 'উইক্স, ওয়ার্ডপ্রেস ও শপিফাই বিশেষজ্ঞ' : 'Wix, WordPress & Shopify Specialist', 
      initials: 'AM',
      image: '/team-member/MdAsfierRahmanMarjan.jpeg',
      objectPosition: 'object-[center_15%] scale-[1.1]',
      tag: language === 'bn' ? 'উইক্স, ওয়ার্ডপ্রেস ও শপিফাই' : 'Wix, WordPress & Shopify',
      accentColor: 'from-rose-500 to-pink-600',
      lightBg: 'bg-rose-500/10 dark:bg-rose-500/15',
      tagColor: 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/50 border-rose-200 dark:border-rose-800/40',
      glowColor: 'group-hover:border-rose-500/40 group-hover:shadow-rose-500/10',
      badgeIcon: <FaShopify className="w-3.5 h-3.5 text-rose-500" />,
      avatarGradient: 'from-rose-400 via-pink-500 to-purple-600',
      description: language === 'bn'
        ? 'শপিফাই স্টোরফ্রন্ট, কাস্টম ওয়ার্ডপ্রেস এবং উইক্স প্ল্যাটফর্মে হাই-পারফর্মিং ওয়েবসাইট তৈরি।'
        : 'Specializing in high-converting Shopify stores, custom WordPress websites, and modern Wix solutions.'
    },
    { 
      name: language === 'bn' ? 'আশিক মোস্তফা তন্ময়' : 'Ashik Mostofa Tonmoy', 
      role: language === 'bn' ? 'মার্কেটিং অ্যান্ড ব্র্যান্ডিং এক্সিকিউটিভ' : 'Marketing & Branding Executive', 
      initials: 'AT',
      image: '/team-member/AshikMostofaTonmoy.jpeg',
      objectPosition: 'object-[center_5%] scale-[1.3]',
      tag: language === 'bn' ? 'মার্কেটিং ও ব্র্যান্ডিং' : 'Marketing & Branding',
      accentColor: 'from-violet-500 to-purple-600',
      lightBg: 'bg-violet-500/10 dark:bg-violet-500/15',
      tagColor: 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/50 border-violet-200 dark:border-violet-800/40',
      glowColor: 'group-hover:border-violet-500/40 group-hover:shadow-violet-500/10',
      badgeIcon: <FaBullhorn className="w-3.5 h-3.5 text-violet-500" />,
      avatarGradient: 'from-violet-400 via-purple-500 to-fuchsia-600',
      description: language === 'bn'
        ? 'উদ্ভাবনী ব্র্যান্ডিংয়ের মাধ্যমে ব্র্যান্ড কৌশল, বিপণন প্রচারাভিযান এবং ব্যবসায়িক প্রবৃদ্ধি পরিচালনা।'
        : 'Driving brand strategy, marketing campaigns, and business growth through innovative branding.'
    }
  ];

  const services = [
    { icon: <FaCode />, title: language === 'bn' ? 'ওয়েব ডিজাইন ও ডেভেলপমেন্ট' : 'Web Design & Development', desc: language === 'bn' ? 'কাস্টম ওয়েবসাইট, SaaS প্ল্যাটফর্ম এবং উচ্চগতির ওয়েব অ্যাপ্লিকেশন।' : 'Custom high-performance websites, SaaS platforms, and scalable web apps.', color: 'bg-[#1a1a1a]', path: '/services/web-development' },
    { icon: <FaVideo />, title: language === 'bn' ? 'মিডিয়া ও কনটেন্ট প্রোডাকশন' : 'Media & Content Production', desc: language === 'bn' ? 'বাণিজ্যিক ভিডিও, ব্র্যান্ড ফিল্ম ও সিনেমাটিক প্রমোশনাল কনটেন্ট।' : 'Cinematic commercials, brand films, animation, and multimedia assets.', color: 'bg-[#9D224D]', path: '/services/video-production' },
    { icon: <FaBullhorn />, title: language === 'bn' ? 'সোশ্যাল মিডিয়া ম্যানেজমেন্ট ও মার্কেটিং' : 'Social Media Management & Marketing', desc: language === 'bn' ? 'কৌশলগত সোশ্যাল ক্যাম্পেইন, টার্গেটেড বিজ্ঞাপন ও অডিয়েন্স গ্রোথ।' : 'Strategic social campaigns, paid acquisition, and compound growth.', color: 'bg-[#1a1a1a]', path: '/services/marketing-sales' },
    { icon: <FaPenNib />, title: language === 'bn' ? 'ব্র্যান্ডিং ও গ্রাফিক্স ডিজাইন' : 'Branding & Graphics Design', desc: language === 'bn' ? 'লোগো, ভিজ্যুয়াল আইডেন্টিটি এবং প্রিমিয়াম ডিজাইন সিস্টেম।' : 'Visual identity systems, logos, packaging, and advertising creatives.', color: 'bg-[#9D224D]', path: '/services/graphics-design' },
    { icon: <FaMagnifyingGlass />, title: language === 'bn' ? 'এসইও ও গুগল মার্কেটিং' : 'SEO & Google Marketing', desc: language === 'bn' ? 'টেকনিক্যাল এসইও ও গুগল সার্চ অ্যাডস দিয়ে ১ নম্বর র‍্যাঙ্কিং।' : 'Data-driven search engine optimization and targeted Google Ads.', color: 'bg-[#1a1a1a]', path: '/services/seo' },
    { icon: <FaBriefcase />, title: language === 'bn' ? 'ই-কমার্স সলিউশনস' : 'E-commerce Solutions', desc: language === 'bn' ? 'বিকাশ/নগদ পেমেন্ট গেটওয়েসহ হাই-কনভার্শন অনলাইন স্টোর।' : 'Full-featured online stores, payment integrations, and sales funnels.', color: 'bg-[#9D224D]', path: '/services/ecommerce' },
    { icon: <FaRobot />, title: language === 'bn' ? 'অ্যাপ ডেভেলপমেন্ট' : 'App Development', desc: language === 'bn' ? 'iOS ও অ্যান্ড্রয়েড ক্রস-প্ল্যাটফর্ম হাই-পারফরম্যান্স মোবাইল অ্যাপ।' : 'Custom iOS, Android, and cross-platform mobile applications.', color: 'bg-[#1a1a1a]', path: '/services/app-development' },
    { icon: <FaDesktop />, title: language === 'bn' ? 'ইউআই/ইউএক্স ডিজাইন' : 'UI/UX Design', desc: language === 'bn' ? 'ইউজার রিসার্চ, ফিগমা প্রোটোটাইপিং ও পিক্সেল-পারফেক্ট ইন্টারফেস।' : 'Research-led product design, intuitive wireframing, and Figma UI.', color: 'bg-[#9D224D]', path: '/services/ui-ux' },
  ];

  const features = [
    { icon: <FaUsers />, title: language === 'bn' ? 'অভিজ্ঞ সিনিয়র টিম' : 'Senior-only teams', desc: language === 'bn' ? 'প্রতিটি প্রজেক্ট সরাসরি দক্ষ সিনিয়র ডেভেলপার ও ডিজাইনারদের দ্বারা পরিচালিত হয়।' : 'Every project is led and executed by experienced specialists.' },
    { icon: <FaLayerGroup />, title: language === 'bn' ? 'এক স্টুডিওতে সব সেবা' : 'One studio, all skills', desc: language === 'bn' ? 'ডিজাইন, সফটওয়্যার, ভিডিও এবং মার্কেটিং—সবকিছু এক ছাদের নিচে।' : 'Design, engineering, marketing and strategy under one roof.' },
    { icon: <FaClock />, title: language === 'bn' ? 'দ্রুত প্রজেক্ট ডেলিভারি' : 'Speed to market', desc: language === 'bn' ? 'প্রমাণিত ফ্রেমওয়ার্কের মাধ্যমে মাসের পর মাস নয়, মাত্র কয়েক সপ্তাহে ডেলিভারি।' : 'Proven frameworks that get your project live in weeks, not months.' },
    { icon: <FaHandshake />, title: language === 'bn' ? 'স্বচ্ছ বাজেট ও চুক্তি' : 'Transparent pricing', desc: language === 'bn' ? 'স্পষ্ট কাজের বিবরণী ও ফিক্সড প্রাইসিং। কোনো লুকানো চার্জ নেই।' : 'Fixed-scope packages with clear deliverables and no hidden fees.' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#111111] font-sans overflow-x-hidden text-[#0f172a] dark:text-white transition-colors duration-300">
      <Topbar />
      <Navbar />
      
      <main className="relative pb-32">
        <div className="absolute inset-0 top-0 h-[60vh] z-0 opacity-40 pointer-events-none bg-grid-dots-light"></div>

        {/* Leadership Team Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 mb-32 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#FCE7F3] dark:bg-[#262626] border border-[#334155]/30 dark:border-white/10 text-[#262626] dark:text-white text-xs font-black tracking-widest mb-4 uppercase shadow-sm">
              {language === 'bn' ? 'আমাদের দক্ষ নেতৃত্ব' : 'LEADERSHIP'}
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] dark:text-white">
              {language === 'bn' ? 'কাজের পেছনের দক্ষ কারিগরদের সাথে পরিচিত হোন' : 'Meet the experts behind the work'}
            </h2>
            <p className="mt-4 text-slate-500 dark:text-gray-400 max-w-2xl mx-auto">
              {language === 'bn' 
                ? 'সাওদা ডিজিটাল পরিচালনা করছেন এমন একদল উদ্যমী তরুণ টেক ও বিজনেস বিশেষজ্ঞ, যারা আপনার ব্র্যান্ডকে নিয়ে যাবে সাফল্যের শীর্ষে।'
                : 'A multidisciplinary collective of engineers, designers, and growth architects.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <MotionDiv 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative bg-white dark:bg-[#1a1a1a] rounded-[2.5rem] p-5 text-center border border-slate-200/80 dark:border-white/10 shadow-lg hover:shadow-2xl ${member.glowColor} transition-all duration-500 flex flex-col items-center justify-between group overflow-hidden`}
              >
                <div className={`absolute -top-16 -right-16 w-36 h-36 bg-gradient-to-br ${member.accentColor} rounded-full blur-3xl opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`} />

                <div className="w-full flex items-center justify-between mb-3">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase border ${member.tagColor}`}>
                    {member.badgeIcon}
                    {member.tag}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Active" />
                </div>

                <div className="relative mb-3">
                  <div className="relative p-1.5 rounded-[2.7rem] bg-gradient-to-b from-white dark:from-white/20 to-slate-100 dark:to-white/5 border border-slate-200/60 dark:border-white/10 shadow-md group-hover:shadow-xl transition-all duration-500">
                    <div className={`w-44 h-44 lg:w-48 lg:h-48 rounded-[2.5rem] bg-gradient-to-br ${member.avatarGradient} flex items-center justify-center shadow-inner relative overflow-hidden group-hover:scale-[1.03] transition-transform duration-500`}>
                      {member.image ? (
                        <Image src={member.image} alt={member.name} width={200} height={200} className={`w-full h-full object-cover ${member.objectPosition || ''}`} />
                      ) : (
                        <span className="text-4xl font-black text-white tracking-wider drop-shadow-md">
                          {member.initials}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-between w-full">
                  <div>
                    <h3 className="text-xl font-bold text-[#0f172a] dark:text-white mb-1.5 group-hover:text-[#9D224D] transition-colors duration-300 min-h-[56px] flex items-center justify-center text-center">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#9D224D] mb-1 min-h-[32px] flex items-center justify-center text-center">
                      {member.role}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed mb-3 min-h-[64px] flex items-center justify-center text-center">
                      {member.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-white/10 flex items-center justify-center gap-3">
                    <a href="https://linkedin.com/company/sawdadigital" target="_blank" rel="noopener noreferrer nofollow" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-[#9D224D] dark:hover:bg-[#9D224D] hover:text-white text-slate-500 dark:text-gray-400 flex items-center justify-center text-xs transition-colors">
                      <FaLinkedinIn />
                    </a>
                    <a href="https://www.facebook.com/share/194KjGcPox/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer nofollow" aria-label="Facebook" className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-[#9D224D] dark:hover:bg-[#9D224D] hover:text-white text-slate-500 dark:text-gray-400 flex items-center justify-center text-xs transition-colors">
                      <FaFacebookF />
                    </a>
                    <a href="https://x.com/sawdadigital?s=11" target="_blank" rel="noopener noreferrer nofollow" aria-label="Twitter" className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-[#9D224D] dark:hover:bg-[#9D224D] hover:text-white text-slate-500 dark:text-gray-400 flex items-center justify-center text-xs transition-colors">
                      <FaXTwitter />
                    </a>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>

        {/* 8 Core Services Grid */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-32 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#FCE7F3] dark:bg-[#262626] border border-[#334155]/30 dark:border-white/10 text-[#262626] dark:text-white text-xs font-black tracking-widest mb-4 uppercase shadow-sm">
              {language === 'bn' ? 'আমাদের বিশেষায়িত সেবা' : 'SERVICES'}
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] dark:text-white">
              {language === 'bn' ? 'সবকিছু এক প্ল্যাটফর্মে' : 'Full-service digital capabilities'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Link 
                key={idx}
                href={service.path}
                className="bg-white dark:bg-[#1a1a1a] rounded-3xl p-8 border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 dark:bg-white/5 text-[#9D224D] flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-[#9D224D] group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#0f172a] dark:text-white mb-3 group-hover:text-[#9D224D] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10 flex items-center gap-1.5 text-xs font-bold text-[#9D224D]">
                  <span>{language === 'bn' ? 'বিস্তারিত দেখুন' : 'Explore service'}</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Interactive Service Packages & Pricing */}
        <ServicePackages />

        {/* Why Choose Us Features */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
          <div className="bg-white dark:bg-[#1a1a1a] rounded-[2.5rem] p-10 md:p-16 border border-slate-200/80 dark:border-white/10 shadow-xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] dark:text-white mb-4">
                {language === 'bn' ? 'কেন আমরা অন্যদের চেয়ে আলাদা?' : 'Built for ambitious teams'}
              </h2>
              <p className="text-slate-500 dark:text-gray-400 text-base">
                {language === 'bn' ? 'আমরা শুধুমাত্র প্রজেক্ট সম্পন্ন করি না, দীর্ঘমেয়াদী ব্যবসায়িক প্রবৃদ্ধি নিশ্চিত করি।' : 'A streamlined partnership model that removes friction and delivers results.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-white/5 text-[#9D224D] flex items-center justify-center text-2xl mb-5 shadow-inner">
                    {feat.icon}
                  </div>
                  <h4 className="text-base font-bold text-[#0f172a] dark:text-white mb-2">{feat.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function ExpertisePage() {
  return (
    <LanguageProvider>
      <ExpertiseContent />
    </LanguageProvider>
  );
}
