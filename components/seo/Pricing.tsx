import React from 'react';
import ServicePackages from '@/components/expertise/ServicePackages';

export default function Pricing() {
  return (
    <div id="pricing">
      <ServicePackages initialCategory="seo-marketing" hideCategories={true} />
    </div>
  );
}
