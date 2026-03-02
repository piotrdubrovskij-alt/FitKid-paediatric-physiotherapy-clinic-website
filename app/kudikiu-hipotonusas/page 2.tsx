'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import Testimonials from '@/components/Testimonials';
import { translations, type Language } from '@/lib/i18n/translations';
import { Phone, ArrowRight } from 'lucide-react';

export default function KudikiuHipotonusasPage() {
  const [currentLang, setCurrentLang] = useState<Language>('lt');
  const t = translations[currentLang];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang') as Language;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (lang === 'en' || lang === 'lt') setCurrentLang(lang);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.pushState({}, '', url.toString());
  };

  const txt = {
    lt: {
      heroTitle: 'Kūdikių hipotonusas: sumažėjęs raumenų tonusas, požymiai ir ką daryti tėvams',
      introDesc: 'Kūdikių hipotonusas (sumažėjęs raumenų tonusas) yra dažna priežastis, kodėl tėvai kreipiasi į vaikų kineziterapeutą. Kūdikis gali atrodyti per daug atsipalaidavęs, minkštas, silpnai laikytis, lėčiau pasiekti motorinius etapus.',
      introLabel: 'Šiame puslapyje aiškiai paaiškiname:',
      introItems: ['kaip atpažinti hipotonusą namuose;','kuo skiriasi „laikina įtampa" nuo būklės, kurią reikia koreguoti;','kada reikalinga skubi gydytojo konsultacija;','kaip FitKid klinikoje Vilniuje vyksta įvertinimas ir terapija.'],
      shortTitle: 'Trumpas atsakymas tėvams',
      shortText: 'Hipotonusas reiškia, kad kūdikio raumenys yra per mažai įtempti ramybės būsenoje. Dėl to kūdikis gali atrodyti „standus", dažniau riečiasi atgal, sunkiau atsipalaiduoja, gali prasčiau miegoti, sunkiau išlaikyti patogias pozas maitinimo ar perrengimo metu. Ne kiekvienas įtampos požymis reiškia neurologinę ligą. Tačiau jei simptomai kartojasi, trukdo kasdienybei ar raidai, reikia įvertinimo. Ankstyva korekcija dažniausiai duoda geriausią rezultatą, nes pirmaisiais mėnesiais nervų sistema yra labai plastiška.',
      whatTitle: 'Kas yra raumenų tonusas ir kada jis laikomas sumažėjusiu',
      whatText: 'Raumenų tonusas yra natūrali, nuolatinė raumenų įtampa, padedanti išlaikyti kūno padėtį ir pasiruošti judesiui. Normalus tonusas yra būtinas. Problema atsiranda tada, kai tonusas yra per žemas ir negali palaikyti reikiamos kūno kontrolės.',
      whatNote: 'Padidėjusį tonusą dažniausiai matome ne pagal vieną požymį, o pagal požymių visumą:',
      whatList: ['kūnas įsitempęs daugumoje padėčių;','judesiai mažiau laisvi, mažiau simetriški;','vaikas sunkiau prisitaiko keičiant padėtį;','simptomai kartojasi kasdien ir nesilpnėja.'],
      signsTitle: 'Hipotonuso požymiai pagal amžių',
      ages: [
        { title: '0–3 mėn.', intro: 'Šiame amžiuje dalis įtampos gali būti fiziologinė. Vertiname, ar ji mažėja, ar, priešingai, išlieka ryški.', list: ['dažnas išsirietimas atgal („tiltelio" poza);','nuolat stipriai sugniaužti kumšteliai;','padidėjęs jautrumas prisilietimui ar padėties keitimui;','sunkiau nuraminamas kūdikis, dažni miego pertrūkiai;','perrengiant jaučiamas stiprus pasipriešinimas.'] },
        { title: '3–6 mėn.', intro: 'Šiame etape judesiai turėtų tapti laisvesni. Jei įtampa trukdo raidai, tai aiškesnis signalas korekcijai.', list: ['mažiau kokybiškas vartymasis arba ryški asimetrija;','delnai ir toliau sunkiai atsipalaiduoja;','laikant vertikaliai kūdikis remiasi pirštų galais;','dažnas kūno „užsirakinimas" į vieną modelį;','padidėjęs neramumas ir sunkesnis atsipalaidavimas po aktyvumo.'] },
        { title: '6–12 mėn.', intro: 'Šiame amžiuje hipertonusas jau aiškiai veikia funkciją ir judesių eigą.', list: ['vėluojantis ropojimas ar jo praleidimas;','stojimosi metu išlieka pirštų galų dominavimas;','judesiai standūs, mažiau sklandūs;','sunkiau pereinama tarp padėčių;','ryškesnis nuovargis ir dirglumas po aktyvumo.'] },
      ],
      causesTitle: 'Kodėl atsiranda hipotonusas',
      causesIntro: 'Dažniausiai hipertonusas nėra viena „vienintelė" priežastis. Vertiname kelių veiksnių kombinaciją:',
      causesList: ['nervų sistemos brandos ypatumai;','nėštumo ir gimdymo eiga;','ilgalaikės asimetriškos padėtys pirmomis savaitėmis;','kompensaciniai judesiai dėl diskomforto ar silpnesnio stabilumo;','retesniais atvejais neurologinės būklės.'],
      causesNote: 'Svarbus principas: hipotonusas ne visada reiškia sunkią diagnozę, bet visada reiškia, kad kūno reguliacija šiuo metu neoptimali ir ją reikia įvertinti.',
      urgentTitle: 'Kada būtina kreiptis skubiai',
      urgentIntro: 'Nedelskite ir kreipkitės į gydytoją skubiai, jei yra bent vienas iš šių požymių:',
      urgentList: ['traukuliai ar epizodai su sąmonės/reakcijos pokyčiu;','ryškus raidos įgūdžių praradimas;','nuolatinis, stiprus maitinimosi sutrikimas su svorio neaugimu;','labai ryškus kūno standumas kartu su nuolatiniu skausmingu verksmu;','aiškus vienos kūno pusės funkcijos silpnėjimas.'],
      urgentNote: 'Jei šių „raudonų vėliavų" nėra, bet simptomai kartojasi, vis tiek verta planinė pediatro ar vaikų neurologo konsultacija ir kineziterapinis įvertinimas.',
      assessTitle: 'Kaip vyksta įvertinimas FitKid klinikoje',
      steps: [
        { title: '1. Tėvų pokalbis', intro: 'Aptariame:', list: ['kasdienius simptomus;','miegą, maitinimą, nuraminimą;','kada simptomai stiprėja;','nėštumo, gimdymo ir pirmų savaičių istoriją.'] },
        { title: '2. Funkcinis įvertinimas', intro: 'Vertiname:', list: ['raumenų tonusą skirtingose padėtyse;','judesių kokybę ir simetriją;','galvos, liemens, dubens kontrolę;','perėjimus tarp padėčių;','amžiui būdingų motorinių etapų eigą.'] },
        { title: '3. Individualus planas', intro: 'Po įvertinimo tėvai gauna:', list: ['aiškų paaiškinimą, kas šiuo metu vyksta;','individualų terapijos planą;','konkretų namų veiksmų sąrašą;','orientacinį vizitų dažnį ir progreso kriterijus.'] },
      ],
      therapyTitle: 'Kaip padeda kineziterapija ir masažas',
      therapyGoalNote: 'Hipertonuso korekcijoje tikslas nėra „tiesiog atpalaiduoti". Tikslas:',
      therapyGoals: ['normalizuoti tonuso reguliaciją;','atkurti kokybišką judesį;','stiprinti gilią stabilizaciją;','mažinti kompensacinius modelius.'],
      services: [
        { title: 'Individuali kūdikių kineziterapija', text: 'Kiekvieną sesiją pritaikoma pagal kūdikio amžių, simptomų intensyvumą, dominuojančius judesio modelius ir jautrumą bei toleranciją.' },
        { title: 'DNS principai', text: 'DNS (dinaminė neuroraumeninė stabilizacija) padeda aktyvuoti giliuosius stabilizuojančius raumenis, gerinti kūno ašies kontrolę ir mokyti efektyvesnių, mažiau įtemptų judesių modelių.' },
        { title: 'Vojta terapija', text: 'Vojta taikoma, kai reikia aktyvinti įgimtus judesių modelius, pagerinti viso kūno koordinaciją ir nuosekliai mažinti patologinės įtampos dominavimą.' },
        { title: 'Gydomasis masažas kūdikiams', text: 'Masažas hipertonuso atveju mažina paviršinę raumenų įtampą, gerina kūno toleranciją prisilietimui, padeda pereiti į ramesnę būseną po aktyvumo ir gerina bendrą komfortą.' },
        { title: 'Hidroterapija (kūdikių plukdymas)', text: 'Šiltame vandenyje mažėja gravitacinė apkrova, lengviau atlikti kokybiškus judesius, kūdikis dažniau atsipalaiduoja ir gerėja sensorinė integracija.' },
      ],
      visitsTitle: 'Kiek vizitų dažniausiai prireikia',
      visitsIntro: 'Tikslus skaičius priklauso nuo simptomų, amžiaus ir namų darbo nuoseklumo. Praktikoje dažniausiai:',
      visitsList: ['1 vizitas: išsamus įvertinimas ir planas;','4–6 vizitai: pirmi stabilūs pokyčiai lengvesniais atvejais;','8–12 vizitų: kai įtampa išreikšta, yra asimetrija ar raidos vėlavimo rizika;','palaikymas: pagal poreikį, kai tikslas pasiektas.'],
      visitsNote: 'Svarbiausia ne „vizitų skaičius", o aiškūs progreso kriterijai: geresnė judesių kokybė, mažesnė įtampa kasdienėse situacijose, sklandesnis amžiui būdingų įgūdžių atsiradimas.',
      homeTitle: 'Ką tėvai gali daryti namuose iki vizito',
      homeSafeTitle: 'Saugūs baziniai žingsniai:',
      homeSafe: ['dažnai keisti padėtis per dieną;','riboti ilgą buvimą vienoje pasyvioje pozicijoje;','įtraukti trumpą, kokybišką „tummy time" pagal toleranciją;','stebėti, kada kūdikis labiausiai įsitempia, ir fiksuoti situacijas.'],
      homeAvoidTitle: 'Ko vengti:',
      homeAvoid: ['agresyvių tempimų „per jėgą";','atsitiktinių interneto pratimų be įvertinimo;','pažadų „išgydyti per vieną procedūrą".'],
      faqTitle: 'Dažniausiai užduodami klausimai',
      faqs: [
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
      finalTitle: 'Registracija konsultacijai',
      finalDesc: 'Jei įtariate hipotonusą ar matote, kad kūdikio judesiai silpni ir raida vėluoja, registruokitės į įvertinimą.',
      ctaRegister: 'Registruotis vizitui',
      ctaCall: '+370 666 99676',
    },
    en: {
      heroTitle: 'Infant Hypotonia: Decreased Muscle Tone, Signs and What Parents Should Do',
      introDesc: 'Infant hypertonia (increased muscle tone) is a common reason parents seek a pediatric physiotherapist. Some infants go through a brief period of increased tension, but when it persists, increases, or interferes with motor development, it is best not to wait.',
      introLabel: 'On this page we clearly explain:',
      introItems: ['how to recognize hypertonia at home;','the difference between temporary tension and a condition needing correction;','when urgent medical consultation is needed;','how assessment and therapy work at FitKid clinic in Vilnius.'],
      shortTitle: 'Quick Answer for Parents',
      shortText: 'Hypertonia means the infant\'s muscles are excessively tense at rest. The infant may appear stiff, arch backward more often, struggle to relax, sleep poorly, or have difficulty maintaining comfortable positions during feeding or changing. Not every sign of tension means a neurological disease. But if symptoms repeat and interfere with daily life or development, assessment is needed. Early correction usually gives the best results since the nervous system is very plastic in the first months.',
      whatTitle: 'What is Muscle Tone and When is it Decreased',
      whatText: 'Muscle tone is the natural, constant tension that helps maintain body position and prepare for movement. Normal tone is essential. The problem arises when tone becomes too high and limits quality movement.',
      whatNote: 'Increased tone is usually seen not by one sign but by a combination:',
      whatList: ['body tense in most positions;','movements less free, less symmetrical;','child has difficulty adapting when position changes;','symptoms repeat daily and do not weaken.'],
      signsTitle: 'Signs of Hypotonia by Age',
      ages: [
        { title: '0–3 months', intro: 'At this age some tension may be physiological. We assess whether it decreases or remains pronounced.', list: ['frequent arching backward ("bridge" pose);','constantly tightly clenched fists;','increased sensitivity to touch or position changes;','harder to soothe, frequent sleep interruptions;','strong resistance felt when changing clothes.'] },
        { title: '3–6 months', intro: 'At this stage movements should become freer. If tension interferes with development, this is a clearer signal for correction.', list: ['less quality rolling or pronounced asymmetry;','palms still difficult to relax;','when held vertically, infant leans on tiptoes;','frequent body locking into one pattern;','increased restlessness and harder relaxation after activity.'] },
        { title: '6–12 months', intro: 'At this age hypertonia clearly affects function and movement progression.', list: ['delayed crawling or skipping it;','toe dominance remains when standing;','movements stiff, less smooth;','harder to transition between positions;','more pronounced fatigue and irritability after activity.'] },
      ],
      causesTitle: 'Why Hypotonia Occurs',
      causesIntro: 'Most often hypertonia is not one single cause. We evaluate a combination of factors:',
      causesList: ['features of nervous system maturation;','pregnancy and birth course;','prolonged asymmetric positions in the first weeks;','compensatory movements due to discomfort or weaker stability;','in rarer cases, neurological conditions.'],
      causesNote: 'Important principle: hypertonia does not always mean a serious diagnosis, but always means that body regulation is currently suboptimal and needs assessment.',
      urgentTitle: 'When Urgent Help is Needed',
      urgentIntro: 'Do not delay and seek a doctor urgently if any of these signs are present:',
      urgentList: ['seizures or episodes with change in consciousness or response;','pronounced loss of developmental skills;','persistent, severe feeding difficulty with no weight gain;','very pronounced body stiffness with constant painful crying;','clear weakening of one side of body function.'],
      urgentNote: 'If these red flags are absent but symptoms repeat, a planned pediatrician or child neurologist consultation and physiotherapy assessment is still recommended.',
      assessTitle: 'How Assessment Works at FitKid Clinic',
      steps: [
        { title: '1. Parent Interview', intro: 'We discuss:', list: ['daily symptoms;','sleep, feeding, soothing;','when symptoms intensify;','pregnancy, birth and first weeks history.'] },
        { title: '2. Functional Assessment', intro: 'We assess:', list: ['muscle tone in different positions;','quality and symmetry of movements;','head, trunk, pelvis control;','transitions between positions;','progression of age-appropriate motor stages.'] },
        { title: '3. Individual Plan', intro: 'After assessment parents receive:', list: ['clear explanation of what is currently happening;','individual therapy plan;','concrete home action list;','indicative visit frequency and progress criteria.'] },
      ],
      therapyTitle: 'How Physiotherapy and Massage Help',
      therapyGoalNote: 'In hypotonia correction the goal is not to just relax. The goal is:',
      therapyGoals: ['normalize tone regulation;','restore quality movement;','strengthen deep stabilization;','reduce compensatory patterns.'],
      services: [
        { title: 'Individual Infant Physiotherapy', text: 'Each session is adapted according to the infant\'s age, symptom intensity, dominant movement patterns, and tolerance.' },
        { title: 'DNS Principles', text: 'DNS (Dynamic Neuromuscular Stabilization) helps activate deep stabilizing muscles, improve body axis control, and teach more efficient, less tense movement patterns.' },
        { title: 'Vojta Therapy', text: 'Vojta is applied to activate innate movement patterns, improve whole-body coordination, and systematically reduce pathological tension dominance.' },
        { title: 'Therapeutic Infant Massage', text: 'Massage reduces surface muscle tension, improves body tolerance to touch, helps transition to a calmer state after activity and improves overall comfort.' },
        { title: 'Hydrotherapy (Infant Swimming)', text: 'In warm water gravitational load decreases, quality movements are easier, the infant relaxes more often and sensory integration improves.' },
      ],
      visitsTitle: 'How Many Visits Are Usually Needed',
      visitsIntro: 'The exact number depends on symptoms, age and consistency of home work. In practice:',
      visitsList: ['1 visit: comprehensive assessment and plan;','4–6 visits: first stable changes in milder cases;','8–12 visits: when tension is pronounced, asymmetry or developmental delay risk exists;','maintenance: as needed when goal is achieved.'],
      visitsNote: 'Most important is not the number of visits but clear progress criteria: better movement quality, less tension in daily situations, smoother appearance of age-appropriate skills.',
      homeTitle: 'What Parents Can Do at Home Before the Visit',
      homeSafeTitle: 'Safe basic steps:',
      homeSafe: ['change positions frequently throughout the day;','limit long periods in one passive position;','include brief, quality tummy time according to tolerance;','observe when the infant tenses most and note situations.'],
      homeAvoidTitle: 'What to avoid:',
      homeAvoid: ['aggressive forceful stretching;','random internet exercises without assessment;','promises to cure in one procedure.'],
      faqTitle: 'Frequently Asked Questions',
      faqs: [
        { q: 'Does hypertonia always mean a neurological disease?', a: 'No. Often it is a functional tone regulation disorder. However, assessment is necessary to rule out more serious causes.' },
        { q: 'Will the infant grow out of hypertonia?', a: 'Sometimes some signs decrease on their own, but the risk of forming incorrect movement patterns remains. Therefore it is better to assess early.' },
        { q: 'When is the best time to start?', a: 'The sooner the better. In the first months correction is usually most effective.' },
        { q: 'Is therapy painful?', a: 'No. Work is done gently, according to the infant\'s tolerance and safety principles.' },
        { q: 'Do parents participate in the visit?', a: 'Yes. Parent involvement is essential, as a large part of progress happens at home.' },
        { q: 'Can massage replace physiotherapy?', a: 'Not always. Massage is beneficial, but most often it is part of a broader physiotherapy plan.' },
        { q: 'How quickly is a result visible?', a: 'Often the first changes are visible within a few weeks if the plan is applied consistently.' },
        { q: 'Is a neurologist consultation needed?', a: 'If red flags are present or clear developmental risk exists, yes. If not, pediatrician monitoring and physiotherapy follow-up is still useful.' },
        { q: 'Can Vojta, DNS, massage and hydrotherapy be combined?', a: 'Yes, if methods are selected individually and have a clear goal.' },
        { q: 'When can therapy be reduced?', a: 'When functional goals are achieved: movement quality improves, tension decreases and development proceeds according to age.' },
      ],
      specialistsTitle: 'Our Specialists',
      specialistsSubtitle: 'Licensed specialists with proper qualifications and experience',
      finalTitle: 'Register for Consultation',
      finalDesc: 'If you suspect hypotonia or notice that the infant\'s movements are becoming stiff and tense, register for assessment.',
      ctaRegister: 'Register for Visit',
      ctaCall: '+370 666 99676',
    },
  }[currentLang];

  const specialists = [
    { name: 'Agnė Juodytė', role: 'Kineziterapeutė', src: '/specialists/agne.png', desc: 'Patyrusi kineziterapeutė, dirbanti su kūdikiais nuo pirmųjų dienų ir vaikais, turinčiais įvairių raidos, neurologinių ar judėjimo iššūkių.' },
    { name: 'Ksenija Persijanova', role: 'Kineziterapeutė', src: '/specialists/ksenija.png', desc: 'Kineziterapeutė su praktine patirtimi kūdikių kineziterapijoje ir paliatyvioioje pediatrijoje. Specializuojasi kūdikių hidroterapijos procedūrose.' },
    { name: 'Ramunė Nemeikaitė', role: 'Masažo terapeutė', src: '/specialists/ramune.png', desc: 'Sertifikuota vaikų masažo specialistė. Masažo terapeutė Vaikų ligoninėje ir Santaros klinikose.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header translations={t} currentLang={currentLang} onLanguageChange={handleLanguageChange} />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative flex items-center bg-[#e8e6e3]" style={{ width: '100%', minHeight: '60vh', overflow: 'hidden' }}>
          <div className="absolute inset-0">
            <Image src="/services/infant-massage.jpg" alt="Kūdikių hipotonusas" fill priority quality={95} sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center 30%', filter: 'brightness(1.1) contrast(0.95) blur(8px)' }} />
            <div className="absolute inset-0 bg-white opacity-15 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          </div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">{txt.heroTitle}</h1>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{txt.introDesc}</p>
            <p className="text-lg text-gray-700 font-medium mb-4">{txt.introLabel}</p>
            <ul className="space-y-3">
              {txt.introItems.map((item: string, i: number) => (
                <li key={i} className="flex items-start">
                  <span className="text-[#fb7825] mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Short answer */}
        <section className="py-14 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-l-4 border-[#54B6FC] pl-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{txt.shortTitle}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{txt.shortText}</p>
            </div>
          </div>
        </section>

        {/* What is tone */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{txt.whatTitle}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{txt.whatText}</p>
            <p className="text-lg text-gray-700 mb-4">{txt.whatNote}</p>
            <ul className="space-y-3">
              {txt.whatList.map((item: string, i: number) => (
                <li key={i} className="flex items-start">
                  <span className="text-[#54B6FC] mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Signs by age */}
        <section className="py-16 bg-gradient-to-br from-[#fb7825] to-[#e66f1f]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">{txt.signsTitle}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {txt.ages.map((age: any, i: number) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-[#fb7825] mb-3">{age.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 italic">{age.intro}</p>
                  <ul className="space-y-2">
                    {age.list.map((item: string, j: number) => (
                      <li key={j} className="flex items-start">
                        <span className="text-[#fb7825] mr-2 mt-1 text-xs">•</span>
                        <span className="text-gray-700 text-sm">{item}</span>
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
            <p className="text-lg text-gray-700 mb-6">{txt.causesIntro}</p>
            <ul className="space-y-3 mb-8">
              {txt.causesList.map((item: string, i: number) => (
                <li key={i} className="flex items-start">
                  <span className="text-[#54B6FC] mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-blue-50 border-l-4 border-[#54B6FC] p-6 rounded-r-lg">
              <p className="text-gray-800 leading-relaxed">{txt.causesNote}</p>
            </div>
          </div>
        </section>

        {/* Urgent */}
        <section className="py-16 bg-red-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{txt.urgentTitle}</h2>
            <p className="text-lg text-gray-700 mb-6">{txt.urgentIntro}</p>
            <ul className="space-y-4 mb-8">
              {txt.urgentList.map((item: string, i: number) => (
                <li key={i} className="flex items-start bg-white rounded-lg p-4 shadow-sm border-l-4 border-red-400">
                  <span className="text-red-500 mr-3 font-bold">!</span>
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed">{txt.urgentNote}</p>
          </div>
        </section>

        {/* Assessment */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">{txt.assessTitle}</h2>
            <div className="space-y-8">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {txt.steps.map((step: any, i: number) => (
                <div key={i} className="bg-white rounded-xl p-8 shadow-md border-l-4 border-[#54B6FC]">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-700 mb-3">{step.intro}</p>
                  <ul className="space-y-2">
                    {step.list.map((item: string, j: number) => (
                      <li key={j} className="flex items-start">
                        <span className="text-[#54B6FC] mr-3">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Therapy */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">{txt.therapyTitle}</h2>
            <div className="bg-gray-50 rounded-xl p-6 mb-10 max-w-2xl mx-auto">
              <p className="text-gray-700 mb-3">{txt.therapyGoalNote}</p>
              <ul className="space-y-2">
                {txt.therapyGoals.map((item: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#fb7825] mr-3">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {txt.services.map((svc: any, i: number) => (
                <div key={i} className="bg-white rounded-xl p-8 shadow-md border-l-4 border-[#54B6FC]">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{svc.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{svc.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{txt.visitsTitle}</h2>
            <p className="text-lg text-gray-700 mb-6">{txt.visitsIntro}</p>
            <ul className="space-y-4 mb-8">
              {txt.visitsList.map((item: string, i: number) => (
                <li key={i} className="flex items-start bg-white rounded-lg p-4 shadow-sm">
                  <span className="text-[#54B6FC] mr-3 font-bold">{i + 1}.</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-blue-50 border-l-4 border-[#54B6FC] p-6 rounded-r-lg">
              <p className="text-gray-800 leading-relaxed">{txt.visitsNote}</p>
            </div>
          </div>
        </section>

        {/* Home tips */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">{txt.homeTitle}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{txt.homeSafeTitle}</h3>
                <ul className="space-y-3">
                  {txt.homeSafe.map((item: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-3">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{txt.homeAvoidTitle}</h3>
                <ul className="space-y-3">
                  {txt.homeAvoid.map((item: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <span className="text-red-400 mr-3">✗</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">{txt.faqTitle}</h2>
            <div className="space-y-4">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {txt.faqs.map((faq: any, i: number) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialists */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{txt.specialistsTitle}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{txt.specialistsSubtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specialists.map((s) => (
                <div key={s.name} className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image src={s.src} alt={s.name} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      style={{ objectPosition: 'center 10%' }} sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 90vw" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{s.name}</h3>
                    <div className="text-sm font-semibold text-[#54B6FC] mb-4">{s.role}</div>
                    <p className="text-gray-600 leading-relaxed text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials translations={t} />

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">{txt.finalTitle}</h2>
            <p className="text-lg text-white/95 leading-relaxed mb-10 max-w-2xl mx-auto">{txt.finalDesc}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/registracija" className="inline-flex items-center space-x-2 bg-white hover:bg-gray-50 text-[#54B6FC] px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg">
                <span>{txt.ctaRegister}</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="tel:+37066699676" className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur text-white border-2 border-white px-8 py-4 rounded-full font-semibold transition-all">
                <Phone className="w-5 h-5" />
                <span>{txt.ctaCall}</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer translations={t} />
      <FloatingActionButtons currentLang={currentLang} />
    </div>
  );
}
