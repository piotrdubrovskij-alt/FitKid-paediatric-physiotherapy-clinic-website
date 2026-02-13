import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ramunė Nemeikaitė - Vaikų ir kūdikių masažo specialistė | FitKid',
  description: 'Ramunė Nemeikaitė - vaikų ir kūdikių masažo specialistė. Gydomasis masažas pagal vaiko poreikius. Dirba Vilniaus Santaros klinikose. Licencija ASL-10641.',
  alternates: {
    canonical: 'https://fitkid.lt/specialists/ramune-nemeikaite',
    languages: {
      'lt': 'https://fitkid.lt/specialists/ramune-nemeikaite',
      'en': 'https://fitkid.lt/specialists/ramune-nemeikaite?lang=en',
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
