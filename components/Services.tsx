'use client';

import Image from 'next/image';
import Link from 'next/link';
import { type Translation } from '@/lib/i18n/translations';

interface ServicesProps {
  translations: Translation;
}

// Mapping service slugs to image filenames
const serviceImages = {
  'kudikiu-kineziterapija': 'infant-physiotherapy.jpg',
  'kudikiu-masazai': 'infant-massage.jpg',
  'kudikiu-plukdymas': 'infant-swimming.jpg',
  'vaiku-kineziterapija': 'child-physiotherapy.jpg',
  'vaiku-masazai': 'child-massage.jpg',
  'vojta-terapija': 'vojta-therapy.jpg',
};

export default function Services({ translations }: ServicesProps) {
  // Разделяем услуги на группы
  const infantServices = translations.services.items.filter(
    (item) => item.ageGroup === 'infant'
  );
  const childServices = translations.services.items.filter(
    (item) => item.ageGroup === 'child'
  );

  const renderServiceCard = (service: any, colorScheme: 'blue' | 'orange') => {
    const imageName = serviceImages[service.slug as keyof typeof serviceImages];
    
    // Индивидуальное позиционирование для каждого фото
    const imagePositions: Record<string, string> = {
      'kudikiu-kineziterapija': 'center 45%',
      'kudikiu-masazai': 'center 40%',
      'kudikiu-plukdymas': 'center 35%',
      'vaiku-kineziterapija': 'center 40%',
      'vaiku-masazai': 'center 45%',
      'vojta-terapija': 'center 55%',
    };
    
    // Цветовая схема для каждой группы
    const colors = {
      blue: {
        border: 'border-[#54B6FC]/30',
        hoverBorder: 'hover:border-[#54B6FC]',
        hoverShadow: 'hover:shadow-[#54B6FC]/20',
        link: 'text-[#54B6FC]',
        hoverLink: 'group-hover:text-[#54B6FC]',
        overlay: 'from-[#54B6FC]/5',
      },
      orange: {
        border: 'border-[#fb7825]/30',
        hoverBorder: 'hover:border-[#fb7825]',
        hoverShadow: 'hover:shadow-[#fb7825]/20',
        link: 'text-[#fb7825]',
        hoverLink: 'group-hover:text-[#fb7825]',
        overlay: 'from-[#fb7825]/5',
      },
    };

    const scheme = colors[colorScheme];

    return (
      <Link
        key={service.slug}
        href={`/${service.slug}`}
        className={`group relative bg-gradient-to-br from-white to-gray-50 border-2 ${scheme.border} ${scheme.hoverBorder} rounded-2xl overflow-hidden hover:shadow-xl ${scheme.hoverShadow} transition-all duration-300 hover:-translate-y-1 block cursor-pointer`}
      >
        {/* Service Image - больше места */}
        <div className="relative w-full h-72 bg-gray-100 overflow-hidden">
          <Image
            src={`/services/${imageName}`}
            alt={service.name}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
            style={{ 
              objectPosition: imagePositions[service.slug] || 'center 35%',
              filter: 'brightness(1.1) contrast(0.95)'
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Белый оверлей для единого светлого тона */}
          <div className="absolute inset-0 bg-white opacity-15 pointer-events-none" />
          {/* Цветной overlay на фото при hover */}
          <div className={`absolute inset-0 bg-gradient-to-t ${scheme.overlay} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />
        </div>

        {/* Content - компактнее */}
        <div className="p-5">
          {/* Service name */}
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {service.name}
          </h3>

          {/* Learn more link */}
          <div className={`inline-flex items-center ${scheme.link} ${scheme.hoverLink} font-medium transition-colors`}>
            Sužinoti daugiau
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
        </div>
      </Link>
    );
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {translations.services.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {translations.services.subtitle}
          </p>
        </div>

        {/* Kūdikiams */}
        <div className="mb-16">
          {/* Centered group header */}
          <div className="text-center mb-8">
            <div className="inline-flex flex-col items-center">
              <h3 className="text-3xl font-bold text-[#54B6FC]">Kūdikiams</h3>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infantServices.map((service) => renderServiceCard(service, 'blue'))}
          </div>
        </div>

        {/* Vaikams */}
        <div>
          {/* Centered group header */}
          <div className="text-center mb-8">
            <div className="inline-flex flex-col items-center">
              <h3 className="text-3xl font-bold text-[#fb7825]">Vaikams</h3>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {childServices.map((service) => renderServiceCard(service, 'orange'))}
          </div>
        </div>
      </div>
    </section>
  );
}
