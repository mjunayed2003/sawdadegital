"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { useLanguage } from '@/components/LanguageContext';
import Link from 'next/link';

const serviceCards = [
  {
    key: 'web',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
    titleKey: 'webDevTitle',
    descKey: 'webDevDesc',
    badge: 'Web & CMS',
    path: '/services/web-development'
  },
  {
    key: 'media',
    image: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?w=800&q=80',
    titleKey: 'mediaTitle',
    descKey: 'mediaDesc',
    badge: 'Media & Video',
    path: '/services/video-production'
  },
  {
    key: 'social',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    titleKey: 'socialTitle',
    descKey: 'socialDesc',
    badge: 'Social & Ads',
    path: '/services/marketing-sales'
  },
  {
    key: 'brand',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80',
    titleKey: 'brandingTitle',
    descKey: 'brandingDesc',
    badge: 'Brand & Identity',
    path: '/services/graphics-design'
  },
  {
    key: 'seo',
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80',
    titleKey: 'seoTitle',
    descKey: 'seoDesc',
    badge: 'SEO & Search',
    path: '/services/seo'
  },
  {
    key: 'ecommerce',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80',
    titleKey: 'ecommerceTitle',
    descKey: 'ecommerceDesc',
    badge: 'E-commerce',
    path: '/services/ecommerce'
  },
  {
    key: 'app',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    titleKey: 'appDevTitle',
    descKey: 'appDevDesc',
    badge: 'Mobile & Apps',
    path: '/services/app-development'
  },
  {
    key: 'uiux',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    titleKey: 'uiuxTitle',
    descKey: 'uiuxDesc',
    badge: 'UI/UX Design',
    path: '/services/ui-ux'
  }
];

export default function Services() {
  const { t } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.15 
      } 
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-white dark:bg-[#1a1a1a] relative overflow-hidden transition-colors duration-300">
      {/* Decorative background blurs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E2E8CE] dark:bg-[#262626] rounded-full blur-[100px] opacity-30 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-colors duration-300"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ACBFA4] dark:bg-[#111111] rounded-full blur-[100px] opacity-20 translate-x-1/3 translate-y-1/3 pointer-events-none transition-colors duration-300"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#E2E8CE] dark:bg-[#262626] border border-[#ACBFA4]/30 dark:border-white/10 text-[#262626] dark:text-white text-[10px] font-black tracking-[0.2em] mb-4 uppercase shadow-sm transition-colors duration-300">
            {t('ourExpertise')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#262626] dark:text-white mb-4 leading-[1.15] tracking-tight transition-colors duration-300">
            {t('servicesTitle')}
          </h2>
          <p className="text-gray-500 dark:text-gray-300 text-base md:text-lg leading-relaxed transition-colors duration-300">
            {t('servicesDesc')}
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {serviceCards.map((service, index) => (
            <motion.div 
              key={service.key} 
              variants={itemVariants}
              className="bg-white dark:bg-[#262626] rounded-[2rem] p-3 shadow-lg hover:shadow-2xl border border-[#FAFAFA] dark:border-white/5 transition-all duration-500 group relative"
            >
              {/* Image Container */}
              <Link href={service.path || "/contact"} className="block relative h-48 w-full rounded-[1.5rem] overflow-hidden mb-5 cursor-pointer">
                <div className="absolute inset-0 bg-[#262626]/10 dark:bg-black/40 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={service.image} 
                  alt={t(service.titleKey)} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </Link>

              {/* Content Container */}
              <div className="px-4 pb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAFAFA] dark:bg-[#1a1a1a] border border-[#E2E8CE] dark:border-white/10 text-[10px] font-bold text-gray-500 dark:text-gray-300 mb-3 transition-colors duration-300">
                  <span className="w-1.5 h-1.5 bg-[#FF7F11] rounded-full"></span>
                  {service.badge}
                </div>
                
                <Link href={service.path || "/contact"} className="block">
                  <h3 className="text-xl font-black text-[#262626] dark:text-white mb-2 group-hover:text-[#FF7F11] dark:group-hover:text-[#FF7F11] transition-colors duration-300 cursor-pointer">
                    {t(service.titleKey)}
                  </h3>
                </Link>
                
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-6 line-clamp-3 transition-colors duration-300">
                  {t(service.descKey)}
                </p>
                
                <Link 
                  href={service.path || "/contact"} 
                  className="inline-flex items-center gap-2 text-[#FF7F11] font-bold text-sm group/btn hover:text-[#e66a00] transition-colors cursor-pointer"
                >
                  {t('learnMore')} 
                  <FiArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
