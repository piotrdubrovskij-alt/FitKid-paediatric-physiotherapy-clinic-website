'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { type Language, type Translation } from '@/lib/i18n/translations';

interface HeaderProps {
  translations: Translation;
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function Header({ translations, currentLang, onLanguageChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: translations.nav.services, href: '#services' },
    { name: translations.nav.treatments, href: '#treatments' },
    { name: translations.nav.prices, href: '/kainos' },
    { name: translations.nav.contacts, href: '#contacts' },
  ];

  const languages: Language[] = ['lt', 'en'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-32 h-9 md:w-44 md:h-12 transition-transform group-hover:scale-105">
              <Image
                src="/fitkid-logo.png"
                alt="FitKid Klinika"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#54B6FC] transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side: Phone + CTA + Language */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Phone number (desktop) */}
            <a
              href="tel:+37066699676"
              className="hidden lg:flex items-center space-x-2 text-gray-700 hover:text-[#54B6FC] transition-colors"
            >
              <Phone className="w-5 h-5 text-[#54B6FC]" />
              <span className="font-semibold">066 699 676</span>
            </a>

            {/* CTA Button */}
            <Link
              href="#registration"
              className="hidden md:flex items-center space-x-2 bg-[#fb7825] hover:bg-[#e66f1f] text-white px-6 py-2.5 rounded-full font-semibold transition-colors shadow-sm hover:shadow-md"
            >
              <span>Registracija vizitui</span>
            </Link>

            {/* Language Switcher - minimal */}
            <div className="hidden md:flex items-center space-x-1 text-sm">
              {languages.map((lang, index) => (
                <button
                  key={lang}
                  onClick={() => onLanguageChange(lang)}
                  className={`transition-colors ${
                    currentLang === lang
                      ? 'text-[#54B6FC] font-semibold'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {index > 0 && <span className="text-gray-300 mx-1">|</span>}
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="px-4 py-4 space-y-3">
            {/* Phone number (mobile) - prominent */}
            <a
              href="tel:+37066699676"
              className="flex items-center justify-center space-x-2 px-4 py-3 text-white bg-[#54B6FC] hover:bg-[#4a9fe0] rounded-lg transition-colors font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="w-5 h-5" />
              <span>066 699 676</span>
            </a>

            {/* Menu items */}
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {item.name}
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              href="#registration"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center space-x-2 bg-[#fb7825] text-white px-6 py-3 rounded-full font-semibold w-full"
            >
              <span>{translations.nav.registration}</span>
            </Link>

            {/* Language switcher (mobile) - minimal */}
            <div className="flex items-center justify-center space-x-3 pt-2 text-sm">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    onLanguageChange(lang);
                    setIsMenuOpen(false);
                  }}
                  className={`transition-colors ${
                    currentLang === lang
                      ? 'text-[#54B6FC] font-semibold'
                      : 'text-gray-400'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
