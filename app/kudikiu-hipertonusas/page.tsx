'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import Testimonials from '@/components/Testimonials';
import { translations, type Language } from '@/lib/i18n/translations';
import { Phone, ArrowRight } from 'lucide-react';

export default function HipertonusasPage() {
  const [currentLang, setCurrentLang] = useState<Language>('lt');
  const t = translations[currentLang];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang') as Language;
    if (lang === 'en' || lang === 'lt') setCurrentLang(lang);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    const url = new URL(window.location.href);
    lang === 'lt' ? url.searchParams.delete('lang') : url.searchParams.set('lang', lang);
    window.history.pushState({}, '', url.toString());
  };

  const pageText = {
    lt: {
      heroTitle: 'Kūdikių hipertonusas: padidėjęs raumenų tonusas, požymiai ir ką daryti tėvams',
      heroSubtitle: 'Kaip atpažinti, kada kreiptis ir kaip padeda kineziterapija',
      heroNote: 'Ankstyva korekcija dažniausiai duoda geriausią rezultatą. FitKid klinikoje Vilniuje – individualus įvertinimas ir aiškus planas.',

      intro1: 'Kūdikių hipertonusas (padidėjęs raumenų tonusas) yra dažna priežastis, kodėl tėvai kreipiasi į vaikų kineziterapeutą. Dalis kūdikių iš tiesų pereina per trumpą padidėjusios įtampos etapą, tačiau kai įtampa išlieka, didėja ar trukdo judesių raidai, verta nelaukti.',
      intro2: 'Šiame puslapyje aiškiai paaiškiname: kaip atpažinti hipertonusą namuose; kuo skiriasi „laikina įtampa" nuo būklės, kurią reikia koreguoti; kada reikalinga skubi gydytojo konsultacija; kaip FitKid klinikoje Vilniuje vyksta įvertinimas ir terapija.',

      quickTitle: 'Trumpas atsakymas tėvams',
      quickBody: 'Hipertonusas reiškia, kad kūdikio raumenys yra per daug įtempti ramybės būsenoje. Dėl to kūdikis gali atrodyti „standus", dažniau riečiasi atgal, sunkiau atsipalaiduoja, gali prasčiau miegoti, sunkiau išlaikyti patogias pozas maitinimo ar perrengimo metu.',
      quickNote: 'Ne kiekvienas įtampos požymis reiškia neurologinę ligą. Tačiau jei simptomai kartojasi, trukdo kasdienybei ar raidai, reikia įvertinimo. Ankstyva korekcija dažniausiai duoda geriausią rezultatą, nes pirmaisiais mėnesiais nervų sistema yra labai plastiška.',

      whatIsTitle: 'Kas yra raumenų tonusas ir kada jis laikomas padidėjusiu',
      whatIsBody: 'Raumenų tonusas yra natūrali, nuolatinė raumenų įtampa, padedanti išlaikyti kūno padėtį ir pasiruošti judesiui. Normalus tonusas yra būtinas. Problema atsiranda tada, kai tonusas tampa per didelis ir riboja kokybišką judesį.',
      whatIsList: [
        'kūnas įsitempęs daugumoje padėčių',
        'judesiai mažiau laisvi, mažiau simetriški',
        'vaikas sunkiau prisitaiko keičiant padėtį',
        'simptomai kartojasi kasdien ir nesilpnėja',
      ],

      ageSignsTitle: 'Hipertonuso požymiai pagal amžių',
      ageGroups: [
        {
          age: '0–3 mėn.',
          note: 'Šiame amžiuje dalis įtampos gali būti fiziologinė. Vertiname, ar ji mažėja, ar, priešingai, išlieka ryški.',
          signs: [
            'dažnas išsirietimas atgal („tiltelio" poza)',
            'nuolat stipriai sugniaužti kumšteliai',
            'padidėjęs jautrumas prisilietimui ar padėties keitimui',
            'sunkiau nuraminamas kūdikis, dažni miego pertrūkiai',
            'perrengiant jaučiamas stiprus pasipriešinimas',
          ],
        },
        {
          age: '3–6 mėn.',
          note: 'Šiame etape judesiai turėtų tapti laisvesni. Jei įtampa trukdo raidai, tai aiškesnis signalas korekcijai.',
          signs: [
            'mažiau kokybiškas vartymasis arba ryški asimetrija',
            'delnai ir toliau sunkiai atsipalaiduoja',
            'laikant vertikaliai kūdikis remiasi pirštų galais',
            'dažnas kūno „užsirakinimas" į vieną modelį',
            'padidėjęs neramumas ir sunkesnis atsipalaidavimas po aktyvumo',
          ],
        },
        {
          age: '6–12 mėn.',
          note: 'Šiame amžiuje hipertonusas jau aiškiai veikia funkciją ir judesių eigą.',
          signs: [
            'vėluojantis ropojimas ar jo praleidimas',
            'stojimosi metu išlieka pirštų galų dominavimas',
            'judesiai standūs, mažiau sklandūs',
            'sunkiau pereinama tarp padėčių',
            'ryškesnis nuovargis ir dirglumas po aktyvumo',
          ],
        },
      ],

      causesTitle: 'Kodėl atsiranda hipertonusas',
      causes: [
        'nervų sistemos brandos ypatumai',
        'nėštumo ir gimdymo eiga',
        'ilgalaikės asimetriškos padėtys pirmomis savaitėmis',
        'kompensaciniai judesiai dėl diskomforto ar silpnesnio stabilumo',
        'retesniais atvejais neurologinės būklės',
      ],
      causesNote: 'Svarbus principas: hipertonusas ne visada reiškia sunkią diagnozę, bet visada reiškia, kad kūno reguliacija šiuo metu neoptimali ir ją reikia įvertinti.',

      redFlagsTitle: 'Kada būtina kreiptis skubiai',
      redFlags: [
        'traukuliai ar epizodai su sąmonės/reakcijos pokyčiu',
        'ryškus raidos įgūdžių praradimas',
        'nuolatinis, stiprus maitinimosi sutrikimas su svorio neaugimu',
        'labai ryškus kūno standumas kartu su nuolatiniu skausmingu verksmu',
        'aiškus vienos kūno pusės funkcijos silpnėjimas',
      ],
      redFlagsNote: 'Jei šių „raudonų vėliavų" nėra, bet simptomai kartojasi, vis tiek verta planinė pediatro ar vaikų neurologo konsultacija ir kineziterapinis įvertinimas.',

      evalTitle: 'Kaip vyksta įvertinimas FitKid klinikoje',
      evalSteps: [
        {
          num: '1', title: 'Tėvų pokalbis',
          items: ['kasdienius simptomus', 'miegą, maitinimą, nuraminimą', 'kada simptomai stiprėja', 'nėštumo, gimdymo ir pirmų savaičių istoriją'],
        },
        {
          num: '2', title: 'Funkcinis įvertinimas',
          items: ['raumenų tonusą skirtingose padėtyse', 'judesių kokybę ir simetriją', 'galvos, liemens, dubens kontrolę', 'perėjimus tarp padėčių', 'amžiui būdingų motorinių etapų eigą'],
        },
        {
          num: '3', title: 'Individualus planas',
          items: ['aiškus paaiškinimas, kas šiuo metu vyksta', 'individualus terapijos planas', 'konkretus namų veiksmų sąrašas', 'orientacinis vizitų dažnis ir progreso kriterijai'],
        },
      ],

      treatmentsTitle: 'Kaip padeda kineziterapija ir masažas',
      treatmentsIntro: 'Hipertonuso korekcijoje tikslas nėra „tiesiog atpalaiduoti". Tikslas: normalizuoti tonuso reguliaciją, atkurti kokybišką judesį, stiprinti gilią stabilizaciją, mažinti kompensacinius modelius.',
      treatments: [
        { emoji: '🤲', name: 'Individuali kūdikių kineziterapija', desc: 'Kiekviena sesija pritaikoma pagal kūdikio amžių, simptomų intensyvumą, dominuojančius judesio modelius, jautrumą ir toleranciją.' },
        { emoji: '🌀', name: 'DNS principai', desc: 'DNS (dinaminė neuroraumeninė stabilizacija) aktyvuoja giliuosius stabilizuojančius raumenis, gerina kūno ašies kontrolę, moko efektyvesnių, mažiau įtemptų judesių modelių.' },
        { emoji: '⚡', name: 'Vojta terapija', desc: 'Vojta taikoma, kai reikia aktyvinti įgimtus judesių modelius, pagerinti viso kūno koordinaciją, nuosekliai mažinti patologinės įtampos dominavimą.' },
        { emoji: '👐', name: 'Gydomasis masažas kūdikiams', desc: 'Mažina paviršinę raumenų įtampą, gerina kūno toleranciją prisilietimui, padeda pereiti į ramesnę būseną po aktyvumo, gerina bendrą komfortą.' },
        { emoji: '💧', name: 'Hidroterapija (kūdikių plukdymas)', desc: 'Šiltame vandenyje mažėja gravitacinė apkrova, lengviau atlikti kokybiškus judesius, kūdikis dažniau atsipalaiduoja, gerėja sensorinė integracija.' },
      ],

      visitsTitle: 'Kiek vizitų dažniausiai prireikia',
      visitsNote: 'Tikslus skaičius priklauso nuo simptomų, amžiaus ir namų darbo nuoseklumo.',
      visits: [
        { label: '1 vizitas', desc: 'išsamus įvertinimas ir planas' },
        { label: '4–6 vizitai', desc: 'pirmi stabilūs pokyčiai lengvesniais atvejais' },
        { label: '8–12 vizitų', desc: 'kai įtampa išreikšta, yra asimetrija ar raidos vėlavimo rizika' },
        { label: 'Palaikymas', desc: 'pagal poreikį, kai tikslas pasiektas' },
      ],

      homeTitle: 'Ką tėvai gali daryti namuose iki vizito',
      homeDo: [
        'dažnai keisti padėtis per dieną',
        'riboti ilgą buvimą vienoje pasyvioje pozicijoje',
        'įtraukti trumpą, kokybišką „tummy time" pagal toleranciją',
        'stebėti, kada kūdikis labiausiai įsitempia, ir fiksuoti situacijas',
      ],
      homeDont: [
        'agresyvių tempimų „per jėgą"',
        'atsitiktinių interneto pratimų be įvertinimo',
        'pažadų „išgydyti per vieną procedūrą"',
      ],

      faqTitle: 'Dažniausiai užduodami klausimai',
      faq: [
        { q: 'Ar hipertonusas visada reiškia neurologinę ligą?', a: 'Ne. Dažnai tai funkcinis tonuso reguliacijos sutrikimas. Tačiau įvertinimas būtinas, kad būtų atmestos rimtesnės priežastys.' },
        { q: 'Ar kūdikis „išaugs" hipertonusą?', a: 'Kartais dalis požymių mažėja savaime, bet rizika formuoti netaisyklingus judesių modelius išlieka. Todėl geriau įvertinti anksti.' },
        { q: 'Kada geriausia pradėti?', a: 'Kuo anksčiau. Pirmaisiais mėnesiais korekcija paprastai efektyviausia.' },
        { q: 'Ar terapija skausminga?', a: 'Ne. Dirbama švelniai, pagal kūdikio toleranciją ir saugumo principus.' },
        { q: 'Ar tėvai dalyvauja vizite?', a: 'Taip. Tėvų įtraukimas yra būtinas, nes didelė progreso dalis vyksta namuose.' },
        { q: 'Ar masažas gali pakeisti kineziterapiją?', a: 'Ne visada. Masažas yra naudingas, bet dažniausiai jis yra dalis platesnio kineziterapinio plano.' },
        { q: 'Kiek greitai matomas rezultatas?', a: 'Dažnai pirmi pokyčiai matomi per kelias savaites, jei planas taikomas nuosekliai.' },
        { q: 'Ar reikia neurologo konsultacijos?', a: 'Jei yra „raudonų vėliavų" arba aiški raidos rizika, taip. Jei jų nėra, vis tiek naudinga pediatro kontrolė ir kineziterapinis stebėjimas.' },
        { q: 'Ar galima derinti Vojta, DNS, masažą ir hidroterapiją?', a: 'Taip, jei metodai parenkami individualiai ir turi aiškų tikslą.' },
        { q: 'Kada terapiją galima mažinti?', a: 'Kai pasiekiami funkciniai tikslai: gerėja judesių kokybė, mažėja įtampa ir raida vyksta pagal amžių.' },
      ],

      specialistsTitle: 'Mūsų specialistai',
      specialistsSubtitle: 'Licencijuoti specialistai su tinkamomis kvalifikacijomis ir patirtimi',

      relatedTitle: 'Susijusios būklės',
      related: [
        { href: '/kudikiu-hipotonusas', label: 'Hipotonusas' },
        { href: '/kudikio-kreivakakliste', label: 'Kreivakaklystė' },
        { href: '/plagiocefalija', label: 'Plagiocefalija' },
        { href: '/motorines-raidos-velavimas', label: 'Motorinės raidos vėlavimas' },
      ],

      ctaTitle: 'Įtariate hipertonusą?',
      ctaDesc: 'Jei matote, kad kūdikio judesiai standūs ir įtempti, registruokitės į įvertinimą.',
      ctaRegister: 'Registruotis vizitui',
      ctaPhone: '+370 666 99676',
      ctaAddress: 'Aludarių g. 7-43, Vilnius',
      medNote: 'Ši informacija yra edukacinė ir nepakeičia gydytojo konsultacijos. Jei simptomai progresuoja ar atsiranda skubūs požymiai, kreipkitės į gydytoją nedelsiant.',
      lastUpdated: '2026-02-22',
      reviewer: 'Agnė Juodytė, vaikų kineziterapeutė',
    },
    en: {
      heroTitle: 'Infant Hypertonia: Increased Muscle Tone, Signs and What Parents Should Do',
      heroSubtitle: 'How to recognise it, when to seek help, and how physiotherapy helps',
      heroNote: 'Early correction usually gives the best results. FitKid clinic in Vilnius – individual assessment and a clear plan.',

      intro1: 'Infant hypertonia (increased muscle tone) is a common reason parents seek a paediatric physiotherapist. Some infants do go through a brief phase of increased tension, but when the tension persists, increases or interferes with motor development, it is worth acting promptly.',
      intro2: 'On this page we clearly explain: how to recognise hypertonia at home; what distinguishes "temporary tension" from a condition that needs correction; when urgent medical consultation is required; and how assessment and therapy work at FitKid clinic in Vilnius.',

      quickTitle: 'Quick answer for parents',
      quickBody: 'Hypertonia means the infant\'s muscles are excessively tense at rest. As a result, the infant may appear "stiff", arch backwards more often, struggle to relax, sleep poorly, and find it harder to maintain comfortable positions during feeding or changing.',
      quickNote: 'Not every sign of tension indicates a neurological condition. However, if symptoms recur, interfere with daily life or development, assessment is needed. Early correction usually gives the best results, as in the first months the nervous system is highly plastic.',

      whatIsTitle: 'What is muscle tone and when is it considered increased?',
      whatIsBody: 'Muscle tone is the natural, constant tension in muscles that helps maintain body position and prepare for movement. Normal tone is essential. The problem arises when tone becomes too high and limits quality movement.',
      whatIsList: [
        'body tense in most positions',
        'movements less free and less symmetrical',
        'infant struggles to adapt when position is changed',
        'symptoms recur daily and do not diminish',
      ],

      ageSignsTitle: 'Signs of hypertonia by age',
      ageGroups: [
        {
          age: '0–3 months',
          note: 'At this age some tension may be physiological. We assess whether it is decreasing or, on the contrary, remains pronounced.',
          signs: [
            'frequent arching backwards ("bridge" posture)',
            'constantly tightly clenched fists',
            'increased sensitivity to touch or position changes',
            'harder to soothe, frequent sleep interruptions',
            'strong resistance felt during changing',
          ],
        },
        {
          age: '3–6 months',
          note: 'At this stage movements should become freer. If tension is interfering with development, this is a clearer signal for correction.',
          signs: [
            'lower quality rolling or marked asymmetry',
            'hands still difficult to relax',
            'when held vertically, infant bears weight on tiptoes',
            'frequent "locking" of body into one pattern',
            'increased restlessness and difficulty relaxing after activity',
          ],
        },
        {
          age: '6–12 months',
          note: 'At this age hypertonia already clearly affects function and movement.',
          signs: [
            'delayed crawling or skipping it entirely',
            'toe dominance persists when standing',
            'stiff, less fluid movements',
            'difficulty transitioning between positions',
            'more pronounced fatigue and irritability after activity',
          ],
        },
      ],

      causesTitle: 'Why does hypertonia occur?',
      causes: [
        'characteristics of nervous system maturation',
        'pregnancy and birth history',
        'prolonged asymmetric positions in the first weeks',
        'compensatory movements due to discomfort or weaker stability',
        'in rarer cases, neurological conditions',
      ],
      causesNote: 'Important principle: hypertonia does not always mean a serious diagnosis, but it always means that the body\'s regulation is currently suboptimal and needs assessment.',

      redFlagsTitle: 'When to seek urgent help',
      redFlags: [
        'seizures or episodes with changes in consciousness/responsiveness',
        'marked loss of developmental skills',
        'persistent, severe feeding difficulties with failure to gain weight',
        'very pronounced body stiffness combined with continuous painful crying',
        'clear weakening of function on one side of the body',
      ],
      redFlagsNote: 'If these "red flags" are absent but symptoms recur, a scheduled paediatrician or paediatric neurologist consultation and physiotherapy assessment is still advisable.',

      evalTitle: 'How assessment works at FitKid clinic',
      evalSteps: [
        {
          num: '1', title: 'Parent interview',
          items: ['daily symptoms', 'sleep, feeding, soothing', 'when symptoms worsen', 'pregnancy, birth and early weeks history'],
        },
        {
          num: '2', title: 'Functional assessment',
          items: ['muscle tone in different positions', 'movement quality and symmetry', 'head, trunk and pelvis control', 'transitions between positions', 'progress through age-appropriate motor milestones'],
        },
        {
          num: '3', title: 'Individual plan',
          items: ['clear explanation of what is currently happening', 'individual therapy plan', 'specific home action list', 'approximate visit frequency and progress criteria'],
        },
      ],

      treatmentsTitle: 'How physiotherapy and massage help',
      treatmentsIntro: 'The goal of hypertonia correction is not simply "to relax". The goal is: to normalise tone regulation, restore quality movement, strengthen deep stabilisation, and reduce compensatory patterns.',
      treatments: [
        { emoji: '🤲', name: 'Individual infant physiotherapy', desc: 'Each session is tailored to the infant\'s age, symptom intensity, dominant movement patterns, sensitivity and tolerance.' },
        { emoji: '🌀', name: 'DNS principles', desc: 'DNS (Dynamic Neuromuscular Stabilisation) activates the deep stabilising muscles, improves body axis control, and teaches more efficient, less tense movement patterns.' },
        { emoji: '⚡', name: 'Vojta therapy', desc: 'Vojta is used when innate movement patterns need to be activated, whole-body coordination improved, and the dominance of pathological tension gradually reduced.' },
        { emoji: '👐', name: 'Therapeutic infant massage', desc: 'Reduces surface muscle tension, improves body tolerance to touch, helps transition to a calmer state after activity, and improves overall comfort.' },
        { emoji: '💧', name: 'Hydrotherapy (infant swimming)', desc: 'In warm water, gravitational load decreases, quality movements become easier, the infant relaxes more readily, and sensory integration improves.' },
      ],

      visitsTitle: 'How many visits are usually needed?',
      visitsNote: 'The exact number depends on symptoms, age and consistency of home practice.',
      visits: [
        { label: '1st visit', desc: 'comprehensive assessment and plan' },
        { label: '4–6 visits', desc: 'first stable changes in milder cases' },
        { label: '8–12 visits', desc: 'when tension is pronounced, asymmetry or developmental delay risk is present' },
        { label: 'Maintenance', desc: 'as needed once the goal is reached' },
      ],

      homeTitle: 'What parents can do at home before the visit',
      homeDo: [
        'change positions frequently throughout the day',
        'limit prolonged time in one passive position',
        'introduce brief, quality tummy time according to tolerance',
        'observe when the infant is most tense and note the situations',
      ],
      homeDont: [
        'forceful stretching',
        'random internet exercises without assessment',
        'promises to "cure in one session"',
      ],

      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'Does hypertonia always indicate a neurological condition?', a: 'No. It is often a functional tone regulation disorder. However, assessment is essential to rule out more serious causes.' },
        { q: 'Will the infant outgrow hypertonia?', a: 'Sometimes some signs do diminish on their own, but the risk of developing incorrect movement patterns remains. It is better to assess early.' },
        { q: 'When is the best time to start?', a: 'As early as possible. In the first months correction is usually most effective.' },
        { q: 'Is therapy painful?', a: 'No. Work is done gently, following the infant\'s tolerance and safety principles.' },
        { q: 'Do parents take part in the visit?', a: 'Yes. Parent involvement is essential, as a large part of progress happens at home.' },
        { q: 'Can massage replace physiotherapy?', a: 'Not always. Massage is beneficial, but it is usually part of a broader physiotherapy plan.' },
        { q: 'How quickly are results seen?', a: 'Often the first changes are visible within a few weeks if the plan is applied consistently.' },
        { q: 'Is a neurologist consultation needed?', a: 'If red flags are present or there is a clear developmental risk, yes. Otherwise, paediatric monitoring and physiotherapy follow-up are still advisable.' },
        { q: 'Can Vojta, DNS, massage and hydrotherapy be combined?', a: 'Yes, if the methods are chosen individually and have a clear goal.' },
        { q: 'When can therapy be reduced?', a: 'When functional goals are achieved: movement quality improves, tension decreases and development progresses according to age.' },
      ],

      specialistsTitle: 'Our Specialists',
      specialistsSubtitle: 'Licensed specialists with proper qualifications and experience',

      relatedTitle: 'Related conditions',
      related: [
        { href: '/kudikiu-hipotonusas', label: 'Hypotonia' },
        { href: '/kudikio-kreivakakliste', label: 'Torticollis' },
        { href: '/plagiocefalija', label: 'Plagiocephaly' },
        { href: '/motorines-raidos-velavimas', label: 'Motor Development Delays' },
      ],

      ctaTitle: 'Suspecting hypertonia?',
      ctaDesc: 'If you notice your infant\'s movements are stiff and tense, register for an assessment.',
      ctaRegister: 'Register for Visit',
      ctaPhone: '+370 666 99676',
      ctaAddress: 'Aludarių g. 7-43, Vilnius',
      medNote: 'This information is educational and does not replace medical consultation. If symptoms progress or urgent signs appear, contact a doctor immediately.',
      lastUpdated: '2026-02-22',
      reviewer: 'Agnė Juodytė, paediatric physiotherapist',
    },
  };

  const txt = pageText[currentLang];

  const specialists = [
    { name: 'Agnė Juodytė', role: currentLang === 'lt' ? 'Kineziterapeutė' : 'Physiotherapist', detail: currentLang === 'lt' ? 'vaikų kineziterapeutė, Vojta terapijos praktikė' : 'pediatric physiotherapist, Vojta therapy practitioner', img: '/specialists/agne.png', desc: currentLang === 'lt' ? 'Patyrusi kineziterapeutė, dirbanti su kūdikiais nuo pirmųjų dienų ir vaikais, turinčiais įvairių raidos, neurologinių ar judėjimo iššūkių.' : 'Experienced physiotherapist working with infants from their first days and children with various developmental, neurological or movement challenges.' },
    { name: 'Ksenija Persijanova', role: currentLang === 'lt' ? 'Kineziterapeutė' : 'Physiotherapist', detail: currentLang === 'lt' ? 'vaikų ir kūdikių kineziterapeutė' : 'pediatric and infant physiotherapist', img: '/specialists/ksenija.png', desc: currentLang === 'lt' ? 'Kineziterapeutė su praktine patirtimi kūdikių kineziterapijoje ir paliatyvioje pediatrijoje. Specializuojasi kūdikių hidroterapijos procedūrose.' : 'Physiotherapist with practical experience in infant physiotherapy and palliative paediatrics. Specialises in infant hydrotherapy.' },
    { name: 'Ramunė Nemeikaitė', role: currentLang === 'lt' ? 'Masažo terapeutė' : 'Massage Therapist', detail: currentLang === 'lt' ? 'gydomojo masažo specialistė, dirba tik su kūdikiais ir vaikais' : 'therapeutic massage specialist, works exclusively with infants and children', img: '/specialists/ramune.png', desc: currentLang === 'lt' ? 'Sertifikuota vaikų masažo specialistė. Masažo terapeutė Vaikų ligoninėje ir Santaros klinikose.' : 'Certified pediatric massage specialist. Massage therapist at the Children\'s Hospital and Santaros Clinics.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header translations={t} currentLang={currentLang} onLanguageChange={handleLanguageChange} />

      <main className="pt-20">

        {/* Hero */}
        <section className="relative flex items-center bg-[#e8e6e3]" style={{ width: '100%', minHeight: '60vh', overflow: 'hidden' }}>
          <div className="absolute inset-0">
            <Image src="/services/infant-physiotherapy.jpg" alt="Kūdikių hipertonusas" fill priority quality={95} sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center 30%', filter: 'brightness(1.1) contrast(0.95) blur(8px)' }} />
            <div className="absolute inset-0 bg-white opacity-15 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          </div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">{txt.heroTitle}</h1>
                <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">{txt.heroSubtitle}</p>
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl px-5 py-4 max-w-2xl">
                  <p className="text-white/95 text-sm leading-relaxed">{txt.heroNote}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{txt.intro1}</p>
            <p className="text-lg text-gray-700 leading-relaxed">{txt.intro2}</p>
          </div>
        </section>

        {/* Quick Answer */}
        <section className="py-12 bg-[#FFF8F3]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{txt.quickTitle}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">{txt.quickBody}</p>
            <div className="bg-[#fb7825]/10 border-l-4 border-[#fb7825] rounded-r-lg px-5 py-4">
              <p className="text-gray-800 leading-relaxed">{txt.quickNote}</p>
            </div>
          </div>
        </section>

        {/* What is tone */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{txt.whatIsTitle}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{txt.whatIsBody}</p>
            <ul className="space-y-3">
              {txt.whatIsList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#fb7825] mt-1">•</span>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Age Signs - Orange */}
        <section className="py-16 bg-gradient-to-br from-[#fb7825] to-[#e66f1f]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">{txt.ageSignsTitle}</h2>
            <div className="space-y-6">
              {txt.ageGroups.map((group, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-[#fb7825] mb-2">{group.age}</h3>
                  <p className="text-gray-500 text-sm italic mb-4">{group.note}</p>
                  <ul className="space-y-2">
                    {group.signs.map((sign, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-3">
                        <span className="text-[#fb7825] mt-1">•</span>
                        <span className="text-gray-700">{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Causes */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{txt.causesTitle}</h2>
            <ul className="space-y-3 mb-6">
              {txt.causes.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-gray-50 rounded-xl px-5 py-3 border-l-4 border-[#54B6FC]">
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-blue-50 border-l-4 border-[#54B6FC] rounded-r-lg px-5 py-4">
              <p className="text-gray-800 leading-relaxed">{txt.causesNote}</p>
            </div>
          </div>
        </section>

        {/* Red Flags */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{txt.redFlagsTitle}</h2>
            <div className="space-y-3 mb-6">
              {txt.redFlags.map((flag, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-red-50 border-l-4 border-red-400 rounded-r-lg px-5 py-3">
                  <span className="text-red-500 font-bold mt-0.5">!</span>
                  <span className="text-gray-800">{flag}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 italic">{txt.redFlagsNote}</p>
          </div>
        </section>

        {/* Eval Steps */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">{txt.evalTitle}</h2>
            <div className="space-y-6">
              {txt.evalSteps.map((step, idx) => (
                <div key={idx} className="flex gap-6 bg-gray-50 rounded-xl p-6 shadow-sm border-l-4 border-[#54B6FC]">
                  <div className="w-10 h-10 rounded-full bg-[#54B6FC] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">{step.num}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <ul className="space-y-1">
                      {step.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2 text-gray-600">
                          <span className="text-[#54B6FC] mt-1">•</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatments */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">{txt.treatmentsTitle}</h2>
            <p className="text-lg text-gray-600 text-center mb-10 max-w-3xl mx-auto">{txt.treatmentsIntro}</p>
            <div className="space-y-4">
              {txt.treatments.map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-md flex gap-4 items-start">
                  <div className="text-3xl flex-shrink-0">{item.emoji}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visits */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{txt.visitsTitle}</h2>
            <p className="text-gray-500 mb-6">{txt.visitsNote}</p>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              {txt.visits.map((row, idx) => (
                <div key={idx} className={`flex items-center gap-4 px-6 py-4 ${idx !== txt.visits.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <span className="font-bold text-[#54B6FC] w-32 flex-shrink-0">{row.label}</span>
                  <span className="text-gray-700">{row.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Home Do / Don't */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">{txt.homeTitle}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-4">✓ {currentLang === 'lt' ? 'Rekomenduojama' : 'Recommended'}</h3>
                <ul className="space-y-3">
                  {txt.homeDo.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-green-600 font-bold mt-0.5">✓</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                <h3 className="text-xl font-bold text-red-600 mb-4">✗ {currentLang === 'lt' ? 'Vengti' : 'Avoid'}</h3>
                <ul className="space-y-3">
                  {txt.homeDont.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-red-500 font-bold mt-0.5">✗</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">{txt.faqTitle}</h2>
            <div className="space-y-4">
              {txt.faq.map((item, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialists */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{txt.specialistsTitle}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{txt.specialistsSubtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specialists.map((spec) => (
                <div key={spec.name} className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image src={spec.img} alt={spec.name} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      style={{ objectPosition: 'center 10%' }} sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 90vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{spec.name}</h3>
                    <div className="text-sm font-semibold text-[#54B6FC] mb-4">{spec.detail}</div>
                    <p className="text-gray-600 leading-relaxed text-sm">{spec.desc}</p>
                  </div>
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#54B6FC]/10 to-[#fb7825]/10 rounded-full blur-2xl" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials translations={t} />

        {/* Related */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">{txt.relatedTitle}</h2>
            <div className="flex flex-wrap gap-3">
              {txt.related.map((link) => (
                <Link key={link.href} href={link.href}
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-[#54B6FC] text-gray-700 hover:text-[#54B6FC] px-4 py-2 rounded-full text-sm font-medium transition-all hover:shadow-md">
                  {link.label}<ArrowRight className="w-3 h-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{txt.ctaTitle}</h2>
            <p className="text-lg text-white/90 mb-8">{txt.ctaDesc}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/registracija" className="inline-flex items-center space-x-2 bg-white hover:bg-gray-50 text-[#54B6FC] px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg">
                <span>{txt.ctaRegister}</span><ArrowRight className="w-5 h-5" />
              </a>
              <a href="tel:+37066699676" className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur text-white border-2 border-white px-8 py-4 rounded-full font-semibold transition-all">
                <Phone className="w-5 h-5" /><span>{txt.ctaPhone}</span>
              </a>
            </div>
            <p className="text-white/70 text-sm mt-6">{txt.ctaAddress}</p>
          </div>
        </section>

        {/* Medical note + reviewer */}
        <section className="py-8 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-500 mb-2">{txt.medNote}</p>
            <p className="text-xs text-gray-400">
              {currentLang === 'lt' ? 'Peržiūrėjo' : 'Reviewed by'}: {txt.reviewer} · {currentLang === 'lt' ? 'Atnaujinta' : 'Updated'}: {txt.lastUpdated}
            </p>
          </div>
        </section>

      </main>

      <Footer translations={t} />
      <FloatingActionButtons currentLang={currentLang} />
    </div>
  );
}
