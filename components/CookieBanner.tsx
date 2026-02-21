'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { type Language } from '@/lib/i18n/translations';

interface CookieBannerProps {
  currentLang: Language;
}

export default function CookieBanner({ currentLang }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const text = {
    lt: {
      title: 'Mes naudojame slapukus',
      description: 'Naudojame slapukus, kad užtikrintume geresnę patirtį mūsų svetainėje. Būtini slapukai reikalingi svetainės veikimui, o analitiniai ir rinkodaros slapukai padeda mums tobulinti paslaugas.',
      acceptAll: 'Priimti visus',
      acceptNecessary: 'Tik būtini',
      customize: 'Pasirinkti',
      learnMore: 'Sužinoti daugiau',
      necessary: 'Būtini slapukai',
      necessaryDesc: 'Reikalingi svetainės veikimui',
      functional: 'Funkciniai slapukai',
      functionalDesc: 'Prisimena jūsų pasirinkimus',
      analytics: 'Analitiniai slapukai',
      analyticsDesc: 'Padeda tobulinti svetainę',
      marketing: 'Rinkodaros slapukai',
      marketingDesc: 'Rodo aktualią reklamą',
      savePreferences: 'Išsaugoti nustatymus',
    },
    en: {
      title: 'We use cookies',
      description: 'We use cookies to ensure a better experience on our website. Essential cookies are required for the website to function, while analytical and marketing cookies help us improve our services.',
      acceptAll: 'Accept All',
      acceptNecessary: 'Necessary Only',
      customize: 'Customize',
      learnMore: 'Learn More',
      necessary: 'Necessary cookies',
      necessaryDesc: 'Required for website functionality',
      functional: 'Functional cookies',
      functionalDesc: 'Remember your preferences',
      analytics: 'Analytical cookies',
      analyticsDesc: 'Help improve the website',
      marketing: 'Marketing cookies',
      marketingDesc: 'Show relevant advertising',
      savePreferences: 'Save Preferences',
    },
  };

  const t = text[currentLang];

  return (
    <>
      {/* Overlay */}
      {isVisible && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity" />
      )}

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-300 ease-in-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
          <div className="bg-white rounded-t-2xl shadow-2xl border-t-4 border-[#54B6FC]">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 md:p-8">
              {/* Main content */}
              {!showDetails ? (
                <>
                  {/* Cookie icon and title */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#54B6FC]/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🍪</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{t.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {t.description}
                      </p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-6">
                    <button
                      onClick={handleAcceptAll}
                      className="flex-1 bg-[#54B6FC] hover:bg-[#4a9fe0] text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-sm hover:shadow-md"
                    >
                      {t.acceptAll}
                    </button>
                    <button
                      onClick={handleAcceptNecessary}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-full font-semibold transition-colors"
                    >
                      {t.acceptNecessary}
                    </button>
                    <button
                      onClick={() => setShowDetails(true)}
                      className="flex-1 border-2 border-[#54B6FC] text-[#54B6FC] hover:bg-[#54B6FC]/5 px-6 py-3 rounded-full font-semibold transition-colors"
                    >
                      {t.customize}
                    </button>
                  </div>

                  {/* Learn more link */}
                  <div className="mt-4 text-center">
                    <Link
                      href={currentLang === 'lt' ? '/cookies' : '/cookies?lang=en'}
                      className="text-sm text-[#54B6FC] hover:underline"
                    >
                      {t.learnMore} →
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  {/* Detailed preferences */}
                  <h3 className="text-xl font-bold text-gray-900 mb-6">{t.customize}</h3>

                  <div className="space-y-4 mb-6">
                    {/* Necessary cookies - always enabled */}
                    <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{t.necessary}</h4>
                        <p className="text-sm text-gray-600">{t.necessaryDesc}</p>
                      </div>
                      <div className="ml-4">
                        <div className="w-12 h-6 bg-[#54B6FC] rounded-full relative">
                          <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                        </div>
                        <span className="text-xs text-gray-500 mt-1 block">{currentLang === 'lt' ? 'Visada įjungta' : 'Always on'}</span>
                      </div>
                    </div>

                    {/* Functional cookies */}
                    <div className="flex items-start justify-between p-4 bg-white border border-gray-200 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{t.functional}</h4>
                        <p className="text-sm text-gray-600">{t.functionalDesc}</p>
                      </div>
                      <label className="ml-4 flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="relative w-12 h-6 bg-gray-300 peer-checked:bg-[#54B6FC] rounded-full peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
                      </label>
                    </div>

                    {/* Analytics cookies */}
                    <div className="flex items-start justify-between p-4 bg-white border border-gray-200 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{t.analytics}</h4>
                        <p className="text-sm text-gray-600">{t.analyticsDesc}</p>
                      </div>
                      <label className="ml-4 flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="relative w-12 h-6 bg-gray-300 peer-checked:bg-[#54B6FC] rounded-full peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
                      </label>
                    </div>

                    {/* Marketing cookies */}
                    <div className="flex items-start justify-between p-4 bg-white border border-gray-200 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{t.marketing}</h4>
                        <p className="text-sm text-gray-600">{t.marketingDesc}</p>
                      </div>
                      <label className="ml-4 flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="relative w-12 h-6 bg-gray-300 peer-checked:bg-[#54B6FC] rounded-full peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
                      </label>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleAcceptAll}
                      className="flex-1 bg-[#54B6FC] hover:bg-[#4a9fe0] text-white px-6 py-3 rounded-full font-semibold transition-colors"
                    >
                      {t.savePreferences}
                    </button>
                    <button
                      onClick={() => setShowDetails(false)}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-full font-semibold transition-colors"
                    >
                      {currentLang === 'lt' ? 'Atgal' : 'Back'}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
