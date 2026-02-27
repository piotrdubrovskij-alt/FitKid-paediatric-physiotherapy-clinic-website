'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import Testimonials from '@/components/Testimonials';
import { translations, type Language } from '@/lib/i18n/translations';
import { Phone, ArrowRight } from 'lucide-react';

export default function MotoRaidosVelavimasPage() {
  const [currentLang, setCurrentLang] = useState<Language>('lt');
  const t = translations[currentLang];
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang') as Language;
    if (lang === 'en' || lang === 'lt') {
      setCurrentLang(lang);
    }
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('lang', lang);
    window.history.pushState({}, '', currentUrl.toString());
  };

  const pageText = {
    lt: {
      heroTitleH1: 'Motorinės raidos vėlavimas',
      heroTitleH2: 'Požymiai, priežastys ir šiuolaikinė pagalba',
      intro1: 'Motorinė raida – tai kūdikio gebėjimas judėti, laikyti kūną, keisti pozas ir palaipsniui įgyti vis sudėtingesnius judesius: nuo galvytės laikymo iki vartymosi, ropojimo, sėdėjimo ir galiausiai vaikščiojimo. Kiekvienas kūdikis vystosi individualiai, tačiau yra tam tikri raidos „langai", kuriuose tikimasi pagrindinių judėjimo etapų. Kai šie etapai aiškiai vėluoja, tai vadinama motorinės raidos vėlavimu.',
      intro2: 'Svarbu pabrėžti: motorinės raidos vėlavimas nebūtinai reiškia rimtą ligą. Dažnai tai yra funkcinė, koreguojama būklė, susijusi su raumenų tonuso disbalansu, kūno asimetrija ar nepakankamu stabilumu. Ankstyvas kineziterapinis įvertinimas ir tikslinga pagalba padeda „grąžinti" raidą į taisyklingą kelią ir užtikrinti, kad kūdikis jaustųsi stiprus, stabilus ir saugus judėdamas.',
      intro3: 'Šiame puslapyje aiškiai ir „pusiau moksliškai" paaiškiname, kas yra motorinės raidos vėlavimas, kaip jį atpažinti, kokios galimos priežastys, kokios pasekmės, ir kaip Fitkid vaikų ir kūdikių kineziterapijos klinikoje Vilniuje padedame kūdikiams.',
      whatIsTitle: 'Kas yra motorinės raidos vėlavimas?',
      whatIsIntro: 'Motorinė raida apima visas kūdikio judėjimo ir laikysenos funkcijas. Vėlavimas reiškia, kad kūdikis tam tikrus judėjimo etapus pasiekia vėliau nei dauguma bendraamžių. Tai gali būti:',
      whatIsList: ['vėluojantis galvytės laikymas', 'vėluojantis vartymasis', 'vėluojantis sėdėjimas', 'ropojimo praleidimas', 'vėluojantis stojimas ar vaikščiojimas'],
      whatIsEnd: 'Svarbu suprasti, kad kartais kūdikis gali „pasivyti" be didesnės intervencijos, tačiau daugeliu atvejų ankstyva pagalba leidžia išvengti netaisyklingų judėjimo modelių ir vėlesnių problemų.',
      signsTitle: 'Kaip atpažinti motorinės raidos vėlavimą?',
      sign1: 'Galvytės laikymo vėlavimas',
      sign1Desc: 'Paprastai kūdikis pradeda tvirtai laikyti galvą apie 3 mėnesį. Jei kūdikis ir po 3–4 mėn. vis dar sunkiai pakelia galvą, tai gali būti raidos vėlavimo ženklas.',
      sign2: 'Vėluojantis vartymasis',
      sign2Desc: 'Dauguma kūdikių pradeda vartytis apie 4–6 mėnesį. Jei kūdikis ilgai nesivarto ar tai daro labai neaktyviai, verta pasitarti.',
      sign3: 'Ropojimo praleidimas',
      sign3Desc: 'Ropojimas yra svarbus etapas, kuris lavina koordinaciją ir abiejų smegenų pusrutulių bendradarbiavimą. Jei kūdikis pereina tiesiai nuo sėdėjimo prie stovėjimo, tai gali būti raidos spraga.',
      sign4: 'Vėluojantis sėdėjimas ar stojimas',
      sign4Desc: 'Jei kūdikis ilgai nesėdi savarankiškai ar nestovi su atrama, tai gali signalizuoti motorikos vėlavimą.',
      sign5: '„Neaktyvus" judėjimas',
      sign5Desc: 'Kai kūdikis mažai spardosi, mažai keičia pozas ir atrodo vangus – tai taip pat gali būti požymis.',
      causesTitle: 'Kodėl motorinė raida vėluoja?',
      causesIntro: 'Motorinės raidos vėlavimas turi daugybę galimų priežasčių. Dažnai jos yra funkcinės ir koreguojamos.',
      cause1: 'Raumenų tonuso disbalansas',
      cause1Desc: 'Hipertonusas (per didelis tonusas) arba hipotonusas (per mažas tonusas) gali trukdyti kūdikiui judėti taisyklingai. Per įtempti raumenys trukdo judesiams, per silpni – nesuteikia stabilumo.',
      cause2: 'Kūno asimetrija',
      cause2Desc: 'Kai kūdikis „renkasi" vieną pusę, dažniau sukasi ar remiasi viena rankyte, judesių modeliai tampa netaisyklingi ir lėtesni.',
      cause3: 'Nepakankamas giliųjų raumenų aktyvumas',
      cause3Desc: 'Gilieji stabilizatoriai (pilvo, nugaros raumenys) yra būtini tam, kad kūdikis galėtų stabiliai judėti. Jei jie neaktyvūs, kūdikis negali pereiti prie sudėtingesnių judesių.',
      cause4: 'Gimdymo ar nėštumo veiksniai',
      cause4Desc: 'Ilgas ar sudėtingas gimdymas, sėdmeninė padėtis, ankstyvas gimimas ar kiti veiksniai gali paveikti raidos pradžią.',
      cause5: 'Mažai judėjimo patirties',
      cause5Desc: 'Kai kūdikis daug laiko praleidžia vienoje padėtyje (pvz., ant nugaros), raida gali sulėtėti dėl mažesnės judėjimo patirties.',
      whyImportantTitle: 'Kodėl svarbu koreguoti motorinės raidos vėlavimą?',
      whyImportant1: 'Motorinė raida nėra tik „judėjimas". Ji tiesiogiai susijusi su:',
      relatedList: ['kūno koordinacija', 'laikysena', 'balansavimu', 'sensoriniu suvokimu', 'vėlesne fizine veikla'],
      whyImportant2: 'Jei raida vėluoja, kūdikis gali formuoti kompensacinius judesius, kurie vėliau tampa įpročiais. Tai gali lemti:',
      consequencesList: ['netaisyklingą laikyseną', 'koordinacijos trūkumus', 'silpnesnę pusiausvyrą', 'vėlesnius judėjimo sunkumus'],
      whyImportant3: 'Ankstyva kineziterapija padeda išvengti šių problemų ir užtikrinti sklandžią raidą.',
      helpTitle: 'Kaip padedame Fitkid klinikoje?',
      helpIntro: 'Fitkid klinikoje Vilniuje taikome kompleksinį ir švelnų požiūrį į motorinės raidos vėlavimą. Mūsų tikslas – ne tik „paspartinti" raidą, bet ir užtikrinti, kad ji vyktų taisyklingai.',
      service1: 'Individuali kūdikių kineziterapija',
      service1Intro: 'Kiekvienam kūdikiui atliekame išsamų įvertinimą: raumenų tonusas, simetrija, refleksai, judėjimo etapai. Sudarome individualų planą, kuriame:',
      service1List: ['parenkami pratimai pagal kūdikio amžių', 'stiprinami silpni raumenys', 'aktyvuojami gilieji stabilizatoriai', 'kuriami taisyklingi judesių modeliai'],
      service2: 'DNS terapija (Dinaminė neuroraumeninė stabilizacija)',
      service2Desc: 'DNS metodika paremta kūdikių natūralaus vystymosi principais. Ji padeda aktyvuoti giliuosius raumenis, atkurti taisyklingą kūno ašį ir „įjungti" natūralius judėjimo šablonus.',
      service3: 'Vojta terapija',
      service3Desc: 'Vojta metodika aktyvuoja įgimtus judesių modelius per refleksines padėtis. Tai ypač svarbu kūdikiams, kurie dar negali savarankiškai atlikti taisyklingų judesių.',
      service4: 'Gydomasis masažas',
      service4Desc: 'Masažas padeda sumažinti per didelę įtampą arba paskatinti silpnų raumenų aktyvumą. Tai švelni priemonė, kurią dažnai deriname su kineziterapija.',
      service5: 'Hidroterapija',
      service5Desc: 'Šiltas vanduo sumažina gravitacijos poveikį, todėl kūdikis gali lengviau atlikti judesius, kurie sausumoje būtų per sunkūs. Tai puiki papildoma priemonė.',
      whenTitle: 'Kada kreiptis į specialistą?',
      whenIntro: 'Rekomenduojame pasitarti, jei:',
      whenList: ['kūdikis aiškiai vėluoja su galvytės laikymu', 'nesivarto ar varto sunkiai', 'ropojimo etapo nėra', 'sėdėjimas ar stojimas vėluoja', 'kūdikis vangus ir mažai juda'],
      whenNote: 'Ankstyva konsultacija leidžia greitai įvertinti situaciją ir padėti kūdikiui „pasivyti" raidą.',
      specialistsTitle: 'Mūsų specialistai',
      specialistsSubtitle: 'Licencijuoti specialistai su tinkamomis kvalifikacijomis ir patirtimi',
      finalTitle: 'Registracija konsultacijai',
      finalDesc: 'Jei pastebite, kad vaiko motorinė raida vėluoja, kviečiame pasikonsultuoti. Ankstyva pagalba padeda užtikrinti sklandžią raidą ir išvengti vėlesnių problemų.',
      ctaRegister: 'Registruotis vizitui',
      ctaCall: '+370 666 99676',
      medNote: 'Ši informacija yra informacinio pobūdžio ir nepakeičia individualios gydytojo konsultacijos. Jei būklė blogėja arba atsiranda pavojaus požymių, nedelsdami kreipkitės į gydytoją.',
      relatedTitle: 'Susijusios būklės',
      related: [
        { href: '/kudikiu-hipertonusas', label: 'Hipertonusas' },
        { href: '/ka-gydome/kudikiu-hipotonusas', label: 'Hipotonusas' },
        { href: '/kudikio-kreivakakliste', label: 'Kreivakaklystė' },
        { href: '/plagiocefalija', label: 'Plagiocefalija' },
        { href: '/ka-gydome/klubo-sanario-displazija-kudikiams', label: 'Klubo sąnario displazija' },
      ],
    },
    en: {
      heroTitleH1: 'Motor Development Delays',
      heroTitleH2: 'Signs, causes and modern help',
      intro1: 'Motor development is the infant\'s ability to move, hold the body, change positions, and gradually acquire increasingly complex movements: from holding the head to rolling, crawling, sitting, and finally walking. Each infant develops individually, but there are certain developmental "windows" where key movement milestones are expected. When these milestones are clearly delayed, it is called motor development delay.',
      intro2: 'Important to emphasize: motor development delay does not necessarily mean a serious illness. Often it is a functional, correctable condition related to muscle tone imbalance, body asymmetry, or insufficient stability. Early physiotherapy assessment and targeted help helps to "return" development to the correct path and ensure that the infant feels strong, stable and safe when moving.',
      intro3: 'On this page we clearly and "semi-scientifically" explain what motor development delay is, how to recognize it, what are possible causes, consequences, and how we help infants at Fitkid children\'s and infant physiotherapy clinic in Vilnius.',
      whatIsTitle: 'What is Motor Development Delay?',
      whatIsIntro: 'Motor development includes all infant movement and posture functions. Delay means that the infant reaches certain movement milestones later than most peers. This can be:',
      whatIsList: ['delayed head control', 'delayed rolling', 'delayed sitting', 'skipping crawling', 'delayed standing or walking'],
      whatIsEnd: 'It\'s important to understand that sometimes infant can "catch up" without major intervention, but in many cases early help allows to avoid incorrect movement patterns and later problems.',
      signsTitle: 'How to Recognize Motor Development Delay?',
      sign1: 'Delayed Head Control',
      sign1Desc: 'Usually infant starts to hold head firmly around 3 months. If after 3-4 months still struggles to lift head, this may be a sign of developmental delay.',
      sign2: 'Delayed Rolling',
      sign2Desc: 'Most infants start rolling around 4-6 months. If infant does not roll for long time or does it very inactively, worth consulting.',
      sign3: 'Skipping Crawling',
      sign3Desc: 'Crawling is an important stage that develops coordination and cooperation of both brain hemispheres. If infant goes directly from sitting to standing, this may be a developmental gap.',
      sign4: 'Delayed Sitting or Standing',
      sign4Desc: 'If infant does not sit independently or stand with support for long time, this may signal motor delay.',
      sign5: '"Inactive" Movement',
      sign5Desc: 'When infant kicks little, rarely changes positions and seems sluggish – this can also be a sign.',
      causesTitle: 'Why Does Motor Development Delay?',
      causesIntro: 'Motor development delay has many possible causes. Often they are functional and correctable.',
      cause1: 'Muscle Tone Imbalance',
      cause1Desc: 'Hypertonia (too high tone) or hypotonia (too low tone) can prevent infant from moving correctly. Too tight muscles hinder movements, too weak – do not provide stability.',
      cause2: 'Body Asymmetry',
      cause2Desc: 'When infant "chooses" one side, turns or leans on one arm more often, movement patterns become irregular and slower.',
      cause3: 'Insufficient Deep Muscle Activity',
      cause3Desc: 'Deep stabilizers (abdominal, back muscles) are necessary for infant to move stably. If they are inactive, infant cannot progress to more complex movements.',
      cause4: 'Birth or Pregnancy Factors',
      cause4Desc: 'Long or complicated birth, breech position, premature birth or other factors can affect development start.',
      cause5: 'Little Movement Experience',
      cause5Desc: 'When infant spends a lot of time in one position (e.g., on back), development may slow down due to less movement experience.',
      whyImportantTitle: 'Why is it Important to Correct Motor Development Delay?',
      whyImportant1: 'Motor development is not just "movement". It is directly related to:',
      relatedList: ['body coordination', 'posture', 'balance', 'sensory perception', 'later physical activity'],
      whyImportant2: 'If development is delayed, infant may form compensatory movements that later become habits. This can lead to:',
      consequencesList: ['incorrect posture', 'coordination deficiencies', 'weaker balance', 'later movement difficulties'],
      whyImportant3: 'Early physiotherapy helps avoid these problems and ensure smooth development.',
      helpTitle: 'How We Help at Fitkid Clinic?',
      helpIntro: 'At Fitkid clinic in Vilnius we apply comprehensive and gentle approach to motor development delay. Our goal is not only to "accelerate" development, but also to ensure it occurs correctly.',
      service1: 'Individual Infant Physiotherapy',
      service1Intro: 'For each infant we perform comprehensive assessment: muscle tone, symmetry, reflexes, movement stages. We create individual plan where:',
      service1List: ['exercises are selected according to infant\'s age', 'weak muscles are strengthened', 'deep stabilizers are activated', 'correct movement patterns are created'],
      service2: 'DNS Therapy (Dynamic Neuromuscular Stabilization)',
      service2Desc: 'DNS methodology is based on principles of infants\' natural development. It helps activate deep muscles, restore correct body axis and "turn on" natural movement patterns.',
      service3: 'Vojta Therapy',
      service3Desc: 'Vojta methodology activates innate movement patterns through reflex positions. This is especially important for infants who cannot yet perform correct movements independently.',
      service4: 'Therapeutic Massage',
      service4Desc: 'Massage helps reduce excessive tension or stimulate weak muscle activity. This is a gentle tool that we often combine with physiotherapy.',
      service5: 'Hydrotherapy',
      service5Desc: 'Warm water reduces gravity effect, so infant can perform movements more easily that would be too difficult on land. This is an excellent additional tool.',
      whenTitle: 'When to Contact a Specialist?',
      whenIntro: 'We recommend consulting if:',
      whenList: ['infant clearly delays with head control', 'does not roll or rolls with difficulty', 'crawling stage is absent', 'sitting or standing is delayed', 'infant is sluggish and moves little'],
      whenNote: 'Early consultation allows quick assessment and helps infant "catch up" with development.',
      specialistsTitle: 'Our Specialists',
      specialistsSubtitle: 'Licensed specialists with proper qualifications and experience',
      finalTitle: 'Registration for Consultation',
      finalDesc: 'If you notice that your child\'s motor development is delayed, we invite you to consult. Early help ensures smooth development and avoids later problems.',
      ctaRegister: 'Register for Visit',
      ctaCall: '+370 666 99676',
      medNote: 'This information is for informational purposes and does not replace individual medical consultation. If the condition worsens or danger signs appear, contact a doctor without delay.',
      relatedTitle: 'Related conditions',
      related: [
        { href: '/kudikiu-hipertonusas', label: 'Hypertonia' },
        { href: '/ka-gydome/kudikiu-hipotonusas', label: 'Hypotonia' },
        { href: '/kudikio-kreivakakliste', label: 'Torticollis' },
        { href: '/plagiocefalija', label: 'Plagiocephaly' },
        { href: '/ka-gydome/klubo-sanario-displazija-kudikiams', label: 'Hip dysplasia' },
      ],
    },
  };

  const txt = pageText[currentLang];

  return (
    <div className="min-h-screen bg-white">
      <Header
        translations={t}
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
      />

      <main className="pt-20">
        {/* Hero Section */}
        <section 
          className="relative flex items-center bg-[#e8e6e3]" 
          style={{ 
            width: '100%', 
            minHeight: '60vh',
            overflow: 'hidden' 
          }}
        >
          <div className="absolute inset-0">
            <Image
              src="/services/infant-physiotherapy.jpg"
              alt="Motorinės raidos vėlavimas"
              fill
              priority
              quality={95}
              sizes="100vw"
              style={{ 
                objectFit: 'cover', 
                objectPosition: 'center 30%',
                filter: 'brightness(1.1) contrast(0.95) blur(8px)'
              }}
            />
            <div className="absolute inset-0 bg-white opacity-15 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          </div>

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
                  {txt.heroTitleH1}
                </h1>
                <h2 className="text-lg md:text-xl text-white/90 leading-relaxed mt-2">
                  {txt.heroTitleH2}
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {txt.intro1}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {txt.intro2}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {txt.intro3}
              </p>
            </div>
          </div>
        </section>

        {/* What is Motor Development Delay */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {txt.whatIsTitle}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {txt.whatIsIntro}
            </p>
            <ul className="space-y-3 mb-6">
              {txt.whatIsList.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-[#fb7825] mr-3">•</span>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              {txt.whatIsEnd}
            </p>
          </div>
        </section>

        {/* How to Recognize - Orange Section */}
        <section className="py-16 bg-gradient-to-br from-[#fb7825] to-[#e66f1f]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              {txt.signsTitle}
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. {txt.sign1}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {txt.sign1Desc}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. {txt.sign2}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {txt.sign2Desc}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. {txt.sign3}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {txt.sign3Desc}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">4. {txt.sign4}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {txt.sign4Desc}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">5. {txt.sign5}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {txt.sign5Desc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Does Development Delay */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {txt.causesTitle}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              {txt.causesIntro}
            </p>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#54B6FC]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. {txt.cause1}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {txt.cause1Desc}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#54B6FC]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. {txt.cause2}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {txt.cause2Desc}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#54B6FC]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. {txt.cause3}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {txt.cause3Desc}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#54B6FC]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">4. {txt.cause4}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {txt.cause4Desc}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#54B6FC]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">5. {txt.cause5}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {txt.cause5Desc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Important to Correct */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {txt.whyImportantTitle}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {txt.whyImportant1}
            </p>
            <ul className="space-y-3 mb-8">
              {txt.relatedList.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-[#54B6FC] mr-3">•</span>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {txt.whyImportant2}
            </p>
            <ul className="space-y-3 mb-6">
              {txt.consequencesList.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-[#fb7825] mr-3">•</span>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              {txt.whyImportant3}
            </p>
          </div>
        </section>

        {/* How We Help */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              {txt.helpTitle}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center mb-12 max-w-3xl mx-auto">
              {txt.helpIntro}
            </p>
            
            <div className="space-y-10">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{txt.service1}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {txt.service1Intro}
                </p>
                <ul className="space-y-2">
                  {txt.service1List.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#54B6FC] mr-3">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-[#54B6FC]">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{txt.service2}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {txt.service2Desc}
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-[#54B6FC]">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{txt.service3}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {txt.service3Desc}
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-[#54B6FC]">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{txt.service4}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {txt.service4Desc}
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-[#54B6FC]">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{txt.service5}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {txt.service5Desc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* When to Contact Specialist */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {txt.whenTitle}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {txt.whenIntro}
            </p>
            <ul className="space-y-4 mb-8">
              {txt.whenList.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-[#fb7825] mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-blue-50 border-l-4 border-[#54B6FC] p-6 rounded-r-lg">
              <p className="text-gray-800 leading-relaxed">
                {txt.whenNote}
              </p>
            </div>
          </div>
        </section>

        {/* Specialists Section - Same as Homepage */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {txt.specialistsTitle}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {txt.specialistsSubtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Agnė Juodytė */}
              <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative aspect-[3/4] bg-gradient-to-br from-[#54B6FC]/15 to-[#fb7825]/15 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/specialists/agne.png"
                    alt="Agnė Juodytė"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{
                      objectPosition: 'center 10%'
                    }}
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 90vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Agnė Juodytė
                  </h3>
                  <div className="text-sm font-semibold text-[#54B6FC] mb-4">
                    Kineziterapeutė
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Patyrusi kineziterapeutė, dirbanti su kūdikiais nuo pirmųjų dienų ir vaikais, turinčiais įvairių raidos, neurologinių ar judėjimo iššūkių.
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#54B6FC]/10 to-[#fb7825]/10 rounded-full blur-2xl" />
              </div>

              {/* Ksenija Persijanova */}
              <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative aspect-[3/4] bg-gradient-to-br from-[#54B6FC]/15 to-[#fb7825]/15 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/specialists/ksenija.png"
                    alt="Ksenija Persijanova"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{
                      objectPosition: 'center 10%'
                    }}
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 90vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Ksenija Persijanova
                  </h3>
                  <div className="text-sm font-semibold text-[#54B6FC] mb-4">
                    Kineziterapeutė
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Kineziterapeutė su praktine patirtimi kūdikių kineziterapijoje ir paliaty­vio­je pediatrijoje. Specializuojasi kūdikių hidroterapijos procedūrose ir darbe su vaikais.
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#54B6FC]/10 to-[#fb7825]/10 rounded-full blur-2xl" />
              </div>

              {/* Ramunė Nemeikaitė */}
              <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative aspect-[3/4] bg-gradient-to-br from-[#54B6FC]/15 to-[#fb7825]/15 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/specialists/ramune.png"
                    alt="Ramunė Nemeikaitė"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{
                      objectPosition: 'center 10%'
                    }}
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 90vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Ramunė Nemeikaitė
                  </h3>
                  <div className="text-sm font-semibold text-[#54B6FC] mb-4">
                    Masažo terapeutė
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Sertifikuota vaikų masažo specialistė. Masažo terapeutė Vaikų ligoninėje ir Santaros klinikose. Specializuojasi gydomuosiuose kūdikių ir vaikų masažuose.
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#54B6FC]/10 to-[#fb7825]/10 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials translations={t} />

        {/* Related conditions */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">{txt.relatedTitle}</h2>
            <div className="flex flex-wrap gap-3">
              {txt.related.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-[#54B6FC] text-gray-700 hover:text-[#54B6FC] px-4 py-2 rounded-full text-sm font-medium transition-all hover:shadow-md"
                >
                  {link.label}
                  <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              {txt.finalTitle}
            </h2>
            <p className="text-lg text-white/95 leading-relaxed mb-10 max-w-2xl mx-auto">
              {txt.finalDesc}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/registracija"
                className="inline-flex items-center space-x-2 bg-white hover:bg-gray-50 text-[#54B6FC] px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
              >
                <span>{txt.ctaRegister}</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+37066699676"
                className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur text-white border-2 border-white px-8 py-4 rounded-full font-semibold transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>{txt.ctaCall}</span>
              </a>
            </div>
          </div>
        </section>

        {/* Medical note */}
        <section className="py-8 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-500">{txt.medNote}</p>
          </div>
        </section>
      </main>

      <Footer translations={t} />
      <FloatingActionButtons currentLang={currentLang} />
    </div>
  );
}
