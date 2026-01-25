'use client';

import { Users, Target, Award, Clock, Building2, Heart } from 'lucide-react';
import { type Translation } from '@/lib/i18n/translations';

interface AboutProps {
  translations: Translation;
}

const icons = [Users, Target, Award, Clock, Building2, Heart];

export default function About({ translations }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {translations.about.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {translations.about.subtitle}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {translations.about.features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-[#54B6FC]/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-[#54B6FC]" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#registration"
            className="inline-flex items-center space-x-2 bg-[#fb7825] hover:bg-[#e66f1f] text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
          >
            <span>Užsiregistruokite konsultacijai</span>
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
