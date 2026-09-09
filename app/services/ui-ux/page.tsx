import type { Metadata } from "next";
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/ui-ux/Hero";
import Capabilities from "@/components/ui-ux/Capabilities";
import Process from "@/components/ui-ux/Process";
import SelectedWork from "@/components/SelectedWork";
import Pricing from "@/components/ui-ux/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/components/LanguageContext";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "UI/UX Design & Product Prototyping Studio",
  description:
    "User research, wireframing, interactive Figma prototypes, and conversion-optimized design systems designed by Sawda Digital to elevate digital experiences.",
  alternates: {
    canonical: "https://sawdadigital.com/services/ui-ux",
  },
  openGraph: {
    title: "UI/UX Design Services | Sawda Digital",
    description:
      "Crafting intuitive, engaging, and beautiful product interfaces that users love.",
    url: "https://sawdadigital.com/services/ui-ux",
    type: "website",
  },
  twitter: {
    title: "UI/UX Design Studio | Sawda Digital",
    description:
      "Modern product design, intuitive UX, and design systems for web and mobile apps.",
  },
};

const uiUxSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "UI/UX Design & Prototyping",
      provider: {
        "@type": "Organization",
        name: "Sawda Digital",
        url: "https://sawdadigital.com",
      },
      serviceType: "UI/UX Design",
      description:
        "User experience research, interactive wireframing, Figma design system creation, and usability testing.",
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
          name: "UI/UX Design",
          item: "https://sawdadigital.com/services/ui-ux",
        },
      ],
    },
  ],
};

export default function UIUXPage() {
  return (
    <LanguageProvider>
      <JsonLd data={uiUxSchema} />
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
