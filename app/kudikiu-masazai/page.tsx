'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import { translations, type Language } from '@/lib/i18n/translations';
import { Phone, ArrowRight, CheckCircle, Clock, MapPin } from 'lucide-react';

export default function KudikiuMasazasPage() {
  const [currentLang, setCurrentLang] = useState<Language>('lt');
  const [showMap, setShowMap] = useState(false);
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
      heroTitle: 'Kūdikių masažas Vilniuje',
      heroSub: 'Švelnus, kūdikiui pritaikytas masažas – atsipalaidavimui, tonuso balansui ir geresnei savijautai.',
      heroNote: 'Masažas be streso – prisitaikome prie kūdikio ritmo, darome pertraukėles, jei reikia.',
      whenTitle: 'Kada verta rinktis kūdikių masažą?',
      whenSubtitle: 'Jei atpažįstate bent vieną:',
      sign1: 'Kūdikis dažnai įsitempęs arba, atvirkščiai, "minkštas", greitai pavargsta.',
      sign2: 'Kūdikis neramus, sunkiau atsipalaiduoja, sunkiau nusiramina po aktyvumo.',
      sign3: 'Matote, kad kūnui trūksta "laisvumo" – judesiai atrodo sukaustyti.',
      sign4: 'Norite švelniai palaikyti kūdikio savijautą ir kasdienį komfortą.',
      sign5: 'Masažas rekomenduotas gydytojo ar specialisto kaip papildoma pagalba.',
      whatWeHelpTitle: 'Ką padedame spręsti?',
      whatWeHelpSubtitle: 'Trumpai ir aiškiai – pasirinkite situaciją, kuri labiausiai atitinka jūsų kūdikį:',
      situation1: 'Raumenų įtampa (hipertonuso požymiai)',
      situation1desc: 'Švelniai padedame kūnui lengviau atsipalaiduoti.',
      situation2: 'Sumažėjęs raumenų tonusas (hipotonijos požymiai)',
      situation2desc: 'Tonizuojantys prisilietimai pagal amžių ir toleranciją.',
      situation3: 'Neramumas ir sunkiau nusiraminantis kūdikis',
      situation3desc: 'Rami, lėta eiga padeda pereiti į ramesnę būseną.',
      situation4: '„Sukaustytas" kūnas / mažiau judesio laisvumo',
      situation4desc: 'Švelnūs prisilietimai ir padėčių korekcijos komfortui.',
      situation5: 'Jautrumas prisilietimui / sunku atsipalaiduoti',
      situation5desc: 'Dirbame labai švelniai, prisitaikome prie reakcijų.',
      situation6: 'Papildoma pagalba šalia kineziterapijos',
      situation6desc: 'Padeda paruošti kūną judesiui ir namų rekomendacijoms.',
      situation7: 'Tėvų edukacija (ką daryti namuose)',
      situation7desc: 'Parodome saugius, paprastus elementus kasdienybei.',
      ctaRegister: 'Užsiregistruoti vizitui',
      ctaCall: 'Paskambinti: +370 666 99676',
      sessionTitle: 'Kaip vyksta kūdikių masažo vizitas?',
      sessionDesc: 'Masažą pritaikome pagal kūdikio amžių, nuotaiką ir dienos ritmą. Dirbame švelniai, be skubėjimo, kad kūdikiui būtų saugu ir ramu.',
      parentsTitle: 'Tėvų vaidmuo:',
      parentsDesc: 'Tėvai gali būti šalia viso vizito metu. Paaiškiname, ką darome ir kodėl, o prireikus parodome, kaip švelniai padėti kūdikiui namuose.',
      ruleTitle: '"15 minučių" principas (be spaudimo):',
      ruleDesc: 'Jei kūdikis išalksta, pavargsta ar reikia nuraminti – darome pertraukėles. Mums svarbi kūdikio emocinė būsena, todėl dirbame ramiai, ne "konvejeriu".',
      afterTitle: 'Ką gaunate po vizito:',
      after1: 'Aiškų paaiškinimą, ką pastebėjome (įtampa / reakcija / tolerancija).',
      after2: 'Rekomendacijas kasdienybei (padėtys, prisilietimai, rutinos).',
      after3: 'Jei reikia – pasiūlymą, kaip masažą derinti su kineziterapija.',
      methodTitle: 'Mūsų požiūris į kūdikių masažą',
      methodDesc: 'Kūdikių masažas FitKid klinikoje – tai švelnus, kūdikiui pritaikytas darbas, kurio tikslas yra komfortas, atsipalaidavimas ir tonuso balansavimas.',
      method1: 'Dirbame pagal kūdikio toleranciją',
      method1desc: 'be skausmo ir be prievartos.',
      method2: 'Masažą pritaikome individualiai',
      method2desc: 'o ne pagal "vieną schemą visiems".',
      method3: 'Jei reikalingas platesnis įvertinimas',
      method3desc: 'rekomenduojame kineziterapeuto konsultaciją.',
      visitsTitle: 'Kiek vizitų prireiks?',
      visitsDesc: 'Kūdikių savijauta ir raida keičiasi greitai, todėl dažniausiai dirbame dinamiškai – stebime reakciją į masažą ir pritaikome rekomendacijas pagal kūdikio būseną.',
      visitsModel: 'Dažniausias modelis:',
      visit1: '1 vizitas',
      visit1desc: 'įvertiname kūdikio reakciją, parenkame tinkamiausią eigą, duodame rekomendacijas namams.',
      visit2: 'Keli vizitai',
      visit2desc: 'kai norisi nuoseklesnio darbo arba masažas derinamas su kitomis rekomendacijomis.',
      visit3: 'Toliau pagal poreikį',
      visit3desc: 'kad šeimai būtų aišku ir patogu, be "pririšimo".',
      specialistsTitle: 'Kas atlieka kūdikių masažą?',
      ramune: 'Ramunė Nemeikaitė',
      ramuneRole: 'Masažuotoja',
      ramuneDesc: 'Sertifikuota vaikų masažo specialistė, turinti patirties dirbant su kūdikiais ir vaikais.',
      viewProfile: 'Žiūrėti profilį',
      meetTeam: 'Susipažinti su visa komanda',
      additionalTitle: 'Papildomos paslaugos kūdikiams',
      kineziterapija: 'Kūdikių kineziterapija',
      kineziterapijaDesc: 'kai reikia motorinės raidos įvertinimo ir aiškaus plano.',
      swimming: 'Kūdikių plukdymas',
      swimmingDesc: 'judėjimas vandenyje, padedantis atsipalaiduoti ir stiprėti.',
      faqTitle: 'Dažniausiai užduodami klausimai',
      q1: 'Nuo kokio amžiaus galima pradėti kūdikių masažą?',
      a1: 'Masažą pritaikome pagal kūdikio amžių ir situaciją. Jei abejojate – parašykite, patarsime nuo ko pradėti.',
      q2: 'Kaip pasiruošti masažo vizitui?',
      a2: 'Patogu, kai kūdikis nėra labai alkanas ir nėra visiškai pervargęs. Atsineškite sauskelnių, mėgstamą žaisliuką ir (jei naudojate) buteliuką ar čiulptuką.',
      q3: 'Ar kūdikis turi būti išsimiegojęs?',
      a3: 'Geriausia, kai kūdikis nėra visiškai pervargęs, tačiau prisitaikome ir prie realybės – dirbame ramiai, su pertraukėlėmis.',
      q4: 'O jeigu kūdikis verks ar norės valgyti?',
      a4: 'Tai normalu. Darome pertraukėles, skiriame laiko maitinimui ar raminimui – masažas neturi būti stresas.',
      q5: 'Kaip dažnai galima lankytis masaže?',
      a5: 'Dažnis priklauso nuo tikslo ir kūdikio reakcijos. Po pirmo vizito pasiūlome aiškų, realistišką planą.',
      q6: 'Ar masažas gali būti derinamas su kineziterapija?',
      a6: 'Taip. Dažnai masažas yra geras papildymas, ypač kai kartu taikomos kasdienės korekcijos ir pratimai.',
      q7: 'Ar galima atvykti, jei kūdikis serga ar ką tik sirgo?',
      a7: 'Jei yra karščiavimas ar ūmi infekcija – vizitą geriau perkelti. Jei abejojate – susisiekite, patarsime pagal situaciją.',
      q8: 'Ar gali ateiti abu tėvai?',
      a8: 'Taip – rekomenduojame. Abu tėvai gali išmokti paprastų, saugių prisilietimų ir kasdienių korekcijų.',
      finalCTA: 'Norite ramaus, švelnaus sprendimo kūdikio savijautai?',
      finalCTADesc: 'Užsiregistruokite vizitui – prisitaikome prie kūdikio ritmo.',
      address: 'Aludarių g. 7–43, Vilnius',
      showMap: 'Rodyti žemėlapį',
    },
    en: {
      heroTitle: 'Infant Massage in Vilnius',
      heroSub: 'Gentle, infant-adapted massage – for relaxation, tone balance and better well-being.',
      heroNote: 'Massage without stress – we adapt to the infant\'s rhythm, take breaks if needed.',
      whenTitle: 'When to choose infant massage?',
      whenSubtitle: 'If you recognize at least one:',
      sign1: 'Infant is often tense or, conversely, "soft", gets tired quickly.',
      sign2: 'Infant is restless, harder to relax, harder to calm down after activity.',
      sign3: 'You see that the body lacks "freedom" – movements seem constrained.',
      sign4: 'You want to gently support the infant\'s well-being and daily comfort.',
      sign5: 'Massage recommended by doctor or specialist as additional help.',
      whatWeHelpTitle: 'What we help solve?',
      whatWeHelpSubtitle: 'Brief and clear – choose the situation that best matches your infant:',
      situation1: 'Muscle tension (signs of hypertonus)',
      situation1desc: 'Gently help the body relax more easily.',
      situation2: 'Reduced muscle tone (signs of hypotonia)',
      situation2desc: 'Toning touches according to age and tolerance.',
      situation3: 'Restlessness and harder to calm infant',
      situation3desc: 'Calm, slow pace helps transition to a calmer state.',
      situation4: '"Constrained" body / less movement freedom',
      situation4desc: 'Gentle touches and position corrections for comfort.',
      situation5: 'Sensitivity to touch / difficult to relax',
      situation5desc: 'We work very gently, adapt to reactions.',
      situation6: 'Additional help alongside physiotherapy',
      situation6desc: 'Helps prepare the body for movement and home recommendations.',
      situation7: 'Parent education (what to do at home)',
      situation7desc: 'We show safe, simple elements for everyday life.',
      ctaRegister: 'Register for visit',
      ctaCall: 'Call: +370 666 99676',
      sessionTitle: 'How does infant massage visit work?',
      sessionDesc: 'We adapt massage according to infant\'s age, mood and daily rhythm. We work gently, without rush, so the infant feels safe and calm.',
      parentsTitle: 'Parents\' role:',
      parentsDesc: 'Parents can be present throughout the visit. We explain what we do and why, and if needed, show how to gently help the infant at home.',
      ruleTitle: '"15 minutes" principle (without pressure):',
      ruleDesc: 'If infant is hungry, tired or needs to be calmed – we take breaks. The infant\'s emotional state is important to us, so we work calmly, not "assembly line".',
      afterTitle: 'What you get after visit:',
      after1: 'Clear explanation of what we noticed (tension / reaction / tolerance).',
      after2: 'Recommendations for everyday life (positions, touches, routines).',
      after3: 'If needed – suggestion on how to combine massage with physiotherapy.',
      methodTitle: 'Our approach to infant massage',
      methodDesc: 'Infant massage at FitKid clinic is gentle, infant-adapted work aimed at comfort, relaxation and tone balancing.',
      method1: 'We work according to infant\'s tolerance',
      method1desc: 'without pain and without force.',
      method2: 'We adapt massage individually',
      method2desc: 'not according to "one scheme for all".',
      method3: 'If broader assessment is needed',
      method3desc: 'we recommend physiotherapist consultation.',
      visitsTitle: 'How many visits will be needed?',
      visitsDesc: 'Infant well-being and development change quickly, so we usually work dynamically – monitor reaction to massage and adapt recommendations according to infant\'s condition.',
      visitsModel: 'Most common model:',
      visit1: '1 visit',
      visit1desc: 'we assess infant\'s reaction, select the most suitable approach, give recommendations for home.',
      visit2: 'Several visits',
      visit2desc: 'when more consistent work is desired or massage is combined with other recommendations.',
      visit3: 'Further as needed',
      visit3desc: 'so family has clarity and comfort, without "binding".',
      specialistsTitle: 'Who performs infant massage?',
      ramune: 'Ramunė Nemeikaitė',
      ramuneRole: 'Massage therapist',
      ramuneDesc: 'Certified children\'s massage specialist with experience working with infants and children.',
      viewProfile: 'View profile',
      meetTeam: 'Meet the whole team',
      additionalTitle: 'Additional services for infants',
      kineziterapija: 'Infant physiotherapy',
      kineziterapijaDesc: 'when motor development assessment and clear plan is needed.',
      swimming: 'Infant swimming',
      swimmingDesc: 'movement in water, helping to relax and strengthen.',
      faqTitle: 'Frequently asked questions',
      q1: 'From what age can infant massage be started?',
      a1: 'We adapt massage according to infant\'s age and situation. If you have doubts – write, we will advise where to start.',
      q2: 'How to prepare for massage visit?',
      a2: 'Convenient when infant is not very hungry and not completely tired. Bring diapers, favorite toy and (if using) bottle or pacifier.',
      q3: 'Should infant be well rested?',
      a3: 'Best when infant is not completely tired, but we also adapt to reality – we work calmly, with breaks.',
      q4: 'What if infant cries or wants to eat?',
      a4: 'This is normal. We take breaks, allocate time for feeding or calming – massage should not be stress.',
      q5: 'How often can massage visits be?',
      a5: 'Frequency depends on goal and infant\'s reaction. After first visit we offer clear, realistic plan.',
      q6: 'Can massage be combined with physiotherapy?',
      a6: 'Yes. Often massage is good addition, especially when daily corrections and exercises are applied together.',
      q7: 'Can we come if infant is sick or just recovered?',
      a7: 'If there is fever or acute infection – better to postpone visit. If in doubt – contact us, we will advise according to situation.',
      q8: 'Can both parents come?',
      a8: 'Yes – we recommend. Both parents can learn simple, safe touches and daily corrections.',
      finalCTA: 'Want calm, gentle solution for infant\'s well-being?',
      finalCTADesc: 'Register for visit – we adapt to infant\'s rhythm.',
      address: 'Aludarių g. 7–43, Vilnius',
      showMap: 'Show map',
    },
  };

  const txt = pageText[currentLang];

  const specialist = {
    name: txt.ramune,
    role: txt.ramuneRole,
    description: txt.ramuneDesc,
    image: '/specialists/ramune.jpg',
  };

  const additionalServices = [
    {
      name: txt.kineziterapija,
      description: txt.kineziterapijaDesc,
      slug: 'kudikiu-kineziterapija',
    },
    {
      name: txt.swimming,
      description: txt.swimmingDesc,
      slug: 'kudikiu-plukdymas',
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
    { q: txt.q8, a: txt.a8 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header
        translations={t}
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
      />

      <main>
        {/* Hero Section with 16:9 Image */}
        <section className="relative bg-[#f5f3f0] overflow-hidden" style={{ minHeight: 'clamp(420px, 55vh, 620px)' }}>
          {/* Background Image 16:9 */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/hero/hero-kudikiu-masazas.png"
              alt={txt.heroTitle}
              fill
              priority
              quality={95}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1920px"
              style={{ 
                objectFit: 'cover', 
                objectPosition: 'center center',
                filter: 'brightness(1.1) contrast(0.95)'
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {txt.heroTitle}
                </h1>
                <p className="text-xl md:text-2xl text-white/95 leading-relaxed mb-8">
                  {txt.heroSub}
                </p>
                
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <a
                    href="/registracija"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#54B6FC] to-[#4a9fe0] hover:from-[#4a9fe0] hover:to-[#54B6FC] text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
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
              </div>
            </div>
          </div>
        </section>

        {/* When to Choose Massage Section */}
        <section className="bg-gradient-to-br from-[#54B6FC]/10 via-white to-[#fb7825]/5 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                {txt.whenTitle}
              </h2>
              <p className="text-lg text-gray-700 mb-8 text-center font-medium">
                {txt.whenSubtitle}
              </p>
              
              <ul className="space-y-4 mb-8">
                {[txt.sign1, txt.sign2, txt.sign3, txt.sign4, txt.sign5].map((sign, i) => (
                  <li key={i} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-[#54B6FC]/5 transition-colors">
                    <CheckCircle className="w-6 h-6 text-[#54B6FC] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 leading-relaxed">{sign}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gradient-to-r from-[#54B6FC]/10 to-[#fb7825]/10 rounded-xl p-4 border-l-4 border-[#54B6FC]">
                <p className="text-center text-gray-900 font-semibold">
                  {txt.heroNote}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Help Solve Section */}
        <section className="py-20 bg-gradient-to-br from-[#fb7825] to-[#e66f1f]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              {txt.whatWeHelpTitle}
            </h2>
            <p className="text-lg text-white/90 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
              {txt.whatWeHelpSubtitle}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: txt.situation1, desc: txt.situation1desc },
                { title: txt.situation2, desc: txt.situation2desc },
                { title: txt.situation3, desc: txt.situation3desc },
                { title: txt.situation4, desc: txt.situation4desc },
                { title: txt.situation5, desc: txt.situation5desc },
                { title: txt.situation6, desc: txt.situation6desc },
                { title: txt.situation7, desc: txt.situation7desc },
              ].map((situation, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-white hover:border-white transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#fb7825] transition-colors">
                    {situation.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {situation.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How Session Works */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              {txt.sessionTitle}
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center leading-relaxed max-w-4xl mx-auto">
              {txt.sessionDesc}
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {/* Card 1: Session */}
              <div className="bg-white rounded-2xl p-7 shadow-lg border border-gray-200 hover:shadow-xl hover:border-[#54B6FC] transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0] rounded-xl flex items-center justify-center mb-5 shadow-md">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{txt.sessionTitle}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {txt.sessionDesc}
                </p>
              </div>

              {/* Card 2: Parents Role */}
              <div className="bg-white rounded-2xl p-7 shadow-lg border border-gray-200 hover:shadow-xl hover:border-[#54B6FC] transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0] rounded-xl flex items-center justify-center mb-5 shadow-md">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{txt.parentsTitle}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {txt.parentsDesc}
                </p>
              </div>

              {/* Card 3: After Visit */}
              <div className="bg-white rounded-2xl p-7 shadow-lg border border-gray-200 hover:shadow-xl hover:border-[#54B6FC] transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0] rounded-xl flex items-center justify-center mb-5 shadow-md">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{txt.afterTitle}</h3>
                <ul className="space-y-2">
                  {[txt.after1, txt.after2, txt.after3].map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-[#54B6FC] mt-1 text-sm font-bold">•</span>
                      <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Special Callout: 15 minučių principas */}
            <div className="bg-gradient-to-br from-[#fb7825] to-[#e66f1f] rounded-2xl p-8 md:p-10 text-white shadow-2xl">
              <div className="flex items-start space-x-5">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Clock className="w-9 h-9 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{txt.ruleTitle}</h3>
                  <p className="text-white/95 leading-relaxed text-base">
                    {txt.ruleDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              {txt.methodTitle}
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
              {txt.methodDesc}
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Method 1 */}
              <div className="bg-white rounded-2xl p-7 shadow-lg border border-gray-200 hover:shadow-xl hover:border-[#54B6FC] transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0] rounded-xl flex items-center justify-center mb-5 shadow-md">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{txt.method1}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{txt.method1desc}</p>
              </div>

              {/* Method 2 */}
              <div className="bg-white rounded-2xl p-7 shadow-lg border border-gray-200 hover:shadow-xl hover:border-[#54B6FC] transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0] rounded-xl flex items-center justify-center mb-5 shadow-md">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{txt.method2}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{txt.method2desc}</p>
              </div>

              {/* Method 3 */}
              <div className="bg-white rounded-2xl p-7 shadow-lg border border-gray-200 hover:shadow-xl hover:border-[#54B6FC] transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0] rounded-xl flex items-center justify-center mb-5 shadow-md">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{txt.method3}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{txt.method3desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* How Many Visits */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              {txt.visitsTitle}
            </h2>
            <p className="text-lg text-gray-700 mb-16 leading-relaxed text-center max-w-3xl mx-auto">
              {txt.visitsDesc}
            </p>

            {/* Timeline / Stepper */}
            <div className="relative">
              {/* Connection line - desktop only */}
              <div className="hidden md:block absolute top-16 left-0 right-0 h-2 bg-gradient-to-r from-[#54B6FC] via-[#54B6FC] to-[#fb7825] mx-auto rounded-full shadow-md" style={{ width: 'calc(100% - 160px)', left: '80px' }} />
              
              <div className="grid md:grid-cols-3 gap-8 relative">
                {/* Step 1 */}
                <div className="relative">
                  <div className="bg-white rounded-2xl p-7 shadow-xl border-2 border-[#54B6FC] relative z-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0] rounded-full flex items-center justify-center mb-5 mx-auto shadow-lg ring-4 ring-white">
                      <span className="text-white font-bold text-3xl">1</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{txt.visit1}</h3>
                    <p className="text-sm text-gray-700 text-center leading-relaxed">{txt.visit1desc}</p>
                  </div>
                  {/* Arrow - mobile */}
                  <div className="md:hidden flex justify-center my-4">
                    <ArrowRight className="w-10 h-10 text-[#54B6FC]" />
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <div className="bg-white rounded-2xl p-7 shadow-xl border-2 border-[#54B6FC] relative z-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0] rounded-full flex items-center justify-center mb-5 mx-auto shadow-lg ring-4 ring-white">
                      <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{txt.visit2}</h3>
                    <p className="text-sm text-gray-700 text-center leading-relaxed">{txt.visit2desc}</p>
                  </div>
                  {/* Arrow - mobile */}
                  <div className="md:hidden flex justify-center my-4">
                    <ArrowRight className="w-10 h-10 text-[#fb7825]" />
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <div className="bg-white rounded-2xl p-7 shadow-xl border-2 border-[#fb7825] relative z-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#fb7825] to-[#e66f1f] rounded-full flex items-center justify-center mb-5 mx-auto shadow-lg ring-4 ring-white">
                      <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{txt.visit3}</h3>
                    <p className="text-sm text-gray-700 text-center leading-relaxed">{txt.visit3desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialist */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
              {txt.specialistsTitle}
            </h2>

            <div className="max-w-md mx-auto mb-10">
              <div className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#54B6FC] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Photo with 4:5 aspect ratio */}
                <div className="relative bg-gradient-to-br from-[#54B6FC]/15 to-[#fb7825]/15 overflow-hidden" style={{ aspectRatio: '4/5' }}>
                  <Image
                    src={specialist.image}
                    alt={specialist.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.09]"
                    style={{ 
                      objectPosition: '50% 15%',
                      transform: 'scale(1.06)'
                    }}
                    sizes="(min-width: 768px) 360px, 90vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="p-7">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {specialist.name}
                  </h3>
                  <div className="text-sm font-semibold text-[#54B6FC] mb-4">
                    {specialist.role}
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm mb-5">
                    {specialist.description}
                  </p>
                  <div className="inline-flex items-center space-x-2 text-[#54B6FC] font-semibold group-hover:text-[#4a9fe0] transition-colors">
                    <span>{txt.viewProfile}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/registracija"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#54B6FC] to-[#4a9fe0] hover:from-[#4a9fe0] hover:to-[#54B6FC] text-white px-10 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-xl text-lg"
              >
                <span>{txt.meetTeam}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              {txt.additionalTitle}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {additionalServices.map((service, index) => (
                <Link
                  key={index}
                  href={`/${service.slug}`}
                  className="group bg-white rounded-2xl p-7 shadow-lg border border-gray-200 hover:border-[#54B6FC] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#54B6FC] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-700 mb-5 leading-relaxed">{service.description}</p>
                  <div className="inline-flex items-center space-x-2 text-[#54B6FC] font-semibold">
                    <span>Sužinoti daugiau</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              ))}
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
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#54B6FC]"
                >
                  <summary className="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center gap-4 text-base">
                    <span>{faq.q}</span>
                    <div className="w-8 h-8 rounded-lg bg-[#54B6FC]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#54B6FC] transition-colors">
                      <svg className="w-5 h-5 text-[#54B6FC] group-hover:text-white group-open:rotate-180 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="mt-5 pt-5 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {txt.finalCTA}
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              {txt.finalCTADesc}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="/registracija"
                className="inline-flex items-center space-x-2 bg-white hover:bg-gray-50 text-[#54B6FC] px-10 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-xl text-lg"
              >
                <span>{txt.ctaRegister}</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+37066699676"
                className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur text-white border-2 border-white px-10 py-4 rounded-full font-semibold transition-all text-lg"
              >
                <Phone className="w-5 h-5" />
                <span>+370 666 99676</span>
              </a>
            </div>

            <div className="border-t border-white/20 pt-8">
              <div className="flex items-center justify-center space-x-2 text-white/90 mb-4">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">{txt.address}</span>
              </div>
              
              {!showMap ? (
                <button
                  onClick={() => setShowMap(true)}
                  className="inline-flex items-center space-x-2 text-white font-semibold hover:text-white/90 transition-colors"
                >
                  <span>{txt.showMap}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <div className="mt-6 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
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
        </section>
      </main>

      <Footer translations={t} />
      <FloatingActionButtons currentLang={currentLang} />
    </div>
  );
}
