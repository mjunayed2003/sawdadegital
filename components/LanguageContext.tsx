"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'bn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navbar
  home: { en: 'Home', bn: 'হোম' },
  services: { en: 'Services', bn: 'সেবাসমূহ' },
  pricing: { en: 'Pricing', bn: 'প্রাইসিং' },
  projects: { en: 'Projects', bn: 'প্রজেক্টস' },
  expertise: { en: 'Expertise', bn: 'দক্ষতা' },
  ourTeam: { en: 'Our Team', bn: 'আমাদের টিম' },
  'Our Team': { en: 'Our Team', bn: 'আমাদের টিম' },
  contact: { en: 'Contact', bn: 'যোগাযোগ' },
  startProject: { en: 'Start Project', bn: 'প্রজেক্ট শুরু করুন' },
  contactTeam: { en: 'Contact Team', bn: 'টিমের সাথে যোগাযোগ' },
  
  // Services Dropdown & Categories
  webDesign: { en: 'Web Design & Development', bn: 'ওয়েব ডিজাইন ও ডেভেলপমেন্ট' },
  mediaProduction: { en: 'Media & Content Production', bn: 'মিডিয়া ও কনটেন্ট প্রোডাকশন' },
  socialMarketing: { en: 'Social Media Management & Marketing', bn: 'সোশ্যাল মিডিয়া ম্যানেজমেন্ট ও মার্কেটিং' },
  brandingGraphics: { en: 'Branding & Graphics Design', bn: 'ব্র্যান্ডিং ও গ্রাফিক্স ডিজাইন' },
  seoGoogle: { en: 'SEO & Google Marketing', bn: 'এসইও ও গুগল মার্কেটিং' },
  ecommerce: { en: 'E-commerce Solutions', bn: 'ই-কমার্স সলিউশনস' },
  appDev: { en: 'App Development', bn: 'অ্যাপ ডেভেলপমেন্ট' },
  uiUx: { en: 'UI/UX Design', bn: 'ইউআই/ইউএক্স ডিজাইন' },

  // Backwards compatibility
  videoProduction: { en: 'Media & Content Production', bn: 'মিডিয়া ও কনটেন্ট প্রোডাকশন' },
  eventPlanning: { en: 'Event Planning', bn: 'ইভেন্ট প্ল্যানিং' },
  aiServices: { en: 'AI Services & App Development', bn: 'এআই সার্ভিসেস ও অ্যাপ ডেভেলপমেন্ট' },
  brandManagement: { en: 'Branding & Graphics Design', bn: 'ব্র্যান্ডিং ও গ্রাফিক্স ডিজাইন' },
  architecture: { en: 'E-commerce Solutions', bn: 'ই-কমার্স সলিউশনস' },
  graphicsDesign: { en: 'Branding & Graphics Design', bn: 'ব্র্যান্ডিং ও গ্রাফিক্স ডিজাইন' },
  seo: { en: 'SEO & Google Marketing', bn: 'এসইও ও গুগল মার্কেটিং' },
  marketingSales: { en: 'Social Media Management & Marketing', bn: 'সোশ্যাল মিডিয়া ম্যানেজমেন্ট ও মার্কেটিং' },
  premiumTools: { en: 'Premium Tool Services', bn: 'প্রিমিয়াম টুল সার্ভিসেস' },

  // Hero Section
  discoverTop: { en: 'Discover Top Global Agencies', bn: 'শীর্ষ গ্লোবাল এজেন্সিগুলি আবিষ্কার করুন' },
unlockYour: {
  en: 'Elevate Your',
  bn: 'উন্নত করুন আপনার'
},

brands: {
  en: "Brand's",
  bn: 'ব্র্যান্ডের'
},

