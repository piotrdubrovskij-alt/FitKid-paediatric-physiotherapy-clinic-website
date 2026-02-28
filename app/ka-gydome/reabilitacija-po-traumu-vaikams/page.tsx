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

export default function ReabilitacijaPoTraumuPage() {
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
      heroTitle: 'Reabilitacija po traumų ar imobilizacijos vaikams ir paaugliams: ką daryti tėvams',
      heroSubtitle: 'Kas po gipso ar įtvaro yra normalu, raudoni signalai ir kaip FitKid padeda atkurti judesį, jėgą ir pasitikėjimą',
      heroNote: 'Imobilizacija gydo audinį, bet automatiškai neatstato funkcijos. Reabilitacija turi vykti etapais, pagal aiškius kriterijus.',

      intro1: 'Po lūžio, stipraus patempimo, operacijos, gipso ar įtvaro nuėmimo tėvai dažnai mato tą patį vaizdą: vaikas saugo galūnę, judesys ribotas, galūnė atrodo silpnesnė, kartais plonesnė, gali būti patinimas ar eisenos pakitimas.',
      intro2: 'Daugeliu atvejų tai yra normalus pereinamasis etapas po imobilizacijos, tačiau be tikslingos reabilitacijos dalis vaikų įgauna kompensacinius judesio įpročius, kurie vėliau sukelia skausmą, nuovargį ar pasikartojančias traumas.',
      intro3: 'Svarbiausia žinutė tėvams: imobilizacija gydo audinį, bet automatiškai neatstato funkcijos; skausmo sumažėjimas dar nereiškia, kad grįžti į pilną krūvį jau saugu; reabilitacija turi vykti etapais, pagal aiškius kriterijus.',
      intro4: 'Šiame puslapyje paaiškiname: kas po traumos/imobilizacijos yra normalu, o kas jau ne; kada būtina skubi gydytojo konsultacija; kaip FitKid klinikoje Vilniuje vertiname funkciją; kaip kineziterapija ir masažas padeda atkurti judesį, jėgą ir pasitikėjimą; kaip saugiai grįžti į sportą ir kasdienį aktyvumą.',

      quickTitle: 'Trumpas atsakymas tėvams',
      quickNormal: 'Po gipso ar įtvaro vaikui normalu: jausti laikiną sąnario sustingimą; turėti silpnesnius raumenis; matyti plonesnę galūnę; judėti nedrąsiai ar šlubuoti pirmomis dienomis.',
      quickAssess: 'Tačiau būtina įvertinti, jei:',
      quickAssessList: ['skausmas stiprėja, o ne mažėja', 'vaikas vengia remtis galūne ilgiau nei tikėtasi', 'judesys negerėja per kelias savaites', 'atsiranda ryškus patinimas, paraudimas, neurologiniai simptomai', 'grįžus į aktyvumą simptomai nuolat kartojasi'],

      whenTitle: 'Kada šis puslapis aktualus',
      whenList: ['kaulų lūžių (su gipsu ar be jo)', 'raiščių, sausgyslių ir minkštųjų audinių traumų', 'ilgiau trukusios imobilizacijos (gipsas, įtvaras, ortozė)', 'ortopedinių operacijų', 'pasikartojančių sportinių mikrotraumų', 'laikino judesio ribojimo dėl skausmo ar baimės judėti'],

      bodyTitle: 'Kas vyksta kūne po imobilizacijos',
      bodyIntro: 'Imobilizacija būtina audinių gijimui, bet ji turi „kainą“ funkcijai:',
      bodyList: ['mažėja raumenų jėga ir ištvermė', 'sąnariai gali sustingti', 'prastėja propriocepcija (kūno padėties jutimas)', 'blogėja koordinacija ir pusiausvyra', 'atsiranda kompensaciniai modeliai (saugoma viena pusė, perkraunama kita)'],
      bodyNote: 'Todėl po gipso nuėmimo ar po traumos pabaigos reikia ne tik „palaukti“, bet aktyviai atstatyti funkciją.',

      ageSignsTitle: 'Požymiai pagal amžių',
      age1_4Title: '1–4 metai',
      age1_4Signs: ['vengia remtis koja ar naudoti ranką', 'dažnai prašo nešti', 'greitai pavargsta vaikštant', 'atsiranda neįprastas ir išliekantis šlubavimas', 'nenoriai dalyvauja žaidime'],
      age5_9Title: '5–9 metai',
      age5_9Signs: ['vaikas negrįžta į įprastą žaidimų tempą', 'ribota judesio amplitudė po imobilizacijos', 'baimė bėgti, šokti, lipti', 'pasikartojantis skausmas po krūvio', 'dažnesnis klupinėjimas'],
      age10_14Title: '10–14 metai',
      age10_14Signs: ['grįžus į treniruotes simptomai atsinaujina', 'silpnesnė pažeistos pusės jėga', 'ryškus vienpusis kompensavimas', 'skausmas po pamokų ar treniruočių', 'sumažėjusi ištvermė, blogesnė judesio technika'],
      age15_19Title: '15–19 metai',
      age15_19Signs: ['„be skausmo“ ne visada reiškia „pasiruošęs sportui“', 'dažnos perkrovos dėl per ankstyvo grįžimo', 'jaučiamas nestabilumas, nepasitikėjimas galūne', 'pasikartojančios mikrotraumos', 'nuolatinė asimetrija jėgoje ar mobilume'],

      normalTitle: 'Kas po gipso ar įtvaro yra normalu',
      normalIntro: 'Dažnai normalu pirmomis savaitėmis:',
      normalList: ['sausa, jautri, pleiskanojanti oda', 'laikinas sustingimas', 'silpnesnė raumenų jėga', 'laikinas šlubavimas po kojos imobilizacijos', 'baimė pilnai apkrauti galūnę'],
      notNormalTitle: 'Kada tai jau nebe „normalu“:',
      notNormalList: ['skausmas stiprėja kasdien', 'patinimas nemažėja arba didėja', 'judesio amplitudė negerėja', 'atsiranda tirpimas, dilgčiojimas, silpnumas', 'funkcija stringa ir neprogresuoja pagal planą'],

      redFlagsTitle: 'Kada būtina kreiptis skubiai',
      redFlags: ['skausmas staiga smarkiai sustiprėjo', 'atsirado ryškus paraudimas, karštis, patinimas', 'galūnė pamėlsta, pabąla, tampa šalta', 'atsirado tirpimas, dilgčiojimas, silpnumas', 'vaikas negali pajudinti pirštų ar remtis galūne', 'atsiranda karščiavimas su vietiniu skausmu', 'po traumos matoma deformacija', 'yra įtariamas pakartotinis sužeidimas'],
      redFlagsCastTitle: 'Jei vaikas dar turi gipsą/įtvarą ir atsiranda:',
      redFlagsCast: ['stiprėjantis skausmas', 'blogas kvapas ar drėgmė po gipsu', 'labai didelis patinimas žemiau gipso', 'jautrumo pokyčiai'],
      redFlagsCastNote: 'reikia skubiai kreiptis į gydymo įstaigą.',

      evalTitle: 'Kaip vyksta įvertinimas FitKid klinikoje',
      eval1Title: 'Klinikinis pokalbis',
      eval1Items: ['traumos tipą ir datą', 'gydymo eigą (gipsas, įtvaras, operacija)', 'gydytojo nurodytas apkrovos ribas', 'dabartinius simptomus', 'vaiko tikslus (mokykla, sportas, kasdienė funkcija)'],
      eval2Title: 'Funkcinis vertinimas',
      eval2Items: ['skausmo pobūdį ir provokatorius', 'sąnarių judesio amplitudę', 'jėgą ir ištvermę', 'pusiausvyrą ir koordinaciją', 'eiseną ir judesio simetriją', 'sportui specifinius judesius (jei aktualu)'],
      eval3Title: 'Individualus reabilitacijos planas',
      eval3Items: ['etapų planą su aiškiais tikslais', 'namų programą (trukmė, dažnis, prioritetai)', 'krūvio grįžimo algoritmą', 'kriterijus, kada pereinama į kitą etapą'],

      physioTitle: 'Kaip padeda kineziterapija',
      stage1: '1 etapas: skausmo ir patinimo kontrolė – sumažinti skausmą; valdyti tinimą; atkurti saugų bazinį judesį; grąžinti kasdienes funkcijas.',
      stage2: '2 etapas: mobilumo atstatymas – sąnario amplitudės grąžinimas; minkštųjų audinių lankstumas; saugus aktyvus judesys be kompensacijų.',
      stage3: '3 etapas: jėgos ir stabilumo grąžinimas – atkurti pažeistos pusės jėgą; sumažinti asimetriją; gerinti liemens ir dubens kontrolę; didinti galūnės ištvermę.',
      stage4: '4 etapas: koordinacija ir propriocepcija – vienos kojos/rankos kontrolė; pusiausvyra; reakcijos greitis; judesio tikslumas.',
      stage5: '5 etapas: funkcija ir grįžimas į sportą – sportui būdingi judesiai; šuoliai, bėgimas, krypties keitimas; apkrovos tolerancijos testai; palaipsnį sugrįžimą pagal kriterijus.',

      massageTitle: 'Kokia masažo vieta reabilitacijoje',
      massageBody: 'Masažas yra papildoma priemonė, kai reikia: mažinti skausmingą raumenų įtampą; gerinti audinių toleranciją; palengvinti įsitraukimą į aktyvų darbą; pagerinti atsistatymą po didesnio krūvio. Svarbu: masažas negrąžina jėgos ir koordinacijos be aktyvių pratimų; ilgalaikis rezultatas pasiekiamas per aktyvią reabilitaciją.',

      visitsTitle: 'Kiek vizitų dažniausiai prireikia',
      visitsNote: 'Priklauso nuo traumos tipo, imobilizacijos trukmės ir vaiko tikslo.',
      visits: [
        { label: '1 vizitas', desc: 'išsamus vertinimas ir planas' },
        { label: '4–6 vizitai', desc: 'lengvesniems atvejams (mažesnė trauma, trumpa imobilizacija)' },
        { label: '8–12 vizitų', desc: 'po ilgesnės imobilizacijos ar sudėtingesnės traumos' },
        { label: '12+ vizitų', desc: 'po operacijų ar grįžimui į didelio intensyvumo sportą' },
      ],
      visitsCriteria: 'Progreso kriterijai: mažėjantis skausmas; didėjanti judesio amplitudė; jėgos simetrija; kokybiška eisena/judesys; saugus grįžimas į mokyklą ir sportą be paūmėjimų.',

      returnTitle: 'Grįžimas į sportą: pagrindinė taisyklė',
      returnIntro: 'Grįžimas turi būti: laipsniškas; simptomais paremtas; kriterijais pagrįstas.',
      returnCriteria: 'Dažniausiai vertiname: pilnesnę judesio amplitudę; pakankamą jėgą lyginant su kita puse; stabilumą ir kontrolę dinaminėse užduotyse; judesį be šlubavimo; skausmo nebuvimą po ir kitą dieną po krūvio.',
      returnNote: 'Per ankstyvas grįžimas didina pakartotinių traumų riziką.',

      homeTitle: 'Ką tėvai gali daryti namuose',
      homeDo: ['laikytis gydytojo apkrovos rekomendacijų', 'kasdien vykdyti namų pratimų programą', 'stebėti skausmo dinamiką (0–10 skalė prieš ir po aktyvumo)', 'didinti krūvį palaipsniui', 'užtikrinti miegą ir atsistatymą', 'neskubinti vaiko „per skausmą“'],
      homeDont: ['visiško nejudrumo ilgiau nei būtina', 'staigaus grįžimo į pilną sporto režimą', 'skausmo ignoravimo', 'vien pasyvių procedūrų be aktyvios dalies'],

      faqTitle: 'Dažniausiai užduodami klausimai (FAQ)',
      faq: [
        { q: 'Ar po gipso normalu, kad galūnė atrodo plonesnė?', a: 'Taip. Po imobilizacijos laikinas raumenų apimties sumažėjimas yra dažnas ir dažniausiai atsistato su aktyvumu.' },
        { q: 'Ar normalu, kad po gipso vaikas šlubuoja?', a: 'Pirmomis dienomis ar savaitėmis tai gali būti normalu, ypač po kojos imobilizacijos. Jei šlubavimas išlieka ar didėja, reikia vertinimo.' },
        { q: 'Ar visiems vaikams po lūžio reikia kineziterapijos?', a: 'Ne visada. Lengvesni atvejai gali atsistatyti su natūraliu aktyvumu. Tačiau kai yra skausmas, judesio ribojimas, silpnumas ar sporto tikslai, kineziterapija dažniausiai būtina.' },
        { q: 'Ar masažas gali pakeisti reabilitacijos pratimus?', a: 'Ne. Masažas padeda komfortui, bet funkciją atstato aktyvus darbas.' },
        { q: 'Kada galima grįžti į sportą?', a: 'Kai gydytojas leidžia ir pasiekti funkciniai kriterijai: judesys, jėga, stabilumas, kokybiška technika be skausmo.' },
        { q: 'Kiek laiko trunka pilnas atsistatymas?', a: 'Priklauso nuo traumos. Lengvesniais atvejais – kelios savaites, sudėtingesniais – keli mėnesiai.' },
        { q: 'Ar skausmas po pirmų pratimų yra normalu?', a: 'Nedidelis laikinas diskomfortas gali būti normalu. Didėjantis ar ilgai trunkantis skausmas – signalas koreguoti planą.' },
        { q: 'Ar po operacijos planas skiriasi?', a: 'Taip. Reabilitacija griežtai derinama su operavusio gydytojo protokolu.' },
        { q: 'Kaip suprasti, kad krūvis per didelis?', a: 'Jei skausmas didėja treniruotės metu, išlieka kitą dieną ar blogėja funkcija, krūvį reikia mažinti.' },
        { q: 'Kada būtina pakartotinė gydytojo konsultacija?', a: 'Kai progresas sustoja, simptomai grįžta ar atsiranda nauji neurologiniai/sisteminiai požymiai.' },
      ],

      specialistsTitle: 'Kodėl tėvai renkasi FitKid',
      specialistsSubtitle: 'FitKid yra vaikų ir paauglių kineziterapijos klinika Vilniuje, orientuota į funkcijos grąžinimą po traumos, ne tik į simptomų mažinimą.',
      specialistAgne: 'Agnė Juodytė',
      specialistAgneRole: 'vaikų kineziterapeutė, Vojta terapijos praktikė',
      specialistKsenija: 'Ksenija Persijanova',
      specialistKsenijaRole: 'vaikų ir paauglių kineziterapeutė',
      specialistRamune: 'Ramunė Nemeikaitė',
      specialistRamuneRole: 'gydomojo masažo specialistė, dirba su kūdikiais, vaikais ir paaugliais',

      relatedTitle: 'Susijusios temos',
      related: [
        { href: '/ka-gydome/nugaros-kaklo-peciu-skausmai-vaikams', label: 'Nugaros, kaklo ir pečių skausmai' },
        { href: '/ka-gydome/netaisyklinga-laikysena-vaikams', label: 'Netaisyklinga laikysena' },
        { href: '/ka-gydome/skolioze-vaikams', label: 'Skoliozė' },
        { href: '/vaiku-kineziterapija#ploksciapedyste', label: 'Plokščiapėdystė' },
        { href: '/vaiku-kineziterapija#kreivos-kojos', label: 'Kreivos kojos (X/O)' },
      ],

      ctaTitle: 'Registracija',
      ctaDesc: 'Jei vaikui po traumos, gipso, įtvaro ar operacijos išlieka skausmas, sustingimas ar judesio baimė, registruokitės į išsamų reabilitacijos vertinimą.',
      ctaRegister: 'Registruotis vizitui',
      ctaPhone: '+37066699676',
      ctaAddress: 'Adresas: Aludarių g. 7-43, Vilnius',

      medNote: 'Ši informacija yra informacinio pobūdžio ir nepakeičia individualios gydytojo konsultacijos. Jei būklė blogėja arba atsiranda pavojaus požymių, nedelsdami kreipkitės į gydytoją.',
    },
    en: {
      heroTitle: 'Rehabilitation after trauma or immobilisation in children and adolescents: what parents should do',
      heroSubtitle: 'What is normal after cast or brace, red flags, and how FitKid helps restore movement, strength and confidence',
      heroNote: 'Immobilisation heals tissue but does not automatically restore function. Rehabilitation should be staged and based on clear criteria.',

      intro1: 'After a fracture, severe sprain, surgery, or cast or brace removal, parents often see the same picture: the child protects the limb, movement is limited, the limb looks weaker, sometimes thinner, there may be swelling or a change in gait.',
      intro2: 'In many cases this is a normal transitional phase after immobilisation, but without targeted rehabilitation some children develop compensatory movement habits that later cause pain, fatigue or repeated injury.',
      intro3: 'Key message for parents: immobilisation heals tissue but does not automatically restore function; less pain does not yet mean it is safe to return to full load; rehabilitation should be staged and based on clear criteria.',
      intro4: 'On this page we explain: what is normal after trauma/immobilisation and what is not; when urgent medical consultation is needed; how we assess function at FitKid clinic in Vilnius; how physiotherapy and massage help restore movement, strength and confidence; how to return safely to sport and daily activity.',

      quickTitle: 'Short answer for parents',
      quickNormal: 'After cast or brace it is normal for the child to: feel temporary joint stiffness; have weaker muscles; have a thinner-looking limb; move cautiously or limp in the first days.',
      quickAssess: 'Assessment is needed if:',
      quickAssessList: ['pain increases rather than decreases', 'the child avoids loading the limb longer than expected', 'movement does not improve over several weeks', 'marked swelling, redness or neurological symptoms appear', 'symptoms keep returning when returning to activity'],

      whenTitle: 'When this page is relevant',
      whenList: ['bone fractures (with or without cast)', 'ligament, tendon and soft tissue injury', 'prolonged immobilisation (cast, brace, orthosis)', 'orthopaedic surgery', 'repeated sporting microtrauma', 'temporary movement restriction due to pain or fear of moving'],

      bodyTitle: 'What happens in the body after immobilisation',
      bodyIntro: 'Immobilisation is needed for tissue healing but has a "cost" for function:',
      bodyList: ['muscle strength and endurance decrease', 'joints can stiffen', 'proprioception (body position sense) worsens', 'coordination and balance worsen', 'compensatory patterns develop (protecting one side, overloading the other)'],
      bodyNote: 'So after cast removal or after the end of trauma care, we need not only to "wait" but to actively restore function.',

      ageSignsTitle: 'Signs by age',
      age1_4Title: '1–4 years',
      age1_4Signs: ['avoids loading the leg or using the arm', 'often asks to be carried', 'tires quickly when walking', 'unusual and persistent limping appears', 'reluctant to join in play they used to join'],
      age5_9Title: '5–9 years',
      age5_9Signs: ['child does not return to usual play pace', 'limited range of motion after immobilisation', 'fear of running, jumping, climbing', 'repeated pain after load', 'more frequent stumbling due to worse control'],
      age10_14Title: '10–14 years',
      age10_14Signs: ['symptoms return when back at training', 'weaker strength on the injured side', 'obvious one-sided compensation', 'pain after lessons or training', 'reduced endurance, worse movement technique'],
      age15_19Title: '15–19 years',
      age15_19Signs: ['"no pain" does not always mean "ready for sport"', 'frequent overload from returning too early', 'felt instability, lack of confidence in the limb', 'repeated microtrauma', 'persistent asymmetry in strength or mobility'],

      normalTitle: 'What is normal after cast or brace',
      normalIntro: 'Often normal in the first weeks:',
      normalList: ['dry, sensitive, flaky skin', 'temporary stiffness', 'weaker muscle strength', 'temporary limping after leg immobilisation', 'fear of fully loading the limb'],
      notNormalTitle: 'When it is no longer "normal":',
      notNormalList: ['pain increases daily', 'swelling does not decrease or increases', 'range of motion does not improve', 'numbness, tingling, weakness appear', 'function stalls and does not progress as planned'],

      redFlagsTitle: 'When to seek urgent help',
      redFlags: ['pain suddenly increases sharply', 'marked redness, fever, swelling appears', 'limb is pale, blue, cold', 'numbness, tingling, weakness appear', 'child cannot move fingers or load the limb', 'fever with local pain', 'visible deformity after trauma', 'suspected re-injury'],
      redFlagsCastTitle: 'If the child still has a cast/brace and there is:',
      redFlagsCast: ['increasing pain', 'bad smell or moisture under the cast', 'very large swelling below the cast', 'sensation changes'],
      redFlagsCastNote: 'urgent contact with the treating facility is needed.',

      evalTitle: 'How assessment works at FitKid clinic',
      eval1Title: 'Clinical discussion',
      eval1Items: ['type and date of injury', 'course of treatment (cast, brace, surgery)', 'doctor\'s load restrictions', 'current symptoms', 'child\'s goals (school, sport, daily function)'],
      eval2Title: 'Functional assessment',
      eval2Items: ['nature and triggers of pain', 'joint range of motion', 'strength and endurance', 'balance and coordination', 'gait and movement symmetry', 'sport-specific movements (if relevant)'],
      eval3Title: 'Individual rehabilitation plan',
      eval3Items: ['a staged plan with clear goals', 'home programme (duration, frequency, priorities)', 'load return algorithm', 'criteria for moving to the next stage'],

      physioTitle: 'How physiotherapy helps',
      stage1: 'Stage 1: pain and swelling control – reduce pain; manage swelling; restore safe basic movement; return daily function.',
      stage2: 'Stage 2: restoring mobility – restoring joint range; soft tissue flexibility; safe active movement without compensations.',
      stage3: 'Stage 3: restoring strength and stability – restore injured side strength; reduce asymmetry; improve trunk and pelvic control; increase limb endurance.',
      stage4: 'Stage 4: coordination and proprioception – single leg/arm control; balance; reaction speed; movement accuracy.',
      stage5: 'Stage 5: function and return to sport – sport-specific movements; jumping, running, change of direction; load tolerance tests; gradual return by criteria, not by date.',

      massageTitle: 'Role of massage in rehabilitation',
      massageBody: 'Massage is an adjunct when needed to: reduce painful muscle tension; improve tissue tolerance; make it easier to engage in active work; improve recovery after higher load. Important: massage does not restore strength and coordination without active exercise; long-term results come from active rehabilitation.',

      visitsTitle: 'How many visits are usually needed',
      visitsNote: 'Depends on type of injury, duration of immobilisation and the child\'s goal.',
      visits: [
        { label: '1 visit', desc: 'full assessment and plan' },
        { label: '4–6 visits', desc: 'lighter cases (smaller injury, short immobilisation)' },
        { label: '8–12 visits', desc: 'after longer immobilisation or more complex injury' },
        { label: '12+ visits', desc: 'after surgery or return to high-intensity sport' },
      ],
      visitsCriteria: 'Progress criteria: decreasing pain; increasing range of motion; strength symmetry; quality gait/movement; safe return to school and sport without flare-ups.',

      returnTitle: 'Return to sport: the main rule',
      returnIntro: 'Return should be: gradual; symptom-guided; criteria-based.',
      returnCriteria: 'We usually assess: full range of motion; adequate strength compared to the other side; stability and control in dynamic tasks; movement without limping; no pain during and the day after load.',
      returnNote: 'Returning too early increases the risk of re-injury.',

      homeTitle: 'What parents can do at home',
      homeDo: ['follow the doctor\'s load recommendations', 'do the home exercise programme daily', 'monitor pain (0–10 scale before and after activity)', 'increase load gradually', 'ensure sleep and recovery', 'do not push the child "through pain"'],
      homeDont: ['complete immobility longer than necessary', 'sudden return to full sport regime', 'ignoring pain', 'passive treatments only without an active part'],

      faqTitle: 'Frequently asked questions (FAQ)',
      faq: [
        { q: 'Is it normal for the limb to look thinner after a cast?', a: 'Yes. Temporary loss of muscle size after immobilisation is common and usually recovers with activity.' },
        { q: 'Is it normal for the child to limp after a cast?', a: 'In the first days or weeks it can be normal, especially after leg immobilisation. If limping persists or increases, assessment is needed.' },
        { q: 'Do all children need physiotherapy after a fracture?', a: 'Not always. Lighter cases can recover with natural activity. When there is pain, limited movement, weakness or sport goals, physiotherapy is usually needed.' },
        { q: 'Can massage replace rehabilitation exercises?', a: 'No. Massage helps comfort; function is restored by active work.' },
        { q: 'When can they return to sport?', a: 'When the doctor allows and functional criteria are met: movement, strength, stability, quality technique without pain.' },
        { q: 'How long does full recovery take?', a: 'Depends on the injury. Lighter cases – a few weeks; more complex – several months.' },
        { q: 'Is pain after first exercises normal?', a: 'Mild temporary discomfort can be normal. Increasing or lasting pain is a signal to adjust the plan.' },
        { q: 'Is the plan different after surgery?', a: 'Yes. Rehabilitation is strictly aligned with the operating surgeon\'s protocol.' },
        { q: 'How to know if load is too high?', a: 'If pain increases during training, lasts the next day or function worsens, load should be reduced.' },
        { q: 'When is a repeat doctor consultation needed?', a: 'When progress stops, symptoms return or new neurological/systemic signs appear.' },
      ],

      specialistsTitle: 'Why parents choose FitKid',
      specialistsSubtitle: 'FitKid is a children and adolescent physiotherapy clinic in Vilnius, focused on restoring function after injury, not just reducing symptoms.',
      specialistAgne: 'Agnė Juodytė',
      specialistAgneRole: 'paediatric physiotherapist, Vojta therapy practitioner',
      specialistKsenija: 'Ksenija Persijanova',
      specialistKsenijaRole: 'paediatric and adolescent physiotherapist',
      specialistRamune: 'Ramunė Nemeikaitė',
      specialistRamuneRole: 'therapeutic massage specialist, works with infants, children and adolescents',

      relatedTitle: 'Related topics',
      related: [
        { href: '/ka-gydome/nugaros-kaklo-peciu-skausmai-vaikams', label: 'Back, neck and shoulder pain' },
        { href: '/ka-gydome/netaisyklinga-laikysena-vaikams', label: 'Poor posture' },
        { href: '/ka-gydome/skolioze-vaikams', label: 'Scoliosis' },
        { href: '/vaiku-kineziterapija#ploksciapedyste', label: 'Flat feet' },
        { href: '/vaiku-kineziterapija#kreivos-kojos', label: 'Bow legs (X/O)' },
      ],

      ctaTitle: 'Registration',
      ctaDesc: 'If the child has ongoing pain, stiffness or fear of movement after trauma, cast, brace or surgery, book a full rehabilitation assessment.',
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
            <p className="text-gray-700 mb-4">{txt.quickNormal}</p>
            <p className="text-gray-800 font-medium mb-2">{txt.quickAssess}</p>
            <ul className="space-y-2 mb-4">
              {txt.quickAssessList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#fb7825] mt-1">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{txt.whenTitle}</h2>
            <ul className="space-y-2">
              {txt.whenList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#54B6FC] mt-1">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{txt.bodyTitle}</h2>
            <p className="text-gray-700 mb-4">{txt.bodyIntro}</p>
            <ul className="space-y-2 mb-4">
              {txt.bodyList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#54B6FC] mt-1">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg px-5 py-4">
              <p className="text-gray-800">{txt.bodyNote}</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">{txt.ageSignsTitle}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#54B6FC] mb-4">{txt.age1_4Title}</h3>
                <ul className="space-y-2">
                  {txt.age1_4Signs.map((s, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{s}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#54B6FC] mb-4">{txt.age5_9Title}</h3>
                <ul className="space-y-2">
                  {txt.age5_9Signs.map((s, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{s}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#54B6FC] mb-4">{txt.age10_14Title}</h3>
                <ul className="space-y-2">
                  {txt.age10_14Signs.map((s, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{s}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6">
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

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{txt.normalTitle}</h2>
            <p className="text-gray-700 mb-4">{txt.normalIntro}</p>
            <ul className="space-y-2 mb-6">
              {txt.normalList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-800 font-medium mb-2">{txt.notNormalTitle}</p>
            <ul className="space-y-2">
              {txt.notNormalList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-red-500">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{txt.redFlagsTitle}</h2>
            <ul className="space-y-3 mb-6">
              {txt.redFlags.map((flag, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-red-50 border-l-4 border-red-400 rounded-r-lg px-5 py-3">
                  <span className="text-red-500 font-bold">!</span>
                  <span className="text-gray-800">{flag}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-800 font-medium mb-2">{txt.redFlagsCastTitle}</p>
            <ul className="space-y-2 mb-2">
              {txt.redFlagsCast.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-red-500">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 italic text-sm">{txt.redFlagsCastNote}</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">{txt.evalTitle}</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#54B6FC]">
                <h3 className="text-xl font-bold text-gray-900 mb-2">1. {txt.eval1Title}</h3>
                <ul className="space-y-1">
                  {txt.eval1Items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600"><span className="text-[#54B6FC]">•</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#54B6FC]">
                <h3 className="text-xl font-bold text-gray-900 mb-2">2. {txt.eval2Title}</h3>
                <ul className="space-y-1">
                  {txt.eval2Items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600"><span className="text-[#54B6FC]">•</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#54B6FC]">
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

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{txt.physioTitle}</h2>
            <div className="space-y-4">
              {[txt.stage1, txt.stage2, txt.stage3, txt.stage4, txt.stage5].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-5 border-l-4 border-[#54B6FC]">
                  <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{txt.massageTitle}</h2>
            <p className="text-gray-700 leading-relaxed">{txt.massageBody}</p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{txt.visitsTitle}</h2>
            <p className="text-gray-500 mb-6">{txt.visitsNote}</p>
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
              {txt.visits.map((row, idx) => (
                <div key={idx} className={`flex items-center gap-4 px-6 py-4 ${idx !== txt.visits.length - 1 ? 'border-b border-gray-200' : ''}`}>
                  <span className="font-bold text-[#54B6FC] w-28 flex-shrink-0">{row.label}</span>
                  <span className="text-gray-700">{row.desc}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-sm mt-4">{txt.visitsCriteria}</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{txt.returnTitle}</h2>
            <p className="text-gray-700 mb-4">{txt.returnIntro}</p>
            <p className="text-gray-700 mb-4">{txt.returnCriteria}</p>
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg px-5 py-4">
              <p className="text-gray-800">{txt.returnNote}</p>
            </div>
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
