import type { Metadata } from 'next';
import { getMetadataForPage, buildAlternates } from '@/lib/i18n/metadata';

export function generateMetadata(): Metadata {
  const { title, description } = getMetadataForPage(
    '/ka-gydome/ploksciapedyste-eisenos-sutrikimai-vaikams',
    'lt'
  );
  const alternates = buildAlternates('/ka-gydome/ploksciapedyste-eisenos-sutrikimai-vaikams');

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
  { q: 'Ar plokščiapėdystė vaikams visada yra liga?', a: 'Ne. Dažnai tai normali raidos variacija, ypač jei pėda lanksti ir neskauda.' },
  { q: 'Ar visiems reikia individualių vidpadžių?', a: 'Ne. Be skausmo ir funkcijos ribojimo jų dažniausiai nereikia. Esant simptomams, jie gali būti naudingi kaip dalis plano.' },
  { q: 'Ar pronacija visada blogai?', a: 'Ne. Pronacija yra normalus judesys. Problema yra per didelė, nevaldoma pronacija su simptomais.' },
  { q: 'Ar vaikščiojimas ant pirštų galų visada pavojingas?', a: 'Mokantis vaikščioti tai gali būti normalu. Jei tęsiasi po 2 metų ar neįmanoma atsistoti pilna pėda, reikia įvertinimo.' },
  { q: 'Ar į vidų krypstanti eisena savaime praeina?', a: 'Daliai vaikų taip, ypač ankstyvame amžiuje. Jei yra skausmas, šlubavimas ar progresija, reikia konsultacijos.' },
  { q: 'Kada įtarti standžią pėdą?', a: 'Kai pėda skausminga, nelanksti, skliautas neatsiranda ant pirštų galų ir judesiai riboti.' },
  { q: 'Ar kineziterapija gali padėti sumažinti kelio skausmą, jei problema pėdoje?', a: 'Taip. Dažnai koreguojant pėdos-čiurnos-klubo grandinę mažėja kelio perkrova.' },
  { q: 'Ar reikia stabdyti sportą?', a: 'Dažniausiai ne. Krūvį reikia pritaikyti, o ne visiškai nutraukti, nebent taip nurodo gydytojas.' },
  { q: 'Kiek laiko reikia iki pagerėjimo?', a: 'Pirmi pokyčiai dažnai matomi per 2-6 savaites, jei planas vykdomas nuosekliai.' },
  { q: 'Kada būtina ortopedo konsultacija?', a: 'Kai yra skausminga standi pėda, vienpusis ryškus sutrikimas, progresuojanti deformacija ar nepakankamas atsakas į konservatyvų planą.' },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'FitKid',
    url: 'https://fitkid.lt/ka-gydome/ploksciapedyste-eisenos-sutrikimai-vaikams',
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
