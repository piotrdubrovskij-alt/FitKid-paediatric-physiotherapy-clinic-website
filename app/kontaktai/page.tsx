'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { translations, type Language } from '@/lib/i18n/translations';
import { Phone, Mail, MapPin, Clock, ArrowRight, Navigation } from 'lucide-react';

export default function KontaktaiPage() {
  const [currentLang, setCurrentLang] = useState<Language>('lt');
  const [showMap, setShowMap] = useState(false);
  const t = translations[currentLang];

  const pageText = {
    lt: {
      title: 'Kontaktai',
      subtitle: 'Susisiekite su mumis – atsakysime į visus klausimus',
      contactInfo: 'Kontaktinė informacija',
      address: 'Aludarių g. 7–43, Vilnius',
      phone: '+370 666 99676',
      email: 'info@fitkid.lt',
      workingHours: 'Darbo laikas',
      hours: 'Pirmadienis – Penktadienis: 09:00 – 18:00',
      hoursNote: 'Vizitai tik susitarus laiku',
      howToGet: 'Kaip atvykti ir kur parkuoti',
      entrance: 'Įėjimas iš Aludarių g. pusės',
      clinicLocation: 'Klinika pirmame aukšte, yra atskiras įėjimas',
      tip: 'Jei turite klausimų kaip mus rasti – skambinkite +370 666 99676.',
      byCar: '🚗 Automobiliu / taksi',
      byCarDesc: 'Galima privažiuoti beveik iki durų. Parkavimo vietų šalia klinikos gali nebūti, todėl rekomenduojame atvykti 5–10 min anksčiau. Aplink – raudona zona (mokamas parkavimas gatvėje ir kiemuose). Nemokamo parkavimo ar priskirtų vietų prie klinikos nėra.',
      parkingLink: 'Stovėjimo aikštelė',
      parkingDesc: 'Apie 450 m pėsčiomis, orientyras: Pamėnkalnio g.',
      parkingLinkUrl: 'https://maps.app.goo.gl/gsrYMXsJ5xZkMqpd9',
      byBus: '🚌 Viešasis transportas',
      busStop: 'Bližiausia stotelė: Pamėnkalnio – približno 230 m pėsčiomis.',
      buses: 'Autobusai: 11, 21, 116, 123, N7',
      trolleybuses: 'Troleibusai: 1, 3, 7',
      showStop: 'Rodyti stotelę žemėlapyje',
      showMap: 'Rodyti žemėlapį',
      ctaRegister: 'Užsiregistruoti vizitui',
      ctaCall: 'Paskambinti',
    },
    en: {
      title: 'Contacts',
      subtitle: 'Contact us – we will answer all your questions',
      contactInfo: 'Contact Information',
      address: 'Aludarių g. 7–43, Vilnius',
      phone: '+370 666 99676',
      email: 'info@fitkid.lt',
      workingHours: 'Working Hours',
      hours: 'Monday – Friday: 09:00 – 18:00',
      hoursNote: 'By appointment only',
      howToGet: 'How to get here and where to park',
      entrance: 'Entrance from Aludarių g.',
      clinicLocation: 'Clinic on the first floor, separate entrance',
      tip: 'If you have questions about finding us – call +370 666 99676.',
      byCar: '🚗 By car / taxi',
      byCarDesc: 'You can drive almost to the door. Parking near the clinic may not be available, so we recommend arriving 5–10 min early. Around – red zone (paid parking on the street and courtyards). No free parking or assigned spaces near the clinic.',
      parkingLink: 'Parking lot',
      parkingDesc: 'About 450 m on foot, landmark: Pamėnkalnio g.',
      parkingLinkUrl: 'https://maps.app.goo.gl/gsrYMXsJ5xZkMqpd9',
      byBus: '🚌 Public transport',
      busStop: 'Nearest stop: Pamėnkalnio – approximately 230 m on foot.',
      buses: 'Buses: 11, 21, 116, 123, N7',
      trolleybuses: 'Trolleybuses: 1, 3, 7',
      showStop: 'Show stop on map',
      showMap: 'Show map',
      ctaRegister: 'Register for visit',
      ctaCall: 'Call',
    },
  };

  const txt = pageText[currentLang];

  return (
    <div className="min-h-screen bg-white">
      <Header
        translations={t}
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
      />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0] py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {txt.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed">
              {txt.subtitle}
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info Card */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  {txt.contactInfo}
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Adresas</h3>
                      <p className="text-gray-700">{txt.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Telefonas</h3>
                      <a href={`tel:${txt.phone.replace(/\s/g, '')}`} className="text-[#54B6FC] hover:text-[#4a9fe0] font-semibold">
                        {txt.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">El. paštas</h3>
                      <a href={`mailto:${txt.email}`} className="text-[#54B6FC] hover:text-[#4a9fe0]">
                        {txt.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#fb7825] to-[#e66f1f] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{txt.workingHours}</h3>
                      <p className="text-gray-700">{txt.hours}</p>
                      <p className="text-sm text-gray-600 mt-1">{txt.hoursNote}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/registracija"
                      className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#54B6FC] to-[#4a9fe0] hover:from-[#4a9fe0] hover:to-[#54B6FC] text-white px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
                    >
                      <span>{txt.ctaRegister}</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <a
                      href={`tel:${txt.phone.replace(/\s/g, '')}`}
                      className="inline-flex items-center justify-center space-x-2 bg-white border-2 border-[#54B6FC] text-[#54B6FC] hover:bg-[#54B6FC] hover:text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg"
                    >
                      <Phone className="w-5 h-5" />
                      <span>{txt.ctaCall}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Card */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Mūsų vieta
                </h2>
                
                {!showMap ? (
                  <div className="space-y-4">
                    <div className="aspect-video bg-gradient-to-br from-[#54B6FC]/20 to-[#fb7825]/20 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                      <div className="text-center">
                        <MapPin className="w-16 h-16 text-[#54B6FC] mx-auto mb-4" />
                        <p className="text-gray-700 font-semibold mb-2">{txt.address}</p>
                        <button
                          onClick={() => setShowMap(true)}
                          className="inline-flex items-center space-x-2 text-[#54B6FC] hover:text-[#4a9fe0] font-semibold transition-colors"
                        >
                          <span>{txt.showMap}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-xl overflow-hidden shadow-lg border-2 border-gray-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2305.7557777777777!2d25.286!3d54.6857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd941a9bf6b5e5%3A0x1234567890abcdef!2sAludari%C5%B3%20g.%207-43%2C%20Vilnius!5e0!3m2!1slt!2slt!4v1234567890"
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* How to Get There */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              {txt.howToGet}
            </h2>

            <div className="space-y-8">
              {/* Entrance Info */}
              <div className="bg-gradient-to-br from-[#54B6FC]/10 to-[#fb7825]/5 rounded-2xl p-6 border-l-4 border-[#54B6FC]">
                <p className="text-gray-900 font-semibold mb-2">{txt.entrance}</p>
                <p className="text-gray-700 mb-2">{txt.clinicLocation}</p>
                <p className="text-sm text-gray-600">{txt.tip}</p>
              </div>

              {/* By Car */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <span>{txt.byCar}</span>
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {txt.byCarDesc}
                </p>
                <div className="bg-orange-50 rounded-xl p-4 border-l-4 border-[#fb7825]">
                  <p className="text-sm text-gray-700 mb-2">
                    <span className="font-semibold">{txt.parkingLink}:</span> {txt.parkingDesc}
                  </p>
                  <a
                    href={txt.parkingLinkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-[#fb7825] hover:text-[#e66f1f] font-semibold transition-colors"
                  >
                    <span>Rodyti žemėlapyje</span>
                    <Navigation className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* By Public Transport */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <span>{txt.byBus}</span>
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  {txt.busStop}
                </p>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-700">
                    <span className="font-semibold">{txt.buses}</span>
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">{txt.trolleybuses}</span>
                  </p>
                </div>
                <a
                  href="https://www.google.com/maps/search/Pamėnkalnio+stotelė+Vilnius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-[#54B6FC] hover:text-[#4a9fe0] font-semibold transition-colors"
                >
                  <span>{txt.showStop}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Turite klausimų?
            </h2>
            <p className="text-xl text-white/95 mb-10 max-w-2xl mx-auto">
              Susisiekite su mumis – atsakysime į visus klausimus ir padėsime pasirinkti tinkamiausią sprendimą.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/registracija"
                className="inline-flex items-center space-x-2 bg-white hover:bg-gray-50 text-[#54B6FC] px-10 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-xl text-lg"
              >
                <span>{txt.ctaRegister}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${txt.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur text-white border-2 border-white px-10 py-4 rounded-full font-semibold transition-all text-lg"
              >
                <Phone className="w-5 h-5" />
                <span>{txt.phone}</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer translations={t} />
    </div>
  );
}
