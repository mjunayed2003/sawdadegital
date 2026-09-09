import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Our Technical Expertise & Digital Capabilities',
  description:
    'Explore Sawda Digital’s modern tech stacks and technical excellence: Next.js, React, Node.js, Flutter, React Native, UI/UX prototyping, technical SEO, and scalable cloud architectures.',
  alternates: {
    canonical: 'https://sawdadigital.com/expertise',
  },
  openGraph: {
    title: 'Our Technical Expertise & Capabilities | Sawda Digital',
    description:
      'Explore our engineering stacks, proven frameworks, and multidisciplinary capabilities.',
    url: 'https://sawdadigital.com/expertise',
    type: 'website',
  },
  twitter: {
    title: 'Technical Capabilities & Expertise | Sawda Digital',
    description:
      'High-performance web, mobile apps, UI/UX, and cloud infrastructure engineered for scalability.',
  },
};

const expertiseBreadcrumbSchema = {
  '@context': 'https://schema.org',
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
      name: 'Expertise',
      item: 'https://sawdadigital.com/expertise',
    },
  ],
};

export default function ExpertiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={expertiseBreadcrumbSchema} />
      {children}
    </>
  );
}
