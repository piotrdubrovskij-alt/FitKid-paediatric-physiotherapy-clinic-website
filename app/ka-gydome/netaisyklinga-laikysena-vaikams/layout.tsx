import type { Metadata } from 'next';
import { getMetadataForPage, buildAlternates } from '@/lib/i18n/metadata';

export function generateMetadata(): Metadata {
  const { title, description } = getMetadataForPage(
    '/ka-gydome/netaisyklinga-laikysena-vaikams',
    'lt'
  );
  const alternates = buildAlternates('/ka-gydome/netaisyklinga-laikysena-vaikams');

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
  { q: 'Ar netaisyklinga laikysena visada reiškia skoliozę?', a: 'Ne. Dauguma laikysenos problemų yra funkcinės ir susijusios su raumenų kontrole, įpročiais ir krūviu. Skoliozę patvirtina gydytojas pagal kliniką ir, jei reikia, vaizdinius tyrimus.' },
  { q: 'Ar kuprinė sukelia skoliozę?', a: 'Patikimų įrodymų, kad kuprinė sukelia struktūrinę skoliozę, nėra. Tačiau netinkama ir per sunki kuprinė gali didinti kaklo, pečių ir nugaros skausmą.' },
  { q: 'Koks kuprinės svoris saugus?', a: 'Praktiškai dažniausiai orientuojamasi į maždaug 10-15% kūno svorio ribą ir tinkamą nešiojimo būdą.' },
  { q: 'Ar laikysenos korektorius išsprendžia problemą?', a: 'Vienas korektorius paprastai neišsprendžia. Jis gali laikinai priminti padėtį, bet ilgalaikis rezultatas pasiekiamas tik per aktyvų stiprinimą ir judesio kontrolę.' },
  { q: 'Ar masažas būtinas?', a: 'Ne visada. Jis naudingas, kai yra įtampa ar skausmas, bet pagrindą sudaro kineziterapinis planas.' },
  { q: 'Ar vaikui galima sportuoti, jei skauda nugarą?', a: 'Dažniausiai taip, bet reikia pritaikyti krūvį ir taisyti judesio kokybę. Absoliutus poilsis retai yra geriausias sprendimas.' },
  { q: 'Kada pamatysime pirmą rezultatą?', a: 'Dažnai per 2-6 savaites, jei planas taikomas nuosekliai. Ilgiau trunkančios problemos dažniausiai reikalauja ilgesnio ciklo.' },
  { q: 'Ar paauglystės augimo šuolis gali pabloginti laikyseną?', a: 'Taip. Greito augimo metu dažnai pablogėja mobilumo-jėgos balansas, todėl laikysenos kontrolė laikinai silpnėja.' },
  { q: 'Ar laikysenos problema gali sukelti galvos skausmus?', a: 'Taip, ypač kai vyrauja kaklo-pečių juostos įtampa ir galvos pozicija į priekį.' },
  { q: 'Kada būtina gydytojo ortopedo ar neurologo konsultacija?', a: 'Kai yra raudonų signalų, aiškus progresuojantis deformacijos vaizdas, neurologiniai simptomai arba silpnas atsakas į konservatyvų planą.' },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'FitKid',
    url: 'https://fitkid.lt/ka-gydome/netaisyklinga-laikysena-vaikams',
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
