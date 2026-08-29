"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiDatabase, FiLock, FiSettings, FiActivity, FiLayers, FiCheckCircle } from 'react-icons/fi';

const capabilities = [
  {
    title: "Custom Dashboards",
    desc: "Centralized data visualization interfaces tailored exactly to your KPI requirements.",
    icon: FiActivity,
    features: ["Real-time Data Fetching", "Role-based Access", "Custom Charts", "API Integrations"],
    colSpan: "md:col-span-2 lg:col-span-2",
    rowSpan: "md:row-span-2",
    bg: "bg-gradient-to-br from-white to-gray-50 border border-gray-200",
    textColor: "text-[#001F3F]",
    descColor: "text-gray-500",
    iconColor: "text-[#607D8B]",
    iconBg: "bg-[#607D8B]/10"
  },
  {
    title: "Internal Admin Tools",
    desc: "Streamlining back-office operations, HR, and inventory management.",
    icon: FiSettings,
    features: ["CRUD Interfaces", "Automated Workflows", "Data Export/Import"],
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "md:row-span-2",
    bg: "bg-gradient-to-b from-[#001F3F] to-[#000d1a] border border-[#001F3F]",
    textColor: "text-white",
    descColor: "text-gray-300",
    iconColor: "text-[#FF7F11]",
    iconBg: "bg-[#FF7F11]/10"
  },
  {
    title: "SaaS Development",
    desc: "Building multi-tenant architectures for your subscription-based software.",
    icon: FiLayers,
    features: ["Multi-tenancy", "Stripe Integration", "User Provisioning"],
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "md:row-span-2",
    bg: "bg-gradient-to-br from-[#FF7F11] to-[#e66a00] border border-[#FF7F11]",
    textColor: "text-white",
    descColor: "text-white/80",
    iconColor: "text-white",
    iconBg: "bg-white/20"
  },
  {
    title: "Enterprise Security",
    desc: "Military-grade encryption and compliance for sensitive data operations.",
    icon: FiLock,
    features: ["SSO (SAML/OAuth)", "SOC2 Compliance Prep", "End-to-End Encryption"],
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "md:row-span-2",
    bg: "bg-gradient-to-br from-[#262626] to-[#1a1a1a] border border-gray-800",
    textColor: "text-white",
    descColor: "text-gray-400",
    iconColor: "text-[#ACBFA4]",
    iconBg: "bg-[#ACBFA4]/10"
  },
  {
    title: "Database Architecture",
    desc: "Scalable, high-performance database design for enterprise workloads.",
    icon: FiDatabase,
    features: ["SQL & NoSQL", "Data Warehousing", "Query Optimization"],
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
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#607D8B]/5 rounded-full blur-[120px] pointer-events-none"></div>
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
              Core Expertise
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-[#001F3F] leading-tight"
            >
              Software excellence.
            </motion.h2>
          </div>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-xl text-gray-500 max-w-lg mt-6 md:mt-0"
          >
            Bespoke engineering solutions designed to automate workflows and unify disparate data.
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
