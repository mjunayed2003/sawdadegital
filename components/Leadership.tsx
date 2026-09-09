"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';
import { FiArrowRight } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FaXTwitter, FaCrown, FaLaptopCode, FaChartPie, FaBullseye, FaShopify } from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image';

const teamMembers = [
  {
    id: 1,
    name: 'Md Khairul Bashar',
    roleKey: 'roleFounder',
    initials: 'KB',
    image: '/team-member/MdKhairulBashar.PNG',
    tag: 'Executive Lead',
    accentColor: 'from-amber-500 to-orange-600',
    tagColor: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-800/40',
    glowColor: 'group-hover:border-amber-500/40 group-hover:shadow-amber-500/10',
    badgeIcon: <FaCrown className="w-3.5 h-3.5 text-amber-500" />,
    avatarGradient: 'from-amber-400 via-orange-500 to-amber-600',
  },
  {
    id: 2,
    name: 'Md Junayed',
    roleKey: 'roleCoFounder',
    initials: 'MJ',
    image: '/team-member/junayed.jpeg',
    objectPosition: 'object-[center_15%] scale-[1.35]',
    tag: 'Tech & Architecture',
    accentColor: 'from-blue-500 to-indigo-600',
    tagColor: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800/40',
    glowColor: 'group-hover:border-blue-500/40 group-hover:shadow-blue-500/10',
    badgeIcon: <FaLaptopCode className="w-3.5 h-3.5 text-blue-500" />,
    avatarGradient: 'from-blue-400 via-indigo-500 to-cyan-500',
  },
  {
    id: 3,
    name: 'Md Mohibullah Islam Reza',
    roleKey: 'roleStrategist',
    initials: 'MR',
    image: '/team-member/reza.PNG',
    tag: 'Market & Strategy',
    accentColor: 'from-emerald-500 to-teal-600',
    tagColor: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-800/40',
    glowColor: 'group-hover:border-emerald-500/40 group-hover:shadow-emerald-500/10',
    badgeIcon: <FaChartPie className="w-3.5 h-3.5 text-emerald-500" />,
    avatarGradient: 'from-emerald-400 via-teal-500 to-green-600',
  },
  {
    id: 4,
    name: 'Md Asfier Rahman Marjan',
    roleKey: 'roleWebShopify',
    initials: 'AM',
    image: '/team-member/MdAsfierRahmanMarjan.jpeg',
    objectPosition: 'object-[center_15%] scale-[1.1]',
    tag: 'Wix, WordPress & Shopify',
    accentColor: 'from-rose-500 to-pink-600',
    tagColor: 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/50 border-rose-200 dark:border-rose-800/40',
    glowColor: 'group-hover:border-rose-500/40 group-hover:shadow-rose-500/10',
    badgeIcon: <FaShopify className="w-3.5 h-3.5 text-rose-500" />,
    avatarGradient: 'from-rose-400 via-pink-500 to-purple-600',
  }
];

export default function Leadership() {
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
      transition: { staggerChildren: 0.12 } 
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-[#FAFAFA] dark:bg-[#1a1a1a] relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <MotionDiv 
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white dark:bg-[#262626] border border-[#FCE7F3] dark:border-white/10 text-[#9D224D] text-[10px] font-black tracking-[0.2em] mb-4 uppercase shadow-sm transition-colors duration-300">
              <span className="w-2 h-2 rounded-full bg-[#9D224D] mr-2"></span>
              {t('leadership')}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#262626] dark:text-white tracking-tight leading-[1.1] transition-colors duration-300">
              {t('meetExperts')}
            </h2>
          </div>
          
          <Link 
            href="/expertise" 
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white dark:bg-[#1a1a1a] border border-[#FCE7F3] dark:border-white/10 text-[#262626] dark:text-white font-bold text-sm hover:border-[#262626] dark:hover:border-white hover:bg-[#262626] dark:hover:bg-white hover:text-white dark:hover:text-[#262626] transition-all duration-300 group shadow-sm flex-shrink-0"
          >
            {t('meetFullTeam')}
            <FiArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </MotionDiv>

        {/* Team Grid */}
        <MotionDiv 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {teamMembers.map((member) => (
            <MotionDiv 
              key={member.id} 
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`relative bg-white/90 dark:bg-[#202020]/90 backdrop-blur-xl rounded-[2.25rem] p-5 text-center border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-2xl ${member.glowColor} transition-all duration-500 flex flex-col items-center justify-between group overflow-hidden`}
            >
              {/* Ambient Glow in Card Background */}
              <div className={`absolute -top-16 -right-16 w-36 h-36 bg-gradient-to-br ${member.accentColor} rounded-full blur-3xl opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`} />

              {/* Top Tag */}
              <div className="w-full flex items-center justify-between mb-3">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase border ${member.tagColor}`}>
                  {member.badgeIcon}
                  {member.tag}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Active" />
              </div>

              {/* Dynamic Gradient Monogram Avatar */}
              <div className="relative mb-3">
                <div className="relative p-1.5 rounded-[2.7rem] bg-gradient-to-b from-white dark:from-white/20 to-slate-100 dark:to-white/5 border border-slate-200/60 dark:border-white/10 shadow-md group-hover:shadow-xl transition-all duration-500">
                  <div className={`w-44 h-44 lg:w-48 lg:h-48 rounded-[2.5rem] bg-gradient-to-br ${member.avatarGradient} flex items-center justify-center shadow-inner relative overflow-hidden group-hover:scale-[1.03] transition-transform duration-500`}>
                    {member.image ? (
                      <Image src={member.image} alt={member.name} width={200} height={200} className={`w-full h-full object-cover ${member.objectPosition || 'object-center'}`} />
                    ) : (
                      <>
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" />
                        <div className="absolute -top-6 -left-6 w-16 h-16 bg-white/30 rounded-full blur-md" />
                        <span className="text-4xl font-black text-white tracking-wider drop-shadow-md">
                          {member.initials}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="w-full flex-1 flex flex-col items-center">
                <h3 className="text-lg font-extrabold text-[#262626] dark:text-white tracking-tight mb-1.5 group-hover:text-[#9D224D] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-xs font-bold text-[#9D224D] dark:text-[#C94B73] tracking-wide mb-1 min-h-[32px] flex items-center justify-center text-center">
                  {t(member.roleKey)}
                </p>
              </div>

              {/* Bottom Actions & Socials */}
              <div className="w-full pt-1.5 border-t border-slate-100 dark:border-white/5 flex items-center justify-center gap-2">
                <a href="#" className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-white hover:bg-[#9D224D] flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <FaLinkedinIn className="w-3.5 h-3.5" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-white hover:bg-[#9D224D] flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <FaXTwitter className="w-3.5 h-3.5" />
                </a>
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>

      </div>
    </section>
  );
}
