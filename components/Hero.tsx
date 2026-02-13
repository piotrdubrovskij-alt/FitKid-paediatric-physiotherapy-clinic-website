'use client';

import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { type Translation } from '@/lib/i18n/translations';

interface HeroProps {
  translations: Translation;
}

export default function Hero({ translations }: HeroProps) {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-gradient-to-br from-[#E8F5FE] via-white to-blue-50">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#54B6FC]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#fb7825]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Text content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#54B6FC]/20">
              <Sparkles className="w-4 h-4 text-[#54B6FC]" />
              <span className="text-sm font-semibold text-gray-700">
                {translations.hero.badge}
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {translations.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 leading-relaxed">
              {translations.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#registration"
                className="inline-flex items-center justify-center space-x-2 bg-[#fb7825] hover:bg-[#e66f1f] text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-[#fb7825]/25"
              >
                <span>{translations.nav.registration}</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full font-semibold transition-all border-2 border-gray-200"
              >
                <span>{translations.hero.cta}</span>
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-[#54B6FC]">500+</div>
                <div className="text-sm text-gray-600">{translations.hero.stats.families}</div>
              </div>
              <div className="h-12 w-px bg-gray-300" />
              <div>
                <div className="text-3xl font-bold text-[#54B6FC]">10+</div>
                <div className="text-sm text-gray-600">{translations.hero.stats.experience}</div>
              </div>
              <div className="h-12 w-px bg-gray-300" />
              <div>
                <div className="text-3xl font-bold text-[#54B6FC]">3</div>
                <div className="text-sm text-gray-600">{translations.hero.stats.specialists}</div>
              </div>
            </div>
          </div>

          {/* Right side: Image/Illustration */}
          <div className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#54B6FC] to-[#fb7825] p-1">
              <div className="relative w-full h-full bg-white rounded-[22px] overflow-hidden">
                {/* 
                  Hero video:
                  - put your file here: public/media/hero.mp4
                  - optional poster image: public/media/hero-poster.jpg (or hero-poster.svg)
                */}
                <Image
                  src="/media/hero-poster.svg"
                  alt="FitKid clinic"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 560px, 90vw"
                />
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  playsInline
                  loop
                  preload="metadata"
                  poster="/media/hero-poster.svg"
                >
                  <source src="/media/hero.mp4" type="video/mp4" />
                </video>

                {/* Readability overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/10 to-transparent" />

                {/* Small label (optional) */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-900">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#54B6FC]" />
                    FitKid
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{translations.hero.cards.licensed}</div>
                  <div className="text-xs text-gray-500">{translations.hero.cards.specialistsLabel}</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">4.9/5</div>
                  <div className="text-xs text-gray-500">{translations.hero.cards.reviews}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
