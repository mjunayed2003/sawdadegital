import type { Metadata } from "next";
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/app-development/Hero";
import Capabilities from "@/components/app-development/Capabilities";
import Process from "@/components/app-development/Process";
import SelectedWork from "@/components/SelectedWork";
import Pricing from "@/components/app-development/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/components/LanguageContext";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Mobile App Development (iOS & Android) in Bangladesh",
  description:
    "Native and cross-platform mobile application development for iOS and Android by Sawda Digital. High-performance, intuitive UI, and secure enterprise backend integration.",
  alternates: {
    canonical: "https://sawdadigital.com/services/app-development",
  },
  openGraph: {
    title: "Mobile App Development Services | Sawda Digital",
    description:
      "Crafting world-class iOS and Android applications with React Native and Flutter.",
    url: "https://sawdadigital.com/services/app-development",
    type: "website",
  },
  twitter: {
    title: "Mobile App Development | Sawda Digital",
    description:
      "Cross-platform iOS and Android apps engineered for speed, responsiveness, and scale.",
  },
};

const appDevSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Mobile App Development",
      provider: {
        "@type": "Organization",
        name: "Sawda Digital",
        url: "https://sawdadigital.com",
      },
      serviceType: "Mobile Application Development",
      description:
        "Full-cycle iOS and Android app engineering from Figma mobile UX to App Store and Google Play deployment.",
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
          name: "App Development",
          item: "https://sawdadigital.com/services/app-development",
        },
      ],
    },
  ],
};

export default function AppDevelopmentPage() {
  return (
    <LanguageProvider>
      <JsonLd data={appDevSchema} />
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
