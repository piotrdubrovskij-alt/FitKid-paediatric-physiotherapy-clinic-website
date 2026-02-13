'use client';

import Image from 'next/image';
import Link from 'next/link';
import { type Translation } from '@/lib/i18n/translations';

interface SpecialistsProps {
  translations: Translation;
}

export default function Specialists({ translations }: SpecialistsProps) {
  const photos: Record<string, string> = {
    'Agnė Juodytė': '/specialists/agne.png',
    'Ksenija Persijanova': '/specialists/ksenija.png',
    'Ramunė Nemeikaitė': '/specialists/ramune.png',
  };

  const specialistLinks: Record<string, string | null> = {
    'Agnė Juodytė': '/specialists/agne-juodyte',
    'Ksenija Persijanova': '/specialists/ksenija-persijanova',
    'Ramunė Nemeikaitė': '/specialists/ramune-nemeikaite',
  };

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
          {translations.specialists.team.map((specialist) => {
            const hasPhoto = photos[specialist.name];
            const link = specialistLinks[specialist.name];
            
            const cardContent = (
              <div
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Photo or placeholder */}
                <div className="relative aspect-[3/4] bg-gradient-to-br from-[#54B6FC]/15 to-[#fb7825]/15 flex items-center justify-center overflow-hidden">
                  {hasPhoto ? (
                    <>
                      <Image
                        src={hasPhoto}
                        alt={specialist.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        style={{
                          objectPosition: 'center 10%'
                        }}
                        sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 90vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </>
                  ) : (
                    <div className="text-6xl font-bold text-[#54B6FC]/30">
                      {specialist.name.charAt(0)}
                    </div>
                  )}
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
            );

            return link ? (
              <Link key={specialist.name} href={link} className="block">
                {cardContent}
              </Link>
            ) : (
              <div key={specialist.name}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
