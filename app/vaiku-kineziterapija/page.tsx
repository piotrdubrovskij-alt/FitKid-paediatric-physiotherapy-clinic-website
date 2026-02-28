'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import { translations, type Language } from '@/lib/i18n/translations';
import { Phone, ArrowRight, CheckCircle, Clock, MapPin } from 'lucide-react';

export default function VaikuKineziterapijaPage() {
  const [currentLang, setCurrentLang] = useState<Language>('lt');
  const [showMap, setShowMap] = useState(false);
  const t = translations[currentLang];

  const pageText = {
    lt: {
      heroTitle: 'Vaikų kineziterapija',
      heroSub: 'Profesionalus judėjimo, laikysenos ir funkcijos įvertinimas bei individualus planas vaikui — kad kūnas augtų be kompensacijų ir skausmo.',
      heroNote: 'Pirmas vizitas be streso — prisitaikome prie vaiko amžiaus, būdo ir dienos ritmo.',
      whenTitle: 'Kada verta kreiptis? (jei atpažįstate bent vieną)',
      sign1: 'Vaikas skundžiasi nugaros, kaklo, kelių ar pėdų skausmu (po mokyklos, sporto, augimo šuolių).',
      sign2: 'Matote laikysenos pokyčius: „susikūprinimas", pečių ar dubens asimetrija, laikysena „kreiva".',
      sign3: 'Įtariate laikysenos sutrikimus: skoliozė, padidinta kifozė ar per dideli stuburo išlinkimai.',
      sign4: 'Pastebite kojų ašies pokyčius: „O" ar „X" formos kojos (keliai krypsta į vidų / į išorę).',
      sign5: 'Pastebite pėdų problemas: pėdos skliauto sutrikimai, plokščiapėdystės požymiai, „krypsta" kulnai, netolygiai dyla batai.',
      sign6: 'Vaikas greitai pavargsta, nenori aktyviai judėti, dažnai sėdi „netaisyklingai".',
      sign7: 'Po traumos ar patempimo — norite saugiai grįžti į sportą ir kasdienį aktyvumą.',
      sign8: 'Koordinacija prastesnė: vaikas dažnai griūna, „nemoka" bėgti, šokinėti, mesti, greitai praranda kontrolę.',
      sign9: 'Jaučiate, kad „kažkas ne taip" — norite aiškaus įvertinimo ir plano.',
      whenNote: 'Aiškiai paaiškiname, ką matome ir ką darysime — be „spėjimų" ir be konvejerio.',
      whatWeHelpTitle: 'Ką padedame spręsti?',
      whatWeHelpSubtitle: 'Trumpai ir aiškiai — pasirinkite situaciją, kuri labiausiai tinka jūsų vaikui:',
      situation1: 'Laikysenos sutrikimai (skoliozė, padidinta kifozė)',
      situation1desc: 'Kai matosi laikysenos pokyčiai ar stuburo išlinkimai — vertiname judesį ir kompensacijas, parenkame korekcijas bei pratimų planą.',
      situation2: '„O" ir „X" formos kojų ašis',
      situation2desc: 'Kai keliai ar kojos krypsta į vidų / į išorę — dirbame su atramomis, raumenų balansu ir judesio kontrole.',
      situation3: 'Pėdos skliauto sutrikimai (plokščiapėdystė ir kt.)',
      situation3desc: 'Kai pėdos skliautas „krenta", kulnai krypsta, batai dyla netolygiai — stipriname pėdos ir blauzdos raumenis, koreguojame atramas ir eisenos įpročius.',
      situation4: 'Skausmai augimo laikotarpiu',
      situation4desc: 'Kai skauda po krūvio ar augimo šuolių — ieškome priežasties (apkrovos, atramos, laikysena) ir koreguojame, kad tai nesikartotų.',
      situation5: 'Koordinacija ir judesių kokybė',
      situation5desc: 'Kai trūksta koordinacijos, pusiausvyros, judesio kontrolės — laviname stabilumą ir judėjimo pasitikėjimą.',
      situation6: 'Sporto paruošimas ir grįžimas po traumos',
      situation6desc: 'Saugus sugrįžimas į sportą: jėga, stabilumas, technika, krūvio planavimas ir prevenciniai įpročiai.',
      situation7: 'Traumos ir operacijų pasekmės (pagal gydytojo rekomendacijas)',
      situation7desc: 'Reabilitacija pagal etapą, kad grįžtų judrumas, jėga ir funkcija.',
      situation8: 'Motorinės raidos sutrikimai',
      situation8desc: 'Kai vaikui sunku pasiekti tam tikrus judėjimo įgūdžius — dirbame su raumenų aktyvacija, koordinacija ir funkcinių įgūdžių formavimu.',
      situation9: 'Neurologinės būklės (pagal gydytojo rekomendacijas)',
      situation9desc: 'Kai yra neurologinių sutrikimų — padedame gerinti motorinę kontrolę ir funkciją, derinant tikslus su šeima.',
      situation10: 'Nutukimas ir antsvoris',
      situation10desc: 'Saugus judėjimo planas: palaipsnis aktyvumo didinimas, atramos ir stabilumo stiprinimas, tvarūs įpročiai.',
      situation11: 'Lėtiniai nugaros ir sąnarių skausmai',
      situation11desc: 'Kai skausmai kartojasi — stipriname „silpnas grandis", mokome taisyklingų judėjimo strategijų ir krūvio valdymo.',
      ctaRegister: 'Užsiregistruoti vizitui',
      ctaCall: '+370 666 99676',
      sessionTitle: 'Kaip vyksta vizitas su vaiku?',
      sessionDesc: 'Vizitą pritaikome prie vaiko amžiaus, būdo ir tikslų. Vertiname laikyseną, judesių kokybę, atramas, stabilumą, koordinaciją ir krūvio toleravimą — po to aiškiai paaiškiname, ką matome ir ką darysime toliau.',
      sessionDuration: 'Kaip vyksta vizitas (45–60 min.)',
      sessionPoints: [
        'Įvertinimas ir funkciniai testai pagal situaciją.',
        'Aiškus paaiškinimas: kas svarbiausia ir kodėl.',
        'Kryptingas darbas (pratimai / korekcijos) pagal tikslą.'
      ],
      parentsTitle: 'Tėvų vaidmuo',
      parentsDesc: 'Tėvai yra aktyvi proceso dalis: parodome, ką ir kaip daryti namuose, kaip koreguoti kasdienius įpročius (sėdėjimas, kuprinė, aktyvumas, sportas).',
      afterTitle: 'Ką gaunate po vizito',
      after1: 'Aiškų atsakymą: kas vyksta ir kas svarbiausia dabar.',
      after2: 'Individualų planą ir rekomenduojamą dažnį.',
      after3: 'Praktines rekomendacijas namams ir sportui: ką keisti, ko vengti, ką daryti.',
      ruleTitle: '„15 minučių" principas (be skubėjimo)',
      ruleDesc: 'Vaikams svarbu pasitikėjimas ir kontaktas. Jei reikia — darome pertraukėles, keičiam užduotis, prisitaikome prie vaiko tempo. Mums svarbi ne tik pratimų programa, bet ir vaiko emocinė būsena — todėl dirbame ramiai, be spaudimo ir „konvejerio".',
      methodTitle: 'Mūsų metodika',
      methodDesc: 'Dirbame remdamiesi klinikiniu įvertinimu ir parenkame priemones pagal tai, ką realiai matome judėjime.',
      method1: 'Klinikinis funkcinis įvertinimas',
      method1desc: 'Įvertiname laikyseną, atramas, stabilumą, koordinaciją ir judesio kontrolę — kad planas būtų tikslus, o ne „bendras visiems".',
      method2: 'DNS metodika',
      method2desc: 'Padeda gerinti atramas, stabilumą ir judesių kokybę — ypač laikysenos, pėdų ir skausmų situacijose, kai reikia tvirto „pagrindo" judesiui.',
      method3: 'Vojta terapija (taikoma pagal poreikį)',
      method3desc: 'Taikome tam tikrais atvejais, kai reikalingas tikslesnis nervų–raumenų aktyvinimas. Visada paaiškiname tėvams, kodėl pasirenkame šį metodą ir ko tikėtis.',
      method4: 'Tėvų edukacija',
      method4desc: 'Kasdienės korekcijos dažnai duoda didžiausią progresą tarp vizitų: sėdėjimas, kuprinė, aktyvumas, judėjimo įpročiai namuose ir mokykloje.',
      visitsTitle: 'Kiek vizitų prireiks?',
      visitsDesc: 'Vaikų kūnas greitai adaptuojasi — kartais užtenka kelių kryptingų korekcijų, o kartais reikia nuoseklaus plano, ypač jei yra skausmas, laikysena, pėdos ar sporto tikslai.',
      visit1: '1 konsultacija',
      visit1desc: 'išsamus įvertinimas + aiškus planas + pirmos korekcijos kasdienybei.',
      visit2: '3–5 vizitai',
      visit2desc: 'kontrolė ir koregavimas, kai formuojasi nauji įpročiai ir keičiasi krūvis.',
      visit3: 'Toliau pagal poreikį',
      visit3desc: 'kad progresas būtų stabilus, o šeimai viskas būtų aišku.',
      visitsGoal: 'Mūsų tikslas — kad vaikas judėtų kuo kokybiškiau, o tėvai žinotų, ką daryti namuose ir kasdienybėje.',
      specialistsTitle: 'Kas dirba su vaikais?',
      ksenija: 'Ksenija Persijanova',
      ksenijaRole: 'kineziterapeutė',
      ksenijaDesc: 'Individualus įvertinimas ir planas, darbas su vaikų laikysena, judėjimo kokybe ir funkcija.',
      agne: 'Agnė Juodytė',
      agneRole: 'kineziterapeutė',
      agneDesc: 'Darbas su vaikais pagal individualų planą, judėjimo kokybės gerinimas, stabilumas ir koordinacija.',
      viewProfile: 'Žiūrėti profilį',
      meetTeam: 'Susipažinti su visa komanda',
      faqTitle: 'Dažniausiai užduodami klausimai',
      q1: 'Nuo kokio amžiaus tinka vaikų kineziterapija?',
      a1: 'Dažniausiai dirbame su vaikais nuo ~2 metų. Jei situacija individuali — susisiekite, patarsime.',
      q2: 'Ar reikalingas gydytojo siuntimas?',
      a2: 'Ne, siuntimas nėra būtinas. Jei turite gydytojo išvadas ar tyrimus — atsineškite.',
      q3: 'Kiek trunka vizitas?',
      a3: 'Dažniausiai 45–60 min., priklausomai nuo situacijos ir vaiko amžiaus.',
      q4: 'Kaip pasiruošti vizitui?',
      a4: 'Patogi apranga judėjimui. Jei vaikas sportuoja — galite atsinešti sportinę avalynę. Jei skauda — aprašykite, kada ir po ko.',
      q5: 'Ar tėvai gali būti kartu?',
      a5: 'Taip — net rekomenduojame, kad korekcijos persikeltų į kasdienybę.',
      q6: 'Ar galima atvykti, jei vaikas serga?',
      a6: 'Jei yra karščiavimas ar ūmi infekcija — vizitą geriau perkelti. Jei abejojate — parašykite, patarsime.',
      q7: 'Kiek dažnai reikėtų lankytis?',
      a7: 'Dažniausiai: 1 konsultacija + keli kontroliniai vizitai. Tikslų dažnį parenkame po įvertinimo.',
      finalCTA: 'Jei abejojate — parašykite, padėsime pasirinkti, nuo ko pradėti.',
      address: 'Adresas: Aludarių g. 7–43, Vilnius',
      showMap: 'Rodyti žemėlapį',
    },
    en: {
      heroTitle: 'Children Physiotherapy',
      heroSub: 'Professional movement, posture and function assessment and individual plan for child — so body grows without compensations and pain.',
      heroNote: 'First visit without stress — we adapt to child\'s age, character and daily rhythm.',
      // ... English translations would go here
    }
  };

  const txt = pageText[currentLang];

  const situations = [
    { title: txt.situation1, desc: txt.situation1desc },
    { title: txt.situation2, desc: txt.situation2desc },
    { title: txt.situation3, desc: txt.situation3desc },
    { title: txt.situation4, desc: txt.situation4desc },
    { title: txt.situation5, desc: txt.situation5desc },
    { title: txt.situation6, desc: txt.situation6desc },
    { title: txt.situation7, desc: txt.situation7desc },
    { title: txt.situation8, desc: txt.situation8desc },
    { title: txt.situation9, desc: txt.situation9desc },
    { title: txt.situation10, desc: txt.situation10desc },
    { title: txt.situation11, desc: txt.situation11desc },
  ];

  const specialists = [
    {
      name: txt.ksenija,
      role: txt.ksenijaRole,
      description: txt.ksenijaDesc,
      image: '/specialists/ksenija.png',
    },
    {
      name: txt.agne,
      role: txt.agneRole,
      description: txt.agneDesc,
      image: '/specialists/agne.png',
    },
  ];

  const faqs = [
    { q: txt.q1, a: txt.a1 },
    { q: txt.q2, a: txt.a2 },
    { q: txt.q3, a: txt.a3 },
    { q: txt.q4, a: txt.a4 },
    { q: txt.q5, a: txt.a5 },
    { q: txt.q6, a: txt.a6 },
    { q: txt.q7, a: txt.a7 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header
        translations={t}
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
      />
      
      <main className="pt-20">
        {/* Hero Section with Image */}
        <section 
          className="relative flex items-center bg-[#e8e6e3]" 
          style={{ 
            width: '100%', 
            minHeight: '85vh',
            overflow: 'hidden' 
          }}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            {/* Mobile image */}
            <Image
              src="/images/hero/hero-vaiku-kineziterapija-mobile.png"
              alt={txt.heroTitle}
              fill
              priority
              quality={95}
              sizes="(max-width: 768px) 100vw, 1px"
              className="object-cover object-center md:hidden"
              style={{ 
                filter: 'brightness(1.1) contrast(0.95) blur(8px)'
              }}
            />
            {/* Desktop image */}
            <Image
              src="/services/child-physiotherapy.jpg"
              alt={txt.heroTitle}
              fill
              priority
              quality={95}
              sizes="(max-width: 768px) 1px, 100vw"
              className="object-cover object-[center_40%] hidden md:block"
              style={{ 
                filter: 'brightness(1.1) contrast(0.95) blur(3px)'
              }}
            />
            <div className="absolute inset-0 bg-white opacity-15 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          </div>

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                  {txt.heroTitle}
                </h1>
                <p className="text-lg md:text-2xl text-white/95 mb-6 md:mb-8 leading-relaxed">
                  {txt.heroSub}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6">
                  <Link
                    href="/registracija"
                    className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#54B6FC] to-[#4a9fe0] hover:from-[#4a9fe0] hover:to-[#54B6FC] text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base transition-all hover:scale-105 shadow-xl"
                  >
                    <span>{txt.ctaRegister}</span>
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                  <a
                    href="tel:+37066699676"
                    className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur text-white border-2 border-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base transition-all"
                  >
                    <Phone className="w-4 h-4 md:w-5 md:h-5" />
                    <span>{txt.ctaCall}</span>
                  </a>
                </div>
                
                <p className="text-sm text-white/90 flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{txt.heroNote}</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* When to Contact */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              {txt.whenTitle}
            </h2>
            <div className="max-w-4xl mx-auto">
              <ul className="space-y-4 mb-8">
                {[txt.sign1, txt.sign2, txt.sign3, txt.sign4, txt.sign5, txt.sign6, txt.sign7, txt.sign8, txt.sign9].map((sign, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#54B6FC] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{sign}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-gradient-to-br from-[#54B6FC]/10 to-[#fb7825]/5 rounded-2xl p-6 border-l-4 border-[#54B6FC]">
                <p className="text-gray-700 font-medium">{txt.whenNote}</p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Help With */}
        <section className="py-20 bg-gradient-to-br from-[#fb7825] to-[#e66f1f]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              {txt.whatWeHelpTitle}
            </h2>
            <p className="text-lg text-white/95 mb-12 text-center max-w-3xl mx-auto">
              {txt.whatWeHelpSubtitle}
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {situations.map((situation, index) => {
                const ids = ['skolioze', 'kreivos-kojos', 'ploksciapedyste', '', '', 'reabilitacija', '', '', '', '', 'nugaros-skausmai'];
                const id = ids[index] || undefined;
                return (
                  <div
                    key={index}
                    id={id}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-[#54B6FC] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 scroll-mt-24"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{situation.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{situation.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How Session Works */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              {txt.sessionTitle}
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center leading-relaxed max-w-4xl mx-auto">
              {txt.sessionDesc}
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="bg-gradient-to-br from-[#54B6FC]/5 to-white rounded-2xl p-7 shadow-lg border-2 border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0] rounded-xl flex items-center justify-center mb-5">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{txt.sessionDuration}</h3>
                <ul className="space-y-2">
                  {txt.sessionPoints.map((point, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-start space-x-2">
                      <span className="text-[#54B6FC] mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#54B6FC]/5 to-white rounded-2xl p-7 shadow-lg border-2 border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0] rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{txt.parentsTitle}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{txt.parentsDesc}</p>
              </div>

              <div className="bg-gradient-to-br from-[#54B6FC]/5 to-white rounded-2xl p-7 shadow-lg border-2 border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0] rounded-xl flex items-center justify-center mb-5">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{txt.afterTitle}</h3>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-700 flex items-start space-x-2">
                    <span className="text-[#54B6FC] mt-1">•</span>
                    <span>{txt.after1}</span>
                  </li>
                  <li className="text-sm text-gray-700 flex items-start space-x-2">
                    <span className="text-[#54B6FC] mt-1">•</span>
                    <span>{txt.after2}</span>
                  </li>
                  <li className="text-sm text-gray-700 flex items-start space-x-2">
                    <span className="text-[#54B6FC] mt-1">•</span>
                    <span>{txt.after3}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#fb7825] to-[#e66f1f] rounded-2xl p-8 md:p-10 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">{txt.ruleTitle}</h3>
              <p className="text-white/95 leading-relaxed">{txt.ruleDesc}</p>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-16 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              {txt.methodTitle}
            </h2>
            <p className="text-lg text-white/95 mb-12 text-center max-w-3xl mx-auto">
              {txt.methodDesc}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-7 shadow-lg border-2 border-gray-100 hover:border-[#54B6FC] transition-all hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{txt.method1}</h3>
                <p className="text-gray-600 leading-relaxed">{txt.method1desc}</p>
              </div>
              <div className="bg-white rounded-2xl p-7 shadow-lg border-2 border-gray-100 hover:border-[#54B6FC] transition-all hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{txt.method2}</h3>
                <p className="text-gray-600 leading-relaxed">{txt.method2desc}</p>
              </div>
              <div className="bg-white rounded-2xl p-7 shadow-lg border-2 border-gray-100 hover:border-[#fb7825] transition-all hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{txt.method3}</h3>
                <p className="text-gray-600 leading-relaxed">{txt.method3desc}</p>
              </div>
              <div className="bg-white rounded-2xl p-7 shadow-lg border-2 border-gray-100 hover:border-[#54B6FC] transition-all hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{txt.method4}</h3>
                <p className="text-gray-600 leading-relaxed">{txt.method4desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials translations={t} />

        {/* How Many Visits */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              {txt.visitsTitle}
            </h2>
            <p className="text-lg text-gray-700 mb-10 text-center leading-relaxed max-w-3xl mx-auto">
              {txt.visitsDesc}
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-[#54B6FC]/5 to-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 text-center">
                <div className="text-4xl font-bold text-[#54B6FC] mb-3">1</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{txt.visit1}</h3>
                <p className="text-sm text-gray-700">{txt.visit1desc}</p>
              </div>
              <div className="bg-gradient-to-br from-[#fb7825]/5 to-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 text-center">
                <div className="text-4xl font-bold text-[#fb7825] mb-3">3–5</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{txt.visit2}</h3>
                <p className="text-sm text-gray-700">{txt.visit2desc}</p>
              </div>
              <div className="bg-gradient-to-br from-[#54B6FC]/5 to-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 text-center">
                <div className="text-4xl font-bold text-[#54B6FC] mb-3">+</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{txt.visit3}</h3>
                <p className="text-sm text-gray-700">{txt.visit3desc}</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#54B6FC]/10 to-[#fb7825]/5 rounded-2xl p-6 border-l-4 border-[#54B6FC]">
              <p className="text-gray-700 leading-relaxed">{txt.visitsGoal}</p>
            </div>
          </div>
        </section>

        {/* Specialists */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              {txt.specialistsTitle}
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {specialists.map((specialist, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative aspect-[3/4] bg-gradient-to-br from-[#54B6FC]/15 to-[#fb7825]/15 flex items-center justify-center overflow-hidden">
                    <Image
                      src={specialist.image}
                      alt={specialist.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      style={{
                        objectPosition: specialist.name.includes('Ksenija') ? '50% 12%' : 'center 10%'
                      }}
                      sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 90vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {specialist.name}
                    </h3>
                    <div className="text-sm font-semibold text-[#54B6FC] mb-3">
                      {specialist.role}
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {specialist.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/#specialists"
                className="inline-flex items-center space-x-2 text-[#54B6FC] hover:text-[#4a9fe0] font-semibold transition-colors"
              >
                <span>{txt.meetTeam}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              {txt.faqTitle}
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border-2 border-gray-100 hover:border-[#54B6FC]"
                >
                  <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-[#54B6FC] group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xl text-white/95 mb-6">{txt.finalCTA}</p>
            <p className="text-lg text-white/90 mb-10">{txt.address}</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/registracija"
                className="inline-flex items-center space-x-2 bg-white hover:bg-gray-50 text-[#54B6FC] px-10 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-xl text-lg"
              >
                <span>{txt.ctaRegister}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+37066699676"
                className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur text-white border-2 border-white px-10 py-4 rounded-full font-semibold transition-all text-lg"
              >
                <Phone className="w-5 h-5" />
                <span>{txt.ctaCall}</span>
              </a>
            </div>

            {/* Map */}
            <div className="max-w-3xl mx-auto">
              {!showMap ? (
                <button
                  onClick={() => setShowMap(true)}
                  className="w-full bg-white/10 hover:bg-white/20 backdrop-blur border-2 border-white rounded-2xl p-8 text-center transition-all"
                >
                  <MapPin className="w-12 h-12 text-white mx-auto mb-3" />
                  <p className="text-white font-semibold text-lg">{txt.showMap}</p>
                </button>
              ) : (
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <iframe
                    src="https://maps.google.com/maps?q=Aludarių+g.+7-43,+Vilnius+01113&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="FitKid klinika"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer translations={t} />
      <FloatingActionButtons currentLang={currentLang} />
    </div>
  );
}
