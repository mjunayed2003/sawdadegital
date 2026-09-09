import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import JsonLd from "@/components/seo/JsonLd";
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
    default: "Sawda Digital | Best Digital Agency in Bangladesh | Web, App, Marketing & SEO",
    template: "%s | Sawda Digital",
  },
  description:
    "Sawda Digital is a premier full-service digital agency in Dhaka, Bangladesh. We engineer high-converting web applications, mobile apps, UI/UX designs, data-driven SEO & Google Ads, and e-commerce solutions that scale businesses.",
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
    "digital agency Bangladesh",
    "software company Bangladesh",
    "web development Dhaka",
    "mobile app development Bangladesh",
    "UI UX design studio Dhaka",
    "SEO agency Bangladesh",
    "Google Ads agency Dhaka",
    "Shopify developer Bangladesh",
    "custom software development",
    "social media marketing Bangladesh",
    "video production Dhaka",
    "সাওদা ডিজিটাল",
    "ডিজিটাল এজেন্সি বাংলাদেশ",
    "ওয়েব ডিজাইন ও ডেভেলপমেন্ট",
    "সফটওয়্যার কোম্পানি ঢাকা",
  ],
  alternates: {
    canonical: "https://sawdadigital.com",
    languages: {
      "en-US": "https://sawdadigital.com",
      "bn-BD": "https://sawdadigital.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["bn_BD"],
    url: "https://sawdadigital.com",
    siteName: "Sawda Digital",
    title: "Sawda Digital | Premier Digital Agency in Bangladesh",
    description:
      "Transforming ambitious businesses with high-performance web development, mobile apps, UI/UX, SEO, and strategic digital marketing.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sawda Digital - Premier Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sawda Digital | Premier Digital Agency in Bangladesh",
    description:
      "Transforming ambitious businesses with high-performance web development, mobile apps, UI/UX, SEO, and strategic digital marketing.",
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
    icon: [
      { url: "/favicon.ico" },
      { url: "/sawdaDigitalLogo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/sawdaDigitalLogo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  category: "technology",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://sawdadigital.com/#organization",
      name: "Sawda Digital",
      url: "https://sawdadigital.com",
      logo: {
        "@type": "ImageObject",
        url: "https://sawdadigital.com/sawdaDigitalLogo.png",
      },
      image: "https://sawdadigital.com/og-image.png",
      description:
        "Sawda Digital is an elite full-service digital agency in Dhaka, Bangladesh specializing in custom web design, mobile app development, UI/UX, SEO, and social marketing.",
      telephone: "+8801234567890",
      email: "hello@sawdadigital.com",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "House 12, Road 5, Banani",
        addressLocality: "Dhaka",
        postalCode: "1213",
        addressCountry: "BD",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 23.7937,
        longitude: 90.4066,
      },
      sameAs: [
        "https://facebook.com/sawdadigital",
        "https://linkedin.com/company/sawdadigital",
        "https://twitter.com/sawdadigital",
        "https://instagram.com/sawdadigital",
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
          jobTitle: "Co-Founder & Lead Software Engineer",
        },
      ],
      areaServed: [
        {
          "@type": "Country",
          name: "Bangladesh",
        },
        {
          "@type": "Country",
          name: "Global",
        },
      ],
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
