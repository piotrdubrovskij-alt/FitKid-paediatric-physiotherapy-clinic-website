'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import { translations, type Language } from '@/lib/i18n/translations';
import { CheckCircle, GraduationCap, Award, Heart, Phone, Calendar } from 'lucide-react';

// Static reviews component for Agnė
function AgneReviews() {
  const staticReviews = [
    {
      author_name: "Jurgita R",
      rating: 5,
      text: "Dirbame su Agne, jos požiūris ir darbo supratimas labai mums patinka. Laikome ją pagrindine savo kineziterapeute ir be jos įžvalgų nepriimame jokių sprendimų, nes visiškai pasitikime jos aukšta kompetencija ir žiniomis! Agnės darbo dėka mano dukra sparčiai stiprėja, tobulėja ir juda pirmyn neskaitant cerebrinio paralyžiaus, epilepsijos bei regos sutrikimų. Nuoširdžiausias AČIŪ už geranoriškumą ir nuolatinę pagalbą ❤️."
    },
    {
      author_name: "Alexandr Levcuk",
      rating: 5,
      text: "Esu labai dekingas kineziterapeutei Agnei – mano 2 mėn. vaikas vis kreipdavo galva į vieną pusę, o po Vojta terapijos jau po savaitės pastebėjome didelį pagerėjimą. Agnė viską detaliai paaiškino, parodė, kaip daryti pratimus namuose."
    },
    {
      author_name: "Kotryna Gudžiūnaitė",
      rating: 5,
      text: "Lankėsi 7 mėn. kūdikis. Agnė moka puikiai užsiimti su vaikais. Pas kitas kineziterapeutes kūdikis visąlaik praverkdavo, pas Agnę neverkė. Nuodugniai apžiūrėjo, paaiškino, atsakė į klausimus. Rekomenduoju."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Atsiliepimai apie Agnę
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Klientų atsiliepimai iš Google Maps
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staticReviews.map((review, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{review.author_name}</h3>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < review.rating ? "text-yellow-400 text-lg" : "text-gray-300 text-lg"}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        {/* Link to Google Maps */}
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/place/FitKid/@54.6858121,25.2627827,17z/data=!3m1!4b1!4m6!3m5!1s0x46dd95a0079269cf:0x4ba0f9b6c2cee820!8m2!3d54.6858121!4d25.2653576!16s%2Fg%2F11kpn9khtc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#54B6FC] hover:bg-[#4a9fe0] text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span>Žiūrėti visus atsiliepimus Google Maps</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function AgneJuodytePage() {
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

  const pageText = {
    lt: {
      heroTitle: 'Agnė Juodytė',
      heroSubtitle: 'Vaikų kineziterapeutė. Vojta terapeutė. DNS metodika.',
      introText: 'Dirbu su kūdikiais nuo pirmųjų dienų ir vaikais, kuriems reikia tikslaus judėjimo įvertinimo bei aiškaus, praktiško plano šeimai. Man svarbu, kad tėvai suprastų, ką darome ir kodėl, o rekomendacijos būtų pritaikomos kasdienybėje.',
      licenseTitle: 'Licencijos',
      license: 'ASL-04763 Kineziterapeutas',
      languagesTitle: 'Kalba šiomis kalbomis',
      languages: ['Lietuvių', 'Anglų', 'Rusų'],
      commonCasesTitle: 'Kada verta kreiptis',
      infantProblemsTitle: 'Kūdikių problemos',
      infantProblems: [
        'Neurologinės būklės pagal gydytojo rekomendacijas',
        'Motorinės raidos sutrikimai ir judesio kontrolė',
        'Kūdikio asimetrija ir kreivakaklystė torticollis',
        'Raumenų tonuso ypatumai',
      ],
      childrenProblemsTitle: 'Vaikų problemos',
      childrenProblems: [
        'Laikysenos sutrikimai, skoliozė',
        'Lėtiniai nugaros ir sąnarių skausmai',
        'Traumos ir operacijų pasekmės',
        'Neurologinės būklės',
      ],
      methodsTitle: 'Metodai ir patirtis',
      methodsText: 'Vojta terapija taikoma pagal sertifikavimo programą ir klinikinę praktiką. DNS metodika padeda tiksliau vertinti judėjimą ir planuoti korekciją. Taip pat dėstau Vilniaus universitete kineziterapeutams.',
      firstVisitTitle: 'Pirmas vizitas',
      firstVisitText: 'Pirmo vizito metu įvertinu vaiko judėjimą, aptariame jūsų pastebėjimus ir tikslą. Po įvertinimo pateikiu aiškų planą, ką darome kabinete ir ką galima tęsti namuose.',
      ctaRegister: 'Užsiregistruoti vizitui',
      ctaBookAgne: 'Registruotis pas Agnę Juodytę',
      ctaCall: 'Skambinti',
    },
    en: {
      heroTitle: 'Agnė Juodytė',
      heroSubtitle: 'Pediatric Physiotherapist. Vojta Therapist. DNS Methodology.',
      introText: 'I work with infants from first days and children who need precise movement assessment and clear, practical plan for the family. It\'s important to me that parents understand what we do and why, and that recommendations are applicable in daily life.',
      licenseTitle: 'Licenses',
      license: 'ASL-04763 Physiotherapist',
      languagesTitle: 'Languages',
      languages: ['Lithuanian', 'English', 'Russian'],
      commonCasesTitle: 'When to Contact',
      infantProblemsTitle: 'Infant Problems',
      infantProblems: [
        'Neurological conditions as per doctor recommendations',
        'Motor development disorders and movement control',
        'Infant asymmetry and torticollis',
        'Muscle tone peculiarities',
      ],
      childrenProblemsTitle: 'Children Problems',
      childrenProblems: [
        'Postural disorders, scoliosis',
        'Chronic back and joint pain',
        'Trauma and surgery consequences',
        'Neurological conditions',
      ],
      methodsTitle: 'Methods and Experience',
      methodsText: 'Vojta therapy applied according to certification program and clinical practice. DNS methodology helps to assess movement more accurately and plan correction. I also teach at Vilnius University for physiotherapists.',
      firstVisitTitle: 'First Visit',
      firstVisitText: 'During first visit I assess child\'s movement, discuss your observations and goals. After assessment I provide clear plan of what we do in clinic and what can be continued at home.',
      ctaRegister: 'Book a Visit',
      ctaBookAgne: 'Book a Visit with Agnė Juodytė',
      ctaCall: 'Call',
    },
  };

  const txt = pageText[currentLang];

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
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {txt.introText}
                </p>

                {/* License */}
                <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl border-l-4 border-[#54B6FC]">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Award className="w-5 h-5 text-[#54B6FC] mr-2" />
                    {txt.licenseTitle}
                  </h3>
                  <p className="text-gray-700">{txt.license}</p>
                </div>

                {/* Languages */}
                <div className="p-4 bg-white rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <GraduationCap className="w-5 h-5 text-[#fb7825] mr-2" />
                    {txt.languagesTitle}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {txt.languages.map((lang, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-[#54B6FC] to-[#4a9fe0] text-white"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Registration CTA button */}
                <div className="mt-6">
                  <Link
                    href={`/registracija?specialist=agne${currentLang !== 'lt' ? `&lang=${currentLang}` : ''}`}
                    className="inline-flex items-center justify-center w-full space-x-2 bg-[#fb7825] hover:bg-[#e66f1f] text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg text-lg"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>{txt.ctaBookAgne}</span>
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/specialists/agne.png"
                    alt="Agnė Juodytė"
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

        {/* Methods & Experience Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* First Visit Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-l-4 border-[#54B6FC]">
              <div className="flex items-center mb-6">
                <Heart className="w-8 h-8 text-[#54B6FC] mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {txt.firstVisitTitle}
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {txt.firstVisitText}
              </p>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <AgneReviews />

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              {txt.ctaRegister}
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/registracija?specialist=agne${currentLang !== 'lt' ? `&lang=${currentLang}` : ''}`}
                className="inline-flex items-center space-x-2 bg-white hover:bg-gray-50 text-[#54B6FC] px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                <span>{txt.ctaBookAgne}</span>
              </Link>
              
              <a
                href="tel:+37066699676"
                className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur text-white border-2 border-white px-8 py-4 rounded-full font-semibold transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>{txt.ctaCall}: +370 666 99676</span>
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
