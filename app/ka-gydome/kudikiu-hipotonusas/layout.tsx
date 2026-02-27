import type { Metadata } from 'next';
import { getMetadataForPage, buildAlternates } from '@/lib/i18n/metadata';

export function generateMetadata(): Metadata {
  const { title, description } = getMetadataForPage(
    '/ka-gydome/kudikiu-hipotonusas',
    'lt'
  );
  const alternates = buildAlternates('/ka-gydome/kudikiu-hipotonusas');

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
    url: 'https://fitkid.lt/ka-gydome/kudikiu-hipotonusas',
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
      {
        '@type': 'Question',
        name: 'Ar hipotonusas visada reiškia sunkią diagnozę?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ne. Dažnai tai funkcinis tonuso ir stabilumo sutrikimas, kurį galima koreguoti. Tačiau būtinas profesionalus įvertinimas.',
        },
      },
      {
        '@type': 'Question',
        name: 'Ar kūdikis išaugs hipotonusą?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kai kurių požymių intensyvumas gali mažėti, bet be tikslingo darbo gali išlikti neefektyvūs judesio modeliai ir raidos atsilikimas.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kada geriausia pradėti terapiją?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kuo anksčiau. Ankstyvame amžiuje nervų sistema plastiškesnė, todėl korekcija dažniausiai greitesnė.',
        },
      },
      {
        '@type': 'Question',
        name: 'Ar terapija skausminga?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ne. Dirbama švelniai, pagal kūdikio toleranciją ir aiškius saugumo principus.',
        },
      },
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
