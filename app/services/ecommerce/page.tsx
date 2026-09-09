import type { Metadata } from "next";
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/ecommerce/Hero";
import Capabilities from "@/components/ecommerce/Capabilities";
import Process from "@/components/ecommerce/Process";
import SelectedWork from "@/components/SelectedWork";
import Pricing from "@/components/ecommerce/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/components/LanguageContext";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "E-Commerce Solutions & Shopify Development in Bangladesh",
  description:
    "High-converting e-commerce web platforms, custom Shopify development, and automated inventory systems with bKash, Nagad, Stripe, and SSLCommerz payment gateway integrations by Sawda Digital.",
  alternates: {
    canonical: "https://sawdadigital.com/services/ecommerce",
  },
  openGraph: {
    title: "E-Commerce Solutions & Shopify Development | Sawda Digital",
    description:
      "Engineered for high checkout conversions with seamless local and international payment gateways.",
    url: "https://sawdadigital.com/services/ecommerce",
    type: "website",
  },
  twitter: {
    title: "E-Commerce Solutions | Sawda Digital",
    description:
      "Custom Shopify and headless e-commerce platforms engineered for massive sales velocity.",
  },
};

const ecommerceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "E-Commerce Development & Solutions",
      provider: {
        "@type": "Organization",
        name: "Sawda Digital",
        url: "https://sawdadigital.com",
      },
      serviceType: "E-Commerce Platform Development",
      description:
        "Building custom online stores, Shopify platforms, bKash/Nagad/SSLCommerz payment integrations, and inventory automations.",
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
          name: "E-Commerce Solutions",
          item: "https://sawdadigital.com/services/ecommerce",
        },
      ],
    },
  ],
};

export default function EcommercePage() {
  return (
    <LanguageProvider>
      <JsonLd data={ecommerceSchema} />
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
