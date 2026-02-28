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

export default function VaikuMasazasPage() {
  const [currentLang, setCurrentLang] = useState<Language>('lt');
  const [showMap, setShowMap] = useState(false);
  const t = translations[currentLang];

  const pageText = {
    lt: {
      heroTitle: 'Vaikų masažas',
      heroSub: 'Švelnus ir profesionalus masažas vaikams — kai reikia sumažinti raumenų įtampą, pagerinti savijautą ir padėti kūnui atsistatyti po krūvio ar reabilitacijos.',
      heroNote: 'Masažas pritaikomas vaikui — dirbame švelniai, be skausmo ir be skubėjimo.',
      whenTitle: 'Kada verta kreiptis? (jei atpažįstate bent vieną)',
      sign1: 'Vaikas dažnai skundžiasi įtampa ar diskomfortu nugaroje, kakle, pečiuose.',
      sign2: 'Po mokyklos ar sporto vaikas „sustingsta", greitai pavargsta, sunkiau atsipalaiduoja.',
      sign3: 'Po sporto krūvio jaučiamas raumenų nuovargis, tempimas, „užsikirtimai".',
      sign4: 'Vaikui sunkiau užmigti, kūnas įsitempęs, pastebite daugiau neramumo dėl kūno diskomforto.',
      sign5: 'Po ortopedinių traumų ir imobilizacijos: po gipso, įtvarų, po ilgesnio „saugojimo".',
      sign6: 'Po operacijų (pagal gydytojo rekomendacijas), kai masažas gali būti reabilitacijos dalis.',
      sign7: 'Kai po traumos/ligos/operacijos atsiranda sustingimas, ribotas judesys ar įtampa.',
      sign8: 'Vaikams su neurologinėmis būklėmis (pvz., DCP) — kai reikia švelnaus darbo su raumenų tonusu.',
      sign9: 'Vaikams su autizmo spektro ar sensoriniais ypatumais — kai svarbus ramus, prognozuojamas kontaktas.',
      whenNote: 'Aiškiai pasakome, kam masažas tinka, o kada geriau pradėti nuo kineziterapijos įvertinimo ar derinti abu.',
      whatWeHelpTitle: 'Problemos, kurias galime padėti spręsti masažu',
      whatWeHelpSubtitle: 'Trumpai ir aiškiai — pasirinkite situaciją, kuri labiausiai tinka jūsų vaikui:',
      situation1: 'Raumenų įtampa ir diskomfortas (nugara, kaklas, pečiai)',
      situation1desc: 'Kai raumenys „kieti", įsitempę, atsiranda diskomfortas nuo sėdėjimo ar krūvio — masažas padeda atsipalaiduoti ir jaustis lengviau.',
      situation2: 'Atsistatymas po sporto ir krūvio',
      situation2desc: 'Kai vaikas sportuoja, kūnas nespėja atsistatyti — masažas padeda mažinti nuovargį ir įtampą tarp treniruočių.',
      situation3: 'Po gipso / įtvaro / traumos (reabilitacijos dalis)',
      situation3desc: 'Po imobilizacijos audiniai dažnai būna sustingę, jautrūs, atsiranda įtampa — masažas gali padėti grįžti į komfortą.',
      situation4: 'Po operacijų (pagal gydytojo rekomendacijas)',
      situation4desc: 'Kai masažas leidžiamas pagal etapą — jis gali būti reabilitacijos dalis, padedanti mažinti įtampą ir diskomfortą.',
      situation5: 'Kontraktūros, sustingimas, judesio ribotumas',
      situation5desc: 'Kai judesys ribotas ir kūnas „neleidžia" lengvai judėti — masažas gali būti viena iš priemonių šalia pratimų.',
      situation6: 'Šaltos galūnės ir „įtemptas" kūnas',
      situation6desc: 'Kai vaikui dažnai šąla rankos ar pėdos, audiniai „šalti" ir įsitempę — masažas padeda sušildyti ir atpalaiduoti.',
      situation7: 'Neurologinės būklės (pvz., DCP) — tonuso ir komforto palaikymas',
      situation7desc: 'Kai svarbu švelniai dirbti su raumenų tonusu ir kasdienio judėjimo komfortu — masažą pritaikome individualiai.',
      situation8: 'Autizmo spektras / sensoriniai ypatumai',
      situation8desc: 'Kai vaikui svarbu aiškumas ir ramus prisilietimas — dirbame lėtai, prognozuojamai ir su aiškiais susitarimais.',
      ctaRegister: 'Užsiregistruoti vizitui',
      ctaCall: '+370 666 99676',
      sessionTitle: 'Kaip vyksta masažas?',
      sessionDesc: 'Masažą pritaikome individualiai: pagal vaiko amžių, jautrumą, krūvį ir tikslą. Dirbame taip, kad vaikas jaustųsi saugiai ir ramiai.',
      sessionDuration: 'Kaip vyksta vizitas (30–60 min.)',
      sessionPoints: [
        'Trumpas pokalbis su tėvais: kur jaučiama įtampa, kas pasikeitė, koks krūvis.',
        'Masažas pagal poreikį (pvz., nugara, kaklas/pečiai, kojos).',
        'Pabaigoje — trumpos rekomendacijos: vanduo, lengvas judėjimas, ką stebėti tarp vizitų.'
      ],
      parentsTitle: 'Tėvų vaidmuo',
      parentsDesc: 'Jei reikia, parodome paprastus kasdienius sprendimus: režimas po sporto, lengvi atsipalaidavimo įpročiai, ką daryti namuose.',
      afterTitle: 'Ką gaunate po vizito',
      after1: 'Mažesnę įtampą, lengvesnį judėjimą ir daugiau komforto.',
      after2: 'Aiškesnį supratimą, kodėl įtampa kartojasi (krūvis, sėdėjimas, nuovargis).',
      after3: 'Rekomendacijas, kaip palaikyti rezultatą.',
      ruleTitle: '„15 minučių" principas (be skubėjimo)',
      ruleDesc: 'Vaikams svarbus pasitikėjimas. Jei reikia — darome pertrauką, prisitaikome prie vaiko tempo, keičiame užduotis. Masažas neturi būti „iškentėtas" — dirbame be skausmo, ramiai ir profesionaliai.',
      methodTitle: 'Mūsų požiūris (kas mums svarbiausia)',
      methodDesc: 'Masažas nėra „vienodas visiems" — intensyvumą ir zonas parenkame individualiai.',
      method1: 'Individualus pritaikymas',
      method1desc: 'Intensyvumą ir zonas parenkame pagal vaiko jautrumą, krūvį ir tikslą.',
      method2: 'Komfortas, o ne „per jėgą"',
      method2desc: 'Pagrindinis tikslas — komfortas, atsipalaidavimas ir atsistatymas, o ne „stipriai ir per jėgą".',
      method3: 'Derinimas su kineziterapija',
      method3desc: 'Jei matome, kad problema labiau susijusi su judesio kontrole ar laikysena — pasiūlome kineziterapijos įvertinimą arba derinimą.',
      visitsTitle: 'Kiek vizitų prireiks?',
      visitsDesc: 'Masažas dažniausiai duoda geriausią efektą, kai atliekamas nuosekliai — ypač jei įtampa kartojasi arba yra reabilitacijos kontekstas.',
      visit1: '5 masažai',
      visit1desc: 'kai norime pamatyti pirmą stabilų pokytį ir sumažinti pasikartojančią įtampą.',
      visit2: '8–10 masažų',
      visit2desc: 'kai įtampa kartojasi dažnai, sporto krūvis didelis, po traumos/operacijos arba kai yra sustingimas.',
      visit3: 'Toliau pagal poreikį',
      visit3desc: 'palaikymui: 1–2 kartus per mėnesį arba pagal krūvio periodus.',
      successTitle: 'Sėkmės istorijos',
      successSubtitle: 'Palaikome ryšį su tėvais ir stebime vaiko savijautą — jei reikia, koreguojame planą.',
      success1Title: 'Atsistatymas po rankos lūžio (po gipso)',
      success1Desc: '10 metų berniukui po gipso nuėmimo buvo taikytas masažo kursas kaip reabilitacijos dalis. Po kelių savaičių sumažėjo sustingimas, judesys tapo laisvesnis, vaikas grįžo į įprastą aktyvumą.',
      success2Title: 'Atsistatymas po sporto sezono',
      success2Desc: 'Sportuojančiam vaikui kartojosi įtampa po treniruočių. Po masažo kurso sumažėjo nuovargio pojūtis, pagerėjo atsistatymas tarp krūvių.',
      success3Title: 'Paauglio nugaros įtampa ir diskomfortas',
      success3Desc: '14 metų paaugliui buvo sudarytas masažo planas ir kasdieniai įpročiai (poilsis, režimas po krūvio). Po kelių savaičių sumažėjo įtampa ir tapo lengviau išlaikyti geresnį komfortą dienos metu.',
      specialistsTitle: 'Kas atlieka masažą?',
      ramune: 'Ramunė Nemeikaitė',
      ramuneRole: 'Masažo specialistė',
      ramuneDesc: 'Dirba su vaikais, pritaiko masažą pagal amžių, jautrumą, krūvį ir reabilitacijos etapą.',
      viewProfile: 'Žiūrėti profilį',
      faqTitle: 'Dažniausiai užduodami klausimai',
      q1: 'Nuo kokio amžiaus galima atlikti vaikų masažą?',
      a1: 'Masažą pritaikome pagal amžių ir vaiko jautrumą. Jei abejojate — susisiekite, patarsime.',
      q2: 'Kiek trunka masažas?',
      a2: 'Dažniausiai 30–60 min., priklausomai nuo tikslo ir vaiko amžiaus.',
      q3: 'Ar masažas turi būti skausmingas?',
      a3: 'Ne. Dirbame švelniai ir profesionaliai — be skausmo ir be „per jėgą".',
      q4: 'Ar tėvai gali būti kartu?',
      a4: 'Taip — jei vaikui taip ramiau (ypač mažesniems ar sensoriniams vaikams).',
      q5: 'Ką daryti po masažo?',
      a5: 'Rekomenduojame vandens, lengvo judėjimo ir ramios dienos tempo — pasakome individualiai po vizito.',
      q6: 'Ar galima masažą po gipso ar įtvaro?',
      a6: 'Dažnai — taip, bet svarbu reabilitacijos etapas. Jei turite gydytojo rekomendacijas — atsineškite.',
      q7: 'Masažas ar kineziterapija — ką rinktis?',
      a7: 'Jei pagrindinė problema — raumenų įtampa ir nuovargis, masažas tinka. Jei yra laikysenos pokyčiai, funkcijos problemos ar pasikartojantis skausmas — geriau pradėti nuo kineziterapijos įvertinimo arba derinti.',
      finalCTA: 'Jei abejojate — parašykite, padėsime pasirinkti, nuo ko pradėti.',
      address: 'Adresas: Aludarių g. 7–43, Vilnius',
      showMap: 'Rodyti žemėlapį',
    },
    en: {
      heroTitle: 'Children Massage',
      heroSub: 'Gentle and professional massage for children — when you need to reduce muscle tension, improve well-being and help the body recover after exercise or rehabilitation.',
      heroNote: 'We work professionally and gently — without pain and without "forcing".',
      whenTitle: 'When to seek help (if you recognise at least one)',
      sign1: 'Child often complains of tension or discomfort in back, neck, shoulders.',
      sign2: 'After school or sport the child "stiffens up", tires quickly, has difficulty relaxing.',
      sign3: 'After sport load there is muscle fatigue, pulling, "stiffness".',
      sign4: 'Child has difficulty falling asleep, body is tense, you notice more restlessness due to body discomfort.',
      sign5: 'After orthopaedic injuries and immobilisation: after cast, braces, after prolonged "protection".',
      sign6: 'After surgeries (per doctor\'s recommendations), when massage can be part of rehabilitation.',
      sign7: 'When stiffness, limited movement or tension appears after injury/illness/surgery.',
      sign8: 'Children with neurological conditions (e.g. CP) — when gentle work with muscle tone is needed.',
      sign9: 'Children with autism spectrum or sensory features — when calm, predictable contact is important.',
      whenNote: 'We clearly say when massage is suitable, and when it\'s better to start with a physiotherapy assessment or combine both.',
      whatWeHelpTitle: 'Problems we can help solve with massage',
      whatWeHelpSubtitle: 'Briefly and clearly — choose the situation that best fits your child:',
      situation1: 'Muscle tension and discomfort (back, neck, shoulders)',
      situation1desc: 'When muscles are "hard", tense, discomfort appears from sitting or load — massage helps relax and feel lighter.',
      situation2: 'Recovery after sport and load',
      situation2desc: 'When the child does sport and the body doesn\'t recover in time — massage helps reduce fatigue and tension between training sessions.',
      situation3: 'After cast / brace / injury (part of rehabilitation)',
      situation3desc: 'After immobilisation tissues are often stiff, sensitive, tension appears — massage can help return to comfort.',
      situation4: 'After surgeries (per doctor\'s recommendations)',
      situation4desc: 'When massage is allowed per stage — it can be part of rehabilitation, helping reduce tension and discomfort.',
      situation5: 'Contractures, stiffness, limited movement',
      situation5desc: 'When movement is limited and the body "doesn\'t allow" easy movement — massage can be one of the tools alongside exercises.',
      situation6: 'Cold extremities and "tense" body',
      situation6desc: 'When the child\'s hands or feet are often cold, tissues are "cold" and tense — massage helps warm and relax.',
      situation7: 'Neurological conditions (e.g. CP) — tone and comfort maintenance',
      situation7desc: 'When gentle work with muscle tone and daily movement comfort is important — we adapt massage individually.',
      situation8: 'Autism spectrum / sensory features',
      situation8desc: 'When clarity and calm touch are important for the child — we work slowly, predictably and with clear agreements.',
      ctaRegister: 'Register for visit',
      ctaCall: '+370 666 99676',
      sessionTitle: 'How does the massage work?',
      sessionDesc: 'We adapt the massage individually: by the child\'s age, sensitivity, load and goal. We work so the child feels safe and calm.',
      sessionDuration: 'How a visit works (30–60 min)',
      sessionPoints: [
        'Brief talk with parents: where tension is felt, what changed, what load.',
        'Massage by need (e.g. back, neck/shoulders, legs).',
        'At the end — brief recommendations: water, light movement, what to watch between visits.'
      ],
      parentsTitle: 'Parents\' role',
      parentsDesc: 'If needed, we show simple daily solutions: routine after sport, light relaxation habits, what to do at home.',
      afterTitle: 'What you get after the visit',
      after1: 'Less tension, easier movement and more comfort.',
      after2: 'Clearer understanding of why tension recurs (load, sitting, fatigue).',
      after3: 'Recommendations on how to maintain the result.',
      ruleTitle: '"15 minutes" principle (no rushing)',
      ruleDesc: 'For children, trust matters. If needed — we take a break, adapt to the child\'s pace, change tasks. Massage should not be "endured" — we work without pain, calmly and professionally.',
      methodTitle: 'Our approach (what matters most to us)',
      methodDesc: 'Massage is not "the same for everyone" — we select intensity and zones individually.',
      method1: 'Individual adaptation',
      method1desc: 'We select intensity and zones based on the child\'s sensitivity, load and goal.',
      method2: 'Comfort, not "by force"',
      method2desc: 'The main goal — comfort, relaxation and recovery, not "strong and by force".',
      method3: 'Combination with physiotherapy',
      method3desc: 'If we see the problem is more related to movement control or posture — we suggest a physiotherapy assessment or combination.',
      visitsTitle: 'How many visits will be needed?',
      visitsDesc: 'Massage usually gives the best effect when done consistently — especially if tension recurs or there is a rehabilitation context.',
      visit1: '5 massages',
      visit1desc: 'when we want to see first stable change and reduce recurring tension.',
      visit2: '8–10 massages',
      visit2desc: 'when tension recurs often, sport load is high, after injury/surgery or when there is stiffness.',
      visit3: 'Further as needed',
      visit3desc: 'for maintenance: 1–2 times per month or by load periods.',
      successTitle: 'Success stories',
      successSubtitle: 'We maintain contact with parents and monitor the child\'s well-being — if needed, we adjust the plan.',
      success1Title: 'Recovery after arm fracture (after cast)',
      success1Desc: 'A 10-year-old boy received a massage course as part of rehabilitation after cast removal. After a few weeks stiffness decreased, movement became freer, the child returned to usual activity.',
      success2Title: 'Recovery after sport season',
      success2Desc: 'An athletic child had recurring tension after training. After a massage course, fatigue reduced, recovery between sessions improved.',
      success3Title: 'Teenager back tension and discomfort',
      success3Desc: 'A 14-year-old received a massage plan and daily habits (rest, routine after load). After a few weeks tension decreased and it became easier to maintain comfort during the day.',
      specialistsTitle: 'Who performs the massage?',
      ramune: 'Ramunė Nemeikaitė',
      ramuneRole: 'Massage specialist',
      ramuneDesc: 'Works with children, adapts massage by age, sensitivity, load and rehabilitation stage.',
      viewProfile: 'View profile',
      faqTitle: 'Frequently asked questions',
      q1: 'From what age can children\'s massage be done?',
      a1: 'We adapt massage by age and the child\'s sensitivity. If in doubt — contact us, we\'ll advise.',
      q2: 'How long is a massage?',
      a2: 'Usually 30–60 min, depending on the goal and child\'s age.',
      q3: 'Does the massage have to be painful?',
      a3: 'No. We work gently and professionally — without pain and without "forcing".',
      q4: 'Can parents be present?',
      a4: 'Yes — if it makes the child calmer (especially for younger or sensory children).',
      q5: 'What to do after massage?',
      a5: 'We recommend water, light movement and a calm day\'s pace — we advise individually after the visit.',
      q6: 'Can massage be done after cast or brace?',
      a6: 'Often — yes, but the rehabilitation stage matters. If you have doctor\'s recommendations — bring them.',
      q7: 'Massage or physiotherapy — what to choose?',
      a7: 'If the main problem is muscle tension and fatigue, massage is suitable. If there are posture changes, functional problems or recurring pain — better to start with a physiotherapy assessment or combine.',
      finalCTA: 'If in doubt — write, we\'ll help choose where to start.',
      address: 'Address: Aludarių g. 7–43, Vilnius',
      showMap: 'Show map',
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
  ];

  const successStories = [
    { title: txt.success1Title, desc: txt.success1Desc },
    { title: txt.success2Title, desc: txt.success2Desc },
    { title: txt.success3Title, desc: txt.success3Desc },
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
              src="/images/hero/hero-vaiku-masazas-mobile.png"
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
              src="/services/child-massage.jpg"
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
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {situations.map((situation, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border-2 border-white/40 hover:border-white transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{situation.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{situation.desc}</p>
                </div>
              ))}
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

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-7 shadow-lg border-2 border-white/40 hover:border-white transition-all hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{txt.method1}</h3>
                <p className="text-gray-600 leading-relaxed">{txt.method1desc}</p>
              </div>
              <div className="bg-white rounded-2xl p-7 shadow-lg border-2 border-white/40 hover:border-white transition-all hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{txt.method2}</h3>
                <p className="text-gray-600 leading-relaxed">{txt.method2desc}</p>
              </div>
              <div className="bg-white rounded-2xl p-7 shadow-lg border-2 border-white/40 hover:border-white transition-all hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{txt.method3}</h3>
                <p className="text-gray-600 leading-relaxed">{txt.method3desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials translations={t} />

        {/* Success Stories */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              {txt.successTitle}
            </h2>
            <p className="text-lg text-gray-700 mb-10 text-center leading-relaxed max-w-3xl mx-auto">
              {txt.successSubtitle}
            </p>

            <div className="space-y-6">
              {successStories.map((story, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#54B6FC]/5 to-white rounded-2xl p-7 shadow-lg border-2 border-gray-100 hover:border-[#54B6FC] transition-all"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{story.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{story.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How Many Visits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              {txt.visitsTitle}
            </h2>
            <p className="text-lg text-gray-700 mb-10 text-center leading-relaxed max-w-3xl mx-auto">
              {txt.visitsDesc}
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#54B6FC]/5 to-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 text-center">
                <div className="text-4xl font-bold text-[#54B6FC] mb-3">5</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{txt.visit1}</h3>
                <p className="text-sm text-gray-700">{txt.visit1desc}</p>
              </div>
              <div className="bg-gradient-to-br from-[#fb7825]/5 to-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 text-center">
                <div className="text-4xl font-bold text-[#fb7825] mb-3">8–10</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{txt.visit2}</h3>
                <p className="text-sm text-gray-700">{txt.visit2desc}</p>
              </div>
              <div className="bg-gradient-to-br from-[#54B6FC]/5 to-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 text-center">
                <div className="text-4xl font-bold text-[#54B6FC] mb-3">+</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{txt.visit3}</h3>
                <p className="text-sm text-gray-700">{txt.visit3desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Specialists */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              {txt.specialistsTitle}
            </h2>

            <div className="max-w-md mx-auto">
              <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative aspect-[3/4] bg-gradient-to-br from-[#54B6FC]/15 to-[#fb7825]/15 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/specialists/ramune.png"
                    alt={txt.ramune}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{ objectPosition: 'center 10%' }}
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 90vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {txt.ramune}
                  </h3>
                  <div className="text-sm font-semibold text-[#54B6FC] mb-3">
                    {txt.ramuneRole}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {txt.ramuneDesc}
                  </p>
                  <Link
                    href="/#specialists"
                    className="inline-flex items-center space-x-2 text-[#54B6FC] hover:text-[#4a9fe0] font-semibold transition-colors"
                  >
                    <span>{txt.viewProfile}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              {txt.faqTitle}
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border-2 border-gray-100 hover:border-[#54B6FC]"
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
