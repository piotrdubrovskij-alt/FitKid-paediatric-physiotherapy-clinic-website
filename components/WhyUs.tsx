'use client';

import Image from 'next/image';
import { type Translation } from '@/lib/i18n/translations';

interface WhyUsProps {
  translations: Translation;
}

export default function WhyUs({ translations }: WhyUsProps) {
  const icons = [
    '/icons/specializacija.png',
    '/icons/argumentuoti.png',
    '/icons/partneryste.png',
    '/icons/saugi.png'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {translations.whyUs.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {translations.whyUs.subtitle}
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {translations.whyUs.features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start space-x-6">
                <div className="w-40 h-40 flex-shrink-0 relative">
                  <Image
                    src={icons[index]}
                    alt={feature.title}
                    width={160}
                    height={160}
                    className="object-contain"
                    style={{ mixBlendMode: 'darken' }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
