'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import { translations, type Language } from '@/lib/i18n/translations';
import { Activity, Scale, Minimize2, Zap, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function KaGydomePage() {
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

  const infantProblems = [
    {
      icon: Activity,
      name: "Raidos vėlavimas",
      anchor: "kudikiams-raida",
      symptoms: [
        "Nevartosi ar vartosi tik į vieną pusę (3–6 mėn.)",
        "Nelaiko galvutės (4–5 mėn.)",
        "Nesėdi savarankiškai (7–9 mėn.)",
        "Neropoja arba ropoja asimetriškai (8–10 mėn.)",
        "Nestoja, nesilaiko, nevaikščioja pagal amžių",
      ],
      when: "Jei pastebite, kad kūdikis nepasiekia judėjimo etapų pagal amžių arba pediatras rekomendavo konsultuotis su kineziterapeutu.",
      solutions: [
        "Individualūs kineziterapijos užsiėmimai",
        "Raidos skatinimas žaidimo forma",
        "Tėvų mokymas – kasdieniniai pratimai namuose",
      ],
      services: ["kudikiu-kineziterapija"],
    },
    {
      icon: Scale,
      name: "Raumenų tonuso sutrikimai",
      anchor: "kudikiams-tonusas",
      symptoms: [
        "Hipertonusas – įsitempę rankučių / kojyčių raumenys",
        "Hipotonusas – per minkštas, 'šlakelis'",
        "Nevienodas tonusas kūno pusėse",
        "Riesta rankutės / laikosi kumščiuose",
        "Sunku išskleisti kojas, pakeisti sauskelnę",
      ],
      when: "Jei kūdikis pastoviai įsitempęs, per daug atsipalaidavęs arba pastebite nevienodumą judesių ar laikysenos.",
      solutions: [
        "Tonuso reguliavimo pratybos",
        "Švelnūs kūdikių masažai",
        "Specialūs tempimo ir stiprinimo pratimai",
      ],
      services: ["kudikiu-kineziterapija", "kudikiu-masazai"],
    },
    {
      icon: Minimize2,
      name: "Kūno asimetrija",
      anchor: "kudikiams-asimetrija",
      symptoms: [
        "Galvutė nuolat pasvirusi į vieną pusę (tortikolis)",
        "Vartosi tik į vieną pusę",
        "Viena rankutė ar kojytė judinama mažiau",
        "Pečiukai ar klubai nevienodame aukštyje",
        "Išsigimęs stuburas, kūnas išlenktas",
      ],
      when: "Jei matote, kad kūdikis vengia judėti vienodai abiem pusėmis arba yra pastebimas kūno pasvirimas.",
      solutions: [
        "Asimetrijos korekcija",
        "Pozicionavimas ir tėvų konsultavimas",
        "Tempimo ir mobilizavimo pratybos",
      ],
      services: ["kudikiu-kineziterapija"],
    },
    {
      icon: Zap,
      name: "Įtampa, neramumas, sunkumai judant",
      anchor: "kudikiams-itampa",
      symptoms: [
        "Verkia keičiant poziciją (iš nugaros ant pilvo)",
        "Nuolat įsitempęs, sunku jį nuraminti",
        "Sunkiai miega, nerimauja",
        "Nesimėgauja gulstymu ant pilvo",
        "Vengia prisilietimų ar yra per jautrus",
      ],
      when: "Jei kūdikis jautrus, nerimastingas ar aiškiai vengia tam tikrų judesių ir pozicijų.",
      solutions: [
        "Jautrios nervų sistemos raminimas",
        "Švelnūs masažai ir prisilietimai",
        "Adaptuotas judėjimo skatinimas",
      ],
      services: ["kudikiu-masazai", "kudikiu-kineziterapija"],
    },
  ];

  const childProblems = [
    {
      icon: Activity,
      name: "Laikysenos problemos",
      anchor: "vaikams-laikysena",
      symptoms: [
        "Kupra (kifozė), supančioti pečiai",
        "Stuburkaulio iškrypimas į šoną (skoliozė)",
        "Pečiai nevienodame aukštyje",
        "Sėdi susilenkęs, 'kriūkčia'",
        "Nugaros skausmai ar diskomfortas",
      ],
      when: "Jei mokykloje ar namuose pastebėjote, kad vaikas blogai sėdi, stovi kreivokai arba skundžiasi nugaros skausmais.",
      solutions: [
        "Laikysenos korekcija ir stabilizacija",
        "Nugaros raumenų stiprinimas",
        "Ergonomikos ir kasdienių įpročių koregavimas",
      ],
      services: ["vaiku-kineziterapija"],
    },
    {
      icon: Scale,
      name: "Plokščiapėdystė ir eisenos sutrikimai",
      anchor: "vaikams-eisena",
      symptoms: [
        "Plokščios pėdos (suploninęs skliautas)",
        "Vaikšto į vidų arba į išorę",
        "Klupinėja, nestabus vaikščiojimas",
        "Pėdų ar blauzdų skausmai po vaikščiojimo",
        "Greitai pavargsta vaikštant ar bėgant",
      ],
      when: "Jei pastebėjote, kad vaikas nejaugia taisyklingos eisenos, greitai pavargsta arba ortopedas rekomendavo kineziterapiją.",
      solutions: [
        "Pėdų skliautų stiprinimas",
        "Eisenos korekcija",
        "Funkcinis raumenų stiprinimas",
      ],
      services: ["vaiku-kineziterapija"],
    },
    {
      icon: Zap,
      name: "Skausmai judant ar sportuojant",
      anchor: "vaikams-skausmai",
      symptoms: [
        "Sąnarių (kelių, čiurnų, peties) skausmai",
        "Nugaros apatinės dalies skausmas",
        "Raumenų įtampa ar spazmai",
        "Skausmas sportuojant ar po treniruotės",
        "Sumažėjęs judrumas, sunkumai judant",
      ],
      when: "Jei vaikas skundžiasi skausmais sportuojant, po fizinio krūvio arba kasdienio judėjimo metu.",
      solutions: [
        "Skausmo priežasties diagnostika",
        "Terapinis masažas ir mobilizacija",
        "Laipsniška grąžinimas į aktyvumą",
      ],
      services: ["vaiku-kineziterapija", "vaiku-masazai"],
    },
    {
      icon: Minimize2,
      name: "Judėjimo ribotumas po traumų ar ligų",
      anchor: "vaikams-ribotumas",
      symptoms: [
        "Sunkumai judinti galūnę po lūžio",
        "Sumažėjusi amplitudė po operacijos",
        "Ilgai trunkantis atsigavimas po ligos",
        "Baimė judėti ar krūvio vengimas",
        "Raumenų silpnumas ar nestabilumas",
      ],
      when: "Jei po traumos, operacijos ar ligos vaikui reikia atsigauti, atgauti judrumą ir grįžti į normalią veiklą.",
      solutions: [
        "Individuali reabilitacija",
        "Laipsniškas krūvio didinimas",
        "Funkcijos atkūrimas ir stiprinimas",
      ],
      services: ["vaiku-kineziterapija"],
    },
  ];

  const serviceNames: Record<string, string> = {
    'kudikiu-kineziterapija': 'Kūdikių kineziterapija',
    'kudikiu-masazai': 'Kūdikių masažai',
    'vaiku-kineziterapija': 'Vaikų kineziterapija',
    'vaiku-masazai': 'Vaikų masažai',
  };

  return (
    <div className="min-h-screen">
      <Header
        translations={t}
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
      />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#54B6FC]/10 via-white to-[#fb7825]/10 pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ką gydome
            </h1>
            <p className="text-xl text-gray-700 mb-4 leading-relaxed">
              Vaikų ir kūdikių judėjimo, raidos ir laikysenos problemos
            </p>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Čia rasite išsamią informaciją apie dažniausias būkles ir situacijas, su kuriomis tėvai kreipiasi į FitKid kliniką.
            </p>
          </div>
        </section>

        {/* Kūdikiams */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-3 mb-10">
              <div className="w-12 h-12 bg-[#54B6FC]/10 rounded-xl flex items-center justify-center">
                <Activity className="w-7 h-7 text-[#54B6FC]" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Kūdikiams</h2>
                <p className="text-sm text-gray-500">0–12 mėnesių</p>
              </div>
            </div>

            <div className="space-y-12">
              {infantProblems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <div
                    key={index}
                    id={problem.anchor}
                    className="border-l-4 border-[#54B6FC] pl-6 py-2 scroll-mt-24"
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-10 h-10 bg-[#54B6FC]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon className="w-6 h-6 text-[#54B6FC]" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {problem.name}
                      </h3>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                          Ko tikėtis / simptomai:
                        </h4>
                        <ul className="space-y-2">
                          {problem.symptoms.map((symptom, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <span className="text-[#54B6FC] mt-1.5">•</span>
                              <span className="text-gray-700">{symptom}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                          Kada kreiptis:
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {problem.when}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                          Kaip padedame:
                        </h4>
                        <ul className="space-y-2">
                          {problem.solutions.map((solution, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <span className="text-[#fb7825] mt-1.5">→</span>
                              <span className="text-gray-700">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-600 mb-3">
                          Rekomenduojamos paslaugos:
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {problem.services.map((serviceSlug) => (
                            <Link
                              key={serviceSlug}
                              href={`/services/${serviceSlug}`}
                              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#54B6FC] to-[#fb7825] text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                            >
                              {serviceNames[serviceSlug]}
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Vaikams */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-3 mb-10">
              <div className="w-12 h-12 bg-[#fb7825]/10 rounded-xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-[#fb7825]" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Vaikams</h2>
                <p className="text-sm text-gray-500">Nuo 1 metų</p>
              </div>
            </div>

            <div className="space-y-12">
              {childProblems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <div
                    key={index}
                    id={problem.anchor}
                    className="border-l-4 border-[#fb7825] pl-6 py-2 scroll-mt-24"
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-10 h-10 bg-[#fb7825]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon className="w-6 h-6 text-[#fb7825]" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {problem.name}
                      </h3>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                          Ko tikėtis / simptomai:
                        </h4>
                        <ul className="space-y-2">
                          {problem.symptoms.map((symptom, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <span className="text-[#fb7825] mt-1.5">•</span>
                              <span className="text-gray-700">{symptom}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                          Kada kreiptis:
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {problem.when}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                          Kaip padedame:
                        </h4>
                        <ul className="space-y-2">
                          {problem.solutions.map((solution, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <span className="text-[#54B6FC] mt-1.5">→</span>
                              <span className="text-gray-700">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-600 mb-3">
                          Rekomenduojamos paslaugos:
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {problem.services.map((serviceSlug) => (
                            <Link
                              key={serviceSlug}
                              href={`/services/${serviceSlug}`}
                              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#54B6FC] to-[#fb7825] text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                            >
                              {serviceNames[serviceSlug]}
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pirmas vizitas */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#54B6FC]/10 to-[#fb7825]/10 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Kaip vyksta pirmas vizitas?
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>1. Išsami konsultacija</strong> – kineziterapeutas paklausia apie problemos istoriją, sveikatą, raidos ypatumus.
                </p>
                <p>
                  <strong>2. Funkcinė apžiūra</strong> – įvertiname toną, simetrija, judesių amplitudę, laikyseną, raidos etapus.
                </p>
                <p>
                  <strong>3. Individualus planas</strong> – sudaromas terapijos planas, pritaikytas konkrečiam vaikui.
                </p>
                <p>
                  <strong>4. Pirmas užsiėmimas</strong> – jau pirmą kartą pradedame švelnias pratybas ar masažą.
                </p>
                <p>
                  <strong>5. Tėvų įtraukimas</strong> – mokomės, ką daryti namuose, kad rezultatas būtų ilgalaikis.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+37066699676"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#54B6FC] to-[#fb7825] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Skambinti dabar
                </a>
                <Link
                  href="/#contacts"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-[#54B6FC] hover:text-[#54B6FC] transition-all duration-300"
                >
                  Susisiekti kitu būdu
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer translations={t} />
      <FloatingActionButtons currentLang={currentLang} />
    </div>
  );
}
