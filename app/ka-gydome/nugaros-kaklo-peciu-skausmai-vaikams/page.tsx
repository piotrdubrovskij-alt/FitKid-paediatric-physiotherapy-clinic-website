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

export default function NugarosKakloPeciuSkausmaiPage() {
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
      heroTitle: 'Nugaros, kaklo ir pečių skausmai vaikams ir paaugliams: požymiai ir ką daryti tėvams',
      heroSubtitle: 'Kokie simptomai dažniausi, raudoni signalai ir kaip FitKid vertina bei gydo skausmo priežastis',
      heroNote: 'Daugeliu atvejų tai funkcinės, koreguojamos problemos. Tikslingas vertinimas leidžia atskirti, kur užtenka koreguoti įpročius, o kur reikia medicininės diagnostikos.',

      intro1: 'Nugaros, kaklo ir pečių skausmai vaikams nebėra reta tema. Tėvai vis dažniau pastebi, kad vaikas grįžta iš mokyklos įsitempęs, paauglys skundžiasi kaklo skausmu po ilgo mokymosi ar ekranų laiko, sportuojantis vaikas jaučia pasikartojantį diskomfortą tarp menčių arba juosmens srityje.',
      intro2: 'Daugeliu atvejų tai yra funkcinės, koreguojamos problemos, susijusios su krūviu, judesio kokybe ir raumenų kontrole. Tačiau daliai vaikų skausmas gali būti signalas apie būklę, kuriai reikia gydytojo ištyrimo.',
      intro3: 'Svarbiausias principas tėvams: neignoruoti pasikartojančio ar progresuojančio skausmo, bet ir nepanikuoti dėl kiekvieno epizodo. Tikslingas vertinimas leidžia atskirti, kur užtenka koreguoti įpročius ir judesį, o kur reikalinga papildoma medicininė diagnostika.',
      intro4: 'Šiame puslapyje aiškiai paaiškiname: kokie simptomai dažniausi skirtingose amžiaus grupėse; kokie „raudoni signalai“ reikalauja skubios konsultacijos; kaip FitKid klinikoje Vilniuje vertiname skausmo priežastis; kaip kineziterapija ir masažas padeda sumažinti skausmą ir atkurti funkciją.',

      quickTitle: 'Trumpas atsakymas tėvams',
      quickBody: 'Vaikų ir paauglių nugaros, kaklo bei pečių skausmai dažniausiai susiję su: ilgu sėdėjimu; mažu fiziniu aktyvumu arba staigiai padidėjusiu krūviu; raumenų disbalansu; netinkama judesio technika; greitais augimo pokyčiais paauglystėje.',
      quickList: ['individualią kineziterapiją', 'krūvio ir režimo korekciją', 'tikslinę jėgos bei mobilumo programą', 'ergonomikos ir kasdienių įpročių keitimą'],
      quickNote: 'Kai yra neurologiniai, sisteminiai ar naktiniai simptomai, pirmiausia reikalinga gydytojo apžiūra.',

      normalTitle: 'Ką laikome „normalu“, o ką – rizikos signalu',
      normalIntro: 'Ne kiekvienas skausmas reiškia rimtą patologiją. Vaikui ar paaugliui po intensyvesnės dienos gali atsirasti trumpalaikė raumenų įtampa. Tai dažniausiai:',
      normalList: ['susiję su konkrečiu krūviu', 'mažėja pailsėjus', 'nekliudo miegui', 'neturi neurologinių simptomų'],
      riskTitle: 'Rizikos signalai:',
      riskList: ['skausmas stiprėja savaitėmis', 'skausmas pažadina naktį', 'atsiranda rankų ar kojų silpnumas, tirpimas', 'keičiasi eisena, koordinacija', 'skausmas kartu su karščiavimu, svorio kritimu, bendru silpnumu'],
      riskNote: 'Tokiais atvejais būtinas greitesnis medicininis ištyrimas.',

      ageSignsTitle: 'Požymiai pagal amžių',
      age1_4Title: '1–4 metai',
      age1_4Note: 'Šiame amžiuje lėtinis nugaros ar kaklo skausmas nėra „tipinis“. Jei mažas vaikas dažnai skundžiasi skausmu, vertinti reikia atidžiau.',
      age1_4Signs: ['vaikas vengia aktyvaus judėjimo', 'nenori bėgti, šokinėti, lipti', 'dažnai prašo nešti', 'ryškus dirglumas keičiant padėtį', 'asimetriška laikysena ar judėjimas'],
      age1_4Note2: 'Jei simptomai kartojasi, verta neatidėlioti konsultacijos.',
      age5_9Title: '5–9 metai',
      age5_9Signs: ['„skauda kaklą po pamokų“', '„pavargsta nugara sėdint“', 'pečių juostos įtampa', 'diskomfortas po ilgesnio rašymo ar darbo prie stalo'],
      age10_14Title: '10–14 metai',
      age10_14Signs: ['tarpumentės ar juosmens skausmas po mokyklos', 'kaklo skausmas su galvos skausmais', 'ryškesnė raumenų įtampa vakare', 'skausmas po intensyvesnių treniruočių', 'judesio technikos blogėjimas augimo periodu'],
      age15_19Title: '15–19 metai',
      age15_19Signs: ['pasikartojantis kaklo ir pečių skausmas', '„įtempta“ viršutinė nugaros dalis', 'juosmens skausmas po sėdėjimo ar sporto', 'sumažėjusi ištvermė', 'skausmas, trukdantis treniruotėms ar koncentracijai'],

      causesTitle: 'Dažniausios priežastys',
      causes1Title: 'Funkciniai raumenų ir judesio sutrikimai',
      causes1List: ['liemens stabilumo stoka', 'mentės kontrolės trūkumas', 'klubų ir krūtinės ląstos mobilumo ribotumas', 'kompensaciniai judesio modeliai'],
      causes2Title: 'Perkrova sporte',
      causes2List: ['per didelis krūvio šuolis', 'per mažas atsistatymas', 'vienpusiai judesiai be kompensuojančio stiprinimo', 'technikos klaidos'],
      causes3Title: 'Ilgas sėdėjimas ir statinės padėtys',
      causes3Body: 'Mokykla + namų darbai + ekranai lemia ilgą buvimą vienoje pozoje. Problema dažniausiai ne „viena bloga poza“, o mažas padėčių kintamumas ir per retas judėjimas.',
      causes4Title: 'Ergonomikos klaidos',
      causes4List: ['netinkamas stalo/kėdės aukštis', 'monitorius per žemai', 'įprotis dirbti susikūprinus', 'kuprinės svoris ir nešiojimo būdas'],
      causes5Title: 'Rečiau – struktūrinės ar medicininės priežastys',
      causes5List: ['spondilolizė', 'disko patologija', 'uždegiminės ar infekcinės būklės', 'navikiniai procesai', 'kitos ortopedinės ar neurologinės būklės'],
      causes5Note: 'Būtent todėl svarbus klinikinis vertinimas ir „raudonų signalų“ patikra.',

      redFlagsTitle: 'Kada būtina kreiptis skubiai',
      redFlags: ['naktinis stiprus skausmas, kuris pažadina iš miego', 'progresuojantis neurologinis simptomas (silpnumas, tirpimas, jutimų pokytis)', 'skausmas po traumos su judėjimo apribojimu', 'karščiavimas, bendras silpnumas, nepaaiškinamas svorio kritimas', 'eisenos sutrikimas, koordinacijos pablogėjimas', 'šlapinimosi ar tuštinimosi kontrolės pokyčiai', 'ryškus, greitai didėjantis stuburo asimetrijos vaizdas'],
      redFlagsNote: 'Jei šių požymių nėra, bet skausmas kartojasi >2–4 savaites, verta planinė kineziterapinė ir gydytojo konsultacija.',

      evalTitle: 'Kaip vyksta įvertinimas FitKid klinikoje',
      eval1Title: 'Pokalbis su tėvais ir vaiku',
      eval1Items: ['kada ir kokiose situacijose skauda', 'kas palengvina, kas pablogina', 'mokyklos, sporto, miego ir dienos režimą', 'buvusias traumas', 'augimo šuolio periodus', 'ar yra raudonų signalų'],
      eval2Title: 'Funkcinis testavimas',
      eval2Items: ['laikyseną ir judesio kokybę', 'kaklo, pečių juostos, krūtinės ląstos ir juosmens mobilumą', 'liemens ir mentės stabilizaciją', 'klubų ir apatinių galūnių įtaką nugaros apkrovai', 'kvėpavimo modelį', 'sportui būdingų judesių techniką (jei aktualu)'],
      eval3Title: 'Individualus planas',
      eval3Items: ['aiškų paaiškinimą, kas palaiko skausmą', 'konkretų terapijos planą etapais', 'namų pratimų programą', 'mokyklos/sporto krūvio rekomendacijas', 'progreso kriterijus ir kontrolės terminą'],

      physioTitle: 'Kaip padeda kineziterapija',
      physioGoalsTitle: 'Skausmo mažinimas ir funkcijos grąžinimas',
      physioGoalsList: ['sumažinti perkrautų zonų įtampą', 'atkurti judesio amplitudes', 'pagerinti liemens ir mentės kontrolę', 'sustiprinti silpnas grandis', 'sugrąžinti saugų aktyvumą'],
      physioStrengthTitle: 'Jėgos ir stabilizacijos programa',
      physioStrengthList: ['liemens stabilizacija', 'sėdmenų ir klubų kontrolė', 'mentės stabilizatoriai', 'kaklo giliųjų lenkiamųjų aktyvavimas', 'funkciniai pratimai pagal amžių'],
      physioMobilityTitle: 'Mobilumo ir audinių darbas',
      physioMobilityList: ['krūtinės ląstos mobilumas', 'pečių juostos judesys', 'klubų amplitudės', 'minkštųjų audinių įtampa'],
      physioLoadTitle: 'Krūvio valdymas',
      physioLoadList: ['palaipsniui didinti krūvį', 'negrįžti į pilną režimą per skausmą', 'planuoti atsistatymo dienas', 'stebėti miego ir streso įtaką'],
      physioSportTitle: 'Grįžimas į sportą',
      physioSportList: ['skausmo kontrolė kasdienybėje', 'bazinė jėga ir stabilumas', 'sportui specifinis paruošimas', 'pilnas grįžimas su prevenciniu planu'],

      massageTitle: 'Kaip masažas padeda šioje temoje',
      massageBody: 'Masažas yra papildoma priemonė, ypač kai: ryški kaklo ir pečių juostos įtampa; raumenų nuovargis po krūvio; padidėjęs skausmo jautrumas; sunku toleruoti aktyvesnius pratimus pradžioje. Masažo nauda: mažėja įtampa; gerėja komfortas; lengviau įsitraukti į aktyvią kineziterapiją. Svarbu: vien masažas be aktyvios programos dažniausiai neduoda ilgalaikio rezultato.',

      visitsTitle: 'Kiek vizitų dažniausiai prireikia',
      visitsNote: 'Priklauso nuo simptomų trukmės, amžiaus, krūvio ir namų plano laikymosi.',
      visits: [
        { label: '1 vizitas', desc: 'išsamus įvertinimas ir planas' },
        { label: '4–6 vizitai', desc: 'pirmi stabilūs pokyčiai lengvesniais atvejais' },
        { label: '8–12 vizitų', desc: 'kai skausmas ilgalaikis, yra sporto perkrova ar ryškios kompensacijos' },
        { label: 'Palaikymas', desc: 'periodiškai pagal sporto sezoną ar mokyklinį krūvį' },
      ],
      visitsCriteria: 'Progreso kriterijai: mažesnis skausmo dažnis ir intensyvumas; geresnė ištvermė; geresnė judesio kokybė; mažiau simptomų po mokyklos ar sporto; grįžimas į įprastą aktyvumą be paūmėjimų.',

      homeTitle: 'Ką tėvai gali daryti namuose',
      homeDo: ['kas 30–45 min. sėdėjimo daryti 2–5 min. aktyvią pertrauką', 'užtikrinti kasdienį fizinį aktyvumą pagal amžių', 'stebėti miego režimą ir atsistatymą', 'riboti ilgus nepertraukiamus ekranų blokus', 'įtraukti trumpą namų pratimų rutiną', 'peržiūrėti darbo vietos ergonomiką', 'stebėti kuprinės svorį ir nešiojimo būdą (dviem petnešomis, simetriškai)'],
      homeDont: ['visiško aktyvumo nutraukimo ilgam laikui (nebent gydytojas nurodė)', '„perkentėti“ skausmą sporte', 'atsitiktinių pratimų be vertinimo', 'vien pasyvių procedūrų be judesio korekcijos'],

      faqTitle: 'Dažniausiai užduodami klausimai (FAQ)',
      faq: [
        { q: 'Ar vaikų nugaros skausmas visada pavojingas?', a: 'Ne. Dauguma atvejų yra funkciniai ir koreguojami. Pavojų rodo raudoni signalai: naktinis skausmas, neurologiniai simptomai, sisteminiai požymiai.' },
        { q: 'Ar ilgas sėdėjimas tikrai turi įtakos?', a: 'Taip. Dažniau problemą sukelia ne viena poza, o ilgas nejudrumas ir mažas padėčių kintamumas.' },
        { q: 'Ar kuprinė sukelia skoliozę?', a: 'Ne, bet per sunki ar netinkamai nešiojama kuprinė gali didinti kaklo, pečių ir nugaros skausmą.' },
        { q: 'Ar masažas vienas išspręs problemą?', a: 'Dažniausiai ne. Ilgalaikiam rezultatui reikalinga aktyvi kineziterapija ir įpročių korekcija.' },
        { q: 'Ar galima sportuoti, jei skauda?', a: 'Dažniausiai galima, bet su adaptuotu krūviu ir aiškiu planu. Skausmo ignoruoti nereikia.' },
        { q: 'Kiek laiko užtrunka pagerėjimas?', a: 'Lengvesniais atvejais pirmi pokyčiai dažnai per 2–6 savaites. Ilgesnėms problemoms reikia nuoseklesnio plano.' },
        { q: 'Ar paauglystėje skausmas dažnėja?', a: 'Taip, dažnai dėl augimo šuolio, didesnio krūvio ir mažesnio atsistatymo.' },
        { q: 'Kada reikia vaizdinių tyrimų?', a: 'Ne visada. Tyrimų poreikį lemia klinika ir raudoni signalai, sprendžia gydytojas.' },
      ],

      specialistsTitle: 'Kodėl tėvai renkasi FitKid',
      specialistsSubtitle: 'FitKid yra vaikų ir paauglių kineziterapijos klinika Vilniuje, orientuota į aiškų, praktišką planą ir matomą funkcinį progresą.',
      specialistAgne: 'Agnė Juodytė',
      specialistAgneRole: 'vaikų kineziterapeutė, Vojta terapijos praktikė',
      specialistKsenija: 'Ksenija Persijanova',
      specialistKsenijaRole: 'vaikų ir paauglių kineziterapeutė',
      specialistRamune: 'Ramunė Nemeikaitė',
      specialistRamuneRole: 'gydomojo masažo specialistė, dirba su kūdikiais, vaikais ir paaugliais',

      relatedTitle: 'Susijusios temos',
      related: [
        { href: '/ka-gydome/netaisyklinga-laikysena-vaikams', label: 'Netaisyklinga laikysena' },
        { href: '/ka-gydome/skolioze-vaikams', label: 'Skoliozė ir kiti stuburo iškrypimai' },
        { href: '/vaiku-kineziterapija#ploksciapedyste', label: 'Plokščiapėdystė' },
        { href: '/vaiku-kineziterapija#kreivos-kojos', label: 'Kreivos kojos (X/O)' },
        { href: '/vaiku-kineziterapija#reabilitacija', label: 'Reabilitacija po traumų' },
      ],

      ctaTitle: 'Registracija',
      ctaDesc: 'Jei vaikas ar paauglys kartoja nugaros, kaklo ar pečių skausmus, registruokitės į išsamų vertinimą.',
      ctaRegister: 'Registruotis vizitui',
      ctaPhone: '+37066699676',
      ctaAddress: 'Adresas: Aludarių g. 7-43, Vilnius',

      medNote: 'Ši informacija yra informacinio pobūdžio ir nepakeičia individualios gydytojo konsultacijos. Jei būklė blogėja arba atsiranda pavojaus požymių, nedelsdami kreipkitės į gydytoją.',
    },
    en: {
      heroTitle: 'Back, neck and shoulder pain in children and adolescents: signs and what parents should do',
      heroSubtitle: 'Most common symptoms by age, red flags, and how FitKid assesses and treats pain',
      heroNote: 'In most cases these are functional, correctable issues. A proper assessment helps distinguish when habit and movement correction is enough from when medical work-up is needed.',

      intro1: 'Back, neck and shoulder pain in children is no longer rare. Parents increasingly notice the child coming home tense from school, the teenager complaining of neck pain after long study or screen time, or the young athlete having repeated discomfort between the shoulder blades or in the lower back.',
      intro2: 'In many cases these are functional, correctable problems related to load, movement quality and muscle control. For some children, pain can be a sign of a condition that needs medical investigation.',
      intro3: 'The main principle for parents: do not ignore repeated or progressing pain, but do not panic about every episode. A targeted assessment helps separate when it is enough to correct habits and movement from when additional medical diagnosis is needed.',
      intro4: 'On this page we explain: which symptoms are most common in different age groups; which "red flags" require urgent consultation; how we assess the causes of pain at FitKid clinic in Vilnius; how physiotherapy and massage help reduce pain and restore function.',

      quickTitle: 'Short answer for parents',
      quickBody: 'Back, neck and shoulder pain in children and adolescents is often related to: long sitting; low physical activity or a sudden increase in load; muscle imbalance; poor movement technique; rapid growth changes in adolescence.',
      quickList: ['individual physiotherapy', 'load and routine correction', 'targeted strength and mobility programme', 'ergonomics and daily habit changes'],
      quickNote: 'When there are neurological, systemic or night-time symptoms, a doctor\'s examination is needed first.',

      normalTitle: 'What we consider "normal" vs a risk signal',
      normalIntro: 'Not every pain means serious pathology. After a more intense day a child or teenager can have short-lived muscle tension. This is usually:',
      normalList: ['related to a specific load', 'eases with rest', 'does not disturb sleep', 'has no neurological symptoms'],
      riskTitle: 'Risk signals:',
      riskList: ['pain worsens over weeks', 'pain wakes at night', 'arm or leg weakness, numbness appears', 'gait or coordination changes', 'pain with fever, weight loss, general weakness'],
      riskNote: 'In these cases a quicker medical work-up is needed.',

      ageSignsTitle: 'Signs by age',
      age1_4Title: '1–4 years',
      age1_4Note: 'At this age chronic back or neck pain is not "typical". If a young child often complains of pain, assessment should be more careful.',
      age1_4Signs: ['child avoids active movement', 'does not want to run, jump, climb', 'often asks to be carried', 'obvious irritability when changing position', 'asymmetric posture or movement'],
      age1_4Note2: 'If symptoms repeat, it is worth not delaying consultation.',
      age5_9Title: '5–9 years',
      age5_9Signs: ['"neck hurts after lessons"', '"back gets tired when sitting"', 'shoulder girdle tension', 'discomfort after longer writing or desk work'],
      age10_14Title: '10–14 years',
      age10_14Signs: ['thoracic or lumbar pain after school', 'neck pain with headaches', 'more noticeable muscle tension in the evening', 'pain after more intense training', 'worsening movement technique during growth'],
      age15_19Title: '15–19 years',
      age15_19Signs: ['repeated neck and shoulder pain', '"tight" upper back', 'lumbar pain after sitting or sport', 'reduced endurance', 'pain affecting training or concentration'],

      causesTitle: 'Most common causes',
      causes1Title: 'Functional muscle and movement disorders',
      causes1List: ['poor trunk stability', 'scapular control deficit', 'limited hip and rib cage mobility', 'compensatory movement patterns'],
      causes2Title: 'Overload in sport',
      causes2List: ['too big a jump in load', 'too little recovery', 'one-sided movement without compensatory strengthening', 'technique errors'],
      causes3Title: 'Long sitting and static postures',
      causes3Body: 'School + homework + screens mean long time in one posture. The problem is usually not "one bad posture" but little variation in position and too little movement.',
      causes4Title: 'Ergonomics errors',
      causes4List: ['unsuitable desk/chair height', 'screen too low', 'habit of working hunched', 'bag weight and carrying method'],
      causes5Title: 'Less often – structural or medical causes',
      causes5List: ['spondylolysis', 'disc pathology', 'inflammatory or infectious conditions', 'tumour processes', 'other orthopaedic or neurological conditions'],
      causes5Note: 'That is why clinical assessment and checking for red flags are important.',

      redFlagsTitle: 'When to seek urgent help',
      redFlags: ['severe night pain that wakes from sleep', 'progressive neurological symptom (weakness, numbness, sensation change)', 'pain after trauma with limited movement', 'fever, general weakness, unexplained weight loss', 'gait disturbance, worsening coordination', 'changes in bladder or bowel control', 'obvious, rapidly increasing spinal asymmetry'],
      redFlagsNote: 'If these signs are absent but pain repeats for >2–4 weeks, a planned physiotherapy and doctor consultation is worthwhile.',

      evalTitle: 'How assessment works at FitKid clinic',
      eval1Title: 'Discussion with parents and child',
      eval1Items: ['when and in what situations it hurts', 'what helps, what worsens', 'school, sport, sleep and daily routine', 'past trauma', 'growth spurts', 'any red flags'],
      eval2Title: 'Functional testing',
      eval2Items: ['posture and movement quality', 'neck, shoulder girdle, rib cage and lumbar mobility', 'trunk and scapular stability', 'influence of hips and lower limbs on spinal load', 'breathing pattern', 'sport-specific movement technique (if relevant)'],
      eval3Title: 'Individual plan',
      eval3Items: ['clear explanation of what maintains the pain', 'a concrete stepwise therapy plan', 'home exercise programme', 'school/sport load recommendations', 'progress criteria and review date'],

      physioTitle: 'How physiotherapy helps',
      physioGoalsTitle: 'Pain reduction and return of function',
      physioGoalsList: ['reduce tension in overloaded areas', 'restore range of motion', 'improve trunk and scapular control', 'strengthen weak links', 'return to safe activity'],
      physioStrengthTitle: 'Strength and stabilisation programme',
      physioStrengthList: ['trunk stabilisation', 'gluteal and hip control', 'scapular stabilisers', 'deep neck flexor activation', 'functional exercises by age'],
      physioMobilityTitle: 'Mobility and soft tissue work',
      physioMobilityList: ['rib cage mobility', 'shoulder girdle movement', 'hip range', 'soft tissue tension'],
      physioLoadTitle: 'Load management',
      physioLoadList: ['gradually increase load', 'do not return to full regime through pain', 'plan recovery days', 'monitor effect of sleep and stress'],
      physioSportTitle: 'Return to sport',
      physioSportList: ['pain control in daily life', 'base strength and stability', 'sport-specific preparation', 'full return with a prevention plan'],

      massageTitle: 'How massage helps in this area',
      massageBody: 'Massage is an adjunct, especially when: there is marked neck and shoulder girdle tension; muscle fatigue after load; increased pain sensitivity; difficulty tolerating more active exercise at the start. Benefits: tension decreases; comfort improves; easier to engage in active physiotherapy. Important: massage alone without an active programme usually does not give long-term results.',

      visitsTitle: 'How many visits are usually needed',
      visitsNote: 'Depends on symptom duration, age, load and adherence to the home plan.',
      visits: [
        { label: '1 visit', desc: 'full assessment and plan' },
        { label: '4–6 visits', desc: 'first stable changes in milder cases' },
        { label: '8–12 visits', desc: 'when pain is long-standing, there is sport overload or clear compensations' },
        { label: 'Maintenance', desc: 'periodically according to sport season or school load' },
      ],
      visitsCriteria: 'Progress criteria: less pain frequency and intensity; better endurance; better movement quality; fewer symptoms after school or sport; return to usual activity without flare-ups.',

      homeTitle: 'What parents can do at home',
      homeDo: ['every 30–45 min of sitting, take a 2–5 min active break', 'ensure daily physical activity for age', 'monitor sleep and recovery', 'limit long uninterrupted screen blocks', 'include a short home exercise routine', 'review workstation ergonomics', 'check bag weight and carrying (both shoulders, symmetrically)'],
      homeDont: ['stopping all activity for a long time (unless the doctor advised)', 'pushing through pain in sport', 'random exercises without assessment', 'passive treatments only without movement correction'],

      faqTitle: 'Frequently asked questions (FAQ)',
      faq: [
        { q: 'Is back pain in children always dangerous?', a: 'No. Most cases are functional and correctable. Danger is indicated by red flags: night pain, neurological symptoms, systemic signs.' },
        { q: 'Does long sitting really have an effect?', a: 'Yes. More often the problem is not one posture but long immobility and little variation in position.' },
        { q: 'Does a heavy bag cause scoliosis?', a: 'No, but a too heavy or poorly carried bag can increase neck, shoulder and back pain.' },
        { q: 'Will massage alone fix the problem?', a: 'Usually not. Long-term results need active physiotherapy and habit correction.' },
        { q: 'Can they do sport if it hurts?', a: 'Usually yes, but with adapted load and a clear plan. Pain should not be ignored.' },
        { q: 'How long until improvement?', a: 'In milder cases first changes often within 2–6 weeks. Longer-standing problems need a more consistent plan.' },
        { q: 'Does pain increase in adolescence?', a: 'Yes, often due to growth spurt, higher load and less recovery.' },
        { q: 'When are imaging tests needed?', a: 'Not always. The need is determined by clinical picture and red flags; the doctor decides.' },
      ],

      specialistsTitle: 'Why parents choose FitKid',
      specialistsSubtitle: 'FitKid is a children and adolescent physiotherapy clinic in Vilnius, focused on a clear, practical plan and visible functional progress.',
      specialistAgne: 'Agnė Juodytė',
      specialistAgneRole: 'paediatric physiotherapist, Vojta therapy practitioner',
      specialistKsenija: 'Ksenija Persijanova',
      specialistKsenijaRole: 'paediatric and adolescent physiotherapist',
      specialistRamune: 'Ramunė Nemeikaitė',
      specialistRamuneRole: 'therapeutic massage specialist, works with infants, children and adolescents',

      relatedTitle: 'Related topics',
      related: [
        { href: '/ka-gydome/netaisyklinga-laikysena-vaikams', label: 'Poor posture' },
        { href: '/ka-gydome/skolioze-vaikams', label: 'Scoliosis and spinal deformities' },
        { href: '/vaiku-kineziterapija#ploksciapedyste', label: 'Flat feet' },
        { href: '/vaiku-kineziterapija#kreivos-kojos', label: 'Bow legs (X/O)' },
        { href: '/vaiku-kineziterapija#reabilitacija', label: 'Rehabilitation after injury' },
      ],

      ctaTitle: 'Registration',
      ctaDesc: 'If the child or teenager has repeated back, neck or shoulder pain, book a full assessment.',
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
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{txt.intro3}</p>
            <p className="text-lg text-gray-700 leading-relaxed">{txt.intro4}</p>
          </div>
        </section>

        <section className="py-12 bg-[#FFF8F3]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{txt.quickTitle}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">{txt.quickBody}</p>
            <p className="text-gray-700 font-medium mb-2">{currentLang === 'lt' ? 'Dauguma tokių atvejų gerėja taikant:' : 'Most such cases improve with:'}</p>
            <ul className="space-y-2 mb-4">
              {txt.quickList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#fb7825] mt-1">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg px-5 py-4">
              <p className="text-gray-800 text-sm">{txt.quickNote}</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{txt.normalTitle}</h2>
            <p className="text-gray-700 mb-4">{txt.normalIntro}</p>
            <ul className="space-y-2 mb-6">
              {txt.normalList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-800 font-medium mb-2">{txt.riskTitle}</p>
            <ul className="space-y-2 mb-4">
              {txt.riskList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 italic text-sm">{txt.riskNote}</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">{txt.ageSignsTitle}</h2>
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#54B6FC] mb-2">{txt.age1_4Title}</h3>
                <p className="text-gray-500 text-sm italic mb-4">{txt.age1_4Note}</p>
                <ul className="space-y-2 mb-4">
                  {txt.age1_4Signs.map((s, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{s}</span></li>
                  ))}
                </ul>
                <p className="text-gray-600 text-sm italic">{txt.age1_4Note2}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#54B6FC] mb-4">{txt.age5_9Title}</h3>
                <ul className="space-y-2">
                  {txt.age5_9Signs.map((s, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{s}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#54B6FC] mb-4">{txt.age10_14Title}</h3>
                <ul className="space-y-2">
                  {txt.age10_14Signs.map((s, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{s}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#54B6FC] mb-4">{txt.age15_19Title}</h3>
                <ul className="space-y-2">
                  {txt.age15_19Signs.map((s, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{s}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{txt.causesTitle}</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#54B6FC] mb-2">{txt.causes1Title}</h3>
                <ul className="space-y-2">
                  {txt.causes1List.map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{item}</span></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#54B6FC] mb-2">{txt.causes2Title}</h3>
                <ul className="space-y-2">
                  {txt.causes2List.map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{item}</span></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#54B6FC] mb-2">{txt.causes3Title}</h3>
                <p className="text-gray-700 text-sm">{txt.causes3Body}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#54B6FC] mb-2">{txt.causes4Title}</h3>
                <ul className="space-y-2">
                  {txt.causes4List.map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{item}</span></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#54B6FC] mb-2">{txt.causes5Title}</h3>
                <ul className="space-y-2 mb-2">
                  {txt.causes5List.map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{item}</span></li>
                  ))}
                </ul>
                <p className="text-gray-600 text-sm italic">{txt.causes5Note}</p>
              </div>
            </div>
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
            <p className="text-gray-600 italic text-sm">{txt.redFlagsNote}</p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">{txt.evalTitle}</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border-l-4 border-[#54B6FC]">
                <h3 className="text-xl font-bold text-gray-900 mb-2">1. {txt.eval1Title}</h3>
                <ul className="space-y-1">
                  {txt.eval1Items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600"><span className="text-[#54B6FC]">•</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-[#54B6FC]">
                <h3 className="text-xl font-bold text-gray-900 mb-2">2. {txt.eval2Title}</h3>
                <ul className="space-y-1">
                  {txt.eval2Items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600"><span className="text-[#54B6FC]">•</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-[#54B6FC]">
                <h3 className="text-xl font-bold text-gray-900 mb-2">3. {txt.eval3Title}</h3>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{txt.physioTitle}</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#54B6FC] mb-2">{txt.physioGoalsTitle}</h3>
                <ul className="space-y-2">
                  {txt.physioGoalsList.map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{item}</span></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#54B6FC] mb-2">{txt.physioStrengthTitle}</h3>
                <ul className="space-y-2">
                  {txt.physioStrengthList.map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{item}</span></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#54B6FC] mb-2">{txt.physioMobilityTitle}</h3>
                <ul className="space-y-2">
                  {txt.physioMobilityList.map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{item}</span></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#54B6FC] mb-2">{txt.physioLoadTitle}</h3>
                <ul className="space-y-2">
                  {txt.physioLoadList.map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{item}</span></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#54B6FC] mb-2">{txt.physioSportTitle}</h3>
                <ul className="space-y-2">
                  {txt.physioSportList.map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#FFF8F3]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{txt.massageTitle}</h2>
            <p className="text-gray-700 leading-relaxed">{txt.massageBody}</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{txt.visitsTitle}</h2>
            <p className="text-gray-500 mb-6">{txt.visitsNote}</p>
            <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
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

        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">{txt.homeTitle}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-4">✓ {currentLang === 'lt' ? 'Praktiškas bazinis planas' : 'Practical basic plan'}</h3>
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

        <section className="py-16 bg-gray-50">
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

        <section className="py-12 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">{txt.relatedTitle}</h2>
            <div className="flex flex-wrap justify-center gap-2 sm:flex-nowrap sm:justify-between">
              {txt.related.map((link) => (
                <Link key={link.label} href={link.href} className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 hover:border-[#54B6FC] text-gray-700 hover:text-[#54B6FC] px-3 py-1.5 rounded-full text-xs font-medium transition-all hover:shadow-md whitespace-nowrap">
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