potential: {
  en: 'Potential',
  bn: 'সম্ভাবনা'
},
heroDesc: {
  en: 'Sawda Digital brings design, technology, marketing, and creativity together to build digital solutions that help your brand grow, connect with your audience, and stand out in a competitive world.',
  bn: 'সাওদা ডিজিটাল ডিজাইন, প্রযুক্তি, মার্কেটিং ও সৃজনশীলতার সমন্বয়ে তৈরি করে আধুনিক ডিজিটাল সমাধান—যা আপনার ব্র্যান্ডকে এগিয়ে যেতে, গ্রাহকের সাথে সংযুক্ত হতে এবং প্রতিযোগিতামূলক বাজারে আলাদা হয়ে উঠতে সাহায্য করে।'
},
  findAgency: { en: 'Find Service', bn: 'সার্ভিস খুঁজুন' },
  contactUs: { en: 'Contact Us', bn: 'যোগাযোগ করুন' },
  popularServices: { en: 'Popular Services', bn: 'জনপ্রিয় সেবাসমূহ' },
  
  // Tags
  digitalMarketing: { en: 'Digital Marketing', bn: 'ডিজিটাল মার্কেটিং' },
  seoServices: { en: 'SEO & Google Marketing', bn: 'এসইও ও গুগল মার্কেটিং' },
  webDevelopment: { en: 'Web Design & Development', bn: 'ওয়েব ডিজাইন ও ডেভেলপমেন্ট' },
  branding: { en: 'Branding & Graphics', bn: 'ব্র্যান্ডিং ও গ্রাফিক্স' },

  // Decorative Card
  topRated: { en: 'Top Rated', bn: 'শীর্ষ রেটেড' },
  agenciesWorldwide: { en: 'Agencies Worldwide', bn: 'বিশ্বব্যাপী এজেন্সি' },

  // Services Section
  ourExpertise: { en: 'OUR SERVICES', bn: 'আমাদের সেবাসমূহ' },
  servicesTitle: { en: 'Transforming Ideas into Digital Reality', bn: 'ধারণাকে ডিজিটাল বাস্তবে রূপান্তর করা' },
  servicesDesc: { 
    en: 'We deliver cutting-edge solutions across web development, media production, and digital growth to accelerate your business.', 
    bn: 'আপনার ব্যবসার বৃদ্ধি ত্বরান্বিত করতে আমরা ওয়েব ডেভেলপমেন্ট, মিডিয়া প্রোডাকশন এবং ডিজিটাল গ্রোথে অত্যাধুনিক সমাধান প্রদান করি।' 
  },
  learnMore: { en: 'Learn more', bn: 'আরও জানুন' },

  // Service Cards
  webDevTitle: { en: 'Web Design & Development', bn: 'ওয়েব ডিজাইন ও ডেভেলপমেন্ট' },
  webDevDesc: { en: 'Scalable websites, custom web apps, and CMS solutions built with modern frameworks for peak performance.', bn: 'শীর্ষ পারফরম্যান্সের জন্য আধুনিক ফ্রেমওয়ার্ক দিয়ে তৈরি স্কেলেবল ওয়েবসাইট এবং ওয়েব অ্যাপ্লিকেশন।' },
  
  mediaTitle: { en: 'Media & Content Production', bn: 'মিডিয়া ও কনটেন্ট প্রোডাকশন' },
  mediaDesc: { en: 'Cinematic commercial videos, brand storytelling, animations, and high-impact visual content.', bn: 'সিনেমাটিক কমার্শিয়াল ভিডিও, ব্র্যান্ড গল্প বলা এবং আকর্ষণীয় ভিজ্যুয়াল কনটেন্ট নির্মাণ।' },
  
  socialTitle: { en: 'Social Media Management & Marketing', bn: 'সোশ্যাল মিডিয়া ম্যানেজমেন্ট ও মার্কেটিং' },
  socialDesc: { en: 'Data-driven social media growth, targeted paid advertising campaigns, and active community management.', bn: 'টার্গেটেড সোশ্যাল মিডিয়া ক্যাম্পেইন, ফলোয়ার এনগেজমেন্ট এবং ব্র্যান্ড প্রমোশন।' },
  
  brandingTitle: { en: 'Branding & Graphics Design', bn: 'ব্র্যান্ডিং ও গ্রাফিক্স ডিজাইন' },
  brandingDesc: { en: 'Complete brand identity systems, logo design, marketing visuals, and distinctive brand collateral.', bn: 'পূর্ণাঙ্গ ব্র্যান্ড আইডেন্টিটি, আকর্ষণীয় লোগো এবং ডিজিটাল মার্কেটিং গ্রাফিক্স ডিজাইন।' },
  
  seoTitle: { en: 'SEO & Google Marketing', bn: 'এসইও ও গুগল মার্কেটিং' },
  seoDesc: { en: 'Technical search engine optimization, keyword strategy, and Google Ads to dominate top search rankings.', bn: 'গুগল সার্চে শীর্ষস্থান অধিকার এবং হাই-কনভার্শন ট্রাফিকের জন্য উন্নত এসইও ও সার্চ অ্যাডস।' },
  
  ecommerceTitle: { en: 'E-commerce Solutions', bn: 'ই-কমার্স সলিউশনস' },
  ecommerceDesc: { en: 'Conversion-optimized e-commerce storefronts, payment gateways, and streamlined sales funnels.', bn: 'উচ্চ কনভার্শনের ই-কমার্স ওয়েবসাইট, পেমেন্ট গেটওয়ে সেটআপ এবং সেলস অপ্টিমাইজেশন।' },

  appDevTitle: { en: 'App Development', bn: 'অ্যাপ ডেভেলপমেন্ট' },
  appDevDesc: { en: 'Custom iOS, Android, and cross-platform mobile apps engineered for seamless UX and peak performance.', bn: 'গতি ও আধুনিক ইউজার এক্সপেরিয়েন্স সম্বলিত কাস্টম iOS ও Android মোবাইল অ্যাপ ডেভেলপমেন্ট।' },

  uiuxTitle: { en: 'UI/UX Design', bn: 'ইউআই/ইউএক্স ডিজাইন' },
  uiuxDesc: { en: 'User-centric interface design, wireframing, and interactive prototypes crafted for delightful experiences.', bn: 'স্বজ্ঞাত অভিজ্ঞতা এবং দৃষ্টিনন্দন ইন্টারফেস ডিজাইনের জন্য ইউজার-সেন্ট্রিক ইউআই/ইউএক্স।' },

  // Partnerships Section
  partnerships: { en: 'OUR ALLIES', bn: 'আমাদের সহযোগী' },
  brandsCollaborate: { en: 'Trusted by Global Visionaries', bn: 'গ্লোবাল ভিশনারিদের বিশ্বস্ত' },

  // Selected Work Section
  selectedWork: { en: 'FEATURED CASE STUDIES', bn: 'নির্বাচিত কেস স্টাডি' },
  recentProud: { en: "Showcasing Our Digital Excellence", bn: 'আমাদের ডিজিটাল উৎকর্ষের প্রদর্শনী' },
  viewAllProjects: { en: 'View all projects', bn: 'সব প্রজেক্ট দেখুন' },
  project1Title: { en: 'E-Commerce Platform', bn: 'ই-কমার্স প্ল্যাটফর্ম' },
  project1Desc: { en: 'High conversion storefront for premium retail brand', bn: 'প্রিমিয়াম রিটেইল ব্র্যান্ডের জন্য হাই-কনভার্শন স্টোরফ্রন্ট' },
  project2Title: { en: 'School Management System', bn: 'স্কুল ম্যানেজমেন্ট সিস্টেম' },
  project2Desc: { en: 'Comprehensive portal for administration and student tracking', bn: 'প্রশাসন এবং ছাত্র ট্র্যাকিংয়ের জন্য ব্যাপক পোর্টাল' },
  project3Title: { en: 'Analytics Dashboard', bn: 'অ্যানালিটিক্স ড্যাশবোর্ড' },
  project3Desc: { en: 'Real-time data visualization platform for SaaS product', bn: 'SaaS পণ্যের জন্য রিয়েল-টাইম ডেটা ভিজ্যুয়ালাইজেশন প্ল্যাটফর্ম' },

  // Leadership Section
  leadership: { en: 'OUR CORE TEAM', bn: 'আমাদের মূল দল' },
  meetExperts: { en: 'The Minds Driving Your Success', bn: 'আপনার সাফল্যের পেছনের কারিগর' },
  meetFullTeam: { en: 'Connect with our team', bn: 'আমাদের দলের সাথে সংযুক্ত হোন' },
  roleFounder: { en: 'Founder & CEO', bn: 'প্রতিষ্ঠাতা ও সিইও' },
  roleCoFounder: { en: 'Head of AI Engineering & Software Engineer', bn: 'হেড অব এআই ইঞ্জিনিয়ারিং ও সফটওয়্যার ইঞ্জিনিয়ার' },
  roleStrategist: { en: 'Head of Strategy & Business Development', bn: 'হেড অব স্ট্র্যাটেজি অ্যান্ড বিজনেস ডেভেলপমেন্ট' },
  roleBrandRep: { en: 'Wix, WordPress & Shopify Specialist', bn: 'উইক্স, ওয়ার্ডপ্রেস ও শপিফাই বিশেষজ্ঞ' },
  roleWebShopify: { en: 'Wix, WordPress & Shopify Specialist', bn: 'উইক্স, ওয়ার্ডপ্রেস ও শপিফাই বিশেষজ্ঞ' },
  roleMarketingExecutive: { en: 'Marketing & Branding Executive', bn: 'মার্কেটিং অ্যান্ড ব্র্যান্ডিং এক্সিকিউটিভ' },

  // Testimonials Section
  testimonialsBadge: { en: 'CLIENT SUCCESS STORIES', bn: 'গ্রাহক সাফল্যের গল্প' },
  testimonialsTitle: { en: 'Hear From Our Partners', bn: 'আমাদের অংশীদারদের অভিজ্ঞতা' },
  
  testi1Quote: { 
    en: 'Sawda Digital built our custom e-commerce web platform from scratch. Our sales conversion rate grew by 240% within 60 days, and the site speed is lightning fast. Exceptional engineering and design!', 
    bn: 'সাওদা ডিজিটাল আমাদের কাস্টম ই-কমার্স প্ল্যাটফর্ম চমৎকারভাবে তৈরি করেছে। মাত্র ৬০ দিনের মধ্যে আমাদের সেলস কনভার্শন ২৪০% বৃদ্ধি পেয়েছে এবং লোডিং স্পিড দারুণ দ্রুত। অসাধারণ কাজ!' 
  },
  testi1Name: { en: 'Sarah Jenkins', bn: 'সারা জেনকিন্স' },
  testi1Role: { en: 'Founder & CEO at RetailWave', bn: 'প্রতিষ্ঠাতা ও সিইও, রিটেলওয়েভ' },
  testi1Service: { en: 'Web Design & E-commerce', bn: 'ওয়েব ডিজাইন ও ই-কমার্স' },

  testi2Quote: { 
    en: 'The commercial video production and brand identity overhaul delivered by Sawda Digital was pure cinematic excellence. It completely elevated our brand authority and helped us close premium clients.', 
    bn: 'সাওদা ডিজিটাল-এর ভিডিও প্রোডাকশন এবং ব্র্যান্ড আইডেন্টিটি ডিজাইন আমাদের ব্র্যান্ডের মান বহুগুণ বাড়িয়ে দিয়েছে। তাদের সিনেমাটিক ভিজ্যুয়ালের কারণে আমরা বড় বড় ক্লায়েন্ট আকৃষ্ট করতে পেরেছি।' 
  },
  testi2Name: { en: 'David Mitchell', bn: 'ডেভিড মিচেল' },
  testi2Role: { en: 'Creative Director at Apex Media', bn: 'ক্রিয়েটিভ ডিরেক্টর, অ্যাপেক্স মিডিয়া' },
  testi2Service: { en: 'Media & Branding', bn: 'মিডিয়া ও ব্র্যান্ডিং' },

  testi3Quote: { 
    en: 'Their data-driven SEO strategy and custom mobile app development boosted our search traffic by 350%. Transparent communication, deep technical skill, and incredible ROI.', 
    bn: 'তাদের উন্নত এসইও কৌশল এবং মোবাইল অ্যাপ ডেভেলপমেন্ট আমাদের গুগল সার্চ ট্রাফিক ৩৫০% বৃদ্ধি করেছে। স্বচ্ছ যোগাযোগ ও দক্ষ টিমের কারণে আমরা অভাবনীয় সাফল্য পেয়েছি।' 
  },
  testi3Name: { en: 'Elena Rostova', bn: 'এলেনা রোস্তোভা' },
  testi3Role: { en: 'VP of Growth at NovaTech Global', bn: 'ভাইস প্রেসিডেন্ট, নোভাটেক গ্লোবাল' },
  testi3Service: { en: 'SEO & Mobile Apps', bn: 'এসইও ও মোবাইল অ্যাপস' },

  // FAQ Section
  faqBadge: { en: 'FREQUENTLY ASKED', bn: 'সাধারণ জিজ্ঞাসা' },
  faqTitle: { en: 'Your Questions, Answered', bn: 'সার্ভিস সম্পর্কিত প্রশ্নোত্তর' },
  faqDesc: { en: 'Everything you need to know about our web development, media production, SEO, and digital growth services.', bn: 'আমাদের ওয়েব ডেভেলপমেন্ট, মিডিয়া প্রোডাকশন, এসইও এবং ডিজিটাল গ্রোথ সার্ভিস সম্পর্কে বিস্তারিত।' },
  
  faq1Q: { en: 'What technologies do you use for Web & App Development?', bn: 'ওয়েব এবং মোবাইল অ্যাপ ডেভেলপমেন্টের জন্য আপনারা কী প্রযুক্তি ব্যবহার করেন?' },
  faq1A: { en: 'We use high-performance modern stacks including Next.js, React, Node.js, React Native, TypeScript, TailwindCSS, and secure cloud infrastructures (AWS / Vercel) to build scalable, lightning-fast digital products.', bn: 'আমরা আধুনিক ও দ্রুতগতির প্রযুক্তি যেমন Next.js, React, Node.js, React Native, TypeScript, TailwindCSS এবং সুরক্ষিত ক্লাউড অবকাঠামো ব্যবহার করে স্কেলেবল ও দ্রুতগতির ডিজিটাল প্রোডাক্ট তৈরি করি।' },
  
  faq2Q: { en: 'Can you build custom E-commerce stores with automated payment gateways?', bn: 'আপনারা কি পেমেন্ট গেটওয়ে সুবিধাসহ কাস্টম ই-কমার্স স্টোর তৈরি করেন?' },
  faq2A: { en: 'Yes! We engineer conversion-optimized e-commerce platforms with automated inventory, real-time analytics, and secure local & global payment gateways (bKash, Nagad, Stripe, SSLCommerz, PayPal).', bn: 'হ্যাঁ! আমরা বিকাশ, নগদ, ভিসা, মাস্টারকার্ড ও আন্তর্জাতিক গেটওয়ে যুক্ত করে নিরাপদ, দ্রুতগতির এবং হাই-কনভার্শন ই-কমার্স ওয়েবসাইট ও সেলস ফানেল তৈরি করি।' },
  
  faq3Q: { en: 'What is included in your Media Production & Branding services?', bn: 'মিডিয়া প্রোডাকশন ও ব্র্যান্ডিং সার্ভিসে কী কী সুবিধা পাওয়া যাবে?' },
  faq3A: { en: 'Our media and branding suite covers end-to-end production: commercial promotional videos, brand films, 2D/3D animation, social media video ads, logo design, and complete visual identity guidelines.', bn: 'আমাদের মিডিয়া ও ব্র্যান্ডিং সার্ভিসে রয়েছে বাণিজ্যিক ভিডিও প্রোডাকশন, ব্র্যান্ড ফিল্ম, ২D/৩D অ্যানিমেশন, লোগো ডিজাইন, ব্র্যান্ড গাইডলাইন এবং সোশ্যাল মিডিয়া প্রমোশনাল ভিডিও।' },
  
  faq4Q: { en: 'How do your SEO & Google Marketing services rank businesses?', bn: 'এসইও ও গুগল মার্কেটিং কীভাবে আমাদের ব্যবসাকে গুগলে শীর্ষে নিয়ে আসে?' },
  faq4A: { en: 'We execute comprehensive technical SEO audits, high-intent keyword ranking strategies, quality backlink building, and data-backed Google Ads campaigns to dominate top search results and deliver high-converting customer leads.', bn: 'আমরা টেকনিক্যাল এসইও অডিট, সঠিক কি-ওয়ার্ড র‍্যাঙ্কিং কৌশল, ব্যাকলিংক তৈরি এবং গুগল সার্চ অ্যাডসের মাধ্যমে আপনার ওয়েবসাইটকে গুগলের ১ম পেজে এনে কাস্টমার ট্রাফিক ও সেলস বৃদ্ধি করি।' },
  
  faq5Q: { en: 'What is your typical project timeline and post-launch support?', bn: 'প্রজেক্ট ডেলিভারি হতে কত সময় লাগে এবং ডেলিভারির পর সাপোর্ট কেমন পাবো?' },
  faq5A: { en: 'Standard web and branding projects typically take 2-4 weeks, while complex web applications take 4-8 weeks. Every project includes free post-launch warranty support, training, and ongoing maintenance.', bn: 'প্রজেক্টের পরিধি অনুযায়ী সাধারণ ওয়েবসাইট ২-৪ সপ্তাহ এবং বড় অ্যাপ্লিকেশন ৪-৮ সপ্তাহ সময় নেয়। ডেলিভারির পর আমরা ফ্রি মেইনটেন্যান্স সাপোর্ট ও টেকনিক্যাল সহযোগিতা প্রদান করি।' },

  // CTA Section
  ctaTitle: { en: 'Ready to Transform Your Digital Presence?', bn: 'আপনার ডিজিটাল উপস্থিতি পরিবর্তন করতে প্রস্তুত?' },
  ctaDesc: { en: 'Let’s discuss your vision. We’ll get back to you within 24 hours with actionable next steps.', bn: 'আসুন আপনার দৃষ্টিভঙ্গি নিয়ে আলোচনা করি। আমরা ২৪ ঘণ্টার মধ্যে পরবর্তী পদক্ষেপ নিয়ে আপনার সাথে যোগাযোগ করব।' },
  ctaButton: { en: 'Start a Project', bn: 'প্রজেক্ট শুরু করুন' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('en');

  // Load saved language on mount
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('sawda_lang') as Language;
      if (savedLang === 'en' || savedLang === 'bn') {
        setLanguageState(savedLang);
      }
    } catch (e) {
      // Ignore
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('sawda_lang', lang);
      window.dispatchEvent(new Event('languageChange'));
    } catch (e) {
      // Ignore
    }
  };

  // Sync across pages and tabs
  useEffect(() => {
    const handleStorage = () => {
      try {
        const savedLang = localStorage.getItem('sawda_lang') as Language;
        if (savedLang === 'en' || savedLang === 'bn') {
          setLanguageState(savedLang);
        }
      } catch (e) {}
    };

    window.addEventListener('storage', handleStorage);
    window.addEventListener('languageChange', handleStorage);
    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('languageChange', handleStorage);
    };
  }, []);

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
