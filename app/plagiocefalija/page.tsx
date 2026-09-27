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

export default function PlagiocefalijosPage() {
  const [currentLang, setCurrentLang] = useState<Language>('lt');
  const t = translations[currentLang];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang') as Language;
    if (lang === 'en' || lang === 'lt') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
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
      heroTitle: 'Kūdikių plagiocefalija: plokščios galvytės požymiai ir ką daryti tėvams',
      heroSubtitle: 'Požymiai pagal amžių, kada kreiptis ir kaip padeda kineziterapija',
      heroNote: 'Kuo anksčiau pradedama korekcija, tuo paprastesnis ir greitesnis rezultatas. FitKid klinikoje Vilniuje – individualus įvertinimas ir aiškus planas.',

      quickAnswerBody: 'Plagiocefalija dažniausiai atsiranda, kai kūdikio galvytė ilgai remiasi į tą pačią vietą. Pirmaisiais mėnesiais kaukolės kaulai yra minkštesni, todėl forma lengviau kinta.',
      quickAnswerChecklist: [
        'kūdikį būtina ir toliau guldyti ant nugaros miegui',
        'korekcija vyksta dienos metu keičiant padėtis ir didinant tummy time',
        'kuo anksčiau pradedama, tuo paprastesnė korekcija',
      ],
      quickAnswerWarning: 'Jei asimetrija ryški ar progresuoja, verta nelaukti.',

      typesTitle: 'Tipai',
      types: [
        { emoji: '📐', name: 'Plagiocefalija', desc: 'asimetrinis pakaušio suplokštėjimas vienoje pusėje. Ausies linija pasislinkusi, kakta vienoje pusėje labiau išgaubta.' },
        { emoji: '🔲', name: 'Brachicefalija', desc: 'simetriškas užpakalinės galvos dalies suplokštėjimas per visą plotį. Galvytė atrodo platesnė.' },
        { emoji: '⚠️', name: 'Kraniosinostozė', desc: 'retesnė būklė dėl priešlaikinio kaukolės siūlių suaugimo. Reikalauja specialisto įvertinimo.' },
      ],

      ageSignsTitle: 'Požymiai pagal amžių',
      ageGroups: [
        {
          age: '0–3 mėn.',
          signs: [
            'kūdikis dažniau laiko galvą pasuktą į vieną pusę',
            'užpakalyje pradeda matytis vienpusis plokštėjimas',
            'maitinant viena kryptimi kūdikis ramesnis',
            'paėmus ant rankų galvos preferencija išlieka',
          ],
        },
        {
          age: '3–6 mėn.',
          signs: [
            'ryškesnis pakaušio formos skirtumas',
            'asimetriškas vartymosi modelis',
            'vienpusė rankų atramos preferencija',
            'galvos laikymo vidurio linijoje sunkumai',
          ],
        },
        {
          age: '6–12 mėn.',
          signs: [
            'asimetrija išlieka su judesių kompensacijomis',
            'liemens ir dubens disbalansas',
            'pereinamieji judesiai vienu keliu',
            'mažesnė simetriško ropojimo kokybė',
          ],
        },
      ],

      consequencesTitle: 'Pasekmės be korekcijos',
      consequences: [
        'Didėjanti galvos ir veido asimetrija',
        'Vienpusiai kaklo judesio modeliai',
        'Pečių juostos, liemens ir dubens disbalansas',
        'Prastesnė judesių simetrija',
        'Didesnė motorinės raidos vėlavimo rizika',
      ],
      consequencesNote: 'Tikslas nėra tobula forma bet kokia kaina. Tikslas – sustabdyti progresą, pagerinti simetriją ir užtikrinti kokybišką judesio raidą.',

      redFlagsTitle: 'Kada skubiai konsultuotis su gydytoju',
      redFlags: [
        'Galvos forma keičiasi greitai ir netipiškai',
        'Kietos, neįprastos kaukolės keteros ar labai neįprasta forma',
        'Ryškus galvos apimties augimo sulėtėjimas',
        'Neurologiniai požymiai (traukuliai, reakcijos pokyčiai)',
        'Kūdikis praranda anksčiau turėtus įgūdžius',
      ],

      evalTitle: 'Kaip vyksta vertinimas FitKid klinikoje',
      evalSteps: [
        { num: '1', title: 'Pokalbis su tėvais', desc: 'kada pradėta matyti asimetrija, miego/maitinimo įpročiai, tummy time kiekis, nėštumo eiga' },
        { num: '2', title: 'Funkcinis vertinimas', desc: 'galvos formos asimetrija, kaklo sukimas, vidurio linija, liemens simetrija, vartymosi kokybė' },
        { num: '3', title: 'Individualus planas', desc: 'namų pozicionavimo planas, pratimų seka pagal amžių, terapijos dažnis, progreso kriterijai' },
      ],

      treatmentsTitle: 'Taikomos priemonės',
      treatments: [
        { emoji: '🧸', name: 'Pozicionavimas', desc: 'keičiama kryptis iš kurios kūdikis stebi aplinką, stimuliacija iš nemėgstamos pusės, ribojamas laikas pasyviose priemonėse' },
        { emoji: '🤲', name: 'Kineziterapija', desc: 'kaklo judesio simetrija, aktyvi galvos kontrolė vidurio linijoje, liemens stabilumas, motorinės raidos kokybė' },
        { emoji: '🌀', name: 'DNS principai', desc: 'gili stabilizacija, galvos-liemens-dubens ašis, simetriška atrama, kompensacijų mažinimas' },
        { emoji: '👐', name: 'Masažas', desc: 'kaklo ir pečių įtampos mažinimas, audinių tolerancija, kūdikio komfortas' },
      ],

      visitsTitle: 'Kiek vizitų reikia?',
      visits: [
        { label: '1 vizitas', desc: 'išsamus vertinimas ir planas' },
        { label: '4–6 vizitai', desc: 'pirmi stabilūs pokyčiai lengvesniais atvejais' },
        { label: '8–12 vizitų', desc: 'kai asimetrija ryškesnė ar yra tortikolis' },
        { label: 'Palaikymas', desc: 'individualiai pagal poreikį' },
      ],

      homeTitle: 'Ką daryti namuose',
      homeDo: [
        'Kasdien daryti trumpas dažnas tummy time sesijas',
        'Žaislus, balsą ir šviesą teikti iš nemėgstamos pusės',
        'Keisti kūdikio orientaciją lovytėje',
        'Kaitalioti maitinimo puses ir nešiojimo pozas',
        'Riboti laiką automobilinėje kėdutėje ir gultukuose',
        'Stebėti ir fiksuoti kada asimetrija ryškiausia',
      ],
      homeDont: [
        'Keisti miego padėtį nuo saugaus gulėjimo ant nugaros',
        'Naudoti nepatikrintas galvos formavimo pagalves',
        'Agresyvūs tempimai namuose be specialisto nurodymo',
      ],

      faqTitle: 'Dažnai užduodami klausimai',
      faq: [
        { q: 'Ar plagiocefalija pavojinga smegenų vystymuisi?', a: 'Pozicinė plagiocefalija dažniausiai smegenų vystymosi nepažeidžia, tačiau ją reikia vertinti ir koreguoti dėl funkcinės simetrijos.' },
        { q: 'Ar tai praeina savaime?', a: 'Dalis atvejų pagerėja augant, bet be kryptingo plano asimetrija gali išlikti ar progresuoti.' },
        { q: 'Ar galima miegui guldyti ant šono ar pilvo?', a: 'Ne. Miegui kūdikis turi būti guldomas ant nugaros. Korekcija vyksta dienos metu.' },
        { q: 'Ar plagiocefalija visada susijusi su tortikoliu?', a: 'Ne visada, bet ryšys labai dažnas. Todėl visada tikriname kaklo judesių simetriją.' },
        { q: 'Ar reikalingi tyrimai?', a: 'Daugeliu atvejų pakanka klinikinio vertinimo. Jei yra netipiškų požymių, gydytojas sprendžia dėl papildomų tyrimų.' },
        { q: 'Kada pradėti korekciją?', a: 'Kuo anksčiau, tuo geriau. Pirmi mėnesiai yra svarbiausias korekcijos langas.' },
        { q: 'Ar masažas vienas gali išspręsti problemą?', a: 'Dažniausiai ne. Geriausi rezultatai gaunami derinant masažą su kineziterapija ir namų planu.' },
        { q: 'Kada svarstomas šalmas?', a: 'Kai asimetrija ryškesnė ir po nuoseklios korekcijos progresas nepakankamas.' },
        { q: 'Kiek laiko trunka korekcija?', a: 'Priklauso nuo atvejo, pirmi pokyčiai dažnai matomi per kelias savaites.' },
        { q: 'Ar reikia laukti kol vaikas išaugs?', a: 'Laukti be plano nerekomenduojama. Ankstyvas darbas duoda geresnį rezultatą.' },
      ],

      specialistsTitle: 'Mūsų specialistai',
      specialistsSubtitle: 'Licencijuoti specialistai su tinkamomis kvalifikacijomis ir patirtimi',
      specialists: [
        { name: 'Agnė Juodytė', role: 'Kineziterapeutė', roleDetail: 'vaikų kineziterapeutė, Vojta terapijos praktikė', img: '/specialists/agne.jpg', desc: 'Patyrusi kineziterapeutė, dirbanti su kūdikiais nuo pirmųjų dienų ir vaikais, turinčiais įvairių raidos, neurologinių ar judėjimo iššūkių.' },
        { name: 'Karolina Černych', role: 'Kineziterapeutė', roleDetail: 'vaikų ir kūdikių kineziterapeutė', img: '/specialists/karolina.jpg', desc: 'Kineziterapeutė, dirbanti su kūdikiais ir vaikais. Taiko DNS metodikos principus, vertina motorinę raidą, tonusą ir simetriją, konsultuoja tėvus dėl pratimų namuose.' },
        { name: 'Ramunė Nemeikaitė', role: 'Masažo terapeutė', roleDetail: 'gydomojo masažo specialistė, dirba tik su kūdikiais ir vaikais', img: '/specialists/ramune.jpg', desc: 'Sertifikuota vaikų masažo specialistė. Masažo terapeutė Vaikų ligoninėje ir Santaros klinikose. Specializuojasi gydomuosiuose kūdikių ir vaikų masažuose.' },
      ],

      relatedTitle: 'Susijusios būklės',
      related: [
        { href: '/kudikio-kreivakakliste', label: 'Kreivakaklystė' },
        { href: '/kudikiu-hipertonusas', label: 'Hipertonusas' },
        { href: '/ka-gydome/kudikiu-hipotonusas', label: 'Hipotonusas' },
        { href: '/motorines-raidos-velavimas', label: 'Motorinės raidos vėlavimas' },
      ],

      ctaTitle: 'Pastebite galvytės asimetriją?',
      ctaPhone: '+370 666 99676',
      ctaAddress: 'Aludarių g. 7-43, Vilnius',
      ctaRegister: 'Registruotis vizitui',
      medNote: 'Ši informacija yra informacinio pobūdžio ir nepakeičia individualios gydytojo konsultacijos. Jei būklė blogėja arba atsiranda pavojaus požymių, nedelsdami kreipkitės į gydytoją.',
    },
    en: {
      heroTitle: 'Infant Plagiocephaly: Signs of a Flat Head and What Parents Should Do',
      heroSubtitle: 'Signs by age, when to seek help, and how physiotherapy helps',
      heroNote: 'The earlier correction begins, the simpler and faster the result. FitKid clinic in Vilnius – individual assessment and a clear plan.',

      quickAnswerBody: 'Plagiocephaly most commonly occurs when an infant\'s head rests in the same position for extended periods. In the first months, skull bones are softer, so the shape changes more easily.',
      quickAnswerChecklist: [
        'infants must continue to be placed on their back for sleep',
        'correction happens during the day by changing positions and increasing tummy time',
        'the earlier it starts, the simpler the correction',
      ],
      quickAnswerWarning: 'If the asymmetry is significant or progressing, it is worth not waiting.',

      typesTitle: 'Types',
      types: [
        { emoji: '📐', name: 'Plagiocephaly', desc: 'asymmetric flattening of the back of the head on one side. The ear line is shifted, the forehead is more prominent on one side.' },
        { emoji: '🔲', name: 'Brachycephaly', desc: 'symmetric flattening of the back of the head across the full width. The head appears wider.' },
        { emoji: '⚠️', name: 'Craniosynostosis', desc: 'a rarer condition due to premature fusion of skull sutures. Requires specialist assessment.' },
      ],

      ageSignsTitle: 'Signs by Age',
      ageGroups: [
        {
          age: '0–3 months',
          signs: [
            'infant more often holds head turned to one side',
            'flattening on one side begins to appear at the back',
            'infant is calmer when fed in one direction',
            'head preference remains when held in arms',
          ],
        },
        {
          age: '3–6 months',
          signs: [
            'more pronounced occipital shape difference',
            'asymmetric rolling pattern',
            'one-sided arm support preference',
            'difficulty holding head in midline',
          ],
        },
        {
          age: '6–12 months',
          signs: [
            'asymmetry persists with movement compensations',
            'trunk and pelvis imbalance',
            'transitional movements in one direction',
            'poorer quality of symmetric crawling',
          ],
        },
      ],

      consequencesTitle: 'Consequences Without Correction',
      consequences: [
        'Increasing head and facial asymmetry',
        'One-sided neck movement patterns',
        'Shoulder girdle, trunk and pelvis imbalance',
        'Poorer movement symmetry',
        'Higher risk of motor development delay',
      ],
      consequencesNote: 'The goal is not a perfect shape at any cost. The goal is to stop progression, improve symmetry and ensure quality movement development.',

      redFlagsTitle: 'When to Consult a Doctor Promptly',
      redFlags: [
        'Head shape changes rapidly and atypically',
        'Hard, unusual skull ridges or a very unusual shape',
        'Significant slowing of head circumference growth',
        'Neurological signs (seizures, changes in responsiveness)',
        'Infant loses previously acquired skills',
      ],

      evalTitle: 'How Assessment Works at FitKid',
      evalSteps: [
        { num: '1', title: 'Parent interview', desc: 'when asymmetry was first noticed, sleep/feeding habits, amount of tummy time, pregnancy history' },
        { num: '2', title: 'Functional assessment', desc: 'head shape asymmetry, neck rotation, midline, trunk symmetry, rolling quality' },
        { num: '3', title: 'Individual plan', desc: 'home positioning plan, age-appropriate exercise sequence, therapy frequency, progress criteria' },
      ],

      treatmentsTitle: 'Methods Used',
      treatments: [
        { emoji: '🧸', name: 'Positioning', desc: 'changing the direction from which the infant observes the environment, stimulation from the non-preferred side, limiting time in passive devices' },
        { emoji: '🤲', name: 'Physiotherapy', desc: 'neck movement symmetry, active head control in midline, trunk stability, motor development quality' },
        { emoji: '🌀', name: 'DNS principles', desc: 'deep stabilization, head-trunk-pelvis axis, symmetric support, reducing compensations' },
        { emoji: '👐', name: 'Massage', desc: 'reducing neck and shoulder tension, tissue tolerance, infant comfort' },
      ],

      visitsTitle: 'How Many Visits Are Needed?',
      visits: [
        { label: '1st visit', desc: 'comprehensive assessment and plan' },
        { label: '4–6 visits', desc: 'first stable changes in milder cases' },
        { label: '8–12 visits', desc: 'when asymmetry is more pronounced or torticollis is present' },
        { label: 'Maintenance', desc: 'individually as needed' },
      ],

      homeTitle: 'What to Do at Home',
      homeDo: [
        'Do short frequent daily tummy time sessions',
        'Offer toys, voice and light from the non-preferred side',
        'Change the infant\'s orientation in the cot',
        'Alternate feeding sides and carrying positions',
        'Limit time in car seats and bouncers',
        'Observe and note when asymmetry is most pronounced',
      ],
      homeDont: [
        'Change sleep position away from safe back sleeping',
        'Use unverified head-shaping pillows',
        'Aggressive stretching at home without specialist guidance',
      ],

      faqTitle: 'Frequently Asked Questions',
      faq: [
        { q: 'Is plagiocephaly dangerous for brain development?', a: 'Positional plagiocephaly usually does not affect brain development, but it should be assessed and corrected for functional symmetry.' },
        { q: 'Does it resolve on its own?', a: 'Some cases improve with growth, but without a targeted plan asymmetry may persist or progress.' },
        { q: 'Is it safe to put baby to sleep on the side or tummy?', a: 'No. Infants must be placed on their back for sleep. Correction happens during the day.' },
        { q: 'Is plagiocephaly always linked to torticollis?', a: 'Not always, but the connection is very common. We always check neck movement symmetry.' },
        { q: 'Are diagnostic tests needed?', a: 'In most cases clinical assessment is sufficient. If atypical signs are present, the doctor decides on further tests.' },
        { q: 'When should correction begin?', a: 'The earlier the better. The first months are the most important correction window.' },
        { q: 'Can massage alone solve the problem?', a: 'Usually not. The best results come from combining massage with physiotherapy and a home plan.' },
        { q: 'When is a helmet considered?', a: 'When asymmetry is more pronounced and progress after consistent correction is insufficient.' },
        { q: 'How long does correction take?', a: 'It depends on the case; first changes are often visible within a few weeks.' },
        { q: 'Should we wait until the child grows?', a: 'Waiting without a plan is not recommended. Early intervention produces better results.' },
      ],

      specialistsTitle: 'Our Specialists',
      specialistsSubtitle: 'Licensed specialists with proper qualifications and experience',
      specialists: [
        { name: 'Agnė Juodytė', role: 'Physiotherapist', roleDetail: 'pediatric physiotherapist, Vojta therapy practitioner', img: '/specialists/agne.jpg', desc: 'Experienced physiotherapist working with infants from their first days and children with various developmental, neurological or movement challenges.' },
        { name: 'Karolina Černych', role: 'Physiotherapist', roleDetail: 'pediatric and infant physiotherapist', img: '/specialists/karolina.jpg', desc: 'Physiotherapist working with infants and children. Applies DNS methodology principles, assesses motor development, tone and symmetry, and guides parents on home exercises.' },
        { name: 'Ramunė Nemeikaitė', role: 'Massage Therapist', roleDetail: 'therapeutic massage specialist, works exclusively with infants and children', img: '/specialists/ramune.jpg', desc: 'Certified pediatric massage specialist. Massage therapist at the Children\'s Hospital and Santaros Clinics. Specialises in therapeutic infant and child massage.' },
      ],

      relatedTitle: 'Related Conditions',
      related: [
        { href: '/kudikio-kreivakakliste', label: 'Torticollis' },
        { href: '/kudikiu-hipertonusas', label: 'Hypertonia' },
        { href: '/ka-gydome/kudikiu-hipotonusas', label: 'Hypotonia' },
        { href: '/motorines-raidos-velavimas', label: 'Motor Development Delays' },
      ],

      ctaTitle: 'Noticing head asymmetry?',
      ctaPhone: '+370 666 99676',
      ctaAddress: 'Aludarių g. 7-43, Vilnius',
      ctaRegister: 'Register for Visit',
      medNote: 'This information is for informational purposes and does not replace individual medical consultation. If the condition worsens or danger signs appear, contact a doctor without delay.',
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
        {/* Hero */}
        <section
          className="relative flex items-center bg-[#e8e6e3]"
          style={{ width: '100%', minHeight: '60vh', overflow: 'hidden' }}
        >
          <div className="absolute inset-0">
            <Image
              src="/services/infant-physiotherapy.jpg"
              alt="Kūdikių plagiocefalija"
              fill
              priority
              quality={95}
              sizes="100vw"
              style={{
                objectFit: 'cover',
                objectPosition: 'center 30%',
                filter: 'brightness(1.1) contrast(0.95) blur(8px)',
              }}
            />
            <div className="absolute inset-0 bg-white opacity-15 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          </div>

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  {txt.heroTitle}
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
                  {txt.heroSubtitle}
                </p>
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl px-5 py-4 max-w-2xl">
                  <p className="text-white/95 text-sm leading-relaxed">
                    {txt.heroNote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Answer */}
        <section className="py-12 bg-[#FFF8F3]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {txt.quickAnswerBody}
            </p>
            <ul className="space-y-3 mb-6">
              {txt.quickAnswerChecklist.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#fb7825] font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-[#fb7825]/10 border-l-4 border-[#fb7825] rounded-r-lg px-5 py-4">
              <p className="text-gray-800 font-medium">{txt.quickAnswerWarning}</p>
            </div>
          </div>
        </section>

        {/* Types */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              {txt.typesTitle}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {txt.types.map((type, idx) => (
                <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <div className="text-3xl mb-4">{type.emoji}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{type.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Age Signs - Orange */}
        <section className="py-16 bg-gradient-to-br from-[#fb7825] to-[#e66f1f]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              {txt.ageSignsTitle}
            </h2>
            <div className="space-y-6">
              {txt.ageGroups.map((group, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-[#fb7825] mb-4">{group.age}</h3>
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

        {/* Consequences */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {txt.consequencesTitle}
            </h2>
            <ul className="space-y-3 mb-8">
              {txt.consequences.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#fb7825] mt-1">•</span>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-blue-50 border-l-4 border-[#54B6FC] rounded-r-lg px-5 py-4">
              <p className="text-gray-800 leading-relaxed">{txt.consequencesNote}</p>
            </div>
          </div>
        </section>

        {/* Red Flags */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {txt.redFlagsTitle}
            </h2>
            <div className="space-y-3">
              {txt.redFlags.map((flag, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-red-50 border-l-4 border-red-400 rounded-r-lg px-5 py-3">
                  <span className="text-red-500 font-bold mt-0.5">!</span>
                  <span className="text-gray-800">{flag}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Evaluation Steps */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              {txt.evalTitle}
            </h2>
            <div className="space-y-6">
              {txt.evalSteps.map((step, idx) => (
                <div key={idx} className="flex gap-6 bg-white rounded-xl p-6 shadow-md border-l-4 border-[#54B6FC]">
                  <div className="w-10 h-10 rounded-full bg-[#54B6FC] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatments */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              {txt.treatmentsTitle}
            </h2>
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
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {txt.visitsTitle}
            </h2>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              {txt.visits.map((row, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-4 px-6 py-4 ${idx !== txt.visits.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <span className="font-bold text-[#54B6FC] w-32 flex-shrink-0">{row.label}</span>
                  <span className="text-gray-700">{row.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Home Do / Don't */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              {txt.homeTitle}
            </h2>
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
                <h3 className="text-xl font-bold text-red-600 mb-4">✗ {currentLang === 'lt' ? 'Nerekomenduojama' : 'Not recommended'}</h3>
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
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              {txt.faqTitle}
            </h2>
            <div className="space-y-4">
              {txt.faq.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialists */}
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
              {txt.specialists.map((spec) => (
                <div key={spec.name} className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative aspect-[3/4] bg-gradient-to-br from-[#54B6FC]/15 to-[#fb7825]/15 flex items-center justify-center overflow-hidden">
                    <Image
                      src={spec.img}
                      alt={spec.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      style={{ objectPosition: 'center 10%' }}
                      sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 90vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{spec.name}</h3>
                    <div className="text-sm font-semibold text-[#54B6FC] mb-4">{spec.roleDetail}</div>
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

        {/* Related Links */}
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

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              {txt.ctaTitle}
            </h2>
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
                <span>{txt.ctaPhone}</span>
              </a>
            </div>
            <p className="text-white/80 text-sm mt-6">{txt.ctaAddress}</p>
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
