import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Selected Work & Portfolio | Real-World Case Studies',
  description:
    'Browse our showcase of successful digital platforms, mobile apps, enterprise SaaS solutions, and high-impact design projects delivered by Sawda Digital.',
  alternates: {
    canonical: 'https://sawdadigital.com/projects',
  },
  openGraph: {
    title: 'Selected Work & Case Studies | Sawda Digital',
    description:
      'Featured digital platforms, web systems, and creative branding crafted for ambitious businesses.',
    url: 'https://sawdadigital.com/projects',
    type: 'website',
  },
  twitter: {
    title: 'Portfolio & Case Studies | Sawda Digital',
    description:
      'Explore our curated portfolio of production software, apps, and digital campaigns.',
  },
};

const projectsBreadcrumbSchema = {
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
      name: 'Portfolio & Projects',
      item: 'https://sawdadigital.com/projects',
    },
  ],
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={projectsBreadcrumbSchema} />
      {children}
    </>
  );
}
