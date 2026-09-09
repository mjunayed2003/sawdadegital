import type { Metadata } from "next";
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SelectedWork from "@/components/SelectedWork";
import Leadership from "@/components/Leadership";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/components/LanguageContext";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Sawda Digital | Best Digital Agency in Bangladesh - Web, App, Marketing & SEO",
  description:
    "Sawda Digital is a premier full-service digital agency in Dhaka, Bangladesh. We build high-performance websites, mobile apps, bespoke UI/UX designs, data-driven SEO & Google Ads, and e-commerce solutions that drive real business growth.",
  alternates: {
    canonical: "https://sawdadigital.com",
  },
  openGraph: {
    title: "Sawda Digital | Premier Full-Service Digital Agency in Bangladesh",
    description:
      "Transforming ambitious businesses with high-performance web development, mobile apps, UI/UX, SEO, and strategic digital marketing.",
    url: "https://sawdadigital.com",
    type: "website",
  },
};

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What technologies do you use for Web & App Development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use high-performance modern stacks including Next.js, React, Node.js, React Native, TypeScript, TailwindCSS, and secure cloud infrastructures (AWS / Vercel) to build scalable, lightning-fast digital products.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build custom E-commerce stores with automated payment gateways?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We engineer conversion-optimized e-commerce platforms with automated inventory, real-time analytics, and secure local & global payment gateways (bKash, Nagad, Stripe, SSLCommerz, PayPal).",
      },
    },
    {
      "@type": "Question",
      name: "What is included in your Media Production & Branding services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our media and branding suite covers end-to-end production: commercial promotional videos, brand films, 2D/3D animation, social media video ads, logo design, and complete visual identity guidelines.",
      },
    },
    {
      "@type": "Question",
      name: "How do your SEO & Google Marketing services rank businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We execute comprehensive technical SEO audits, high-intent keyword ranking strategies, quality backlink building, and data-backed Google Ads campaigns to dominate top search results and deliver high-converting customer leads.",
      },
    },
    {
      "@type": "Question",
      name: "What is your typical project timeline and post-launch support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard web and branding projects typically take 2-4 weeks, while complex web applications take 4-8 weeks. Every project includes free post-launch warranty support, training, and ongoing maintenance.",
      },
    },
  ],
};

export default function Home() {
  return (
    <LanguageProvider>
      <JsonLd data={homeFaqSchema} />
      <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#1a1a1a] text-[#262626] dark:text-white font-sans overflow-x-hidden transition-colors duration-300">
        <Topbar />
        <Navbar />
        <main>
          <Hero />
          <Services />
          <SelectedWork />
          <Leadership />
          <Testimonials />
          <FAQ />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
