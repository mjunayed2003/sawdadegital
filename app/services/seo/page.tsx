import type { Metadata } from "next";
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/seo/Hero";
import Capabilities from "@/components/seo/Capabilities";
import Process from "@/components/seo/Process";
import SelectedWork from "@/components/SelectedWork";
import Pricing from "@/components/seo/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/components/LanguageContext";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "SEO & Google Marketing Agency in Bangladesh - Rank #1",
  description:
    "Dominate Google Search results with Sawda Digital. Comprehensive technical SEO audits, high-intent keyword ranking, authoritative backlinks, and high-ROI Google Ads campaigns.",
  alternates: {
    canonical: "https://sawdadigital.com/services/seo",
  },
  openGraph: {
    title: "SEO & Google Marketing Services | Sawda Digital",
    description:
      "Data-driven SEO strategies and Google Search Ads to capture high-intent leads and dominate page 1.",
    url: "https://sawdadigital.com/services/seo",
    type: "website",
  },
  twitter: {
    title: "SEO & Google Marketing | Sawda Digital",
    description:
      "Data-driven technical SEO and PPC search campaigns that scale organic traffic and conversions.",
  },
};

const seoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "SEO & Google Marketing",
      provider: {
        "@type": "Organization",
        name: "Sawda Digital",
        url: "https://sawdadigital.com",
      },
      serviceType: "Search Engine Optimization & SEM",
      description:
        "Comprehensive technical SEO, keyword strategy, high-authority backlink building, and Google Ads management.",
      areaServed: "Worldwide",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://sawdadigital.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://sawdadigital.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "SEO & Google Marketing",
          item: "https://sawdadigital.com/services/seo",
        },
      ],
    },
  ],
};

export default function SEOPage() {
  return (
    <LanguageProvider>
      <JsonLd data={seoSchema} />
      <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#111111] font-sans overflow-x-hidden text-[#262626] dark:text-white transition-colors duration-300">
        <Topbar />
        <Navbar />
        <main>
          <Hero />
          <Capabilities />
          <Process />
          <SelectedWork />
          <Pricing />
          <FAQ />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
