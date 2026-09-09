import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'About Us | Leadership, Mission & Digital Vision',
  description:
    'Discover the story, mission, and leadership behind Sawda Digital. Meet our multidisciplinary team of software engineers, designers, and growth architects in Bangladesh.',
  alternates: {
    canonical: 'https://sawdadigital.com/about',
  },
  openGraph: {
    title: 'About Us | Sawda Digital - Leadership & Vision',
    description:
      'Meet the multidisciplinary team of engineers, designers, and growth architects behind Sawda Digital.',
    url: 'https://sawdadigital.com/about',
    type: 'website',
  },
  twitter: {
    title: 'About Us | Sawda Digital - Leadership & Vision',
    description:
      'Meet the multidisciplinary team of engineers, designers, and growth architects behind Sawda Digital.',
  },
};

const aboutBreadcrumbSchema = {
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
      name: 'About Us',
      item: 'https://sawdadigital.com/about',
    },
  ],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={aboutBreadcrumbSchema} />
      {children}
    </>
  );
}
