import type { Metadata } from 'next';
import { getMetadataForPage, buildAlternates } from '@/lib/i18n/metadata';

export function generateMetadata(): Metadata {
  const { title, description } = getMetadataForPage('/plagiocefalija', 'lt');
  const alternates = buildAlternates('/plagiocefalija');

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
    description: 'Vaikų kineziterapijos klinika Vilniuje. Kūdikių plagiocefalijos vertinimas ir korekcija.',
    url: 'https://fitkid.lt/plagiocefalija',
    telephone: '+37066699676',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Aludarių g. 7-43',
      addressLocality: 'Vilnius',
      addressCountry: 'LT',
    },
    medicalSpecialty: 'Physiotherapy',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Ar plagiocefalija pavojinga smegenų vystymuisi?', acceptedAnswer: { '@type': 'Answer', text: 'Pozicinė plagiocefalija dažniausiai smegenų vystymosi nepažeidžia, tačiau ją reikia vertinti ir koreguoti dėl funkcinės simetrijos.' } },
      { '@type': 'Question', name: 'Ar tai praeina savaime?', acceptedAnswer: { '@type': 'Answer', text: 'Dalis atvejų pagerėja augant, bet be kryptingo plano asimetrija gali išlikti ar progresuoti.' } },
      { '@type': 'Question', name: 'Ar galima miegui guldyti ant šono ar pilvo?', acceptedAnswer: { '@type': 'Answer', text: 'Ne. Miegui kūdikis turi būti guldomas ant nugaros. Korekcija vyksta dienos metu.' } },
      { '@type': 'Question', name: 'Ar plagiocefalija visada susijusi su tortikoliu?', acceptedAnswer: { '@type': 'Answer', text: 'Ne visada, bet ryšys labai dažnas. Todėl visada tikriname kaklo judesių simetriją.' } },
      { '@type': 'Question', name: 'Ar reikalingi tyrimai?', acceptedAnswer: { '@type': 'Answer', text: 'Daugeliu atvejų pakanka klinikinio vertinimo. Jei yra netipiškų požymių, gydytojas sprendžia dėl papildomų tyrimų.' } },
      { '@type': 'Question', name: 'Kada pradėti korekciją?', acceptedAnswer: { '@type': 'Answer', text: 'Kuo anksčiau, tuo geriau. Pirmi mėnesiai yra svarbiausias korekcijos langas.' } },
      { '@type': 'Question', name: 'Ar masažas vienas gali išspręsti problemą?', acceptedAnswer: { '@type': 'Answer', text: 'Dažniausiai ne. Geriausi rezultatai gaunami derinant masažą su kineziterapija ir namų planu.' } },
      { '@type': 'Question', name: 'Kada svarstomas šalmas?', acceptedAnswer: { '@type': 'Answer', text: 'Kai asimetrija ryškesnė ir po nuoseklios korekcijos progresas nepakankamas.' } },
      { '@type': 'Question', name: 'Kiek laiko trunka korekcija?', acceptedAnswer: { '@type': 'Answer', text: 'Priklauso nuo atvejo, pirmi pokyčiai dažnai matomi per kelias savaites.' } },
      { '@type': 'Question', name: 'Ar reikia laukti kol vaikas išaugs?', acceptedAnswer: { '@type': 'Answer', text: 'Laukti be plano nerekomenduojama. Ankstyvas darbas duoda geresnį rezultatą.' } },
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
