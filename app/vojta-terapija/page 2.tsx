'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import { translations, type Language } from '@/lib/i18n/translations';
import { Phone, ArrowRight, CheckCircle, Clock, MapPin, AlertCircle } from 'lucide-react';

export default function VojtaTerapijaPage() {
  const [currentLang, setCurrentLang] = useState<Language>('lt');
  const [showMap, setShowMap] = useState(false);
  const t = translations[currentLang];

  const pageText = {
    lt: {
      heroTitle: 'Vojta terapija',
      heroSub: 'Refleksinė lokomocija – pažadiname natūralų vaiko judesį ir atkuriame teisingus judėjimo modelius.',
      ctaRegister: 'Užsiregistruoti konsultacijai',
      ctaCall: 'Paskambinti: +370 666 99676',
      
      introTitle: 'Kas yra Vojta terapija?',
      introP1: 'Tai neurofiziologinė metodika, kuri „primena" smegenims, kaip teisingai valdyti kūną. Spaudžiant tam tikrus kūno taškus (zonas), aktyvuojami įgimti judėjimo refleksai.',
      introP2: 'Tai nėra masažas – tai aktyvi terapija, kurios metu vaikas „dirba".',
      introGoal: 'Pagrindinis tikslas:',
      introGoalText: 'Priversti smegenis ir raumenis bendradarbiauti, kad vaikas pradėtų judėti taisyklingai (vartytis, šliaužti, sėdėti, eiti).',

      indicationsTitle: 'Kada rekomenduojama Vojta terapija?',
      indicationsSubtitle: 'Kūdikiams ir mažyliams:',
      indication1: 'Raidos vėlavimas',
      indication1desc: 'Vaikas nesivarto, nešliaužioja arba neatsisėda pagal savo amžių.',
      indication2: 'Asimetrija ir kreivakaklystė',
      indication2desc: 'Galvytė sukama tik į vieną pusę, kūnas „riestainio" formos.',
      indication3: 'Raumenų tonuso sutrikimai',
      indication3desc: 'Tonusas per didelis (įsitempęs) arba per žemas (glebus).',
      indication4: 'Klubų sąnarių displazija',
      indication4desc: 'Kaip pagalbinė priemonė taisyklingam sąnario formavimuisi.',
      indication5: 'Neišnešiotukams',
      indication5desc: 'Siekiant pasivyti bendraamžių motorinę raidą.',
      
      indicationsOlder: 'Vyresniems vaikams:',
      older1: 'Cerebrinis paralyžius (VCP)',
      older1desc: 'Judesių koordinacijos gerinimui.',
      older2: 'Laikysenos sutrikimai',
      older2desc: 'Skoliozė, kifozė, netaisyklinga eisena.',
      older3: 'Ortopedinės problemos',
      older3desc: 'Pėdų deformacijos (šleivapėdystė), eisenos sutrikimai.',
      older4: 'Po traumų',
      older4desc: 'Reabilitacijai, kai reikia atkurti prarastas funkcijas.',

      concernsTitle: 'Svarbu žinoti tėvams: Apie vaiko reakciją',
      concernsIntro: 'Vojta terapijos metu vaikai dažnai verkia arba pyksta. Tėvams tai gali kelti nerimą, todėl norime paaiškinti:',
      concernQ1: 'Ar vaikui skauda?',
      concernA1: 'Ne. Vojta terapija nėra skausminga. Spaudimas į taškus nesukelia skausmo.',
      concernQ2: 'Kodėl vaikas verkia?',
      concernA2: 'Tai yra sunkus fizinis darbas. Terapija aktyvuoja raumenis, kurių vaikas pats negali valdyti, todėl jis pavargsta ir reaguoja į diskomfortą bei naują pojūtį. Verksmas šiuo atveju yra komunikacija ir pastangų išraiška („man sunku", „aš dirbu").',
      concernEffect: 'Poveikis:',
      concernEffectText: 'Iškart po procedūros vaikas nurimsta, o teigiami pokyčiai dažnai matomi jau po kelių savaičių.',

      processTitle: 'Kaip vyksta gydymas?',
      processSubtitle: 'Jūsų vaidmuo yra svarbiausias. Vojta terapija unikali tuo, kad tėvai tampa geriausiais savo vaiko terapeutais.',
      step1: 'Konsultacija ir įvertinimas',
      step1desc: 'Kineziterapeutas įvertina vaiko būklę ir parenka individualius pratimus (padėtis ir taškus).',
      step2: 'Mokymas',
      step2desc: 'Mes išmokome jus (tėvelius) tiksliai atlikti pratimus. Rodome tol, kol jausitės užtikrintai.',
      step3: 'Darbas namuose',
      step3desc: 'Vojta metodika reikalauja reguliarumo. Norint pasiekti geriausią rezultatą, pratimus namuose reikia atlikti 3–4 kartus per dieną (po 5–10 min.).',
      step4: 'Kontrolė',
      step4desc: 'Reguliariai susitinkame koreguoti programą, kai vaikas tobulėja.',

      resultsTitle: 'Ką suteikia Vojta terapija?',
      result1: 'Centrinės nervų sistemos branda',
      result1desc: 'Pagerėja ryšys tarp smegenų ir raumenų.',
      result2: 'Taisyklinga laikysena',
      result2desc: 'Stuburo tiesinimas, gilesnis kvėpavimas.',
      result3: 'Motorinė raida',
      result3desc: 'Vaikas pradeda atlikti judesius, kurių anksčiau negalėjo (apsiversti, ropoti, tiesti ranką).',
      result4: 'Nurimimas',
      result4desc: 'Pagerėja miegas, virškinimas ir bendra vaiko savijauta (po adaptacijos periodo).',

      specialistTitle: 'Kas veda Vojta terapiją?',
      agne: 'Agnė Juodytė – kineziterapeutė',
      agneDesc: 'Sertifikuota Vojta terapijos specialistė, dirbanti su kūdikiais ir vaikais nuo pirmųjų dienų.',
      
      faqTitle: 'Dažniausiai užduodami klausimai',
      q1: 'Kiek laiko trunka kursas?',
      a1: 'Tai priklauso nuo diagnozės. Kai kuriems kūdikiams užtenka kelių mėnesių, kol pasiveja raidą. Esant rimtesniems sutrikimams, terapija gali trukti ilgiau su pertraukomis.',
      q2: 'Ar galima derinti su masažu ar baseinu?',
      a2: 'Taip, dažnai Vojta derinama su kitomis priemonėmis, tačiau svarbu neperkrauti vaiko. Sudarysime individualų planą.',
      q3: 'Ar tėvai tikrai sugebės tai daryti namuose?',
      a3: 'Taip! 99% tėvų išmoksta. Mes skiriame tiek laiko mokymui, kiek reikia. Jūs nesate paliekami vieni.',
      q4: 'Nuo kokio amžiaus galima pradėti Vojta terapiją?',
      a4: 'Galima pradėti nuo pirmųjų savaičių gyvenimo – kuo anksčiau, tuo efektyviau.',
      q5: 'Ar reikalingas gydytojo siuntimas?',
      a5: 'Siuntimas nėra būtinas, tačiau jei turite gydytojo rekomendacijas ar tyrimų atsakymus – atsineškite.',

      finalTitle: 'Jei abejojate – parašykite, padėsime pasirinkti, nuo ko pradėti.',
      address: 'Adresas: Aludarių g. 7–43, Vilnius',
      showMap: 'Rodyti žemėlapį',
    },
    en: {
      heroTitle: 'Vojta Therapy',
      heroSub: 'Reflex locomotion – awakening natural child movement and restoring correct movement patterns.',
      ctaRegister: 'Book a Consultation',
      ctaCall: 'Call: +370 666 99676',
      
      introTitle: 'What is Vojta Therapy?',
      introP1: 'It is a neurophysiological method that "reminds" the brain how to properly control the body. By pressing certain body points (zones), innate movement reflexes are activated.',
      introP2: 'This is not massage – it is active therapy where the child "works".',
      introGoal: 'Main Goal:',
      introGoalText: 'To make the brain and muscles cooperate so the child starts moving correctly (rolling, crawling, sitting, walking).',

      indicationsTitle: 'When is Vojta Therapy Recommended?',
      indicationsSubtitle: 'For infants and toddlers:',
      indication1: 'Developmental Delay',
      indication1desc: 'Child doesn\'t roll, crawl, or sit according to their age.',
      indication2: 'Asymmetry and Torticollis',
      indication2desc: 'Head turns only to one side, body in "croissant" shape.',
      indication3: 'Muscle Tone Disorders',
      indication3desc: 'Tone too high (tense) or too low (floppy).',
      indication4: 'Hip Dysplasia',
      indication4desc: 'As support for proper joint formation.',
      indication5: 'For Premature Babies',
      indication5desc: 'To catch up with peers\' motor development.',
      
      indicationsOlder: 'For older children:',
      older1: 'Cerebral Palsy (CP)',
      older1desc: 'To improve movement coordination.',
      older2: 'Posture Disorders',
      older2desc: 'Scoliosis, kyphosis, irregular gait.',
      older3: 'Orthopedic Problems',
      older3desc: 'Foot deformities (flat feet), gait disorders.',
      older4: 'After Injuries',
      older4desc: 'For rehabilitation when lost functions need restoration.',

      concernsTitle: 'Important for Parents: About Child\'s Reaction',
      concernsIntro: 'During Vojta therapy, children often cry or get upset. This may worry parents, so we want to explain:',
      concernQ1: 'Does it hurt the child?',
      concernA1: 'No. Vojta therapy is not painful. Pressure on points does not cause pain.',
      concernQ2: 'Why does the child cry?',
      concernA2: 'It is hard physical work. Therapy activates muscles the child cannot control themselves, so they get tired and react to discomfort and new sensation. Crying in this case is communication and expression of effort ("it\'s hard for me", "I\'m working").',
      concernEffect: 'Effect:',
      concernEffectText: 'Immediately after the procedure, the child calms down, and positive changes are often visible after a few weeks.',

      processTitle: 'How Does Treatment Work?',
      processSubtitle: 'Your role is most important. Vojta therapy is unique in that parents become their child\'s best therapists.',
      step1: 'Consultation and Assessment',
      step1desc: 'Physiotherapist assesses child\'s condition and selects individual exercises (positions and points).',
      step2: 'Training',
      step2desc: 'We teach you (parents) to perform exercises precisely. We show until you feel confident.',
      step3: 'Home Work',
      step3desc: 'Vojta method requires regularity. To achieve best results, exercises at home need to be done 3–4 times per day (5–10 min each).',
      step4: 'Monitoring',
      step4desc: 'We meet regularly to adjust the program as the child improves.',

      resultsTitle: 'What Does Vojta Therapy Provide?',
      result1: 'Central Nervous System Maturation',
      result1desc: 'Improved connection between brain and muscles.',
      result2: 'Correct Posture',
      result2desc: 'Spine straightening, deeper breathing.',
      result3: 'Motor Development',
      result3desc: 'Child starts performing movements they couldn\'t before (rolling over, crawling, reaching).',
      result4: 'Calming',
      result4desc: 'Improved sleep, digestion, and overall child wellbeing (after adaptation period).',

      specialistTitle: 'Who Conducts Vojta Therapy?',
      agne: 'Agnė Juodytė – Physiotherapist',
      agneDesc: 'Certified Vojta therapy specialist, working with infants and children from first days.',
      
      faqTitle: 'Frequently Asked Questions',
      q1: 'How long does the course last?',
      a1: 'It depends on diagnosis. For some infants, a few months are enough to catch up with development. For more serious disorders, therapy may take longer with breaks.',
      q2: 'Can it be combined with massage or swimming?',
      a2: 'Yes, Vojta is often combined with other methods, but it\'s important not to overload the child. We\'ll create an individual plan.',
      q3: 'Can parents really do this at home?',
      a3: 'Yes! 99% of parents learn. We dedicate as much time to training as needed. You are not left alone.',
      q4: 'From what age can Vojta therapy start?',
      a4: 'Can start from first weeks of life – the earlier, the more effective.',
      q5: 'Is a doctor\'s referral required?',
      a5: 'Referral is not required, but if you have doctor\'s recommendations or test results – bring them.',

      finalTitle: 'If you have doubts – contact us, we\'ll help you choose where to start.',
      address: 'Address: Aludarių g. 7–43, Vilnius',
      showMap: 'Show Map',
    }
  };

  const txt = pageText[currentLang];

  const faqs = [
    { q: txt.q1, a: txt.a1 },
    { q: txt.q2, a: txt.a2 },
    { q: txt.q3, a: txt.a3 },
    { q: txt.q4, a: txt.a4 },
    { q: txt.q5, a: txt.a5 },
  ];

  return (
    <div className="min-h-screen">
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
              src="/images/hero/hero-vojta-terapija-mobile.png"
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
              src="/services/vojta-therapy.jpg"
              alt={txt.heroTitle}
              fill
              priority
              quality={95}
              sizes="(max-width: 768px) 1px, 100vw"
              className="object-cover object-center hidden md:block"
              style={{ 
                filter: 'brightness(1.1) contrast(0.95) blur(3px)'
              }}
            />
            {/* Белый оверлей для единого светлого тона */}
            <div className="absolute inset-0 bg-white opacity-15 pointer-events-none" />
            {/* Gradient Overlay - darker on left for text */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          </div>

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                  {txt.heroTitle}
                </h1>
                <p className="text-lg md:text-2xl text-white/95 leading-relaxed mb-6 md:mb-8">
                  {txt.heroSub}
                </p>
                
                <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
                  <a
                    href="/registracija"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#54B6FC] to-[#4a9fe0] hover:from-[#4a9fe0] hover:to-[#54B6FC] text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base transition-all hover:scale-105 shadow-lg"
                  >
                    <span>{txt.ctaRegister}</span>
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                  <a
                    href="tel:+37066699676"
                    className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur text-white border-2 border-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base transition-all"
                  >
                    <Phone className="w-4 h-4 md:w-5 md:h-5" />
                    <span>+370 666 99676</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-gradient-to-br from-white to-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {txt.introTitle}
            </h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#54B6FC]/20 mb-8">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                {txt.introP1}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {txt.introP2}
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0] rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">{txt.introGoal}</h3>
                  <p className="text-white/95 leading-relaxed text-lg">
                    {txt.introGoalText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Indications Section */}
        <section className="py-16 bg-gradient-to-br from-[#fb7825] to-[#e66f1f]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              {txt.indicationsTitle}
            </h2>

            {/* Kūdikiams */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {txt.indicationsSubtitle}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: txt.indication1, desc: txt.indication1desc },
                  { title: txt.indication2, desc: txt.indication2desc },
                  { title: txt.indication3, desc: txt.indication3desc },
                  { title: txt.indication4, desc: txt.indication4desc },
                  { title: txt.indication5, desc: txt.indication5desc },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md border-2 border-white/40 hover:border-white transition-all hover:-translate-y-1"
                  >
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Vyresniems */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {txt.indicationsOlder}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: txt.older1, desc: txt.older1desc },
                  { title: txt.older2, desc: txt.older2desc },
                  { title: txt.older3, desc: txt.older3desc },
                  { title: txt.older4, desc: txt.older4desc },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md border-2 border-white/40 hover:border-white transition-all hover:-translate-y-1"
                  >
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Concerns Section - Важный блок про плач */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#fb7825]/30">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#fb7825]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-8 h-8 text-[#fb7825]" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {txt.concernsTitle}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {txt.concernsIntro}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-[#54B6FC] mb-2">
                    {txt.concernQ1}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {txt.concernA1}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-[#54B6FC] mb-2">
                    {txt.concernQ2}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {txt.concernA2}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-[#54B6FC] mb-2">
                    {txt.concernEffect}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {txt.concernEffectText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              {txt.processTitle}
            </h2>
            <p className="text-lg text-white/95 mb-12 text-center max-w-3xl mx-auto">
              {txt.processSubtitle}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { num: '1', title: txt.step1, desc: txt.step1desc },
                { num: '2', title: txt.step2, desc: txt.step2desc },
                { num: '3', title: txt.step3, desc: txt.step3desc },
                { num: '4', title: txt.step4, desc: txt.step4desc },
              ].map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-1 transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0] rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-white font-bold text-xl">{step.num}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed text-center">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {txt.resultsTitle}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: txt.result1, desc: txt.result1desc, color: 'blue' },
                { title: txt.result2, desc: txt.result2desc, color: 'orange' },
                { title: txt.result3, desc: txt.result3desc, color: 'blue' },
                { title: txt.result4, desc: txt.result4desc, color: 'orange' },
              ].map((result, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-8 shadow-lg border-2 ${
                    result.color === 'blue' ? 'border-[#54B6FC]/30' : 'border-[#fb7825]/30'
                  } hover:-translate-y-1 transition-all`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    result.color === 'blue' ? 'bg-[#54B6FC]/10' : 'bg-[#fb7825]/10'
                  }`}>
                    <CheckCircle className={`w-6 h-6 ${
                      result.color === 'blue' ? 'text-[#54B6FC]' : 'text-[#fb7825]'
                    }`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {result.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {result.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials translations={t} />

        {/* Specialist */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {txt.specialistTitle}
            </h2>

            <div className="max-w-md mx-auto">
              <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Photo with 3:4 aspect ratio like main page */}
                <div className="relative aspect-[3/4] bg-gradient-to-br from-[#54B6FC]/15 to-[#fb7825]/15 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/specialists/agne.png"
                    alt="Agnė Juodytė"
                    fill
                    className="object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 90vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Agnė Juodytė
                  </h3>
                  <div className="text-sm font-semibold text-[#54B6FC] mb-4">
                    {txt.agne}
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm mb-4">
                    {txt.agneDesc}
                  </p>
                  <Link
                    href="/registracija"
                    className="inline-flex items-center space-x-2 text-[#54B6FC] font-semibold hover:text-[#4a9fe0] transition-colors"
                  >
                    <span>{txt.ctaRegister}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {txt.faqTitle}
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all border-2 border-gray-100 hover:border-[#54B6FC]"
                >
                  <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-[#54B6FC] group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                {txt.finalTitle}
              </h2>
              <p className="text-xl text-white/90 mb-2">
                {txt.address}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="/registracija"
                className="inline-flex items-center space-x-2 bg-white text-[#54B6FC] px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all shadow-lg"
              >
                <span>{txt.ctaRegister}</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+37066699676"
                className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur text-white border-2 border-white px-8 py-4 rounded-full font-semibold transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>+370 666 99676</span>
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
