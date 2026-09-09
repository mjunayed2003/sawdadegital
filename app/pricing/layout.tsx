import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Pricing & Packages | Transparent Rates, Zero Hidden Fees',
  description:
    'Explore Sawda Digital’s clear, milestone-based pricing packages. Transparent costs for web development, mobile applications, SEO, UI/UX, and digital growth with zero surprise fees.',
  alternates: {
    canonical: 'https://sawdadigital.com/pricing',
  },
  openGraph: {
    title: 'Pricing & Service Packages | Sawda Digital',
    description:
      'Fixed-scope pricing packages with clear deliverables, milestone payments, and money-back guarantees.',
    url: 'https://sawdadigital.com/pricing',
    type: 'website',
  },
  twitter: {
    title: 'Pricing & Packages | Sawda Digital',
    description:
      'Honest, transparent pricing for premium digital engineering and growth services.',
  },
};

const pricingSchemas = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://sawdadigital.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Pricing',
          item: 'https://sawdadigital.com/pricing',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Are there any hidden or surprise costs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All project scopes and deliverables are documented with fixed milestone pricing before development starts.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does milestone-based payment work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Payments are distributed across verified deliverables: discovery & design, initial build, testing & staging, and final deployment.',
          },
        },
      ],
    },
  ],
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={pricingSchemas} />
      {children}
    </>
  );
}
