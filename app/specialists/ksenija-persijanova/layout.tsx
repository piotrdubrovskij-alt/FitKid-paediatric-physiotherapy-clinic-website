import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ksenija Persijanova - Vaikų kineziterapeutė, DNS metodika | FitKid',
  description: 'Ksenija Persijanova - vaikų kineziterapeutė, DNS metodika, hidroterapija kūdikiams. Dirbu su naujagimiais ir kūdikiais nuo pirmųjų gyvenimo savaičių. Licencija ASL-10431.',
  alternates: {
    canonical: 'https://fitkid.lt/specialists/ksenija-persijanova',
    languages: {
      'lt': 'https://fitkid.lt/specialists/ksenija-persijanova',
      'en': 'https://fitkid.lt/specialists/ksenija-persijanova?lang=en',
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
