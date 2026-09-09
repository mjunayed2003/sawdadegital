import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sawda Digital - Premier Digital Agency in Bangladesh',
    short_name: 'Sawda Digital',
    description: 'Bespoke web development, mobile apps, UI/UX, SEO, and social marketing services by Sawda Digital.',
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
