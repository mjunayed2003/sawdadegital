import type { Metadata } from 'next';
import Link from 'next/link';
import Topbar from '@/components/layout/Topbar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { LanguageProvider } from '@/components/LanguageContext';
import JsonLd from '@/components/seo/JsonLd';
import { 
  FaCode, FaVideo, FaBullhorn, FaPenNib, 
  FaMagnifyingGlass, FaBriefcase, FaRobot, FaDesktop 
} from 'react-icons/fa6';
import { FiArrowRight, FiCheck } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'All Digital Services | Web, Mobile Apps, SEO, UI/UX & Marketing',
  description:
    'Explore Sawda Digital’s 8 specialized service suites: Custom Web Development, Mobile App Engineering, UI/UX Design, SEO & Google Marketing, E-commerce Stores, Media Production, and Brand Identity in Bangladesh.',
  alternates: {
    canonical: 'https://sawdadigital.com/services',
  },
  openGraph: {
    title: 'Our Specialized Digital Services | Sawda Digital',
    description:
      'Full-spectrum digital capabilities: custom software, apps, UI/UX, SEO, and multimedia production built to scale your business.',
    url: 'https://sawdadigital.com/services',
    type: 'website',
  },
  twitter: {
    title: 'Specialized Digital Services | Sawda Digital',
    description:
      'Full-spectrum digital capabilities built to scale ambitious companies in Bangladesh and worldwide.',
  },
};

const servicesCatalog = [
  {
    title: 'Web Design & Development',
    titleBn: 'ওয়েব ডিজাইন ও ডেভেলপমেন্ট',
    desc: 'High-performance Next.js web applications, corporate websites, SaaS platforms, and custom portals built for speed and security.',
    descBn: 'কাস্টম ওয়েবসাইট, SaaS প্ল্যাটফর্ম এবং উচ্চগতির আধুনিক ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্ট।',
    path: '/services/web-development',
    icon: <FaCode className="w-6 h-6" />,
    features: ['Next.js & React Architectures', 'Sub-second Load Times', 'Full SEO Optimization'],
  },
  {
    title: 'Mobile App Development',
    titleBn: 'মোবাইল অ্যাপ ডেভেলপমেন্ট',
    desc: 'Native and cross-platform iOS & Android mobile applications engineered with React Native and Flutter.',
    descBn: 'iOS ও অ্যান্ড্রয়েড প্ল্যাটফর্মের জন্য ক্রস-প্ল্যাটফর্ম হাই-পারফরম্যান্স মোবাইল অ্যাপ্লিকেশন।',
    path: '/services/app-development',
    icon: <FaRobot className="w-6 h-6" />,
    features: ['iOS & Android Cross-Platform', 'Fluid 60FPS UI', 'Secure API Integrations'],
  },
  {
    title: 'UI/UX Design & Prototyping',
    titleBn: 'ইউআই/ইউএক্স ডিজাইন ও প্রোটোটাইপিং',
    desc: 'Human-centered product design, intuitive wireframing, clickable Figma prototypes, and cohesive design systems.',
    descBn: 'ইউজার রিসার্চ, ফিগমা ইন্টারেক্টিভ প্রোটোটাইপিং ও পিক্সেল-পারফেক্ট আধুনিক ইন্টারফেস।',
    path: '/services/ui-ux',
    icon: <FaDesktop className="w-6 h-6" />,
    features: ['Figma Design Systems', 'User Journey Mapping', 'Conversion-Focused UX'],
  },
  {
    title: 'SEO & Google Marketing',
    titleBn: 'এসইও ও গুগল মার্কেটিং',
    desc: 'Data-driven technical SEO, keyword authority, local Dhaka ranking, and high-intent Google Search Ads.',
    descBn: 'টেকনিক্যাল এসইও অডিট, সঠিক কি-ওয়ার্ড র‍্যাঙ্কিং এবং গুগল সার্চ অ্যাডসের মাধ্যমে ১ নম্বর র‍্যাঙ্কিং।',
    path: '/services/seo',
    icon: <FaMagnifyingGlass className="w-6 h-6" />,
    features: ['Page 1 Google Ranking', 'Technical SEO Audits', 'High-ROI Search Campaigns'],
  },
  {
    title: 'E-Commerce Solutions',
    titleBn: 'ই-কমার্স সলিউশনস',
    desc: 'Custom online stores, Shopify development, and WooCommerce solutions integrated with bKash, Nagad, and global payments.',
    descBn: 'বিকাশ/নগদ পেমেন্ট গেটওয়েসহ হাই-কনভার্শন শপিফাই ও কাস্টম অনলাইন স্টোর।',
    path: '/services/ecommerce',
    icon: <FaBriefcase className="w-6 h-6" />,
    features: ['bKash & Nagad Integration', 'Automated Inventory & Cart', 'Conversion Funnel Optimization'],
  },
  {
    title: 'Social Media Management & Marketing',
    titleBn: 'সোশ্যাল মিডিয়া ম্যানেজমেন্ট ও মার্কেটিং',
    desc: 'Targeted Facebook, Instagram, and LinkedIn ad campaigns, community management, and compound audience growth.',
    descBn: 'কৌশলগত সোশ্যাল ক্যাম্পেইন, টার্গেটেড পেইড বিজ্ঞাপন ও অডিয়েন্স গ্রোথ পরিচালনা।',
    path: '/services/marketing-sales',
    icon: <FaBullhorn className="w-6 h-6" />,
    features: ['Targeted Lead Generation', 'Creative Ad Copy & Assets', 'Weekly Performance Analytics'],
  },
  {
    title: 'Branding & Graphics Design',
    titleBn: 'ব্র্যান্ডিং ও গ্রাফিক্স ডিজাইন',
    desc: 'Complete corporate visual identities, iconic logos, brand style guidelines, packaging, and marketing collateral.',
    descBn: 'লোগো, ভিজ্যুয়াল আইডেন্টিটি সিস্টেম এবং আকর্ষণীয় প্রিমিয়াম ডিজাইন অ্যাসেটস।',
    path: '/services/graphics-design',
    icon: <FaPenNib className="w-6 h-6" />,
    features: ['Memorable Logo Identity', 'Vector Brand Guidelines', 'Marketing Collateral Suite'],
  },
  {
    title: 'Media & Content Production',
    titleBn: 'মিডিয়া ও কনটেন্ট প্রোডাকশন',
    desc: 'Commercial video ads, brand storytelling documentaries, 2D/3D animations, and cinematic product reels.',
    descBn: 'বাণিজ্যিক ভিডিও বিজ্ঞাপন, ব্র্যান্ড ফিল্ম, ২D/৩D অ্যানিমেশন ও সিনেমাটিক প্রমোশনাল কনটেন্ট।',
    path: '/services/video-production',
    icon: <FaVideo className="w-6 h-6" />,
    features: ['4K Commercial Filmmaking', 'Motion Graphics & Animation', 'High-Impact Social Video Ads'],
  },
];

const servicesSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://sawdadigital.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: 'https://sawdadigital.com/services',
        },
      ],
    },
    {
      '@type': 'ItemList',
      name: 'Sawda Digital Specialized Services',
      description: 'Comprehensive directory of digital services offered by Sawda Digital.',
      itemListElement: servicesCatalog.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: service.title,
        url: `https://sawdadigital.com${service.path}`,
        description: service.desc,
      })),
    },
  ],
};

export default function ServicesHubPage() {
  return (
    <LanguageProvider>
      <JsonLd data={servicesSchema} />
      <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#111111] text-[#262626] dark:text-white font-sans overflow-x-hidden transition-colors duration-300">
        <Topbar />
        <Navbar />

        <main className="relative pb-32">
          {/* Header */}
          <div className="relative z-10 pt-20 pb-16 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#FCE7F3] dark:bg-[#262626] border border-[#334155]/30 dark:border-white/10 text-[#262626] dark:text-white text-xs font-black tracking-widest mb-6 uppercase shadow-sm">
              <span className="text-[#9D224D] mr-2">⚡</span> FULL-SERVICE CAPABILITIES
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#0f172a] dark:text-white tracking-tight mb-6">
              Engineering Digital Success For Modern Brands
            </h1>
            <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              From high-performance software engineering to revenue-focused digital marketing and cinematic media, explore our end-to-end digital capabilities.
            </p>
          </div>

          {/* Grid */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesCatalog.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.path}
                  className="group bg-white dark:bg-[#1a1a1a] rounded-[2rem] p-8 border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#9D224D]/10 text-[#9D224D] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#9D224D] group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <h2 className="text-xl font-black text-[#0f172a] dark:text-white mb-3 group-hover:text-[#9D224D] transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-gray-400 leading-relaxed mb-6">
                      {item.desc}
                    </p>
                    <ul className="space-y-2 mb-6 border-t border-slate-100 dark:border-white/10 pt-4">
                      {item.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-gray-300">
                          <FiCheck className="text-[#9D224D] flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-sm font-bold text-[#9D224D]">
                    <span>Explore Service Details</span>
                    <FiArrowRight className="group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
