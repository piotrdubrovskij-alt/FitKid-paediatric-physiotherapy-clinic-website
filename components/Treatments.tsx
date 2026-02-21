'use client';

import Link from 'next/link';
import { type Translation } from '@/lib/i18n/translations';

interface TreatmentsProps {
  translations: Translation;
}

export default function Treatments({ translations }: TreatmentsProps) {
  const infantItems = translations.treatments.items.filter(
    (item) => item.ageGroup === 'infant'
  );
  const childItems = translations.treatments.items.filter(
    (item) => item.ageGroup === 'child'
  );

  const renderCard = (item: any, colorScheme: 'blue' | 'orange') => {
    const isMotorDelay = item.name === "Motorinės raidos vėlavimas" || item.name === "Motor Development Delays";
    const isHypotonia = item.name === "Sumažėjęs raumenų tonusas (hipotonusas)" || item.name === "Decreased Muscle Tone (Hypotonia)";

    if (isHypotonia) {
      return (
        <Link key={item.name} href="/kudikiu-hipotonusas" className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-white hover:border-[#fb7825] cursor-pointer min-h-[120px] flex flex-col items-center justify-center hover:-translate-y-2 hover:scale-105">
          <h3 className="text-base md:text-lg font-semibold text-gray-900 text-center leading-snug group-hover:text-[#fb7825] transition-colors">{item.name}</h3>
        </Link>
      );
    }

    const isHypotonia = item.name === "Sumažėjęs raumenų tonusas (hipotonusas)" || item.name === "Decreased Muscle Tone (Hypotonia)";

    if (isHypotonia) {
      return (
        <Link key={item.name} href="/kudikiu-hipotonusas" className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-white hover:border-[#fb7825] cursor-pointer min-h-[120px] flex flex-col items-center justify-center hover:-translate-y-2 hover:scale-105">
          <h3 className="text-base md:text-lg font-semibold text-gray-900 text-center leading-snug group-hover:text-[#fb7825] transition-colors">{item.name}</h3>
        </Link>
      );
    }

    const isHypotonia = item.name === "Sumažėjęs raumenų tonusas (hipotonusas)" || item.name === "Decreased Muscle Tone (Hypotonia)";
    const isHypertonia = item.name === "Padidėjęs raumenų tonusas (hipertonusas)" || item.name === "Increased Muscle Tone (Hypertonia)";

    if (isHypotonia) {
      return (
        <Link key={item.name} href="/kudikiu-hipotonusas" className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-white hover:border-[#fb7825] cursor-pointer min-h-[120px] flex flex-col items-center justify-center hover:-translate-y-2 hover:scale-105">
          <h3 className="text-base md:text-lg font-semibold text-gray-900 text-center leading-snug group-hover:text-[#fb7825] transition-colors">{item.name}</h3>
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300"><svg className="w-5 h-5 text-[#fb7825]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></div>
        </Link>
      );
    }

    if (isHypertonia) {
      return (
        <Link
          key={item.name}
          href="/kudikiu-hipertonusas"
          className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-white hover:border-[#fb7825] cursor-pointer min-h-[120px] flex flex-col items-center justify-center hover:-translate-y-2 hover:scale-105"
        >
          <h3 className="text-base md:text-lg font-semibold text-gray-900 text-center leading-snug group-hover:text-[#fb7825] transition-colors">
            {item.name}
          </h3>
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <svg className="w-5 h-5 text-[#fb7825]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#fb7825]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
        </Link>
      );
    }

    if (isMotorDelay) {
      return (
        <Link
          key={item.name}
          href="/motorines-raidos-velavimas"
          className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-white hover:border-[#fb7825] cursor-pointer min-h-[120px] flex flex-col items-center justify-center hover:-translate-y-2 hover:scale-105"
        >
          {/* Problem name */}
          <h3 className="text-base md:text-lg font-semibold text-gray-900 text-center leading-snug group-hover:text-[#fb7825] transition-colors">
            {item.name}
          </h3>
          
          {/* Arrow icon - appears on hover */}
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <svg
              className="w-5 h-5 text-[#fb7825]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>

          {/* Hover overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#fb7825]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
        </Link>
      );
    }
    
    // Остальные карточки без ссылки
    return (
      <div
        key={item.name}
        className="relative bg-white rounded-2xl p-6 shadow-lg min-h-[120px] flex flex-col items-center justify-center"
      >
        <h3 className="text-base md:text-lg font-semibold text-gray-900 text-center leading-snug">
          {item.name}
        </h3>
      </div>
    );
  };

  return (
    <section id="treatments" className="py-20 bg-gradient-to-br from-[#fb7825] to-[#e66f1f]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {translations.treatments.title}
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            {translations.treatments.subtitle}
          </p>
        </div>

        {/* Kūdikiams */}
        <div className="mb-16">
          {/* Group header */}
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white">
              {translations.treatments.infantTitle}
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
            {infantItems.map((item) => renderCard(item, 'blue'))}
          </div>
        </div>

        {/* Vaikams */}
        <div className="mb-12">
          {/* Group header */}
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white">
              {translations.treatments.childTitle}
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
            {childItems.map((item) => renderCard(item, 'orange'))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="tel:+37066699676"
            className="inline-flex items-center space-x-2 bg-white hover:bg-gray-50 text-[#fb7825] px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
          >
            <span>{translations.treatments.notFoundMessage}</span>
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
