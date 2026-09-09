"use client";

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';
import { 
  FaCheck, 
  FaWhatsapp, 
  FaArrowRight, 
  FaBullhorn, 
  FaPenNib, 
  FaMagnifyingGlass, 
  FaVideo, 
  FaCamera, 
  FaStar,
  FaShieldHalved,
  FaPhoneVolume,
  FaCode,
  FaRobot,
  FaDesktop,
  FaShopify,
  FaChevronDown
} from 'react-icons/fa6';
import Link from 'next/link';

interface TierData {
  id: string;
  name: { bn: string; en: string };
  badge?: { bn: string; en: string };
  price: number; // numeric in BDT
  priceFormatted: { bn: string; en: string };
  billingPeriod?: { bn: string; en: string };
  description: { bn: string; en: string };
  features: { bn: string; en: string }[];
  isPopular?: boolean;
}

interface AddonOption {
  id: string;
  name: { bn: string; en: string };
  price: number;
  priceFormatted: { bn: string; en: string };
}

interface SubServiceCategory {
  id: string;
  name: { bn: string; en: string };
  icon?: React.ReactNode;
  tiers: TierData[];
  addons: AddonOption[];
}

interface MainServiceCategory {
  id: string;
  title: { bn: string; en: string };
  subtitle: { bn: string; en: string };
  icon: React.ReactNode;
  subcategories?: SubServiceCategory[];
  tiers?: TierData[];
  addons?: AddonOption[];
}

interface ServicePackagesProps {
  initialCategory?: string;
  hideHeader?: boolean;
  hideCategories?: boolean;
}

