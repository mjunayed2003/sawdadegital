import type { Metadata } from "next";
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AgencyWorkflow from "@/components/AgencyWorkflow";
import SelectedWork from "@/components/SelectedWork";
import Leadership from "@/components/Leadership";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/components/LanguageContext";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: {
    absolute: "Sawda Digital | Digital Marketing, Web, App & SEO Agency in Bangladesh",
  },
  description:
    "Sawda Digital is a leading digital marketing agency in Bangladesh integrating high-performance web development, mobile apps, UI/UX design, and data-backed SEO to drive sustainable business revenue.",
  alternates: {
    canonical: "https://sawdadigital.com",
    languages: {
      "en": "https://sawdadigital.com",
      "bn": "https://sawdadigital.com",
      "x-default": "https://sawdadigital.com",
    },
  },
  openGraph: {
    title: "Sawda Digital | Digital Marketing, Web, App & SEO Agency in Bangladesh",
    description:
      "Full-service digital marketing and tech agency in Bangladesh. Custom web development, mobile apps, UI/UX design, and Page 1 Google SEO to accelerate growth.",
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
      name: "How does Sawda Digital combine Digital Marketing, Web, App, SEO, and UI/UX for business growth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sawda Digital operates an integrated growth model: our UI/UX team designs conversion-first user experiences, our engineering team builds lightning-fast Next.js websites and mobile apps, our SEO specialists secure Page 1 Google rankings, and our digital marketing leads run targeted Meta & Google Ads to convert visitors into loyal clients.",
      },
    },
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
          <AgencyWorkflow />
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
