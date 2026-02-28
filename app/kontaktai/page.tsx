'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import { translations, type Language } from '@/lib/i18n/translations';
import { getStoredLanguage, setStoredLanguage } from '@/lib/languageStorage';
import { MapPin, Phone, Mail, Clock, Navigation, MessageCircle } from 'lucide-react';

export default function KontaktaiPage() {
  const [currentLang, setCurrentLang] = useState<Language>('lt');
  const [showMap, setShowMap] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const t = translations[currentLang];

  useEffect(() => {
    // Check URL first, then localStorage
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang') as Language;
    if (urlLang && (urlLang === 'lt' || urlLang === 'en')) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentLang(urlLang);
      setStoredLanguage(urlLang);
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentLang(getStoredLanguage());
    }
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    setStoredLanguage(lang);
    // Update URL
    const url = new URL(window.location.href);
    if (lang === 'lt') {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', lang);
    }
    window.history.pushState({}, '', url.toString());
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen">
      <Header
        translations={t}
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
      />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0] py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.contactsPage.title}
            </h1>
            <p className="text-xl text-white/90">
              {t.contactsPage.subtitle}
            </p>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a
                href="tel:+37066699676"
                className="group bg-gradient-to-br from-[#54B6FC]/5 to-white rounded-2xl p-6 border-2 border-gray-100 hover:border-[#54B6FC] transition-all hover:-translate-y-1 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{t.contactsPage.quickActions.call}</h3>
                <p className="text-sm text-gray-600">+370 666 99676</p>
              </a>

              <a
                href="https://wa.me/37066699676"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-green-500/5 to-white rounded-2xl p-6 border-2 border-gray-100 hover:border-green-500 transition-all hover:-translate-y-1 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{t.contactsPage.quickActions.whatsapp}</h3>
                <p className="text-sm text-gray-600">{t.contactsPage.quickActions.whatsappText}</p>
              </a>

              <a
                href="mailto:info@fitkid.lt"
                className="group bg-gradient-to-br from-[#fb7825]/5 to-white rounded-2xl p-6 border-2 border-gray-100 hover:border-[#fb7825] transition-all hover:-translate-y-1 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#fb7825] to-[#e66f1f] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{t.contactsPage.quickActions.email}</h3>
                <p className="text-sm text-gray-600">info@fitkid.lt</p>
              </a>

              <button
                onClick={() => {
                  setShowMap(true);
                  setTimeout(() => {
                    document.getElementById('map-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="group bg-gradient-to-br from-purple-500/5 to-white rounded-2xl p-6 border-2 border-gray-100 hover:border-purple-500 transition-all hover:-translate-y-1 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Navigation className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{t.contactsPage.quickActions.navigation}</h3>
                <p className="text-sm text-gray-600">{t.contactsPage.quickActions.navigationText}</p>
              </button>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left: Contact Info */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">{t.contactsPage.contactInfo.title}</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-[#54B6FC]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-[#54B6FC]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-500 mb-1">{t.contactsPage.contactInfo.address}</h3>
                        <p className="text-gray-900 font-medium">Aludarių g. 7–43</p>
                        <p className="text-gray-900 font-medium">Vilnius, 01113</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-green-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-500 mb-1">{t.contactsPage.contactInfo.phone}</h3>
                        <a href="tel:+37066699676" className="text-gray-900 font-medium hover:text-[#54B6FC] transition-colors">
                          066 699 676
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-red-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-500 mb-1">{t.contactsPage.contactInfo.emailLabel}</h3>
                        <a href="mailto:info@fitkid.lt" className="text-gray-900 font-medium hover:text-[#54B6FC] transition-colors">
                          info@fitkid.lt
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-purple-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{t.contactsPage.workingHours.title}</h2>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">{t.contactsPage.workingHours.monday}</span>
                      <span className="font-semibold text-[#54B6FC]">9:00 – 19:00</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">{t.contactsPage.workingHours.tuesday}</span>
                      <span className="font-semibold text-[#54B6FC]">9:00 – 19:00</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">{t.contactsPage.workingHours.wednesday}</span>
                      <span className="font-semibold text-[#54B6FC]">9:00 – 19:00</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">{t.contactsPage.workingHours.thursday}</span>
                      <span className="font-semibold text-[#54B6FC]">9:00 – 19:00</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">{t.contactsPage.workingHours.friday}</span>
                      <span className="font-semibold text-[#54B6FC]">9:00 – 19:00</span>
                    </div>
                    <div className="flex justify-between py-2 border-t border-gray-100 pt-3">
                      <span className="text-gray-600">{t.contactsPage.workingHours.saturday}</span>
                      <span className="text-gray-400">{t.contactsPage.workingHours.closed}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">{t.contactsPage.workingHours.sunday}</span>
                      <span className="text-gray-400">{t.contactsPage.workingHours.closed}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.contactsPage.form.title}</h2>
                <p className="text-gray-600 mb-6">
                  {t.contactsPage.form.subtitle}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.contactsPage.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#54B6FC] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.contactsPage.form.emailLabel}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#54B6FC] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.contactsPage.form.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#54B6FC] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.contactsPage.form.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#54B6FC] focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="w-full bg-gradient-to-r from-[#54B6FC] to-[#4a9fe0] hover:from-[#4a9fe0] hover:to-[#54B6FC] text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg disabled:opacity-50"
                  >
                    {formStatus === 'loading' ? t.contactsPage.form.sending : t.contactsPage.form.send}
                  </button>

                  {formStatus === 'success' && (
                    <p className="text-green-600 text-center">{t.contactsPage.form.successMessage}</p>
                  )}
                  {formStatus === 'error' && (
                    <p className="text-red-600 text-center">{t.contactsPage.form.errorMessage}</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map & Directions */}
        <section id="map-section" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t.contactsPage.map.title}</h2>

            {/* Map */}
            <div className="mb-8">
              {!showMap ? (
                <button
                  onClick={() => setShowMap(true)}
                  className="w-full bg-gradient-to-br from-gray-100 to-gray-50 border-2 border-gray-200 rounded-2xl p-12 text-center hover:border-[#54B6FC] transition-all"
                >
                  <MapPin className="w-16 h-16 text-[#54B6FC] mx-auto mb-4" />
                  <p className="text-lg font-semibold text-gray-900">{t.contactsPage.map.showMap}</p>
                </button>
              ) : (
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <iframe
                    src="https://maps.google.com/maps?q=Aludarių+g.+7-43,+Vilnius+01113&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="FitKid klinika"
                  />
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Aludarių+g.+7-43,+Vilnius+01113"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-[#54B6FC] to-[#4a9fe0] text-white px-6 py-4 rounded-xl font-semibold text-center hover:scale-105 transition-all shadow-lg"
              >
                {t.contactsPage.map.openGoogleMaps}
              </a>
              <a
                href="https://waze.com/ul?q=Aludarių+g.+7-43,+Vilnius&navigate=yes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-[#fb7825] to-[#e66f1f] text-white px-6 py-4 rounded-xl font-semibold text-center hover:scale-105 transition-all shadow-lg"
              >
                {t.contactsPage.map.openWaze}
              </a>
            </div>

            {/* Directions */}
            <div className="space-y-6">
              {/* Kaip patekti */}
              <div className="bg-gradient-to-br from-[#54B6FC]/5 to-white rounded-2xl p-8 border-2 border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t.contactsPage.howToGet.title}</h3>
                <ul className="space-y-3 text-gray-700 mb-4">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#54B6FC] mt-1">•</span>
                    <span>{t.contactsPage.howToGet.entrance}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#54B6FC] mt-1">•</span>
                    <span>{t.contactsPage.howToGet.location}</span>
                  </li>
                </ul>
                <div className="bg-[#54B6FC]/10 rounded-xl p-4 border-l-4 border-[#54B6FC]">
                  <p className="text-sm text-gray-700">
                    {t.contactsPage.howToGet.tip}{' '}
                    <a href="tel:+37066699676" className="font-semibold text-[#54B6FC] hover:text-[#4a9fe0] whitespace-nowrap">
                      {currentLang === 'lt' ? 'skambinkite' : 'call'} 066 699 676
                    </a>
                  </p>
                </div>
              </div>

              {/* Kaip atvykti ir kur parkuoti */}
              <div className="bg-gradient-to-br from-[#fb7825]/5 to-white rounded-2xl p-8 border-2 border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{t.contactsPage.howToArrive.title}</h3>
                
                <div className="space-y-6">
                  {/* Automobiliu */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                      <span>🚗</span>
                      <span>{t.contactsPage.howToArrive.byCar}</span>
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {t.contactsPage.howToArrive.byCarDescription}
                    </p>
                  </div>

                  {/* Alternatyvi parkavimo vieta */}
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <h5 className="font-semibold text-gray-900 mb-2 text-sm">🅿️ {t.contactsPage.howToArrive.nearestParking}</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      {t.contactsPage.howToArrive.parkingDescription}
                    </p>
                    <a
                      href="https://maps.app.goo.gl/gsrYMXsJ5xZkMqpd9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#54B6FC] hover:text-[#4a9fe0] text-sm font-medium transition-colors"
                    >
                      <MapPin className="w-4 h-4 mr-1" />
                      {t.contactsPage.howToArrive.showParkingOnMap}
                    </a>
                  </div>

                  {/* Viešasis transportas */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                      <span>🚌</span>
                      <span>{t.contactsPage.howToArrive.byPublicTransport}</span>
                    </h4>
                    <p className="text-sm text-gray-700 mb-2">
                      {t.contactsPage.howToArrive.nearestStop}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-sm text-gray-600">{t.contactsPage.howToArrive.buses}</span>
                      <span className="text-sm font-semibold text-gray-900">11, 21, 116, 123, N7</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-sm text-gray-600">{t.contactsPage.howToArrive.trolleybuses}</span>
                      <span className="text-sm font-semibold text-gray-900">1, 3, 7</span>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/zK8n1EKYnjV5aPFQ6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#54B6FC] hover:text-[#4a9fe0] text-sm font-medium transition-colors"
                    >
                      <MapPin className="w-4 h-4 mr-1" />
                      {t.contactsPage.howToArrive.showStopOnMap}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer translations={t} />
      <FloatingActionButtons currentLang={currentLang} />
      <CookieBanner currentLang={currentLang} />
    </div>
  );
}
