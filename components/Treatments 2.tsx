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
    return (
      <Link
        key={item.name}
        href="/ka-gydome"
        className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-white hover:border-[#fb7825] cursor-pointer min-h-[140px] flex flex-col items-center justify-center hover:-translate-y-2 hover:scale-105"
      >
        {/* Problem name */}
        <h3 className="text-lg font-semibold text-gray-900 text-center leading-snug mb-3 group-hover:text-[#fb7825] transition-colors">
          {item.name}
        </h3>
        
        {/* Arrow icon - appears on hover */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
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
  };

  const renderMoreCard = (colorScheme: 'blue' | 'orange') => {
    return (
      <Link
        href="/ka-gydome"
        className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#fb7825]/50 hover:border-[#fb7825] cursor-pointer min-h-[140px] flex items-center justify-center hover:-translate-y-2 hover:scale-105"
      >
        {/* Text with arrow */}
        <p className="text-lg font-semibold text-[#fb7825] flex items-center">
          Daugiau būklių
          <svg
            className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300"
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
        </p>

        {/* Hover overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fb7825]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
      </Link>
    );
  };

  return (
    <section id="treatments" className="py-20 bg-gradient-to-br from-[#fb7825] to-[#e66f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {translations.treatments.title}
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            {translations.treatments.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Kūdikiams */}
          <div className="mb-16">
            {/* Group header */}
            <div className="text-center mb-8">
              <div className="inline-flex flex-col items-center">
                <h3 className="text-3xl font-bold text-white mb-1">
                  Kūdikiams
                </h3>
                <p className="text-sm text-white/80">
                  {translations.treatments.infantAge}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {infantItems.map((item) => renderCard(item, 'blue'))}
              {renderMoreCard('blue')}
            </div>
          </div>

          {/* Vaikams */}
          <div className="mb-20">
            {/* Group header */}
            <div className="text-center mb-8">
              <div className="inline-flex flex-col items-center">
                <h3 className="text-3xl font-bold text-white mb-1">
                  Vaikams
                </h3>
                <p className="text-sm text-white/80">
                  {translations.treatments.childAge}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {childItems.map((item) => renderCard(item, 'orange'))}
              {renderMoreCard('orange')}
            </div>
          </div>

          {/* Bottom CTA - white button on orange background */}
          <div className="text-center mt-16">
            <a
              href="tel:+37066699676"
              className="inline-flex items-center space-x-2 bg-white hover:bg-gray-50 text-[#fb7825] px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
            >
              <span>Neradote savo situacijos? Susisiekite</span>
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
      </div>
    </section>
  );
}
