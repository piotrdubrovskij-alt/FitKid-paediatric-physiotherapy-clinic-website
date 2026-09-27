import type { Metadata } from 'next';
import { getMetadataForPage, buildAlternates } from '@/lib/i18n/metadata';

export function generateMetadata(): Metadata {
  const { title, description } = getMetadataForPage('/specialists/karolina-cernych', 'lt');
  const alternates = buildAlternates('/specialists/karolina-cernych');

  return {
    title,
    description,
    alternates: {
      canonical: alternates.canonical,
      languages: alternates.languages,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
