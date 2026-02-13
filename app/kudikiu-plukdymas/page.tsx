'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import { translations, type Language } from '@/lib/i18n/translations';
import { Phone, ArrowRight, CheckCircle, Clock, MapPin, Waves } from 'lucide-react';

export default function KudikiuPlukdymasPage() {
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
      heroTitle: 'Kūdikių plukdymas',
      heroSub: 'Plukdymas pas mus vyksta kartu su kineziterapija arba masažu – taip sukuriame didžiausią vertę: kūdikis atsipalaiduoja vandenyje, o tada kryptingai dirbame su judėjimu ar tonusu.',
      heroNote: 'Be streso – prisitaikome prie kūdikio ritmo, darome pertraukėles, jei reikia.',
      briefTitle: 'Trumpai apie procedūrą (45 min)',
      briefDesc: 'Kūdikių plukdymas FitKid klinikoje – tai apie 45 min procedūra, kurioje deriname: plukdymą (darbas vandenyje) ir kineziterapiją arba masažą (pagal kūdikio poreikius) Vanduo padeda kūdikiui lengviau atsipalaiduoti ir „atsiverti" judesiui, o po to kryptingai pritaikome darbą ir duodame aiškias rekomendacijas tėvams.',
      whenTitle: 'Kada verta rinktis plukdymą su kineziterapija ar masažu?',
      whenSubtitle: 'Jei atpažįstate bent vieną:',
      sign1: 'Kūdikis dažnai įsitempia, sunkiau atsipalaiduoja.',
      sign2: 'Kūdikis neramus, jautrus, sunkiau nusiramina.',
      sign3: 'Ant pilvuko greitai pavargsta, pyksta, nenori remtis rankytėmis.',
      sign4: 'Norite švelnaus būdo stiprinti judėjimo kokybę ir atramas.',
      sign5: 'Norite, kad po procedūros būtų aiškus planas, ką daryti namuose.',
      whatWeHelpTitle: 'Ką padedame spręsti?',
      whatWeHelpSubtitle: 'Trumpai ir aiškiai – pasirinkite situaciją, kuri labiausiai atitinka jūsų kūdikį:',
      situation1: 'Įtampa ir sunku atsipalaiduoti',
      situation1desc: 'Vanduo padeda nusiraminti, o po to kryptingai dirbame su tonusu.',
      situation2: 'Neramumas ir jautrumas',
      situation2desc: 'Rami eiga + pertraukėlės pagal kūdikio reakciją.',
      situation3: 'Pilvuko toleravimas',
      situation3desc: 'Padedame palaipsniui priprasti prie padėčių ir atramų.',
      situation4: 'Atramos ir stabilumas',
      situation4desc: 'Švelniai stipriname atramas pagal raidos etapą.',
      situation5: 'Judėjimo laisvumas ir simetrija',
      situation5desc: 'Darbo kryptį parenkame pagal tai, ką realiai matome judesyje.',
      situation6: 'Papildoma pagalba šalia plano',
      situation6desc: 'Kai norisi daugiau komforto ir lengvesnio judėjimo tarp vizitų.',
      ctaRegister: 'Užsiregistruoti vizitui',
      ctaCall: 'Paskambinti: +370 666 99676',
      sessionTitle: 'Kaip vyksta procedūra (apie 45 min)?',
      sessionDesc: 'Procedūrą pritaikome prie kūdikio amžiaus, nuotaikos ir dienos ritmo.',
      part1Title: '1 dalis – Plukdymas (vandenyje)',
      part1Desc: 'Vandens aplinkoje kūdikis dažnai juda lengviau, todėl galime švelniai dirbti su komfortu, padėtimis ir reakcijomis. Stebime savijautą ir pritaikome tempą.',
      part2Title: '2 dalis – Kineziterapija arba masažas (pagal poreikį)',
      part2Desc: 'Po vandens parenkame kryptingą darbą: kineziterapiją – kai aktualu judėjimo kokybė, atramos, simetrija ir raidos kryptis; arba masažą – kai svarbus raumenų komfortas, įtampa ar tonuso balansas.',
      parentsTitle: 'Tėvų vaidmuo',
      parentsDesc: 'Tėvai yra aktyvi proceso dalis. Paaiškiname, ką darome ir kodėl, o jūs gaunate aiškias namų rekomendacijas (padėtys, nešiojimas, kasdieniai principai).',
      ruleTitle: '"15 minučių" principas (be spaudimo)',
      ruleDesc: 'Jei kūdikis išalksta, pavargsta ar jam reikia nurimti – darome pertraukėles. Mums svarbi kūdikio emocinė būsena, todėl dirbame ramiai, be "konvejerio".',
      afterTitle: 'Ką gaunate po procedūros',
      after1: 'Aiškų paaiškinimą: ką matome (reakcijas, tonusą, atramas, komfortą).',
      after2: 'Tolimesnį planą: ką verta tęsti ir kaip derinti vizitus.',
      after3: 'Praktines rekomendacijas namams: ką keisti kasdienybėje ir ko vengti.',
      whyTitle: 'Kodėl plukdymą deriname su kineziterapija arba masažu?',
      whyDesc: 'Mes nematome didelės vertės „vien tik plukdyme". Didžiausias rezultatas atsiranda tada, kai: vanduo padeda kūdikiui atsipalaiduoti ir lengviau judėti, o po to kryptingai pritaikome kineziterapiją arba masažą pagal tai, ką realiai matome. Tai leidžia procedūrą padaryti ne tik malonią, bet ir prasmingą – su aiškiu planu šeimai.',
      prepareTitle: 'Kaip pasiruošti?',
      prepareDesc: 'Patogu, kai kūdikis nėra labai alkanas ir nėra visiškai pervargęs. Plukdymui viską suteikiame vietoje – nieko papildomai pirkti nereikia (jokių "dirželių", priemonių ar pan.). Jei naudojate – galite atsinešti čiulptuką ar buteliuką, kad kūdikiui būtų ramiau.',
      safetyTitle: 'Saugumas: kada geriau atidėti procedūrą?',
      safetyDesc: 'Procedūrą geriau perkelti, jei: yra karščiavimas ar ūmi infekcija; kūdikis akivaizdžiai prastai jaučiasi; yra odos paūmėjimai ar bėrimai, dėl kurių vanduo gali dirginti. Jei abejojate – parašykite arba paskambinkite, patarsime pagal situaciją.',
      visitsTitle: 'Kiek vizitų prireiks?',
      visitsDesc: 'Kūdikių raida ir savijauta keičiasi greitai, todėl dirbame dinamiškai – stebime pokyčius ir pritaikome rekomendacijas pagal augimą.',
      visitsModel: 'Dažniausias modelis:',
      visit1: '1 procedūra',
      visit1desc: 'įvertiname reakciją, parenkame kryptį, duodame rekomendacijas.',
      visit2: 'Keli vizitai',
      visit2desc: 'kai norisi nuoseklesnio įpročio ir aiškesnio progreso.',
      visit3: 'Toliau pagal poreikį',
      visit3desc: 'kad šeimai būtų paprasta ir aišku.',
      specialistsTitle: 'Kas atlieka procedūrą?',
      ksenija: 'Ksenija Persijanova',
      ksenijaRole: 'Kineziterapeutė',
      ksenijaDesc: 'Patirtis kūdikių kineziterapijoje ir kūdikių hidroterapijos procedūrose. Dirba su vaikais pagal individualų planą ir aiškiai paaiškina tėvams, ką daryti kasdienybėje.',
      viewProfile: 'Žiūrėti profilį',
      meetTeam: 'Susipažinti su visa komanda',
      additionalTitle: 'Papildomos paslaugos kūdikiams',
      kineziterapija: 'Kūdikių kineziterapija',
      kineziterapijaDesc: 'motorinės raidos įvertinimas ir aiškus planas.',
      masazai: 'Kūdikių masažai',
      masazaiDesc: 'švelnus raumenų atpalaidavimas ar tonizavimas pagal situaciją.',
      faqTitle: 'Dažniausiai užduodami klausimai',
      q1: 'Kiek trunka procedūra?',
      a1: 'Procedūra trunka apie 45 min ir apima plukdymą bei kineziterapiją arba masažą.',
      q2: 'Ar plukdymas vyksta atskirai?',
      a2: 'Ne. Plukdymą deriname su kineziterapija arba masažu, nes taip matome didžiausią vertę ir aiškesnį rezultatą.',
      q3: 'Ar reikia kažką nusipirkti plukdymui?',
      a3: 'Ne. Visas reikalingas priemones suteikiame vietoje – nieko papildomai pirkti nereikia.',
      q4: 'Kaip pasiruošti vizitui?',
      a4: 'Patogu, kai kūdikis nėra labai alkanas ir nėra visiškai pervargęs. Plukdymui viską suteikiame vietoje – nieko papildomai pirkti nereikia (jokių "dirželių", priemonių ar pan.). Jei naudojate – galite atsinešti čiulptuką ar buteliuką, kad kūdikiui būtų ramiau.',
      q5: 'O jeigu kūdikis verks ar norės valgyti?',
      a5: 'Tai normalu. Darome pertraukėles ir prisitaikome prie kūdikio ritmo.',
      q6: 'Kaip dažnai verta kartoti?',
      a6: 'Dažnis priklauso nuo tikslo ir kūdikio reakcijų. Po pirmo vizito pasiūlome aiškų, realistišką planą.',
      q7: 'Kada geriau vizitą atidėti?',
      a7: 'Procedūrą geriau perkelti, jei: yra karščiavimas ar ūmi infekcija; kūdikis akivaizdžiai prastai jaučiasi; yra odos paūmėjimai ar bėrimai, dėl kurių vanduo gali dirginti. Jei abejojate – parašykite arba paskambinkite, patarsime pagal situaciją.',
      q8: 'Ar gali ateiti abu tėvai?',
      a8: 'Taip – rekomenduojame. Abu tėvai gali geriau suprasti namų rekomendacijas ir kasdienius principus.',
      finalCTA: 'Norite ramesnio kūdikio ir aiškaus plano šeimai?',
      finalCTADesc: 'Užsiregistruokite procedūrai – prisitaikome prie kūdikio ritmo.',
      address: 'Aludarių g. 7–43, Vilnius',
      showMap: 'Rodyti žemėlapį',
    },
    en: {
      heroTitle: 'Infant Swimming in Vilnius',
      heroSub: 'Swimming with us takes place together with physiotherapy or massage – this way we create the greatest value: infant relaxes in water, and then we work purposefully with movement or tone.',
      heroNote: 'Without stress – we adapt to infant\'s rhythm, take breaks if needed.',
      briefTitle: 'Briefly about the procedure (45 min)',
      briefDesc: 'Infant swimming at FitKid clinic is about 45 min procedure combining: swimming (work in water) and physiotherapy or massage (according to infant\'s needs). Water helps infant relax more easily and "open up" to movement, and then we purposefully apply work and give clear recommendations to parents.',
      whenTitle: 'When to choose swimming with physiotherapy or massage?',
      whenSubtitle: 'If you recognize at least one:',
      sign1: 'Infant is often tense, harder to relax.',
      sign2: 'Infant is restless, sensitive, harder to calm down.',
      sign3: 'On tummy gets tired quickly, fussy, doesn\'t want to lean on hands.',
      sign4: 'You want gentle way to strengthen movement quality and supports.',
      sign5: 'You want clear plan after procedure, what to do at home.',
      whatWeHelpTitle: 'What we help solve?',
      whatWeHelpSubtitle: 'Brief and clear – choose situation that best matches your infant:',
      situation1: 'Tension and difficult to relax',
      situation1desc: 'Water helps calm down, then we work purposefully with tone.',
      situation2: 'Restlessness and sensitivity',
      situation2desc: 'Calm pace + breaks according to infant\'s reaction.',
      situation3: 'Tummy tolerance',
      situation3desc: 'Help gradually get used to positions and supports.',
      situation4: 'Supports and stability',
      situation4desc: 'Gently strengthen supports according to development stage.',
      situation5: 'Movement freedom and symmetry',
      situation5desc: 'We choose work direction based on what we actually see in movement.',
      situation6: 'Additional help alongside plan',
      situation6desc: 'When more comfort and easier movement between visits is desired.',
      ctaRegister: 'Register for visit',
      ctaCall: 'Call: +370 666 99676',
      sessionTitle: 'How does procedure work (about 45 min)?',
      sessionDesc: 'We adapt procedure to infant\'s age, mood and daily rhythm.',
      part1Title: 'Part 1 – Swimming (in water)',
      part1Desc: 'In water environment infant often moves more easily, so we can gently work with comfort, positions and reactions. We monitor well-being and adapt pace.',
      part2Title: 'Part 2 – Physiotherapy or massage (according to need)',
      part2Desc: 'After water we choose purposeful work: physiotherapy – when movement quality, supports, symmetry and development direction are relevant; or massage – when muscle comfort, tension or tone balance is important.',
      parentsTitle: 'Parents\' role',
      parentsDesc: 'Parents are active part of process. We explain what we do and why, and you get clear home recommendations (positions, carrying, daily principles).',
      ruleTitle: '"15 minutes" principle (without pressure)',
      ruleDesc: 'If infant is hungry, tired or needs to calm down – we take breaks. Infant\'s emotional state is important to us, so we work calmly, without "conveyor".',
      afterTitle: 'What you get after procedure',
      after1: 'Clear explanation: what we see (reactions, tone, supports, comfort).',
      after2: 'Further plan: what is worth continuing and how to combine visits.',
      after3: 'Practical recommendations for home: what to change in everyday life and what to avoid.',
      whyTitle: 'Why combine swimming with physiotherapy or massage?',
      whyDesc: 'We don\'t see great value in "only swimming". Greatest result appears when: water helps infant relax and move more easily, and then we purposefully apply physiotherapy or massage based on what we actually see. This allows procedure to be not only pleasant, but also meaningful – with clear plan for family.',
      prepareTitle: 'How to prepare?',
      prepareDesc: 'Convenient when infant is not very hungry and not completely tired. For swimming we provide everything on site – no need to buy anything additionally (no "straps", means, etc.). If using – you can bring pacifier or bottle so infant is calmer.',
      safetyTitle: 'Safety: when is it better to postpone procedure?',
      safetyDesc: 'Better to postpone procedure if: there is fever or acute infection; infant obviously feels bad; there are skin exacerbations or rashes that water might irritate. If in doubt – write or call, we will advise according to situation.',
      visitsTitle: 'How many visits will be needed?',
      visitsDesc: 'Infant development and well-being change quickly, so we work dynamically – monitor changes and adapt recommendations according to growth.',
      visitsModel: 'Most common model:',
      visit1: '1 procedure',
      visit1desc: 'we assess reaction, choose direction, give recommendations.',
      visit2: 'Several visits',
      visit2desc: 'when more consistent habit and clearer progress is desired.',
      visit3: 'Further as needed',
      visit3desc: 'so family has simplicity and clarity.',
      specialistsTitle: 'Who performs procedure?',
      ksenija: 'Ksenija Persijanova',
      ksenijaRole: 'Physiotherapist',
      ksenijaDesc: 'Experience in infant physiotherapy and infant hydrotherapy procedures. Works with children according to individual plan and clearly explains to parents what to do in everyday life.',
      viewProfile: 'View profile',
      meetTeam: 'Meet the whole team',
      additionalTitle: 'Additional services for infants',
      kineziterapija: 'Infant physiotherapy',
      kineziterapijaDesc: 'motor development assessment and clear plan.',
      masazai: 'Infant massage',
      masazaiDesc: 'gentle muscle relaxation or toning according to situation.',
      faqTitle: 'Frequently asked questions',
      q1: 'How long does procedure take?',
      a1: 'Procedure takes about 45 min and includes swimming and physiotherapy or massage.',
      q2: 'Does swimming happen separately?',
      a2: 'No. We combine swimming with physiotherapy or massage, because this way we see greatest value and clearer result.',
      q3: 'Do we need to buy something for swimming?',
      a3: 'No. We provide all necessary means on site – no need to buy anything additionally.',
      q4: 'How to prepare for visit?',
      a4: 'Convenient when infant is not very hungry and not completely tired. If using – bring pacifier or bottle.',
      q5: 'What if infant cries or wants to eat?',
      a5: 'This is normal. We take breaks and adapt to infant\'s rhythm.',
      q6: 'How often is it worth repeating?',
      a6: 'Frequency depends on goal and infant\'s reactions. After first visit we offer clear, realistic plan.',
      q7: 'When is it better to postpone visit?',
      a7: 'If there is fever, acute infection or infant feels bad – better to postpone visit. If in doubt – contact us.',
      q8: 'Can both parents come?',
      a8: 'Yes – we recommend. Both parents can better understand home recommendations and daily principles.',
      finalCTA: 'Want calmer infant and clear plan for family?',
      finalCTADesc: 'Register for procedure – we adapt to infant\'s rhythm.',
      address: 'Aludarių g. 7–43, Vilnius',
      showMap: 'Show map',
    },
  };

  const txt = pageText[currentLang];

  const specialist = {
    name: txt.ksenija,
    role: txt.ksenijaRole,
    description: txt.ksenijaDesc,
    image: '/specialists/ksenija.png',
  };

  const additionalServices = [
    {
      name: txt.kineziterapija,
      description: txt.kineziterapijaDesc,
      slug: 'kudikiu-kineziterapija',
    },
    {
      name: txt.masazai,
      description: txt.masazaiDesc,
      slug: 'kudikiu-masazai',
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
        <section 
          className="relative flex items-center bg-[#f5f3f0]" 
          style={{ 
            width: '100%', 
            minHeight: '85vh',
            overflow: 'hidden' 
          }}
        >
          <div className="absolute inset-0 w-full h-full">
            {/* Mobile image */}
            <Image
              src="/images/hero/hero-kudikiu-plukdymas-mobile.png"
              alt={txt.heroTitle}
              fill
              priority
              quality={95}
              sizes="(max-width: 768px) 100vw, 1px"
              className="object-cover object-center blur-[8px] saturate-75 contrast-90 md:hidden"
            />
            {/* Desktop image */}
            <Image
              src="/images/hero/hero-kudikiu-plukdymas.jpg"
              alt={txt.heroTitle}
              fill
              priority
              quality={95}
              sizes="(max-width: 768px) 1px, 100vw"
              className="object-cover object-[center_30%] blur-[6px] saturate-75 contrast-90 hidden md:block"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/10" />
            <div className="pointer-events-none absolute inset-0 backdrop-blur-[2px]" />
          </div>

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

        {/* Brief About Procedure */}
        <section className="py-16 bg-gradient-to-br from-[#54B6FC]/10 via-white to-[#fb7825]/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                {txt.briefTitle}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                {txt.briefDesc}
              </p>
            </div>
          </div>
        </section>

        {/* When to Choose Swimming */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#54B6FC]/10 via-white to-[#fb7825]/5 rounded-2xl p-8 md:p-10 shadow-xl border border-gray-200">
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

        {/* How Procedure Works */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              {txt.sessionTitle}
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center leading-relaxed max-w-4xl mx-auto">
              {txt.sessionDesc}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white rounded-2xl p-7 shadow-lg border border-gray-200 hover:shadow-xl hover:border-[#54B6FC] transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0] rounded-xl flex items-center justify-center mb-5 shadow-md">
                  <Waves className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{txt.part1Title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {txt.part1Desc}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-7 shadow-lg border border-gray-200 hover:shadow-xl hover:border-[#54B6FC] transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0] rounded-xl flex items-center justify-center mb-5 shadow-md">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{txt.part2Title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {txt.part2Desc}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
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

        {/* Why Combine */}
        <section className="py-20 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              {txt.whyTitle}
            </h2>
            <p className="text-xl text-white/95 leading-relaxed text-center max-w-3xl mx-auto">
              {txt.whyDesc}
            </p>
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

            <div className="relative">
              <div className="hidden md:block absolute top-16 left-0 right-0 h-2 bg-gradient-to-r from-[#54B6FC] via-[#54B6FC] to-[#fb7825] mx-auto rounded-full shadow-md" style={{ width: 'calc(100% - 160px)', left: '80px' }} />
              
              <div className="grid md:grid-cols-3 gap-8 relative">
                <div className="relative">
                  <div className="bg-white rounded-2xl p-7 shadow-xl border-2 border-[#54B6FC] relative z-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0] rounded-full flex items-center justify-center mb-5 mx-auto shadow-lg ring-4 ring-white">
                      <span className="text-white font-bold text-3xl">1</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{txt.visit1}</h3>
                    <p className="text-sm text-gray-700 text-center leading-relaxed">{txt.visit1desc}</p>
                  </div>
                  <div className="md:hidden flex justify-center my-4">
                    <ArrowRight className="w-10 h-10 text-[#54B6FC]" />
                  </div>
                </div>

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
                  <div className="md:hidden flex justify-center my-4">
                    <ArrowRight className="w-10 h-10 text-[#fb7825]" />
                  </div>
                </div>

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
        <section className="py-20 bg-gradient-to-br from-[#fb7825] to-[#e66f1f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              {txt.additionalTitle}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {additionalServices.map((service, index) => (
                <Link
                  key={index}
                  href={`/${service.slug}`}
                  className="group bg-white rounded-2xl p-7 shadow-lg border-2 border-white hover:border-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#fb7825] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-700 mb-5 leading-relaxed">{service.description}</p>
                  <div className="inline-flex items-center space-x-2 text-[#fb7825] font-semibold">
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
          </div>
        </section>
      </main>

      <Footer translations={t} />
      <FloatingActionButtons currentLang={currentLang} />
    </div>
  );
}
