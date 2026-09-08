"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  isFooter?: boolean;
  priority?: boolean;
}

export default function Logo({ className = "", isFooter = false, priority = false }: LogoProps) {
  return (
    <Link 
      href="/" 
      className={`group inline-flex items-center select-none flex-shrink-0 ${className}`} 
      aria-label="Sawda Digital Home"
    >
      {/* 
        The source logo image is 9000x9000 with huge whitespace around the central logo.
        This container uses overflow-hidden and exact responsive proportions to zoom in 
        and crop the whitespace via CSS, displaying the logo text crisply and centered.
        mix-blend-multiply makes white backgrounds transparent in light mode,
        while mix-blend-screen + invert + hue-rotate-180 keeps the vibrant brand color on dark backgrounds.
      */}
      <div 
        className={`relative overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02] ${
          isFooter 
            ? 'h-9 sm:h-10 w-44 sm:w-56' 
            : 'h-8 sm:h-9 md:h-10 w-40 sm:w-48 md:w-56'
        }`}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src="/sawdaDigitalLogo.png"
            alt="Sawda Digital Logo"
            width={600}
            height={600}
            priority={priority}
            className={`absolute max-w-none pointer-events-none transition-all duration-300 ${
              isFooter
                ? 'w-[230px] sm:w-[280px] h-[230px] sm:h-[280px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-screen invert hue-rotate-180 brightness-110 contrast-125'
                : 'w-[210px] sm:w-[250px] md:w-[285px] h-[210px] sm:h-[250px] md:h-[285px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-multiply dark:mix-blend-screen dark:invert dark:hue-rotate-180 dark:brightness-125'
            }`}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
    </Link>
  );
}
