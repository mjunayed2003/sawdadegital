import type { Metadata } from "next";
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/marketing-sales/Hero";
import Capabilities from "@/components/marketing-sales/Capabilities";
import Process from "@/components/marketing-sales/Process";
import SelectedWork from "@/components/SelectedWork";
import Pricing from "@/components/marketing-sales/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/components/LanguageContext";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Digital Marketing & Performance Sales Agency in Bangladesh",
  description:
    "Top digital marketing agency in Bangladesh. Data-driven Facebook & Instagram ads, Google Ads PPC, B2B lead generation funnels, and compound brand growth strategies by Sawda Digital.",
  alternates: {
    canonical: "https://sawdadigital.com/services/marketing-sales",
  },
  openGraph: {
    title: "Digital Marketing & Performance Sales Agency | Sawda Digital",
    description:
      "Laser-targeted social campaigns, Google Ads, high-converting creative, and predictable revenue funnels designed to scale brands.",
    url: "https://sawdadigital.com/services/marketing-sales",
    type: "website",
  },
  twitter: {
    title: "Digital Marketing & Growth Agency | Sawda Digital",
    description:
      "Scale your revenue with high-ROI paid acquisition, strategic organic social, and conversion funnels.",
  },
};

const marketingSalesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Social Media Marketing & Sales Management",
      provider: {
        "@type": "Organization",
        name: "Sawda Digital",
        url: "https://sawdadigital.com",
      },
      serviceType: "Digital Marketing & Paid Acquisition",
      description:
        "Full-funnel digital advertising, Meta Ads, TikTok ads, audience acquisition, and conversion rate optimization.",
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
          name: "Marketing & Sales",
          item: "https://sawdadigital.com/services/marketing-sales",
        },
      ],
    },
  ],
};

export default function MarketingSalesPage() {
  return (
    <LanguageProvider>
      <JsonLd data={marketingSalesSchema} />
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
