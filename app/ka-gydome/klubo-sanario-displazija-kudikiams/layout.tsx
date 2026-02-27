import type { Metadata } from 'next';
import { getMetadataForPage, buildAlternates } from '@/lib/i18n/metadata';

export function generateMetadata(): Metadata {
  const { title, description } = getMetadataForPage(
    '/ka-gydome/klubo-sanario-displazija-kudikiams',
    'lt'
  );
  const alternates = buildAlternates('/ka-gydome/klubo-sanario-displazija-kudikiams');

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
    url: 'https://fitkid.lt/ka-gydome/klubo-sanario-displazija-kudikiams',
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
        name: 'Ar klubo displazija visada reiškia operaciją?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ne. Anksti nustačius dažnai pakanka neoperacinių metodų, o operacija svarstoma tik daliai atvejų.',
        },
      },
      {
        '@type': 'Question',
        name: 'Ar kineziterapija gali pakeisti ortopedinį gydymą?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ne visais atvejais. Struktūrinę klubo displaziją gydo ortopedas, o kineziterapija yra svarbi funkcinė pagalba.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kada reikalinga skubi konsultacija?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Skubiai kreiptis reikia, jei staiga ryškiai sumažėja kojos judesys, atsiranda skausmingumas, įgūdžių regresas ar aiškus šlubavimas.',
        },
      },
      {
        '@type': 'Question',
        name: 'Ar asimetriškos raukšlės visada reiškia klubo displaziją?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ne. Tai tik vienas signalas, vertinamas kartu su klinikiniu ištyrimu ir, jei reikia, vaizdiniais tyrimais.',
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

