'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import VideoHero from '@/components/VideoHero';
import Services from '@/components/Services';
import Treatments from '@/components/Treatments';
import About from '@/components/About';
import Specialists from '@/components/Specialists';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import { translations, type Language } from '@/lib/i18n/translations';

export default function Home() {
  const [currentLang, setCurrentLang] = useState<Language>('lt');
  const t = translations[currentLang];

  // Read language from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang') as Language;
    if (lang && (lang === 'lt' || lang === 'en')) {
      setCurrentLang(lang);
    }
  }, []);

  // Handle language change and update URL
  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    const url = new URL(window.location.href);
    if (lang === 'lt') {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', lang);
    }
    window.history.pushState({}, '', url.toString());
  };

  return (
    <div className="min-h-screen">
      <Header
        translations={t}
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
      />
      <main>
        <VideoHero translations={t} />
        <Services translations={t} />
        <Treatments translations={t} />
        <Specialists translations={t} />
        <Testimonials translations={t} />
      </main>
      <Footer translations={t} />
      <FloatingActionButtons currentLang={currentLang} />
    </div>
  );
}
