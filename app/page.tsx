'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import VideoHero from '@/components/VideoHero';
import Services from '@/components/Services';
import Treatments from '@/components/Treatments';
import About from '@/components/About';
import Specialists from '@/components/Specialists';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import { translations, type Language } from '@/lib/i18n/translations';

export default function Home() {
  const [currentLang, setCurrentLang] = useState<Language>('lt');
  const t = translations[currentLang];

  return (
    <div className="min-h-screen">
      <Header
        translations={t}
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
      />
      <main>
        <VideoHero translations={t} />
        <Services translations={t} />
        <Treatments translations={t} />
        <Specialists translations={t} />
        <Testimonials translations={t} />
      </main>
      <Footer translations={t} />
    </div>
  );
}
