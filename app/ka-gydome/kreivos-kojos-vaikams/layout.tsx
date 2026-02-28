import type { Metadata } from 'next';
import { getMetadataForPage, buildAlternates } from '@/lib/i18n/metadata';

export function generateMetadata(): Metadata {
  const { title, description } = getMetadataForPage(
    '/ka-gydome/kreivos-kojos-vaikams',
    'lt'
  );
  const alternates = buildAlternates('/ka-gydome/kreivos-kojos-vaikams');

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
  { q: 'Ar O kojos mažiems vaikams visada problema?', a: 'Ne. Ankstyvame amžiuje O forma dažnai yra fiziologinė ir mažėja savaime.' },
  { q: 'Ar X kojos 3-5 metų vaikui visada patologija?', a: 'Ne. Tame amžiuje tai dažnai yra normali raidos stadija.' },
  { q: 'Kada X deformacija jau laikoma įtartina?', a: 'Kai ji ryški, asimetriška, su skausmu, progresuoja ar išlieka po fiziologinio amžiaus.' },
  { q: 'Ar pratimai gali „ištiesinti kaulą“?', a: 'Pratimai gerina funkciją, kontrolę ir simptomus. Struktūrinio kaulo kampo korekcija priklauso nuo augimo ir ortopedinės taktikos.' },
  { q: 'Ar reikia specialių batų?', a: 'Vien batai dažniausiai neišsprendžia problemos. Avalynė turi būti patogi ir atitinkanti veiklą; planas dažniausiai apima ir aktyvią korekciją.' },
  { q: 'Ar masažas gali pakeisti kineziterapiją?', a: 'Ne. Masažas yra papildoma priemonė, o ilgalaikį rezultatą lemia aktyvus judesio planas.' },
  { q: 'Ar reikia rentgeno visiems vaikams su X/O forma?', a: 'Ne visada. Tyrimų poreikį sprendžia gydytojas pagal kliniką ir rizikos požymius.' },
  { q: 'Ar antsvoris gali pabloginti X kojų simptomus?', a: 'Taip, didesnė apkrova gali stiprinti simptomus ir funkcinius apribojimus.' },
  { q: 'Ar vaikas gali sportuoti?', a: 'Dažniausiai taip, su individualiai pritaikytu krūviu ir technikos korekcija.' },
  { q: 'Kada būtina ortopedo konsultacija?', a: 'Kai deformacija ryški, asimetriška, progresuojanti, skausminga arba išlieka už fiziologinio amžiaus ribų.' },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'FitKid',
    url: 'https://fitkid.lt/ka-gydome/kreivos-kojos-vaikams',
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
