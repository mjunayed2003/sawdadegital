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
  title: "SEO Agency in Bangladesh | Digital Marketing & Google Page #1 Ranking",
  description:
    "Dominate Google Search with Sawda Digital, a leading SEO and digital marketing agency serving Dhaka, Rangpur, and across Bangladesh. Local SEO, technical audits, high-intent keyword ranking, and Google Ads management.",
  alternates: {
    canonical: "https://sawdadigital.com/services/seo",
  },
  openGraph: {
    title: "SEO Agency in Bangladesh | Sawda Digital",
    description:
      "Data-driven technical & local SEO strategies and Google Ads PPC campaigns to dominate page 1 search results in Dhaka, Rangpur, and nationwide.",
    url: "https://sawdadigital.com/services/seo",
    type: "website",
  },
  twitter: {
    title: "SEO Agency in Bangladesh | Sawda Digital",
    description:
      "Data-driven technical & local SEO and PPC search campaigns that scale organic traffic, leads, and revenue in Dhaka and Rangpur.",
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
        "Comprehensive technical SEO, local SEO for Dhaka and Rangpur, keyword strategy, high-authority backlink building, and Google Ads management.",
      areaServed: ["Dhaka", "Rangpur", "Bangladesh", "Worldwide"],
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
