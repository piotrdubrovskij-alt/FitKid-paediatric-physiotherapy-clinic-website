import type { Metadata } from 'next';
import { getMetadataForPage, buildAlternates } from '@/lib/i18n/metadata';

export function generateMetadata(): Metadata {
  const { title, description } = getMetadataForPage(
    '/ka-gydome/skolioze-vaikams',
    'lt'
  );
  const alternates = buildAlternates('/ka-gydome/skolioze-vaikams');

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
  { q: 'Ar skoliozę sukelia netaisyklinga laikysena?', a: 'Ne. Netaisyklinga laikysena gali bloginti savijautą, bet idiopatinės skoliozės tiesiogiai nesukelia.' },
  { q: 'Ar kiekvienai skoliozei reikia operacijos?', a: 'Ne. Daugeliui vaikų taikoma stebėsena, pratimai ar įtvaras. Operacija reikalinga daliai progresuojančių sunkių atvejų.' },
  { q: 'Ar su skolioze galima sportuoti?', a: 'Dažniausiai taip. Sportas dažnai rekomenduojamas, jei krūvis pritaikytas ir stebima judesio kokybė.' },
  { q: 'Ar kineziterapija gali „ištiesinti“ kiekvieną kreivę?', a: 'Tikslas dažniausiai yra ne „nulio kampas“, o progresijos kontrolė, funkcijos gerinimas, skausmo mažinimas ir gyvenimo kokybė.' },
  { q: 'Ar įtvaras pakeičia kineziterapiją?', a: 'Ne. Įtvaras ir kineziterapija dažnai papildo vienas kitą.' },
  { q: 'Ar skoliozė visada skauda?', a: 'Ne. Dalis vaikų skausmo nejaučia, todėl reikalinga reguliari stebėsena net be skausmo.' },
  { q: 'Kaip dažnai reikia kontrolės?', a: 'Dažnį nustato ortopedas pagal augimą ir progresijos riziką. Augimo šuolio metu kontrolės dažnesnės.' },
  { q: 'Ar masažas gali būti vienintelis gydymas?', a: 'Ne. Masažas yra pagalbinė priemonė, o bazė yra aktyvi kineziterapija ir medicininė stebėsena.' },
  { q: 'Kada reikalinga MRT?', a: 'Kai klinikinė eiga netipinė arba yra neurologinių požymių, MRT sprendžia gydytojas.' },
  { q: 'Ar galima laukti „kol išaugs“?', a: 'Be plano laukti nerekomenduojama. Augimo metu būklė gali progresuoti.' },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'FitKid',
    url: 'https://fitkid.lt/ka-gydome/skolioze-vaikams',
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
