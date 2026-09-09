import type { Metadata } from "next";
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/web-development/Hero";
import Capabilities from "@/components/web-development/Capabilities";
import Process from "@/components/web-development/Process";
import SelectedWork from "@/components/SelectedWork";
import Pricing from "@/components/web-development/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/components/LanguageContext";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Web Design & Development Agency in Bangladesh | SEO & Conversion Focused",
  description:
    "Custom high-performance web development, Next.js applications, and e-commerce websites built by Sawda Digital. Engineered with modern UI/UX, sub-second speed, and built-in technical SEO.",
  alternates: {
    canonical: "https://sawdadigital.com/services/web-development",
  },
  openGraph: {
    title: "Web Design & Development Agency in Bangladesh | Sawda Digital",
    description:
      "Modern full-stack web applications, SaaS platforms, and enterprise websites engineered for speed, SEO ranking, and conversion.",
    url: "https://sawdadigital.com/services/web-development",
    type: "website",
  },
  twitter: {
    title: "Web Design & Development | Sawda Digital",
    description:
      "Scalable web applications built with Next.js, React, and modern cloud infrastructures with built-in SEO.",
  },
};

const webDevSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Custom Web Design & Development",
      provider: {
        "@type": "Organization",
        name: "Sawda Digital",
        url: "https://sawdadigital.com",
      },
      serviceType: "Web Development",
      description:
        "End-to-end web engineering covering UI/UX prototyping, frontend Next.js architecture, robust backend APIs, and cloud hosting.",
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web Development Packages",
      },
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
          name: "Web Development",
          item: "https://sawdadigital.com/services/web-development",
        },
      ],
    },
  ],
};

export default function WebDevelopmentServicePage() {
  return (
    <LanguageProvider>
      <JsonLd data={webDevSchema} />
      <div className="min-h-screen bg-[#FAFAFA] font-sans overflow-x-hidden">
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
