"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    titleKey: 'project3Title',
    descKey: 'project3Desc',
    textColor: 'text-[#9D224D]',
    bgColor: 'bg-[#9D224D]',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
    titleKey: 'project1Title',
    descKey: 'project1Desc',
    textColor: 'text-[#334155] dark:text-slate-400',
    bgColor: 'bg-[#334155] dark:bg-slate-400',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    titleKey: 'project2Title',
    descKey: 'project2Desc',
    textColor: 'text-[#262626] dark:text-gray-300',
    bgColor: 'bg-[#262626] dark:bg-gray-300',
  }
];

export default function SelectedWork() {
  const { t } = useLanguage();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const MotionDiv = (mounted ? motion.div : 'div') as any;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-white dark:bg-[#1a1a1a] relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Decorative Background Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#9D224D] rounded-full blur-[150px] opacity-10 pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#334155] rounded-full blur-[120px] opacity-15 pointer-events-none -z-10"></div>

        {/* Header */}
        <MotionDiv 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#FCE7F3] dark:bg-[#262626] border border-[#334155]/30 dark:border-white/10 text-[#262626] dark:text-white text-[10px] font-black tracking-[0.25em] mb-4 uppercase shadow-sm transition-colors duration-300">
            {t('selectedWork')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#262626] dark:text-white tracking-tight transition-colors duration-300">
            {t('recentProud')}
          </h2>
        </MotionDiv>

        {/* Projects Grid (Staggered/Asymmetric) */}
        <MotionDiv 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <MotionDiv 
              key={project.id} 
              variants={itemVariants}
              className={`group cursor-pointer flex flex-col ${index === 1 ? 'lg:translate-y-16' : ''}`}
            >
              <div className="relative w-full aspect-[16/10] rounded-[2rem] overflow-hidden mb-6 shadow-md group-hover:shadow-xl transition-all duration-700 border-4 border-white dark:border-[#262626]">
                {/* Overlay for hover */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                
                <Image 
                  src={project.image} 
                  alt={t(project.titleKey)} 
                  width={800}
                  height={500}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                
                {/* Floating Action Button */}
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-white dark:bg-[#111111] rounded-xl flex items-center justify-center shadow-lg transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500 z-20 group-hover:-rotate-12">
                  <FiArrowRight className={`w-5 h-5 ${project.textColor}`} />
                </div>
              </div>
              
              <div className="px-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-6 h-[2px] ${project.bgColor}`}></div>
                  <h3 className="text-xl font-black text-[#262626] dark:text-white group-hover:text-[#9D224D] dark:group-hover:text-[#9D224D] transition-colors duration-300">
                    {t(project.titleKey)}
                  </h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed pl-9 transition-colors duration-300">
                  {t(project.descKey)}
                </p>
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>

        {/* Action Button */}
        <MotionDiv 
          className="flex justify-center mt-12 lg:mt-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full border-2 border-[#FCE7F3] dark:border-white/10 text-[#262626] dark:text-white font-black text-sm uppercase tracking-wider hover:border-[#262626] dark:hover:border-white hover:bg-[#262626] dark:hover:bg-white hover:text-white dark:hover:text-[#262626] transition-all duration-500 group shadow-md hover:shadow-xl"
          >
            {t('viewAllProjects')}
            <span className="w-8 h-8 rounded-full bg-[#FCE7F3] dark:bg-[#262626] flex items-center justify-center group-hover:bg-[#9D224D] dark:group-hover:bg-[#9D224D] transition-colors duration-500">
              <FiArrowRight className="w-4 h-4 text-[#262626] dark:text-white group-hover:text-white dark:group-hover:text-white transform group-hover:rotate-45 transition-all duration-500" />
            </span>
          </Link>
        </MotionDiv>

      </div>
    </section>
  );
}
