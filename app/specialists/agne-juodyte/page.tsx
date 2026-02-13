'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import { translations, type Language } from '@/lib/i18n/translations';
import { CheckCircle, GraduationCap, Award, Heart, Phone, Calendar } from 'lucide-react';

// Filtered reviews component
function AgneReviews({ reviews }: { reviews: any[] }) {
  const KEYWORDS = ["agnė", "agne", "agnės", "agnei"];
  
  function hasAgne(text = "") {
    const t = text.toLowerCase();
    return KEYWORDS.some(k => t.includes(k));
  }

  const agneReviews = reviews
    .filter(r => hasAgne(r.text))
    .slice(0, 6);

  if (agneReviews.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Atsiliepimai apie Agnę
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center">
          Žemiau rodomi Google atsiliepimai, kuriuose klientai mini Agnę.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {agneReviews.map((review, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{review.author_name}</h3>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AgneJuodytePage() {
  const [currentLang, setCurrentLang] = useState<Language>('lt');
  const [reviews, setReviews] = useState<any[]>([]);
  const t = translations[currentLang];

  // Read language from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang') as Language;
    if (lang && (lang === 'lt' || lang === 'en')) {
      setCurrentLang(lang);
    }
  }, []);

  // Fetch reviews
  useEffect(() => {
    fetch('/api/reviews')
      .then(res => res.json())
      .then(data => {
        if (data.reviews) {
          setReviews(data.reviews);
        }
      })
      .catch(err => console.error('Failed to load reviews:', err));
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
      commonCasesTitle: 'Kuo dažniausiai kreipiasi',
      commonCases: [
        'kūdikio asimetrija ir „mėgstama" pusė',
        'kreivakaklystė',
        'hipertonusas arba sumažėjęs tonusas',
        'motorinės raidos tempas ir judėjimo kokybė',
        'laikysenos, pėdų, eisenos ypatumai',
        'po traumų, operacijų, ilgalaikio imobilizavimo',
        'sudėtingesni atvejai, kai reikia nuoseklaus darbo ir aiškumo tėvams',
      ],
      methodsTitle: 'Metodai ir patirtis',
      methodsText: 'Vojta terapija taikoma pagal sertifikavimo programą ir klinikinę praktiką. DNS metodika padeda tiksliau vertinti judėjimą ir planuoti korekciją. Taip pat dėstau Vilniaus universitete kineziterapeutams.',
      firstVisitTitle: 'Pirmas vizitas',
      firstVisitText: 'Pirmo vizito metu įvertinu vaiko judėjimą, aptariame jūsų pastebėjimus ir tikslą. Po įvertinimo pateikiu aiškų planą, ką darome kabinete ir ką galima tęsti namuose.',
      ctaRegister: 'Užsiregistruoti vizitui',
      ctaCall: 'Skambinti',
    },
    en: {
      heroTitle: 'Agnė Juodytė',
      heroSubtitle: 'Pediatric Physiotherapist. Vojta Therapist. DNS Methodology.',
      introText: 'I work with infants from first days and children who need precise movement assessment and clear, practical plan for the family. It\'s important to me that parents understand what we do and why, and that recommendations are applicable in daily life.',
      commonCasesTitle: 'Most Common Reasons for Consultation',
      commonCases: [
        'infant asymmetry and "favorite" side',
        'torticollis',
        'hypertonia or decreased tone',
        'motor development pace and movement quality',
        'posture, feet, gait peculiarities',
        'after injuries, operations, long-term immobilization',
        'complex cases requiring consistent work and clarity for parents',
      ],
      methodsTitle: 'Methods and Experience',
      methodsText: 'Vojta therapy applied according to certification program and clinical practice. DNS methodology helps to assess movement more accurately and plan correction. I also teach at Vilnius University for physiotherapists.',
      firstVisitTitle: 'First Visit',
      firstVisitText: 'During first visit I assess child\'s movement, discuss your observations and goals. After assessment I provide clear plan of what we do in clinic and what can be continued at home.',
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
                <p className="text-lg text-gray-700 leading-relaxed">
                  {txt.introText}
                </p>
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
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              {txt.commonCasesTitle}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {txt.commonCases.map((caseText, idx) => (
                <div key={idx} className="flex items-start space-x-3 bg-white rounded-xl p-6 shadow-sm">
                  <CheckCircle className="w-6 h-6 text-[#54B6FC] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{caseText}</p>
                </div>
              ))}
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
        <AgneReviews reviews={reviews} />

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              {txt.ctaRegister}
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/registracija"
                className="inline-flex items-center space-x-2 bg-white hover:bg-gray-50 text-[#54B6FC] px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
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
