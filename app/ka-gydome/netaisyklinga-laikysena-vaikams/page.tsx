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

export default function NetaisyklingaLaikysenaPage() {
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
      heroTitle: 'Netaisyklinga laikysena vaikams ir paaugliams: požymiai ir ką daryti tėvams',
      heroSubtitle: 'Požymiai pagal amžių, kada kreiptis ir kaip FitKid vertina laikyseną ir judesį',
      heroNote: 'Netaisyklinga laikysena dažniausiai yra funkcinė problema, kuri gali būti koreguojama. Kuo anksčiau pastebima ir tvarkoma, tuo mažesnė rizika.',

      intro1: 'Netaisyklinga laikysena vaikystėje ir paauglystėje dažniausiai formuojasi ne per vieną dieną. Tai lėtas procesas, kuriame susideda augimo šuoliai, ilgas sėdėjimas, mažas fizinis aktyvumas, vienpusiai krūviai, netinkami judesio įpročiai ir kartais skausmo vengimas.',
      intro2: 'Tėvai dažnai pirmiausia pastebi „susikūprinimą“, pečių asimetriją, galvos pasislinkimą į priekį, greitą nugaros nuovargį ar nusiskundimus kaklo ir pečių įtampa.',
      intro3: 'Svarbu suprasti: ne kiekviena laikysenos klaida reiškia ligą; nuolat kartojama netaisyklinga laikysena gali pereiti į skausmo, silpnesnės ištvermės ir prastesnio judesio kokybės grandinę.',
      intro4: 'Šiame puslapyje aiškiai paaiškiname: kaip atpažinti netaisyklingos laikysenos požymius pagal amžių; kada pakanka planinės konsultacijos, o kada būtina skubi gydytojo apžiūra; kaip FitKid klinikoje Vilniuje vertiname laikyseną ir judesį; kaip kineziterapija ir masažas padeda vaikams, ką realiai galima pagerinti ir per kiek laiko.',

      quickTitle: 'Trumpas atsakymas tėvams',
      quickBody: 'Netaisyklinga laikysena dažniausiai yra funkcinė problema, kuri gali būti koreguojama. Kuo anksčiau pastebima ir tvarkoma, tuo mažesnė rizika, kad išsivystys lėtinis skausmas, judesio kompensacijos ar ilgalaikės laikysenos deformacijos.',
      quickList: [
        'laikysena nėra „vien tiesi nugara“',
        'tikslas yra stabili, ekonomiška, neskausminga kūno padėtis ir judesys',
        'korekcija turi vykti per aktyvų darbą (kineziterapiją), o ne tik per pasyvias priemones',
        'masažas dažniausiai yra papildoma priemonė įtampai ir skausmui mažinti, bet ne vienintelis sprendimas',
      ],

      whatIsTitle: 'Kas laikoma netaisyklinga laikysena',
      whatIsIntro: 'Netaisyklinga laikysena yra ne viena poza, o pasikartojantis judesio ir kūno padėties modelis, kuris:',
      whatIsList: ['didina perkrovas tam tikrose kūno zonose', 'blogina judesio efektyvumą', 'mažina ištvermę', 'provokuoja diskomfortą ar skausmą'],
      whatIsModels: 'Dažniausi modeliai:',
      whatIsModelsList: [
        'pečiai pasislinkę į priekį ir suapvalinta viršutinė nugaros dalis',
        'galva „išstumta“ į priekį',
        'juosmens hyperlordozė arba, priešingai, „sugriuvusi“ juosmens kontrolė',
        'dubens pasvirimo ir liemens asimetrijos modeliai',
        'asimetriška atrama stovint ir einant',
      ],
      whatIsNote: 'Svarbu: laikysena vertinama kartu su funkcija. Jei vaikas stovi „neidealiai“, bet juda gerai ir nieko neskauda, tai ne tas pats, kaip nuolatinis skausmas ir ribotas judesys.',

      ageSignsTitle: 'Požymiai pagal amžių',
      age1_3Title: '1–3 metai (neseniai pradėję vaikščioti)',
      age1_3Note: 'Šiame amžiuje laikysena dar natūraliai kinta, todėl vertiname ne „grožį“, o funkciją.',
      age1_3Signs: [
        'nuolatinė „C“ kūno forma ar ryški asimetrija',
        'dažnas griuvinėjimas ne dėl naujo įgūdžio, o dėl prastos kontrolės',
        'nuolatinis vaikščiojimas ant pirštų galų',
        'ryški dubens ar liemens asimetrija',
        'vengimas tam tikrų padėčių ar judesių',
        'greitas nuovargis vaikštant',
      ],
      age1_3Norm: 'Kada tai dar norma: laikinas nestabilumas mokantis vaikščioti; trumpi „keisti“ judesio epizodai be progresuojančių simptomų.',

      age4_7Title: '4–7 metai (ikimokyklinis / ankstyvas mokyklinis amžius)',
      age4_7Note: 'Šiame etape laikysenos kontrolė turėtų stiprėti.',
      age4_7Signs: [
        'nuolatinis „susmukimas“ sėdint',
        'pečių ar mentės asimetrija',
        'dažni kaklo/nugaros nuovargio skundai po dienos',
        'vengimas aktyvių žaidimų dėl „greito pavargimo“',
        'netolygus bėgimo ar šuoliavimo modelis',
        'dažnas sėdėjimas „W“ padėtyje kartu su kitais kontrolės trūkumais',
      ],

      age8_12Title: '8–12 metai (mokyklinis amžius)',
      age8_12Signs: [
        'pečių juostos įtampa, kaklo skausmas po pamokų',
        'nugaros skausmai ilgesnio sėdėjimo metu',
        'galvos skausmai kartu su kaklo įtampa',
        'vienpusis kuprinės nešiojimas ir asimetriškas stovėjimas',
        'pėdų/kojų ašies problemos, darančios įtaką laikysenai',
      ],

      age13_19Title: '13–19 metai (paaugliai)',
      age13_19Signs: [
        'ryški „forward head“ laikysena (galva į priekį)',
        'krūtinės ląstos standumas, pečių „užsidarymas“',
        'juosmens ar tarpumentės skausmai',
        'pasikartojanti perkrova sportuojant',
        'sumažėjusi ištvermė, mažesnė judesio kokybė',
        'laikysenos blogėjimas po augimo spurto',
      ],

      whyTitle: 'Kodėl netaisyklinga laikysena formuojasi',
      whyList: [
        'ilgas sėdėjimas ir mažas judesio kintamumas',
        'nepakankamas amžių atitinkantis fizinis aktyvumas',
        'augimo šuoliai, kai raumenų ilgis/jėga nespėja prisitaikyti',
        'silpnesnė liemens, sėdmenų, mentės stabilizacija',
        'pėdos ir apatinių galūnių biomechanikos ypatumai',
        'vienpusiai sportiniai krūviai be kompensuojančio paruošimo',
        'netinkami kasdieniai įpročiai (kuprinė ant vieno peties, ilgos statinės padėtys, menkos pertraukos)',
      ],
      whoNote: 'Pagal WHO rekomendacijas vaikų ir paauglių aktyvumas yra esminis apsauginis veiksnys: 5–17 m. rekomenduojama bent vidutiniškai 60 min. vidutinio-didelio intensyvumo aktyvumo per dieną; jaunesniems vaikams (1–4 m.) svarbus didelis bendras kasdienis judėjimo kiekis ir ribotas pasyvus laikas.',

      redFlagsTitle: 'Kada būtina kreiptis skubiai',
      redFlagsIntro: 'Netaisyklinga laikysena dažniausiai nėra skubi būklė, bet yra aiškūs „raudoni signalai“, kai reikia skubios gydytojo konsultacijos:',
      redFlags: [
        'nugaros ar kaklo skausmas, kuris pažadina naktį',
        'nuolatinis stiprėjantis skausmas be aiškios priežasties',
        'karščiavimas, nepaaiškinamas svorio kritimas, bendras silpnumas',
        'silpnumas rankose ar kojose, tirpimas, jutimų sutrikimai',
        'šlapinimosi ar tuštinimosi kontrolės pokyčiai',
        'skausmas po rimtesnės traumos',
        'staigus, aiškiai progresuojantis stuburo ar krūtinės formos pokytis',
      ],
      redFlagsNote: 'Tokiais atvejais pirmiausia reikalingas gydytojo įvertinimas, o ne vien tik kineziterapija.',

      evalTitle: 'Kaip vyksta įvertinimas FitKid klinikoje',
      evalStep1Title: 'Tėvų ir vaiko pokalbis',
      evalStep1Items: [
        'kada prasidėjo nusiskundimai',
        'kokiose situacijose skausmas ar nuovargis didžiausias',
        'fizinio aktyvumo, sporto ir sėdėjimo balansą',
        'mokyklos, miego ir kasdienės rutinos ypatumus',
        'ar buvo traumos, augimo šuoliai, greitas simptomų progresas',
      ],
      evalStep2Title: 'Funkcinis laikysenos ir judesio vertinimas',
      evalStep2Items: [
        'laikyseną stovint, sėdint, judant',
        'galvos, pečių, mentės, liemens, dubens ašį',
        'stuburo mobilumą ir kontrolę',
        'liemens, klubų, mentės stabilizaciją',
        'pėdos ir eisenos biomechaniką',
        'judesių simetriją ir kompensacijas',
      ],
      evalStep3Title: 'Individualus planas',
      evalStep3Items: [
        'aiškų paaiškinimą, kas palaiko problemą',
        'etapais sudėtą terapijos planą',
        'konkretų namų planą (trukmė, dažnis, prioritetai)',
        'kriterijus, kaip matuosime progresą',
      ],

      treatmentTitle: 'Kaip padeda kineziterapija ir masažas',
      treatmentPhysioTitle: 'Individuali vaikų ir paauglių kineziterapija',
      treatmentPhysioGoals: [
        'atkurti kokybišką laikysenos kontrolę',
        'stiprinti „silpnąsias grandis“ (liemuo, klubai, mentė)',
        'pagerinti stuburo ir krūtinės ląstos mobilumą',
        'sumažinti skausmą ir nuovargį',
        'sugrąžinti pasitikėjimą judesiu',
      ],
      treatmentAgeTitle: 'Judesio korekcija pagal amžių',
      treatmentAge1: '1–6 m.: per žaidimą, koordinaciją, pagrindinius judesio modelius',
      treatmentAge2: '7–12 m.: laikysenos kontrolė + jėgos pagrindai + judesio higiena mokykloje',
      treatmentAge3: '13–19 m.: tikslinė jėga, ištvermė, sporto specifika, krūvio valdymas',
      treatmentDNSTitle: 'DNS ir motorinės kontrolės principai',
      treatmentDNS: 'Kai reikia, taikome DNS principus: giliųjų stabilizatorių aktyvinimui; efektyvesnei kūno ašies kontrolei; kompensacijų mažinimui kasdieniuose judesiuose.',
      treatmentVojtaTitle: 'Vojta principai (kai indikacija aiški)',
      treatmentVojta: 'Vyresniems vaikams taikoma selektyviai ir tik pagal aiškią funkcinę indikaciją. Tikslas – nervų-raumenų valdymo kokybė, o ne vien „pozos taisymas“.',
      treatmentMassageTitle: 'Masažas',
      treatmentMassage: 'Masažas taikomas kaip papildoma priemonė: mažinti kaklo, pečių juostos, nugaros įtampą; pagerinti audinių toleranciją; sumažinti diskomfortą po krūvio; palengvinti aktyvų darbą kineziterapijoje. Svarbu: masažas vienas dažniausiai neišsprendžia laikysenos problemos be aktyvios korekcijos.',
      treatmentErgoTitle: 'Ergonomika ir kasdieniai įpročiai',
      treatmentErgo: 'Kartu su vaiku ir tėvais sutvarkome: darbo vietos aukščius; ekranų poziciją; sėdėjimo-pertraukų ritmą; kuprinės nešiojimo įpročius; dienos aktyvumo planą.',

      visitsTitle: 'Kiek vizitų dažniausiai prireikia',
      visitsNote: 'Tikslus planas priklauso nuo amžiaus, simptomų trukmės ir namų plano laikymosi.',
      visits: [
        { label: '1 vizitas', desc: 'išsamus vertinimas ir planas' },
        { label: '4–6 vizitai', desc: 'pirmi stabilūs pokyčiai lengvesniais atvejais' },
        { label: '8–12 vizitų', desc: 'kai yra skausmas, ryškesnės kompensacijos ar ilgesnė simptomų istorija' },
        { label: 'Palaikymas', desc: '1–2 kartai per mėnesį pereinamuoju etapu arba pagal sporto/mokymosi krūvius' },
      ],
      visitsCriteria: 'Progresą vertiname pagal: mažesnį skausmą ir nuovargį; geresnę judesio kokybę; didesnę ištvermę; geresnę laikyseną kasdienėse situacijose; mažesnį simptomų pasikartojimą.',

      homeTitle: 'Ką tėvai gali daryti namuose',
      homeDo: [
        'kas 30–45 min. sėdėjimo daryti 2–5 min. judesio pertrauką',
        'užtikrinti kasdienį aktyvumą pagal amžių',
        'stebėti, kad kuprinė būtų nešiojama ant abiejų pečių, prigludusi prie nugaros',
        'periodiškai peržiūrėti kuprinės svorį ir turinį',
        'įtraukti 10–15 min. namų pratimų rutiną (mobilumas + stabilizacija)',
        'užtikrinti miegą pagal amžių ir nuoseklų režimą',
      ],
      homeDont: [
        '„korektorių“ nešiojimo visą dieną be aktyvaus stiprinimo plano',
        'vien masažo be aktyvios korekcijos',
        'grįžimo į intensyvų sportą per skausmą',
        'laukimo mėnesiais, kai simptomai progresuoja',
      ],

      faqTitle: 'Dažniausiai užduodami klausimai (FAQ)',
      faq: [
        { q: 'Ar netaisyklinga laikysena visada reiškia skoliozę?', a: 'Ne. Dauguma laikysenos problemų yra funkcinės ir susijusios su raumenų kontrole, įpročiais ir krūviu. Skoliozę patvirtina gydytojas pagal kliniką ir, jei reikia, vaizdinius tyrimus.' },
        { q: 'Ar kuprinė sukelia skoliozę?', a: 'Patikimų įrodymų, kad kuprinė sukelia struktūrinę skoliozę, nėra. Tačiau netinkama ir per sunki kuprinė gali didinti kaklo, pečių ir nugaros skausmą.' },
        { q: 'Koks kuprinės svoris saugus?', a: 'Praktiškai dažniausiai orientuojamasi į maždaug 10–15% kūno svorio ribą ir tinkamą nešiojimo būdą.' },
        { q: 'Ar laikysenos korektorius išsprendžia problemą?', a: 'Vienas korektorius paprastai neišsprendžia. Jis gali laikinai priminti padėtį, bet ilgalaikis rezultatas pasiekiamas tik per aktyvų stiprinimą ir judesio kontrolę.' },
        { q: 'Ar masažas būtinas?', a: 'Ne visada. Jis naudingas, kai yra įtampa ar skausmas, bet pagrindą sudaro kineziterapinis planas.' },
        { q: 'Ar vaikui galima sportuoti, jei skauda nugarą?', a: 'Dažniausiai taip, bet reikia pritaikyti krūvį ir taisyti judesio kokybę. Absoliutus poilsis retai yra geriausias sprendimas.' },
        { q: 'Kada pamatysime pirmą rezultatą?', a: 'Dažnai per 2–6 savaites, jei planas taikomas nuosekliai. Ilgiau trunkančios problemos dažniausiai reikalauja ilgesnio ciklo.' },
        { q: 'Ar paauglystės augimo šuolis gali pabloginti laikyseną?', a: 'Taip. Greito augimo metu dažnai pablogėja mobilumo-jėgos balansas, todėl laikysenos kontrolė laikinai silpnėja.' },
        { q: 'Ar laikysenos problema gali sukelti galvos skausmus?', a: 'Taip, ypač kai vyrauja kaklo-pečių juostos įtampa ir galvos pozicija į priekį.' },
        { q: 'Kada būtina gydytojo ortopedo ar neurologo konsultacija?', a: 'Kai yra raudonų signalų, aiškus progresuojantis deformacijos vaizdas, neurologiniai simptomai arba silpnas atsakas į konservatyvų planą.' },
      ],

      specialistsTitle: 'Kodėl tėvai renkasi FitKid',
      specialistsSubtitle: 'FitKid yra vaikų ir paauglių kineziterapijos klinika Vilniuje, orientuota į aiškų klinikinį planą ir realų funkcinį rezultatą.',
      specialistAgne: 'Agnė Juodytė',
      specialistAgneRole: 'vaikų kineziterapeutė, Vojta terapijos praktikė',
      specialistKsenija: 'Ksenija Persijanova',
      specialistKsenijaRole: 'vaikų ir paauglių kineziterapeutė',
      specialistRamune: 'Ramunė Nemeikaitė',
      specialistRamuneRole: 'gydomojo masažo specialistė, dirba tik su kūdikiais, vaikais ir paaugliais',

      relatedTitle: 'Susijusios temos',
      related: [
        { href: '/vaiku-kineziterapija#nugaros-skausmai', label: 'Nugaros ir kaklo skausmai' },
        { href: '/vaiku-kineziterapija#skolioze', label: 'Skoliozė' },
        { href: '/vaiku-kineziterapija#ploksciapedyste', label: 'Plokščiapėdystė' },
        { href: '/vaiku-kineziterapija#kreivos-kojos', label: 'Kreivos kojos (X/O)' },
        { href: '/vaiku-kineziterapija#reabilitacija', label: 'Reabilitacija po traumų' },
      ],

      ctaTitle: 'Registracija',
      ctaDesc: 'Jei matote, kad laikysena blogėja, kartojasi nugaros/kaklo skausmai ar vaikas greitai pavargsta, registruokitės į įvertinimą.',
      ctaRegister: 'Registruotis vizitui',
      ctaContact: 'Susisiekti',
      ctaPhone: '+37066699676',
      ctaAddress: 'Adresas: Aludarių g. 7-43, Vilnius',

      medNote: 'Ši informacija yra informacinio pobūdžio ir nepakeičia individualios gydytojo konsultacijos. Jei būklė blogėja arba atsiranda pavojaus požymių, nedelsdami kreipkitės į gydytoją.',
      lastUpdated: 'Atnaujinta: 2026-02-22',
    },
    en: {
      heroTitle: 'Poor posture in children and adolescents: signs and what parents should do',
      heroSubtitle: 'Signs by age, when to seek help, and how FitKid assesses posture and movement',
      heroNote: 'Poor posture is often a functional issue that can be corrected. The earlier it is noticed and addressed, the lower the risk of chronic pain and long-term changes.',

      intro1: 'Poor posture in childhood and adolescence usually develops over time. It is a gradual process involving growth spurts, long sitting, low physical activity, one-sided loads, poor movement habits and sometimes pain avoidance.',
      intro2: 'Parents often first notice "slouching", shoulder asymmetry, forward head position, quick back fatigue or complaints of neck and shoulder tension.',
      intro3: 'Two things matter: not every postural flaw means disease; repeatedly poor posture can lead to pain, reduced endurance and poorer movement quality.',
      intro4: 'On this page we explain: how to recognise signs of poor posture by age; when a planned consultation is enough and when urgent medical assessment is needed; how we assess posture and movement at FitKid clinic in Vilnius; how physiotherapy and massage help children and what can realistically improve and in what time.',

      quickTitle: 'Short answer for parents',
      quickBody: 'Poor posture is usually a functional problem that can be corrected. The earlier it is noticed and managed, the lower the risk of chronic pain, movement compensations or long-term postural changes.',
      quickList: [
        'posture is not just "a straight back"',
        'the aim is stable, economical, pain-free body position and movement',
        'correction should happen through active work (physiotherapy), not only passive aids',
        'massage is usually an adjunct for tension and pain, not the only solution',
      ],

      whatIsTitle: 'What is considered poor posture',
      whatIsIntro: 'Poor posture is not a single pose but a repeated pattern of movement and body position that:',
      whatIsList: ['increases load on certain body areas', 'reduces movement efficiency', 'lowers endurance', 'causes discomfort or pain'],
      whatIsModels: 'Common patterns:',
      whatIsModelsList: [
        'shoulders shifted forward and rounded upper back',
        'head "pushed" forward',
        'lumbar hyperlordosis or, conversely, "collapsed" lumbar control',
        'pelvic tilt and trunk asymmetry patterns',
        'asymmetric stance and gait',
      ],
      whatIsNote: 'Important: posture is assessed together with function. If the child stands "less ideally" but moves well and has no pain, that is not the same as constant pain and limited movement.',

      ageSignsTitle: 'Signs by age',
      age1_3Title: '1–3 years (recent walkers)',
      age1_3Note: 'At this age posture still changes naturally; we assess function, not "looks".',
      age1_3Signs: [
        'constant "C" body shape or obvious asymmetry',
        'frequent falling not due to new skill but poor control',
        'persistent toe walking',
        'obvious pelvic or trunk asymmetry',
        'avoidance of certain positions or movements',
        'quick fatigue when walking',
      ],
      age1_3Norm: 'When it is still normal: temporary instability while learning to walk; brief "odd" movement episodes without progressing symptoms.',

      age4_7Title: '4–7 years (pre-school / early school)',
      age4_7Note: 'Postural control should strengthen at this stage.',
      age4_7Signs: [
        'constant slouching when sitting',
        'shoulder or shoulder blade asymmetry',
        'frequent neck/back fatigue complaints after the day',
        'avoiding active play due to "quick tiredness"',
        'uneven running or jumping pattern',
        'frequent W-sitting with other control issues',
      ],

      age8_12Title: '8–12 years (school age)',
      age8_12Signs: [
        'shoulder girdle tension, neck pain after lessons',
        'back pain with longer sitting',
        'headaches with neck tension',
        'one-sided bag carrying and asymmetric stance',
        'foot/leg alignment issues affecting posture',
      ],

      age13_19Title: '13–19 years (adolescents)',
      age13_19Signs: [
        'obvious forward head posture',
        'chest stiffness, "closed" shoulders',
        'lumbar or thoracic pain',
        'repeated overload with sport',
        'reduced endurance, poorer movement quality',
        'worsening posture after growth spurt',
      ],

      whyTitle: 'Why poor posture develops',
      whyList: [
        'long sitting and little movement variation',
        'insufficient age-appropriate physical activity',
        'growth spurts when muscle length/strength lags',
        'weaker trunk, gluteal and scapular stability',
        'foot and lower limb biomechanics',
        'one-sided sport loads without compensatory preparation',
        'poor daily habits (bag on one shoulder, long static positions, few breaks)',
      ],
      whoNote: 'WHO recommends: 5–17 years – at least 60 min of moderate-to-vigorous activity per day; younger children (1–4 years) – plenty of daily movement and limited sedentary time.',

      redFlagsTitle: 'When to seek urgent help',
      redFlagsIntro: 'Poor posture is usually not an emergency, but clear "red flags" require urgent medical consultation:',
      redFlags: [
        'back or neck pain that wakes at night',
        'persistent worsening pain without clear cause',
        'fever, unexplained weight loss, general weakness',
        'weakness in arms or legs, numbness, sensation changes',
        'changes in bladder or bowel control',
        'pain after significant trauma',
        'sudden, clearly progressive change in spine or chest shape',
      ],
      redFlagsNote: 'In these cases a doctor\'s assessment is needed first, not only physiotherapy.',

      evalTitle: 'How assessment works at FitKid clinic',
      evalStep1Title: 'Parent and child discussion',
      evalStep1Items: [
        'when complaints started',
        'when pain or fatigue is greatest',
        'balance of physical activity, sport and sitting',
        'school, sleep and daily routine',
        'any trauma, growth spurts, rapid symptom progression',
      ],
      evalStep2Title: 'Functional posture and movement assessment',
      evalStep2Items: [
        'posture when standing, sitting, moving',
        'head, shoulder, scapular, trunk, pelvic alignment',
        'spine mobility and control',
        'trunk, hip, scapular stability',
        'foot and gait biomechanics',
        'movement symmetry and compensations',
      ],
      evalStep3Title: 'Individual plan',
      evalStep3Items: [
        'clear explanation of what maintains the problem',
        'a stepwise therapy plan',
        'concrete home plan (duration, frequency, priorities)',
        'criteria for measuring progress',
      ],

      treatmentTitle: 'How physiotherapy and massage help',
      treatmentPhysioTitle: 'Individual physiotherapy for children and adolescents',
      treatmentPhysioGoals: [
        'restore quality postural control',
        'strengthen "weak links" (trunk, hips, scapula)',
        'improve spine and rib cage mobility',
        'reduce pain and fatigue',
        'restore confidence in movement',
      ],
      treatmentAgeTitle: 'Movement correction by age',
      treatmentAge1: '1–6 yrs: through play, coordination, basic movement patterns',
      treatmentAge2: '7–12 yrs: postural control + strength basics + movement hygiene at school',
      treatmentAge3: '13–19 yrs: targeted strength, endurance, sport-specific work, load management',
      treatmentDNSTitle: 'DNS and motor control principles',
      treatmentDNS: 'When needed we use DNS for: deep stabiliser activation; better axial control; reducing compensations in daily movement.',
      treatmentVojtaTitle: 'Vojta principles (when clearly indicated)',
      treatmentVojta: 'Used selectively in older children only when functionally indicated. Aim is neuromuscular control quality, not just "fixing posture".',
      treatmentMassageTitle: 'Massage',
      treatmentMassage: 'Massage is used as an adjunct: to reduce neck, shoulder girdle and back tension; improve tissue tolerance; reduce discomfort after load; support active work in physiotherapy. Important: massage alone usually does not resolve posture without active correction.',
      treatmentErgoTitle: 'Ergonomics and daily habits',
      treatmentErgo: 'With child and parents we address: workstation height; screen position; sit-break rhythm; bag carrying; daily activity plan.',

      visitsTitle: 'How many visits are usually needed',
      visitsNote: 'The exact plan depends on age, symptom duration and adherence to the home plan.',
      visits: [
        { label: '1 visit', desc: 'full assessment and plan' },
        { label: '4–6 visits', desc: 'first stable changes in milder cases' },
        { label: '8–12 visits', desc: 'when there is pain, clearer compensations or longer symptom history' },
        { label: 'Maintenance', desc: '1–2 times per month in transition or according to sport/school load' },
      ],
      visitsCriteria: 'We measure progress by: less pain and fatigue; better movement quality; greater endurance; better posture in daily situations; less symptom recurrence.',

      homeTitle: 'What parents can do at home',
      homeDo: [
        'every 30–45 min of sitting, take a 2–5 min movement break',
        'ensure daily activity appropriate for age',
        'ensure bag is worn on both shoulders, close to the back',
        'periodically check bag weight and contents',
        'include a 10–15 min home exercise routine (mobility + stability)',
        'ensure sleep appropriate for age and consistent routine',
      ],
      homeDont: [
        'wearing a "corrector" all day without an active strengthening plan',
        'massage only without active correction',
        'returning to intense sport through pain',
        'waiting for months while symptoms progress',
      ],

      faqTitle: 'Frequently asked questions (FAQ)',
      faq: [
        { q: 'Does poor posture always mean scoliosis?', a: 'No. Most posture issues are functional and related to muscle control, habits and load. Scoliosis is confirmed by a doctor based on clinical and, if needed, imaging.' },
        { q: 'Does a heavy bag cause scoliosis?', a: 'There is no reliable evidence that a bag causes structural scoliosis. However, an unsuitable or too heavy bag can increase neck, shoulder and back pain.' },
        { q: 'What bag weight is safe?', a: 'Practically, around 10–15% of body weight is often used as a guide, along with proper carrying.' },
        { q: 'Does a posture corrector fix the problem?', a: 'A corrector alone usually does not. It may briefly remind of position, but long-term results come from active strengthening and movement control.' },
        { q: 'Is massage necessary?', a: 'Not always. It is useful when there is tension or pain, but the basis is a physiotherapy plan.' },
        { q: 'Can the child do sport if their back hurts?', a: 'Usually yes, but load should be adjusted and movement quality corrected. Complete rest is rarely the best option.' },
        { q: 'When will we see the first result?', a: 'Often within 2–6 weeks if the plan is followed consistently. Longer-standing issues usually need a longer cycle.' },
        { q: 'Can an adolescent growth spurt worsen posture?', a: 'Yes. During rapid growth, mobility-strength balance often worsens and postural control temporarily drops.' },
        { q: 'Can a posture problem cause headaches?', a: 'Yes, especially when neck-shoulder tension and forward head position dominate.' },
        { q: 'When is an orthopaedic or neurology consultation necessary?', a: 'When there are red flags, clear progressive deformity, neurological symptoms or poor response to a conservative plan.' },
      ],

      specialistsTitle: 'Why parents choose FitKid',
      specialistsSubtitle: 'FitKid is a children and adolescent physiotherapy clinic in Vilnius, focused on a clear clinical plan and real functional outcomes.',
      specialistAgne: 'Agnė Juodytė',
      specialistAgneRole: 'paediatric physiotherapist, Vojta therapy practitioner',
      specialistKsenija: 'Ksenija Persijanova',
      specialistKsenijaRole: 'paediatric and adolescent physiotherapist',
      specialistRamune: 'Ramunė Nemeikaitė',
      specialistRamuneRole: 'therapeutic massage specialist, works only with infants, children and adolescents',

      relatedTitle: 'Related topics',
      related: [
        { href: '/vaiku-kineziterapija#nugaros-skausmai', label: 'Back & neck pain' },
        { href: '/vaiku-kineziterapija#skolioze', label: 'Scoliosis' },
        { href: '/vaiku-kineziterapija#ploksciapedyste', label: 'Flat feet' },
        { href: '/vaiku-kineziterapija#kreivos-kojos', label: 'Bow legs (X/O)' },
        { href: '/vaiku-kineziterapija#reabilitacija', label: 'Rehab after injury' },
      ],

      ctaTitle: 'Registration',
      ctaDesc: 'If you notice posture worsening, repeated back/neck pain or the child tiring quickly, book an assessment.',
      ctaRegister: 'Register for visit',
      ctaContact: 'Contact',
      ctaPhone: '+37066699676',
      ctaAddress: 'Address: Aludarių g. 7-43, Vilnius',

      medNote: 'This information is for informational purposes and does not replace individual medical consultation. If the condition worsens or danger signs appear, contact a doctor without delay.',
      lastUpdated: 'Last updated: 2026-02-22',
    },
  };

  const txt = pageText[currentLang];

  const specialists = [
    { name: txt.specialistAgne, role: txt.specialistAgneRole, img: '/specialists/agne.png', slug: 'agne-juodyte' },
    { name: txt.specialistKsenija, role: txt.specialistKsenijaRole, img: '/specialists/ksenija.png', slug: 'ksenija-persijanova' },
    { name: txt.specialistRamune, role: txt.specialistRamuneRole, img: '/specialists/ramune.png', slug: 'ramune-nemeikaite' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header translations={t} currentLang={currentLang} onLanguageChange={handleLanguageChange} />
      <main className="pt-20">
        {/* Hero - same image as Paslaugos Vaikų kineziterapija */}
        <section className="relative flex items-center bg-[#e8e6e3]" style={{ width: '100%', minHeight: '60vh', overflow: 'hidden' }}>
          <div className="absolute inset-0">
            <Image src="/images/hero/hero-vaiku-kineziterapija-mobile.png" alt={txt.heroTitle} fill priority quality={95} sizes="(max-width: 768px) 100vw, 1px" className="object-cover object-center md:hidden" style={{ filter: 'brightness(1.1) contrast(0.95) blur(8px)' }} />
            <Image src="/services/child-physiotherapy.jpg" alt={txt.heroTitle} fill priority quality={95} sizes="(max-width: 768px) 1px, 100vw" className="object-cover object-[center_40%] hidden md:block" style={{ filter: 'brightness(1.1) contrast(0.95) blur(3px)' }} />
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
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{txt.intro3}</p>
            <p className="text-lg text-gray-700 leading-relaxed">{txt.intro4}</p>
          </div>
        </section>

        {/* Quick answer */}
        <section className="py-12 bg-[#FFF8F3]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{txt.quickTitle}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">{txt.quickBody}</p>
            <p className="text-gray-700 font-medium mb-2">{currentLang === 'lt' ? 'Svarbiausi praktiniai principai:' : 'Key practical principles:'}</p>
            <ul className="space-y-2">
              {txt.quickList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#fb7825] mt-1">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What is poor posture */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{txt.whatIsTitle}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">{txt.whatIsIntro}</p>
            <ul className="space-y-2 mb-6">
              {txt.whatIsList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#54B6FC] mt-1">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 font-medium mb-2">{txt.whatIsModels}</p>
            <ul className="space-y-2 mb-4">
              {txt.whatIsModelsList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#fb7825] mt-1">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-blue-50 border-l-4 border-[#54B6FC] rounded-r-lg px-5 py-4">
              <p className="text-gray-800 leading-relaxed">{txt.whatIsNote}</p>
            </div>
          </div>
        </section>

        {/* Signs by age */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">{txt.ageSignsTitle}</h2>
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#54B6FC] mb-2">{txt.age1_3Title}</h3>
                <p className="text-gray-500 text-sm italic mb-4">{txt.age1_3Note}</p>
                <ul className="space-y-2 mb-4">
                  {txt.age1_3Signs.map((s, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{s}</span></li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600 italic">{txt.age1_3Norm}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#54B6FC] mb-2">{txt.age4_7Title}</h3>
                <p className="text-gray-500 text-sm italic mb-4">{txt.age4_7Note}</p>
                <ul className="space-y-2">
                  {txt.age4_7Signs.map((s, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{s}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#54B6FC] mb-4">{txt.age8_12Title}</h3>
                <ul className="space-y-2">
                  {txt.age8_12Signs.map((s, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{s}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#54B6FC] mb-4">{txt.age13_19Title}</h3>
                <ul className="space-y-2">
                  {txt.age13_19Signs.map((s, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{s}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why it develops */}
        <section className="py-16 bg-[#FFF8F3]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{txt.whyTitle}</h2>
            <ul className="space-y-2 mb-6">
              {txt.whyList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#fb7825] mt-1">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg px-5 py-4">
              <p className="text-gray-800 text-sm leading-relaxed">{txt.whoNote}</p>
            </div>
          </div>
        </section>

        {/* Red flags */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{txt.redFlagsTitle}</h2>
            <p className="text-gray-700 mb-4">{txt.redFlagsIntro}</p>
            <ul className="space-y-3 mb-4">
              {txt.redFlags.map((flag, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-red-50 border-l-4 border-red-400 rounded-r-lg px-5 py-3">
                  <span className="text-red-500 font-bold">!</span>
                  <span className="text-gray-800">{flag}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 italic text-sm">{txt.redFlagsNote}</p>
          </div>
        </section>

        {/* FitKid assessment */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">{txt.evalTitle}</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border-l-4 border-[#54B6FC]">
                <h3 className="text-xl font-bold text-gray-900 mb-2">1. {txt.evalStep1Title}</h3>
                <ul className="space-y-1">
                  {txt.evalStep1Items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600"><span className="text-[#54B6FC]">•</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-[#54B6FC]">
                <h3 className="text-xl font-bold text-gray-900 mb-2">2. {txt.evalStep2Title}</h3>
                <ul className="space-y-1">
                  {txt.evalStep2Items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600"><span className="text-[#54B6FC]">•</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-[#54B6FC]">
                <h3 className="text-xl font-bold text-gray-900 mb-2">3. {txt.evalStep3Title}</h3>
                <ul className="space-y-1">
                  {txt.evalStep3Items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600"><span className="text-[#54B6FC]">•</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{txt.treatmentTitle}</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#54B6FC] mb-2">{txt.treatmentPhysioTitle}</h3>
                <ul className="space-y-2 mb-4">
                  {txt.treatmentPhysioGoals.map((g, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{g}</span></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{txt.treatmentAgeTitle}</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• {txt.treatmentAge1}</li>
                  <li>• {txt.treatmentAge2}</li>
                  <li>• {txt.treatmentAge3}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{txt.treatmentDNSTitle}</h3>
                <p className="text-gray-700 text-sm">{txt.treatmentDNS}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{txt.treatmentVojtaTitle}</h3>
                <p className="text-gray-700 text-sm">{txt.treatmentVojta}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{txt.treatmentMassageTitle}</h3>
                <p className="text-gray-700 text-sm">{txt.treatmentMassage}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{txt.treatmentErgoTitle}</h3>
                <p className="text-gray-700 text-sm">{txt.treatmentErgo}</p>
              </div>
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

        {/* Home do / don't */}
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
            <div className="grid md:grid-cols-3 gap-8">
              {specialists.map((spec) => (
                <Link key={spec.slug} href={`/specialists/${spec.slug}`} className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image src={spec.img} alt={spec.name} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" style={{ objectPosition: 'center 10%' }} sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 90vw" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{spec.name}</h3>
                    <p className="text-sm font-semibold text-[#54B6FC]">{spec.role}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Testimonials translations={t} />

        {/* Related */}
        <section className="py-12 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">{txt.relatedTitle}</h2>
            <div className="flex flex-wrap justify-center gap-2 sm:flex-nowrap sm:justify-between">
              {txt.related.map((link) => (
                <Link key={link.label} href={link.href} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 hover:border-[#54B6FC] text-gray-700 hover:text-[#54B6FC] px-3 py-1.5 rounded-full text-xs font-medium transition-all hover:shadow-md whitespace-nowrap">
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
              <Link href="/registracija" className="inline-flex items-center space-x-2 bg-white hover:bg-gray-50 text-[#54B6FC] px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg">
                <span>{txt.ctaRegister}</span><ArrowRight className="w-5 h-5" />
              </Link>
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
