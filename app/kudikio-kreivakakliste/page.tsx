'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import { translations, type Language } from '@/lib/i18n/translations';
import { Phone, ArrowRight, ChevronDown, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

export default function KudikioKreivakaklyste() {
  const [currentLang, setCurrentLang] = useState<Language>('lt');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const t = translations[currentLang];

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
      heroTitle: 'Kūdikio kreivakaklystė (tortikolis)',
      heroSubtitle: 'Požymiai, tipai ir ką daryti tėvams',
      quickTitle: 'Ar mano kūdikis turi kreivakaklystę?',
      quickSubtitle: 'Dažniausi požymiai, kuriuos pastebi tėvai:',
      quickList: [
        'Galvytė pastoviai pasukta ar pasvyrusi į vieną pusę',
        'Sunku arba nepatogu sukti galvytę į priešingą pusę',
        'Maitinimas geriau eina iš vienos krūties ar iš vienos pusės',
        'Kūdikis visada miega vienoje padėtyje',
        'Pastebima veido ar pakaušio asimetrija',
      ],
      quickWarning: 'Kreivakaklystė negyja savaime. Kuo ankstesnė intervencija, tuo trumpesnis gydymas ir geresni rezultatai.',
      typesTitle: 'Kreivakaklystės tipai',
      typesSubtitle: 'Svarbu suprasti, kuris tipas — nuo to priklauso gydymo taktika',
      types: [
        {
          emoji: '💪',
          name: 'Raumeninė tortikolis',
          desc: 'Dažniausias tipas. Gimdymo metu kreivakaklystės raumuo (m. sternocleidomastoideus) patiria spaudimą arba tempimą. Susiformuoja raumens sutankinimas arba trumpumas. Galvytė pakrypsta į pažeistą pusę, smakras — į priešingą.',
        },
        {
          emoji: '🔄',
          name: 'Pozicinė tortikolis',
          desc: 'Išsivysto pirmaisiais gyvenimo mėnesiais dėl ilgalaikio gulėjimo vienoje padėtyje. Raumenys nėra pažeisti, tačiau dėl įpročio kūdikis vengia judėti į vieną pusę. Dažnai derinama su pozicinės plagiocephalijos (galvos deformacijos) požymiais.',
        },
        {
          emoji: '🔍',
          name: 'Antrinė tortikolis',
          desc: 'Sukelta ne raumenų, o kitų veiksnių: kaulų anomalijų, reflukso, neurologinių sutrikimų ar infekcijų. Ši forma reikalauja gydytojo konsultacijos prieš pradedant kineziterapiją.',
        },
      ],
      ageTitle: 'Požymiai pagal amžių',
      ageSubtitle: 'Kas turėtų atkreipti tėvų dėmesį kiekviename etape',
      ages: [
        {
          age: '0–3 mėn.',
          color: 'from-blue-50 to-blue-100',
          border: 'border-[#54B6FC]',
          signs: [
            'Galvytė nuolat pasukta ar pasvyrusi į vieną pusę',
            'Kūdikis sunkiai arba nenori sukti galvos į kitą pusę',
            'Maitinimas krūtimi geriau eina iš vienos pusės',
            'Akys neseka žaislo simetriškai',
          ],
        },
        {
          age: '3–6 mėn.',
          color: 'from-orange-50 to-orange-100',
          border: 'border-[#fb7825]',
          signs: [
            'Vartydamasis labiau renkasi vieną kryptį',
            'Ant pilvo padėtas neatsitraukia tolygiai abiem rankomis',
            'Galvos pakaušis iš vienos pusės aplygėja',
            'Veido asimetrija tampa pastebimesnė',
          ],
        },
        {
          age: '6–12 mėn.',
          color: 'from-purple-50 to-purple-100',
          border: 'border-purple-400',
          signs: [
            'Sėdint galvytė ar pečiai pasvyrę į vieną pusę',
            'Ryški pakaušio ar veido asimetrija',
            'Vienašališka rankų ar kojų veikla',
            'Kūnas atrodo „susitraukęs" į vieną pusę',
          ],
        },
      ],
      consequencesTitle: 'Jei negydoma — galimos pasekmės',
      consequences: [
        'Plagiocephalija — galvos kaukolės asimetrija dėl vienašališko slėgio',
        'Veido asimetrija — akys, ausys, žandikaulis formuojasi netolygiai',
        'Kūno asimetrija — pečiai, liemuo, dubuo',
        'Stuburo funkcinis iškrypimas',
        'Vėlesni motorinės raidos sunkumai — ropojimas, sėdėjimas, vaikščiojimas',
      ],
      consequencesNote: 'Tyrimai rodo, kad kūdikiai, pradėję gydymą iki 3 mėnesių, pasveiksta vidutiniškai per 1–2 mėnesius. Pradėjus vėliau — gydymas trunka ilgiau ir rezultatai būna prastesni.',
      redFlagsTitle: 'Kada kreiptis nedelstinai',
      redFlags: [
        'Ryškus ir staigus galvos pasvirimas po kritimo ar traumos',
        'Tortikolis kartu su karščiavimu ar kaklo skausmu',
        'Kūdikis verkia, kai liečiate kaklą ar bandote pasukti galvą',
        'Tortikolis atsirado staigiai vyresniam kūdikiui (po 6 mėn.)',
        'Kartu yra akių judėjimo sutrikimų ar rijimo sunkumų',
      ],
      evalTitle: 'Kaip vertiname FitKid klinikoje',
      evalSteps: [
        {
          step: '01',
          title: 'Išsamus pirminis įvertinimas',
          desc: 'Matuojame galvos pasukimo amplitudę, vertiname raumenų tonusą ir ilgį, kūno simetriją, refleksus ir motorinės raidos etapus pagal amžių.',
        },
        {
          step: '02',
          title: 'Individualus gydymo planas',
          desc: 'Pagal tortikolis tipą ir sunkumą sudarome tikslią programą: metodų derinį, procedūrų skaičių, namų pratimų planą ir tarpinės kontrolės taškus.',
        },
        {
          step: '03',
          title: 'Tėvų mokymas',
          desc: 'Mokome tėvus, kaip teisingai nešioti kūdikį, pozicionuoti miegą, žaisti ir atlikti namų pratimus tarp vizitų — tai daugiausia lemia galutinį rezultatą.',
        },
      ],
      treatmentsTitle: 'Taikomos procedūros',
      treatments: [
        {
          emoji: '🤲',
          name: 'Kineziterapija',
          desc: 'Pagrindinis metodas. Pasyvus ir aktyvus trumpojo raumens tempimas, mobilizaciniai judesiai, simetriją atkuriantys pratimai. Kiekvienai procedūrai parenkama pagal kūdikio reakciją ir toleranciją.',
        },
        {
          emoji: '⚡',
          name: 'Vojta terapija',
          desc: 'Per refleksines padėtis aktyvuojami įgimti judesių modeliai. Ypač veiksminga raumeninės tortikolis atveju — padeda kūdikiui pačiam „sujungti" simetriškus judesius.',
        },
        {
          emoji: '🌀',
          name: 'DNS terapija',
          desc: 'Dinaminė neuroraumeninė stabilizacija atkuria taisyklingą kūno ašį ir centrinį stabilumą. Padeda išlyginti asimetriją ne tik kakle, bet ir viso kūno lygmeniu.',
        },
        {
          emoji: '👐',
          name: 'Gydomasis masažas',
          desc: 'Švelnus tikslingas trumpojo SCM raumens ir aplinkinių audinių masažas mažina raumenų įtampą, gerina kraujotaką ir paruošia raumenis tempimui.',
        },
        {
          emoji: '💧',
          name: 'Hidroterapija',
          desc: 'Šiltas vanduo sumažina gravitacijos poveikį ir raumenų apsaugines reakcijas. Kūdikiui vandenyje lengviau laisvai sukti galvytę ir judėti simetriškai.',
        },
      ],
      visitsTitle: 'Kiek procedūrų reikia?',
      visitsSubtitle: 'Orientaciniai skaičiai — tikslus planas sudaromas po įvertinimo',
      visits: [
        { type: 'Lengva forma (iki 3 mėn. amžiaus)', count: '6–10 procedūrų', color: 'bg-green-50 border-green-400' },
        { type: 'Vidutinė forma', count: '10–16 procedūrų', color: 'bg-yellow-50 border-yellow-400' },
        { type: 'Sunkesnė forma arba vėlai pradėtas gydymas', count: '16–24 procedūros', color: 'bg-orange-50 border-orange-400' },
        { type: 'Namų programa', count: 'Visada derinama — tėvai atlieka pratimai kasdien', color: 'bg-blue-50 border-[#54B6FC]' },
      ],
      tipsTitle: 'Ką galite daryti namuose',
      doTitle: '✅ Darykite',
      doList: [
        'Žaislus ir paveikslus dėkite iš „sunkiosios" pusės — kūdikis bus skatinamas sukti galvą',
        'Kalbinkite kūdikį iš priešingos pusės nei jis linkęs sukti galvą',
        'Miegui kaitaliokite, kuriuo galu kūdikis guli lovytėje',
        'Nešiodami ant rankų laikykite galvą atremtą taip, kad kūdikis žiūrėtų į jums „sunkiąją" pusę',
        'Kuo daugiau laiko ant pilvo — tai stiprina kaklą ir mažina asimetriją',
        'Prieš pratimus galvytę sušildykite šiltu kompresu 2–3 minutes',
      ],
      dontTitle: '❌ Nedarkite',
      dontList: [
        'Nesukite galvytės jėga — tai gali sukelti skausmą ir gynybinę įtampą',
        'Nepalikite kūdikio ilgai vienoje padėtyje — tiek ant nugaros, tiek sėdyniukėje',
        'Nepraleiskite procedūrų — gydymo nuoseklumas lemia rezultatą',
      ],
      faqTitle: 'Dažniausiai užduodami klausimai',
      faqs: [
        {
          q: 'Ar kreivakaklystė praeis savaime be gydymo?',
          a: 'Lengvos formos tortikolis kartais švelnėja, tačiau nepranyksta be tikslingos intervencijos. Nekoreguotas tortikolis dažnai lemia plagiocephaliją ir kūno asimetriją. Ankstyvoji kineziterapija ženkliai sutrumpina gydymą ir užtikrina taisyklingą raidą.',
        },
        {
          q: 'Kada geriausia pradėti gydymą?',
          a: 'Kuo anksčiau — tuo geriau. Idealu pradėti iki 3 mėnesių: raumenys dar lankstūs, greičiau reaguoja į terapiją. Bet gydymas veiksmingas ir vyresnio amžiaus kūdikiams — net 6–12 mėn. amžiaus.',
        },
        {
          q: 'Ar užtenka tik namų pratimų?',
          a: 'Namų pratimai yra labai svarbūs, bet nepakankamas gydymas savaime. Klinikinė terapija (ypač Vojta ar tikslingas tempimas) pasiekia tai, ko tėvai namuose negali atlikti. Geriausias rezultatas — profesionalios procedūros + nuosekli namų programa.',
        },
        {
          q: 'Kiek laiko trunka viena procedūra?',
          a: 'Paprastai 30–45 minutės, įskaitant tėvų mokymą. Pirmojo vizito įvertinimas gali trukti iki 60 minučių.',
        },
        {
          q: 'Ar procedūros skausmingos kūdikiui?',
          a: 'Teisingai atliekamos procedūros neturėtų sukelti skausmo. Kūdikis gali reaguoti verksmu iš streso ar nepatogios pozicijos, bet ne iš skausmo. Mūsų specialistai dirba lėtai ir jautriai, reaguodami į kūdikio signalus.',
        },
        {
          q: 'Ar reikia gydytojo siuntimo?',
          a: 'Siuntimas nėra būtinas privačiai konsultacijai. Tačiau jei įtariama antrinė tortikolis (trauma, refluksas, neurologija) — gydytojo konsultacija prieš kineziterapiją yra rekomenduojama.',
        },
        {
          q: 'Kuo raumeninė tortikolis skiriasi nuo pozicinės?',
          a: 'Raumeninė tortikolis turi struktūrinį raumens pažeidimą (sutankinimas, trumpumas) — dažnai nuo gimimo. Pozicinė išsivysto palaipsniui dėl padėties įpročio. Abi gydomos panašiai, tačiau raumeninei dažnai reikia intensyvesnio tempimo.',
        },
        {
          q: 'Ar galima hidroterapija, jei kūdikis turi tortikolis?',
          a: 'Taip, hidroterapija yra puiki papildoma priemonė. Vanduo sumažina raumenų gynybinę įtampą ir leidžia kūdikiui laisviau judėti. Derinami su kineziterapija, rezultatai būna greitesni.',
        },
        {
          q: 'Ar tortikolis turės įtakos tolimesnei vaiko raidai?',
          a: 'Laiku gydytas tortikolis nepalieką ilgalaikių pasekmių. Negydytas ar vėlai pradėtas gydyti — gali sukelti laikyseną, koordinacijos ir judėjimo problemas. Todėl ankstyvas kreipimasis yra labai svarbus.',
        },
        {
          q: 'Kaip registruotis konsultacijai?',
          a: 'Galite skambinti +370 666 99676, rašyti per kontaktų formą arba registruotis internetu paspaudę mygtuką žemiau. Pirmas vizitas — išsamus įvertinimas ir plano sudarymas.',
        },
      ],
      specialistsTitle: 'Mūsų specialistai',
      specialistsSubtitle: 'Licencijuoti specialistai su tinkamomis kvalifikacijomis ir patirtimi',
      reviewsTitle: 'Tėvų atsiliepimai',
      reviews: [
        {
          name: 'Eglė M.',
          text: 'Pastebėjome tortikolis kai kūdikiui buvo 6 savaičios. Po 8 procedūrų su Agne galvytė juda visiškai laisvai. Mokė ir namų pratimų, kurie tikrai padėjo.',
          stars: 5,
        },
        {
          name: 'Tomas K.',
          text: 'Ksenija nuostabus specialistas. Aiškiai paaiškino, kas vyksta, rodė kaip laikyti ir žaisti su kūdikiu namuose. Tortikolis išnyko per 2 mėnesius.',
          stars: 5,
        },
        {
          name: 'Rūta B.',
          text: 'Labai rekomenduoju FitKid. Ramunė atliko masažo procedūras, kurios puikiai derėjo su kineziterapija. Klinikos atmosfera labai šilta ir kūdikiui patiko.',
          stars: 5,
        },
      ],
      relatedTitle: 'Susijusios būklės',
      relatedLinks: [
        { title: 'Hipertonusas', desc: 'Per didelis raumenų tonusas kūdikiams', href: '/hipertonusas' },
        { title: 'Hipotonusas', desc: 'Per mažas raumenų tonusas kūdikiams', href: '/hipotonusas' },
        { title: 'Kūno asimetrija', desc: 'Vienašališki judesiai ir laikysena', href: '/kunas-asimetrija' },
        { title: 'Motorinės raidos vėlavimas', desc: 'Vėluojantys judėjimo etapai', href: '/motorines-raidos-velavimas' },
      ],
      finalTitle: 'Registracija konsultacijai',
      finalDesc: 'Pastebėjote kreivakaklystės požymių? Kuo anksčiau kreipsitės, tuo trumpesnis ir efektyvesnis bus gydymas. Pirmame vizite atliekame išsamų įvertinimą ir sudarome planą.',
      ctaRegister: 'Registruotis vizitui',
      ctaCall: '+370 666 99676',
    },
    en: {
      heroTitle: 'Infant Torticollis (Wryneck)',
      heroSubtitle: 'Signs, types and what parents can do',
      quickTitle: 'Does my infant have torticollis?',
      quickSubtitle: 'Common signs noticed by parents:',
      quickList: [
        'Head consistently tilted or turned to one side',
        'Difficulty or discomfort turning head to the opposite side',
        'Breastfeeding works better from one side',
        'Baby always sleeps in the same position',
        'Visible facial or head asymmetry',
      ],
      quickWarning: 'Torticollis does not resolve on its own. Earlier intervention means shorter treatment and better results.',
      typesTitle: 'Types of Torticollis',
      typesSubtitle: 'Understanding the type determines treatment approach',
      types: [
        {
          emoji: '💪',
          name: 'Muscular Torticollis',
          desc: 'Most common type. During birth, the sternocleidomastoid muscle (SCM) is compressed or stretched. A muscle thickening or shortening forms. Head tilts to the affected side, chin turns to the opposite side.',
        },
        {
          emoji: '🔄',
          name: 'Postural Torticollis',
          desc: 'Develops in the first months of life due to prolonged lying in one position. Muscles are not damaged, but the baby avoids moving to one side out of habit. Often combined with signs of positional plagiocephaly.',
        },
        {
          emoji: '🔍',
          name: 'Secondary Torticollis',
          desc: 'Caused not by muscles but other factors: bone anomalies, reflux, neurological disorders or infections. This form requires physician consultation before physiotherapy.',
        },
      ],
      ageTitle: 'Signs by Age',
      ageSubtitle: 'What parents should watch for at each stage',
      ages: [
        {
          age: '0–3 months',
          color: 'from-blue-50 to-blue-100',
          border: 'border-[#54B6FC]',
          signs: [
            'Head constantly turned or tilted to one side',
            'Baby resists or struggles to turn head to the other side',
            'Breastfeeding more comfortable on one side',
            'Eyes do not track a toy symmetrically',
          ],
        },
        {
          age: '3–6 months',
          color: 'from-orange-50 to-orange-100',
          border: 'border-[#fb7825]',
          signs: [
            'Prefers rolling to one direction',
            'On tummy, does not push up evenly with both arms',
            'One side of the back of the head is flattening',
            'Facial asymmetry becoming more noticeable',
          ],
        },
        {
          age: '6–12 months',
          color: 'from-purple-50 to-purple-100',
          border: 'border-purple-400',
          signs: [
            'Head or shoulders tilted to one side when sitting',
            'Marked asymmetry of the head or face',
            'One-sided arm or leg activity',
            'Body appears to "lean" to one side',
          ],
        },
      ],
      consequencesTitle: 'If Untreated — Possible Consequences',
      consequences: [
        'Plagiocephaly — skull asymmetry from one-sided pressure',
        'Facial asymmetry — eyes, ears, jaw develop unevenly',
        'Body asymmetry — shoulders, trunk, pelvis',
        'Functional spinal curvature',
        'Later motor development difficulties — crawling, sitting, walking',
      ],
      consequencesNote: 'Research shows infants who begin treatment before 3 months recover on average within 1–2 months. Starting later leads to longer treatment and worse outcomes.',
      redFlagsTitle: 'When to Seek Urgent Help',
      redFlags: [
        'Sudden, marked head tilt following a fall or trauma',
        'Torticollis combined with fever or neck pain',
        'Baby cries when you touch the neck or try to turn the head',
        'Torticollis appeared suddenly in an older infant (after 6 months)',
        'Combined with eye movement disorders or swallowing difficulties',
      ],
      evalTitle: 'How We Assess at FitKid',
      evalSteps: [
        {
          step: '01',
          title: 'Comprehensive Initial Assessment',
          desc: 'We measure head rotation range of motion, assess muscle tone and length, body symmetry, reflexes and motor development stages for age.',
        },
        {
          step: '02',
          title: 'Individual Treatment Plan',
          desc: 'Based on torticollis type and severity, we create a precise program: method combination, number of sessions, home exercise plan and progress checkpoints.',
        },
        {
          step: '03',
          title: 'Parent Education',
          desc: 'We teach parents how to correctly carry the baby, position for sleep, play and perform home exercises between visits — this largely determines the final outcome.',
        },
      ],
      treatmentsTitle: 'Treatment Methods',
      treatments: [
        {
          emoji: '🤲',
          name: 'Physiotherapy',
          desc: 'The primary method. Passive and active stretching of the shortened muscle, mobilization movements, symmetry-restoring exercises. Each session adapted to the infant\'s response and tolerance.',
        },
        {
          emoji: '⚡',
          name: 'Vojta Therapy',
          desc: 'Innate movement patterns are activated through reflex positions. Especially effective for muscular torticollis — helps the baby self-activate symmetric movements.',
        },
        {
          emoji: '🌀',
          name: 'DNS Therapy',
          desc: 'Dynamic Neuromuscular Stabilization restores correct body axis and central stability. Addresses asymmetry not only in the neck but across the entire body.',
        },
        {
          emoji: '👐',
          name: 'Therapeutic Massage',
          desc: 'Gentle targeted massage of the shortened SCM muscle and surrounding tissues reduces muscle tension, improves circulation, and prepares muscles for stretching.',
        },
        {
          emoji: '💧',
          name: 'Hydrotherapy',
          desc: 'Warm water reduces the effect of gravity and protective muscle reactions. Babies move more freely in water, making symmetric head rotation easier.',
        },
      ],
      visitsTitle: 'How Many Sessions Are Needed?',
      visitsSubtitle: 'Approximate numbers — precise plan is created after assessment',
      visits: [
        { type: 'Mild form (under 3 months)', count: '6–10 sessions', color: 'bg-green-50 border-green-400' },
        { type: 'Moderate form', count: '10–16 sessions', color: 'bg-yellow-50 border-yellow-400' },
        { type: 'Severe form or late start', count: '16–24 sessions', color: 'bg-orange-50 border-orange-400' },
        { type: 'Home program', count: 'Always combined — parents do exercises daily', color: 'bg-blue-50 border-[#54B6FC]' },
      ],
      tipsTitle: 'What You Can Do at Home',
      doTitle: '✅ Do',
      doList: [
        'Place toys and pictures on the "difficult" side — this encourages head turning',
        'Talk to your baby from the opposite side to where they tend to turn',
        'Alternate which end of the cot the baby lies at for sleep',
        'When carrying, hold the head so baby looks toward their "difficult" side',
        'Maximize tummy time — strengthens neck and reduces asymmetry',
        'Before exercises, warm the neck with a warm compress for 2–3 minutes',
      ],
      dontTitle: '❌ Don\'t',
      dontList: [
        'Don\'t turn the head by force — this causes pain and defensive tension',
        'Don\'t leave the baby in one position for long — whether on back or in a bouncer',
        'Don\'t skip sessions — consistency of treatment determines the outcome',
      ],
      faqTitle: 'Frequently Asked Questions',
      faqs: [
        {
          q: 'Will torticollis go away on its own without treatment?',
          a: 'Mild forms sometimes improve but do not resolve without targeted intervention. Uncorrected torticollis often leads to plagiocephaly and body asymmetry. Early physiotherapy significantly shortens treatment and ensures correct development.',
        },
        {
          q: 'When is the best time to start treatment?',
          a: 'The earlier the better. Ideally before 3 months: muscles are still flexible and respond faster to therapy. But treatment is effective in older infants too — even at 6–12 months of age.',
        },
        {
          q: 'Are home exercises alone enough?',
          a: 'Home exercises are very important but insufficient as standalone treatment. Clinical therapy (especially Vojta or targeted stretching) achieves what parents cannot do at home. Best results come from professional sessions + consistent home program.',
        },
        {
          q: 'How long does one session last?',
          a: 'Usually 30–45 minutes including parent education. The first assessment visit may take up to 60 minutes.',
        },
        {
          q: 'Are sessions painful for the baby?',
          a: 'Correctly performed sessions should not cause pain. The baby may cry from stress or an uncomfortable position, but not from pain. Our specialists work slowly and sensitively, responding to the baby\'s signals.',
        },
        {
          q: 'Is a doctor\'s referral required?',
          a: 'A referral is not required for a private consultation. However, if secondary torticollis is suspected (trauma, reflux, neurology) — a doctor\'s consultation before physiotherapy is recommended.',
        },
        {
          q: 'How does muscular torticollis differ from postural?',
          a: 'Muscular torticollis has structural muscle damage (thickening, shortening) — often present from birth. Postural develops gradually due to positional habit. Both are treated similarly, but muscular often requires more intensive stretching.',
        },
        {
          q: 'Can hydrotherapy be used if the baby has torticollis?',
          a: 'Yes, hydrotherapy is an excellent supplementary method. Water reduces protective muscle tension and allows the baby to move more freely. Combined with physiotherapy, results are faster.',
        },
        {
          q: 'Will torticollis affect the child\'s later development?',
          a: 'Torticollis treated in time leaves no long-term consequences. Untreated or late-treated — it can cause posture, coordination and movement problems. That is why early intervention is so important.',
        },
        {
          q: 'How do I register for a consultation?',
          a: 'You can call +370 666 99676, write via the contact form or register online by clicking the button below. The first visit includes a comprehensive assessment and plan creation.',
        },
      ],
      specialistsTitle: 'Our Specialists',
      specialistsSubtitle: 'Licensed specialists with proper qualifications and experience',
      reviewsTitle: 'Parent Reviews',
      reviews: [
        {
          name: 'Eglė M.',
          text: 'We noticed torticollis when the baby was 6 weeks old. After 8 sessions with Agnė the head moves completely freely. She also taught us home exercises that really helped.',
          stars: 5,
        },
        {
          name: 'Tomas K.',
          text: 'Ksenija is a wonderful specialist. Clearly explained what is happening and showed how to hold and play with the baby at home. Torticollis resolved within 2 months.',
          stars: 5,
        },
        {
          name: 'Rūta B.',
          text: 'Highly recommend FitKid. Ramunė performed massage sessions that combined excellently with physiotherapy. The clinic atmosphere is very warm and the baby enjoyed it.',
          stars: 5,
        },
      ],
      relatedTitle: 'Related Conditions',
      relatedLinks: [
        { title: 'Hypertonus', desc: 'Elevated muscle tone in infants', href: '/hipertonusas' },
        { title: 'Hypotonus', desc: 'Low muscle tone in infants', href: '/hipotonusas' },
        { title: 'Body Asymmetry', desc: 'One-sided movement and posture', href: '/kunas-asimetrija' },
        { title: 'Motor Development Delay', desc: 'Delayed movement milestones', href: '/motorines-raidos-velavimas' },
      ],
      finalTitle: 'Register for a Consultation',
      finalDesc: 'Noticed signs of torticollis? The sooner you seek help, the shorter and more effective the treatment. The first visit includes a comprehensive assessment and plan.',
      ctaRegister: 'Register for Visit',
      ctaCall: '+370 666 99676',
    },
  };

  const txt = pageText[currentLang] ?? pageText.lt;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Kūdikio kreivakaklystė (tortikolis) — FitKid',
    description: 'Kūdikio kreivakaklystės (tortikolis) požymiai, tipai, pasekmės ir kineziterapinis gydymas FitKid klinikoje Vilniuje.',
    url: 'https://fitkid.lt/kudikio-kreivakakliste',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalCondition', name: 'Torticollis', alternateName: 'Kreivakaklystė' },
    provider: {
      '@type': 'MedicalClinic',
      name: 'FitKid',
      address: { '@type': 'PostalAddress', streetAddress: 'Ukmergės g. 224-4', addressLocality: 'Vilnius', addressCountry: 'LT' },
      telephone: '+37066699676',
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Header translations={t} currentLang={currentLang} onLanguageChange={handleLanguageChange} />

      <main className="pt-20">
        {/* 1. Hero */}
        <section
          className="relative flex items-center bg-[#e8e6e3]"
          style={{ width: '100%', minHeight: '60vh', overflow: 'hidden' }}
        >
          <div className="absolute inset-0">
            <Image
              src="/services/infant-physiotherapy.jpg"
              alt="Kūdikio kreivakaklystė tortikolis"
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
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight">
                  {txt.heroTitle}
                </h1>
                <p className="text-lg md:text-xl text-white/90 font-medium">
                  {txt.heroSubtitle}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Quick answer box */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-50 border border-[#54B6FC] rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{txt.quickTitle}</h2>
              <p className="text-gray-600 mb-6">{txt.quickSubtitle}</p>
              <ul className="space-y-3 mb-6">
                {txt.quickList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#54B6FC] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-start gap-3 bg-orange-50 border border-orange-300 rounded-xl p-4">
                <AlertTriangle className="w-5 h-5 text-[#fb7825] flex-shrink-0 mt-0.5" />
                <p className="text-gray-800 font-medium">{txt.quickWarning}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Types */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{txt.typesTitle}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{txt.typesSubtitle}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {txt.types.map((type, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{type.emoji}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{type.name}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Age signs */}
        <section className="py-16 bg-gradient-to-br from-[#fb7825] to-[#e66f1f]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{txt.ageTitle}</h2>
              <p className="text-white/90 text-lg">{txt.ageSubtitle}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {txt.ages.map((group, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className={`inline-block bg-gradient-to-br ${group.color} border-2 ${group.border} rounded-full px-4 py-1 text-sm font-bold text-gray-800 mb-4`}>
                    {group.age}
                  </div>
                  <ul className="space-y-3">
                    {group.signs.map((sign, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2">
                        <span className="text-[#fb7825] font-bold mt-0.5">•</span>
                        <span className="text-gray-700 text-sm leading-relaxed">{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Consequences */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{txt.consequencesTitle}</h2>
            <ul className="space-y-4 mb-8">
              {txt.consequences.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
              <p className="text-gray-800 leading-relaxed font-medium">{txt.consequencesNote}</p>
            </div>
          </div>
        </section>

        {/* 6. Red flags */}
        <section className="py-16 bg-red-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{txt.redFlagsTitle}</h2>
            </div>
            <div className="space-y-3">
              {txt.redFlags.map((flag, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white border border-red-200 rounded-xl p-4">
                  <span className="text-red-500 font-bold text-lg flex-shrink-0">!</span>
                  <span className="text-gray-800 leading-relaxed">{flag}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. FitKid evaluation */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">{txt.evalTitle}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {txt.evalSteps.map((step, idx) => (
                <div key={idx} className="relative bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <div className="text-5xl font-black text-[#54B6FC]/20 mb-2 leading-none">{step.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Treatments */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">{txt.treatmentsTitle}</h2>
            <div className="space-y-6">
              {txt.treatments.map((tr, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#54B6FC] flex gap-5 items-start">
                  <div className="text-3xl flex-shrink-0">{tr.emoji}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{tr.name}</h3>
                    <p className="text-gray-700 leading-relaxed">{tr.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Visit count */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">{txt.visitsTitle}</h2>
            <p className="text-gray-600 text-center mb-10">{txt.visitsSubtitle}</p>
            <div className="space-y-4">
              {txt.visits.map((row, idx) => (
                <div key={idx} className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-l-4 rounded-r-xl px-6 py-4 ${row.color}`}>
                  <span className="text-gray-800 font-medium">{row.type}</span>
                  <span className="text-gray-900 font-bold whitespace-nowrap">{row.count}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Home tips */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">{txt.tipsTitle}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-5">{txt.doTitle}</h3>
                <ul className="space-y-3">
                  {txt.doList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                <h3 className="text-xl font-bold text-red-800 mb-5">{txt.dontTitle}</h3>
                <ul className="space-y-3">
                  {txt.dontList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 11. FAQ accordion */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">{txt.faqTitle}</h2>
            <div className="space-y-3">
              {txt.faqs.map((faq, idx) => (
                <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#54B6FC] flex-shrink-0 transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-5 bg-blue-50 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed pt-4">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12. Team */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{txt.specialistsTitle}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{txt.specialistsSubtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative aspect-[3/4] bg-gradient-to-br from-[#54B6FC]/15 to-[#fb7825]/15 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/specialists/agne.png"
                    alt="Agnė Juodytė"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{ objectPosition: 'center 10%' }}
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 90vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Agnė Juodytė</h3>
                  <div className="text-sm font-semibold text-[#54B6FC] mb-4">Kineziterapeutė</div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Patyrusi kineziterapeutė, dirbanti su kūdikiais nuo pirmųjų dienų ir vaikais, turinčiais įvairių raidos, neurologinių ar judėjimo iššūkių.
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#54B6FC]/10 to-[#fb7825]/10 rounded-full blur-2xl" />
              </div>

              <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative aspect-[3/4] bg-gradient-to-br from-[#54B6FC]/15 to-[#fb7825]/15 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/specialists/ksenija.png"
                    alt="Ksenija Persijanova"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{ objectPosition: 'center 10%' }}
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 90vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Ksenija Persijanova</h3>
                  <div className="text-sm font-semibold text-[#54B6FC] mb-4">Kineziterapeutė</div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Kineziterapeutė su praktine patirtimi kūdikių kineziterapijoje ir paliatyvioje pediatrijoje. Specializuojasi kūdikių hidroterapijos procedūrose ir darbe su vaikais.
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#54B6FC]/10 to-[#fb7825]/10 rounded-full blur-2xl" />
              </div>

              <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative aspect-[3/4] bg-gradient-to-br from-[#54B6FC]/15 to-[#fb7825]/15 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/specialists/ramune.png"
                    alt="Ramunė Nemeikaitė"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{ objectPosition: 'center 10%' }}
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 90vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Ramunė Nemeikaitė</h3>
                  <div className="text-sm font-semibold text-[#54B6FC] mb-4">Masažo terapeutė</div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Sertifikuota vaikų masažo specialistė. Masažo terapeutė Vaikų ligoninėje ir Santaros klinikose. Specializuojasi gydomuosiuose kūdikių ir vaikų masažuose.
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#54B6FC]/10 to-[#fb7825]/10 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* 13. Reviews placeholder */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">{txt.reviewsTitle}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {txt.reviews.map((review, idx) => (
                <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: review.stars }).map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm mb-4 italic">&ldquo;{review.text}&rdquo;</p>
                  <p className="text-gray-900 font-semibold text-sm">{review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 14. Related links */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">{txt.relatedTitle}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {txt.relatedLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="group bg-white rounded-xl p-5 border border-gray-200 hover:border-[#54B6FC] hover:shadow-md transition-all"
                >
                  <h3 className="font-bold text-gray-900 group-hover:text-[#54B6FC] transition-colors mb-1">{link.title}</h3>
                  <p className="text-sm text-gray-500">{link.desc}</p>
                  <ArrowRight className="w-4 h-4 text-[#54B6FC] mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 15. CTA banner */}
        <section className="py-20 bg-gradient-to-br from-[#54B6FC] to-[#4a9fe0]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">{txt.finalTitle}</h2>
            <p className="text-lg text-white/95 leading-relaxed mb-10 max-w-2xl mx-auto">{txt.finalDesc}</p>
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

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </main>

      <Footer translations={t} />
      <FloatingActionButtons currentLang={currentLang} />
    </div>
  );
}
