'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import { translations, type Language } from '@/lib/i18n/translations';

const pageText = {
  lt: {
    title: 'Kūdikių plukdymas šiuo metu nevyksta',
    description: 'Šiuo metu FitKid klinikoje kūdikių plukdymo procedūrų neatliekame ir naujų vizitų šiai paslaugai neregistruojame.',
    alternatives: 'Kitos paslaugos kūdikiams',
    physiotherapy: 'Kūdikių kineziterapija',
    massage: 'Kūdikių masažai',
  },
  en: {
    title: 'Infant swimming is currently unavailable',
    description: 'FitKid is not currently providing infant swimming sessions or taking new bookings for this service.',
    alternatives: 'Other services for infants',
    physiotherapy: 'Infant physiotherapy',
    massage: 'Infant massage',
  },
};

export default function KudikiuPlukdymasPage() {
  const [currentLang, setCurrentLang] = useState<Language>('lt');
  const t = translations[currentLang];
  const txt = pageText[currentLang];

  useEffect(() => {
    const lang = new URLSearchParams(window.location.search).get('lang');
    if (lang === 'en') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentLang('en');
    }
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    const url = new URL(window.location.href);
    if (lang === 'lt') url.searchParams.delete('lang');
    else url.searchParams.set('lang', lang);
    window.history.pushState({}, '', url.toString());
  };

  return (
    <div className="min-h-screen bg-white">
      <Header translations={t} currentLang={currentLang} onLanguageChange={handleLanguageChange} />
      <main className="pt-20">
        <section className="bg-gradient-to-br from-[#54B6FC]/10 to-white py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{txt.title}</h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{txt.description}</p>
          </div>
        </section>
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">{txt.alternatives}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/kudikiu-kineziterapija" className="bg-white rounded-xl p-6 shadow-sm text-[#54B6FC] font-semibold hover:shadow-md transition-shadow">
                {txt.physiotherapy}
              </Link>
              <Link href="/kudikiu-masazai" className="bg-white rounded-xl p-6 shadow-sm text-[#54B6FC] font-semibold hover:shadow-md transition-shadow">
                {txt.massage}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer translations={t} />
      <FloatingActionButtons currentLang={currentLang} />
    </div>
  );
}
