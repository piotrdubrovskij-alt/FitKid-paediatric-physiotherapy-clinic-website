'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Check, ArrowLeft, Phone, Calendar } from 'lucide-react';
import { translations, type Language } from '@/lib/i18n/translations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import FloatingActionButtons from '@/components/FloatingActionButtons';

export default function KainosPage() {
  const [currentLang, setCurrentLang] = useState<Language>('lt');
  const t = translations[currentLang];

  // Read language from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang') as Language;
    if (lang && (lang === 'lt' || lang === 'en')) {
      setCurrentLang(lang);
    }
  }, []);

  // Handle language change and update URL
  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    const url = new URL(window.location.href);
    if (lang === 'lt') {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', lang);
    }
    window.history.pushState({}, '', url.toString());
  };

  // Kūdikiams services
  const kudikiamsServices = [
    {
      ...t.pricingPage.services.consultation,
      duration: '60 min',
      price: '50',
    },
    {
      ...t.pricingPage.services.physiotherapy,
      duration: '45 min',
      price: '45',
      packagePrice: '200',
      packageSessions: '5',
      savings: '25',
    },
    {
      ...t.pricingPage.services.hydrotherapy,
      duration: '45 min',
      price: '40',
      packagePrice: '185',
      packageSessions: '5',
      savings: '15',
    },
    {
      ...t.pricingPage.services.massage,
      duration: '30 min',
      price: '35',
      packagePrice: '150',
      packageSessions: '5',
      savings: '25',
    },
  ];

  // Vaikams services
  const vaikamsServices = [
    {
      ...t.pricingPage.services.consultation,
      duration: '60 min',
      price: '50',
    },
    {
      ...t.pricingPage.services.childPhysiotherapy,
      duration: '45 min',
      price: '45',
      packagePrice: '200',
      packageSessions: '5',
      savings: '25',
    },
    {
      ...t.pricingPage.services.childMassage,
      duration: '30 min',
      price: '35',
      packagePrice: '150',
      packageSessions: '5',
      savings: '25',
    },
  ];

  const renderServiceCard = (item: any, colorScheme: 'blue' | 'orange') => (
    <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#fb7825] hover:shadow-xl transition-all duration-300">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {item.name}
        </h3>
        <p className="text-sm text-gray-600 mb-2">
          {item.description}
        </p>
        <div className={`inline-flex items-center px-3 py-1 ${colorScheme === 'blue' ? 'bg-blue-50 text-[#54B6FC]' : 'bg-orange-50 text-[#fb7825]'} text-sm font-medium rounded-full`}>
          {item.duration}
        </div>
      </div>

      <div className="mb-4 pb-4 border-b border-gray-200">
        <div className="flex items-baseline space-x-2">
          <span className="text-3xl font-bold text-gray-900">€{item.price}</span>
          <span className="text-gray-600">{t.pricingPage.perVisit}</span>
        </div>
      </div>

      {item.packagePrice && (
        <div className="mb-4 pb-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="flex items-baseline space-x-2">
                <span className={`text-2xl font-bold ${colorScheme === 'blue' ? 'text-[#54B6FC]' : 'text-[#fb7825]'}`}>€{item.packagePrice}</span>
                <span className="text-sm text-gray-600">/ {item.packageSessions} {t.pricingPage.sessions}</span>
              </div>
              <div className="text-sm text-gray-500 mt-1">
                €{(parseInt(item.packagePrice) / parseInt(item.packageSessions!)).toFixed(0)} {t.pricingPage.perVisitShort}
              </div>
            </div>
            <div className="bg-green-100 text-green-700 px-2 py-1 rounded-lg text-xs font-semibold">
              -€{item.savings}
            </div>
          </div>
        </div>
      )}

      <div className="space-y-2">
        {item.features.map((feature: string, featureIndex: number) => (
          <div key={featureIndex} className="flex items-start space-x-2">
            <Check className={`w-5 h-5 ${colorScheme === 'blue' ? 'text-[#54B6FC]' : 'text-[#fb7825]'} flex-shrink-0 mt-0.5`} />
            <span className="text-sm text-gray-600">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Header
        translations={t}
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
      />

      <main className="pt-20 md:pt-24">
        <section className="bg-gradient-to-br from-[#fb7825] to-[#e66f1f] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Link
                href={currentLang === 'lt' ? '/' : `/?lang=${currentLang}`}
                className="inline-flex items-center space-x-2 text-white/90 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>{t.pricingPage.backHome}</span>
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {t.pricingPage.title}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                {t.pricingPage.subtitle}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Benefits Banner */}
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-6 md:p-8 mb-12">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-[#54B6FC] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t.pricingPage.benefits.packageTitle}</h3>
                    <p className="text-sm text-gray-600">{t.pricingPage.benefits.packageDescription}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-[#fb7825] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t.pricingPage.benefits.scheduleTitle}</h3>
                    <p className="text-sm text-gray-600">{t.pricingPage.benefits.scheduleDescription}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-[#54B6FC] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t.pricingPage.benefits.consultationTitle}</h3>
                    <p className="text-sm text-gray-600">{t.pricingPage.benefits.consultationDescription}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kūdikiams Section */}
            <div className="mb-16">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/30 rounded-3xl p-8 md:p-10 border border-blue-200">
                <div className="text-center mb-8">
                  <span className="text-5xl mb-3 block">👶</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#54B6FC]">
                    {t.pricingPage.infantsTitle}
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {kudikiamsServices.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      {renderServiceCard(item, 'blue')}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vaikams Section */}
            <div className="mb-16">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100/30 rounded-3xl p-8 md:p-10 border border-orange-200">
                <div className="text-center mb-8">
                  <span className="text-5xl mb-3 block">🧒</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#fb7825]">
                    {t.pricingPage.childrenTitle}
                  </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {vaikamsServices.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      {renderServiceCard(item, 'orange')}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Premium Specialist Section - Agnė Juodytė */}
            <div className="mb-16">
              <div className="bg-gradient-to-br from-[#54B6FC] to-[#3da0f0] rounded-3xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24" />
                
                <div className="relative">
                  <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                    <span className="text-2xl">⭐</span>
                    <span className="text-white font-semibold">{t.pricingPage.premium.badge}</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {t.pricingPage.premium.name}
                      </h2>
                      <p className="text-xl text-white/90 mb-6">
                        {t.pricingPage.premium.subtitle}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        {t.pricingPage.premium.experience.map((item, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <Check className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                            <span className="text-white/90">{item}</span>
                          </div>
                        ))}
                      </div>

                      <p className="text-sm text-white/80 italic">
                        {t.pricingPage.premium.note}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white rounded-2xl p-6 shadow-xl">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">
                              {t.pricingPage.premium.consultationName}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {t.pricingPage.premium.consultationDescription}
                            </p>
                          </div>
                          <div className="bg-blue-50 px-3 py-1 rounded-full text-sm font-medium text-[#54B6FC]">
                            60 min
                          </div>
                        </div>
                        <div className="flex items-baseline space-x-2">
                          <span className="text-4xl font-bold text-gray-900">€80</span>
                          <span className="text-gray-600">{t.pricingPage.perVisit}</span>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl p-6 shadow-xl">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">
                              {t.pricingPage.premium.physiotherapyName}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {t.pricingPage.premium.physiotherapyDescription}
                            </p>
                          </div>
                          <div className="bg-blue-50 px-3 py-1 rounded-full text-sm font-medium text-[#54B6FC]">
                            45 min
                          </div>
                        </div>
                        <div className="flex items-baseline space-x-2">
                          <span className="text-4xl font-bold text-gray-900">€60</span>
                          <span className="text-gray-600">{t.pricingPage.perVisit}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t.pricingPage.payment.title}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-[#54B6FC]" />
                    <span>{t.pricingPage.payment.cash}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-[#54B6FC]" />
                    <span>{t.pricingPage.payment.card}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-[#54B6FC]" />
                    <span>{t.pricingPage.payment.transfer}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t.pricingPage.important.title}
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#fb7825] font-bold">•</span>
                    <span>{t.pricingPage.important.note1}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#fb7825] font-bold">•</span>
                    <span>{t.pricingPage.important.note2}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#fb7825] font-bold">•</span>
                    <span>{t.pricingPage.important.note3}</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer translations={t} />
      <FloatingActionButtons currentLang={currentLang} />
      <CookieBanner currentLang={currentLang} />
    </>
  );
}