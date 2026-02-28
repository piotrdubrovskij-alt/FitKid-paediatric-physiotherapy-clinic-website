import type { Metadata } from 'next';
import { getMetadataForPage, buildAlternates } from '@/lib/i18n/metadata';

export function generateMetadata(): Metadata {
  const { title, description } = getMetadataForPage(
    '/ka-gydome/nugaros-kaklo-peciu-skausmai-vaikams',
    'lt'
  );
  const alternates = buildAlternates('/ka-gydome/nugaros-kaklo-peciu-skausmai-vaikams');

  return {
    title,
    description,
    alternates: {
      canonical: alternates.canonical,
      languages: alternates.languages,
    },
  };
}

const faqSchema = [
  { q: 'Ar vaikų nugaros skausmas visada pavojingas?', a: 'Ne. Dauguma atvejų yra funkciniai ir koreguojami. Pavojų rodo raudoni signalai: naktinis skausmas, neurologiniai simptomai, sisteminiai požymiai.' },
  { q: 'Ar ilgas sėdėjimas tikrai turi įtakos?', a: 'Taip. Dažniau problemą sukelia ne viena poza, o ilgas nejudrumas ir mažas padėčių kintamumas.' },
  { q: 'Ar kuprinė sukelia skoliozę?', a: 'Ne, bet per sunki ar netinkamai nešiojama kuprinė gali didinti kaklo, pečių ir nugaros skausmą.' },
  { q: 'Ar masažas vienas išspręs problemą?', a: 'Dažniausiai ne. Ilgalaikiam rezultatui reikalinga aktyvi kineziterapija ir įpročių korekcija.' },
  { q: 'Ar galima sportuoti, jei skauda?', a: 'Dažniausiai galima, bet su adaptuotu krūviu ir aiškiu planu. Skausmo ignoruoti nereikia.' },
  { q: 'Kiek laiko užtrunka pagerėjimas?', a: 'Lengvesniais atvejais pirmi pokyčiai dažnai per 2-6 savaites. Ilgesnėms problemoms reikia nuoseklesnio plano.' },
  { q: 'Ar paauglystėje skausmas dažnėja?', a: 'Taip, dažnai dėl augimo šuolio, didesnio krūvio ir mažesnio atsistatymo.' },
  { q: 'Kada reikia vaizdinių tyrimų?', a: 'Ne visada. Tyrimų poreikį lemia klinika ir raudoni signalai, sprendžia gydytojas.' },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'FitKid',
    url: 'https://fitkid.lt/ka-gydome/nugaros-kaklo-peciu-skausmai-vaikams',
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
    mainEntity: faqSchema.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
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
