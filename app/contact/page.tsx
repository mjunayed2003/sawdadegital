"use client";
import React from 'react';
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LanguageProvider, useLanguage } from "@/components/LanguageContext";
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { FaLinkedinIn, FaXTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa6';
import Link from 'next/link';

function ContactContent() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white dark:bg-[#111111] font-sans overflow-x-hidden text-[#262626] dark:text-white transition-colors duration-300">
      <Topbar />
      <Navbar />
      
      <main className="relative pb-32">
        <div className="absolute inset-0 top-0 h-[60vh] z-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        {/* Header Section */}
        <div className="relative z-10 pt-20 pb-12 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#FCE7F3] dark:bg-[#262626] border border-[#334155]/30 dark:border-white/10 text-[#262626] dark:text-white text-xs font-black tracking-widest mb-6 uppercase shadow-sm">
              <span className="mr-2 text-[#9D224D]">👋</span> {language === 'bn' ? 'যোগাযোগ করুন' : "LET'S CONNECT"}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#262626] dark:text-white tracking-tight mb-6">
              {language === 'bn' ? 'আপনার পরবর্তী প্রজেক্ট শুরু করতে প্রস্তুত?' : 'Ready to start your next project?'}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              {language === 'bn'
                ? 'আপনার নির্দিষ্ট কোনো প্রজেক্টের পরিকল্পনা থাকুক বা নতুন আইডিয়া নিয়ে পরামর্শ প্রয়োজন হোক—আমাদের অভিজ্ঞ টিম আপনাকে সহায়তা করতে প্রস্তুত।'
                : 'Whether you have a specific project in mind or just want to explore possibilities, our senior team is ready to help you achieve your goals.'}
            </p>
          </motion.div>
        </div>

        {/* Main Contact Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Contact Information (Left Column) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-5/12 xl:w-1/3 flex flex-col gap-6"
            >
              <div className="bg-[#111827] rounded-[2rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden border border-white/10">
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#9D224D] rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
                
                <h3 className="text-2xl font-bold mb-8 text-white">
                  {language === 'bn' ? 'যোগাযোগের তথ্য' : 'Contact Information'}
                </h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#9D224D]/20 flex items-center justify-center flex-shrink-0 text-[#9D224D] border border-[#9D224D]/30">
                      <FaPhoneAlt className="text-lg" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">{language === 'bn' ? 'ফোন করুন' : 'Call Us'}</p>
                      <a href="tel:+8801234567890" className="text-lg font-bold hover:text-[#9D224D] transition-colors">+880 1234 567 890</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#9D224D]/20 flex items-center justify-center flex-shrink-0 text-[#9D224D] border border-[#9D224D]/30">
                      <FaEnvelope className="text-lg" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">{language === 'bn' ? 'ইমেইল পাঠান' : 'Email Us'}</p>
                      <a href="mailto:hello@sawdadigital.com" className="text-lg font-bold hover:text-[#9D224D] transition-colors">hello@sawdadigital.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#9D224D]/20 flex items-center justify-center flex-shrink-0 text-[#9D224D] border border-[#9D224D]/30">
                      <FaMapMarkerAlt className="text-lg" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">{language === 'bn' ? 'অফিস ঠিকানা' : 'Visit Us'}</p>
                      <p className="text-base font-bold leading-snug text-gray-200">
                        {language === 'bn' 
                          ? 'বাড়ি ১২, রোড ৫, বনানী, ঢাকা ১২১৩, বাংলাদেশ' 
                          : 'House 12, Road 5, Banani, Dhaka 1213, Bangladesh'}
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="border-white/10 my-8" />
                
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-4">
                    {language === 'bn' ? 'সোশ্যাল মিডিয়ায় যুক্ত থাকুন' : 'Follow Us'}
                  </p>
                  <div className="flex gap-3">
                    <Link href="https://facebook.com" target="_blank" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#9D224D] hover:border-[#9D224D] transition-all duration-300">
                      <FaFacebookF className="text-white text-sm" />
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#9D224D] hover:border-[#9D224D] transition-all duration-300">
                      <FaLinkedinIn className="text-white text-sm" />
                    </Link>
                    <Link href="https://twitter.com" target="_blank" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#9D224D] hover:border-[#9D224D] transition-all duration-300">
                      <FaXTwitter className="text-white text-sm" />
                    </Link>
                    <Link href="https://instagram.com" target="_blank" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#9D224D] hover:border-[#9D224D] transition-all duration-300">
                      <FaInstagram className="text-white text-sm" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* WhatsApp Direct */}
              <Link 
                href="https://whatsapp.com" 
                target="_blank"
                className="bg-emerald-50 dark:bg-emerald-950/40 rounded-3xl p-6 border border-emerald-200 dark:border-emerald-800/60 shadow-sm flex items-center justify-between cursor-pointer group hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#262626] dark:text-white">
                      {language === 'bn' ? 'হোয়াটসঅ্যাপে সরাসরি চ্যাট' : 'Chat on WhatsApp'}
                    </h4>
                    <p className="text-xs text-emerald-700 dark:text-emerald-400 font-bold">
                      {language === 'bn' ? 'দ্রুততম রিপ্লাই সময় (৫ মিনিট)' : 'Fastest response time'}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Contact Form (Right Column) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full lg:w-7/12 xl:w-2/3"
            >
              <div className="bg-white dark:bg-[#1a1a1a] rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-[#FCE7F3] dark:border-white/10 relative">
                <h3 className="text-2xl md:text-3xl font-black text-[#262626] dark:text-white mb-2">
                  {language === 'bn' ? 'আমাদের একটি মেসেজ পাঠান' : 'Send us a message'}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm md:text-base">
                  {language === 'bn' 
                    ? 'নিচের ফর্মটি পূরণ করুন, আমাদের টিম ২৪ ঘণ্টার মধ্যে আপনার সাথে যোগাযোগ করবে।' 
                    : 'Fill out the form below and our leadership team will get back to you within 24 hours.'}
                </p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                        {language === 'bn' ? 'নামের প্রথম অংশ' : 'First Name'}
                      </label>
                      <input 
                        type="text" 
                        placeholder={language === 'bn' ? 'যেমন: তানভীর' : 'John'} 
                        className="w-full bg-[#F8FAFC] dark:bg-[#262626] border border-[#FCE7F3] dark:border-white/10 rounded-2xl px-4 py-3.5 text-[#262626] dark:text-white focus:outline-none focus:border-[#9D224D] focus:ring-2 focus:ring-[#9D224D]/20 transition-all text-sm" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                        {language === 'bn' ? 'নামের শেষ অংশ' : 'Last Name'}
                      </label>
                      <input 
                        type="text" 
                        placeholder={language === 'bn' ? 'যেমন: আহমেদ' : 'Doe'} 
                        className="w-full bg-[#F8FAFC] dark:bg-[#262626] border border-[#FCE7F3] dark:border-white/10 rounded-2xl px-4 py-3.5 text-[#262626] dark:text-white focus:outline-none focus:border-[#9D224D] focus:ring-2 focus:ring-[#9D224D]/20 transition-all text-sm" 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                        {language === 'bn' ? 'ইমেইল অ্যাড্রেস' : 'Email Address'}
                      </label>
                      <input 
                        type="email" 
                        placeholder="yourname@company.com" 
                        className="w-full bg-[#F8FAFC] dark:bg-[#262626] border border-[#FCE7F3] dark:border-white/10 rounded-2xl px-4 py-3.5 text-[#262626] dark:text-white focus:outline-none focus:border-[#9D224D] focus:ring-2 focus:ring-[#9D224D]/20 transition-all text-sm" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                        {language === 'bn' ? 'ফোন নম্বর' : 'Phone Number'}
                      </label>
                      <input 
                        type="tel" 
                        placeholder="+880 1XXX XXXXXX" 
                        className="w-full bg-[#F8FAFC] dark:bg-[#262626] border border-[#FCE7F3] dark:border-white/10 rounded-2xl px-4 py-3.5 text-[#262626] dark:text-white focus:outline-none focus:border-[#9D224D] focus:ring-2 focus:ring-[#9D224D]/20 transition-all text-sm" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                      {language === 'bn' ? 'কাঙ্ক্ষিত সেবা নির্বাচন করুন' : 'Service of Interest'}
                    </label>
                    <select className="w-full bg-[#F8FAFC] dark:bg-[#262626] border border-[#FCE7F3] dark:border-white/10 rounded-2xl px-4 py-3.5 text-[#262626] dark:text-white focus:outline-none focus:border-[#9D224D] focus:ring-2 focus:ring-[#9D224D]/20 transition-all text-sm cursor-pointer">
                      <option value="">{language === 'bn' ? 'একটি সেবা নির্বাচন করুন...' : 'Select a service area...'}</option>
                      <option value="web">{language === 'bn' ? '১. ওয়েব ডিজাইন ও ডেভেলপমেন্ট' : '1. Web Design & Development'}</option>
                      <option value="media">{language === 'bn' ? '২. মিডিয়া ও কনটেন্ট প্রোডাকশন' : '2. Media & Content Production'}</option>
                      <option value="social">{language === 'bn' ? '৩. সোশ্যাল মিডিয়া ম্যানেজমেন্ট ও মার্কেটিং' : '3. Social Media Management & Marketing'}</option>
                      <option value="branding">{language === 'bn' ? '৪. ব্র্যান্ডিং ও গ্রাফিক্স ডিজাইন' : '4. Branding & Graphics Design'}</option>
                      <option value="seo">{language === 'bn' ? '৫. এসইও ও গুগল মার্কেটিং' : '5. SEO & Google Marketing'}</option>
                      <option value="ecommerce">{language === 'bn' ? '৬. ই-কমার্স সলিউশনস' : '6. E-commerce Solutions'}</option>
                      <option value="app">{language === 'bn' ? '৭. অ্যাপ ডেভেলপমেন্ট' : '7. App Development'}</option>
                      <option value="uiux">{language === 'bn' ? '৮. ইউআই/ইউএক্স ডিজাইন' : '8. UI/UX Design'}</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                      {language === 'bn' ? 'আপনার প্রজেক্টের বিবরণ' : 'Project Details & Goals'}
                    </label>
                    <textarea 
                      rows={4}
                      placeholder={language === 'bn' ? 'আপনার প্রজেক্টের বিস্তারিত চাহিদা, সময়সীমা এবং লক্ষ্য আমাদের জানান...' : 'Tell us about your requirements, timeline, and deliverables...'} 
                      className="w-full bg-[#F8FAFC] dark:bg-[#262626] border border-[#FCE7F3] dark:border-white/10 rounded-2xl px-4 py-3.5 text-[#262626] dark:text-white focus:outline-none focus:border-[#9D224D] focus:ring-2 focus:ring-[#9D224D]/20 transition-all resize-none text-sm" 
                    ></textarea>
                  </div>
                  
                  <button type="button" className="w-full sm:w-auto px-10 py-4 bg-[#9D224D] text-white rounded-full font-bold hover:bg-[#7A173A] transition-all duration-300 shadow-lg shadow-[#9D224D]/25 hover:shadow-xl hover:-translate-y-0.5">
                    {language === 'bn' ? 'মেসেজ পাঠান' : 'Send Message'}
                  </button>
                </form>
              </div>
            </motion.div>
            
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function ContactPage() {
  return (
    <LanguageProvider>
      <ContactContent />
    </LanguageProvider>
  );
}
