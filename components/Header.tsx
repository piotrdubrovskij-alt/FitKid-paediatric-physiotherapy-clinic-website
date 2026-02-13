'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { type Language, type Translation } from '@/lib/i18n/translations';

interface HeaderProps {
  translations: Translation;
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function Header({ translations, currentLang, onLanguageChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Handle logo click - scroll to top on home page, navigate otherwise
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (pathname === '/') {
      // Already on home page - scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to home page
      const homeUrl = currentLang === 'lt' ? '/' : `/?lang=${currentLang}`;
      router.push(homeUrl);
    }
  };

  // Add language parameter to URLs if not Lithuanian
  const addLangParam = (href: string) => {
    if (currentLang === 'lt') return href;
    
    // Handle anchor links separately
    const hashIndex = href.indexOf('#');
    if (hashIndex !== -1) {
      const base = href.substring(0, hashIndex);
      const hash = href.substring(hashIndex);
      const separator = base.includes('?') ? '&' : '?';
      return `${base}${separator}lang=${currentLang}${hash}`;
    }
    
    const separator = href.includes('?') ? '&' : '?';
    return `${href}${separator}lang=${currentLang}`;
  };

  const navigation = [
    { name: translations.nav.services, href: addLangParam('/#services') },
    { name: translations.nav.treatments, href: addLangParam('/#treatments') },
    { name: translations.nav.specialists, href: addLangParam('/#specialists') },
    { name: translations.nav.prices, href: addLangParam('/kainos') },
    { name: translations.nav.contacts, href: addLangParam('/kontaktai') },
  ];

  const languages: Language[] = ['lt', 'en'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href={currentLang === 'lt' ? '/' : `/?lang=${currentLang}`}
            onClick={handleLogoClick}
            className="flex items-center group cursor-pointer"
          >
            <div className="relative w-32 h-9 md:w-44 md:h-12 transition-transform group-hover:scale-105">
              <Image
                src="/fitkid-logo.png"
                alt="FitKid Klinika"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </a>

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

          {/* Right side: Phone + CTA + Language + Menu */}
          <div className="flex items-center space-x-2 md:space-x-6">
            {/* Phone icon - mobile only */}
            <a
              href="tel:+37066699676"
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Call"
            >
              <Phone className="w-6 h-6 text-[#54B6FC]" />
            </a>

            {/* Phone number with text - desktop/tablet */}
            <a
              href="tel:+37066699676"
              className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-[#54B6FC] transition-colors"
            >
              <Phone className="w-5 h-5 text-[#54B6FC]" />
              <span className="font-semibold">+370 666 99676</span>
            </a>

            {/* CTA Button - desktop/tablet only */}
            <Link
              href={addLangParam('#registration')}
              className="hidden md:flex items-center bg-[#fb7825] hover:bg-[#e66f1f] text-white px-6 py-2.5 rounded-full font-semibold transition-colors shadow-sm hover:shadow-md"
            >
              <span>{translations.nav.registration}</span>
            </Link>

            {/* Language Switcher - desktop/tablet only */}
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
              aria-label="Menu"
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
            {/* Menu items */}
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}

            {/* Language switcher (mobile) */}
            <div className="flex items-center justify-center space-x-3 pt-4 border-t border-gray-100 mt-2">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    onLanguageChange(lang);
                    setIsMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentLang === lang
                      ? 'bg-[#54B6FC] text-white font-semibold'
                      : 'bg-gray-100 text-gray-600'
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
