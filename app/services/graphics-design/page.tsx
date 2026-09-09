import type { Metadata } from "next";
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/graphics-design/Hero";
import Capabilities from "@/components/graphics-design/Capabilities";
import Process from "@/components/graphics-design/Process";
import SelectedWork from "@/components/SelectedWork";
import Pricing from "@/components/graphics-design/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/components/LanguageContext";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Branding & Graphic Design Studio in Bangladesh",
  description:
    "Memorable brand identity design, iconic logos, vector brand systems, print media, packaging, and commercial advertising graphics crafted by Sawda Digital.",
  alternates: {
    canonical: "https://sawdadigital.com/services/graphics-design",
  },
  openGraph: {
    title: "Branding & Graphic Design Studio | Sawda Digital",
    description:
      "Timeless visual identities, distinctive logos, and marketing creatives designed to stand out.",
    url: "https://sawdadigital.com/services/graphics-design",
    type: "website",
  },
  twitter: {
    title: "Branding & Graphic Design | Sawda Digital",
    description:
      "Crafting memorable brand identities, modern design systems, and advertising collateral.",
  },
};

const graphicsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Branding & Graphic Design",
      provider: {
        "@type": "Organization",
        name: "Sawda Digital",
        url: "https://sawdadigital.com",
      },
      serviceType: "Graphic Design & Brand Identity",
      description:
        "Comprehensive brand identity design, logo suites, vector iconography, typography systems, and marketing materials.",
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
          name: "Graphics Design",
          item: "https://sawdadigital.com/services/graphics-design",
        },
      ],
    },
  ],
};

export default function GraphicsDesignPage() {
  return (
    <LanguageProvider>
      <JsonLd data={graphicsSchema} />
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
