'use client';

import Image from 'next/image';
import { type Translation } from '@/lib/i18n/translations';

interface SpecialistsProps {
  translations: Translation;
}

export default function Specialists({ translations }: SpecialistsProps) {
  const photos = [
    '/specialists/agne.png',
    '/specialists/ksenija.png',
    '/specialists/ramune.png',
  ] as const;

  return (
    <section id="specialists" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {translations.specialists.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {translations.specialists.subtitle}
          </p>
        </div>

        {/* Specialists grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {translations.specialists.team.map((specialist, index) => (
            <div
              key={specialist.name}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Photo placeholder */}
              <div className="relative aspect-[3/4] bg-gradient-to-br from-[#54B6FC]/15 to-[#fb7825]/15 flex items-center justify-center overflow-hidden">
                <Image
                  src={photos[index] ?? '/specialists/placeholder.svg'}
                  alt={specialist.name}
                  fill
                  className="object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 90vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Photo upload hint */}
                <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs text-gray-500 bg-white/90 px-3 py-1 rounded-full">
                    {specialist.name}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {specialist.name}
                </h3>
                <div className="text-sm font-semibold text-[#54B6FC] mb-4">
                  {specialist.role}
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {specialist.bio}
                </p>
              </div>

              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#54B6FC]/10 to-[#fb7825]/10 rounded-full blur-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
