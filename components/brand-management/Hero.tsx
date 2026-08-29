"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Hero3D from './Hero3D';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section className="relative bg-[#FAFAFA] py-16 md:py-24 overflow-hidden min-h-[85vh] flex items-center">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'103.92304845413264\' viewBox=\'0 0 60 103.92304845413264\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 103.92304845413264L60 86.60254037844386L60 51.96152422706632L30 34.64101615137754L0 51.96152422706632L0 86.60254037844386ZM30 51.96152422706632L60 34.64101615137754L60 0L30 -17.32050807568877L0 0L0 34.64101615137754Z\' fill=\'none\' stroke=\'%23e5e7eb\' stroke-width=\'1\'/%3E%3C/svg%3E")',
          backgroundSize: '120px 207.846px'
        }}
      ></motion.div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          <motion.div 
            className="max-w-3xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-gray-200 text-[#FF7F11] text-xs font-bold mb-8 shadow-sm tracking-wide uppercase">
              <span className="w-4 h-4 flex items-center justify-center">🛠️</span>
              BRAND MANAGEMENT PACKAGE
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-[75px] font-black text-[#001F3F] tracking-tight leading-[1.05]">
              Identities engineered to resonate and endure.
            </motion.h1>
            
            <motion.p variants={itemVariants} className="mt-8 text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed">
              Brand strategy, identity design, and reputation management — crafted to make your business unmistakable in the market.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row gap-5">
              <Link href="#pricing" className="bg-[#FF7F11] hover:bg-[#e66a00] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(255,127,17,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
                Start Project
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative w-full hidden lg:flex justify-center items-center"
          >
            <Hero3D />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
