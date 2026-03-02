import type { Metadata } from 'next';
import { getMetadataForPage, buildAlternates } from '@/lib/i18n/metadata';

export function generateMetadata(): Metadata {
  const { title, description } = getMetadataForPage('/kudikiu-hipertonusas', 'lt');
  const alternates = buildAlternates('/kudikiu-hipertonusas');

  return {
    title,
    description,
    alternates: {
      canonical: alternates.canonical,
      languages: alternates.languages,
    },
  };
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'FitKid',
    url: 'https://fitkid.lt',
    telephone: '+37066699676',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Aludarių g. 7-43',
      addressLocality: 'Vilnius',
      postalCode: '01113',
      addressCountry: 'LT',
    },
    areaServed: 'Vilnius',
    medicalSpecialty: 'Pediatrics',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Ar hipertonusas visada reiškia neurologinę ligą?', acceptedAnswer: { '@type': 'Answer', text: 'Ne. Dažnai tai funkcinis tonuso reguliacijos sutrikimas, tačiau įvertinimas būtinas.' } },
      { '@type': 'Question', name: 'Ar kūdikis išaugs hipertonusą?', acceptedAnswer: { '@type': 'Answer', text: 'Kartais požymiai mažėja savaime, bet be įvertinimo gali formuotis netaisyklingi judesių modeliai.' } },
      { '@type': 'Question', name: 'Kada pradėti terapiją?', acceptedAnswer: { '@type': 'Answer', text: 'Kuo anksčiau, tuo geriau. Pirmaisiais mėnesiais korekcija dažniausiai efektyviausia.' } },
      { '@type': 'Question', name: 'Ar terapija skausminga?', acceptedAnswer: { '@type': 'Answer', text: 'Ne. Dirbama švelniai, pagal kūdikio toleranciją ir saugumo principus.' } },
    ],
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {children}
    </>
  );
}
