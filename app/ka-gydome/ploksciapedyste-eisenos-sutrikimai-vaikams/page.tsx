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

export default function PloksciapedysteEisenosSutrikimaiPage() {
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
      heroTitle: 'Plokščiapėdystė, pėdų pronacija ir eisenos sutrikimai vaikams bei paaugliams: požymiai ir ką daryti tėvams',
      heroSubtitle: 'Kas vaikų amžiuje laikoma norma, kada plokščiapėdystė tampa funkcine problema ir kaip FitKid padeda per kineziterapiją Vilniuje',
      heroNote: 'Ne kiekviena plokštesnė pėda reiškia patologiją – daugeliui vaikų lanksti plokščiapėdystė yra normali raidos variacija.',

      intro1: 'Plokščiapėdystė, pėdų pronacija ir įvairūs eisenos ypatumai yra viena dažniausių priežasčių, kodėl tėvai kreipiasi į vaikų kineziterapeutus. Dažniausiai klausimas būna labai praktiškas: ar tai normalus amžiaus etapas, ar jau problema, kurią reikia koreguoti.',
      intro2: 'Dalis pėdos ir eisenos pokyčių vaikystėje yra fiziologiniai. Pavyzdžiui, lanksti plokščiapėdystė mažiems vaikams dažnai yra normali raidos dalis ir be skausmo nereikalauja agresyvaus gydymo. Kita vertus, jei yra skausmas, greitas nuovargis, vienpusis „šlubavimas“, progresuojanti asimetrija ar ribotas judesys, būtina tiksli diagnostika.',
      intro3: 'Šiame puslapyje aiškiai paaiškiname: kas vaikų amžiuje laikoma norma; kada plokščiapėdystė ir pronacija tampa funkcine problema; kokie eisenos sutrikimai dažniausi; kada būtina skubi gydytojo konsultacija; kaip FitKid klinikoje Vilniuje padedame per kineziterapiją ir funkcinę korekciją.',

      quickTitle: 'Trumpas atsakymas tėvams',
      quickIntro: 'Ne kiekviena plokštesnė pėda reiškia patologiją. Daugeliui vaikų lanksti plokščiapėdystė yra normali raidos variacija, ypač jei:',
      quickNoTreatmentList: ['nėra skausmo', 'vaikas aktyvus', 'eisena funkcionali', 'pėdos lankas atsiranda atsistojus ant pirštų galų'],
      quickAssess: 'Vertinti būtina, jei:',
      quickAssessList: ['skauda pėdas, kulkšnis, blauzdas ar kelius', 'vaikas greitai pavargsta vaikščiodamas', 'dažnai griūna, klumpa, „velka“ pėdas', 'sutrikimas ryškesnis tik vienoje pusėje', 'pėda standi, judesys ribotas', 'atsiranda šlubavimas ar negalėjimas remtis koja'],

      whatTitle: 'Kas yra plokščiapėdystė, pronacija ir eisenos sutrikimai',
      flatTitle: 'Plokščiapėdystė',
      flatBody: 'Plokščiapėdystė reiškia, kad vidinis pėdos skliautas stovint sumažėjęs ar beveik nematomas. Vaikams dažniausiai pasitaiko lanksti plokščiapėdystė: stovint skliautas suplokštėja; atsisėdus ar atsistojus ant pirštų galų skliautas atsiranda. Tokiu atveju, jei nėra skausmo, dažniausiai pakanka stebėsenos ir funkcinio aktyvumo.',
      pronationTitle: 'Pėdų pronacija',
      pronationBody: 'Pronacija yra natūralus pėdos judesys, reikalingas amortizacijai. Problema atsiranda tada, kai pronacija yra per didelė, nevaldoma ir sukelia: pėdos „griuvimą“ į vidų; kulno ašies nukrypimą; eisenos nestabilumą; skausmą arba greitą nuovargį.',
      gaitTitle: 'Eisenos sutrikimai',
      gaitBody: 'Eisenos sutrikimai apima: į vidų krypstančias pėdas (intoeing); į išorę krypstančias pėdas (out-toeing); vaikščiojimą ant pirštų galų; šlubavimą; asimetrišką žingsnį; dažną klupinėjimą ar pusiausvyros stoką. Svarbu: dalis eisenos variacijų vaikystėje savaime mažėja augant, bet simptominiai ar progresuojantys atvejai turi būti vertinami.',

      ageSignsTitle: 'Požymiai pagal amžių',
      age1_3Title: '1–3 metai',
      age1_3Note: 'Šiuo laikotarpiu pėdos dažnai atrodo plokštesnės, tai gali būti normalu.',
      age1_3Calm: 'Kada stebėti ramiau:',
      age1_3CalmList: ['pėdos lanksčios', 'vaikas juda aktyviai', 'nėra skausmo', 'nėra vienpusio šlubavimo'],
      age1_3Seek: 'Kada kreiptis:',
      age1_3SeekList: ['nuolatinis vaikščiojimas ant pirštų galų po 2 metų', 'vaikas neatsistoja pilna pėda', 'ryškus vienpusis pėdos ar eisenos skirtumas', 'dažnas kritimas su aiškiu judesio nevaldymu', 'skausmo signalai ar vengimas vaikščioti'],
      age4_7Title: '4–7 metai',
      age4_7Note: 'Šiame amžiuje dažnai matosi aiškesnis eisenos modelis.',
      age4_7Signs: ['greitas kojų nuovargis ilgesnio ėjimo metu', 'skausmas pėdose, kulkšnyse, blauzdose', '„nusidėvintys“ batai iš vidinės pusės', 'sunkiau dalyvauti aktyviuose žaidimuose', 'ryškus į vidų ar į išorę pasuktų pėdų modelis'],
      age4_7Note2: 'Dalis į vidų krypstančios eisenos atvejų gali koreguotis savaime iki mokyklinio amžiaus, bet su skausmu ar funkcijos ribojimu reikia vertinimo.',
      age8_12Title: '8–12 metai',
      age8_12Note: 'Didėja sporto ir mokyklinis krūvis, todėl funkcinės problemos išryškėja labiau.',
      age8_12Signs: ['pėdų ar kulnų skausmai po krūvio', 'kelių skausmas, susijęs su pėdos kontrole', 'sumažėjusi ištvermė bėgant', 'pasikartojantys čiurnos „pasisukimai“', 'nestabili atrama, ypač vienos kojos pratimų metu'],
      age13_19Title: '13–19 metai',
      age13_19Signs: ['skausmas pėdos skliaute, kulne, Achilo srityje', 'kelio ar klubo diskomfortas dėl pėdos biomechanikos', 'nuolatinė pronacija bėgant ar šokinėjant', 'sportinių traumų pasikartojimas', 'skausmas po ilgo stovėjimo ar ėjimo'],

      normalTitle: 'Kas yra normalu, o kas jau nebe',
      normalOften: 'Dažnai normalu:',
      normalList: ['lanksti plokščiapėdystė be skausmo', 'lengvas į vidų ar į išorę krypstančios eisenos variantas ankstyvame amžiuje', 'trumpi vaikščiojimo ant pirštų galų epizodai mokantis vaikščioti'],
      assessTitle: 'Reikia įvertinti:',
      assessList: ['skausmas, kuris kartojasi', 'vienpusis ryškus sutrikimas', 'standi, nelanksti pėda', 'nepavyksta atsistoti pilna pėda', 'šlubavimas ar negalėjimas remtis', 'neurologiniai simptomai (silpnumas, jutimų pokyčiai, regresas)'],

      whyNotIgnoreTitle: 'Kodėl šių problemų nereikėtų ignoruoti',
      whyNotIgnoreList: ['čiurnos nestabilumas', 'kelio perkrovos', 'klubo ir dubens kompensacijos', 'juosmens skausmai', 'prastesnė sportinė ištvermė', 'didesnė pasikartojančių traumų rizika'],
      whyNotIgnoreGoals: 'Tikslas nėra „ideali pėdos forma“. Tikslas yra: skausmo kontrolė; stabili atrama; kokybiškas judesys; normalus dalyvavimas žaidime, mokykloje ir sporte.',

      causesTitle: 'Dažniausios priežastys',
      causesList: ['natūralūs raidos ypatumai (lankstūs audiniai, augimas)', 'raumenų disbalansas ir silpnesnė pėdos/klubo kontrolė', 'per didelis arba staigus fizinio krūvio šuolis', 'netinkama judesio technika bėgant, šokant, keičiant kryptį', 'neuromuskuliniai ypatumai (rečiau)', 'standžios pėdos būklės (pvz., tarsalinė koalicija) paauglystėje', 'netinkamas avalynės pasirinkimas konkrečiai veiklai'],

      redFlagsTitle: 'Kada būtina kreiptis skubiai',
      redFlags: ['vaikas staiga nebegali remtis koja', 'atsiranda ryškus šlubavimas', 'pėda ar sąnarys paraudęs, karštas, patinęs', 'yra karščiavimas ir kojos skausmas', 'naktinis progresuojantis skausmas', 'po traumos matoma deformacija', 'atsiranda neurologiniai simptomai (silpnumas, tirpimas, regresas)'],
      redFlagsPlan: 'Planinei konsultacijai kreipkitės, jei simptomai tęsiasi ilgiau nei 2–4 savaites ar kartojasi cikliškai.',

      evalTitle: 'Kaip vyksta įvertinimas FitKid klinikoje',
      eval1Title: '1. Pokalbis su tėvais ir vaiku',
      eval1Items: ['kur ir kada skauda', 'kada simptomai stiprėja', 'kiek vaikas juda ir sportuoja', 'avalynės, dienos režimo, augimo ir traumų istoriją'],
      eval2Title: '2. Funkcinis vertinimas',
      eval2Items: ['pėdos tipą (lanksti ar standi)', 'kulno ir čiurnos ašį', 'pėdos skliauto elgesį judesyje', 'eiseną (ėjimas, bėgimas, krypties keitimas)', 'pusiausvyrą ir vienos kojos kontrolę', 'klubų, kelių ir liemens įtaką pėdos apkrovai'],
      eval3Title: '3. Individualus planas',
      eval3Items: ['aiškią funkcinę išvadą', 'konkrečius tikslus', 'pratimų planą namams', 'rekomendacijas dėl krūvio ir avalynės', 'jei reikia, siuntimą ortopedo konsultacijai'],

      physioTitle: 'Kaip padeda kineziterapija',
      physio1Title: 'Judesio kokybės korekcija',
      physio1Items: ['pėdos ir čiurnos kontrole', 'blauzdos ir klubo stabilumas', 'žingsnio biomechanika', 'simetrija ir koordinacija'],
      physio2Title: 'Stiprinimas ir stabilizacija',
      physio2Items: ['pėdos vidinių raumenų aktyvinimas', 'blauzdos ir Achilo komplekso darbas', 'sėdmenų ir liemens stabilizacija', 'vienos kojos pusiausvyra', 'funkciniai šuolio ir bėgimo elementai (pagal amžių)'],
      physio3Title: 'Mobilumas',
      physio3Items: ['čiurnos dorsifleksija', 'blauzdos raumenų lankstumas', 'pėdos sąnarių judrumas', 'klubų mobilumo-kontrolės balansas'],
      physio4Title: 'Eisenos ir bėgimo pertreniravimas',
      physio4Items: ['efektyvesnis žingsnio modelis', 'saugesnė atrama', 'geresnė apkrovos kontrolė sporte'],
      physio5Title: 'Krūvio planavimas',
      physio5Items: ['treniruočių intensyvumo didinimas', 'poilsio ir atsistatymo santykis', 'grįžimas po skausmo epizodo', 'prevencinis režimas sezono metu'],

      massageTitle: 'Kokia masažo vieta šiame plane',
      massageBody: 'Masažas naudojamas kaip papildoma priemonė: kai ryški blauzdos, pado ar Achilo įtampa; kai reikia sumažinti diskomfortą; kai reikia geresnės tolerancijos aktyviems pratimams. Svarbu: vien masažas nekeičia ilgalaikės pėdos kontrolės; ilgalaikis rezultatas pasiekiamas per aktyvią kineziterapiją.',

      insolesTitle: 'Vidpadžiai ir avalynė: kada tikrai reikia',
      insolesIntro: 'Praktinis principas: neskausminga lanksti plokščiapėdystė dažniausiai nereikalauja „privalomų“ individualių vidpadžių; jei yra skausmas ar ryškus funkcijos ribojimas, vidpadžiai gali padėti simptomų kontrolei; vidpadžiai parenkami kaip plano dalis, ne kaip vienintelis gydymas.',
      insolesShoes: 'Avalynė: patogi, pagal pėdos plotį; atitinkanti veiklą (kasdienė vs sportinė); ne per kieta ir ne per „minkšta be kontrolės“; keičiama laiku pagal nusidėvėjimą ir augimą.',

      visitsTitle: 'Kiek vizitų dažniausiai prireikia',
      visits: [
        { label: '1 vizitas', desc: 'išsamus funkcinis įvertinimas ir planas' },
        { label: '4–6 vizitai', desc: 'pirmi stabilūs pokyčiai lengvesniais atvejais' },
        { label: '8–12 vizitų', desc: 'skausmas, sporto perkrova ar ryškesni eisenos sutrikimai' },
        { label: 'Palaikymas', desc: 'pagal sporto sezoną, augimo šuolius ir simptomų dinamiką' },
      ],
      visitsCriteria: 'Progreso kriterijai: mažesnis skausmas; stabilesnė atrama; geresnė pusiausvyra; mažiau klupinėjimo; geresnė ištvermė kasdienėje veikloje ir sporte.',

      homeTitle: 'Ką tėvai gali daryti namuose',
      homeDo: ['užtikrinti reguliarų judėjimą pagal amžių', 'riboti ilgą pasyvų sėdėjimą be pertraukų', 'daryti trumpą namų pratimų rutiną (10–15 min.)', 'stebėti avalynės nusidėvėjimą ir tinkamą dydį', 'po krūvio įtraukti atsistatymo režimą', 'fiksuoti simptomų dienyną (kada, kur, po kokio krūvio skauda)'],
      homeDont: ['„diagnozuoti“ pagal vieną interneto požymį', 'pradėti intensyvų sportą per skausmą', 'ilgai laukti, kai simptomai didėja', 'naudoti pasyvias priemones kaip vienintelį sprendimą'],

      faqTitle: 'Dažniausiai užduodami klausimai (FAQ)',
      faq: [
        { q: 'Ar plokščiapėdystė vaikams visada yra liga?', a: 'Ne. Dažnai tai normali raidos variacija, ypač jei pėda lanksti ir neskauda.' },
        { q: 'Ar visiems reikia individualių vidpadžių?', a: 'Ne. Be skausmo ir funkcijos ribojimo jų dažniausiai nereikia. Esant simptomams, jie gali būti naudingi kaip dalis plano.' },
        { q: 'Ar pronacija visada blogai?', a: 'Ne. Pronacija yra normalus judesys. Problema yra per didelė, nevaldoma pronacija su simptomais.' },
        { q: 'Ar vaikščiojimas ant pirštų galų visada pavojingas?', a: 'Mokantis vaikščioti tai gali būti normalu. Jei tęsiasi po 2 metų ar neįmanoma atsistoti pilna pėda, reikia įvertinimo.' },
        { q: 'Ar į vidų krypstanti eisena savaime praeina?', a: 'Daliai vaikų taip, ypač ankstyvame amžiuje. Jei yra skausmas, šlubavimas ar progresija, reikia konsultacijos.' },
        { q: 'Kada įtarti standžią pėdą?', a: 'Kai pėda skausminga, nelanksti, skliautas neatsiranda ant pirštų galų ir judesiai riboti.' },
        { q: 'Ar kineziterapija gali padėti sumažinti kelio skausmą, jei problema pėdoje?', a: 'Taip. Dažnai koreguojant pėdos-čiurnos-klubo grandinę mažėja kelio perkrova.' },
        { q: 'Ar reikia stabdyti sportą?', a: 'Dažniausiai ne. Krūvį reikia pritaikyti, o ne visiškai nutraukti, nebent taip nurodo gydytojas.' },
        { q: 'Kiek laiko reikia iki pagerėjimo?', a: 'Pirmi pokyčiai dažnai matomi per 2-6 savaites, jei planas vykdomas nuosekliai.' },
        { q: 'Kada būtina ortopedo konsultacija?', a: 'Kai yra skausminga standi pėda, vienpusis ryškus sutrikimas, progresuojanti deformacija ar nepakankamas atsakas į konservatyvų planą.' },
      ],

      specialistsTitle: 'Kodėl tėvai renkasi FitKid',
      specialistsSubtitle: 'FitKid yra vaikų ir paauglių kineziterapijos klinika Vilniuje, orientuota į aiškų funkcinį planą ir pamatuojamą progresą.',
      specialistAgne: 'Agnė Juodytė',
      specialistAgneRole: 'vaikų kineziterapeutė, Vojta terapijos praktikė',
      specialistKsenija: 'Ksenija Persijanova',
      specialistKsenijaRole: 'vaikų ir paauglių kineziterapeutė',
      specialistRamune: 'Ramunė Nemeikaitė',
      specialistRamuneRole: 'gydomojo masažo specialistė, dirba su kūdikiais, vaikais ir paaugliais',

      relatedTitle: 'Susijusios temos',
      related: [
        { href: '/ka-gydome/netaisyklinga-laikysena-vaikams', label: 'Netaisyklinga laikysena' },
        { href: '/ka-gydome/nugaros-kaklo-peciu-skausmai-vaikams', label: 'Nugaros, kaklo ir pečių skausmai' },
        { href: '/ka-gydome/skolioze-vaikams', label: 'Skoliozė' },
        { href: '/ka-gydome/kreivos-kojos-vaikams', label: 'Kreivos kojos (X/O)' },
        { href: '/ka-gydome/reabilitacija-po-traumu-vaikams', label: 'Reabilitacija po traumų' },
      ],

      ctaTitle: 'Registracija',
      ctaDesc: 'Jei vaikas ar paauglys skundžiasi pėdų skausmu, greitu nuovargiu ar matote eisenos sutrikimą, registruokitės į išsamų vertinimą.',
      ctaRegister: 'Registruotis vizitui',
      ctaPhone: '+37066699676',
      ctaAddress: 'Adresas: Aludarių g. 7-43, Vilnius',

      medNote: 'Ši informacija yra informacinio pobūdžio ir nepakeičia individualios gydytojo konsultacijos. Jei būklė blogėja arba atsiranda pavojaus požymių, nedelsdami kreipkitės į gydytoją.',
    },
    en: {
      heroTitle: 'Flat feet, foot pronation and gait disorders in children and adolescents: signs and what parents should do',
      heroSubtitle: 'What is considered normal at children\'s age, when flat feet become a functional problem, and how FitKid helps through physiotherapy in Vilnius',
      heroNote: 'Not every flatter foot means pathology – for many children flexible flat feet are a normal developmental variation.',

      intro1: 'Flat feet, foot pronation and various gait patterns are one of the most common reasons parents turn to paediatric physiotherapists. The question is usually very practical: is this a normal age stage or already a problem that needs correction.',
      intro2: 'Some foot and gait changes in childhood are physiological. For example, flexible flat feet in young children are often a normal part of development and do not require aggressive treatment when there is no pain. On the other hand, if there is pain, quick fatigue, one-sided "limping", progressing asymmetry or limited movement, accurate diagnosis is needed.',
      intro3: 'On this page we clearly explain: what is considered normal at children\'s age; when flat feet and pronation become a functional problem; which gait disorders are most common; when urgent medical consultation is needed; how FitKid clinic in Vilnius helps through physiotherapy and functional correction.',

      quickTitle: 'Short answer for parents',
      quickIntro: 'Not every flatter foot means pathology. For many children flexible flat feet are a normal developmental variation, especially if:',
      quickNoTreatmentList: ['there is no pain', 'the child is active', 'gait is functional', 'the foot arch appears when standing on tiptoe'],
      quickAssess: 'Assessment is needed if:',
      quickAssessList: ['feet, ankles, shins or knees hurt', 'the child tires quickly when walking', 'frequent stumbling, tripping, "dragging" feet', 'the problem is clearly one-sided', 'the foot is stiff, movement limited', 'limping or inability to bear weight appears'],

      whatTitle: 'What are flat feet, pronation and gait disorders',
      flatTitle: 'Flat feet',
      flatBody: 'Flat feet mean the inner arch of the foot when standing is reduced or barely visible. In children the most common is flexible flat feet: when standing the arch flattens; when sitting or on tiptoe the arch appears. In that case, if there is no pain, observation and functional activity are usually enough.',
      pronationTitle: 'Foot pronation',
      pronationBody: 'Pronation is a natural foot movement needed for shock absorption. The problem arises when pronation is excessive, uncontrolled and causes: the foot "collapsing" inward; heel axis deviation; gait instability; pain or quick fatigue.',
      gaitTitle: 'Gait disorders',
      gaitBody: 'Gait disorders include: feet turning inward (intoeing); feet turning outward (out-toeing); walking on tiptoes; limping; asymmetric step; frequent stumbling or balance problems. Important: some gait variations in childhood improve with growth on their own, but symptomatic or progressing cases need assessment.',

      ageSignsTitle: 'Signs by age',
      age1_3Title: '1–3 years',
      age1_3Note: 'At this stage feet often look flatter; this can be normal.',
      age1_3Calm: 'When to watch calmly:',
      age1_3CalmList: ['feet are flexible', 'child moves actively', 'no pain', 'no one-sided limping'],
      age1_3Seek: 'When to seek help:',
      age1_3SeekList: ['persistent tiptoe walking after 2 years', 'child does not stand with full foot', 'clear one-sided foot or gait difference', 'frequent falls with obvious movement control issues', 'pain signals or avoidance of walking'],
      age4_7Title: '4–7 years',
      age4_7Note: 'At this age a clearer gait pattern is often visible.',
      age4_7Signs: ['quick leg fatigue on longer walks', 'pain in feet, ankles, shins', 'shoes "worn" on the inner side', 'harder to join active play', 'clear inward or outward foot pattern'],
      age4_7Note2: 'Some intoeing cases can correct themselves by school age, but with pain or functional limitation assessment is needed.',
      age8_12Title: '8–12 years',
      age8_12Note: 'Sport and school load increase, so functional problems show more.',
      age8_12Signs: ['foot or heel pain after load', 'knee pain related to foot control', 'reduced endurance when running', 'repeated ankle "turns"', 'unstable support, especially in single-leg exercises'],
      age13_19Title: '13–19 years',
      age13_19Signs: ['pain in foot arch, heel, Achilles area', 'knee or hip discomfort due to foot biomechanics', 'persistent pronation when running or jumping', 'repeated sport injuries', 'pain after long standing or walking'],

      normalTitle: 'What is normal and what is not',
      normalOften: 'Often normal:',
      normalList: ['flexible flat feet without pain', 'mild intoeing or out-toeing variant in early age', 'short tiptoe-walking episodes when learning to walk'],
      assessTitle: 'Needs assessment:',
      assessList: ['recurring pain', 'clear one-sided problem', 'stiff, inflexible foot', 'cannot stand with full foot', 'limping or inability to bear weight', 'neurological symptoms (weakness, sensation changes, regression)'],

      whyNotIgnoreTitle: 'Why these problems should not be ignored',
      whyNotIgnoreList: ['ankle instability', 'knee overload', 'hip and pelvic compensations', 'low back pain', 'worse sporting endurance', 'higher risk of repeated injury'],
      whyNotIgnoreGoals: 'The goal is not "ideal foot shape". The goal is: pain control; stable support; quality movement; normal participation in play, school and sport.',

      causesTitle: 'Most common causes',
      causesList: ['natural developmental features (flexible tissues, growth)', 'muscle imbalance and weaker foot/hip control', 'too large or sudden jump in physical load', 'poor movement technique when running, jumping, changing direction', 'neuromuscular features (less often)', 'stiff foot conditions (e.g. tarsal coalition) in adolescence', 'unsuitable footwear for the activity'],

      redFlagsTitle: 'When to seek urgent help',
      redFlags: ['child suddenly cannot bear weight on the leg', 'clear limping appears', 'foot or joint is red, hot, swollen', 'fever and leg pain', 'night-time progressing pain', 'visible deformity after trauma', 'neurological symptoms (weakness, numbness, regression)'],
      redFlagsPlan: 'For a planned consultation, contact if symptoms last longer than 2–4 weeks or recur in cycles.',

      evalTitle: 'How assessment works at FitKid clinic',
      eval1Title: '1. Discussion with parents and child',
      eval1Items: ['where and when it hurts', 'when symptoms worsen', 'how much the child moves and does sport', 'footwear, daily routine, growth and injury history'],
      eval2Title: '2. Functional assessment',
      eval2Items: ['foot type (flexible or stiff)', 'heel and ankle alignment', 'arch behaviour in movement', 'gait (walking, running, change of direction)', 'balance and single-leg control', 'hip, knee and trunk influence on foot load'],
      eval3Title: '3. Individual plan',
      eval3Items: ['clear functional conclusion', 'concrete goals', 'exercise plan for home', 'recommendations on load and footwear', 'referral to orthopaedic consultation if needed'],

      physioTitle: 'How physiotherapy helps',
      physio1Title: 'Movement quality correction',
      physio1Items: ['foot and ankle control', 'shin and hip stability', 'step biomechanics', 'symmetry and coordination'],
      physio2Title: 'Strengthening and stabilisation',
      physio2Items: ['foot intrinsic muscle activation', 'shin and Achilles complex work', 'glute and trunk stabilisation', 'single-leg balance', 'functional jump and run elements (by age)'],
      physio3Title: 'Mobility',
      physio3Items: ['ankle dorsiflexion', 'shin muscle flexibility', 'foot joint mobility', 'hip mobility-control balance'],
      physio4Title: 'Gait and running retraining',
      physio4Items: ['more efficient step pattern', 'safer support', 'better load control in sport'],
      physio5Title: 'Load planning',
      physio5Items: ['gradual increase in training intensity', 'rest and recovery balance', 'return after pain episode', 'preventive regime during the season'],

      massageTitle: 'Role of massage in this plan',
      massageBody: 'Massage is used as an adjunct: when there is marked shin, sole or Achilles tension; when discomfort needs to be reduced; when better tolerance for active exercises is needed. Important: massage alone does not change long-term foot control; long-term results come from active physiotherapy.',

      insolesTitle: 'Insoles and footwear: when they are really needed',
      insolesIntro: 'Practical principle: painless flexible flat feet usually do not require "mandatory" custom insoles; if there is pain or clear functional limitation, insoles can help symptom control; insoles are chosen as part of the plan, not as the only treatment.',
      insolesShoes: 'Footwear: comfortable, suited to foot width; appropriate for activity (everyday vs sport); not too stiff and not "soft with no control"; replaced in time according to wear and growth.',

      visitsTitle: 'How many visits are usually needed',
      visits: [
        { label: '1 visit', desc: 'full functional assessment and plan' },
        { label: '4–6 visits', desc: 'first stable changes in lighter cases' },
        { label: '8–12 visits', desc: 'pain, sport overload or clearer gait disorders' },
        { label: 'Support', desc: 'according to sport season, growth spurts and symptom dynamics' },
      ],
      visitsCriteria: 'Progress criteria: less pain; more stable support; better balance; less stumbling; better endurance in daily activity and sport.',

      homeTitle: 'What parents can do at home',
      homeDo: ['ensure regular movement for age', 'limit long passive sitting without breaks', 'do a short home exercise routine (10–15 min)', 'monitor footwear wear and correct size', 'include recovery after load', 'keep a symptom diary (when, where, after what load it hurts)'],
      homeDont: ['"diagnose" from a single sign found online', 'start intense sport through pain', 'wait long when symptoms are increasing', 'use passive measures as the only solution'],

      faqTitle: 'Frequently asked questions (FAQ)',
      faq: [
        { q: 'Is flat feet in children always a disease?', a: 'No. Often it is a normal developmental variation, especially if the foot is flexible and not painful.' },
        { q: 'Does everyone need custom insoles?', a: 'No. Without pain and functional limitation they are usually not needed. With symptoms they can be useful as part of the plan.' },
        { q: 'Is pronation always bad?', a: 'No. Pronation is a normal movement. The problem is excessive, uncontrolled pronation with symptoms.' },
        { q: 'Is tiptoe walking always dangerous?', a: 'When learning to walk it can be normal. If it continues after 2 years or full-foot standing is not possible, assessment is needed.' },
        { q: 'Does intoeing go away on its own?', a: 'For some children yes, especially in early age. If there is pain, limping or progression, consultation is needed.' },
        { q: 'When to suspect stiff foot?', a: 'When the foot is painful, inflexible, the arch does not appear on tiptoe and movement is limited.' },
        { q: 'Can physiotherapy help reduce knee pain if the problem is in the foot?', a: 'Yes. Often by correcting the foot-ankle-hip chain, knee overload decreases.' },
        { q: 'Should sport be stopped?', a: 'Usually no. Load should be adapted, not fully stopped, unless the doctor advises otherwise.' },
        { q: 'How long until improvement?', a: 'First changes are often seen in 2–6 weeks if the plan is followed consistently.' },
        { q: 'When is orthopaedic consultation necessary?', a: 'When there is painful stiff foot, clear one-sided problem, progressing deformity or insufficient response to conservative plan.' },
      ],

      specialistsTitle: 'Why parents choose FitKid',
      specialistsSubtitle: 'FitKid is a children and adolescent physiotherapy clinic in Vilnius, focused on a clear functional plan and measurable progress.',
      specialistAgne: 'Agnė Juodytė',
      specialistAgneRole: 'paediatric physiotherapist, Vojta therapy practitioner',
      specialistKsenija: 'Ksenija Persijanova',
      specialistKsenijaRole: 'paediatric and adolescent physiotherapist',
      specialistRamune: 'Ramunė Nemeikaitė',
      specialistRamuneRole: 'therapeutic massage specialist, works with infants, children and adolescents',

      relatedTitle: 'Related topics',
      related: [
        { href: '/ka-gydome/netaisyklinga-laikysena-vaikams', label: 'Poor posture' },
        { href: '/ka-gydome/nugaros-kaklo-peciu-skausmai-vaikams', label: 'Back, neck and shoulder pain' },
        { href: '/ka-gydome/skolioze-vaikams', label: 'Scoliosis' },
        { href: '/ka-gydome/kreivos-kojos-vaikams', label: 'Bow legs (X/O)' },
        { href: '/ka-gydome/reabilitacija-po-traumu-vaikams', label: 'Rehabilitation after trauma' },
      ],

      ctaTitle: 'Registration',
      ctaDesc: 'If the child or adolescent complains of foot pain, quick fatigue or you notice a gait disorder, book a full assessment.',
      ctaRegister: 'Register for visit',
      ctaPhone: '+37066699676',
      ctaAddress: 'Address: Aludarių g. 7-43, Vilnius',

      medNote: 'This information is for informational purposes and does not replace individual medical consultation. If the condition worsens or danger signs appear, contact a doctor without delay.',
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

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{txt.intro1}</p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{txt.intro2}</p>
            <p className="text-lg text-gray-700 leading-relaxed">{txt.intro3}</p>
          </div>
        </section>

        <section className="py-12 bg-[#FFF8F3]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{txt.quickTitle}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-2">{txt.quickIntro}</p>
            <ul className="space-y-2 mb-4">
              {txt.quickNoTreatmentList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3"><span className="text-[#fb7825] mt-1">•</span><span className="text-gray-700">{item}</span></li>
              ))}
            </ul>
            <p className="text-gray-700 font-medium mb-2">{txt.quickAssess}</p>
            <ul className="space-y-2">
              {txt.quickAssessList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3"><span className="text-[#54B6FC] mt-1">•</span><span className="text-gray-700">{item}</span></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{txt.whatTitle}</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#54B6FC] mb-2">{txt.flatTitle}</h3>
                <p className="text-gray-700 leading-relaxed">{txt.flatBody}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#54B6FC] mb-2">{txt.pronationTitle}</h3>
                <p className="text-gray-700 leading-relaxed">{txt.pronationBody}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#54B6FC] mb-2">{txt.gaitTitle}</h3>
                <p className="text-gray-700 leading-relaxed">{txt.gaitBody}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">{txt.ageSignsTitle}</h2>
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#54B6FC] mb-2">{txt.age1_3Title}</h3>
                <p className="text-gray-500 text-sm italic mb-4">{txt.age1_3Note}</p>
                <p className="text-gray-700 font-medium mb-2">{txt.age1_3Calm}</p>
                <ul className="space-y-2 mb-4">
                  {txt.age1_3CalmList.map((s, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{s}</span></li>
                  ))}
                </ul>
                <p className="text-gray-700 font-medium mb-2">{txt.age1_3Seek}</p>
                <ul className="space-y-2">
                  {txt.age1_3SeekList.map((s, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{s}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#54B6FC] mb-2">{txt.age4_7Title}</h3>
                <p className="text-gray-500 text-sm italic mb-4">{txt.age4_7Note}</p>
                <ul className="space-y-2 mb-4">
                  {txt.age4_7Signs.map((s, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{s}</span></li>
                  ))}
                </ul>
                <p className="text-gray-600 text-sm italic">{txt.age4_7Note2}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#54B6FC] mb-2">{txt.age8_12Title}</h3>
                <p className="text-gray-500 text-sm italic mb-4">{txt.age8_12Note}</p>
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

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{txt.normalTitle}</h2>
            <p className="text-gray-700 font-medium mb-2">{txt.normalOften}</p>
            <ul className="space-y-2 mb-6">
              {txt.normalList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{item}</span></li>
              ))}
            </ul>
            <p className="text-gray-700 font-medium mb-2">{txt.assessTitle}</p>
            <ul className="space-y-2">
              {txt.assessList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2"><span className="text-[#fb7825]">•</span><span className="text-gray-700">{item}</span></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16 bg-[#FFF8F3]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{txt.whyNotIgnoreTitle}</h2>
            <ul className="space-y-2 mb-6">
              {txt.whyNotIgnoreList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3"><span className="text-[#fb7825] mt-1">•</span><span className="text-gray-700">{item}</span></li>
              ))}
            </ul>
            <p className="text-gray-700">{txt.whyNotIgnoreGoals}</p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{txt.causesTitle}</h2>
            <ul className="space-y-2">
              {txt.causesList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{item}</span></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{txt.redFlagsTitle}</h2>
            <ul className="space-y-3 mb-4">
              {txt.redFlags.map((flag, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-red-50 border-l-4 border-red-400 rounded-r-lg px-5 py-3">
                  <span className="text-red-500 font-bold">!</span>
                  <span className="text-gray-800">{flag}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 text-sm italic">{txt.redFlagsPlan}</p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{txt.evalTitle}</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border-l-4 border-[#54B6FC]">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{txt.eval1Title}</h3>
                <p className="text-gray-600 text-sm mb-2">{currentLang === 'lt' ? 'Aptariame:' : 'We discuss:'}</p>
                <ul className="space-y-1">
                  {txt.eval1Items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600"><span className="text-[#54B6FC]">•</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-[#54B6FC]">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{txt.eval2Title}</h3>
                <p className="text-gray-600 text-sm mb-2">{currentLang === 'lt' ? 'Vertiname:' : 'We assess:'}</p>
                <ul className="space-y-1">
                  {txt.eval2Items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600"><span className="text-[#54B6FC]">•</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-[#54B6FC]">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{txt.eval3Title}</h3>
                <p className="text-gray-600 text-sm mb-2">{currentLang === 'lt' ? 'Pateikiame:' : 'We provide:'}</p>
                <ul className="space-y-1">
                  {txt.eval3Items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600"><span className="text-[#54B6FC]">•</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{txt.physioTitle}</h2>
            <div className="space-y-6">
              {[
                { title: txt.physio1Title, items: txt.physio1Items },
                { title: txt.physio2Title, items: txt.physio2Items },
                { title: txt.physio3Title, items: txt.physio3Items },
                { title: txt.physio4Title, items: txt.physio4Items },
                { title: txt.physio5Title, items: txt.physio5Items },
              ].map((block, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-[#54B6FC] mb-2">{block.title}</h3>
                  <ul className="space-y-2">
                    {block.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{item}</span></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{txt.massageTitle}</h2>
            <p className="text-gray-700 leading-relaxed">{txt.massageBody}</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{txt.insolesTitle}</h2>
            <p className="text-gray-700 mb-4">{txt.insolesIntro}</p>
            <p className="text-gray-700">{txt.insolesShoes}</p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{txt.visitsTitle}</h2>
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
              {txt.visits.map((row, idx) => (
                <div key={idx} className={`flex items-center gap-4 px-6 py-4 ${idx !== txt.visits.length - 1 ? 'border-b border-gray-200' : ''}`}>
                  <span className="font-bold text-[#54B6FC] w-32 flex-shrink-0">{row.label}</span>
                  <span className="text-gray-700">{row.desc}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-sm mt-4">{txt.visitsCriteria}</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">{txt.homeTitle}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-4">✓ {currentLang === 'lt' ? 'Kasdieniai žingsniai' : 'Daily steps'}</h3>
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
                <h3 className="text-xl font-bold text-red-600 mb-4">✗ {currentLang === 'lt' ? 'Ko vengti' : 'Avoid'}</h3>
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

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{txt.specialistsTitle}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{txt.specialistsSubtitle}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {specialists.map((spec) => (
                <Link key={spec.slug} href={`/specialists/${spec.slug}`} className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
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
