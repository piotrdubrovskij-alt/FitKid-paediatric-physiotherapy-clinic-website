'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import { translations, type Language } from '@/lib/i18n/translations';
import { CheckCircle, Award, GraduationCap, Phone } from 'lucide-react';
import { trackSpecialistBookingClick } from '@/lib/gtag';

const LICENSE_NUMBER = 'ASL-12396';

export default function KarolinaCernychPage() {
  const [currentLang, setCurrentLang] = useState<Language>('lt');
  const t = translations[currentLang];

  // Read language from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang') as Language;
    if (lang && (lang === 'lt' || lang === 'en')) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
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

  const pageText = {
    lt: {
      heroTitle: 'Karolina Černych',
      heroSubtitle: 'Vaikų kineziterapeutė',
      introTitle: 'Apie mane',
      introText: 'Dirbu su kūdikiais ir vaikais, taip pat su vaikais, turinčiais genetinių sindromų, neurologinių ar raidos sutrikimų. Vertinu motorinę raidą, judesį ir laikyseną, o kineziterapijos planą derinu prie kiekvieno vaiko tempo kartu su tėvais.',
      licenseTitle: 'Kineziterapeutės licencija',
      commonCasesTitle: 'Su kuo dirbu',
      infantProblemsTitle: 'Kūdikiai',
      infantProblems: [
        'Motorinės raidos sunkumai',
        'Judesio ir raumenų tonuso ypatumai',
        'Neurologiniai ir raidos sutrikimai',
      ],
      childrenProblemsTitle: 'Vaikai',
      childrenProblems: [
        'Genetiniai sindromai ir neurologiniai sutrikimai',
        'Laikysenos ir stuburo problemos, įskaitant skoliozę',
        'Judesio ir koordinacijos sunkumai',
      ],
      methodsTitle: 'Kaip dirbu',
      methodsText: 'Tikiu, kad kiekvienas vaikas turi savo tempą ir galimybes. Kartu su tėvais aptariu vaiko poreikius ir parenku jam tinkamą judėjimo planą. Darbe taikau DNS pediatrijos ir skoliozės mokymuose įgytas žinias.',
      trainingTitle: 'Mokymai',
      training: ['DNS pediatrijos kursas, I dalis', 'DNS skoliozės mokymai'],
      ctaRegister: 'Vizitas pas Karoliną Černych',
      ctaBook: 'Skambinti dėl vizito: +370 666 99676',
    },
    en: {
      heroTitle: 'Karolina Černych',
      heroSubtitle: 'Paediatric physiotherapist',
      introTitle: 'About me',
      introText: 'I work with infants and children, including children with genetic syndromes, neurological conditions or developmental disorders. I assess motor development, movement and posture, and work with parents to adapt each physiotherapy plan to the child’s own pace.',
      licenseTitle: 'Physiotherapist licence',
      commonCasesTitle: 'Who I work with',
      infantProblemsTitle: 'Infants',
      infantProblems: [
        'Motor development difficulties',
        'Movement and muscle tone differences',
        'Neurological and developmental conditions',
      ],
      childrenProblemsTitle: 'Children',
      childrenProblems: [
        'Genetic syndromes and neurological conditions',
        'Posture and spine concerns, including scoliosis',
        'Movement and coordination difficulties',
      ],
      methodsTitle: 'How I work',
      methodsText: 'I believe every child has their own pace and abilities. I discuss the child’s needs with their parents and choose a movement plan that suits them. I apply what I learned in DNS paediatrics and scoliosis training.',
      trainingTitle: 'Training',
      training: ['DNS Paediatrics Course, Part I', 'DNS Scoliosis training'],
      ctaRegister: 'Visit with Karolina Černych',
      ctaBook: 'Call to book: +370 666 99676',
    },
  };

  const txt = pageText[currentLang];
  const bookingHref = 'tel:+37066699676';

  return (
    <div className="min-h-screen bg-white">
      <Header
        translations={t}
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
      />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#54B6FC]/10 to-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {txt.heroTitle}
                </h1>
                <p className="text-xl text-[#54B6FC] font-semibold mb-6">
                  {txt.heroSubtitle}
                </p>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                    {txt.introTitle}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {txt.introText}
                  </p>
                </div>

                {/* License */}
                {LICENSE_NUMBER && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl border-l-4 border-[#54B6FC]">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Award className="w-5 h-5 text-[#54B6FC] mr-2" />
                      {txt.licenseTitle}
                    </h3>
                    <p className="text-gray-700">{LICENSE_NUMBER}</p>
                  </div>
                )}

                {/* Registration CTA button */}
                <div className="mt-6">
                  <a
                    href={bookingHref}
                    className="inline-flex items-center justify-center w-full space-x-2 bg-[#fb7825] hover:bg-[#e66f1f] text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg text-lg"
                    onClick={() => trackSpecialistBookingClick('karolina', txt.ctaBook, window.location.pathname)}
                  >
                    <Phone className="w-5 h-5" />
                    <span>{txt.ctaBook}</span>
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/specialists/karolina.jpg"
                    alt="Karolina Černych"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#fb7825] rounded-full opacity-20 blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#54B6FC] rounded-full opacity-20 blur-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Common Cases Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              {txt.commonCasesTitle}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Infant Problems */}
              <div>
                <h3 className="text-2xl font-bold text-[#54B6FC] mb-6 text-center">
                  {txt.infantProblemsTitle}
                </h3>
                <div className="space-y-4">
                  {txt.infantProblems.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3 bg-white rounded-xl p-6 shadow-sm">
                      <CheckCircle className="w-6 h-6 text-[#54B6FC] flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Children Problems */}
              <div>
                <h3 className="text-2xl font-bold text-[#fb7825] mb-6 text-center">
                  {txt.childrenProblemsTitle}
                </h3>
                <div className="space-y-4">
                  {txt.childrenProblems.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3 bg-white rounded-xl p-6 shadow-sm">
                      <CheckCircle className="w-6 h-6 text-[#fb7825] flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 md:p-12">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-[#fb7825] mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {txt.methodsTitle}
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {txt.methodsText}
              </p>
            </div>

          </div>
        </section>

        {/* Training Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center mb-10">
              <GraduationCap className="w-8 h-8 text-[#54B6FC] mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
                {txt.trainingTitle}
              </h2>
            </div>

            <div className="space-y-4">
              {txt.training.map((item) => (
                <div key={item} className="bg-white rounded-xl p-6 shadow-sm flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-[#54B6FC] flex-shrink-0" />
                  <p className="font-semibold text-gray-900">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              {txt.ctaRegister}
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={bookingHref}
                className="inline-flex items-center space-x-2 bg-white hover:bg-gray-50 text-[#54B6FC] px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
                onClick={() => trackSpecialistBookingClick('karolina', txt.ctaBook, window.location.pathname)}
              >
                <Phone className="w-5 h-5" />
                <span>{txt.ctaBook}</span>
              </a>

            </div>
          </div>
        </section>
      </main>

      <Footer translations={t} />
      <FloatingActionButtons currentLang={currentLang} />
    </div>
  );
}
