import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Contact Us | Start Your Next Digital Project',
  description:
    'Get in touch with Sawda Digital. Reach out via phone (+880 1234 567 890), email, or WhatsApp for custom web development, mobile apps, UI/UX, or digital marketing in Dhaka, Bangladesh.',
  alternates: {
    canonical: 'https://sawdadigital.com/contact',
  },
  openGraph: {
    title: 'Contact Us | Sawda Digital - Let’s Build Something Exceptional',
    description:
      'Ready to start your next project? Get in touch with our leadership team for a fast 24-hour response.',
    url: 'https://sawdadigital.com/contact',
    type: 'website',
  },
  twitter: {
    title: 'Contact Us | Sawda Digital',
    description:
      'Connect with our engineering and growth teams to elevate your digital presence.',
  },
};

const contactSchemas = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': 'https://sawdadigital.com/contact#webpage',
      url: 'https://sawdadigital.com/contact',
      name: 'Contact Sawda Digital',
      description: 'Contact page for Sawda Digital in Banani, Dhaka, Bangladesh.',
      mainEntity: {
        '@type': 'LocalBusiness',
        name: 'Sawda Digital',
        telephone: '+8801234567890',
        email: 'hello@sawdadigital.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'House 12, Road 5, Banani',
          addressLocality: 'Dhaka',
          postalCode: '1213',
          addressCountry: 'BD',
        },
      },
    },
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
          name: 'Contact Us',
          item: 'https://sawdadigital.com/contact',
        },
      ],
    },
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={contactSchemas} />
      {children}
    </>
  );
}
