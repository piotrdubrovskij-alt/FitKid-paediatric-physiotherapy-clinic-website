'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import { translations, type Language } from '@/lib/i18n/translations';
import { CheckCircle, Award, Phone, Calendar } from 'lucide-react';

// Static reviews component for Ramunė
function RamuneReviews() {
  const staticReviews = [
    {
      author_name: "Julija Gudaitė",
      rating: 5,
      text: "Lankėmės su metukų amžiaus sūnumi masažuose pas Ramunę Nemeikaitę, kurią rekomendavo kineziterapeutė. Patirtis pati geriausia, Ramunė darė viską (linksmino, kalbino, keitė erdves), kad tik galėtų atlikti masažą tokiam įnoringam klientui. Vaikas greit atsipalaidavo ir prisileido Ramunę, kas su nepažįstamais žmonėmis būna itin retai. Pačios geriausios rekomendacijos! Pati klinika taip paliko labai gerą įspūdį. :)"
    },
    {
      author_name: "Kristina Jodenytė",
      rating: 5,
      text: "Norime nuoširdžiai padėkoti gydytojai Ramunei už profesionalumą, rūpestingumą ir šilumą, kurią parodė mūsų keturių mėnesių kūdikiui masažų metu. Jautėsi, kad gydytoja turi daug patirties dirbant su mažaisiais, o jos švelnus bendravimas ir ramybė suteikė pasitikėjimo ne tik vaikui, bet ir mums, tėvams. Masažo metu kūdikis jautėsi ramus ir atsipalaidavęs, o po kelių seansų pastebėjome teigiamus pokyčius jo raumenų tonuse ir bendrajame vystymesi. Džiaugiamės atradę tokią nuoširdžią ir atsidavusią specialistę. Rekomenduojame visiems tėveliams, ieškantiems tikro profesionalo savo vaikui!"
    },
    {
      author_name: "Evelina Čatrauskienė",
      rating: 5,
      text: "Nuostabi vieta, kur jaučiamės kaip namuose. Masažistė Ramunė ir Kinezeterapeutė Ksenija yra tiesiog turbo komanda! Su tokia meile, rūpesčiu kalbina, užsiima/masažuoja mažylį, kad užsiėmimai pralekia su geriausiomis emocijomis bei daug šypsenų. Visiems tėveliams nuoširdžiai rekomenduoju bei siunčiu didžiausias padėkas!"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Atsiliepimai apie Ramunę
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
            className="inline-flex items-center space-x-2 bg-[#fb7825] hover:bg-[#e66915] text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
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

export default function RamuneNemeikaitePage() {
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
      heroTitle: 'Ramunė Nemeikaitė',
      heroSubtitle: 'Vaikų ir kūdikių masažo specialistė.',
      introTitle: 'Trumpai',
      introText: 'Ramunė dirba su kūdikiais ir vaikais, taikydama gydomąjį masažą pagal vaiko poreikius. Ji taip pat dirba Vilniaus Santaros klinikose, kur nuolat gilina praktinius įgūdžius ir žinias.',
      licenseTitle: 'Gydomojo masažo specialisto licencija',
      license: 'ASL-10641',
      languagesTitle: 'Kalba šiomis kalbomis',
      languages: ['Lietuvių', 'Anglų', 'Rusų'],
      whenToContactTitle: 'Kada verta kreiptis',
      infantProblemsTitle: 'Kūdikių problemos',
      infantProblems: [
        'Raumenų įtampa hipertonuso požymiai',
        'Sumažėjęs raumenų tonusas hipotonijos požymiai',
        'Neramumas ir sunkiau nusiraminantis kūdikis',
        'Jautrumas prisilietimui sunku atsipalaiduoti',
      ],
      childrenProblemsTitle: 'Vaikų problemos',
      childrenProblems: [
        'Raumenų įtampa ir laikysenos ypatumai',
        'Skausmai augimo laikotarpiu po krūvio',
        'Sukaustytas kūnas mažiau judesio laisvumo',
        'Papildoma pagalba šalia kineziterapijos',
      ],
      methodsTitle: 'Darbo kryptys',
      methodsText: 'Gydomasis masažas pritaikomas individualiai pagal vaiko amžių, būklę ir tikslą. Ramunė orientuojasi į švelnų, vaikui tinkamą tempą ir aiškų procedūros tikslą.',
      ctaRegister: 'Užsiregistruoti vizitui',
      ctaCall: 'Skambinti',
    },
    en: {
      heroTitle: 'Ramunė Nemeikaitė',
      heroSubtitle: 'Pediatric and Infant Massage Specialist.',
      introTitle: 'About',
      introText: 'Ramunė works with infants and children, applying therapeutic massage according to the child\'s needs. She also works at Vilnius Santaros clinics, where she continuously deepens her practical skills and knowledge.',
      licenseTitle: 'Therapeutic Massage Specialist License',
      license: 'ASL-10641',
      languagesTitle: 'Languages',
      languages: ['Lithuanian', 'English', 'Russian'],
      whenToContactTitle: 'When to Contact',
      infantProblemsTitle: 'Infant Problems',
      infantProblems: [
        'Muscle tension hypertonia signs',
        'Decreased muscle tone hypotonia signs',
        'Restlessness and difficulty calming down',
        'Touch sensitivity difficulty relaxing',
      ],
      childrenProblemsTitle: 'Children Problems',
      childrenProblems: [
        'Muscle tension and posture peculiarities',
        'Pain during growth period after exercise',
        'Tight body less freedom of movement',
        'Additional help alongside physiotherapy',
      ],
      methodsTitle: 'Work Methods',
      methodsText: 'Therapeutic massage is adapted individually according to the child\'s age, condition, and goal. Ramunė focuses on a gentle, child-appropriate pace and clear procedure goal.',
      ctaRegister: 'Book a Visit',
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
        <section className="relative bg-gradient-to-br from-[#fb7825]/10 to-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {txt.heroTitle}
                </h1>
                <p className="text-xl text-[#fb7825] font-semibold mb-6">
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
                <div className="mb-6 p-4 bg-gradient-to-r from-orange-50 to-blue-50 rounded-xl border-l-4 border-[#fb7825]">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Award className="w-5 h-5 text-[#fb7825] mr-2" />
                    {txt.licenseTitle}
                  </h3>
                  <p className="text-gray-700">{txt.license}</p>
                </div>

                {/* Languages */}
                <div className="p-4 bg-white rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    {txt.languagesTitle}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {txt.languages.map((lang, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-[#fb7825] to-[#e66915] text-white"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/specialists/ramune.png"
                    alt="Ramunė Nemeikaitė"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#54B6FC] rounded-full opacity-20 blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#fb7825] rounded-full opacity-20 blur-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* When to Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              {txt.whenToContactTitle}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Infant Problems */}
              <div>
                <h3 className="text-2xl font-bold text-[#fb7825] mb-6 text-center">
                  {txt.infantProblemsTitle}
                </h3>
                <div className="space-y-4">
                  {txt.infantProblems.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3 bg-white rounded-xl p-6 shadow-sm">
                      <CheckCircle className="w-6 h-6 text-[#fb7825] flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Children Problems */}
              <div>
                <h3 className="text-2xl font-bold text-[#54B6FC] mb-6 text-center">
                  {txt.childrenProblemsTitle}
                </h3>
                <div className="space-y-4">
                  {txt.childrenProblems.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3 bg-white rounded-xl p-6 shadow-sm">
                      <CheckCircle className="w-6 h-6 text-[#54B6FC] flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Methods Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-[#54B6FC] mr-3" />
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

        {/* Reviews Section */}
        <RamuneReviews />

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-[#fb7825] to-[#e66915]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              {txt.ctaRegister}
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/registracija"
                className="inline-flex items-center space-x-2 bg-white hover:bg-gray-50 text-[#fb7825] px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                <span>{txt.ctaRegister}</span>
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
