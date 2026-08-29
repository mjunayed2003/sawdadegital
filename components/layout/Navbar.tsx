"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FaCode, 
  FaVideo, 
  FaCalendarAlt, 
  FaRobot, 
  FaBullhorn, 
  FaBuilding, 
  FaPaintBrush, 
  FaDesktop, 
  FaSearch, 
  FaChartLine, 
  FaCogs,
  FaToolbox,
  FaRocket,
  FaChevronDown,
  FaBars,
  FaTimes,
  FaGlobe,
  FaShoppingCart,
  FaMobileAlt
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = React.useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Enable shadow/blur when scrolled past 20px
          setIsScrolled(currentScrollY > 20);

          if (isMobileMenuOpen) {
            setIsVisible(true);
          } else if (currentScrollY <= 40) {
            // At the top of the page: always visible
            setIsVisible(true);
          } else {
            const diff = currentScrollY - lastScrollY.current;

            // Scrolling down by more than 5px
            if (diff > 5 && currentScrollY > 80) {
              setIsVisible(false);
            } 
            // Scrolling up by more than 5px anywhere on the page
            else if (diff < -5) {
              setIsVisible(true);
            }
          }

          lastScrollY.current = Math.max(0, currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isMobileMenuOpen]);

  const services = [
    { name: t('webDesign'), icon: <FaCode />, path: "/services/web-development" },
    { name: t('mediaProduction'), icon: <FaVideo />, path: "/services/video-production" },
    { name: t('socialMarketing'), icon: <FaBullhorn />, path: "/services/marketing-sales" },
    { name: t('brandingGraphics'), icon: <FaPaintBrush />, path: "/services/graphics-design" },
    { name: t('seoGoogle'), icon: <FaSearch />, path: "/services/seo" },
    { name: t('ecommerce'), icon: <FaShoppingCart />, path: "/services/architecture" },
    { name: t('appDev'), icon: <FaMobileAlt />, path: "/services/ai-services" },
    { name: t('uiUx'), icon: <FaDesktop />, path: "/services/ui-ux" },
  ];

  return (
    <>
      <header className={`fixed left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      } ${
        isScrolled 
          ? 'top-0 border-b border-[#E2E8CE] dark:border-white/10 bg-white/95 dark:bg-[#1a1a1a]/95 backdrop-blur-md shadow-md' 
          : 'top-9 border-b border-[#E2E8CE] dark:border-white/10 bg-white dark:bg-[#1a1a1a]'
      }`}>
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-1">
              <span className="text-2xl font-bold tracking-tight text-[#FF7F11]">Sawda</span>
              <span className="text-2xl font-bold tracking-tight text-[#262626] dark:text-white transition-colors duration-300">Digital</span>
              <span className="h-2 w-2 rounded-full bg-[#FF7F11] self-end mb-2"></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            <Link href="/" className={`text-sm font-bold px-5 py-2.5 rounded-full transition-colors ${pathname === "/" ? "bg-[#E2E8CE] text-[#262626] dark:bg-white/20 dark:text-white hover:bg-[#ACBFA4] hover:text-white" : "text-[#262626] hover:bg-[#E2E8CE] dark:text-gray-200 dark:hover:bg-white/10"}`}>
              {t('home')}
            </Link>
            
            <div className="relative group">
              <button className={`flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full cursor-pointer transition-colors ${pathname.startsWith("/services") ? "bg-[#E2E8CE] text-[#262626] dark:bg-white/20 dark:text-white hover:bg-[#ACBFA4] hover:text-white" : "text-[#262626] hover:bg-[#E2E8CE] dark:text-gray-200 dark:hover:bg-white/10"}`}>
                {t('services')}
                <FaChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 pt-4 w-[340px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white dark:bg-[#262626] rounded-2xl shadow-lg border border-[#E2E8CE] dark:border-white/10 p-3 flex flex-col gap-1 max-h-[70vh] overflow-y-auto">
                  {services.map((service, idx) => (
                    <Link key={idx} href={service.path || "#"} className="flex items-center gap-4 px-4 py-3 text-[15px] font-medium text-[#262626] dark:text-gray-200 hover:text-white hover:bg-[#ACBFA4] rounded-xl transition-colors group/item">
                      <span className="text-lg w-5 flex justify-center text-[#ACBFA4] group-hover/item:text-white">{service.icon}</span>
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/projects" className={`text-sm font-bold px-5 py-2.5 rounded-full transition-colors ${pathname === "/projects" ? "bg-[#E2E8CE] text-[#262626] dark:bg-white/20 dark:text-white hover:bg-[#ACBFA4] hover:text-white" : "text-[#262626] hover:bg-[#E2E8CE] dark:text-gray-200 dark:hover:bg-white/10"}`}>
              {t('projects')}
            </Link>
            <Link href="/expertise" className={`text-sm font-bold px-5 py-2.5 rounded-full transition-colors ${pathname === "/expertise" ? "bg-[#E2E8CE] text-[#262626] dark:bg-white/20 dark:text-white hover:bg-[#ACBFA4] hover:text-white" : "text-[#262626] hover:bg-[#E2E8CE] dark:text-gray-200 dark:hover:bg-white/10"}`}>
              {t('ourTeam')}
            </Link>
            <Link href="/contact" className={`text-sm font-bold px-5 py-2.5 rounded-full transition-colors ${pathname === "/contact" ? "bg-[#E2E8CE] text-[#262626] dark:bg-white/20 dark:text-white hover:bg-[#ACBFA4] hover:text-white" : "text-[#262626] hover:bg-[#E2E8CE] dark:text-gray-200 dark:hover:bg-white/10"}`}>
              {t('contact')}
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-5">
            {/* Language Switcher */}
            <div className="hidden lg:flex items-center bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-full p-1 shadow-inner backdrop-blur-md">
              <div className="flex items-center pl-2.5 pr-1 text-gray-400 dark:text-gray-500">
                <FaGlobe className="w-3.5 h-3.5" />
              </div>
              <button 
                onClick={() => setLanguage('en')}
                className={`relative text-xs font-bold tracking-wider px-3 py-1 rounded-full transition-colors duration-200 z-10 ${
                  language === 'en' ? 'text-white' : 'text-gray-600 dark:text-gray-400 hover:text-[#262626] dark:hover:text-white'
                }`}
              >
                {language === 'en' && (
                  <motion.div 
                    layoutId="activeLangDesktop"
                    className="absolute inset-0 bg-[#FF7F11] rounded-full shadow-md shadow-[#FF7F11]/30 z-[-1]"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                )}
                English
              </button>
              <button 
                onClick={() => setLanguage('bn')}
                className={`relative text-xs font-bold tracking-wider px-3.5 py-1 rounded-full transition-colors duration-200 z-10 ${
                  language === 'bn' ? 'text-white' : 'text-gray-600 dark:text-gray-400 hover:text-[#262626] dark:hover:text-white'
                }`}
              >
                {language === 'bn' && (
                  <motion.div 
                    layoutId="activeLangDesktop"
                    className="absolute inset-0 bg-[#FF7F11] rounded-full shadow-md shadow-[#FF7F11]/30 z-[-1]"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                )}
                বাংলা
              </button>
            </div>
            
            <div className="hidden lg:block">
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-[#262626] dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-white dark:bg-[#1a1a1a] border-b border-[#E2E8CE] dark:border-white/10 shadow-xl overflow-y-auto max-h-[calc(100vh-4rem)] z-50">
            <div className="flex flex-col p-4 gap-2">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`text-base font-bold px-4 py-3 rounded-xl transition-colors ${pathname === "/" ? "bg-[#ACBFA4] text-white" : "text-[#262626] dark:text-gray-200 hover:bg-[#E2E8CE] dark:hover:bg-white/10"}`}>
                {t('home')}
              </Link>
              
              <div className="flex flex-col">
                <button 
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)} 
                  className={`flex items-center justify-between text-base font-bold px-4 py-3 rounded-xl transition-colors ${pathname.startsWith("/services") ? "text-[#ACBFA4]" : "text-[#262626] dark:text-gray-200 hover:bg-[#E2E8CE] dark:hover:bg-white/10"}`}
                >
                  {t('services')}
                  <FaChevronDown className={`w-3 h-3 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMobileServicesOpen && (
                  <div className="flex flex-col gap-1 pl-6 pr-2 py-2">
                    {services.map((service, idx) => (
                      <Link 
                        key={idx} 
                        href={service.path || "#"} 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${pathname === service.path ? "bg-[#ACBFA4]/20 text-[#ACBFA4]" : "text-gray-600 dark:text-gray-300 hover:bg-[#E2E8CE] dark:hover:bg-white/10"}`}
                      >
                        <span className="text-lg w-5 flex justify-center text-[#ACBFA4]">{service.icon}</span>
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/projects" onClick={() => setIsMobileMenuOpen(false)} className={`text-base font-bold px-4 py-3 rounded-xl transition-colors ${pathname === "/projects" ? "bg-[#ACBFA4] text-white" : "text-[#262626] dark:text-gray-200 hover:bg-[#E2E8CE] dark:hover:bg-white/10"}`}>
                {t('projects')}
              </Link>
              <Link href="/expertise" onClick={() => setIsMobileMenuOpen(false)} className={`text-base font-bold px-4 py-3 rounded-xl transition-colors ${pathname === "/expertise" ? "bg-[#ACBFA4] text-white" : "text-[#262626] dark:text-gray-200 hover:bg-[#E2E8CE] dark:hover:bg-white/10"}`}>
                {t('ourTeam')}
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`text-base font-bold px-4 py-3 rounded-xl transition-colors ${pathname === "/contact" ? "bg-[#ACBFA4] text-white" : "text-[#262626] dark:text-gray-200 hover:bg-[#E2E8CE] dark:hover:bg-white/10"}`}>
                {t('contact')}
              </Link>

              <div className="h-px bg-[#E2E8CE] dark:bg-white/10 my-2"></div>
              
              <div className="flex items-center justify-between px-4 py-2">
                <div className="flex items-center bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-full p-1 shadow-inner backdrop-blur-md">
                  <div className="flex items-center pl-2.5 pr-1 text-gray-400 dark:text-gray-500">
                    <FaGlobe className="w-3.5 h-3.5" />
                  </div>
                  <button 
                    onClick={() => { setLanguage('en'); setIsMobileMenuOpen(false); }}
                    className={`relative text-xs font-bold tracking-wider px-3 py-1 rounded-full transition-colors duration-200 z-10 ${
                      language === 'en' ? 'text-white' : 'text-gray-600 dark:text-gray-400 hover:text-[#262626] dark:hover:text-white'
                    }`}
                  >
                    {language === 'en' && (
                      <motion.div 
                        layoutId="activeLangMobile"
                        className="absolute inset-0 bg-[#FF7F11] rounded-full shadow-md shadow-[#FF7F11]/30 z-[-1]"
                        transition={{ type: "spring", stiffness: 450, damping: 32 }}
                      />
                    )}
                    English
                  </button>
                  <button 
                    onClick={() => { setLanguage('bn'); setIsMobileMenuOpen(false); }}
                    className={`relative text-xs font-bold tracking-wider px-3.5 py-1 rounded-full transition-colors duration-200 z-10 ${
                      language === 'bn' ? 'text-white' : 'text-gray-600 dark:text-gray-400 hover:text-[#262626] dark:hover:text-white'
                    }`}
                  >
                    {language === 'bn' && (
                      <motion.div 
                        layoutId="activeLangMobile"
                        className="absolute inset-0 bg-[#FF7F11] rounded-full shadow-md shadow-[#FF7F11]/30 z-[-1]"
                        transition={{ type: "spring", stiffness: 450, damping: 32 }}
                      />
                    )}
                    বাংলা
                  </button>
                </div>
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </header>
      {/* Spacer to prevent initial layout shift */}
      <div className="h-16 w-full pointer-events-none" />
    </>
  );
}