export default function ServicePackages({ 
  initialCategory = 'web-development', 
  hideHeader = false,
  hideCategories = false
}: ServicePackagesProps = {}) {
  const { language } = useLanguage();

  // Selected state
  const [activeMainCat, setActiveMainCat] = useState<string>(initialCategory);
  const [activeSubCat, setActiveSubCat] = useState<string>(initialCategory === 'video-production' ? 'model-video' : 'wp-wix');
  const [selectedTierId, setSelectedTierId] = useState<string>('basic');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const subDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (subDropdownRef.current && !subDropdownRef.current.contains(event.target as Node)) {
        setIsSubDropdownOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
        setIsSubDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Raw Services & Pricing Data based on client specifications
  const serviceCategories: MainServiceCategory[] = useMemo(() => [
    {
      id: 'social-media',
      title: {
        bn: 'সোশ্যাল মিডিয়া ম্যানেজমেন্ট ও মার্কেটিং',
        en: 'Social Media Management & Marketing'
      },
      subtitle: {
        bn: 'বিজ্ঞাপন বাজেট ব্যতীত অর্গানিক গ্রোথ, পেজ অপ্টিমাইজেশন ও নিয়মিত কনটেন্ট পোস্ট',
        en: 'Without Ad budget: Organic growth, community management & content strategy'
      },
      icon: <FaBullhorn className="w-5 h-5" />,
      tiers: [
        {
          id: 'basic',
          name: { bn: 'বেসিক প্যাকেজ', en: 'Basic Package' },
          badge: { bn: 'স্টার্টার চয়েস', en: 'Starter Choice' },
          price: 7000,
          priceFormatted: { bn: '৳ ৭,০০০', en: '৳ 7,000' },
          billingPeriod: { bn: '/মাস', en: '/month' },
          description: {
            bn: 'ছোট ব্যবসা বা নতুন ব্র্যান্ডের সোশ্যাল প্রেজেন্স শুরুর জন্য নিখুঁত প্যাকেজ।',
            en: 'Perfect for small businesses establishing their initial social media presence.'
          },
          features: [
            { bn: '১২টি কাস্টম ক্রিয়েটিভ গ্রাফিক্স ও সোশ্যাল পোস্ট', en: '12 Custom Creative Graphics & Social Posts' },
            { bn: 'ফেসবুক ও ইনস্টাগ্রাম পেজ সেটআপ ও বায়ো অপ্টিমাইজেশন', en: 'FB & IG Page Setup & Bio Optimization' },
            { bn: 'টার্গেটেড ক্যাপশন ও নিশ হ্যাশট্যাগ রিসার্চ', en: 'Targeted Captions & Niche Hashtag Strategy' },
            { bn: 'নিয়মিত কমেন্ট ও প্রাথমিক মেসেজ রিপ্লাই গাইডেন্স', en: 'Regular Comment & Basic Message Moderation' },
            { bn: 'মাসিক পারফরম্যান্স অ্যানালিটিক্স রিপোর্ট', en: 'Monthly Performance Analytics Report' }
          ]
        },
        {
          id: 'standard',
          name: { bn: 'স্ট্যান্ডার্ড প্যাকেজ', en: 'Standard Package' },
          badge: { bn: 'সবচেয়ে জনপ্রিয়', en: 'Most Popular' },
          isPopular: true,
          price: 14000,
          priceFormatted: { bn: '৳ ১৪,০০০', en: '৳ 14,000' },
          billingPeriod: { bn: '/মাস', en: '/month' },
          description: {
            bn: 'দ্রুত পেজ বৃদ্ধি, সক্রিয় অডিয়েন্স এনগেজমেন্ট ও ভিডিও রিলসের জন্য সেরা প্যাকেজ।',
            en: 'Ideal for growing brands wanting high audience engagement & vertical reels.'
          },
          features: [
            { bn: '২২টি প্রিমিয়াম সোশ্যাল পোস্ট ও শর্ট রিলস ভিডিও', en: '22 Premium Social Posts & Short Reels' },
            { bn: 'সম্পূর্ণ মাসিক কনটেন্ট ক্যালেন্ডার প্ল্যানিং', en: 'Full Monthly Content Calendar Planning' },
            { bn: 'অডিয়েন্স এনগেজমেন্ট ও প্রো-অ্যাক্টিভ কমিউনিটি ম্যানেজমেন্ট', en: 'Audience Engagement & Community Moderation' },
            { bn: 'আকর্ষণীয় অফার ব্যানার ও উৎসবকেন্দ্রিক স্পেশাল ডিজাইন', en: 'Promotional Banners & Festive Creative Designs' },
            { bn: 'সাপ্তাহিক গ্রোথ অ্যানালাইসিস ও স্ট্র্যাটেজি অপ্টিমাইজেশন', en: 'Weekly Growth Analysis & Strategy Optimization' }
          ]
        },
        {
          id: 'premium',
          name: { bn: 'প্রিমিয়াম প্যাকেজ', en: 'Premium Package' },
          badge: { bn: 'হাই-ইমপ্যাক্ট স্কেলিং', en: 'High-Impact Scale' },
          price: 24000,
          priceFormatted: { bn: '৳ ২৪,০০০', en: '৳ 24,000' },
          billingPeriod: { bn: '/মাস', en: '/month' },
          description: {
            bn: 'পূর্ণাঙ্গ সোশ্যাল ডমিনেশন, মাল্টি-প্ল্যাটফর্ম ব্যবস্থাপনা ও ডেডিকেটেড এক্সিকিউটিভ সাপোর্ট।',
            en: 'Comprehensive multi-platform authority with senior creative direction.'
          },
          features: [
            { bn: '৩৫+ হাই-কনভার্টিং পোস্ট, রিলস ও ক্যারোসেল ডিজাইন', en: '35+ High-Converting Posts, Reels & Carousels' },
            { bn: 'মাল্টি-প্ল্যাটফর্ম ম্যানেজমেন্ট (Facebook, Instagram, LinkedIn)', en: 'Multi-Platform Management (FB, IG, LinkedIn)' },
            { bn: 'কম্পিটিটর অডিট ও ভাইরাল ট্রেন্ড ইন্টিগ্রেশন', en: 'Competitor Reverse-Engineering & Trend Integration' },
            { bn: 'ইনফ্লুয়েন্সার ও কোলাবোরেশন আউটরিচ প্ল্যানিং', en: 'Influencer & Collaboration Outreach Planning' },
            { bn: 'ডেডিকেটেড সিনিয়র গ্রোথ ম্যানেজার ও প্রায়োরিটি কল সাপোর্ট', en: 'Dedicated Senior Growth Manager & Priority Calls' }
          ]
        }
      ],
      addons: [
        { id: 'meta-ads-setup', name: { bn: 'মেটা অ্যাড ক্যাম্পেইন সেটআপ ও অডিট', en: 'Meta Ads Campaign Setup & Audit' }, price: 2500, priceFormatted: { bn: '+ ৳ ২,৫০০', en: '+ ৳ 2,500' } },
        { id: 'extra-5-posts', name: { bn: 'অতিরিক্ত ৫টি কাস্টম গ্রাফিক্স পোস্ট', en: 'Extra 5 Custom Graphic Posts' }, price: 1500, priceFormatted: { bn: '+ ৳ ১,৫০০', en: '+ ৳ 1,500' } },
        { id: 'custom-story-pack', name: { bn: '১০টি ডায়নামিক স্টোরি ডিজাইন প্যাক', en: '10 Dynamic Story Designs Pack' }, price: 1200, priceFormatted: { bn: '+ ৳ ১,২০০', en: '+ ৳ 1,200' } },
        { id: 'fast-track-delivery', name: { bn: '২৪ ঘণ্টায় ইমার্জেন্সি রিভিশন সাপোর্ট', en: '24-Hour Express Revision Support' }, price: 1000, priceFormatted: { bn: '+ ৳ ১,০০০', en: '+ ৳ 1,000' } }
      ]
    },
    {
      id: 'branding-graphics',
      title: {
        bn: 'ব্র্যান্ডিং ও গ্রাফিক্স ডিজাইন',
        en: 'Branding & Graphics Design'
      },
      subtitle: {
        bn: 'লোগো, ভিজ্যুয়াল আইডেন্টিটি এবং আধুনিক ব্র্যান্ড আর্কিটেকচার',
        en: 'Custom vector logos, identity guidelines & premium stationery suites'
      },
      icon: <FaPenNib className="w-5 h-5" />,
      tiers: [
        {
          id: 'basic',
          name: { bn: 'বেসিক ব্র্যান্ডিং', en: 'Basic Identity' },
          badge: { bn: 'স্টার্টআপ চয়েস', en: 'Startup Choice' },
          price: 7000,
          priceFormatted: { bn: '৳ ৭,০০০', en: '৳ 7,000' },
          billingPeriod: { bn: '/প্রজেক্ট', en: '/project' },
          description: {
            bn: 'নতুন স্টার্টআপ বা ছোট ব্যবসার জন্য নিখুঁত প্রফেশনাল ভেক্টর লোগো ডিজাইন।',
            en: 'Clean, modern vector logo design for new businesses & startups.'
          },
          features: [
            { bn: '২টি সম্পূর্ণ ইউনিক লোগো কনসেপ্ট ডিজাইন', en: '2 Unique Logo Concepts' },
            { bn: 'হাই-রেজুলেশন ভেক্টর ফাইলস (AI, EPS, SVG, PNG, PDF)', en: 'High-Res Vectors (AI, EPS, SVG, PNG, PDF)' },
            { bn: 'ব্র্যান্ড কালার প্যালেট ও টাইপোগ্রাফি ফন্ট গাইড', en: 'Brand Color Palette & Typography Font Guide' },
            { bn: 'সোশ্যাল মিডিয়া প্রোফাইল ডিপি ও ওয়াটারমার্ক', en: 'Social Media DP & Transparent Watermarks' },
            { bn: '৩টি রিভিশন ও ১০০% বাণিজ্যিক লাইসেন্স', en: '3 Rounds of Revisions & 100% Commercial IP' }
          ]
        },
        {
          id: 'standard',
          name: { bn: 'পূর্ণাঙ্গ ব্র্যান্ডিং (জনপ্রিয়)', en: 'Full Brand Suite (Popular)' },
          badge: { bn: 'সবচেয়ে জনপ্রিয়', en: 'Most Popular' },
          isPopular: true,
          price: 15000,
          priceFormatted: { bn: '৳ ১৫,০০০', en: '৳ 15,000' },
          billingPeriod: { bn: '/প্রজেক্ট', en: '/project' },
          description: {
            bn: 'প্রতিষ্ঠিত কোম্পানি ও ব্র্যান্ডের জন্য কমপ্লিট ভিজ্যুয়াল আইডেন্টিটি সিস্টেম।',
            en: 'Complete corporate identity system for growing enterprises.'
          },
          features: [
            { bn: '৪টি প্রিমিয়াম লোগো কনসেপ্ট ও ভ্যারিয়েশন', en: '4 Premium Logo Concept Variations' },
            { bn: 'পূর্ণাঙ্গ ব্র্যান্ড গাইডলাইন ম্যানুয়াল বুকলেট (PDF)', en: 'Comprehensive Brand Guidelines Manual (PDF)' },
            { bn: 'কর্পোরেট স্টেশনারি (ভিজিটিং কার্ড, লেটারহেড, খাম)', en: 'Corporate Stationery (Visiting Card, Letterhead, Envelope)' },
            { bn: 'সোশ্যাল মিডিয়া কমপ্লিট কিট (ফেসবুক কভার, ব্যানার, পোস্ট ফ্রেম)', en: 'Social Media Complete Kit (Banners, Post Frames)' },
            { bn: 'সীমাহীন রিভিশন ও ফটোরিয়েলিস্টিক ৩D মকআপস', en: 'Unlimited Revisions & Photorealistic 3D Mockups' }
          ]
        },
        {
          id: 'premium',
          name: { bn: 'এন্টারপ্রাইজ প্যাকেজিং ও ব্র্যান্ড', en: 'Enterprise Packaging & Suite' },
          badge: { bn: 'পূর্ণাঙ্গ সমাধান', en: 'Complete Solution' },
          price: 28000,
          priceFormatted: { bn: '৳ ২৮,০০০', en: '৳ 28,000' },
          billingPeriod: { bn: '/প্রজেক্ট', en: '/project' },
          description: {
            bn: 'পণ্য প্যাকেজিং, কর্পোরেট ব্রোশিওর ও এক্সক্লুসিভ ব্র্যান্ড আর্কিটেকচার।',
            en: 'Retail packaging architecture, multi-page company profiles & master branding.'
          },
          features: [
            { bn: 'সম্পূর্ণ এক্সক্লুসিভ ব্র্যান্ড আইডেন্টিটি সিস্টেম', en: 'Exclusive Comprehensive Brand Identity System' },
            { bn: 'প্রোডাক্ট বক্স / লেবেল ডাই-লাইন ডিজাইন (প্রিন্ট-রেডি CMYK)', en: 'Product Box / Label Die-Line Design (Print-Ready)' },
            { bn: 'কর্পোরেট ব্রোশিওর / কোম্পানি প্রোফাইল (৮ পেজ পর্যন্ত)', en: 'Corporate Brochure / Company Profile (up to 8 pages)' },
            { bn: '৩D ফটোরিয়েলিস্টিক প্রোডাক্ট রেন্ডার ও প্রেজেন্টেশন ফাইল', en: '3D Photorealistic Product Renders & Presentation Files' },
            { bn: 'ডেডিকেটেড সিনিয়র আর্ট ডিরেক্টর ও ফুল কপিরাইট হস্তান্তর', en: 'Dedicated Senior Art Director & Full IP Transfer' }
          ]
        }
      ],
      addons: [
        { id: 'packaging-box', name: { bn: 'অতিরিক্ত প্রোডাক্ট বক্স / লেবেল ডিজাইন', en: 'Extra Product Box / Label Die-Line' }, price: 3000, priceFormatted: { bn: '+ ৳ ৩,০০০', en: '+ ৳ 3,000' } },
        { id: '3d-mockup-pack', name: { bn: '৩টি এক্সক্লুসিভ ৩D ফটোরিয়ালিস্টিক মকআপ', en: '3 Exclusive 3D Photorealistic Mockups' }, price: 1800, priceFormatted: { bn: '+ ৳ ১,৮০০', en: '+ ৳ 1,800' } },
        { id: 'express-design-24h', name: { bn: '২৪ ঘণ্টায় ফার্স্ট ড্রাফট ডেলিভারি', en: '24-Hour Express First Draft' }, price: 1500, priceFormatted: { bn: '+ ৳ ১,৫০০', en: '+ ৳ 1,500' } },
        { id: 'flyer-brochure', name: { bn: '২-সাইডেড প্রিন্ট-রেডি লিফলেট / ফ্লায়ার', en: '2-Sided Print-Ready Flyer / Leaflet' }, price: 1200, priceFormatted: { bn: '+ ৳ ১,২০০', en: '+ ৳ 1,200' } }
      ]
    },
    {
      id: 'seo-marketing',
      title: {
        bn: 'এসইও ও গুগল মার্কেটিং',
        en: 'SEO & Google Marketing'
      },
      subtitle: {
        bn: 'গুগল সার্চে ১ নম্বর র‍্যাঙ্কিং, টেকনিক্যাল এসইও ও টার্গেটেড পেইড সার্চ অ্যাডস',
        en: 'Data-driven search engine optimization, local pack & targeted Google search ads'
      },
      icon: <FaMagnifyingGlass className="w-5 h-5" />,
      tiers: [
        {
          id: 'basic',
          name: { bn: 'বেসিক লোকাল এসইও', en: 'Basic Local SEO' },
          badge: { bn: 'স্টার্টার লোকাল', en: 'Starter Local' },
          price: 8000,
          priceFormatted: { bn: '৳ ৮,০০০', en: '৳ 8,000' },
          billingPeriod: { bn: '/মাস', en: '/month' },
          description: {
            bn: 'লোকাল ব্যবসা ও গুগল ম্যাপসে টপ পজিশনে আসার জন্য উপযুক্ত প্যাকেজ।',
            en: 'Targeted Google Business Profile setup & local map rank optimization.'
          },
          features: [
            { bn: 'গুগল বিজনেস প্রোফাইল (GMB) ফুল সেটআপ ও ভেরিফিকেশন', en: 'Google Business Profile (GBP) Full Setup & Verification' },
            { bn: '১০টি টার্গেটেড লোকাল ও নিশ কিওয়ার্ড রিসার্চ', en: '10 Targeted Local & Commercial Keywords' },
            { bn: 'অন-পেজ মেটা ট্যাগ, হেডার ও ইমেজ অল্ট ট্যাগ ফিক্সিং', en: 'On-Page Meta Tags, Headers & Image Alt Optimization' },
            { bn: 'গুগল সার্চ কনসোল ও সাইটম্যাপ ইনডেক্সিং কনফিগারেশন', en: 'Google Search Console & Sitemap Indexing Configuration' },
            { bn: 'মাসিক কিওয়ার্ড র‍্যাঙ্কিং ট্র্যাকিং রিপোর্ট', en: 'Monthly Keyword Rank Tracking Report' }
          ]
        },
        {
          id: 'standard',
          name: { bn: 'স্ট্যান্ডার্ড এসইও গ্রোথ', en: 'Standard SEO Growth' },
          badge: { bn: 'সবচেয়ে জনপ্রিয়', en: 'Most Popular' },
          isPopular: true,
          price: 14000,
          priceFormatted: { bn: '৳ ১৪,০০০', en: '৳ 14,000' },
          billingPeriod: { bn: '/মাস', en: '/month' },
          description: {
            bn: 'অর্গানিক ওয়েবসাইট ট্রাফিক বহুগুণ বৃদ্ধি ও দীর্ঘমেয়াদী গুগল র‍্যাঙ্কের জন্য।',
            en: 'Drive sustainable organic search traffic with technical SEO & quality backlinks.'
          },
          features: [
            { bn: '২৫টি হাই-ইনটেন্ট কমার্শিয়াল কিওয়ার্ড অপ্টিমাইজেশন', en: '25 High-Intent Commercial Keyword Ranking' },
            { bn: 'সম্পূর্ণ টেকনিক্যাল এসইও ও কোর ওয়েব ভাইটালস স্পিড ফিক্স', en: 'Full Technical SEO & Core Web Vitals Speed Fix' },
            { bn: 'কোয়ালিটি হাই DA/DR ডু-ফলো ব্যাকলিংক বিল্ডিং', en: 'High DA/DR Quality Do-Follow Backlink Acquisition' },
            { bn: 'কনটেন্ট অপ্টিমাইজেশন ও স্ট্রাকচার্ড স্কিমা মার্কআপ', en: 'Content Optimization & Structured Schema Markup' },
            { bn: 'গুগল সার্চ কনসোল অডিট ও রিয়েল-টাইম লাইভ ড্যাশবোর্ড', en: 'Search Console Live Analytics Dashboard' }
          ]
        },
        {
          id: 'premium',
          name: { bn: 'প্রিমিয়াম এসইও + গুগল অ্যাডস', en: 'Premium SEO + Google Ads' },
          badge: { bn: 'সর্বোচ্চ কনভার্সন', en: 'Maximum Conversions' },
          price: 29000,
          priceFormatted: { bn: '৳ ২৯,০০০', en: '৳ 29,000' },
          billingPeriod: { bn: '/মাস', en: '/month' },
          description: {
            bn: 'অর্গানিক এসইও ডমিনেশন এবং তাৎক্ষণিক পেইড সার্চ ট্রাফিকের কমপ্লিট সলিউশন।',
            en: 'Combined aggressive Google Search Ads (PPC) and full-scale organic dominance.'
          },
          features: [
            { bn: '৫০+ হাই-ভলিউম কিওয়ার্ড র‍্যাঙ্কিং স্ট্র্যাটেজি', en: '50+ High-Volume Keyword Ranking Strategy' },
            { bn: 'গুগল সার্চ ও শপিং অ্যাডস ফুল সেটআপ ও ক্যাম্পেইন ম্যানেজমেন্ট', en: 'Google Search & Shopping Ads Full Setup & Campaign Management' },
            { bn: 'নেগেটিভ কিওয়ার্ড ও অ্যাড কোয়ালিটি স্কোর (Quality Score 9/10)', en: 'Negative Keywords & High Quality Score Ad Management' },
            { bn: 'ল্যান্ডিং পেজ কনভার্সন রেট অপ্টিমাইজেশন (CRO) অডিট', en: 'Landing Page Conversion Rate Optimization (CRO)' },
            { bn: 'ডেডিকেটেড সিনিয়র এসইও ডিরেক্টর ও সাপ্তাহিক লাইভ স্ট্র্যাটেজি মিটিং', en: 'Dedicated Senior SEO Director & Weekly Live Strategy Calls' }
          ]
        }
      ],
      addons: [
        { id: 'google-ads-extra', name: { bn: 'গুগল অ্যাডস এক্সট্রা অ্যাডগ্রুপ ও ক্যাম্পেইন', en: 'Additional Google Ads Campaigns & A/B Copy' }, price: 4000, priceFormatted: { bn: '+ ৳ ৪,০০০', en: '+ ৳ 4,000' } },
        { id: 'seo-articles-2', name: { bn: '২টি ১,৫০০ শব্দের ফুল এসইও ব্লগ আর্টিকেল', en: '2 SEO-Optimized Articles (1,500 words each)' }, price: 2000, priceFormatted: { bn: '+ ৳ ২,০০০', en: '+ ৳ 2,000' } },
        { id: 'local-citations', name: { bn: '৩০টি হাই-অথরিটি লোকাল ডিরেক্টরি সাবমিশন', en: '30 High-Authority Local Directory Citations' }, price: 1500, priceFormatted: { bn: '+ ৳ ১,৫০০', en: '+ ৳ 1,500' } },
        { id: 'speed-boost', name: { bn: 'ওয়েবসাইট মোবাইল স্পিড বুস্ট (90+ গ্যারান্টি)', en: 'Mobile Speed Optimization (90+ PageSpeed)' }, price: 2500, priceFormatted: { bn: '+ ৳ ২,৫০০', en: '+ ৳ 2,500' } }
      ]
    },
    {
      id: 'video-production',
      title: {
        bn: 'ভিডিও প্রোডাকশন ও ফটোশুট',
        en: 'Video Production & Photoshoot'
      },
      subtitle: {
        bn: 'মডেল ভিডিও, প্রোডাক্ট ভিডিও এবং প্রফেশনাল কমার্শিয়াল ফটোশুট',
        en: 'Cinematic commercials, product showcases, and high-end model shoots'
      },
      icon: <FaVideo className="w-5 h-5" />,
      subcategories: [
        {
          id: 'model-video',
          name: { bn: 'মডেল + ভিডিও', en: 'Model + Video' },
          tiers: [
            {
              id: 'basic',
              name: { bn: 'বেসিক মডেল ভিডিও', en: 'Basic Model Video' },
              badge: { bn: 'অফিসিয়াল রেট', en: 'Official Rate' },
              price: 3000,
              priceFormatted: { bn: '৳ ৩,০০০', en: '৳ 3,000' },
              billingPeriod: { bn: '/ভিডিও', en: '/video' },
              description: {
                bn: '১ জন প্রফেশনাল মডেলসহ আকর্ষণীয় সোশ্যাল মিডিয়া প্রমোশনাল ভিডিও।',
                en: 'High-engaging short commercial video featuring a professional model.'
              },
              features: [
                { bn: '১ জন প্রফেশনাল মডেল অভিনয় ও প্রেজেন্টেশন', en: '1 Professional Model Acting & Presentation' },
                { bn: '৪৫-৬০ সেকেন্ডের শর্ট সোশ্যাল প্রমো ভিডিও', en: '45-60 Sec High-Engaging Social Promo' },
                { bn: 'স্টুডিও প্রফেশনাল লাইটিং ও ক্লিয়ার অডিও রেকর্ড', en: 'Studio Lighting & Clear Wireless Mic Audio' },
                { bn: 'ট্রেন্ডিং ব্যাকগ্রাউন্ড মিউজিক ও টাইটেল টেক্সট', en: 'Trending Background Music & Modern Titles' },
                { bn: '১০৮০p ফুল HD সোশ্যাল রেডি এক্সপোর্ট (১টি রিভিশন)', en: '1080p Full HD Export (1 Free Revision)' }
              ]
            },
            {
              id: 'standard',
              name: { bn: 'স্ট্যান্ডার্ড মডেল ভিডিও', en: 'Standard Model Video' },
              badge: { bn: 'জনপ্রিয় চয়েস', en: 'Popular Choice' },
              isPopular: true,
              price: 5500,
              priceFormatted: { bn: '৳ ৫,৫০০', en: '৳ 5,500' },
              billingPeriod: { bn: '/ভিডিও', en: '/video' },
              description: {
                bn: 'সিনেমাটিক ক্যামেরা ও স্টোরিলাইনের মাধ্যমে ব্র্যান্ডেড কমার্শিয়াল ভিডিও।',
                en: 'Cinematic commercial with storytelling and advanced color grading.'
              },
              features: [
                { bn: 'প্রফেশনাল মডেল ও সিনেমাটিক শুট ডিরেকশন', en: 'Professional Model & Cinematic Direction' },
                { bn: '৬০-৯০ সেকেন্ডের কমার্শিয়াল ব্রান্ড ভিডিও', en: '60-90 Sec Commercial Brand Film' },
                { bn: 'DaVinci Resolve কালার গ্রেডিং ও মোশন গ্রাফিক্স', en: 'DaVinci Resolve Color Grade & Motion Graphics' },
                { bn: 'স্টুডিও ভয়েসওভার ও অ্যাডভান্সড সাউন্ড মিক্স', en: 'Studio Voiceover Integration & Sound Mixing' },
                { bn: '১০৮০p ও ৪K ফরম্যাট এক্সপোর্ট (২টি রিভিশন)', en: '1080p & 4K Social Exports (2 Revisions)' }
              ]
            },
            {
              id: 'premium',
              name: { bn: 'প্রিমিয়াম সিনেমাটিক কমার্শিয়াল', en: 'Premium Cinematic Commercial' },
              badge: { bn: 'হাই-এন্ড প্রডাকশন', en: 'High-End Production' },
              price: 9500,
              priceFormatted: { bn: '৳ ৯,৫০০', en: '৳ 9,500' },
              billingPeriod: { bn: '/ভিডিও', en: '/video' },
              description: {
                bn: 'টিভি ও ডিজিটাল প্ল্যাটফর্মের জন্য সিনেমা লেন্স ও মাল্টি-অ্যাঙ্গেল বিজ্ঞাপনী ফিল্ম।',
                en: 'TV & digital master commercial shot with cinema lenses and script.'
              },
              features: [
                { bn: 'টপ-টিয়ার মডেল, স্ক্রিপ্টরাইটিং ও প্রিমিয়াম লোকেশন', en: 'Top-Tier Model, Custom Scriptwriting & Location' },
                { bn: 'মাল্টি-অ্যাঙ্গেল ৪K সিনেমা শুট (Sony FX / Cinema Rig)', en: 'Multi-Angle 4K Cinema Rig Shoot' },
                { bn: '৩D মোশন ইফেক্টস ও ব্র্যান্ড ইন্ট্রো/আউট্রো', en: '3D Motion Graphics & Branded Intro/Outro' },
                { bn: 'মাল্টিপল রেশিও এক্সপোর্ট (16:9, 9:16 Reels, 1:1 Feed)', en: 'Multiple Aspect Ratio Exports (16:9, 9:16, 1:1)' },
                { bn: 'আনলিমিটেড রিভিশন ও ফুল কমার্শিয়াল রাইটস', en: 'Unlimited Revisions & Complete Commercial Rights' }
              ]
            }
          ],
          addons: [
            { id: 'model-drone', name: { bn: '৪K ড্রোন এরিয়াল ফুটেজ শট', en: '4K Drone Aerial Cinematic Shots' }, price: 2500, priceFormatted: { bn: '+ ৳ ২,৫০০', en: '+ ৳ 2,500' } },
            { id: 'model-voiceover', name: { bn: 'প্রফেশনাল ভয়েসওভার আর্টিস্ট রেকর্ড', en: 'Professional Voiceover Artist Track' }, price: 1200, priceFormatted: { bn: '+ ৳ ১,২০০', en: '+ ৳ 1,200' } },
            { id: 'model-fast-delivery', name: { bn: '২৪ ঘণ্টায় সুপারফাস্ট ডেলিভারি', en: '24-Hour Express Production' }, price: 1500, priceFormatted: { bn: '+ ৳ ১,৫০০', en: '+ ৳ 1,500' } },
            { id: 'model-extra-cut', name: { bn: 'অতিরিক্ত ১৫ সেকেন্ডের কাটিং টিজার', en: 'Extra 15-Sec Teaser Cut' }, price: 800, priceFormatted: { bn: '+ ৳ ৮০০', en: '+ ৳ 800' } }
          ]
        },
        {
          id: 'product-video-model',
          name: { bn: 'মডেলসহ প্রোডাক্ট ভিডিও', en: 'Product Video with Model' },
          tiers: [
            {
              id: 'basic',
              name: { bn: 'বেসিক প্রোডাক্ট + মডেল', en: 'Basic Product + Model' },
              badge: { bn: 'অফিসিয়াল রেট', en: 'Official Rate' },
              price: 3500,
              priceFormatted: { bn: '৳ ৩,৫০০', en: '৳ 3,500' },
              billingPeriod: { bn: '/ভিডিও', en: '/video' },
              description: {
                bn: 'মডেলের মাধ্যমে পণ্যের বাস্তব ব্যবহার ও ফিচার প্রদর্শনের পূর্ণাঙ্গ ভিডিও।',
                en: 'Demonstrate product usage and practical benefits with a professional model.'
              },
              features: [
                { bn: '১ জন প্রফেশনাল মডেলের প্রোডাক্ট হ্যান্ডলিং ও ডেমো', en: 'Professional Model Handling & Demonstration' },
                { bn: '৪৫-৬০ সেকেন্ডের কনভার্সন-ফোকাসড ভিডিও', en: '45-60 Sec High-Conversion Product Showcase' },
                { bn: 'প্রোডাক্টের সুবিধা ও স্পেসিফিকেশন টেক্সট ওভারলে', en: 'Key Features & Spec Highlights Callouts' },
                { bn: 'প্রিমিয়াম স্টুডিও লাইটিং ও প্রোডাক্ট গ্লো এফেক্ট', en: 'Studio Product Lighting & Highlights' },
                { bn: '১০৮০p ফুল HD অপ্টিমাইজড ভিডিও এক্সপোর্ট', en: '1080p Full HD Optimized Export' }
              ]
            },
            {
              id: 'standard',
              name: { bn: 'স্ট্যান্ডার্ড প্রোডাক্ট কমার্শিয়াল', en: 'Standard Product Film' },
              badge: { bn: 'বেস্ট সেলার', en: 'Best Seller' },
              isPopular: true,
              price: 6500,
              priceFormatted: { bn: '৳ ৬,৫০০', en: '৳ 6,500' },
              billingPeriod: { bn: '/ভিডিও', en: '/video' },
              description: {
                bn: 'মডেলের সাথে লাইফস্টাইল সেটিং ও আকর্ষণীয় কনভার্সন হুক যুক্ত ভিডিও।',
                en: 'Lifestyle environment shoot with hook-driven e-commerce storytelling.'
              },
              features: [
                { bn: 'প্রফেশনাল মডেল ও লাইফস্টাইল স্টুডিও এনভায়রনমেন্ট', en: 'Model + Lifestyle Studio Environment' },
                { bn: '৬০-৯০ সেকেন্ডের সিনেমাটিক প্রোডাক্ট ডেমোনেস্ট্রেশন', en: '60-90 Sec Cinematic Product Demo' },
                { bn: 'ম্যাক্রো ডিটেইলিং শটস ও টেক্সচার শোকেস', en: 'Macro Close-Up Detailing & Texture Shots' },
                { bn: 'ভয়েসওভার ও লাইসেন্সড ব্যাকগ্রাউন্ড মিউজিক', en: 'Professional Voiceover & Licensed Audio' },
                { bn: '৪K ও ফুল HD মাল্টি-প্ল্যাটফর্ম ফাইলস', en: '4K & Full HD Multi-Platform Files' }
              ]
            },
            {
              id: 'premium',
              name: { bn: 'প্রিমিয়াম কমার্শিয়াল লঞ্চ ফিল্ম', en: 'Premium Launch Film' },
              badge: { bn: 'টপ টিয়ার', en: 'Top Tier' },
              price: 11000,
              priceFormatted: { bn: '৳ ১১,০০০', en: '৳ 11,000' },
              billingPeriod: { bn: '/ভিডিও', en: '/video' },
              description: {
                bn: 'নতুন প্রোডাক্ট লঞ্চিং ক্যাম্পেইনের জন্য হাই-এন্ড বাণিজ্যিক বিজ্ঞাপন।',
                en: 'Master product launch campaign with multi-angle cinema rig and motion titles.'
              },
              features: [
                { bn: 'টপ মডেল, স্ক্রিপ্টরাইটিং ও মাল্টিপল কনসেপ্ট শটস', en: 'Top Model, Custom Scriptwriting & Multiple Concepts' },
                { bn: 'ফুল সিনেমাটিক ৪K প্রোডাকশন ক্যামেরা ও লাইটিং রিগ', en: 'Full 4K Cinema Production Rig' },
                { bn: '৩D মোশন টাইপোগ্রাফি ও প্রোডাক্ট বেনিফিট অ্যানিমেশন', en: '3D Motion Typography & Feature Callouts' },
                { bn: 'মেটা ও টিকটক অ্যাডসের জন্য ৩টি ভিন্ন হুক ভ্যারিয়েন্ট', en: '3 Distinct Hook Variations for TikTok & Meta Ads' },
                { bn: 'আনলিমিটেড রিভিশন ও লাইফটাইম ব্রডকাস্ট লাইসেন্স', en: 'Unlimited Revisions & Lifetime Broadcast Rights' }
              ]
            }
          ],
          addons: [
            { id: 'pvm-hook-variants', name: { bn: '২টি অতিরিক্ত সোশ্যাল অ্যাড হুক (Reels / TikTok)', en: '2 Extra Viral Ad Hooks for Reels/TikTok' }, price: 1500, priceFormatted: { bn: '+ ৳ ১,৫০০', en: '+ ৳ 1,500' } },
            { id: 'pvm-voiceover', name: { bn: 'ভয়েসওভার শিল্পী ও স্ক্রিপ্ট ফাইনাল', en: 'Studio Voiceover Artist & Polished Script' }, price: 1200, priceFormatted: { bn: '+ ৳ ১,২০০', en: '+ ৳ 1,200' } },
            { id: 'pvm-fast-24h', name: { bn: '২৪ ঘণ্টায় এক্সপ্রেস এডিটিং ও ডেলিভারি', en: '24-Hour Express Editing & Delivery' }, price: 1500, priceFormatted: { bn: '+ ৳ ১,৫০০', en: '+ ৳ 1,500' } },
            { id: 'pvm-product-photos', name: { bn: 'শুটের সাথে ৫টি রিটাচড প্রোডাক্ট ছবি', en: '5 Retouched Product Photos During Shoot' }, price: 1000, priceFormatted: { bn: '+ ৳ ১,০০০', en: '+ ৳ 1,000' } }
          ]
        },
        {
          id: 'only-product-video',
          name: { bn: 'অনলি প্রোডাক্ট ভিডিও', en: 'Only Product Video' },
          tiers: [
            {
              id: 'basic',
              name: { bn: 'বেসিক প্রোডাক্ট ভিডিও', en: 'Basic Product Video' },
              badge: { bn: 'বেস্ট প্রাইস ৯৯০', en: 'Best Price 990' },
              price: 990,
              priceFormatted: { bn: '৳ ৯৯০', en: '৳ 990' },
              billingPeriod: { bn: '/ভিডিও', en: '/video' },
              description: {
                bn: '১টি পণ্যের ক্লিন ৩৬০° রোটেশন ও হাইলাইট সম্বলিত সাশ্রয়ী ভিডিও।',
                en: 'Crisp, high-impact 360 rotation & product showcase at only ৳990.'
              },
              features: [
                { bn: '১টি প্রোডাক্টের ৩০-৪৫ সেকেন্ডের ক্লিন ভিডিও', en: '30-45 Sec Clean Showcase of 1 Product' },
                { bn: '৩৬০° রোটেটিং টেবিল শট ও ফিচার হাইলাইট', en: '360° Rotating Turntable & Angle Highlights' },
                { bn: 'ট্রেন্ডিং সোশ্যাল ব্যাকগ্রাউন্ড মিউজিক ও টেক্সট', en: 'Trending Background Audio & Text Callouts' },
                { bn: 'ফেসবুক/ইনস্টাগ্রাম রিলস ফরম্যাট (9:16)', en: 'Social Media Optimized Vertical Reels Format' },
                { bn: '১০৮০p ফুল HD আউটপুট ও ১টি রিভিশন', en: '1080p Full HD Output (1 Free Revision)' }
              ]
            },
            {
              id: 'standard',
              name: { bn: 'স্ট্যান্ডার্ড প্রোডাক্ট শোকেস', en: 'Standard Showcase' },
              badge: { bn: 'ভ্যালু ডিল', en: 'Value Deal' },
              isPopular: true,
              price: 2200,
              priceFormatted: { bn: '৳ ২,২০০', en: '৳ 2,200' },
              billingPeriod: { bn: '/ভিডিও', en: '/video' },
              description: {
                bn: 'ম্যাক্রো লেন্স ও স্টুডিও লাইটিং দিয়ে পণ্যের প্রতিটি সূক্ষ্ম ডিটেইল শোকেস।',
                en: 'Macro close-ups and professional tabletop studio lighting.'
              },
              features: [
                { bn: '১-২টি প্রোডাক্টের ৬০ সেকেন্ডের সিনেমাটিক ভিডিও', en: '60 Sec Cinematic Video of 1-2 Products' },
                { bn: 'ম্যাক্রো ডিটেইলিং, টেক্সচার ও ক্লোজ-আপ শটস', en: 'Macro Detailing, Texture & Dynamic Light Passes' },
                { bn: 'প্রিমিয়াম কালার গ্রেডিং ও মোশন টাইপোগ্রাফি', en: 'Color Grading & Smooth Motion Typography' },
                { bn: 'সাউন্ড ইফেক্টস (SFX) ও ট্রেন্ডিং মিউজিক', en: 'Rich Foley SFX & Trending Music Track' },
                { bn: '১০৮০p ও ৪K ফরম্যাট এক্সপোর্ট', en: '1080p & 4K Format Exports' }
              ]
            },
            {
              id: 'premium',
              name: { bn: 'প্রিমিয়াম প্রোডাক্ট কমার্শিয়াল', en: 'Premium Product Ad' },
              badge: { bn: 'সিনেমা কোয়ালিটি', en: 'Cinema Quality' },
              price: 4500,
              priceFormatted: { bn: '৳ ৪,৫০০', en: '৳ 4,500' },
              billingPeriod: { bn: '/ভিডিও', en: '/video' },
              description: {
                bn: 'হাই-স্পিড স্লো-মোশন ও প্রিমিয়াম ভিজ্যুয়াল এফেক্টস সমৃদ্ধ মাস্টার বিজ্ঞাপন।',
                en: 'High-speed slow-motion & premium visual effects for master ad campaigns.'
              },
              features: [
                { bn: '৩-৪টি প্রোডাক্টের পূর্ণাঙ্গ ক্যাটালগ শোকেস ফিল্ম', en: 'Complete Showcase Film for 3-4 Products' },
                { bn: 'স্লো-মোশন (120fps), গিম্বল মুভমেন্ট ও ওয়াটার/স্মোক শট', en: 'Slow-Motion (120fps), Gimbal & Special Effect Shots' },
                { bn: '৩D ইন্ট্রো/আউট্রো লোগো অ্যানিমেশন', en: '3D Intro/Outro Logo Animation' },
                { bn: '৩টি পৃথক সাইজ এক্সপোর্ট (16:9, 9:16, 1:1)', en: '3 Aspect Ratios (16:9 Landscape, 9:16 Reels, 1:1 Feed)' },
                { bn: 'আনলিমিটেড রিভিশন ও র ফাইলস ব্যাকআপ', en: 'Unlimited Revisions & Raw Assets Backup' }
              ]
            }
          ],
          addons: [
            { id: 'opv-extra-product', name: { bn: 'অতিরিক্ত ১টি প্রোডাক্ট শুট যুক্ত করুন', en: 'Add 1 Extra Product to Video' }, price: 800, priceFormatted: { bn: '+ ৳ ৮০০', en: '+ ৳ 800' } },
            { id: 'opv-slow-mo', name: { bn: '১২০fps হাই-স্পিড সিনেমাটিক স্লো-মোশন শট', en: '120fps High-Speed Cinematic Slow-Mo' }, price: 1000, priceFormatted: { bn: '+ ৳ ১,০০০', en: '+ ৳ 1,000' } },
            { id: 'opv-fast-24h', name: { bn: '২৪ ঘণ্টায় দ্রুত এডিটিং ও ডেলিভারি', en: '24-Hour Fast Delivery' }, price: 700, priceFormatted: { bn: '+ ৳ ৭০০', en: '+ ৳ 700' } },
            { id: 'opv-photos', name: { bn: 'ভিডিওর পাশাপাশি ৩টি হাই-রেজুলেশন ছবি', en: '3 High-Res Retouched Product Photos' }, price: 500, priceFormatted: { bn: '+ ৳ ৫০০', en: '+ ৳ 500' } }
          ]
        },
        {
          id: 'model-photoshoot',
          name: { bn: 'মডেলসহ প্রোডাক্ট ফটোশুট', en: 'Product with Model Photoshoot' },
          tiers: [
            {
              id: 'basic',
              name: { bn: 'বেসিক ১ প্রোডাক্ট (৫ ছবি)', en: 'Basic 1 Product (5 Photos)' },
              badge: { bn: 'অফিসিয়াল রেট ১,৮০০', en: 'Official ৳1,800' },
              price: 1800,
              priceFormatted: { bn: '৳ ১,৮০০', en: '৳ 1,800' },
              billingPeriod: { bn: '/প্রোডাক্ট', en: '/product' },
              description: {
                bn: '১টি প্রোডাক্টের জন্য ১ জন মডেল ও ৫টি প্রিমিয়াম এডিটেড হাই-কোয়ালিটি ছবি।',
                en: '1 Product shoot with professional model & 5 high-end retouched photos.'
              },
              features: [
                { bn: '১টি প্রোডাক্টের পূর্ণাঙ্গ শুট', en: 'Complete Shoot for 1 Product' },
                { bn: '১ জন প্রফেশনাল মডেল হ্যান্ডলিং ও পোজ', en: '1 Professional Model Posing & Demonstration' },
                { bn: '৫টি হাই-এন্ড রিটাচড ও কালার গ্রেডেড এডিটেড ছবি', en: '5 High-End Retouched & Edited Photos' },
                { bn: 'স্টুডিও প্রিমিয়াম লাইটিং ও সফট শ্যাডো', en: 'Studio Lighting & Soft Shadows' },
                { bn: 'ই-কমার্স ও সোশ্যাল মিডিয়া রেডি হাই-রেজুলেশন জেপিজি/পিএনজি', en: 'E-Commerce & Social Ready High-Res Output' }
              ]
            },
            {
              id: 'standard',
              name: { bn: 'স্ট্যান্ডার্ড ৩ প্রোডাক্ট (১৫ ছবি)', en: 'Standard 3 Products (15 Photos)' },
              badge: { bn: 'জনপ্রিয় চয়েস', en: 'Popular Choice' },
              isPopular: true,
              price: 3500,
              priceFormatted: { bn: '৳ ৩,৫০০', en: '৳ 3,500' },
              billingPeriod: { bn: '/প্যাকেজ', en: '/package' },
              description: {
                bn: '৩টি পণ্যের জন্য মডেলসহ ১৫টি বৈচিত্র্যময় অ্যাঙ্গেল ও লাইফস্টাইল ছবি।',
                en: '15 diverse lifestyle & studio shots for 3 products with professional model.'
              },
              features: [
                { bn: '৩টি প্রোডাক্টের শুট (প্রতি প্রোডাক্টে ৫টি করে ছবি)', en: 'Shoot for 3 Products (5 Photos Each)' },
                { bn: 'মোট ১৫টি মাস্টার এডিটেড ও রিটাচড ছবি', en: 'Total 15 Master Edited & Retouched Photos' },
                { bn: 'প্রফেশনাল মডেল ও আউটফিট কোঅর্ডিনেশন', en: 'Professional Model & Outfit Coordination' },
                { bn: 'হোয়াইট ব্যাকগ্রাউন্ড ও লাইফস্টাইল অ্যাঙ্গেলস', en: 'White Studio & Lifestyle Context Angles' },
                { bn: 'বিজ্ঞাপন ও ওয়েবসাইটের জন্য রেডি ফাইলস', en: 'Ad Creatives & Web-Ready Assets' }
              ]
            },
            {
              id: 'premium',
              name: { bn: 'প্রিমিয়াম ৬ প্রোডাক্ট (৩০ ছবি)', en: 'Premium 6 Products (30 Photos)' },
              badge: { bn: 'বেস্ট ভ্যালু', en: 'Best Value' },
              price: 6500,
              priceFormatted: { bn: '৳ ৬,৫০০', en: '৳ 6,500' },
              billingPeriod: { bn: '/প্যাকেজ', en: '/package' },
              description: {
                bn: '৬টি পণ্যের জন্য মডেলসহ ৩০টি কমার্শিয়াল ক্যাটালগ ও ব্যানার কোয়ালিটি ছবি।',
                en: '30 commercial catalog & banner photos for 6 products with model.'
              },
              features: [
                { bn: '৬টি প্রোডাক্টের পূর্ণাঙ্গ শুট (প্রতি প্রোডাক্টে ৫টি ছবি)', en: 'Complete Shoot for 6 Products (5 Photos Each)' },
                { bn: 'মোট ৩০টি প্রিমিয়াম এডিটেড ও স্কিন রিটাচড ছবি', en: 'Total 30 Premium Edited & Retouched Photos' },
                { bn: 'টপ মডেল, ব্যাকড্রপ ও লাইফস্টাইল প্রপস', en: 'Top Model, Custom Backdrops & Props' },
                { bn: 'ওয়েবসাইট ব্যানার ও ফেসবুক ক্যারোসেল সাইজিং', en: 'Website Hero Banners & Facebook Carousel Sizing' },
                { bn: 'হাই-স্পিড প্রায়োরিটি ডেলিভারি ও র ফাইলস ব্যাকআপ', en: 'High-Speed Priority Delivery & Raw Files' }
              ]
            }
          ],
          addons: [
            { id: 'mp-extra-photos', name: { bn: 'অতিরিক্ত ৫টি এডিটেড ছবি যুক্ত করুন', en: 'Add 5 Extra Edited Photos' }, price: 500, priceFormatted: { bn: '+ ৳ ৫০০', en: '+ ৳ 500' } },
            { id: 'mp-fast-turnaround', name: { bn: '২৪ ঘণ্টায় এক্সপ্রেস ডেলিভারি', en: '24-Hour Express Turnaround' }, price: 1000, priceFormatted: { bn: '+ ৳ ১,০০০', en: '+ ৳ 1,000' } },
            { id: 'mp-transparent-bg', name: { bn: 'ট্রান্সপারেন্ট পিএনজি ব্যাকগ্রাউন্ড কাটআউট', en: 'Transparent PNG Background Cutouts' }, price: 500, priceFormatted: { bn: '+ ৳ ৫০০', en: '+ ৳ 500' } },
            { id: 'mp-short-video', name: { bn: 'শুটের ১টি রিলস ভিডিও (১৫-৩০ সেকেন্ড)', en: '1 Bonus Reels Video from Shoot' }, price: 1200, priceFormatted: { bn: '+ ৳ ১,২০০', en: '+ ৳ 1,200' } }
          ]
        },
        {
          id: 'only-product-photoshoot',
          name: { bn: 'অনলি প্রোডাক্ট ফটোশুট', en: 'Only Product Photoshoot' },
          tiers: [
            {
              id: 'basic',
              name: { bn: 'বেসিক (১-৫টি প্রোডাক্ট)', en: 'Basic (1-5 Products)' },
              badge: { bn: '৩ পিস/প্রোডাক্ট', en: '3 pcs/product' },
              price: 1150,
              priceFormatted: { bn: '৳ ১,১৫০', en: '৳ 1,150' },
              billingPeriod: { bn: '/প্যাকেজ', en: '/package' },
              description: {
                bn: '১ থেকে ৫টি প্রোডাক্টের শুট; প্রতি প্রোডাক্টে ৩ পিস প্রফেশনাল এডিটেড ছবি।',
                en: '1 to 5 Products; 3 high-res edited pictures per product (৳1,150).'
              },
              features: [
                { bn: '১ থেকে ৫টি প্রোডাক্ট পর্যন্ত শুট', en: '1 to 5 Products Coverage' },
                { bn: 'প্রতি প্রোডাক্টে ৩টি করে প্রফেশনাল এডিটেড ছবি', en: '3 Professional Edited Photos per Product' },
                { bn: 'হোয়াইট ব্যাকগ্রাউন্ড ও ন্যাচারাল ড্রপ শ্যাডো', en: 'Clean White Background & Natural Drop Shadow' },
                { bn: 'হাই-রেজুলেশন ই-কমার্স অপ্টিমাইজড (দারাজ, ওয়েবসাইট রেডি)', en: 'E-Commerce Optimized (Daraz & Web Ready)' },
                { bn: 'কালার একুরেসি কারেকশন ও বেসিক রিটাচিং', en: 'Color Accuracy Correction & Dust Retouching' }
              ]
            },
            {
              id: 'standard',
              name: { bn: 'স্ট্যান্ডার্ড (৬-১৫টি প্রোডাক্ট)', en: 'Standard (6-15 Products)' },
              badge: { bn: '৫ পিস/প্রোডাক্ট', en: '5 pcs/product' },
              isPopular: true,
              price: 2350,
              priceFormatted: { bn: '৳ ২,৩৫০', en: '৳ 2,350' },
              billingPeriod: { bn: '/প্যাকেজ', en: '/package' },
              description: {
                bn: '৬ থেকে ১৫টি প্রোডাক্টের শুট; প্রতি প্রোডাক্টে ৫ পিস বিভিন্ন অ্যাঙ্গেলের ছবি।',
                en: '6 to 15 Products; 5 high-res edited pictures per product (৳2,350).'
              },
              features: [
                { bn: '৬ থেকে ১৫টি প্রোডাক্ট পর্যন্ত শুট', en: '6 to 15 Products Coverage' },
                { bn: 'প্রতি প্রোডাক্টে ৫টি করে এডিটেড ছবি (বিভিন্ন অ্যাঙ্গেল)', en: '5 Edited Pictures per Product (Multi-Angle)' },
                { bn: 'স্টুডিও ড্রপ শ্যাডো ও হাই-এন্ড সারফেস রিফ্লেকশন', en: 'Studio Drop Shadows & Clean Reflections' },
                { bn: 'প্রোডাক্ট টেক্সচার ও লেবেল ক্লিয়ারনেস এনহ্যান্সমেন্ট', en: 'Texture & Label Clarity Enhancement' },
                { bn: 'সোশ্যাল মিডিয়া ও ওয়েবসাইট এইচডি ফাইলস', en: 'Social Media & E-Commerce HD Files' }
              ]
            },
            {
              id: 'premium',
              name: { bn: 'প্রিমিয়াম (১৬-৩০টি প্রোডাক্ট)', en: 'Premium (16-30 Products)' },
              badge: { bn: '৬ পিস/প্রোডাক্ট', en: '6 pcs/product' },
              price: 4350,
              priceFormatted: { bn: '৳ ৪,৩৫০', en: '৳ 4,350' },
              billingPeriod: { bn: '/প্যাকেজ', en: '/package' },
              description: {
                bn: '১৬ থেকে ৩০টি প্রোডাক্টের শুট; প্রতি প্রোডাক্টে ৬ পিস ডিটেইল্ড এডিটেড ছবি।',
                en: '16 to 30 Products; 6 high-res edited pictures per product (৳4,350).'
              },
              features: [
                { bn: '১৬ থেকে ৩০টি প্রোডাক্ট পর্যন্ত শুট', en: '16 to 30 Products Coverage' },
                { bn: 'প্রতি প্রোডাক্টে ৬টি করে মাস্টার এডিটেড ছবি', en: '6 Master Edited Pictures per Product' },
                { bn: 'ক্রিয়েটিভ কম্পোজিশন ও ব্র্যান্ডেড ব্যাকগ্রাউন্ড শটস', en: 'Creative Composition & Themed Studio Shots' },
                { bn: 'ওয়েবসাইট ব্যানার ও বিজ্ঞাপনী ক্যাটালগ সাইজিং', en: 'Catalog & Hero Web Banner Ready' },
                { bn: '১০০% কালার গ্রেডিং ও প্রিমিয়াম রিটাচিং', en: '100% Color Accuracy & Fine Retouching' }
              ]
            },
            {
              id: 'business',
              name: { bn: 'বিজনেস (৩১-৫০টি প্রোডাক্ট)', en: 'Business (31-50 Products)' },
              badge: { bn: 'বাল্ক ভলিউম ৭,৩৫০', en: 'Bulk Deal ৳7,350' },
              price: 7350,
              priceFormatted: { bn: '৳ ৭,৩৫০', en: '৳ 7,350' },
              billingPeriod: { bn: '/প্যাকেজ', en: '/package' },
              description: {
                bn: '৩১ থেকে ৫০টি প্রোডাক্টের বৃহৎ ভলিউম শুট; প্রতি প্রোডাক্টে ৬ পিস ছবি।',
                en: '31 to 50 Products; 6 high-res edited pictures per product (৳7,350).'
              },
              features: [
                { bn: '৩১ থেকে ৫০টি প্রোডাক্টের সম্পূর্ণ বাল্ক শুট', en: '31 to 50 Products Bulk Coverage' },
                { bn: 'প্রতি প্রোডাক্টে ৬টি করে প্রিমিয়াম রিটাচড ছবি', en: '6 Premium Retouched Pictures per Product' },
                { bn: 'বিশাল ভলিউমে সর্বোচ্চ সাশ্রয়ী প্যাকেজ রেট', en: 'Maximum Savings on Enterprise Bulk Volume' },
                { bn: 'প্রায়োরিটি ফাস্ট টার্নঅ্যারাউন্ড ডেলিভারি', en: 'Priority Fast-Track Turnaround Delivery' },
                { bn: 'র (RAW) ফাইলস ব্যাকআপ ও ডেডিকেটেড সাপোর্ট', en: 'RAW Source Files Archive & Dedicated Lead' }
              ]
            }
          ],
          addons: [
            { id: 'opp-transparent', name: { bn: 'সকল ছবির ট্রান্সপারেন্ট পিএনজি ব্যাকগ্রাউন্ড', en: 'Transparent PNG Cutouts for All Items' }, price: 800, priceFormatted: { bn: '+ ৳ ৮০০', en: '+ ৳ 800' } },
            { id: 'opp-lifestyle', name: { bn: '১০টি স্টাইলিশ লাইফস্টাইল প্রপস শট', en: '10 Themed Lifestyle Props Shots' }, price: 1500, priceFormatted: { bn: '+ ৳ ১,৫০০', en: '+ ৳ 1,500' } },
            { id: 'opp-fast-24h', name: { bn: '২৪ ঘণ্টায় ইমার্জেন্সি রিটাচ ডেলিভারি', en: '24-Hour Emergency Retouch Delivery' }, price: 1000, priceFormatted: { bn: '+ ৳ ১,০০০', en: '+ ৳ 1,000' } },
            { id: 'opp-reels', name: { bn: 'শুটের মেকিং ও প্রোডাক্ট গ্ল্যামার রিলস', en: 'Behind-The-Scenes & Product Glamour Reel' }, price: 1000, priceFormatted: { bn: '+ ৳ ১,০০০', en: '+ ৳ 1,000' } }
          ]
        }
      ]
    },
    {
      id: 'web-development',
      title: {
        bn: 'ওয়েব ডিজাইন ও ডেভেলপমেন্ট',
        en: 'Web Design & Development'
      },
      subtitle: {
        bn: 'ওয়ার্ডপ্রেস, উইক্স, শপিফাই এবং কাস্টম ফুলস্ট্যাক Next.js ওয়েব অ্যাপ্লিকেশন',
        en: 'WordPress, Wix, Shopify & bespoke high-performance custom Next.js web applications'
      },
      icon: <FaCode className="w-5 h-5" />,
      subcategories: [
        {
          id: 'wp-wix',
          name: { bn: 'ওয়ার্ডপ্রেস ও উইক্স', en: 'WordPress & Wix' },
          tiers: [
            {
              id: 'basic',
              name: { bn: 'ওয়ার্ডপ্রেস ও উইক্স স্টার্টার', en: 'WordPress & Wix Starter' },
              badge: { bn: '২০,০০০ রেট', en: '20K Rate' },
              price: 20000,
              priceFormatted: { bn: '৳ ২০,০০০', en: '৳ 20,000' },
              billingPeriod: { bn: '/প্রজেক্ট', en: '/project' },
              description: {
                bn: 'ওয়ার্ডপ্রেস বা উইক্সে ১-৩ পেজের দ্রুত, ক্লিন ও রেসপনসিভ ওয়েবসাইট।',
                en: 'Clean, modern 1-3 page mobile-ready website on WordPress or Wix.'
              },
              features: [
                { bn: '১-৩টি কাস্টম পেজ ডিজাইন ও লেআউট সেটআপ', en: '1-3 Custom Pages Setup & Design' },
                { bn: 'মোবাইল, ট্যাবলেট ও ডেস্কটপ ১০০% রেসপন্সিভ', en: '100% Mobile, Tablet & Desktop Responsive' },
                { bn: 'কন্ট্যাক্ট ফর্ম ও সরাসরি হোয়াটসঅ্যাপ চ্যাট বাটন', en: 'Contact Form & Direct WhatsApp Chat Button' },
                { bn: 'সোশ্যাল মিডিয়া পেজ লিঙ্ক ও বেসিক এসইও', en: 'Social Media Linking & Basic SEO Setup' },
                { bn: '২টি রিভিশন ও সহজে কনটেন্ট পরিবর্তনের গাইড', en: '2 Free Revisions & CMS Editing Guide' }
              ]
            },
            {
              id: 'standard',
              name: { bn: 'স্ট্যান্ডার্ড বিজনেস সাইট', en: 'Standard Business Site' },
              badge: { bn: 'সবচেয়ে জনপ্রিয়', en: 'Most Popular' },
              isPopular: true,
              price: 35000,
              priceFormatted: { bn: '৳ ৩৫,০০০', en: '৳ 35,000' },
              billingPeriod: { bn: '/প্রজেক্ট', en: '/project' },
              description: {
                bn: 'উন্নতিশীল ব্যবসার জন্য মাল্টি-পেজ পূর্ণাঙ্গ ওয়েবসাইট (WooCommerce/বিকাশসহ)।',
                en: 'Full multi-page WordPress business website with WooCommerce/payments.'
              },
              features: [
                { bn: 'সর্বোচ্চ ৫-৭টি কাস্টম পেজ / সার্ভিসেস মডিউল', en: 'Up to 5-7 Custom Pages / Services Modules' },
                { bn: 'বিকাশ ও নগদ পেমেন্ট গেটওয়ে ইন্টিগ্রেশন', en: 'bKash & Nagad Payment Gateway Setup' },
                { bn: 'অ্যাডভান্সড স্পিড ও সিকিউরিটি প্লাগইন কনফিগার', en: 'Advanced Speed & Security Plugin Setup' },
                { bn: 'গুগল অ্যানালিটিক্স ও সার্চ কনসোল সেটআপ', en: 'Google Analytics & Search Console Setup' },
                { bn: '১ মাস ফ্রি টেকনিক্যাল মেইনটেন্যান্স ও সাপোর্ট', en: '1 Month Free Maintenance & Technical Support' }
              ]
            },
            {
              id: 'premium',
              name: { bn: 'প্রিমিয়াম পোর্টাল / কাস্টম CMS', en: 'Premium Portal / Custom CMS' },
              badge: { bn: 'পূর্ণাঙ্গ ফিচার্ড', en: 'Fully Featured' },
              price: 60000,
              priceFormatted: { bn: '৳ ৬০,০০০', en: '৳ 60,000' },
              billingPeriod: { bn: '/প্রজেক্ট', en: '/project' },
              description: {
                bn: 'কাস্টম থিম, ডাইনামিক ফিল্টারিং ও হাই-স্পিড অপ্টিমাইজড ওয়ার্ডপ্রেস প্ল্যাটফর্ম।',
                en: 'Custom theme styling, dynamic filtering & advanced speed optimization.'
              },
              features: [
                { bn: '১০+ পেজের কমপ্লিট ডাইনামিক CMS আর্কিটেকচার', en: '10+ Pages Complete Dynamic CMS Architecture' },
                { bn: 'কাস্টম প্লাগইন ও থার্ড-পার্টি সার্ভিস ইন্টিগ্রেশন', en: 'Custom Plugins & Third-Party API Integration' },
                { bn: 'মাল্টি-ল্যাঙ্গুয়েজ (বাংলা ও ইংরেজি) সাপোর্ট', en: 'Multi-Language (EN & BN) Full Support' },
                { bn: '১০০% মোবাইল স্পিড অপ্টিমাইজেশন (90+ Score)', en: '100% Mobile Speed Optimization (90+ Score)' },
                { bn: '৩ মাস ভিআইপি প্রায়োরিটি সাপোর্ট ও ভিডিও ট্রেনিং', en: '3 Months VIP Priority Support & Video Training' }
              ]
            }
          ],
          addons: [
            { id: 'wp-payment', name: { bn: 'অটোমেটেড পেমেন্ট গেটওয়ে (bKash/Nagad IPN)', en: 'Automated Payment Gateway (bKash/Nagad IPN)' }, price: 4000, priceFormatted: { bn: '+ ৳ ৪,০০০', en: '+ ৳ 4,000' } },
            { id: 'wp-speed', name: { bn: 'ওয়েবসাইট স্পিড বুস্ট (Mobile 90+ Score)', en: 'Page Speed Optimization (Mobile 90+ Score)' }, price: 3000, priceFormatted: { bn: '+ ৳ ৩,০০০', en: '+ ৳ 3,000' } },
            { id: 'wp-pages', name: { bn: 'অতিরিক্ত ৩টি কাস্টম পেজ ডিজাইন', en: 'Extra 3 Custom Pages Design' }, price: 3000, priceFormatted: { bn: '+ ৳ ৩,০০০', en: '+ ৳ 3,000' } },
            { id: 'wp-fast', name: { bn: '২৪ ঘণ্টায় এক্সপ্রেস ডেলিভারি', en: '24-Hour Express Launch Delivery' }, price: 3000, priceFormatted: { bn: '+ ৳ ৩,০০০', en: '+ ৳ 3,000' } }
          ]
        },
        {
          id: 'shopify',
          name: { bn: 'শপিফাই স্টোর (Shopify)', en: 'Shopify Store' },
          tiers: [
            {
              id: 'basic',
              name: { bn: 'বেসিক শপিফাই স্টোর', en: 'Basic Shopify Store' },
              badge: { bn: '৩০,০০০ রেট', en: '30K Rate' },
              price: 30000,
              priceFormatted: { bn: '৳ ৩০,০০০', en: '৳ 30,000' },
              billingPeriod: { bn: '/স্টোর', en: '/store' },
              description: {
                bn: 'শপিফাইতে দ্রুত সেল শুরু করার জন্য ক্লিন ও মোবাইল-ফ্রেন্ডলি স্টোর সেটআপ।',
                en: 'Clean, mobile-optimized Shopify storefront setup to launch fast.'
              },
              features: [
                { bn: 'শপিফাই থিম কাস্টমাইজেশন ও ব্র্যান্ডিং কালার সেটআপ', en: 'Shopify Theme Customization & Branding Colors' },
                { bn: '৩০টি পর্যন্ত প্রোডাক্ট আপলোড ও কালেকশন তৈরি', en: 'Up to 30 Products Upload & Collection Setup' },
                { bn: 'বিকাশ/নগদ ক্যাশ অন ডেলিভারি (COD) ফানেল', en: 'bKash/Nagad Cash on Delivery (COD) Funnel' },
                { bn: 'হোয়াটসঅ্যাপ অর্ডার বাটন ও অর্ডার ট্র্যাকিং', en: 'WhatsApp Order Button & Order Tracking' },
                { bn: 'স্টোর লঞ্চ সাপোর্ট ও ১ মাস টেকনিক্যাল গাইড', en: 'Store Launch Support & 1 Month Guidance' }
              ]
            },
            {
              id: 'standard',
              name: { bn: 'স্ট্যান্ডার্ড শপিফাই স্টোর', en: 'Standard Shopify Store' },
              badge: { bn: 'সবচেয়ে জনপ্রিয়', en: 'Most Popular' },
              isPopular: true,
              price: 50000,
              priceFormatted: { bn: '৳ ৫০,০০০', en: '৳ 50,000' },
              billingPeriod: { bn: '/স্টোর', en: '/store' },
              description: {
                bn: 'অটোমেটেড পেমেন্ট, কুরিয়ার সিঙ্ক ও হাই-কনভার্শন শপিফাই সেলস সিস্টেম।',
                en: 'Automated payments, courier sync & high-conversion Shopify sales engine.'
              },
              features: [
                { bn: 'আনলিমিটেড প্রোডাক্ট ও ক্যাটাগরি আর্কিটেকচার', en: 'Unlimited Products & Category Setup' },
                { bn: 'Steadfast / Pathao কুরিয়ার API অটো সিঙ্ক', en: 'Steadfast & Pathao Courier API Auto-Sync' },
                { bn: 'অটোমেটেড পেমেন্ট গেটওয়ে (Cards/bKash/Nagad)', en: 'Automated Card & Mobile Payment Gateway' },
                { bn: 'অ্যাব্যান্ডনড কার্ট রিকভারি ও সেলস বুস্টার অ্যাপস', en: 'Abandoned Cart Recovery & Sales Booster Apps' },
                { bn: '২ মাস ডেডিকেটেড মেইনটেন্যান্স ও গ্রোথ সাপোর্ট', en: '2 Months Dedicated Maintenance & Growth SLA' }
              ]
            },
            {
              id: 'premium',
              name: { bn: 'প্রিমিয়াম কাস্টম লিকুইড শপিফাই', en: 'Premium Custom Liquid Shopify' },
              badge: { bn: 'টপ-টিয়ার ব্র্যান্ড', en: 'Top-Tier Brand' },
              price: 90000,
              priceFormatted: { bn: '৳ ৯০,০০০', en: '৳ 90,000' },
              billingPeriod: { bn: '/স্টোর', en: '/store' },
              description: {
                bn: 'কাস্টম লিকুইড কোডিং, মাল্টি-কারেন্সি ও আল্ট্রাফাস্ট শপিফাই প্লাস আর্কিটেকচার।',
                en: 'Custom Liquid development, multi-currency & bespoke checkout architecture.'
              },
              features: [
                { bn: 'কাস্টম শপিফাই লিকুইড (Liquid) কোডিং ও ইউনিক সেকশন্স', en: 'Custom Liquid Code & Bespoke Theme Sections' },
                { bn: 'মাল্টি-কারেন্সি ও আন্তর্জাতিক শিপিং কনফিগার', en: 'Multi-Currency & Global Shipping Matrix' },
                { bn: 'হাই-কনভার্শন CRO ল্যান্ডিং পেজ ও সেলস ফানেল', en: 'High-Converting CRO Landing Page & Funnel' },
                { bn: '১০০% মোবাইল স্পিড অপ্টিমাইজেশন (90+ Score)', en: '100% Mobile Speed Optimization (90+ Score)' },
                { bn: '৩ মাস ভিআইপি সাপোর্ট ও প্রাইভেট ট্রেনিং সেশন', en: '3 Months VIP Support & 1-on-1 Training Session' }
              ]
            }
          ],
          addons: [
            { id: 'sh-courier', name: { bn: 'Steadfast / Pathao কুরিয়ার API অটো সিঙ্ক', en: 'Steadfast & Pathao Courier Auto-Sync' }, price: 4000, priceFormatted: { bn: '+ ৳ ৪,০০০', en: '+ ৳ 4,000' } },
            { id: 'sh-pixel', name: { bn: 'ফেসবুক পিক্সেল ও সার্ভার-সাইড CAPI সেটআপ', en: 'Facebook Pixel & Server-Side CAPI Setup' }, price: 3000, priceFormatted: { bn: '+ ৳ ৩,০০০', en: '+ ৳ 3,000' } },
            { id: 'sh-reviews', name: { bn: 'কাস্টমার ফটো রিভিউজ ও প্রুফ উইজেট', en: 'Customer Photo Reviews & Social Proof App' }, price: 2000, priceFormatted: { bn: '+ ৳ ২,০০০', en: '+ ৳ 2,000' } },
            { id: 'sh-fast', name: { bn: '২৪ ঘণ্টায় এক্সপ্রেস স্টোর সেটআপ', en: '24-Hour Express Store Setup' }, price: 3000, priceFormatted: { bn: '+ ৳ ৩,০০০', en: '+ ৳ 3,000' } }
          ]
        },
        {
          id: 'custom-web',
          name: { bn: 'কাস্টম ওয়েব (Next.js)', en: 'Custom Web (Next.js)' },
          tiers: [
            {
              id: 'basic',
              name: { bn: 'কাস্টম Next.js ল্যান্ডিং পেজ', en: 'Custom Next.js Landing Page' },
              badge: { bn: '৩৫,০০০ রেট', en: '35K Rate' },
              price: 35000,
              priceFormatted: { bn: '৳ ৩৫,০০০', en: '৳ 35,000' },
              billingPeriod: { bn: '/প্রজেক্ট', en: '/project' },
              description: {
                bn: 'Next.js ও Tailwind CSS-এ তৈরি আল্ট্রা-ফাস্ট ও আধুনিক কাস্টম ল্যান্ডিং পেজ।',
                en: 'Modern high-converting custom Next.js landing page with 100/100 performance.'
              },
              features: [
                { bn: 'Next.js ও React সার্ভার সাইড রেন্ডারড ল্যান্ডিং পেজ', en: 'Next.js & React Server-Side Rendered Page' },
                { bn: '১০০/১০০ গুগল পেজস্পিড ও কোর ওয়েব ভাইটালস', en: '100/100 Google PageSpeed & Core Web Vitals' },
                { bn: 'Tailwind CSS দিয়ে আধুনিক ডার্ক/লাইট মোড ইন্টারফেস', en: 'Tailwind CSS Modern Dark/Light Mode Interface' },
                { bn: 'কন্ট্যাক্ট/লিড সাবমিশন API ও ইমেইল নোটিফিকেশন', en: 'Lead Capture Form API & Email Notifications' },
                { bn: 'ফ্রি Vercel ক্লাউড ডেপ্লয়মেন্ট ও ২ মাস সাপোর্ট', en: 'Free Vercel Deployment & 2 Months Bug Support' }
              ]
            },
            {
              id: 'standard',
              name: { bn: 'ডাইনামিক ফুলস্ট্যাক ওয়েব (জনপ্রিয়)', en: 'Dynamic Fullstack Web App' },
              badge: { bn: 'সবচেয়ে জনপ্রিয়', en: 'Most Popular' },
              isPopular: true,
              price: 75000,
              priceFormatted: { bn: '৳ ৭৫,০০০', en: '৳ 75,000' },
              billingPeriod: { bn: '/প্রজেক্ট', en: '/project' },
              description: {
                bn: 'হেডলেস CMS (অ্যাডমিন প্যানেল), ডাইনামিক ব্লগ ও সার্ভিসেস যুক্ত আধুনিক ওয়েব অ্যাপ।',
                en: 'Modern fullstack web app with headless CMS admin, blog, and service pages.'
              },
              features: [
                { bn: 'Next.js App Router ফুলস্ট্যাক আর্কিটেকচার', en: 'Next.js App Router Full-Stack Architecture' },
                { bn: 'কাস্টম হেডলেস CMS (সহজ অ্যাডমিন ড্যাশবোর্ড)', en: 'Custom Headless CMS (Easy Admin Dashboard)' },
                { bn: 'ডাইনামিক ব্লগ, পোর্টফোলিও ও সার্ভিসেস মডিউল', en: 'Dynamic Blog, Portfolio & Services Modules' },
                { bn: 'অ্যাডভান্সড এসইও মেটাডাটা ও ওপেনগ্রাফ শেয়ারিং', en: 'Advanced SEO Metadata & OpenGraph Social Cards' },
                { bn: 'CI/CD পাইপলাইন ও ৩ মাস ডেডিকেটেড সাপোর্ট', en: 'CI/CD Automated Deploy & 3 Months Support' }
              ]
            },
            {
              id: 'premium',
              name: { bn: 'এন্টারপ্রাইজ ওয়েব প্ল্যাটফর্ম / SaaS', en: 'Enterprise SaaS Platform' },
              badge: { bn: 'স্কেলেবল আর্কিটেকচার', en: 'Scalable Architecture' },
              price: 150000,
              priceFormatted: { bn: '৳ ১,৫০,০০০', en: '৳ 150,000' },
              billingPeriod: { bn: '/প্রজেক্ট', en: '/project' },
              description: {
                bn: 'জটিল ডেটাবেজ, রোল-বেসড অথেনটিকেশন ও স্কেলেবল ক্লাউড ব্যাকএন্ড সিস্টেম।',
                en: 'Bespoke enterprise cloud platform with role-based auth and high concurrency.'
              },
              features: [
                { bn: 'স্কেলেবল ক্লাউড ব্যাকএন্ড ও PostgreSQL/MongoDB আর্কিটেকচার', en: 'Scalable Cloud Backend with PostgreSQL/MongoDB' },
                { bn: 'রোল-বেসড অথেনটিকেশন ও সিকিউর ইউজার পোর্টাল', en: 'Role-Based Authentication & Secure User Portal' },
                { bn: 'কাস্টম অ্যানালিটিক্স ও ম্যানেজমেন্ট ড্যাশবোর্ড', en: 'Custom Analytics & Management Dashboard' },
                { bn: 'থার্ড-পার্টি API, পেমেন্ট ও ওয়েবহুক ইন্টিগ্রেশন', en: 'Third-Party APIs, Webhooks & Automated Workflows' },
                { bn: 'ডেডিকেটেড ফুলস্ট্যাক লিড আর্কিটেক্ট ও ৬ মাস সাপোর্ট', en: 'Dedicated Fullstack Lead Architect & 6 Months SLA' }
              ]
            }
          ],
          addons: [
            { id: 'cw-admin', name: { bn: 'কাস্টম রোল-বেসড অ্যাডমিন ড্যাশবোর্ড', en: 'Custom Role-Based Admin Dashboard' }, price: 10000, priceFormatted: { bn: '+ ৳ ১০,০০০', en: '+ ৳ 10,000' } },
            { id: 'cw-api', name: { bn: 'থার্ড-পার্টি API ও ওয়েবহুক ইন্টিগ্রেশন', en: 'Third-Party API & Webhook Integration' }, price: 7000, priceFormatted: { bn: '+ ৳ ৭,০০০', en: '+ ৳ 7,000' } },
            { id: 'cw-i18n', name: { bn: 'মাল্টি-ল্যাঙ্গুয়েজ (বাংলা ও ইংরেজি) ফুল সেটআপ', en: 'Multi-Language (EN & BN) Complete Setup' }, price: 5000, priceFormatted: { bn: '+ ৳ ৫,০০০', en: '+ ৳ 5,000' } },
            { id: 'cw-cicd', name: { bn: 'অটোমেটেড ব্যাকআপ ও ক্লাউড মনিটরিং', en: 'Automated Cloud Backup & Monitoring' }, price: 6000, priceFormatted: { bn: '+ ৳ ৬,০০০', en: '+ ৳ 6,000' } }
          ]
        }
      ]
    },
    {
      id: 'app-development',
      title: {
        bn: 'মোবাইল অ্যাপ ডেভেলপমেন্ট',
        en: 'Mobile App Development'
      },
      subtitle: {
        bn: 'iOS ও Android ক্রস-প্ল্যাটফর্ম হাই-পারফরম্যান্স মোবাইল অ্যাপ্লিকেশন',
        en: 'High-performance native & cross-platform apps for iOS & Android'
      },
      icon: <FaRobot className="w-5 h-5" />,
      tiers: [
        {
          id: 'basic',
          name: { bn: 'বেসিক মোবাইল অ্যাপ / MVP', en: 'Basic Mobile App / MVP' },
          badge: { bn: '৫০,০০০ রেট', en: '50K Rate' },
          price: 50000,
          priceFormatted: { bn: '৳ ৫০,০০০', en: '৳ 50,000' },
          billingPeriod: { bn: '/প্রজেক্ট', en: '/project' },
          description: {
            bn: '৪-৫ স্ক্রিনের ক্লিন ক্রস-প্ল্যাটফর্ম অ্যাপ বা এআই অটোমেশন চ্যাটবট।',
            en: '4-5 Screen clean MVP app with Firebase backend and modern UI.'
          },
          features: [
            { bn: '৪-৫টি কাস্টম স্ক্রিন ও মডার্ন ইউআই ফ্লো', en: '4-5 Custom Screens & Modern UI Flow' },
            { bn: 'React Native / Flutter ক্রস-প্ল্যাটফর্ম অ্যাপ', en: 'React Native / Flutter Cross-Platform App' },
            { bn: 'ফায়ারবেস অথেনটিকেশন ও ক্লাউড ডেটাবেজ', en: 'Firebase Authentication & Cloud Database' },
            { bn: 'পুশ নোটিফিকেশন সেটআপ ও অফলাইন ক্যাশিং', en: 'Push Notification Setup & Offline Caching' },
            { bn: '১ মাস ফ্রি বাগ ফিক্সিং ও টেকনিক্যাল সাপোর্ট', en: '1 Month Bug Fixing & Technical Support' }
          ]
        },
        {
          id: 'standard',
          name: { bn: 'স্ট্যান্ডার্ড ডুয়েল ওএস অ্যাপ (জনপ্রিয়)', en: 'Standard Dual OS App (Popular)' },
          badge: { bn: 'সবচেয়ে জনপ্রিয়', en: 'Most Popular' },
          isPopular: true,
          price: 120000,
          priceFormatted: { bn: '৳ ১,২০,০০০', en: '৳ 1,20,000' },
          billingPeriod: { bn: '/প্রজেক্ট', en: '/project' },
          description: {
            bn: 'iOS ও Android উভয়ের জন্য প্লে স্টোর ও অ্যাপ স্টোর সাবমিশনসহ সম্পূর্ণ অ্যাপ।',
            en: 'Production-ready iOS & Android app with store submissions & local payment.'
          },
          features: [
            { bn: 'সর্বোচ্চ ১৫টি স্ক্রিন ও ফ্লুইড মাইক্রো-অ্যানিমেশন', en: 'Up to 15 Screens with Fluid Micro-Animations' },
            { bn: 'গুগল প্লে স্টোর ও অ্যাপল অ্যাপ স্টোর সাবমিশন', en: 'App Store & Google Play Store Submission' },
            { bn: 'বিকাশ, নগদ ও কার্ড পেমেন্ট গেটওয়ে ইন্টিগ্রেশন', en: 'bKash, Nagad & Card Payment Gateway' },
            { bn: 'অফলাইন ক্যাশিং ও রিয়েল-টাইম ক্লাউড সিঙ্ক', en: 'Offline Caching & Real-Time Cloud Sync' },
            { bn: 'সম্পূর্ণ সোর্স কোড ও ৩ মাস ফ্রি সাপোর্ট', en: 'Full Source Code & 3 Months Free Support' }
          ]
        },
        {
          id: 'premium',
          name: { bn: 'প্রিমিয়াম এন্টারপ্রাইজ অ্যাপ', en: 'Premium Enterprise App' },
          badge: { bn: 'পূর্ণাঙ্গ এন্টারপ্রাইজ', en: 'Full Enterprise' },
          price: 250000,
          priceFormatted: { bn: '৳ ২,৫০,০০০', en: '৳ 2,50,000' },
          billingPeriod: { bn: '/প্রজেক্ট', en: '/project' },
          description: {
            bn: 'রিয়েল-টাইম ট্র্যাকিং, চ্যাট এবং স্কেলেবল মাইক্রোসার্ভিস সম্বলিত হাই-এন্ড অ্যাপ।',
            en: 'High-concurrency mobile platform with WebSocket streaming and admin suite.'
          },
          features: [
            { bn: 'কাস্টম মাইক্রোসার্ভিস ক্লাউড ব্যাকএন্ড ও স্কেলেবল API', en: 'Custom Microservices Backend & High-Load APIs' },
            { bn: 'রিয়েল-টাইম লাইভ ট্র্যাকিং ও ইন-অ্যাপ চ্যাট ইঞ্জিন', en: 'Real-Time Live Location & In-App Chat Engine' },
            { bn: 'সম্পূর্ণ ওয়েব অ্যাডমিন ও অ্যানালিটিক্স ড্যাশবোর্ড', en: 'Comprehensive Web Admin & Analytics Dashboard' },
            { bn: 'CI/CD পাইপলাইন ও OTA লাইভ আপডেট আর্কিটেকচার', en: 'CI/CD Pipeline & OTA Instant Updates' },
            { bn: 'ডেডিকেটেড সিনিয়র মোবাইল আর্কিটেক্ট ও ৬ মাস SLA সাপোর্ট', en: 'Dedicated Senior Mobile Architect & 6 Months SLA' }
          ]
        }
      ],
      addons: [
        { id: 'app-store', name: { bn: 'গুগল প্লে ও অ্যাপল অ্যাপ স্টোর পাবলিশিং', en: 'Google Play & App Store Publishing Support' }, price: 8000, priceFormatted: { bn: '+ ৳ ৮,০০০', en: '+ ৳ 8,000' } },
        { id: 'app-payment', name: { bn: 'পেমেন্ট গেটওয়ে (bKash/Nagad/Cards)', en: 'Payment Gateway Integration (bKash/Cards)' }, price: 6000, priceFormatted: { bn: '+ ৳ ৬,০০০', en: '+ ৳ 6,000' } },
        { id: 'app-chat', name: { bn: 'রিয়েল-টাইম চ্যাট ও সকেট ইঞ্জিন', en: 'Real-Time In-App Chat & Socket Engine' }, price: 10000, priceFormatted: { bn: '+ ৳ ১০,০০০', en: '+ ৳ 10,000' } },
        { id: 'app-admin', name: { bn: 'ফুল-ফিচার্ড ওয়েব অ্যাডমিন প্যানেল', en: 'Full-Featured Web Admin Dashboard' }, price: 15000, priceFormatted: { bn: '+ ৳ ১৫,০০০', en: '+ ৳ 15,000' } }
      ]
    },
    {
      id: 'ui-ux',
      title: {
        bn: 'ইউআই/ইউএক্স ডিজাইন',
        en: 'UI/UX Design'
      },
      subtitle: {
        bn: 'ইউজার রিসার্চ, ফিগমা প্রোটোটাইপিং ও পিক্সেল-পারফেক্ট মডার্ন ইন্টারফেস',
        en: 'Pixel-perfect UI design systems, interactive Figma prototypes & user research'
      },
      icon: <FaDesktop className="w-5 h-5" />,
      tiers: [
        {
          id: 'basic',
          name: { bn: 'বেসিক ল্যান্ডিং পেজ UI', en: 'Basic Landing Page UI' },
          badge: { bn: '১৫,০০০ রেট', en: '15K Rate' },
          price: 15000,
          priceFormatted: { bn: '৳ ১৫,০০০', en: '৳ 15,000' },
          billingPeriod: { bn: '/পেজ', en: '/page' },
          description: {
            bn: '১টি হাই-কনভার্শন ল্যান্ডিং পেজ ডিজাইন (Desktop ও Mobile উভয় ভ্যারিয়েন্টসহ)।',
            en: 'High-converting single page web UI with mobile responsive layout in Figma.'
          },
          features: [
            { bn: '১টি আধুনিক ডেস্কটপ ও মোবাইল ল্যান্ডিং পেজ UI', en: '1 Modern Desktop & Mobile Landing Page UI' },
            { bn: 'পিক্সেল-পারফেক্ট অটো-লেআউট ও কম্পোনেন্টস', en: 'Pixel-Perfect Auto-Layout & Modular Components' },
            { bn: 'ব্র্যান্ড কালার প্যালেট ও টাইপোগ্রাফি স্টাইল গাইড', en: 'Color Palette & Typography Style Guide' },
            { bn: '২টি ফ্রি রিভিশন ও ডেভেলপার হ্যান্ডঅফ এসেটস', en: '2 Free Revisions & Clean Developer Handoff' },
            { bn: '১০০% এক্সক্লুসিভ ফিগমা সোর্স ফাইল', en: '100% Exclusive Figma Source File (.fig)' }
          ]
        },
        {
          id: 'standard',
          name: { bn: 'স্ট্যান্ডার্ড ওয়েবসাইট / অ্যাপ UI', en: 'Standard Web / App UI' },
          badge: { bn: 'সবচেয়ে জনপ্রিয়', en: 'Most Popular' },
          isPopular: true,
          price: 30000,
          priceFormatted: { bn: '৳ ৩০,০০০', en: '৳ 30,000' },
          billingPeriod: { bn: '/প্রজেক্ট', en: '/project' },
          description: {
            bn: '৮-১২টি স্ক্রিনের সম্পূর্ণ অ্যাপ বা ওয়েবসাইটের মডুলার ডিজাইন সিস্টেম।',
            en: '8-12 Screen complete app/web design with full component library.'
          },
          features: [
            { bn: '৮-১২টি সম্পূর্ণ ইউআই স্ক্রিন ও ইউজার ফ্লো', en: '8-12 Complete UI Screen Workflows' },
            { bn: 'সম্পূর্ণ ফিগমা ডিজাইন সিস্টেম ও ভ্যারিয়েন্টস', en: 'Full Modular Figma Design System & Tokens' },
            { bn: 'ক্লিকেবল ইন্টারঅ্যাক্টিভ প্রোটোটাইপ (Clickable Prototype)', en: 'Clickable Interactive Prototype Demonstration' },
            { bn: 'ডার্ক মোড ও লাইট মোড উভয় কালার ভ্যারিয়েন্ট', en: 'Both Dark & Light Mode Color Themes' },
            { bn: 'সীমাহীন রিভিশন ও ডেভেলপার হ্যান্ডঅফ মিটিং', en: 'Unlimited Tweaks & Developer Walkthrough' }
          ]
        },
        {
          id: 'premium',
          name: { bn: 'প্রিমিয়াম SaaS / প্রোডাক্ট ডিজাইন', en: 'Premium SaaS & Product Design' },
          badge: { bn: 'পূর্ণাঙ্গ প্রোডাক্ট', en: 'Full Product' },
          price: 60000,
          priceFormatted: { bn: '৳ ৬০,০০০', en: '৳ 60,000' },
          billingPeriod: { bn: '/প্রজেক্ট', en: '/project' },
          description: {
            bn: '২০+ স্ক্রিনের জটিল ড্যাশবোর্ড, মাইক্রো-ইন্টারঅ্যাকশন ও ফুল স্কেল ডিজাইন সিস্টেম।',
            en: '20+ Complex screens, advanced SaaS tables, micro-interactions & documentation.'
          },
          features: [
            { bn: '২০+ জটিল ড্যাশবোর্ড স্ক্রিন, চার্ট ও ডেটা টেবিল', en: '20+ Complex Dashboard Screens & Data Tables' },
            { bn: 'পূর্ণাঙ্গ ডিজাইন সিস্টেম ডকুমেন্টেশন ও গাইডলাইন বুক', en: 'Comprehensive Design System Documentation Manual' },
            { bn: 'ফ্লুইড মাইক্রো-ইন্টারঅ্যাকশন ও অ্যানিমেশন স্টেটস', en: 'Fluid Micro-Interactions & State Animations' },
            { bn: 'ইউজার রিসার্চ, ওয়্যারফ্রেমিং ও হিউরিস্টিক অডিট', en: 'User Research, Wireframing & Usability Audit' },
            { bn: 'ডেভেলপার টিমের সাথে সরাসরি স্ল্যাক/মিট সাপোর্ট', en: 'Direct Slack/Meet Engineering Collaboration' }
          ]
        }
      ],
      addons: [
        { id: 'ui-prototype', name: { bn: 'ক্লিকেবল ইন্টারঅ্যাক্টিভ ফিগমা প্রোটোটাইপ', en: 'Clickable Interactive Figma Prototype' }, price: 4000, priceFormatted: { bn: '+ ৳ ৪,০০০', en: '+ ৳ 4,000' } },
        { id: 'ui-screens', name: { bn: 'অতিরিক্ত ৩টি কাস্টম স্ক্রিন ডিজাইন', en: 'Extra 3 Custom UI Screens' }, price: 4000, priceFormatted: { bn: '+ ৳ ৪,০০০', en: '+ ৳ 4,000' } },
        { id: 'ui-dark', name: { bn: 'ডার্ক মোড সম্পূর্ণ কালার ভ্যারিয়েন্ট', en: 'Complete Dark Mode Theme Architecture' }, price: 3000, priceFormatted: { bn: '+ ৳ ৩,০০০', en: '+ ৳ 3,000' } },
        { id: 'ui-fast', name: { bn: '২৪ ঘণ্টায় ফার্স্ট ড্রাফট ডেলিভারি', en: '24-Hour Express First Draft' }, price: 3000, priceFormatted: { bn: '+ ৳ ৩,০০০', en: '+ ৳ 3,000' } }
      ]
    },
    {
      id: 'ecommerce',
      title: {
        bn: 'ই-কমার্স সলিউশনস',
        en: 'E-commerce Solutions'
      },
      subtitle: {
        bn: 'বিকাশ/নগদ পেমেন্ট ও কুরিয়ার অটোমেশনসহ হাই-কনভার্শন অনলাইন স্টোর',
        en: 'Full-featured online stores, payment gateways & courier auto-sync'
      },
      icon: <FaShopify className="w-5 h-5" />,
      tiers: [
        {
          id: 'basic',
          name: { bn: 'বেসিক অনলাইন শপ', en: 'Basic Storefront' },
          badge: { bn: '৩০,০০০ রেট', en: '30K Rate' },
          price: 30000,
          priceFormatted: { bn: '৳ ৩০,০০০', en: '৳ 30,000' },
          billingPeriod: { bn: '/স্টোর', en: '/store' },
          description: {
            bn: '৫০টি পর্যন্ত প্রোডাক্টের জন্য ১-ক্লিক ফাস্ট মোবাইল চেকআউট স্টোর।',
            en: 'Up to 50 products storefront with 1-click mobile checkout & local payments.'
          },
          features: [
            { bn: '৫০টি পর্যন্ত প্রোডাক্ট ক্যাটালগ সেটআপ', en: 'Up to 50 Products Catalog Setup' },
            { bn: 'বিকাশ ও নগদ পেমেন্ট গেটওয়ে কনফিগারেশন', en: 'bKash & Nagad Payment Setup' },
            { bn: '১-ক্লিক ফাস্ট মোবাইল চেকআউট ফানেল', en: '1-Click Fast Mobile Checkout Funnel' },
            { bn: 'সহজ অর্ডার ও ইনভেন্টরি ম্যানেজমেন্ট ড্যাশবোর্ড', en: 'Order & Inventory Admin Dashboard' },
            { bn: '১ মাস ফ্রি টেকনিক্যাল মেইনটেন্যান্স ও সাপোর্ট', en: '1 Month Free Technical Support & Maintenance' }
          ]
        },
        {
          id: 'standard',
          name: { bn: 'স্ট্যান্ডার্ড অটোমেটেড স্টোর (জনপ্রিয়)', en: 'Standard Automated Store (Popular)' },
          badge: { bn: 'সবচেয়ে জনপ্রিয়', en: 'Most Popular' },
          isPopular: true,
          price: 60000,
          priceFormatted: { bn: '৳ ৬০,০০০', en: '৳ 60,000' },
          billingPeriod: { bn: '/স্টোর', en: '/store' },
          description: {
            bn: 'আনলিমিটেড প্রোডাক্ট, অটোমেটেড পেমেন্ট এবং Steadfast/Pathao কুরিয়ার অটো-সিঙ্ক।',
            en: 'Unlimited products, automated bKash/Card IPN & Steadfast/Pathao courier sync.'
          },
          features: [
            { bn: 'আনলিমিটেড প্রোডাক্ট ও ক্যাটাগরি আর্কিটেকচার', en: 'Unlimited Products & Category Architecture' },
            { bn: 'অটোমেটেড IPN গেটওয়ে (Cards/bKash/Nagad)', en: 'Automated IPN Gateways (Cards/bKash/Nagad)' },
            { bn: 'Steadfast ও Pathao কুরিয়ার API অটো সিঙ্ক', en: 'Steadfast & Pathao Courier Auto-Sync API' },
            { bn: 'এসএমএস ও হোয়াটসঅ্যাপ অর্ডার নোটিফিকেশন', en: 'Automated Customer SMS & WhatsApp Alerts' },
            { bn: 'ডায়নামিক ডিসকাউন্ট কুপন ও ফ্ল্যাশ সেল সিস্টেম', en: 'Dynamic Discount Coupons & Flash Sale Engine' }
          ]
        },
        {
          id: 'premium',
          name: { bn: 'প্রিমিয়াম হেডলেস / মাল্টি-ভেন্ডর', en: 'Premium Headless / Marketplace' },
          badge: { bn: 'সুপারফাস্ট ০.৩s লোড', en: 'Superfast 0.3s Load' },
          price: 120000,
          priceFormatted: { bn: '৳ ১,২০,০০০', en: '৳ 1,20,000' },
          billingPeriod: { bn: '/স্টোর', en: '/store' },
          description: {
            bn: 'হেডলেস Next.js আল্ট্রাফাস্ট আর্কিটেকচার এবং রিটেইল শপ POS ইনভেন্টরি সিঙ্ক।',
            en: 'Next.js headless store (0.3s loads) with physical POS inventory sync.'
          },
          features: [
            { bn: 'হেডলেস Next.js আল্ট্রাফাস্ট আর্কিটেকচার (০.৩s লোড)', en: 'Headless Next.js Architecture (0.3s Loads)' },
            { bn: 'রিটেইল শপ POS ইনভেন্টরি রিয়েল-টাইম সিঙ্ক', en: 'Physical Retail POS Inventory Real-Time Sync' },
            { bn: 'মাল্টি-কারেন্সি, গ্লোবাল শিপিং ও আন্তর্জাতিক গেটওয়ে', en: 'Multi-Currency, Global Logistics & Stripe' },
            { bn: 'হাই-কনভার্শন CRO ফানেল ও কাস্টম চেকআউট', en: 'Advanced Conversion Rate Optimization (CRO)' },
            { bn: 'ডেডিকেটেড ফুলস্ট্যাক লিড ও ৩ মাস প্রায়োরিটি SLA', en: 'Dedicated Fullstack Lead & 3 Months SLA' }
          ]
        }
      ],
      addons: [
        { id: 'ecom-courier', name: { bn: 'Steadfast / Pathao কুরিয়ার API অটো সিঙ্ক', en: 'Steadfast & Pathao Courier Auto-Sync' }, price: 4000, priceFormatted: { bn: '+ ৳ ৪,০০০', en: '+ ৳ 4,000' } },
        { id: 'ecom-sms', name: { bn: 'স্বয়ংক্রিয় SMS ও WhatsApp অর্ডার অ্যালার্ট', en: 'Automated SMS & WhatsApp Order Alerts' }, price: 3000, priceFormatted: { bn: '+ ৳ ৩,০০০', en: '+ ৳ 3,000' } },
        { id: 'ecom-products', name: { bn: '১০০টি প্রোডাক্ট আপলোড ও ইমেজ অপ্টিমাইজ', en: '100 Products Upload & Image Optimization' }, price: 4000, priceFormatted: { bn: '+ ৳ ৪,০০০', en: '+ ৳ 4,000' } },
        { id: 'ecom-capi', name: { bn: 'ফেসবুক পিক্সেল ও সার্ভার-সাইড CAPI সেটআপ', en: 'Facebook Pixel & Server-Side CAPI Setup' }, price: 3500, priceFormatted: { bn: '+ ৳ ৩,৫০০', en: '+ ৳ 3,500' } }
      ]
    }
  ], []);

  // Sync category with URL or custom event
  useEffect(() => {
    const handleCategorySync = () => {
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const cat = params.get('category') || params.get('service');
        if (cat) {
          const match = serviceCategories.find(c => c.id === cat);
          if (match) {
            setActiveMainCat(cat);
            setSelectedTierId('basic');
            setSelectedAddons([]);
            if (match.subcategories && match.subcategories.length > 0) {
              setActiveSubCat(match.subcategories[0].id);
            }
            return;
          }
        }
      }
      if (initialCategory) {
        setActiveMainCat(initialCategory);
        if (initialCategory === 'video-production') {
          setActiveSubCat('model-video');
        } else if (initialCategory === 'web-development') {
          setActiveSubCat('wp-wix');
        }
      }
    };

    handleCategorySync();
    window.addEventListener('popstate', handleCategorySync);
    window.addEventListener('categorychange', handleCategorySync);
    return () => {
      window.removeEventListener('popstate', handleCategorySync);
      window.removeEventListener('categorychange', handleCategorySync);
    };
  }, [initialCategory, serviceCategories]);

  // Active Category Data
  const currentMainCat = useMemo(() => {
    return serviceCategories.find(c => c.id === activeMainCat) || serviceCategories[0];
  }, [serviceCategories, activeMainCat]);

  // Active Subcategory if video-production
  const currentSubCat = useMemo(() => {
    if (currentMainCat.subcategories) {
      return currentMainCat.subcategories.find(s => s.id === activeSubCat) || currentMainCat.subcategories[0];
    }
    return null;
  }, [currentMainCat, activeSubCat]);

  // Current Tiers and Addons
  const activeTiers = useMemo(() => {
    if (currentSubCat) return currentSubCat.tiers;
    return currentMainCat.tiers || [];
  }, [currentMainCat, currentSubCat]);

  const activeAddons = useMemo(() => {
    if (currentSubCat) return currentSubCat.addons;
    return currentMainCat.addons || [];
  }, [currentMainCat, currentSubCat]);

  // Active selected tier
  const activeTier = useMemo(() => {
    const found = activeTiers.find(t => t.id === selectedTierId);
    if (found) return found;
    return activeTiers[0] || null;
  }, [activeTiers, selectedTierId]);

  // Toggle addon checkbox
  const handleToggleAddon = (addonId: string) => {
    setSelectedAddons(prev => 
      prev.includes(addonId) 
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    );
  };

  // Calculate total price
  const calculateTotal = useMemo(() => {
    const basePrice = activeTier ? activeTier.price : 0;
    const addonsTotal = selectedAddons.reduce((sum, addonId) => {
      const addon = activeAddons.find(a => a.id === addonId);
      return sum + (addon ? addon.price : 0);
    }, 0);
    return {
      basePrice,
      addonsTotal,
      grandTotal: basePrice + addonsTotal
    };
  }, [activeTier, selectedAddons, activeAddons]);

  // Format currency
  const formatBDT = (amount: number) => {
    if (language === 'bn') {
      const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
      return '৳ ' + amount.toLocaleString('en-US').replace(/[0-9]/g, w => bnDigits[+w]);
    }
    return '৳ ' + amount.toLocaleString('en-US');
  };

  // Build WhatsApp URL with pre-filled message
  const whatsappUrl = useMemo(() => {
    const serviceTitle = currentSubCat 
      ? `${currentMainCat.title[language === 'bn' ? 'bn' : 'en']} (${currentSubCat.name[language === 'bn' ? 'bn' : 'en']})`
      : currentMainCat.title[language === 'bn' ? 'bn' : 'en'];
    
    const tierName = activeTier ? activeTier.name[language === 'bn' ? 'bn' : 'en'] : 'Custom';
    
    const chosenAddonsList = selectedAddons
      .map(id => {
        const a = activeAddons.find(item => item.id === id);
        return a ? `• ${a.name[language === 'bn' ? 'bn' : 'en']} (${formatBDT(a.price)})` : '';
      })
      .filter(Boolean)
      .join('\n');

    let text = language === 'bn'
      ? `আসসালামু আলাইকুম সাওদা ডিজিটাল। আমি "${serviceTitle}" সার্ভিসের "${tierName}" প্যাকেজে আগ্রহী।\n\n`
      : `Hello Sawda Digital. I am interested in "${serviceTitle}" - "${tierName}".\n\n`;

    text += language === 'bn'
      ? `মূল প্যাকেজ মূল্য: ${formatBDT(calculateTotal.basePrice)}\n`
      : `Base Package: ${formatBDT(calculateTotal.basePrice)}\n`;

    if (selectedAddons.length > 0) {
      text += language === 'bn'
        ? `নির্বাচিত কাস্টম অ্যাড-অন:\n${chosenAddonsList}\nঅ্যাড-অন মোট: ${formatBDT(calculateTotal.addonsTotal)}\n\n`
        : `Selected Add-ons:\n${chosenAddonsList}\nAdd-ons Total: ${formatBDT(calculateTotal.addonsTotal)}\n\n`;
    }

    text += language === 'bn'
      ? `সর্বমোট প্রাক্কলিত বাজেট: ${formatBDT(calculateTotal.grandTotal)}\n\nদয়া করে প্রজেক্টটি শুরুর বিষয়ে বিস্তারিত জানাবেন।`
      : `Total Estimated Budget: ${formatBDT(calculateTotal.grandTotal)}\n\nPlease let me know how we can proceed.`;

    return `https://wa.me/8801700000000?text=${encodeURIComponent(text)}`;
  }, [currentMainCat, currentSubCat, activeTier, selectedAddons, activeAddons, calculateTotal, language]);

  // Direct WhatsApp URL for a specific tier
  const getTierWhatsAppUrl = (tier: TierData) => {
    const serviceTitle = currentSubCat 
      ? `${currentMainCat.title[language === 'bn' ? 'bn' : 'en']} (${currentSubCat.name[language === 'bn' ? 'bn' : 'en']})`
      : currentMainCat.title[language === 'bn' ? 'bn' : 'en'];
    
    const tierName = tier.name[language === 'bn' ? 'bn' : 'en'];
    const priceText = formatBDT(tier.price) + (tier.billingPeriod ? ` ${tier.billingPeriod[language === 'bn' ? 'bn' : 'en']}` : '');

    const text = language === 'bn'
      ? `আসসালামু আলাইকুম সাওদা ডিজিটাল। আমি "${serviceTitle}" সার্ভিসের "${tierName}" (${priceText}) প্যাকেজটি নিতে আগ্রহী। দয়া করে প্রজেক্ট শুরুর বিষয়ে জানাবেন।`
      : `Hello Sawda Digital. I am interested in the "${tierName}" (${priceText}) package for "${serviceTitle}". Please let me know how we can proceed.`;

    return `https://wa.me/8801700000000?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="service-packages" className={`${hideHeader ? 'pt-2 pb-16 md:pb-20' : 'py-16 md:py-20'} bg-[#FAFAFA] dark:bg-[#0f0f11] relative overflow-hidden transition-colors duration-300`}>
      {/* Background Subtle Gradient Accents */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#9D224D]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#FCE7F3] dark:bg-[#262626] border border-[#334155]/30 dark:border-white/10 text-[#262626] dark:text-white text-xs font-black tracking-widest mb-4 uppercase shadow-sm">
              {language === 'bn' ? 'স্বচ্ছ ও সাশ্রয়ী প্যাকেজ' : 'TRANSPARENT SERVICE PACKAGES'}
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f172a] dark:text-white tracking-tight mb-4">
              {language === 'bn' ? 'আপনার জন্য পারফেক্ট সার্ভিস প্যাকেজ বেছে নিন' : 'Choose Your Tailored Service Package'}
            </h2>
            
            <p className="text-slate-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
              {language === 'bn' 
                ? 'বেসিক, স্ট্যান্ডার্ড ও প্রিমিয়াম অপশন থেকে নির্বাচন করুন এবং প্রয়োজনে কাস্টম চেকবক্স দিয়ে নিজের মতো করে অ্যাড-অন যুক্ত করুন।'
                : 'Select from our verified tiers or customize deliverables with modular add-ons to fit your exact business scope.'}
            </p>
          </div>
        )}

        {/* 1. Pricing Dropdown Selector Hub */}
        {!hideCategories && (
          <div className={`relative z-30 ${currentMainCat.subcategories && currentMainCat.subcategories.length > 0 ? 'max-w-3xl' : 'max-w-xl'} mx-auto mb-10 px-4`}>
            <div className="text-center mb-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FCE7F3] dark:bg-white/10 text-[#9D224D] dark:text-[#f472b6] text-[11px] font-extrabold uppercase tracking-widest border border-[#9D224D]/20 dark:border-white/10 shadow-xs">
                <span>⚡</span>
                {currentMainCat.subcategories && currentMainCat.subcategories.length > 0
                  ? (language === 'bn' ? 'সার্ভিস ও সাব-ক্যাটাগরি ড্রপডাউন' : 'SELECT SERVICE & SUB-CATEGORY')
                  : (language === 'bn' ? 'সার্ভিস ড্রপডাউন নির্বাচন করুন' : 'SELECT SERVICE CATEGORY')}
              </span>
            </div>

            <div className={`grid ${currentMainCat.subcategories && currentMainCat.subcategories.length > 0 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'} gap-3 sm:gap-4 items-center`}>
              
              {/* Dropdown 1: Main Service Category */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => {
                    setIsDropdownOpen(prev => !prev);
                    setIsSubDropdownOpen(false);
                  }}
                  aria-expanded={isDropdownOpen}
                  className="w-full flex items-center justify-between gap-3 p-3.5 sm:p-4 bg-white dark:bg-[#161618] border-2 border-slate-200 dark:border-white/10 hover:border-[#9D224D] dark:hover:border-[#9D224D] rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-11 h-11 rounded-2xl bg-[#9D224D]/10 text-[#9D224D] flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-105 group-hover:bg-[#9D224D] group-hover:text-white transition-all duration-300">
                      {currentMainCat.icon}
                    </div>
                    <div className="text-left truncate">
                      <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-gray-500">
                        {language === 'bn' ? 'মূল সার্ভিস' : 'Main Service'}
                      </div>
                      <div className="text-sm sm:text-base font-black text-slate-900 dark:text-white truncate">
                        {currentMainCat.title[language === 'bn' ? 'bn' : 'en']}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <div className={`w-7 h-7 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-gray-400 group-hover:text-[#9D224D] transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                      <FaChevronDown className="w-3 h-3" />
                    </div>
                  </div>
                </button>

                {/* Dropdown Menu Modal / List */}
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 right-0 mt-2 p-2 sm:p-2.5 bg-white/98 dark:bg-[#161618]/98 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl z-50 max-h-[70vh] overflow-y-auto thin-scrollbar"
                    >
                      <div className="grid grid-cols-1 gap-1.5">
                        {serviceCategories.map((cat) => {
                          const isActive = activeMainCat === cat.id;
                          const hasSub = cat.subcategories && cat.subcategories.length > 0;
                          return (
                            <div key={cat.id} className="flex flex-col">
                              <button
                                type="button"
                                onClick={() => {
                                  setActiveMainCat(cat.id);
                                  setSelectedTierId('basic');
                                  setSelectedAddons([]);
                                  if (hasSub && cat.subcategories) {
                                    setActiveSubCat(cat.subcategories[0].id);
                                  }
                                  if (!hasSub) {
                                    setIsDropdownOpen(false);
                                  }
                                }}
                                className={`w-full flex items-center justify-between p-3 rounded-xl sm:rounded-2xl transition-all duration-200 text-left cursor-pointer ${
                                  isActive
                                    ? 'bg-[#9D224D]/10 dark:bg-[#9D224D]/25 border border-[#9D224D]/30'
                                    : 'hover:bg-slate-50 dark:hover:bg-white/5 border border-transparent'
                                }`}
                              >
                                <div className="flex items-center gap-3 min-w-0">
                                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0 transition-colors ${
                                    isActive
                                      ? 'bg-[#9D224D] text-white'
                                      : 'bg-slate-100 dark:bg-white/5 text-[#9D224D]'
                                  }`}>
                                    {cat.icon}
                                  </div>
                                  <div className="truncate">
                                    <div className={`text-sm font-bold truncate ${isActive ? 'text-[#9D224D] dark:text-white' : 'text-slate-800 dark:text-gray-200'}`}>
                                      {cat.title[language === 'bn' ? 'bn' : 'en']}
                                    </div>
                                    <div className="text-[11px] text-slate-500 dark:text-gray-400 truncate">
                                      {cat.subtitle[language === 'bn' ? 'bn' : 'en']}
                                    </div>
                                  </div>
                                </div>

                                <div className="flex items-center gap-2 flex-shrink-0">
                                  {hasSub && (
                                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#9D224D]/10 dark:bg-[#9D224D]/20 text-[#9D224D] dark:text-[#f472b6] font-bold">
                                      {cat.subcategories?.length} {language === 'bn' ? 'টি অপশন' : 'Options'}
                                    </span>
                                  )}
                                  {isActive && (
                                    <div className="w-5 h-5 rounded-full bg-[#9D224D] text-white flex items-center justify-center flex-shrink-0 text-xs">
                                      <FaCheck className="w-2.5 h-2.5" />
                                    </div>
                                  )}
                                </div>
                              </button>

                              {/* Nested Subcategories inside main dropdown */}
                              {hasSub && isActive && (
                                <div className="ml-6 pl-3 my-1.5 border-l-2 border-[#9D224D]/30 flex flex-col gap-1">
                                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500 py-1">
                                    {language === 'bn' ? 'সাব-সার্ভিস বেছে নিন:' : 'Choose Sub-Service:'}
                                  </span>
                                  {cat.subcategories?.map((sub) => {
                                    const isSubActive = activeSubCat === sub.id;
                                    return (
                                      <button
                                        key={sub.id}
                                        type="button"
                                        onClick={() => {
                                          setActiveMainCat(cat.id);
                                          setActiveSubCat(sub.id);
                                          setSelectedTierId('basic');
                                          setSelectedAddons([]);
                                          setIsDropdownOpen(false);
                                        }}
                                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                                          isSubActive
                                            ? 'bg-[#9D224D] text-white shadow-xs'
                                            : 'text-slate-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-white/5'
                                        }`}
                                      >
                                        <span>{sub.name[language === 'bn' ? 'bn' : 'en']}</span>
                                        {isSubActive && <FaCheck className="w-2.5 h-2.5" />}
                                      </button>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Dropdown 2: Subcategory Dropdown (Right inside the pricing dropdown selector) */}
              {currentMainCat.subcategories && currentMainCat.subcategories.length > 0 && (
                <div className="relative" ref={subDropdownRef}>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubDropdownOpen(prev => !prev);
                      setIsDropdownOpen(false);
                    }}
                    aria-expanded={isSubDropdownOpen}
                    className="w-full flex items-center justify-between gap-3 p-3.5 sm:p-4 bg-white dark:bg-[#161618] border-2 border-slate-200 dark:border-white/10 hover:border-[#9D224D] dark:hover:border-[#9D224D] rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-11 h-11 rounded-2xl bg-[#9D224D]/10 text-[#9D224D] flex items-center justify-center text-base flex-shrink-0 group-hover:scale-105 group-hover:bg-[#9D224D] group-hover:text-white transition-all duration-300">
                        <FaCheck className="w-4 h-4" />
                      </div>
                      <div className="text-left truncate">
                        <div className="text-[10px] uppercase font-bold tracking-wider text-[#9D224D] dark:text-rose-400">
                          {language === 'bn' ? 'সাব-ক্যাটাগরি' : 'Sub-Category'}
                        </div>
                        <div className="text-sm sm:text-base font-black text-slate-900 dark:text-white truncate">
                          {currentSubCat?.name[language === 'bn' ? 'bn' : 'en']}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <div className={`w-7 h-7 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-gray-400 group-hover:text-[#9D224D] transition-transform duration-300 ${isSubDropdownOpen ? 'rotate-180' : ''}`}>
                        <FaChevronDown className="w-3 h-3" />
                      </div>
                    </div>
                  </button>

                  {/* Subcategory Dropdown Menu */}
                  <AnimatePresence>
                    {isSubDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 right-0 mt-2 p-2 bg-white/98 dark:bg-[#161618]/98 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl z-50 max-h-[60vh] overflow-y-auto thin-scrollbar"
                      >
                        <div className="grid grid-cols-1 gap-1">
                          {currentMainCat.subcategories.map((sub) => {
                            const isSubActive = activeSubCat === sub.id;
                            return (
                              <button
                                key={sub.id}
                                type="button"
                                onClick={() => {
                                  setActiveSubCat(sub.id);
                                  setSelectedTierId('basic');
                                  setSelectedAddons([]);
                                  setIsSubDropdownOpen(false);
                                }}
                                className={`w-full flex items-center justify-between p-3 rounded-xl sm:rounded-2xl transition-all duration-200 text-left cursor-pointer ${
                                  isSubActive
                                    ? 'bg-[#9D224D]/10 dark:bg-[#9D224D]/25 border border-[#9D224D]/30 text-[#9D224D] dark:text-white font-bold'
                                    : 'hover:bg-slate-50 dark:hover:bg-white/5 border border-transparent text-slate-700 dark:text-gray-300'
                                }`}
                              >
                                <span className="text-sm font-semibold">{sub.name[language === 'bn' ? 'bn' : 'en']}</span>
                                {isSubActive && (
                                  <div className="w-5 h-5 rounded-full bg-[#9D224D] text-white flex items-center justify-center text-xs flex-shrink-0">
                                    <FaCheck className="w-2.5 h-2.5" />
                                  </div>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

            </div>
          </div>
        )}

        {/* Dedicated Service Page Subcategory Dropdown (when hideCategories is true, e.g. /services/video-production) */}
        {hideCategories && currentMainCat.subcategories && currentMainCat.subcategories.length > 0 && (
          <div className="relative z-20 max-w-md mx-auto mb-10 px-4" ref={subDropdownRef}>
            <div className="text-center mb-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCE7F3] dark:bg-white/10 text-[#9D224D] dark:text-[#f472b6] text-[11px] font-extrabold uppercase tracking-widest border border-[#9D224D]/20 dark:border-white/10 shadow-xs">
                <span>⚡</span>
                {language === 'bn' ? 'প্যাকেজ টাইপ নির্বাচন করুন' : 'SELECT PACKAGE TYPE'}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsSubDropdownOpen(prev => !prev)}
              aria-expanded={isSubDropdownOpen}
              className="w-full flex items-center justify-between gap-3 p-3.5 sm:p-4 bg-white dark:bg-[#161618] border-2 border-slate-200 dark:border-white/10 hover:border-[#9D224D] dark:hover:border-[#9D224D] rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#9D224D]/10 text-[#9D224D] flex items-center justify-center text-base flex-shrink-0 group-hover:scale-105 group-hover:bg-[#9D224D] group-hover:text-white transition-all duration-300">
                  <FaCheck className="w-4 h-4" />
                </div>
                <div className="text-left truncate">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-[#9D224D] dark:text-rose-400">
                    {language === 'bn' ? 'সাব-ক্যাটাগরি' : 'Sub-Category'}
                  </div>
                  <div className="text-sm sm:text-base font-black text-slate-900 dark:text-white truncate">
                    {currentSubCat?.name[language === 'bn' ? 'bn' : 'en']}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 flex-shrink-0">
                <div className={`w-7 h-7 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-gray-400 group-hover:text-[#9D224D] transition-transform duration-300 ${isSubDropdownOpen ? 'rotate-180' : ''}`}>
                  <FaChevronDown className="w-3 h-3" />
                </div>
              </div>
            </button>

            {/* Subcategory Dropdown Menu */}
            <AnimatePresence>
              {isSubDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-4 right-4 mt-2 p-2 bg-white/98 dark:bg-[#161618]/98 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl z-40 max-h-[60vh] overflow-y-auto thin-scrollbar"
                >
                  <div className="grid grid-cols-1 gap-1">
                    {currentMainCat.subcategories.map((sub) => {
                      const isSubActive = activeSubCat === sub.id;
                      return (
                        <button
                          key={sub.id}
                          type="button"
                          onClick={() => {
                            setActiveSubCat(sub.id);
                            setSelectedTierId('basic');
                            setSelectedAddons([]);
                            setIsSubDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between p-3 rounded-xl sm:rounded-2xl transition-all duration-200 text-left cursor-pointer ${
                            isSubActive
                              ? 'bg-[#9D224D]/10 dark:bg-[#9D224D]/25 border border-[#9D224D]/30 text-[#9D224D] dark:text-white font-bold'
                              : 'hover:bg-slate-50 dark:hover:bg-white/5 border border-transparent text-slate-700 dark:text-gray-300'
                          }`}
                        >
                          <span className="text-sm font-semibold">{sub.name[language === 'bn' ? 'bn' : 'en']}</span>
                          {isSubActive && (
                            <div className="w-5 h-5 rounded-full bg-[#9D224D] text-white flex items-center justify-center text-xs flex-shrink-0">
                              <FaCheck className="w-2.5 h-2.5" />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* 3. Active Service Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 pt-2">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#FCE7F3] dark:bg-[#262626] border border-[#334155]/30 dark:border-white/10 text-[#262626] dark:text-white text-xs font-black tracking-widest mb-4 uppercase shadow-xs">
            {language === 'bn' ? 'সার্ভিস প্যাকেজ ও রেট' : 'SERVICE PACKAGES & RATES'}
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f172a] dark:text-white tracking-tight mb-3">
            {currentSubCat 
              ? currentSubCat.name[language === 'bn' ? 'bn' : 'en']
              : currentMainCat.title[language === 'bn' ? 'bn' : 'en']}
          </h3>
          <p className="text-sm sm:text-base text-slate-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {currentMainCat.subtitle[language === 'bn' ? 'bn' : 'en']}
          </p>
        </div>

        {/* 4. Side-by-Side Package Cards Grid (Exact same card grid style as the service pages) */}
        <div className={`grid grid-cols-1 md:grid-cols-2 ${activeTiers.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-8 mb-20 items-stretch`}>
          {activeTiers.map((plan, index) => {
            const isPopular = plan.isPopular;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.07 }}
                className={`rounded-[2.5rem] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative border ${
                  isPopular
                    ? 'bg-white dark:bg-[#1a1a1a] border-[#9D224D] shadow-2xl scale-[1.02] z-10'
                    : 'bg-white dark:bg-[#1a1a1a] border-[#FCE7F3] dark:border-white/10 shadow-md hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {isPopular && (
                  <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#9D224D] text-white text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg whitespace-nowrap">
                    {plan.badge ? plan.badge[language === 'bn' ? 'bn' : 'en'] : (language === 'bn' ? 'সবচেয়ে জনপ্রিয়' : 'Most Popular')}
                  </span>
                )}

                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#111827] dark:text-white mb-2">
                    {plan.name[language === 'bn' ? 'bn' : 'en']}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-5 min-h-[34px] leading-relaxed">
                    {plan.description[language === 'bn' ? 'bn' : 'en']}
                  </p>
                  
                  <div className="text-3xl sm:text-4xl font-black text-[#9D224D] mb-5 flex items-baseline gap-1">
                    <span>{formatBDT(plan.price)}</span>
                    {plan.billingPeriod && (
                      <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                        {plan.billingPeriod[language === 'bn' ? 'bn' : 'en']}
                      </span>
                    )}
                  </div>

                  <div className="space-y-3 pt-5 border-t border-gray-100 dark:border-white/10 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-2.5 text-xs text-gray-700 dark:text-gray-300">
                        <FaCheck className="w-3.5 h-3.5 text-[#9D224D] shrink-0 mt-0.5" />
                        <span>{feature[language === 'bn' ? 'bn' : 'en']}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <a
                    href={getTierWhatsAppUrl(plan)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-full font-bold text-xs flex items-center justify-center gap-2 transition-all duration-300 shadow-md ${
                      isPopular
                        ? 'bg-[#9D224D] text-white hover:bg-[#7A173A]'
                        : 'bg-[#111827] dark:bg-white text-white dark:text-[#111827] hover:bg-[#9D224D] dark:hover:bg-[#9D224D] dark:hover:text-white'
                    }`}
                  >
                    <FaWhatsapp className="text-base" />
                    <span>{language === 'bn' ? 'শুরু করুন / হোয়াটসঅ্যাপ' : 'Get Started / WhatsApp'}</span>
                    <FaArrowRight className="w-3 h-3" />
                  </a>
                  
                  {activeAddons && activeAddons.length > 0 && (
                    <button
                      onClick={() => {
                        setSelectedTierId(plan.id);
                        const addonSec = document.getElementById('custom-addons-section');
                        if (addonSec) addonSec.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full py-1.5 rounded-full text-[11px] font-semibold text-slate-500 dark:text-gray-400 hover:text-[#9D224D] dark:hover:text-rose-400 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>{language === 'bn' ? '+ কাস্টম অ্যাড-অন যোগ করুন' : '+ Customize with Add-ons'}</span>
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 5. Custom Checkboxes Section (At the Bottom with dynamic live total) */}
        {activeAddons && activeAddons.length > 0 && (
          <div id="custom-addons-section" className="bg-white dark:bg-[#161618] rounded-[2.5rem] border border-slate-200/80 dark:border-white/10 shadow-xl p-6 sm:p-10 mb-12 transition-all">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-orange-500/10 text-orange-600 dark:text-orange-400 mb-2 border border-orange-500/20">
                  {language === 'bn' ? 'কাস্টম অপশন' : 'CUSTOM MODULAR ADD-ONS'}
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-[#0f172a] dark:text-white">
                  {language === 'bn' 
                    ? 'চেকবক্স দিয়ে কাস্টম অ্যাড-অন যোগ করুন (ঐচ্ছিক)' 
                    : 'Customize Your Deliverables with Add-on Checkboxes'}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-400 mt-1">
                  {language === 'bn'
                    ? 'যেকোনো প্যাকেজের সাথে প্রয়োজনমতো অতিরিক্ত সেবা বেছে নিন, লাইভ মোট বাজেট স্বয়ংক্রিয়ভাবে আপডেট হবে।'
                    : 'Check any custom extras to dynamically calculate your live estimate.'}
                </p>
              </div>

              {/* Package selector for addon calculation */}
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-white/5 p-2 rounded-2xl border border-slate-200/70 dark:border-white/10">
                <span className="text-xs font-bold text-slate-600 dark:text-gray-300 px-2 whitespace-nowrap">
                  {language === 'bn' ? 'নির্বাচিত প্যাকেজ:' : 'Base Package:'}
                </span>
                <select
                  value={selectedTierId}
                  onChange={(e) => setSelectedTierId(e.target.value)}
                  className="bg-white dark:bg-[#202024] text-xs font-bold text-slate-800 dark:text-white px-3 py-1.5 rounded-xl border border-slate-200 dark:border-white/10 focus:outline-none cursor-pointer"
                >
                  {activeTiers.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name[language === 'bn' ? 'bn' : 'en']} ({formatBDT(t.price)})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Checkbox Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {activeAddons.map((addon) => {
                const isChecked = selectedAddons.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => handleToggleAddon(addon.id)}
                    className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start gap-3.5 select-none ${
                      isChecked
                        ? 'bg-[#9D224D]/5 dark:bg-[#9D224D]/15 border-[#9D224D] shadow-sm'
                        : 'bg-slate-50 dark:bg-[#1a1a1e] border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                    }`}
                  >
                    <div className="pt-0.5">
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                        isChecked
                          ? 'bg-[#9D224D] border-[#9D224D] text-white'
                          : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-[#121214]'
                      }`}>
                        {isChecked && <FaCheck className="w-3 h-3" />}
                      </div>
                    </div>

                    <div className="flex-1">
                      <p className="text-xs sm:text-sm font-bold text-[#0f172a] dark:text-white mb-1 leading-snug">
                        {addon.name[language === 'bn' ? 'bn' : 'en']}
                      </p>
                      <span className="inline-block text-xs font-extrabold text-[#9D224D] dark:text-rose-400">
                        {formatBDT(addon.price)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Summary Bar & Action CTAs */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-[#1e293b] to-slate-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#9D224D]/30 border border-[#9D224D]/50 flex items-center justify-center text-white text-2xl flex-shrink-0">
                  <FaStar />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-1">
                    {language === 'bn' ? 'মোট প্রাক্কলিত বাজেট' : 'TOTAL ESTIMATED COST'}
                  </p>
                  <div className="flex items-baseline gap-2 justify-center sm:justify-start">
                    <span className="text-3xl sm:text-4xl font-black text-white">
                      {formatBDT(calculateTotal.grandTotal)}
                    </span>
                    {selectedAddons.length > 0 && (
                      <span className="text-xs font-semibold text-emerald-400">
                        ({selectedAddons.length} {language === 'bn' ? 'অ্যাড-অন যুক্ত' : 'addons added'})
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-black text-sm transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] cursor-pointer"
                >
                  <FaWhatsapp className="text-lg" />
                  <span>{language === 'bn' ? 'হোয়াটসঅ্যাপে বুক করুন' : 'Book via WhatsApp'}</span>
                </a>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all cursor-pointer"
                >
                  <FaPhoneVolume className="text-xs text-rose-300" />
                  <span>{language === 'bn' ? 'কাস্টম কোটেশন চান?' : 'Get Custom Quote'}</span>
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
