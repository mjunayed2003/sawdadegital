"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMic, FiStar, FiMapPin, FiMonitor, FiCheckCircle } from 'react-icons/fi';

const capabilities = [
  {
    title: "Corporate Events",
    desc: "Conferences, seminars, and product launches designed to impress stakeholders.",
    icon: FiCalendar,
    features: ["Venue sourcing", "Speaker management", "AV production", "Guest logistics"],
    colSpan: "md:col-span-2 lg:col-span-2",
    rowSpan: "md:row-span-2",
    bg: "bg-gradient-to-br from-white to-gray-50 border border-gray-200",
    textColor: "text-[#001F3F]",
    descColor: "text-gray-500",
    iconColor: "text-[#9C27B0]",
    iconBg: "bg-[#9C27B0]/10"
  },
  {
    title: "Live Entertainment",
    desc: "Concerts and festivals with top-tier talent and stage design.",
    icon: FiMic,
    features: ["Artist booking", "Stage & lighting", "Crowd control"],
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "md:row-span-2",
    bg: "bg-gradient-to-b from-[#001F3F] to-[#000d1a] border border-[#001F3F]",
    textColor: "text-white",
    descColor: "text-gray-300",
    iconColor: "text-[#FF7F11]",
    iconBg: "bg-[#FF7F11]/10"
  },
  {
    title: "Brand Activations",
    desc: "Immersive experiences that connect consumers with your product.",
    icon: FiStar,
    features: ["Press & media kits", "Influencer outreach", "Custom stage design"],
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "md:row-span-2",
    bg: "bg-gradient-to-br from-[#FF7F11] to-[#e66a00] border border-[#FF7F11]",
    textColor: "text-white",
    descColor: "text-white/80",
    iconColor: "text-white",
    iconBg: "bg-white/20"
  },
  {
    title: "Trade Shows",
    desc: "Booth design and logistics management for maximum foot traffic.",
    icon: FiMapPin,
    features: ["Custom booth design", "Lead generation setups", "Promotional staff"],
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "md:row-span-2",
    bg: "bg-gradient-to-br from-[#262626] to-[#1a1a1a] border border-gray-800",
    textColor: "text-white",
    descColor: "text-gray-400",
    iconColor: "text-[#ACBFA4]",
    iconBg: "bg-[#ACBFA4]/10"
  },
  {
    title: "Virtual Events",
    desc: "Engaging webinars and digital experiences for global audiences.",
    icon: FiMonitor,
    features: ["Live streaming", "Interactive Q&A setups", "Virtual networking"],
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "md:row-span-2",
    bg: "bg-gradient-to-r from-[#ACBFA4] to-[#8fa685] border border-[#ACBFA4]",
    textColor: "text-[#001F3F]",
    descColor: "text-[#001F3F]/70",
    iconColor: "text-[#001F3F]",
    iconBg: "bg-white/30"
  }
];

export default function Capabilities() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9C27B0]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF7F11]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="mb-20 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-[#FF7F11] text-xs font-bold mb-6 shadow-sm uppercase tracking-wider"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF7F11] animate-pulse"></span>
              Event Capabilities
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-[#001F3F] leading-tight"
            >
              Experiences engineered for impact.
            </motion.h2>
          </div>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-xl text-gray-500 max-w-lg mt-6 md:mt-0"
          >
            From conceptualization to execution, we deliver flawless events that leave lasting impressions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 auto-rows-auto gap-6 lg:gap-8">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 90, delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className={`relative rounded-[2rem] p-8 lg:p-10 flex flex-col justify-between cursor-pointer transition-all duration-500 group shadow-lg hover:shadow-2xl overflow-hidden ${cap.colSpan} ${cap.rowSpan} ${cap.bg} ${cap.textColor}`}
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay"></div>

                <div className="relative z-10 flex-1">
                  <div className={`w-16 h-16 rounded-2xl ${cap.iconBg} flex items-center justify-center mb-8 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon className={`w-8 h-8 ${cap.iconColor}`} />
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-black mb-4 tracking-tight">{cap.title}</h3>
                  <p className={`text-base lg:text-lg leading-relaxed mb-8 ${cap.descColor}`}>
                    {cap.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-auto pt-6 border-t border-black/5 dark:border-white/10">
                  <ul className="space-y-3">
                    {cap.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm lg:text-base font-medium">
                        <FiCheckCircle className={`w-5 h-5 mr-3 shrink-0 ${cap.iconColor}`} />
                        <span className={cap.textColor}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {isHovered && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.03, scale: 1 }}
                    className="absolute -bottom-20 -right-20 pointer-events-none"
                  >
                    <Icon className="w-64 h-64 text-current" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
