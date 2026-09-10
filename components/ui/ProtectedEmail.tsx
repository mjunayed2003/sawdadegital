"use client";

import React, { useState, useEffect } from "react";

interface ProtectedEmailProps {
  user?: string;
  domain?: string;
  className?: string;
  accentAt?: boolean;
}

export default function ProtectedEmail({
  user = "sawdadigital",
  domain = "gmail.com",
  className = "",
  accentAt = false,
}: ProtectedEmailProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handler for direct click even before hydration if needed
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${user}@${domain}`;
  };

  if (!isClient) {
    // SSR output: Scraper & SEOptimer crawler proof representation (no raw @ or mailto: in static HTML)
    return (
      <span
        onClick={handleClick}
        className={`cursor-pointer inline-flex items-center ${className}`}
        title="Click to send email"
        role="button"
        tabIndex={0}
      >
        <span>{user}</span>
        <span className={accentAt ? "text-[#9D224D]" : "text-gray-400"}> [at] </span>
        <span>{domain}</span>
      </span>
    );
  }

  // Client hydrated: Natural interactive mailto link
  return (
    <a
      href={`mailto:${user}@${domain}`}
      className={`inline-flex items-center ${className}`}
      aria-label={`Send email to ${user}@${domain}`}
    >
      <span>{user}</span>
      <span className={accentAt ? "text-[#9D224D]" : ""}>@</span>
      <span>{domain}</span>
    </a>
  );
}
