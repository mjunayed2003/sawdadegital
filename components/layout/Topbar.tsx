import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FiSearch, FiBookmark, FiMessageSquare } from 'react-icons/fi';

export default function Topbar() {
  return (
    <div className="bg-[#17253b] text-gray-200 text-sm py-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left side empty for spacing or future text */}
        <div></div>

        {/* Right side items */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Search Input */}
          <div className="hidden lg:flex items-center bg-[#0f172a] rounded-full px-3 py-1.5 border border-slate-600">
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-transparent text-white text-xs outline-none border-none placeholder-gray-400 w-40"
            />
            <FiSearch className="text-gray-400 w-3.5 h-3.5" />
          </div>

          {/* Text Links */}
          <Link href="/contact" className="hidden sm:block hover:text-white transition-colors">Leave a Review</Link>
          <Link href="/services" className="hidden sm:block hover:text-white transition-colors">For Providers</Link>
          
          {/* Icons */}
          <div className="hidden sm:flex items-center gap-4 border-l border-slate-600 pl-4">
            <Link href="/projects" className="hover:text-white transition-colors" aria-label="Bookmarks">
              <FiBookmark className="w-3.5 h-3.5" />
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors" aria-label="Messages">
              <FiMessageSquare className="w-4 h-4" />
            </Link>
          </div>

          {/* Social Icons (Replaced Sign In / Join) */}
          <div className="flex items-center gap-4 sm:border-l border-slate-600 sm:pl-4">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1877f2] transition-colors" aria-label="Facebook">
              <FaFacebookF className="w-3.5 h-3.5" />
            </Link>
            <Link href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#25d366] transition-colors" aria-label="WhatsApp">
              <FaWhatsapp className="w-4 h-4" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#e4405f] transition-colors" aria-label="Instagram">
              <FaInstagram className="w-4 h-4" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1da1f2] transition-colors" aria-label="Twitter">
              <FaTwitter className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
