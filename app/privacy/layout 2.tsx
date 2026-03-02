import type { Metadata } from 'next';
import { getMetadataForPage, buildAlternates } from '@/lib/i18n/metadata';

export function generateMetadata(): Metadata {
  const { title, description } = getMetadataForPage('/privacy', 'lt');
  const alternates = buildAlternates('/privacy');

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
