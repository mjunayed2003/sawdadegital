"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const pricingPlans = [
  {
    name: "Internal Tool",
    desc: "Perfect for streamlining single workflows.",
    price: "$10,000+",
    features: ["Custom Dashboard", "Role-based Access", "API Integrations", "1 Month Support"],
    color: "from-gray-100 to-gray-200",
    textColor: "text-gray-800",
    buttonBg: "bg-gray-800 text-white hover:bg-gray-700"
  },
  {
    name: "SaaS MVP",
    desc: "Launch your software product quickly.",
    price: "$25,000+",
    features: ["Multi-tenancy Architecture", "Stripe Integration", "User Authentication", "Scalable Database"],
    color: "from-[#001F3F] to-[#003366]",
    textColor: "text-white",
    buttonBg: "bg-[#FF7F11] text-white hover:bg-[#e66a00]"
  },
  {
    name: "Enterprise ERP",
    desc: "Comprehensive business management.",
    price: "$60,000+",
    features: ["Custom ERP/CRM", "Legacy System Migration", "Military-grade Security", "Dedicated Team"],
    color: "from-gray-800 to-black",
    textColor: "text-white",
    buttonBg: "bg-white text-black hover:bg-gray-200"
  },
  {
    name: "Dedicated Team",
    desc: "Ongoing software development.",
    price: "$15k/mo+",
    features: ["Full-stack Squad", "Agile Sprints", "CTO-level Strategy", "Continuous Deployment"],
    color: "from-[#607D8B] to-[#455A64]",
    textColor: "text-white",
    buttonBg: "bg-white text-[#607D8B] hover:bg-gray-100"
  }
];

export default function Pricing() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-[#001F3F] mb-6"
          >
            Software investments
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-500"
          >
            Transparent pricing for custom engineering.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative perspective-1000">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 100 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className={`relative rounded-3xl p-8 bg-gradient-to-br ${plan.color} ${plan.textColor} shadow-xl transition-all duration-500 transform-gpu overflow-hidden`}
              style={{
                transformStyle: "preserve-3d",
                zIndex: hoveredIndex === index ? 20 : 10,
                scale: hoveredIndex === index ? 1.05 : 1,
              }}
            >
              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} flex-grow`}>
                  {plan.desc}
                </p>
                <div className="text-4xl font-black mb-8">{plan.price}</div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <FiCheckCircle className={`w-5 h-5 mr-2 shrink-0 ${plan.textColor === 'text-white' ? 'text-white/70' : 'text-gray-500'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-bold mt-auto transition-colors duration-300 ${plan.buttonBg}`}>
                  Get Started
                </button>
              </div>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
