"use client";
import React from 'react';
import Link from 'next/link';
import Logo from '@/components/layout/Logo';
import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaXTwitter, 
  FaInstagram, 
  FaYoutube, 
  FaGithub, 
  FaEnvelope, 
  FaPhone, 
  FaLocationDot, 
  FaArrowUp, 
  FaPaperPlane 
} from 'react-icons/fa6';
import { useLanguage } from '@/components/LanguageContext';
import ProtectedEmail from '@/components/ui/ProtectedEmail';

export default function Footer() {
  const { t, language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { name: t('webDesign'), path: '/services/web-development' },
    { name: t('mediaProduction'), path: '/services/video-production' },
    { name: t('socialMarketing'), path: '/services/marketing-sales' },
    { name: t('brandingGraphics'), path: '/services/graphics-design' },
    { name: t('seoGoogle'), path: '/services/seo' },
    { name: t('ecommerce'), path: '/services/ecommerce' },
    { name: t('appDev'), path: '/services/app-development' },
    { name: t('uiUx'), path: '/services/ui-ux' },
  ];

  const quickLinks = [
    { name: t('home'), path: '/' },
    { name: t('ourTeam'), path: '/expertise' },
    { name: t('projects'), path: '/projects' },
    { name: t('contact'), path: '/contact' },
  ];

  return (
    <footer className="relative bg-[#111111] text-gray-300 pt-20 pb-10 border-t border-white/10 overflow-hidden font-sans">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#9D224D]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#334155]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Logo isFooter />
            
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              {language === 'bn' 
                ? 'সাওদা ডিজিটাল—ডিজাইন, সফটওয়্যার ডেভেলপমেন্ট, এআই ও ডিজিটাল মার্কেটিংয়ের সমন্বয়ে আপনার ব্যবসাকে নিয়ে যায় অনন্য উচ্চতায়।'
                : 'Sawda Digital brings design, software engineering, AI intelligence, and strategic marketing together to elevate your digital footprint globally.'}
            </p>

            {/* Contact Pills */}
            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-center gap-3 text-gray-300">
                <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#9D224D] flex-shrink-0">
                  <FaPhone className="w-3.5 h-3.5" />
                </span>
                <a href="tel:+8801234567890" className="hover:text-[#9D224D] transition-colors font-medium">+880 1234 567 890</a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#9D224D] flex-shrink-0">
                  <FaEnvelope className="w-3.5 h-3.5" />
                </span>
                <ProtectedEmail accentAt={true} className="hover:text-[#9D224D] transition-colors" />
              </div>
              <div className="flex items-start gap-3 text-gray-300">
                <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#9D224D] flex-shrink-0 mt-0.5">
                  <FaLocationDot className="w-3.5 h-3.5" />
                </span>
                <address className="not-italic leading-relaxed text-gray-400">
                  House 12, Road 5, Banani, Dhaka 1213, Bangladesh
                </address>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a href="https://facebook.com/sawdadigital" target="_blank" rel="noopener noreferrer nofollow" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#9D224D] border border-white/10 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a href="https://linkedin.com/company/sawdadigital" target="_blank" rel="noopener noreferrer nofollow" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#9D224D] border border-white/10 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaLinkedinIn className="w-3.5 h-3.5" />
              </a>
              <a href="https://youtube.com/@sawdadigital" target="_blank" rel="noopener noreferrer nofollow" aria-label="YouTube" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#9D224D] border border-white/10 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaYoutube className="w-3.5 h-3.5" />
              </a>
              <a href="https://twitter.com/sawdadigital" target="_blank" rel="noopener noreferrer nofollow" aria-label="Twitter" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#9D224D] border border-white/10 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaXTwitter className="w-3.5 h-3.5" />
              </a>
              <a href="https://instagram.com/sawdadigital" target="_blank" rel="noopener noreferrer nofollow" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#9D224D] border border-white/10 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaInstagram className="w-3.5 h-3.5" />
              </a>
              <a href="https://github.com/sawdadigital" target="_blank" rel="noopener noreferrer nofollow" aria-label="GitHub" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#9D224D] border border-white/10 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaGithub className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-l-2 border-[#9D224D] pl-3">
              {language === 'bn' ? 'নেভিগেশন' : 'Company'}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.path} className="text-gray-400 hover:text-[#9D224D] transition-colors flex items-center gap-1.5 group">
                    <span className="text-[#9D224D] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-l-2 border-[#9D224D] pl-3">
              {language === 'bn' ? 'সেবাসমূহ' : 'Services'}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((service, idx) => (
                <li key={idx}>
                  <Link href={service.path} className="text-gray-400 hover:text-[#9D224D] transition-colors flex items-center gap-1.5 group">
                    <span className="text-[#9D224D] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Call to Action (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-l-2 border-[#9D224D] pl-3">
              {language === 'bn' ? 'যুক্ত থাকুন' : 'Stay Connected'}
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              {language === 'bn' 
                ? 'আমাদের নতুন আপডেট, অফার ও টেকনোলজি ইনসাইটস পেতে সাবস্ক্রাইব করুন।' 
                : 'Subscribe to our newsletter for insights on technology, design, and digital growth.'}
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder={language === 'bn' ? 'আপনার ইমেইল...' : 'Enter your email...'} 
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#9D224D] transition-colors"
                />
                <button 
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-[#9D224D] hover:bg-[#7A173A] text-white rounded-lg text-xs font-bold transition-all flex items-center justify-center"
                >
                  <FaPaperPlane className="w-3 h-3" />
                </button>
              </div>
            </form>
            <div className="pt-2">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold transition-all gap-2 group"
              >
                <span>{language === 'bn' ? 'আমাদের সাথে যোগাযোগ করুন' : 'Start a Conversation'}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} <span className="text-gray-400 font-semibold">Sawda Digital</span>. {language === 'bn' ? 'সর্বস্বত্ব সংরক্ষিত।' : 'All rights reserved.'}
          </p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">
              {language === 'bn' ? 'গোপনীয়তা নীতি' : 'Privacy Policy'}
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">
              {language === 'bn' ? 'শর্তাবলী' : 'Terms of Service'}
            </Link>
            <button 
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#9D224D] text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 ml-2"
              title="Scroll to top"
            >
              <FaArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
