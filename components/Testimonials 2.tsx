'use client';

import { Star, Quote } from 'lucide-react';
import { type Translation } from '@/lib/i18n/translations';

interface TestimonialsProps {
  translations: Translation;
}

export default function Testimonials({ translations }: TestimonialsProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {translations.testimonials.title}
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">5.0</span>
          </div>
          <p className="text-gray-600 mb-4">5.0/5 iš 45+ atsiliepimų Google</p>
          <a
            href="https://www.google.com/maps/place/FitKid/@54.6858121,25.2627827,17z/data=!3m1!4b1!4m6!3m5!1s0x46dd95a0079269cf:0x4ba0f9b6c2cee820!8m2!3d54.6858121!4d25.2653576!16s%2Fg%2F11kpn9khtc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-[#54B6FC] hover:text-[#fb7825] font-semibold transition-colors text-sm"
          >
            <span>Žiūrėti visus atsiliepimus Google Maps</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {translations.testimonials.items.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-[#54B6FC]/10 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-[#54B6FC]" />
              </div>

              {/* Stars */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-700 leading-relaxed mb-6 line-clamp-6">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4 border-t border-gray-100 pt-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#54B6FC] to-[#fb7825] rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">FitKid klientė</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-3 bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-sm font-medium text-gray-700">
              Patikrinti atsiliepimai iš Google
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
