import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { getMetadataForPage, buildAlternates } from '@/lib/i18n/metadata';

export function generateMetadata(): Metadata {
  const { title, description } = getMetadataForPage('/registracija', 'lt');
  const alternates = buildAlternates('/registracija');

  return {
    title,
    description,
    alternates: {
      canonical: alternates.canonical,
      languages: alternates.languages,
    },
  };
}

export default function RegistracijaLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <link rel="stylesheet" href="https://www.manodaktaras.lt/widget/css/mydocwidget.css" />
      {children}
    </>
  );
}
