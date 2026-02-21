'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import { translations, type Language } from '@/lib/i18n/translations';
import { CheckCircle, ArrowLeft, Phone } from 'lucide-react';

export default function AgneJuodytePage() {
  const [currentLang, setCurrentLang] = useState<Language>('lt');
  const t = translations[currentLang];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang') as Language;
    if (lang && (lang === 'lt' || lang === 'en')) {
      setCurrentLang(lang);
    }
  }, []);

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

  const content = {
    lt: {
      back: 'Grįžti prie specialistų',
      role: 'Vyriausioji kineziterapeutė',
      badge: 'Aukščiausios kvalifikacijos specialistė',
      bio: 'Agnė Juodytė – patyrusios kineziterapeutė, dirbanti su kūdikiais nuo pirmųjų dienų ir vaikais, turinčiais įvairių raidos, neurologinių ar judėjimo iššūkių. Jos individualizuotas požiūris ir didelis dėmesys kiekvienam pacientui užtikrina geriausius rezultatus.',
      experienceTitle: 'Patirtis ir kvalifikacijos',
      experience: [
        '15+ metų patirtis vaikų kineziterapijoje',
        'Tarptautinės sertifikacijos: DNS, NDT, Bobath',
        'Išplėstinė diagnostika ir gydymo technikų arsenalas',
        'Specializacija: sudėtingi raidos ir neurologiniai atvejai',
        'Nuolatinis profesinis tobulėjimas ir mokymai',
      ],
      servicesTitle: 'Teikiamos paslaugos',
      services: [
        'Kūdikių kineziterapija (0–12 mėn.)',
        'Vaikų kineziterapija (nuo 1 metų)',
        'Motorinės raidos įvertinimas',
        'Hipertonuso ir hipotonijos korekcija',
        'Kreivakaklystės (torticollis) gydymas',
        'Raidos vėlavimo korekcija',
      ],
      ctaTitle: 'Užsiregistruokite pas Agnę',
      ctaText: 'Pirminė konsultacija – išsami diagnostika ir gydymo strategija',
      ctaButton: 'Registruotis',
      callButton: 'Skambinti',
    },
    en: {
      back: 'Back to specialists',
      role: 'Chief Physiotherapist',
      badge: 'Highly qualified specialist',
      bio: 'Agnė Juodytė is an experienced physiotherapist working with infants from their first days and children with various developmental, neurological or movement challenges. Her individualized approach and great attention to each patient ensures the best results.',
      experienceTitle: 'Experience & Qualifications',
      experience: [
        '15+ years of experience in pediatric physiotherapy',
        'International certifications: DNS, NDT, Bobath',
        'Advanced diagnostics and treatment techniques',
        'Specialization: complex developmental and neurological cases',
        'Continuous professional development and training',
      ],
      servicesTitle: 'Services Provided',
      services: [
        'Infant physiotherapy (0–12 months)',
        'Children\'s physiotherapy (from 1 year)',
        'Motor development assessment',
        'Hypertonus and hypotonus correction',
        'Torticollis treatment',
        'Developmental delay correction',
      ],
      ctaTitle: 'Book an Appointment with Agnė',
      ctaText: 'Initial consultation – comprehensive diagnostics and treatment strategy',
      ctaButton: 'Book Now',
      callButton: 'Call',
    },
  };

  const c = content[currentLang];

  return (
    <div className="min-h-screen">
      <Header
        translations={t}
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
      />

      <main className="pt-20 md:pt-24">
        {/* Back link */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/#specialists"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#54B6FC] transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            {c.back}
          </Link>
        </div>

        {/* Hero section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Photo */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl max-w-sm mx-auto md:mx-0 w-full">
              <Image
                src="/specialists/agne.png"
                alt="Agnė Juodytė"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 10%' }}
                priority
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <span className="inline-block text-xs font-semibold text-[#54B6FC] bg-[#54B6FC]/10 px-3 py-1 rounded-full mb-4 w-fit">
                {c.badge}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Agnė Juodytė
              </h1>
              <p className="text-[#fb7825] font-semibold text-lg mb-6">{c.role}</p>
              <p className="text-gray-600 leading-relaxed mb-8">{c.bio}</p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/#registration"
                  className="inline-flex items-center justify-center bg-[#fb7825] hover:bg-[#e66f1f] text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-sm"
                >
                  {c.ctaButton}
                </Link>
                <a
                  href="tel:+37066699676"
                  className="inline-flex items-center justify-center gap-2 border border-[#54B6FC] text-[#54B6FC] hover:bg-[#54B6FC] hover:text-white px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {c.callButton}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Services */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Experience */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{c.experienceTitle}</h2>
                <ul className="space-y-4">
                  {c.experience.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#54B6FC] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{c.servicesTitle}</h2>
                <ul className="space-y-4">
                  {c.services.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#fb7825] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{c.ctaTitle}</h2>
            <p className="text-gray-600 mb-8">{c.ctaText}</p>
            <Link
              href="/#registration"
              className="inline-flex items-center bg-[#fb7825] hover:bg-[#e66f1f] text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-md"
            >
              {c.ctaButton}
            </Link>
          </div>
        </section>
      </main>

      <Footer translations={t} />
      <FloatingActionButtons currentLang={currentLang} />
    </div>
  );
}
