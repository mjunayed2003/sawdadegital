import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import JsonLd from "@/components/seo/JsonLd";
import GoogleAnalytics from "@/components/seo/GoogleAnalytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sawdadigital.com"),
  title: {
    default: "Sawda Digital | Digital Marketing, Web, App & SEO Agency in Bangladesh",
    template: "%s | Sawda Digital - Digital Marketing & Tech Agency",
  },
  description:
    "Sawda Digital is a top-tier digital marketing agency in Bangladesh delivering high-ROI digital marketing, custom web development (Next.js, WordPress, Shopify), mobile apps (iOS & Android), UI/UX design, and result-driven SEO to scale ambitious brands.",
  applicationName: "Sawda Digital",
  authors: [{ name: "Sawda Digital", url: "https://sawdadigital.com" }],
  creator: "Sawda Digital",
  publisher: "Sawda Digital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  keywords: [
    "Sawda Digital",
    "digital marketing agency Bangladesh",
    "digital marketing company Dhaka",
    "digital marketing agency Rangpur",
    "best digital marketing agency in Rangpur",
    "digital marketing company Rangpur",
    "best digital marketing agency BD",
    "web development agency Bangladesh",
    "web development company Rangpur",
    "web design Rangpur",
    "custom web app development Next.js",
    "mobile app development company Bangladesh",
    "mobile app development Rangpur",
    "iOS and Android app development Dhaka",
    "React Native developer Bangladesh",
    "software company in Rangpur",
    "SEO agency Bangladesh",
    "SEO agency Rangpur",
    "SEO service in Rangpur",
    "SEO expert Dhaka",
    "SEO expert Rangpur",
    "technical SEO and Google ranking",
    "UI UX design agency Bangladesh",
    "UI UX design Rangpur",
    "product design Figma studio Dhaka",
    "conversion rate optimization Bangladesh",
    "social media marketing Dhaka",
    "social media marketing Rangpur",
    "Facebook boosting agency Rangpur",
    "Facebook and Instagram ads agency",
    "Google Ads PPC marketing Bangladesh",
    "Shopify ecommerce development Dhaka",
    "WordPress and Wix website design",
    "video production and commercial ads Dhaka",
    "সাওদা ডিজিটাল",
    "ডিজিটাল মার্কেটিং এজেন্সি বাংলাদেশ",
    "ডিজিটাল মার্কেটিং এজেন্সি রংপুর",
    "ডিজিটাল মার্কেটিং কোম্পানি ঢাকা",
    "ডিজিটাল মার্কেটিং কোম্পানি রংপুর",
    "ওয়েব ডিজাইন ও ডেভেলপমেন্ট বাংলাদেশ",
    "ওয়েব ডিজাইন রংপুর",
    "ওয়েব ডেভেলপমেন্ট কোম্পানি রংপুর",
    "সফটওয়্যার কোম্পানি রংপুর",
    "মোবাইল অ্যাপ ডেভেলপমেন্ট ঢাকা",
    "মোবাইল অ্যাপ ডেভেলপমেন্ট রংপুর",
    "এসইও সার্ভিস বাংলাদেশ",
    "এসইও সার্ভিস রংপুর",
    "ইউআই ইউএক্স ডিজাইন এজেন্সি",
    "ফেসবুক বুস্টিং ও অ্যাডভার্টাইজিং",
    "ফেসবুক বুস্টিং রংপুর",
    "গুগল অ্যাডস ও মার্কেটিং",
  ],
  alternates: {
    canonical: "https://sawdadigital.com",
    languages: {
      "en": "https://sawdadigital.com",
      "bn": "https://sawdadigital.com",
      "x-default": "https://sawdadigital.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["bn_BD"],
    url: "https://sawdadigital.com",
    siteName: "Sawda Digital",
    title: "Sawda Digital | Digital Marketing, Web, App & SEO Agency in Bangladesh",
    description:
      "Transforming ambitious businesses with high-ROI digital marketing, custom web development, mobile apps, UI/UX design, and Page 1 Google SEO in Dhaka, Rangpur, and globally.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sawda Digital - Premier Digital Marketing, Web, App & SEO Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sawda Digital | Digital Marketing, Web, App & SEO Agency in Bangladesh",
    description:
      "Transforming ambitious businesses with high-ROI digital marketing, custom web development, mobile apps, UI/UX design, and Page 1 Google SEO in Dhaka, Rangpur, and globally.",
    images: ["/og-image.png"],
    creator: "@sawdadigital",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  category: "technology",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService", "AutomatedMarketingAgency"],
      "@id": "https://sawdadigital.com/#organization",
      name: "Sawda Digital",
      alternateName: ["Sawda Digital Marketing Agency", "Sawda IT", "সাওদা ডিজিটাল"],
      url: "https://sawdadigital.com",
      logo: {
        "@type": "ImageObject",
        url: "https://sawdadigital.com/sawdaDigitalLogo.png",
      },
      image: "https://sawdadigital.com/og-image.png",
      description:
        "Sawda Digital is an elite full-service digital marketing and technology agency based in Saidpur, Nilphamari, Rangpur Division, serving all of Bangladesh and global clients, specializing in performance digital marketing, custom web design, mobile app engineering, UI/UX prototyping, and Google SEO.",
      telephone: "+8801316464075",
      email: "sawdadigital@gmail.com",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+8801316464075",
        contactType: "customer service",
        areaServed: ["Saidpur", "Nilphamari", "Rangpur", "Dhaka", "BD", "Global"],
        availableLanguage: ["English", "Bengali"],
        url: "https://sawdadigital.com/contact",
      },
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Saidpur, Nilphamari",
        addressLocality: "Saidpur",
        addressRegion: "Rangpur Division",
        addressCountry: "BD",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.7785,
        longitude: 88.8974,
      },
      sameAs: [
        "https://www.facebook.com/share/194KjGcPox/?mibextid=wwXIfr",
        "https://linkedin.com/company/sawdadigital",
        "https://x.com/sawdadigital?s=11",
        "https://www.instagram.com/sawdadigital?stkn=cGJuazZmNHZ1bjc4&utm_source=qr",
      ],
      founder: [
        {
          "@type": "Person",
          name: "Md Khairul Bashar",
          jobTitle: "Founder & CEO",
        },
        {
          "@type": "Person",
          name: "Md Junayed",
          jobTitle: "Head of AI Engineering & Software Engineer",
        },
      ],
      areaServed: [
        {
          "@type": "City",
          name: "Dhaka",
        },
        {
          "@type": "City",
          name: "Rangpur",
        },
        {
          "@type": "AdministrativeArea",
          name: "Rangpur Division",
        },
        {
          "@type": "Country",
          name: "Bangladesh",
        },
        {
          "@type": "Country",
          name: "Global",
        },
      ],
      knowsAbout: [
        "Digital Marketing",
        "Search Engine Optimization (SEO)",
        "Web Design and Development",
        "Mobile Application Development",
        "UI/UX Design and Prototyping",
        "Social Media Marketing and Paid Ads",
        "Google Ads and PPC Campaigns",
        "E-Commerce Solutions and Shopify",
        "Conversion Rate Optimization (CRO)",
        "React Native & Next.js Engineering",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Sawda Digital Full-Suite Solutions",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Digital Marketing & Performance Ads",
              description: "Targeted Facebook, Instagram, Google Ads campaigns and organic social growth funnels.",
              url: "https://sawdadigital.com/services/marketing-sales",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Web Design & Next.js Development",
              description: "Ultra-fast, secure, and SEO-optimized corporate websites, SaaS platforms, and portals.",
              url: "https://sawdadigital.com/services/web-development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mobile App Development (iOS & Android)",
              description: "Cross-platform mobile applications engineered with React Native and Flutter.",
              url: "https://sawdadigital.com/services/app-development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Search Engine Optimization (SEO & Local SEO)",
              description: "Technical SEO audits, high-intent keyword ranking, and authoritative backlink building.",
              url: "https://sawdadigital.com/services/seo",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "UI/UX Product Design & Prototyping",
              description: "Conversion-first user interfaces, interactive Figma prototypes, and complete design systems.",
              url: "https://sawdadigital.com/services/ui-ux",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://sawdadigital.com/#website",
      url: "https://sawdadigital.com",
      name: "Sawda Digital",
      publisher: {
        "@id": "https://sawdadigital.com/#organization",
      },
      inLanguage: ["en-US", "bn-BD"],
      potentialAction: {
        "@type": "SearchAction",
        target: "https://sawdadigital.com/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <GoogleAnalytics />
        <JsonLd data={organizationSchema} />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-[#1a1a1a] transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
