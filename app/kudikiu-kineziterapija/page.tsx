'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { translations, type Language } from '@/lib/i18n/translations';
import { Phone, ArrowRight, CheckCircle, Clock, MapPin } from 'lucide-react';

export default function KudikiuKineziterapijaPage() {
  const [currentLang, setCurrentLang] = useState<Language>('lt');
  const [showMap, setShowMap] = useState(false);
  const t = translations[currentLang];

  const pageText = {
    lt: {
      heroTitle: 'Kūdikių kineziterapija Vilniuje',
      heroSub: 'Profesionalus motorinės raidos įvertinimas ir individuali pagalba jūsų mažyliui nuo pirmųjų savaičių.',
      whenTitle: 'Kada verta kreiptis? (jei atpažįstate bent vieną)',
      sign1: 'Kūdikis aiškiai renkasi vieną pusę (galvytė dažniau pasukta į tą pačią pusę, matosi asimetrija).',
      sign2: 'Sunku pasukti galvą į abi puses (įtariama kreivakaklystė / torticollis).',
      sign3: 'Kūdikis dažnai įsitempia: „kietas", neramus, riečiasi į „tiltelį", atsilošia.',
      sign4: 'Kūdikis greitai pavargsta, sunkiau išlaiko atramas (įtariama hipotonija).',
      sign5: 'Ant pilvuko nepatogu: pyksta, greitai pavargsta arba nesiremia rankytėmis.',
      sign6: 'Jaučiate, kad „kažkas ne taip" – norite aiškaus įvertinimo ir plano.',
      heroNote: 'Pirminė apžiūra be streso – prisitaikome prie kūdikio ritmo.',
      whatWeHelpTitle: 'Ką padedame spręsti?',
      whatWeHelpSubtitle: 'Trumpai ir aiškiai – pasirinkite situaciją, kuri labiausiai atitinka jūsų kūdikį:',
      situation1: 'Kūdikių hipertonusas',
      situation1desc: 'Kai kūdikis dažnai įsitempia, riečiasi, sunku atsipalaiduoti.',
      situation2: 'Kūdikių hipotonija',
      situation2desc: 'Kai trūksta atramų, kūdikis greitai pavargsta, atrodo „minkštas".',
      situation3: 'Kūdikio asimetrija',
      situation3desc: 'Kai kūdikis aiškiai renkasi vieną pusę, judesiai ar padėtis nėra simetriški.',
      situation4: 'Kreivakaklystė (torticollis)',
      situation4desc: 'Kai sunku pasukti galvą į abi puses arba galvytė dažniau vienoje pusėje.',
      situation5: 'Motorinės raidos vėlavimas',
      situation5desc: 'Kai stringa vartymasis, atramos, ropojimo pradžia ar kiti įgūdžiai.',
      situation6: 'Kūdikis nemėgsta gulėti ant pilvuko',
      situation6desc: 'Kai ant pilvuko greitai pavargsta, pyksta arba nesiremia rankytėmis.',
      situation7: 'Po ankstyvumo ar sudėtingesnio gimdymo',
      situation7desc: 'Individualus įvertinimas ir rekomendacijos pagal raidos etapą.',
      situation8: 'Klubų displazija (pagal gydytojo rekomendacijas)',
      situation8desc: 'Kasdienybės ir judėjimo rekomendacijos, derinant su gydytojo nurodymais.',
      ctaRegister: 'Užsiregistruoti vizitui',
      ctaCall: 'Paskambinti: +370 666 99676',
      sessionTitle: 'Kaip vyksta užsiėmimas su kūdikiu?',
      sessionSubtitle: 'Kaip vyksta vizitas (45–60 min.)',
      sessionDesc: 'Vizitą pritaikome prie kūdikio amžiaus, nuotaikos ir dienos ritmo. Vertiname judesių kokybę, simetriją, atramas ir raumenų tonuso ypatumus, o po to aiškiai paaiškiname, ką matome ir ką darysime toliau.',
      parentsTitle: 'Tėvų vaidmuo:',
      parentsDesc: 'Tėvai yra aktyvi proceso dalis: parodome, ką ir kodėl darome, o jūs išmokstate, kaip padėti kūdikiui namuose (nešiojimas, padėtys, kasdieniai įpročiai).',
      ruleTitle: 'Taisyklė 15 minučių (mūsų požiūris be skubėjimo):',
      ruleDesc: 'Mes suprantame, kad kūdikis gali išalkti ar pavargti. Vizito metu skiriame laiko pertraukėlėms, maitinimui ar raminimui. Mums svarbu ne tik pratimai, bet ir vaiko emocinė būsena – todėl dirbame ramiai, be spaudimo ir "konvejerio".',
      afterTitle: 'Ką gaunate po vizito:',
      after1: 'Aiškų paaiškinimą: kas šiuo metu vyksta ir kas svarbiausia.',
      after2: 'Individualų planą ir rekomenduojamą dažnį.',
      after3: 'Praktines rekomendacijas namams: ką keisti kasdienybėje, kaip nešioti, guldyti, skatinti judėjimą.',
      methodTitle: 'Mūsų metodika',
      methodDesc: 'Dirbame remdamiesi klinikiniu įvertinimu ir parenkame priemones pagal tai, ką realiai matome judėjime.',
      method1: 'DNS metodika',
      method1desc: 'padeda suprasti ir gerinti atramas, stabilumą bei judesių kokybę pagal raidos etapą.',
      method2: 'Vojta terapija',
      method2desc: 'taikoma tam tikrais atvejais, kai reikalingas tikslesnis nervų–raumenų aktyvinimas.',
      method3: 'Tėvų edukacija',
      method3desc: 'kasdienės korekcijos dažnai duoda didžiausią progresą tarp vizitų.',
      visitsTitle: 'Kiek vizitų prireiks?',
      visitsDesc: 'Kūdikių raida keičiasi labai greitai – kartais per kelias savaites atsiranda nauji įgūdžiai, o kartu pasikeičia ir tai, ką verta koreguoti. Todėl dažniausiai dirbame dinamiškai: ne tik įvertiname, bet ir stebime pokyčius bei pritaikome rekomendacijas pagal augimą.',
      visitsModel: 'Dažniausias modelis:',
      visit1: '1 konsultacija',
      visit1desc: 'išsamus įvertinimas + aiškus planas + pirmos korekcijos kasdienybei.',
      visit2: '3–5 vizitai',
      visit2desc: 'kontrolė ir koregavimas, kai keičiasi įgūdžiai (pvz., atramos, vartymasis, pilvukas).',
      visit3: 'Tolimesni vizitai pagal poreikį',
      visit3desc: 'kad progresas būtų nuoseklus ir saugus, o tėvams viskas būtų aišku.',
      visitsGoal: 'Mūsų tikslas – kad kūdikis judėtų kuo kokybiškiau, o tėvai žinotų, ką daryti namuose. Vizitų dažnį parenkame pagal situaciją ir raidą – kartais reikia dažniau pradžioje, vėliau rečiau, kai viskas stabilizuojasi.',
      specialistsTitle: 'Kas dirba su kūdikiais?',
      agne: 'Agnė Juodytė – kineziterapeutė',
      agneDesc: 'Dirba su kūdikiais nuo pirmųjų dienų, padeda spręsti raidos, judėjimo ir simetrijos situacijas.',
      ksenija: 'Ksenija Persijanova – kineziterapeutė',
      ksenijaDesc: 'Patirtis kūdikių kineziterapijoje ir kūdikių hidroterapijos procedūrose, darbas su vaikais pagal individualų planą.',
      viewProfile: 'Žiūrėti profilį',
      meetTeam: 'Susipažinti su visa komanda',
      additionalTitle: 'Papildomos paslaugos kūdikiams',
      massage: 'Kūdikių masažai',
      massageDesc: 'kai reikia švelnaus raumenų atpalaidavimo ar tonizavimo.',
      swimming: 'Kūdikių plukdymas',
      swimmingDesc: 'judėjimas vandenyje, padedantis atsipalaiduoti ir stiprėti.',
      faqTitle: 'Dažniausiai užduodami klausimai',
      q1: 'Nuo kokio amžiaus galima pradėti kūdikių kineziterapiją?',
      a1: 'Galima pradėti nuo pirmųjų savaičių ar mėnesių – vizitą ir vertinimą pritaikome pagal kūdikio amžių, būklę ir dienos ritmą.',
      q2: 'Ar reikalingas gydytojo siuntimas?',
      a2: 'Ne, siuntimas nėra būtinas. Jei turite gydytojo išvadas ar tyrimų atsakymus – atsineškite, tai padeda tiksliau suprasti situaciją.',
      q3: 'Kaip pasiruošti vizitui?',
      a3: 'Patogu, kai kūdikis nėra labai alkanas ir nėra visiškai pervargęs. Atsineškite sauskelnių, mėgstamą žaisliuką ir (jei naudojate) buteliuką ar čiulptuką.',
      q4: 'O jeigu kūdikis verks, norės valgyti ar užmigs?',
      a4: 'Tai normalu. Vizito metu skiriame laiko pertraukėlėms, maitinimui ar raminimui – prisitaikome prie kūdikio ritmo.',
      q5: 'Kiek trunka vizitas ir ką gausime po jo?',
      a5: 'Dažniausiai 45–60 min. Po vizito aiškiai paaiškiname išvadas ir pateikiame individualų planą: kryptį, rekomenduojamą dažnį ir praktines rekomendacijas namams.',
      q6: 'Kaip dažnai reikėtų lankytis?',
      a6: 'Dažniausiai: 1 konsultacija + keli kontroliniai vizitai, kai keičiasi įgūdžiai. Tiksliai parenkame po įvertinimo.',
      q7: 'Ar galima atvykti, jei kūdikis serga ar ką tik sirgo?',
      a7: 'Jei yra karščiavimas, ūmi infekcija ar kūdikis akivaizdžiai prastai jaučiasi – vizitą geriau perkelti. Jei abejojate (pvz., po ligos ar skiepų) – susisiekite, patarsime pagal situaciją.',
      q8: 'Ar gali ateiti abu tėvai?',
      a8: 'Taip – net rekomenduojame. Abu tėvai gali išmokti kasdienių korekcijų (nešiojimo, guldymai, žaidimų), kad progresas vyktų ir namuose.',
      finalTitle: 'Jei abejojate – parašykite, padėsime pasirinkti, nuo ko pradėti.',
      address: 'Adresas: Aludarių g. 7–43, Vilnius',
      showMap: 'Rodyti žemėlapį',
    },
    en: {
      heroTitle: 'Infant Physiotherapy in Vilnius',
      heroSub: 'Professional motor development assessment and individual care for your baby from the first weeks.',
      whenTitle: 'When to seek help? (if you recognize at least one)',
      sign1: 'Baby clearly prefers one side (head turned more often to the same side, asymmetry visible).',
      sign2: 'Difficulty turning head to both sides (suspected torticollis).',
      sign3: 'Baby often tenses up: "stiff", restless, arches into "bridge", leans back.',
      sign4: 'Baby tires quickly, harder to maintain support (suspected hypotonia).',
      sign5: 'Uncomfortable on tummy: gets upset, tires quickly, or doesn\'t support on arms.',
      sign6: 'You feel "something\'s not right" – you want a clear assessment and plan.',
      heroNote: 'Initial assessment without stress – we adapt to baby\'s rhythm.',
      whatWeHelpTitle: 'What We Help Solve?',
      whatWeHelpSubtitle: 'Brief and clear – choose the situation that best matches your baby:',
      situation1: 'Infant Hypertonia',
      situation1desc: 'When baby often tenses up, arches, difficult to relax.',
      situation2: 'Infant Hypotonia',
      situation2desc: 'When support is lacking, baby tires quickly, appears "soft".',
      situation3: 'Baby Asymmetry',
      situation3desc: 'When baby clearly prefers one side, movements or position are not symmetrical.',
      situation4: 'Torticollis',
      situation4desc: 'When it\'s hard to turn head to both sides or head is more often on one side.',
      situation5: 'Motor Development Delay',
      situation5desc: 'When rolling, support, crawling onset or other skills are delayed.',
      situation6: 'Baby Dislikes Tummy Time',
      situation6desc: 'When on tummy tires quickly, gets upset, or doesn\'t support on arms.',
      situation7: 'After Prematurity or Complicated Birth',
      situation7desc: 'Individual assessment and recommendations according to developmental stage.',
      situation8: 'Hip Dysplasia (per doctor recommendations)',
      situation8desc: 'Daily life and movement recommendations, coordinating with doctor\'s instructions.',
      ctaRegister: 'Book a Visit',
      ctaCall: 'Call: +370 666 99676',
      sessionTitle: 'How does an infant session work?',
      sessionSubtitle: 'How the visit goes (45–60 min.)',
      sessionDesc: 'We adapt the visit to the baby\'s age, mood, and daily rhythm. We assess movement quality, symmetry, support, and muscle tone characteristics, then clearly explain what we see and what we\'ll do next.',
      parentsTitle: 'Parent\'s Role:',
      parentsDesc: 'Parents are an active part of the process: we show what and why we do, and you learn how to help your baby at home (carrying, positioning, daily habits).',
      ruleTitle: '15-Minute Rule (our no-rush approach):',
      ruleDesc: 'We understand that babies can get hungry or tired. During the visit, we allocate time for breaks, feeding, or calming. We care not only about exercises but also about the child\'s emotional state – so we work calmly, without pressure or "conveyor belt".',
      afterTitle: 'What you get after the visit:',
      after1: 'Clear explanation: what\'s happening now and what\'s most important.',
      after2: 'Individual plan and recommended frequency.',
      after3: 'Practical home recommendations: what to change daily, how to carry, position, encourage movement.',
      methodTitle: 'Our Methodology',
      methodDesc: 'We work based on clinical assessment and choose tools according to what we actually see in movement.',
      method1: 'DNS methodology',
      method1desc: 'helps understand and improve support, stability, and movement quality according to developmental stage.',
      method2: 'Vojta therapy',
      method2desc: 'applied in certain cases when more precise nerve-muscle activation is needed.',
      method3: 'Parent education',
      method3desc: 'daily corrections often provide the greatest progress between visits.',
      visitsTitle: 'How many visits will be needed?',
      visitsDesc: 'Infant development changes very quickly – sometimes in a few weeks new skills appear, and along with it, what needs correcting changes. Therefore, we usually work dynamically: we not only assess but also monitor changes and adjust recommendations according to growth.',
      visitsModel: 'Most common model:',
      visit1: '1 consultation',
      visit1desc: 'comprehensive assessment + clear plan + first daily corrections.',
      visit2: '3–5 visits',
      visit2desc: 'monitoring and adjustment when skills change (e.g., support, rolling, tummy time).',
      visit3: 'Further visits as needed',
      visit3desc: 'so progress is consistent and safe, and parents understand everything.',
      visitsGoal: 'Our goal – for the baby to move as qualitatively as possible, and for parents to know what to do at home. We select visit frequency according to situation and development – sometimes more often initially, later less frequently when everything stabilizes.',
      specialistsTitle: 'Who works with infants?',
      agne: 'Agnė Juodytė – Physiotherapist',
      agneDesc: 'Works with infants from the first days, helps solve development, movement, and symmetry situations.',
      ksenija: 'Ksenija Persijanova – Physiotherapist',
      ksenijaDesc: 'Experience in infant physiotherapy and infant hydrotherapy procedures, work with children according to individual plan.',
      viewProfile: 'View Profile',
      meetTeam: 'Meet the Team',
      additionalTitle: 'Additional Services for Infants',
      massage: 'Infant Massage',
      massageDesc: 'when gentle muscle relaxation or toning is needed.',
      swimming: 'Infant Swimming',
      swimmingDesc: 'movement in water, helping to relax and strengthen.',
      faqTitle: 'Frequently Asked Questions',
      q1: 'From what age can infant physiotherapy start?',
      a1: 'Can start from the first weeks or months – we adapt the visit and assessment to the baby\'s age, condition, and daily rhythm.',
      q2: 'Is a doctor\'s referral required?',
      a2: 'No, referral is not required. If you have doctor\'s conclusions or test results – bring them, it helps understand the situation more accurately.',
      q3: 'How to prepare for the visit?',
      a3: 'Comfortable when baby is not very hungry and not completely overtired. Bring diapers, favorite toy, and (if you use) bottle or pacifier.',
      q4: 'What if baby cries, wants to eat, or falls asleep?',
      a4: 'That\'s normal. During the visit we allocate time for breaks, feeding, or calming – we adapt to the baby\'s rhythm.',
      q5: 'How long is the visit and what will we get after?',
      a5: 'Usually 45–60 min. After the visit we clearly explain findings and provide an individual plan: direction, recommended frequency, and practical home recommendations.',
      q6: 'How often should we visit?',
      a6: 'Usually: 1 consultation + several follow-up visits when skills change. We determine precisely after assessment.',
      q7: 'Can we come if baby is sick or just recovered?',
      a7: 'If there\'s fever, acute infection, or baby clearly feels unwell – better to postpone the visit. If uncertain (e.g., after illness or vaccines) – contact us, we\'ll advise based on situation.',
      q8: 'Can both parents come?',
      a8: 'Yes – we even recommend it. Both parents can learn daily corrections (carrying, positioning, games) so progress happens at home too.',
      finalTitle: 'If you have doubts – contact us, we\'ll help you choose where to start.',
      address: 'Address: Aludarių g. 7–43, Vilnius',
      showMap: 'Show Map',
    }
  };

  const txt = pageText[currentLang];

  const specialists = [
    {
      name: 'Agnė Juodytė',
      role: txt.agne,
      description: txt.agneDesc,
      image: '/specialists/agne.png'
    },
    {
      name: 'Ksenija Persijanova',
      role: txt.ksenija,
      description: txt.ksenijaDesc,
      image: '/specialists/ksenija.png'
    }
  ];

  const additionalServices = [
    { name: txt.massage, description: txt.massageDesc, slug: 'kudikiu-masazai' },
    { name: txt.swimming, description: txt.swimmingDesc, slug: 'kudikiu-plukdymas' }
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
            height: '0',
            paddingBottom: '56.25%', // 16:9 aspect ratio
            overflow: 'hidden' 
          }}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero/hero-kudikiu-kineziterapija-v2.png"
              alt={txt.heroTitle}
              fill
              priority
              quality={95}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1920px"
              style={{ 
                objectFit: 'cover', 
                objectPosition: 'center 35%',
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

        {/* When to Seek Help Section */}
        <section className="bg-gradient-to-br from-[#54B6FC]/10 via-white to-[#fb7825]/5 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#54B6FC]/20">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {txt.whenTitle}
              </h2>
              
              <ul className="space-y-4 mb-8">
                {[txt.sign1, txt.sign2, txt.sign3, txt.sign4, txt.sign5, txt.sign6].map((sign, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#54B6FC] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{sign}</span>
                  </li>
                ))}
              </ul>

              <p className="text-center text-[#54B6FC] font-semibold mb-6">
                {txt.heroNote}
              </p>
            </div>
          </div>
        </section>

        {/* What We Help Solve Section */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
              {txt.whatWeHelpTitle}
            </h2>
            <p className="text-lg text-gray-600 mb-10 text-center max-w-3xl mx-auto">
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
                { title: txt.situation8, desc: txt.situation8desc },
              ].map((situation, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-[#54B6FC]/5 to-white rounded-xl p-6 border-2 border-gray-100 hover:border-[#54B6FC] transition-all hover:-translate-y-1 cursor-pointer"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#54B6FC] transition-colors">
                    {situation.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {situation.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How Session Works */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
              {txt.sessionTitle}
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              {txt.sessionDesc}
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Card 1: Vizitas */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0] rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{txt.sessionSubtitle}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Vizitą pritaikome prie kūdikio amžiaus, nuotaikos ir dienos ritmo. Vertiname judesių kokybę, simetriją, atramas ir raumenų tonuso ypatumus.
                </p>
              </div>

              {/* Card 2: Tėvų vaidmuo */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{txt.parentsTitle}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {txt.parentsDesc}
                </p>
              </div>

              {/* Card 3: Ką gaunate */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0] rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{txt.afterTitle}</h3>
                <ul className="space-y-2">
                  {[txt.after1, txt.after2, txt.after3].map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-[#54B6FC] mt-1 text-xs">•</span>
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Special Callout: 15 minučių taisyklė */}
            <div className="bg-gradient-to-br from-[#fb7825] to-[#e66f1f] rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">{txt.ruleTitle}</h3>
                  <p className="text-white/95 leading-relaxed">
                    {txt.ruleDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              {txt.methodTitle}
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              {txt.methodDesc}
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* DNS */}
              <div className="bg-gradient-to-br from-[#54B6FC]/5 to-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#54B6FC] transition-all hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{txt.method1}</h3>
                <p className="text-gray-600 leading-relaxed">{txt.method1desc}</p>
              </div>

              {/* Vojta */}
              <div className="bg-gradient-to-br from-[#fb7825]/5 to-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#fb7825] transition-all hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-[#fb7825] to-[#e66f1f] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{txt.method2}</h3>
                <p className="text-gray-600 leading-relaxed">{txt.method2desc}</p>
              </div>

              {/* Edukacija */}
              <div className="bg-gradient-to-br from-[#54B6FC]/5 to-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#54B6FC] transition-all hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{txt.method3}</h3>
                <p className="text-gray-600 leading-relaxed">{txt.method3desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* How Many Visits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              {txt.visitsTitle}
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed text-center max-w-3xl mx-auto">
              {txt.visitsDesc}
            </p>

            {/* Timeline / Stepper */}
            <div className="relative">
              {/* Connection line - desktop only */}
              <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-[#54B6FC] via-[#54B6FC] to-[#fb7825] mx-auto" style={{ width: 'calc(100% - 160px)', left: '80px' }} />
              
              <div className="grid md:grid-cols-3 gap-8 relative">
                {/* Step 1 */}
                <div className="relative">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#54B6FC] relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0] rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                      <span className="text-white font-bold text-2xl">1</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{txt.visit1}</h3>
                    <p className="text-sm text-gray-600 text-center leading-relaxed">{txt.visit1desc}</p>
                  </div>
                  {/* Arrow - mobile */}
                  <div className="md:hidden flex justify-center my-4">
                    <ArrowRight className="w-8 h-8 text-[#54B6FC]" />
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#54B6FC] relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0] rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                      <span className="text-white font-bold text-xl">3–5</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{txt.visit2}</h3>
                    <p className="text-sm text-gray-600 text-center leading-relaxed">{txt.visit2desc}</p>
                  </div>
                  {/* Arrow - mobile */}
                  <div className="md:hidden flex justify-center my-4">
                    <ArrowRight className="w-8 h-8 text-[#fb7825]" />
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#fb7825] relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#fb7825] to-[#e66f1f] rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{txt.visit3}</h3>
                    <p className="text-sm text-gray-600 text-center leading-relaxed">{txt.visit3desc}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-br from-[#54B6FC]/5 to-white rounded-2xl p-8 border border-[#54B6FC]/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#54B6FC]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#54B6FC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed italic flex-1">
                  {txt.visitsGoal}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Specialists */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {txt.specialistsTitle}
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {specialists.map((specialist, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Photo with 3:4 aspect ratio like main page */}
                  <div className="relative aspect-[3/4] bg-gradient-to-br from-[#54B6FC]/15 to-[#fb7825]/15 flex items-center justify-center overflow-hidden">
                    <Image
                      src={specialist.image}
                      alt={specialist.name}
                      fill
                      className="object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 90vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {specialist.name}
                    </h3>
                    <div className="text-sm font-semibold text-[#54B6FC] mb-4">
                      {specialist.role}
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm mb-4">
                      {specialist.description}
                    </p>
                    <Link
                      href="/registracija"
                      className="inline-flex items-center space-x-2 text-[#54B6FC] font-semibold hover:text-[#4a9fe0] transition-colors"
                    >
                      <span>{txt.viewProfile}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/registracija"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#54B6FC] to-[#4a9fe0] hover:from-[#4a9fe0] hover:to-[#54B6FC] text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
              >
                <span>{txt.meetTeam}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {txt.additionalTitle}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {additionalServices.map((service, index) => (
                <Link
                  key={index}
                  href={`/${service.slug}`}
                  className="group bg-gradient-to-br from-[#54B6FC]/5 to-white rounded-2xl p-6 shadow-md border-2 border-gray-100 hover:border-[#54B6FC] transition-all hover:-translate-y-1"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#54B6FC] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="inline-flex items-center space-x-2 text-[#54B6FC] font-semibold">
                    <span>Sužinoti daugiau</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {txt.faqTitle}
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border-2 border-gray-100 hover:border-[#54B6FC]"
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

      {/* Sticky Call Button (Mobile) */}
      <div className="md:hidden fixed bottom-4 right-4 z-40">
        <a
          href="tel:+37066699676"
          className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0] text-white rounded-full shadow-2xl hover:scale-110 transition-all"
        >
          <Phone className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
}
