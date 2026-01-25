'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, ArrowLeft, Phone, Calendar } from 'lucide-react';
import { translations } from '@/lib/i18n/translations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function KainosPage() {
  const [currentLang, setCurrentLang] = useState<'lt' | 'en'>('lt');
  const t = translations[currentLang];

  // Kūdikiams services
  const kudikiamsServices = [
    {
      name: 'Pirminė konsultacija',
      description: 'Išsami konsultacija su diagnostika ir gydymo planu',
      duration: '60 min',
      price: '50',
      features: ['Išsami konsultacija', 'Diagnostika', 'Individualus planas'],
    },
    {
      name: 'Individuali kineziterapija',
      description: 'Individualūs kineziterapijos užsiėmimai',
      duration: '45 min',
      price: '45',
      packagePrice: '200',
      packageSessions: '5',
      savings: '25',
      features: ['Individualūs pratimai', 'Pratimų mokymas', 'Rekomendacijos namams'],
    },
    {
      name: 'Hidroterapija ir kineziterapija',
      description: 'Kompleksiniai užsiėmimai vandenyje ir salėje',
      duration: '45 min',
      price: '40',
      packagePrice: '185',
      packageSessions: '5',
      savings: '15',
      features: ['Užsiėmimai vandenyje', 'Kineziterapija', 'Abiejų tėvų dalyvavimas'],
    },
    {
      name: 'Gydomasis masažas',
      description: 'Profesionalus gydomasis masažas kūdikiams',
      duration: '30 min',
      price: '35',
      packagePrice: '150',
      packageSessions: '5',
      savings: '25',
      features: ['Švelnūs metodai', 'Adaptuota kūdikiams', 'Tėvų dalyvavimas'],
    },
  ];

  // Vaikams services
  const vaikamsServices = [
    {
      name: 'Pirminė konsultacija',
      description: 'Išsami konsultacija su diagnostika ir gydymo planu',
      duration: '60 min',
      price: '50',
      features: ['Išsami konsultacija', 'Diagnostika', 'Individualus planas'],
    },
    {
      name: 'Individuali kineziterapija',
      description: 'Individualūs kineziterapijos užsiėmimai vaikams',
      duration: '45 min',
      price: '45',
      packagePrice: '200',
      packageSessions: '5',
      savings: '25',
      features: ['Individualūs pratimai', 'Pratimų mokymas', 'Rekomendacijos namams'],
    },
    {
      name: 'Gydomasis masažas',
      description: 'Profesionalus gydomasis masažas vaikams',
      duration: '30 min',
      price: '35',
      packagePrice: '150',
      packageSessions: '5',
      savings: '25',
      features: ['Švelnūs metodai', 'Adaptuota vaikams', 'Tėvų dalyvavimas'],
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
          <span className="text-gray-600">/ apsilankymas</span>
        </div>
      </div>

      {item.packagePrice && (
        <div className="mb-4 pb-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="flex items-baseline space-x-2">
                <span className={`text-2xl font-bold ${colorScheme === 'blue' ? 'text-[#54B6FC]' : 'text-[#fb7825]'}`}>€{item.packagePrice}</span>
                <span className="text-sm text-gray-600">/ {item.packageSessions} apsilankimai</span>
              </div>
              <div className="text-sm text-gray-500 mt-1">
                €{(parseInt(item.packagePrice) / parseInt(item.packageSessions!)).toFixed(0)} už apsilankymą
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
        onLanguageChange={setCurrentLang}
      />

      <main className="pt-20 md:pt-24">
        <section className="bg-gradient-to-br from-[#fb7825] to-[#e66f1f] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Link
                href="/"
                className="inline-flex items-center space-x-2 text-white/90 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Grįžti į pagrindinį</span>
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Kainos
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Skaidrios ir suprantamos vaikų kineziterapijos paslaugų kainos Vilniuje
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
                    <h3 className="font-semibold text-gray-900 mb-1">Pigiau paketu</h3>
                    <p className="text-sm text-gray-600">Sutaupykite iki 25€ įsigydami 5 apsilankymų paketą</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-[#fb7825] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Lankstus grafikas</h3>
                    <p className="text-sm text-gray-600">Dirbame ir vakarais bei savaitgaliais</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-[#54B6FC] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Nemokama konsultacija</h3>
                    <p className="text-sm text-gray-600">Skambinkite tel. 066 699 676</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kūdikiams Section */}
            <div className="mb-16">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/30 rounded-3xl p-8 md:p-10 border border-blue-200">
                <div className="text-center mb-8">
                  <span className="text-5xl mb-3 block">👶</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#54B6FC] mb-2">
                    Kūdikiams
                  </h2>
                  <p className="text-lg text-gray-600">0-12 mėnesių</p>
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
                  <h2 className="text-3xl md:text-4xl font-bold text-[#fb7825] mb-2">
                    Vaikams
                  </h2>
                  <p className="text-lg text-gray-600">Nuo 1 metų</p>
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
                    <span className="text-white font-semibold">Vyriausioji kineziterapeutė</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Agnė Juodytė
                      </h2>
                      <p className="text-xl text-white/90 mb-6">
                        Aukščiausios kvalifikacijos specialistė su išskirtine patirtimi
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-start space-x-3">
                          <Check className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                          <span className="text-white/90">15+ metų patirtis vaikų kineziterapijoje</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Check className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                          <span className="text-white/90">Tarptautinės sertifikacijos (DNS, NDT, Bobath)</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Check className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                          <span className="text-white/90">Išplėstinė diagnostika ir gydymo technikų arsenalas</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Check className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                          <span className="text-white/90">Darbas su sudėtingais atvejais</span>
                        </div>
                      </div>

                      <p className="text-sm text-white/80 italic">
                        * Paketinių nuolaidų nėra dėl individualaus požiūrio ir išskirtinės patirties
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white rounded-2xl p-6 shadow-xl">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">
                              Pirminė konsultacija
                            </h3>
                            <p className="text-sm text-gray-600">
                              Išsami diagnostika ir gydymo strategija
                            </p>
                          </div>
                          <div className="bg-blue-50 px-3 py-1 rounded-full text-sm font-medium text-[#54B6FC]">
                            60 min
                          </div>
                        </div>
                        <div className="flex items-baseline space-x-2">
                          <span className="text-4xl font-bold text-gray-900">€80</span>
                          <span className="text-gray-600">/ apsilankymas</span>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl p-6 shadow-xl">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">
                              Individuali kineziterapija
                            </h3>
                            <p className="text-sm text-gray-600">
                              Kompleksiniai užsiėmimai su išplėstinėmis technikomis
                            </p>
                          </div>
                          <div className="bg-blue-50 px-3 py-1 rounded-full text-sm font-medium text-[#54B6FC]">
                            45 min
                          </div>
                        </div>
                        <div className="flex items-baseline space-x-2">
                          <span className="text-4xl font-bold text-gray-900">€60</span>
                          <span className="text-gray-600">/ apsilankymas</span>
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
                  Mokėjimo būdai
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-[#54B6FC]" />
                    <span>Grynaisiais pinigais</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-[#54B6FC]" />
                    <span>Banko kortele</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-[#54B6FC]" />
                    <span>Banko pavedimu</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Svarbu žinoti
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#fb7825] font-bold">•</span>
                    <span>Paketų galiojimas - 2 mėnesiai nuo įsigijimo datos</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#fb7825] font-bold">•</span>
                    <span>Atšaukiant vizitą likus mažiau nei 24 val., mokestis negrąžinamas</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#fb7825] font-bold">•</span>
                    <span>Pirminė konsultacija privaloma visiem naujiem pacientams</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer translations={t} />
    </>
  );
}