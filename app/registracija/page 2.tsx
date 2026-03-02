'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import { translations, type Language } from '@/lib/i18n/translations';

const specialistWidgets: Record<string, { doctorId: string; name: { lt: string; en: string } }> = {
  agne: { doctorId: '16366', name: { lt: 'Agnę Juodytę', en: 'Agnė Juodytė' } },
  ksenija: { doctorId: '16171', name: { lt: 'Kseniją Persijanovą', en: 'Ksenija Persijanova' } },
  ramune: { doctorId: '16367', name: { lt: 'Ramunę Nemeikaitę', en: 'Ramunė Nemeikaitę' } },
};

export default function RegistracijaPage() {
  const [currentLang, setCurrentLang] = useState<Language>('lt');
  const [specialist, setSpecialist] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);
  const t = translations[currentLang];

  // Read language and specialist from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang') as Language;
    if (lang && (lang === 'lt' || lang === 'en')) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentLang(lang);
    }
    const spec = params.get('specialist');
    if (spec && specialistWidgets[spec]) {
      setSpecialist(spec);
    }
    setReady(true);
  }, []);

  // Re-initialize ManoDaktaras widget after HTML is rendered
  const initWidget = useCallback(() => {
    if (!widgetRef.current) return;
    // Remove any previously injected widget script to force re-init
    const oldScript = document.querySelector('script[src*="mydocwidget"]');
    if (oldScript) {
      oldScript.remove();
    }
    // Inject the widget script fresh so it processes the current DOM
    const script = document.createElement('script');
    script.src = 'https://www.manodaktaras.lt/widget/js/mydocwidget.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (ready) {
      // Small delay to ensure DOM is updated with the widget divs
      const timer = setTimeout(initWidget, 300);
      return () => clearTimeout(timer);
    }
  }, [ready, specialist, initWidget]);

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

  // Determine which widgets to show
  const widgetsToShow = specialist
    ? [specialistWidgets[specialist]]
    : Object.values(specialistWidgets);

  const pageTitle = specialist
    ? currentLang === 'lt'
      ? `Registracija pas ${specialistWidgets[specialist].name.lt}`
      : `Book a Visit with ${specialistWidgets[specialist].name.en}`
    : currentLang === 'lt'
      ? 'Registracija vizitui'
      : 'Book a Visit';

  const pageSubtitle = specialist
    ? currentLang === 'lt'
      ? 'Pasirinkite patogų laiką vizitui'
      : 'Choose a convenient time for your visit'
    : currentLang === 'lt'
      ? 'Pasirinkite specialistą ir laiką vizitui'
      : 'Choose a specialist and time for your visit';

  // Don't render widgets until URL params are read
  if (!ready) {
    return (
      <div className="min-h-screen">
        <Header
          translations={t}
          currentLang={currentLang}
          onLanguageChange={handleLanguageChange}
        />
        <main className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-pulse">
              <div className="h-12 bg-gray-200 rounded-lg w-2/3 mx-auto mb-6" />
              <div className="h-6 bg-gray-100 rounded-lg w-1/2 mx-auto" />
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header
        translations={t}
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
      />
      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            {pageTitle}
          </h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            {pageSubtitle}
          </p>
          
          {/* ManoDaktaras widgets */}
          <div
            ref={widgetRef}
            className="mydoc-widgets"
            dangerouslySetInnerHTML={{
              __html: widgetsToShow
                .map(w => `<br/><br/><div mydoc-widget mydoc-doctor="${w.doctorId}" mydoc-clinic="2930"></div><br/><br/>`)
                .join(''),
            }}
          />
        </div>
      </main>
      <Footer translations={t} />
      <FloatingActionButtons currentLang={currentLang} />
    </div>
  );
}
