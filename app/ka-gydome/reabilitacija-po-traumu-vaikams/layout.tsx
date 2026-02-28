import type { Metadata } from 'next';
import { getMetadataForPage, buildAlternates } from '@/lib/i18n/metadata';

export function generateMetadata(): Metadata {
  const { title, description } = getMetadataForPage(
    '/ka-gydome/reabilitacija-po-traumu-vaikams',
    'lt'
  );
  const alternates = buildAlternates('/ka-gydome/reabilitacija-po-traumu-vaikams');

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
  { q: 'Ar po gipso normalu, kad galūnė atrodo plonesnė?', a: 'Taip. Po imobilizacijos laikinas raumenų apimties sumažėjimas yra dažnas ir dažniausiai atsistato su aktyvumu.' },
  { q: 'Ar normalu, kad po gipso vaikas šlubuoja?', a: 'Pirmomis dienomis ar savaitėmis tai gali būti normalu, ypač po kojos imobilizacijos. Jei šlubavimas išlieka ar didėja, reikia vertinimo.' },
  { q: 'Ar visiems vaikams po lūžio reikia kineziterapijos?', a: 'Ne visada. Lengvesni atvejai gali atsistatyti su natūraliu aktyvumu. Tačiau kai yra skausmas, judesio ribojimas, silpnumas ar sporto tikslai, kineziterapija dažniausiai būtina.' },
  { q: 'Ar masažas gali pakeisti reabilitacijos pratimus?', a: 'Ne. Masažas padeda komfortui, bet funkciją atstato aktyvus darbas.' },
  { q: 'Kada galima grįžti į sportą?', a: 'Kai gydytojas leidžia ir pasiekti funkciniai kriterijai: judesys, jėga, stabilumas, kokybiška technika be skausmo.' },
  { q: 'Kiek laiko trunka pilnas atsistatymas?', a: 'Priklauso nuo traumos. Lengvesniais atvejais – kelios savaites, sudėtingesniais – keli mėnesiai.' },
  { q: 'Ar skausmas po pirmų pratimų yra normalu?', a: 'Nedidelis laikinas diskomfortas gali būti normalu. Didėjantis ar ilgai trunkantis skausmas – signalas koreguoti planą.' },
  { q: 'Ar po operacijos planas skiriasi?', a: 'Taip. Reabilitacija griežtai derinama su operavusio gydytojo protokolu.' },
  { q: 'Kaip suprasti, kad krūvis per didelis?', a: 'Jei skausmas didėja treniruotės metu, išlieka kitą dieną ar blogėja funkcija, krūvį reikia mažinti.' },
  { q: 'Kada būtina pakartotinė gydytojo konsultacija?', a: 'Kai progresas sustoja, simptomai grįžta ar atsiranda nauji neurologiniai/sisteminiai požymiai.' },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'FitKid',
    url: 'https://fitkid.lt/ka-gydome/reabilitacija-po-traumu-vaikams',
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
