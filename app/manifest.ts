import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sawda Digital - Digital Marketing, Web, App & SEO Agency',
    short_name: 'Sawda Digital',
    description: 'Premier digital marketing agency in Bangladesh specializing in web development, mobile apps, UI/UX design, and SEO.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1a1a1a',
    theme_color: '#9D224D',
    icons: [
      {
        src: '/sawdaDigitalLogo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
