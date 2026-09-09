import type { Metadata } from "next";
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/video-production/Hero";
import Capabilities from "@/components/video-production/Capabilities";
import Process from "@/components/video-production/Process";
import SelectedWork from "@/components/SelectedWork";
import Pricing from "@/components/video-production/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/components/LanguageContext";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Media Production & Commercial Video Services in Bangladesh",
  description:
    "Cinematic commercial video ads, brand storytelling films, 2D/3D animation, social media reels, and high-definition multimedia content production by Sawda Digital.",
  alternates: {
    canonical: "https://sawdadigital.com/services/video-production",
  },
  openGraph: {
    title: "Media Production & Commercial Video | Sawda Digital",
    description:
      "Full-scale cinematic video production, brand films, and high-impact commercial video assets.",
    url: "https://sawdadigital.com/services/video-production",
    type: "website",
  },
  twitter: {
    title: "Media & Commercial Video Production | Sawda Digital",
    description:
      "Captivating video storytelling, 2D/3D motion graphics, and commercial advertisements.",
  },
};

const videoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Media & Commercial Video Production",
      provider: {
        "@type": "Organization",
        name: "Sawda Digital",
        url: "https://sawdadigital.com",
      },
      serviceType: "Video Production & Motion Graphics",
      description:
        "Cinematic video production, scripting, 4K filming, motion graphics, 2D/3D animation, and post-production color grading.",
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
          name: "Video Production",
          item: "https://sawdadigital.com/services/video-production",
        },
      ],
    },
  ],
};

export default function VideoProductionPage() {
  return (
    <LanguageProvider>
      <JsonLd data={videoSchema} />
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
