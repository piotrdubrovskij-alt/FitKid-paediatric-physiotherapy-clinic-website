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

export default function HipotonusasPage() {
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
    lang === 'lt' ? url.searchParams.delete('lang') : url.searchParams.set('lang', lang);
    window.history.pushState({}, '', url.toString());
  };

  const pageText = {
    lt: {
      heroTitle: 'Sumažėjęs raumenų tonusas (hipotonusas): požymiai ir ką daryti tėvams',
      heroSubtitle: 'Kaip atpažinti, kada kreiptis ir kaip padeda kineziterapija',
      heroNote: 'Ankstyvas įvertinimas dažniausiai leidžia koreguoti situaciją švelniai ir efektyviai. FitKid klinikoje Vilniuje – individualus planas.',

      intro1: 'Kūdikių hipotonusas (sumažėjęs raumenų tonusas) yra dažna priežastis, kodėl tėvai kreipiasi į vaikų kineziterapeutą. Dažniausiai tėvai pastebi, kad kūdikis atrodo „glebus“, vangiau juda, sunkiau išlaiko galvytę, greičiau pavargsta gulėdamas ant pilvo ar atliekant naujus judesius.',
      intro2: 'Dalis kūdikių vystosi individualiu tempu, todėl vienas požymis savaime dar nereiškia didelės problemos. Tačiau jei požymiai kartojasi, trukdo kasdieniams veiksmams arba matomas motorinės raidos sulėtėjimas, verta nelaukti. Ankstyvas įvertinimas dažniausiai leidžia koreguoti situaciją švelniai ir efektyviai.',
      intro3: 'Šiame puslapyje aiškiai paaiškiname: kaip atpažinti hipotonusą namuose; kada reikia planinės, o kada skubios konsultacijos; kaip FitKid klinikoje Vilniuje vertiname kūdikio būklę; kokie metodai padeda stiprinti judesio kokybę ir raidos eigą.',

      quickTitle: 'Trumpas atsakymas tėvams',
      quickBody: 'Hipotonusas reiškia, kad raumenų įtampa ramybės būsenoje yra mažesnė nei tikimasi pagal amžių. Dėl to kūdikio kūnui sunkiau išlaikyti stabilumą, todėl jis gali atrodyti „minkštas“, greičiau pavargti, lėčiau pereiti į sudėtingesnius judesius.',
      quickNote: 'Hipotonusas ne visada reiškia neurologinę ligą. Dažnai tai funkcinė tonuso reguliacijos ir stabilumo problema, kurią galima koreguoti. Esmė ne „pritempti“ raumenis jėga, o sukurti geresnį nervų-raumenų valdymą: kūno ašies kontrolę, simetriją, judesių kokybę ir ištvermę.',

      whatIsTitle: 'Kas yra raumenų tonusas ir kada jis laikomas sumažėjusiu',
      whatIsIntro: 'Raumenų tonusas yra bazinė raumenų įtampa, reikalinga laikysenai, pusiausvyrai ir judesio pradžiai. Normalus tonusas leidžia kūdikiui:',
      whatIsList: ['išlaikyti galvytę', 'stabilizuoti liemenį', 'pereiti tarp padėčių', 'mokytis naujų judesių nuosekliai'],
      whatIsCompensate: 'Kai tonusas sumažėjęs, kūdikis dažnai kompensuoja:',
      whatIsCompensateList: ['remiasi „pakabintu“ kūnu vietoj aktyvios atramos', 'vengia padėčių, kur reikia daugiau stabilumo', 'lėčiau įjungia giliuosius stabilizuojančius raumenis', 'renkasi lengvesnius, bet mažiau kokybiškus judesių modelius'],
      whatIsAssess: 'Vertinant hipotonusą svarbu ne vien „minkštumo“ pojūtis, o funkcija: kaip kūdikis laiko galvą; kaip pereina tarp padėčių; ar judesiai simetriški; ar progresuoja pagal amžių.',

      ageSignsTitle: 'Hipotonuso požymiai pagal amžių',
      ageGroups: [
        {
          age: '0–3 mėn.',
          note: 'Ankstyvame amžiuje tonuso skirtumai gali būti subtilūs, todėl svarbi visuma, o ne vienas simptomas.',
          signs: ['paėmus ant rankų kūdikis atrodo „išslystantis“, mažiau „susirinkęs“ į kūno centrą', 'rankytės ir kojytės dažniau „krenta“ į šonus, mažesnė aktyvi atrama', 'gulint ant pilvo trumpiau išlaikoma galva, greitesnis nuovargis', 'silpnesnė liemens kontrolė keičiant padėtis', 'vangiau reaguojama judesiu į aplinkos stimulus'],
        },
        {
          age: '3–6 mėn.',
          note: 'Šiuo laikotarpiu turėtų ryškėti aktyvesnė kūno kontrolė ir judesių įvairovė.',
          signs: ['išlieka galvos kontrolės sunkumai', 'lėtesnis vartymosi startas arba neefektyvus vartymosi modelis', 'sunkiau išlaikoma atrama ant dilbių ar plaštakų gulint ant pilvo', 'mažesnė aktyvi daiktų siekimo ir perkėlimo kontrolė', 'greitas nuovargis atliekant amžiui būdingas užduotis'],
        },
        {
          age: '6–12 mėn.',
          note: 'Jei tonuso reguliacija negerėja, funkcija pradeda ryškiau atsilikti.',
          signs: ['nestabilus ar vėluojantis savarankiškas sėdėjimas', 'pereinamųjų judesių stoka (sėdėjimas, ropojimas, stojimasis)', 'ropojimo praleidimas arba labai trumpas ropojimo etapas', 'sunkesnis balansavimas ir mažesnė kūno kontrolė keičiant pozas', 'ryškus nuovargis aktyvumo metu, didesnis dirglumas vakare'],
        },
      ],

      whyNotIgnoreTitle: 'Kodėl hipotonuso nereikėtų ignoruoti',
      whyNotIgnoreIntro: 'Hipotonusas dažnai atrodo „švelnesnė“ problema nei hipertonusas, nes nėra ryškios įtampos ar standumo. Praktikoje ilgiau nekoreguotas sumažėjęs tonusas gali sukelti ne mažiau reikšmingų pasekmių.',
      whyNotIgnoreList: ['motorinės raidos vėlavimas', 'neoptimalūs judesių modeliai', 'kompensacinė laikysena ir liemens kontrolės stoka', 'prastesnė koordinacija ir pusiausvyra', 'didesnis nuovargis fizinio aktyvumo metu vėlesniame amžiuje'],
      whyNotIgnoreNote: 'Svarbu: ankstyva kineziterapija padeda ne tik „pasivyti“ etapą, bet ir sukurti kokybišką raidos pagrindą ateičiai.',

      causesTitle: 'Kodėl atsiranda hipotonusas',
      causes: ['nervų sistemos brandos ypatumai', 'nėštumo ir gimdymo eiga', 'ankstyvos adaptacijos iššūkiai', 'sensorinės ir motorinės reguliacijos sunkumai', 'retesniais atvejais neurologinės ar genetinės būklės'],
      causesNote: 'Klinikinė taisyklė: net kai hipotonusas yra funkcinis, jis vis tiek turi būti valdomas planingai, nes „palaukime, gal praeis“ dažnai reiškia prarastą laiką motorinei raidai.',

      redFlagsTitle: 'Kada būtina kreiptis skubiai',
      redFlags: ['staigus įgūdžių praradimas (pvz., nustoja laikyti galvą ar atlikti anksčiau buvusį judesį)', 'ryškūs maitinimosi, rijimo ar kvėpavimo sunkumai', 'labai sumažėjęs aktyvumas ir reaktyvumas', 'ryškus kūno silpnumas, kai kūdikis praktiškai neįsitraukia į judesį', 'neurologiniai simptomai (traukuliai, neįprasti epizodai su reakcijos pokyčiu)'],
      redFlagsNote: 'Jei skubių požymių nėra, bet matote kartojamą raidos lėtėjimą, reikalinga planinė pediatro ar vaikų neurologo konsultacija ir kineziterapinis įvertinimas.',

      evalTitle: 'Kaip vyksta įvertinimas FitKid klinikoje',
      evalSteps: [
        { num: '1', title: 'Tėvų pokalbis', items: ['kokie simptomai matomi namuose', 'kaip kūdikis miega, maitinasi, reaguoja į padėties keitimą', 'kasdienio aktyvumo toleranciją', 'gimdymo ir pirmų mėnesių istoriją'] },
        { num: '2', title: 'Funkcinis įvertinimas', items: ['tonuso pasiskirstymą skirtingose padėtyse', 'galvos, liemens ir dubens kontrolę', 'judesių kokybę ir simetriją', 'perėjimus tarp padėčių', 'amžiui būdingų motorinių etapų eigą'] },
        { num: '3', title: 'Individualus planas', items: ['aiškų paaiškinimą, kas šiuo metu riboja progresą', 'etapais sudėliotą terapijos planą', 'namų užduotis su praktiniais veiksmais', 'orientacinį vizitų dažnį ir vertinimo taškus'] },
      ],

      treatmentsTitle: 'Kaip padeda kineziterapija ir masažas',
      treatmentsIntro: 'Hipotonuso korekcijoje tikslas yra ne „nuvarginti“ kūdikį, o sukurti kokybišką aktyvaciją: gerinti kūno ašies kontrolę; stiprinti gilią stabilizaciją; didinti judesio ištvermę; formuoti taisyklingus perėjimus tarp padėčių.',
      treatments: [
        { emoji: '🤲', name: 'Individuali kūdikių kineziterapija', desc: 'Kiekviena sesija parenkama pagal amžių ir raidos etapą, kūdikio ištvermę, dominuojančias kompensacijas ir šeimos galimybes tęsti planą namuose. Tikslas: mažiau „pasyvaus gulėjimo“, daugiau kokybiško aktyvaus judesio su gera atrama.' },
        { emoji: '🌀', name: 'DNS principai', desc: 'DNS (dinaminė neuroraumeninė stabilizacija) taikoma siekiant aktyvuoti giliuosius stabilizuojančius raumenis, gerinti diafragmos-liemens-dubens koordinaciją ir formuoti stabilią bazę judesiui. Hipotonuso atveju DNS padeda kurti „vidinę atramą“.', },
        { emoji: '⚡', name: 'Vojta terapija', desc: 'Vojta metodas naudojamas, kai reikia aktyvinti įgimtus judesių modelius, pagerinti viso kūno įsitraukimą ir pasiekti efektyvesnį nervų-raumenų atsaką. Tai ypač aktualu, kai kūdikis pats dar negali kokybiškai inicijuoti tam tikrų judesių.' },
        { emoji: '👐', name: 'Gydomasis masažas kūdikiams', desc: 'Hipotonuso atveju masažas naudojamas kaip dalis plano: sensorinei ir proprioceptinei stimuliacijai, kraujotakai ir audinių paruošimui aktyvesniam darbui, kūno „pažadinimui“ prieš pratimus ir bendram komfortui. Masažas nepakeičia kineziterapijos, bet gali reikšmingai pagerinti toleranciją.' },
        { emoji: '💧', name: 'Hidroterapija (kūdikių plukdymas)', desc: 'Vandens aplinka padeda saugiau aktyvuoti raumenis be per didelės apkrovos, didinti judesio amplitudę, skatinti simetriškus judesius ir gerinti ištvermę bei kūno kontrolės pojūtį. Hipotonuso atveju hidroterapija dažnai labai naudinga kaip papildoma priemonė.' },
      ],

      visitsTitle: 'Kiek vizitų dažniausiai prireikia',
      visitsNote: 'Tikslų kiekį lemia amžius, simptomų intensyvumas ir namų plano nuoseklumas.',
      visits: [
        { label: '1 vizitas', desc: 'išsamus įvertinimas ir veiksmų planas' },
        { label: '4–6 vizitai', desc: 'pirmi stabilūs funkcijos pokyčiai lengvesniais atvejais' },
        { label: '8–12 vizitų', desc: 'kai yra ryškesnis raidos vėlavimo rizikos profilis' },
        { label: 'Palaikymas', desc: 'individualiai, kai tikslai pasiekti' },
      ],
      visitsCriteria: 'Progreso kriterijai: geresnė galvos ir liemens kontrolė; efektyvesni perėjimai tarp padėčių; didesnė judesio ištvermė; nuoseklesnė amžiaus etapų eiga.',

      homeTitle: 'Ką tėvai gali daryti namuose iki vizito',
      homeDo: ['dažnai keisti padėtis dienos metu', 'planuoti trumpus, bet dažnus aktyvius „tummy time“ intervalus', 'skatinti simetrišką daiktų siekimą iš abiejų pusių', 'mažinti ilgą pasyvų buvimą gultukuose ar autokėdutėje ne transporto metu', 'stebėti, kada kūdikis greičiausiai pavargsta, ir registruoti situacijas'],
      homeDont: ['atsitiktinių „stiprinimo“ pratimų be įvertinimo', 'per ilgo aktyvinimo iki ryškaus nuovargio', 'lyginimo su kitais kūdikiais vietoj individualios pažangos vertinimo'],

      faqTitle: 'Dažniausiai užduodami klausimai',
      faq: [
        { q: 'Ar hipotonusas visada reiškia sunkią diagnozę?', a: 'Ne. Dažnai tai funkcinis tonuso ir stabilumo sutrikimas, kurį galima koreguoti. Tačiau būtinas profesionalus įvertinimas.' },
        { q: 'Ar kūdikis „išaugs“ hipotonusą?', a: 'Kai kurių požymių intensyvumas gali mažėti, bet be tikslingo darbo gali išlikti neefektyvūs judesio modeliai ir raidos atsilikimas.' },
        { q: 'Kada geriausia pradėti terapiją?', a: 'Kuo anksčiau. Ankstyvame amžiuje nervų sistema plastiškesnė, todėl korekcija dažniausiai greitesnė.' },
        { q: 'Ar terapija skausminga?', a: 'Ne. Dirbama švelniai, pagal kūdikio toleranciją ir aiškius saugumo principus.' },
        { q: 'Ar masažas gali pakeisti kineziterapiją?', a: 'Dažniausiai ne. Masažas yra papildoma priemonė, o judesio kokybei ir funkcijai būtina kineziterapinė programa.' },
        { q: 'Kiek laiko reikia iki pirmų pokyčių?', a: 'Dažnai pirmi pokyčiai matomi per kelias savaites, jei planas taikomas nuosekliai namuose ir klinikoje.' },
        { q: 'Ar reikalinga neurologo konsultacija?', a: 'Jei yra raudonų vėliavų ar neaiški klinikinė situacija, taip. Daugeliu atvejų deriname pediatro ir kineziterapeuto stebėseną.' },
        { q: 'Ar galima derinti DNS, Vojta, masažą ir hidroterapiją?', a: 'Taip, kai metodai parenkami individualiai ir taikomi pagal aiškius tikslus.' },
        { q: 'Ar hipotonusas gali būti susijęs su vėlesniais laikysenos sunkumais?', a: 'Taip, jei ilgai nekoreguojamas. Todėl svarbu anksti dirbti su stabilizacija ir judesio kokybe.' },
        { q: 'Kada galima mažinti terapijos intensyvumą?', a: 'Kai pasiekti funkciniai tikslai, raida vyksta nuosekliai ir tėvai turi aiškų palaikymo planą namuose.' },
      ],

      specialistsTitle: 'Mūsų specialistai',
      specialistsSubtitle: 'Licencijuoti specialistai su tinkamomis kvalifikacijomis ir patirtimi',
      relatedTitle: 'Susijusios būklės',
      related: [
        { href: '/kudikiu-hipertonusas', label: 'Hipertonusas' },
        { href: '/kudikio-kreivakakliste', label: 'Kreivakaklystė' },
        { href: '/plagiocefalija', label: 'Plagiocefalija' },
        { href: '/ka-gydome/klubo-sanario-displazija-kudikiams', label: 'Klubo sąnario displazija' },
        { href: '/motorines-raidos-velavimas', label: 'Motorinės raidos vėlavimas' },
      ],
      ctaTitle: 'Įtariate sumažėjusį raumenų tonusą?',
      ctaDesc: 'Jei matote, kad kūdikis lėčiau pereina motorinius etapus, registruokitės į įvertinimą.',
      ctaRegister: 'Registruotis vizitui',
      ctaPhone: '+370 666 99676',
      ctaAddress: 'Aludarių g. 7-43, Vilnius',
      medNote: 'Ši informacija yra informacinio pobūdžio ir nepakeičia individualios gydytojo konsultacijos. Jei būklė blogėja arba atsiranda pavojaus požymių, nedelsdami kreipkitės į gydytoją.',
      lastUpdated: '2026-02-22',
      reviewer: 'Agnė Juodytė, vaikų kineziterapeutė',
    },
    en: {
      heroTitle: 'Decreased muscle tone (hypotonia): signs and what parents should do',
      heroSubtitle: 'How to recognise it, when to seek help, and how physiotherapy helps',
      heroNote: 'Early assessment usually allows gentle and effective correction. FitKid clinic in Vilnius – an individual plan.',

      intro1: 'Infant hypotonia (decreased muscle tone) is a common reason parents seek a paediatric physiotherapist. Parents often notice that the infant seems "floppy", moves less actively, has more difficulty holding the head, and tires more quickly when on the tummy or doing new movements.',
      intro2: 'Some infants develop at their own pace, so a single sign alone does not mean a serious problem. However, if signs recur, interfere with daily activities or there is noticeable motor development delay, it is worth acting. Early assessment usually allows gentle and effective correction.',
      intro3: 'On this page we clearly explain: how to recognise hypotonia at home; when planned and when urgent consultation is needed; how we assess the infant at FitKid clinic in Vilnius; and which methods help improve movement quality and development.',

      quickTitle: 'Short answer for parents',
      quickBody: 'Hypotonia means that muscle tension at rest is lower than expected for age. As a result, the infant\'s body has more difficulty maintaining stability, so they may appear "floppy", tire more quickly and progress more slowly to more complex movements.',
      quickNote: 'Hypotonia does not always mean a neurological condition. It is often a functional tone and stability regulation problem that can be corrected. The aim is not to "tighten" muscles by force but to build better neuromuscular control: trunk axis control, symmetry, movement quality and endurance.',

      whatIsTitle: 'What is muscle tone and when is it considered low?',
      whatIsIntro: 'Muscle tone is the baseline tension in muscles needed for posture, balance and initiation of movement. Normal tone allows the infant to:',
      whatIsList: ['hold the head', 'stabilise the trunk', 'transition between positions', 'learn new movements in sequence'],
      whatIsCompensate: 'When tone is low, the infant often compensates by:',
      whatIsCompensateList: ['relying on a "hanging" body instead of active support', 'avoiding positions that require more stability', 'activating deep stabilisers more slowly', 'choosing easier but less efficient movement patterns'],
      whatIsAssess: 'When assessing hypotonia, function matters as much as "floppiness": how the infant holds the head; how they transition between positions; whether movements are symmetrical; whether they progress according to age.',

      ageSignsTitle: 'Signs of hypotonia by age',
      ageGroups: [
        { age: '0–3 months', note: 'In early infancy tone differences can be subtle, so the overall picture matters.', signs: ['when picked up the infant seems to "slip", less "gathered" toward the centre', 'arms and legs often "fall" to the sides, less active support', 'when on tummy head is held for shorter time, faster fatigue', 'weaker trunk control when changing position', 'slower response to movement and environmental stimuli'] },
        { age: '3–6 months', note: 'During this period more active body control and movement variety should emerge.', signs: ['head control difficulties persist', 'slower start to rolling or inefficient rolling pattern', 'harder to maintain support on forearms or hands when on tummy', 'less active reach and transfer control', 'quick fatigue with age-appropriate tasks'] },
        { age: '6–12 months', note: 'If tone regulation does not improve, function starts to lag more clearly.', signs: ['unstable or delayed independent sitting', 'lack of transitional movements (sitting, crawling, standing)', 'skipping crawling or very brief crawling phase', 'harder balance and less body control when changing position', 'marked fatigue during activity, more irritability in the evening'] },
      ],

      whyNotIgnoreTitle: 'Why hypotonia should not be ignored',
      whyNotIgnoreIntro: 'Hypotonia often seems a "milder" problem than hypertonia because there is no obvious tension or stiffness. In practice, uncorrected low tone can lead to no less significant consequences.',
      whyNotIgnoreList: ['motor development delay', 'suboptimal movement patterns', 'compensatory posture and poor trunk control', 'weaker coordination and balance', 'greater fatigue with physical activity later in life'],
      whyNotIgnoreNote: 'Important: early physiotherapy helps not only to "catch up" but also to build a quality foundation for future development.',

      causesTitle: 'Why does hypotonia occur?',
      causes: ['nervous system maturation characteristics', 'pregnancy and birth course', 'early adaptation challenges', 'sensory and motor regulation difficulties', 'in rarer cases neurological or genetic conditions'],
      causesNote: 'Clinical rule: even when hypotonia is functional, it should be managed in a planned way, as "let\'s wait, maybe it will pass" often means lost time for motor development.',

      redFlagsTitle: 'When to seek urgent help',
      redFlags: ['sudden loss of skills (e.g. stops holding head or performing a movement they could before)', 'significant feeding, swallowing or breathing difficulties', 'markedly reduced activity and responsiveness', 'obvious body weakness with little engagement in movement', 'neurological symptoms (seizures, unusual episodes with change in responsiveness)'],
      redFlagsNote: 'If there are no urgent signs but you see repeated developmental slowing, planned paediatrician or paediatric neurologist consultation and physiotherapy assessment are needed.',

      evalTitle: 'How assessment works at FitKid clinic',
      evalSteps: [
        { num: '1', title: 'Parent interview', items: ['what symptoms are seen at home', 'how the infant sleeps, feeds, responds to position change', 'tolerance of daily activity', 'birth and first months history'] },
        { num: '2', title: 'Functional assessment', items: ['tone distribution in different positions', 'head, trunk and pelvis control', 'movement quality and symmetry', 'transitions between positions', 'progress through age-appropriate motor milestones'] },
        { num: '3', title: 'Individual plan', items: ['clear explanation of what currently limits progress', 'a stepwise therapy plan', 'home tasks with practical actions', 'approximate visit frequency and review points'] },
      ],

      treatmentsTitle: 'How physiotherapy and massage help',
      treatmentsIntro: 'The goal in hypotonia correction is not to "exhaust" the infant but to create quality activation: improve trunk axis control; strengthen deep stabilisation; increase movement endurance; and form correct transitions between positions.',
      treatments: [
        { emoji: '🤲', name: 'Individual infant physiotherapy', desc: 'Each session is tailored to age and developmental stage, infant endurance, dominant compensations and family ability to continue the plan at home. Aim: less passive lying, more quality active movement with good support.' },
        { emoji: '🌀', name: 'DNS principles', desc: 'DNS (Dynamic Neuromuscular Stabilisation) is used to activate deep stabilising muscles, improve diaphragm-trunk-pelvis coordination and form a stable base for movement. In hypotonia, DNS helps build "inner support".' },
        { emoji: '⚡', name: 'Vojta therapy', desc: 'Vojta is used when innate movement patterns need to be activated, whole-body engagement improved and a more efficient neuromuscular response achieved. This is especially relevant when the infant cannot yet initiate certain movements with quality.' },
        { emoji: '👐', name: 'Therapeutic infant massage', desc: 'With hypotonia, massage is used as part of the plan for sensory and proprioceptive stimulation, circulation and tissue preparation for more active work, and to "wake up" the body before exercises. Massage does not replace physiotherapy but can significantly improve tolerance.' },
        { emoji: '💧', name: 'Hydrotherapy (infant swimming)', desc: 'Water helps activate muscles more safely without excessive load, increase range of motion, encourage symmetrical movement and improve endurance and body awareness. With hypotonia, hydrotherapy is often very useful as an adjunct between physiotherapy sessions.' },
      ],

      visitsTitle: 'How many visits are usually needed?',
      visitsNote: 'The exact number depends on age, symptom intensity and consistency of the home plan.',
      visits: [
        { label: '1st visit', desc: 'comprehensive assessment and action plan' },
        { label: '4–6 visits', desc: 'first stable functional changes in milder cases' },
        { label: '8–12 visits', desc: 'when there is a clearer developmental delay risk profile' },
        { label: 'Maintenance', desc: 'individually, once goals are reached' },
      ],
      visitsCriteria: 'Progress criteria: better head and trunk control; more efficient transitions between positions; greater movement endurance; steadier age-appropriate milestone progression.',

      homeTitle: 'What parents can do at home before the visit',
      homeDo: ['change positions frequently during the day', 'plan short but frequent active tummy time intervals', 'encourage symmetrical reaching for objects from both sides', 'reduce long passive time in bouncers or car seats when not in the car', 'observe when the infant tires most and note the situations'],
      homeDont: ['random "strengthening" exercises without assessment', 'prolonged activation until obvious fatigue', 'comparing with other infants instead of assessing individual progress'],

      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'Does hypotonia always mean a serious diagnosis?', a: 'No. It is often a functional tone and stability disorder that can be corrected. However, professional assessment is necessary.' },
        { q: 'Will the infant outgrow hypotonia?', a: 'The intensity of some signs may decrease, but without targeted work inefficient movement patterns and developmental delay can persist.' },
        { q: 'When is the best time to start therapy?', a: 'As early as possible. In early infancy the nervous system is more plastic, so correction is usually faster.' },
        { q: 'Is therapy painful?', a: 'No. Work is done gently, according to the infant\'s tolerance and clear safety principles.' },
        { q: 'Can massage replace physiotherapy?', a: 'Usually not. Massage is an adjunct; a physiotherapy programme is essential for movement quality and function.' },
        { q: 'How long until first changes?', a: 'Often the first changes are seen within a few weeks if the plan is applied consistently at home and in the clinic.' },
        { q: 'Is a neurologist consultation needed?', a: 'If there are red flags or an unclear clinical picture, yes. In many cases we combine paediatric and physiotherapy follow-up.' },
        { q: 'Can DNS, Vojta, massage and hydrotherapy be combined?', a: 'Yes, when methods are chosen individually and applied according to clear goals.' },
        { q: 'Can hypotonia be linked to later posture difficulties?', a: 'Yes, if left uncorrected for long. So it is important to work on stabilisation and movement quality early.' },
        { q: 'When can therapy intensity be reduced?', a: 'When functional goals are reached, development progresses steadily and parents have a clear home support plan.' },
      ],

      specialistsTitle: 'Our specialists',
      specialistsSubtitle: 'Licensed specialists with appropriate qualifications and experience',
      relatedTitle: 'Related conditions',
      related: [
        { href: '/kudikiu-hipertonusas', label: 'Hypertonia' },
        { href: '/kudikio-kreivakakliste', label: 'Torticollis' },
        { href: '/plagiocefalija', label: 'Plagiocephaly' },
        { href: '/ka-gydome/klubo-sanario-displazija-kudikiams', label: 'Hip dysplasia' },
        { href: '/motorines-raidos-velavimas', label: 'Motor development delays' },
      ],
      ctaTitle: 'Suspecting low muscle tone?',
      ctaDesc: 'If you notice the infant is slower to reach motor milestones, book an assessment.',
      ctaRegister: 'Register for visit',
      ctaPhone: '+370 666 99676',
      ctaAddress: 'Aludarių g. 7-43, Vilnius',
      medNote: 'This information is for informational purposes and does not replace individual medical consultation. If the condition worsens or danger signs appear, contact a doctor without delay.',
      lastUpdated: '2026-02-22',
      reviewer: 'Agnė Juodytė, paediatric physiotherapist',
    },
  };

  const txt = pageText[currentLang];

  const specialists = [
    { name: 'Agnė Juodytė', role: currentLang === 'lt' ? 'Kineziterapeutė' : 'Physiotherapist', detail: currentLang === 'lt' ? 'vaikų kineziterapeutė, Vojta terapijos praktikė' : 'paediatric physiotherapist, Vojta therapy practitioner', img: '/specialists/agne.png', desc: currentLang === 'lt' ? 'Patyrusi kineziterapeutė, dirbanti su kūdikiais nuo pirmųjų dienų ir vaikais.' : 'Experienced physiotherapist working with infants from their first days and children.' },
    { name: 'Ksenija Persijanova', role: currentLang === 'lt' ? 'Kineziterapeutė' : 'Physiotherapist', detail: currentLang === 'lt' ? 'vaikų ir kūdikių kineziterapeutė' : 'paediatric and infant physiotherapist', img: '/specialists/ksenija.png', desc: currentLang === 'lt' ? 'Kineziterapeutė su praktine patirtimi kūdikių kineziterapijoje ir paliatyvioje pediatrijoje.' : 'Physiotherapist with practical experience in infant physiotherapy and palliative paediatrics.' },
    { name: 'Ramunė Nemeikaitė', role: currentLang === 'lt' ? 'Masažo terapeutė' : 'Massage Therapist', detail: currentLang === 'lt' ? 'gydomojo masažo specialistė, dirba tik su kūdikiais ir vaikais' : 'therapeutic massage specialist, works only with infants and children', img: '/specialists/ramune.png', desc: currentLang === 'lt' ? 'Sertifikuota vaikų masažo specialistė.' : 'Certified paediatric massage specialist.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header translations={t} currentLang={currentLang} onLanguageChange={handleLanguageChange} />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative flex items-center bg-[#e8e6e3]" style={{ width: '100%', minHeight: '60vh', overflow: 'hidden' }}>
          <div className="absolute inset-0">
            <Image src="/services/infant-physiotherapy.jpg" alt="Kūdikių hipotonusas" fill priority quality={95} sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center 30%', filter: 'brightness(1.1) contrast(0.95) blur(8px)' }} />
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
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{txt.intro2}</p>
            <p className="text-lg text-gray-700 leading-relaxed">{txt.intro3}</p>
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
            <p className="text-lg text-gray-700 leading-relaxed mb-4">{txt.whatIsIntro}</p>
            <ul className="space-y-3 mb-6">
              {txt.whatIsList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#fb7825] mt-1">•</span>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed mb-3">{txt.whatIsCompensate}</p>
            <ul className="space-y-3 mb-4">
              {txt.whatIsCompensateList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#54B6FC] mt-1">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-blue-50 border-l-4 border-[#54B6FC] rounded-r-lg px-5 py-4">
              <p className="text-gray-800 leading-relaxed">{txt.whatIsAssess}</p>
            </div>
          </div>
        </section>

        {/* Age Signs */}
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

        {/* Why not ignore */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{txt.whyNotIgnoreTitle}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">{txt.whyNotIgnoreIntro}</p>
            <ul className="space-y-3 mb-6">
              {txt.whyNotIgnoreList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg px-5 py-4">
              <p className="text-gray-800 leading-relaxed">{txt.whyNotIgnoreNote}</p>
            </div>
          </div>
        </section>

        {/* Causes */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{txt.causesTitle}</h2>
            <ul className="space-y-3 mb-6">
              {txt.causes.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-white rounded-xl px-5 py-3 border-l-4 border-[#54B6FC]">
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
        <section className="py-16 bg-white">
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
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">{txt.evalTitle}</h2>
            <div className="space-y-6">
              {txt.evalSteps.map((step, idx) => (
                <div key={idx} className="flex gap-6 bg-white rounded-xl p-6 shadow-sm border-l-4 border-[#54B6FC]">
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
        <section className="py-16 bg-white">
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
        <section className="py-16 bg-gray-50">
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
            <p className="text-gray-600 text-sm mt-4">{txt.visitsCriteria}</p>
          </div>
        </section>

        {/* Home Do / Don't */}
        <section className="py-16 bg-white">
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
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">{txt.faqTitle}</h2>
            <div className="space-y-4">
              {txt.faq.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-gray-100">
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{txt.specialistsTitle}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{txt.specialistsSubtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specialists.map((spec) => (
                <div key={spec.name} className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image src={spec.img} alt={spec.name} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" style={{ objectPosition: 'center 10%' }} sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 90vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{spec.name}</h3>
                    <div className="text-sm font-semibold text-[#54B6FC] mb-4">{spec.detail}</div>
                    <p className="text-gray-600 leading-relaxed text-sm">{spec.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials translations={t} />

        {/* Related */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">{txt.relatedTitle}</h2>
            <div className="flex flex-nowrap gap-3">
              {txt.related.map((link) => (
                <Link key={link.href} href={link.href} className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-[#54B6FC] text-gray-700 hover:text-[#54B6FC] px-4 py-2 rounded-full text-sm font-medium transition-all hover:shadow-md whitespace-nowrap flex-shrink-0">
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
