"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-[104px] h-11 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse"></div>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center justify-between w-[104px] h-11 px-1 bg-[#DBEAFE] dark:bg-[#1a1a1a] border border-[#1E3A8A]/30 dark:border-white/10 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
      aria-label="Toggle Dark Mode"
    >
      <span className="sr-only">Toggle theme</span>
      
      {/* Sliding toggle thumb */}
      <div
        className={`absolute top-1 left-1 w-9 h-9 bg-white dark:bg-[#262626] shadow-sm rounded-full transition-transform duration-300 ease-in-out flex items-center justify-center ${
          isDark ? "translate-x-[56px]" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <FaMoon className="w-4 h-4 text-white" />
        ) : (
          <FaSun className="w-4 h-4 text-[#D4AF37]" />
        )}
      </div>

      {/* Text labels behind the thumb */}
      <span className={`text-xs font-bold w-1/2 text-center z-0 transition-opacity duration-300 ${isDark ? "opacity-100 text-gray-400" : "opacity-0"}`}>
        Light
      </span>
      <span className={`text-xs font-bold w-1/2 text-center z-0 transition-opacity duration-300 ${isDark ? "opacity-0" : "opacity-100 text-[#262626]"}`}>
        Dark
      </span>
    </button>
  );
}
