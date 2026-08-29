"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  { num: "01", title: "Audit & Analysis", desc: "Deep dive into your technical infrastructure, current rankings, and competitors.", align: "left" },
  { num: "02", title: "Strategy Formulation", desc: "Creating a roadmap for keywords, content gaps, and technical fixes.", align: "right" },
  { num: "03", title: "Implementation", desc: "Executing on-page optimizations, fixing errors, and publishing content.", align: "left" },
  { num: "04", title: "Monitoring", desc: "Tracking SERP movements and adjusting strategy based on data.", align: "right" }
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <section className="py-24 bg-[#FAFAFA] relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-[#001F3F] mb-4"
          >
            Growth Strategy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500"
          >
            A methodical approach to search dominance.
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-2 hidden md:block">
            <svg width="8" height="100%" viewBox="0 0 8 100" preserveAspectRatio="none" className="absolute h-full w-full stroke-gray-200">
                <line x1="4" y1="0" x2="4" y2="100%" strokeWidth="2" strokeDasharray="8 8" />
            </svg>
            <motion.svg 
              width="8" height="100%" viewBox="0 0 8 100" preserveAspectRatio="none" 
              className="absolute h-full w-full stroke-[#9C27B0]"
            >
              <motion.line 
                x1="4" y1="0" x2="4" y2="100%" 
                strokeWidth="4"
                style={{ pathLength }}
              />
            </motion.svg>
          </div>

          <div className="space-y-16 md:space-y-32 relative z-10">
            {steps.map((step, index) => (
              <div key={step.num} className={`flex flex-col ${step.align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}>
                
                <div className={`flex-1 ${step.align === 'left' ? 'md:text-right' : 'md:text-left'} text-center`}>
                  <motion.div
                    initial={{ opacity: 0, x: step.align === 'left' ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3 className="text-3xl font-bold text-[#001F3F] mb-4">{step.title}</h3>
                    <p className="text-lg text-gray-500">{step.desc}</p>
                  </motion.div>
                </div>

                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-white border-4 border-[#9C27B0] flex items-center justify-center shadow-lg relative z-20">
                  <span className="text-2xl font-black text-[#001F3F]">{step.num}</span>
                </div>

                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
