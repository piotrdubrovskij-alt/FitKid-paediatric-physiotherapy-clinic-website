import { MetadataRoute } from 'next';

const BASE_URL = 'https://fitkid.lt';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '/', priority: 1, changeFrequency: 'monthly' as const },
    { path: '/kainos', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/kontaktai', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/registracija', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/kudikiu-kineziterapija', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/kudikiu-masazai', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/kudikiu-plukdymas', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/kudikiu-hipertonusas', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/kudikiu-hipotonusas', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/vaiku-kineziterapija', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/vaiku-masazas', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/vojta-terapija', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/motorines-raidos-velavimas', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/kudikio-kreivakakliste', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/plagiocefalija', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/ka-gydome/klubo-sanario-displazija-kudikiams', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/ka-gydome/kreivos-kojos-vaikams', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/ka-gydome/kudikiu-hipotonusas', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/ka-gydome/netaisyklinga-laikysena-vaikams', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/ka-gydome/nugaros-kaklo-peciu-skausmai-vaikams', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/ka-gydome/ploksciapedyste-eisenos-sutrikimai-vaikams', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/ka-gydome/reabilitacija-po-traumu-vaikams', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/ka-gydome/skolioze-vaikams', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/specialists/agne-juodyte', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/specialists/ksenija-persijanova', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/specialists/ramune-nemeikaite', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/cookies', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
