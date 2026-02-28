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

export default function KreivosKojosVaikamsPage() {
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
      heroTitle: 'Kreivos kojos (X ar O kojų deformacija) vaikams ir paaugliams: požymiai ir ką daryti tėvams',
      heroSubtitle: 'Kas yra fiziologinė raida, kada deformacija laikoma problema ir kaip FitKid padeda per kineziterapiją ir funkcinę korekciją',
      heroNote: 'Ne kiekviena X ar O forma yra liga; bet ne kiekvieną atvejį galima tiesiog „išlaukti“.',

      intro1: 'Tėvai dažnai pastebi, kad vaiko kojos atrodo „kreivos“: vieniems vaikams labiau matosi O forma (keliai toliau vienas nuo kito), kitiems – X forma (keliai arčiau, kulkšnys toliau). Daugeliu atvejų tai yra natūrali augimo dalis, kuri su amžiumi keičiasi savaime.',
      intro2: 'Tačiau kai deformacija ryški, asimetriška, skausminga ar progresuojanti ne pagal amžių, reikalingas tikslingas įvertinimas.',
      intro3: 'Svarbiausia žinutė tėvams: ne kiekviena X ar O forma yra liga; bet ne kiekvieną atvejį galima tiesiog „išlaukti“.',
      intro4: 'Šiame puslapyje aiškiai paaiškiname: kas yra fiziologinė (normali) raida; kada kojos forma jau laikoma patologine; kokie požymiai reikalauja skubios gydytojo konsultacijos; kaip FitKid klinikoje Vilniuje padedame vaikams per kineziterapiją ir funkcinę korekciją; kada būtina ortopedo priežiūra ar chirurginis gydymas.',

      quickTitle: 'Trumpas atsakymas tėvams',
      quickIntro: 'Vaikų kojų ašis natūraliai keičiasi augant: ankstyvame amžiuje dažniau matoma O forma; ikimokykliniame amžiuje dažniausiai pasireiškia X forma; vėliau kojos paprastai pereina į artimą suaugusiųjų ašį.',
      quickNoTreatment: 'Dažniausiai gydymo nereikia, jei:',
      quickNoTreatmentList: ['deformacija simetriška', 'nėra skausmo', 'vaikas aktyvus, nešlubuoja', 'forma mažėja pagal amžių'],
      quickAssess: 'Reikia vertinti aktyviau, jei:',
      quickAssessList: ['deformacija tik vienoje pusėje', 'laikui bėgant ryškėja', 'sukelia skausmą ar eisenos sutrikimą', 'išlieka už fiziologinių amžiaus ribų', 'vaikas ryškiai žemesnis ar mažesnio svorio nei bendraamžiai be aiškios priežasties'],

      whatTitle: 'Kas yra X ir O kojų deformacija',
      oTitle: 'O kojos (genu varum)',
      oBody: 'O forma reiškia, kad vaikui stovint suglaustomis kulkšnimis tarp kelių lieka tarpas. Ankstyvame amžiuje tai dažna fiziologinė būklė.',
      xTitle: 'X kojos (genu valgum)',
      xBody: 'X forma reiškia, kad vaikui stovint suglaustais keliais tarp kulkšnių lieka tarpas. Ikimokykliniame amžiuje tai dažnai būna fiziologinė raidos stadija.',
      problemTitle: 'Kada tai laikoma problema',
      problemList: ['deformacija išlieka per ilgai pagal amžių', 'didėja, o ne mažėja', 'yra asimetriška', 'sukelia skausmą, šlubavimą, funkcijos ribojimą', 'yra papildomų sisteminių ar neurologinių požymių'],

      normalAgeTitle: 'Kas normalu pagal amžių',
      normalAgeIntro: 'Praktikoje orientuojamės į šią eigą: nuo gimimo iki maždaug 2 metų dažnesnė O forma; apie 3–4 metus dažniausiai ryškiausia X forma; apie 7–8 metus kojos paprastai artėja prie neutralesnės ašies; kai kuriems vaikams galutinis „išsitiesinimas“ užtrunka ilgiau, iki vėlesnio vaikystės amžiaus.',
      normalAgeNote: 'Svarbu: tai orientacinė raidos kreivė, o ne absoliuti taisyklė kiekvienam vaikui. Vertiname visą klinikinį vaizdą.',

      ageSignsTitle: 'Požymiai pagal amžių',
      age1_3Title: '1–3 metai',
      age1_3Note: 'Šiame amžiuje O forma dažnai būna normali.',
      age1_3Signs: ['O deformacija labai ryški', 'tik viena koja akivaizdžiai labiau iškrypusi', 'deformacija didėja po 2 metų', 'vaikas šlubuoja ar vengia remtis koja', 'yra skausmas ar ryškus funkcijos ribojimas'],
      age4_7Title: '4–7 metai',
      age4_7Note: 'X forma šiame amžiuje dažnai fiziologinė.',
      age4_7Signs: ['X deformacija labai ryški ir progresuojanti', 'vaikas skundžiasi kelių ar blauzdų skausmu', 'greitai pavargsta vaikščiodamas', 'dažnai klumpa, bėga nestabiliai', 'deformacija aiškiai asimetriška'],
      age8_12Title: '8–12 metai',
      age8_12Signs: ['persistuojanti ryški X arba O deformacija', 'kojos neartėja prie neutralesnės ašies', 'didėja skausmas ir krūvio netoleravimas', 'blogėja bėgimo/šuoliavimo kokybė', 'kelio ar čiurnos perkrovos simptomai'],
      age13_19Title: '13–19 metai',
      age13_19Signs: ['pasikartojantys kelio skausmai', 'patelofemoralinio sąnario perkrova', 'čiurnų ir pėdų kompensacijos', 'prastesnė sportinė veikla', 'didesnė ankstyvų degeneracinių pokyčių rizika'],

      redFlagsTitle: 'Kada būtina kreiptis skubiai',
      redFlags: ['vaikas staiga pradėjo ryškiai šlubuoti', 'negali remtis koja', 'stiprus skausmas, paraudimas, patinimas ar karštis sąnaryje', 'skausmą lydi karščiavimas', 'atsiranda neurologiniai požymiai (silpnumas, jutimų pokyčiai)', 'po traumos matoma aiški deformacija', 'deformacija labai greitai progresuoja per trumpą laikotarpį'],

      causesTitle: 'Dažniausios priežastys',
      causesPhysio: 'Fiziologinė raida – dažniausia priežastis mažiems vaikams yra normali augimo eiga.',
      causesPatho: 'Patologinės priežastys (kai deformacija netipiška pagal amžių ar simptomus):',
      causesPathoList: ['Blount liga', 'rachitas ar kiti metaboliniai kaulų sutrikimai', 'augimo plokštelių pažeidimai po traumų ar infekcijų', 'genetinės ir skeleto displazijų grupės būklės', 'nutukimo įtaka biomechanikai (ypač X deformacijos atveju)', 'retesnės navikinės ar sisteminės priežastys'],
      causesNote: 'Svarbu ne tik „žiūrėti į kojas“, bet įvertinti bendrą vaiko augimą, proporcijas, funkciją ir simptomų dinamiką.',

      evalTitle: 'Kaip vyksta įvertinimas FitKid klinikoje',
      eval1Title: 'Tėvų ir vaiko pokalbis',
      eval1Items: ['kada pastebėta deformacija', 'ar ji didėja', 'ar yra skausmas, nuovargis, šlubavimas', 'sporto ir kasdienio aktyvumo ypatumus', 'augimo šuolius', 'traumas, buvusias ligas, šeimos istoriją'],
      eval2Title: 'Funkcinis vertinimas',
      eval2Items: ['kojų ašies padėtį stovint ir judant', 'kelių, klubų, čiurnų ir pėdų biomechaniką', 'eiseną ir bėgimo modelį', 'vienos kojos stabilumą', 'raumenų jėgos/mobilumo balansą', 'kompensacijas liemens ir dubens lygyje'],
      eval3Title: 'Kada rekomenduojame ortopedo konsultaciją',
      eval3Items: ['deformacija ryški ar progresuojanti', 'yra aiški asimetrija', 'simptomai išlieka nepaisant konservatyvios korekcijos', 'įtariama struktūrinė priežastis', 'reikia vaizdinių tyrimų ir ortopedinės taktikos'],

      physioTitle: 'Kaip padeda kineziterapija',
      physioGoals: 'Tikslai: sumažinti simptomus; pagerinti judesio kokybę; suvaldyti biomechanines kompensacijas; pagerinti ištvermę ir saugų aktyvumą.',
      physioProgramTitle: 'Individuali programa',
      physioProgramItems: ['klubų stabilizacija', 'liemens kontrole', 'kelio ašies valdymas', 'pėdos-čiurnos funkcija', 'vienos kojos balansas', 'taisyklingas žingsnio modelis'],
      physioLoadTitle: 'Krūvio korekcija',
      physioLoadItems: ['palaipsniui didinti krūvį', 'koreguoti sporto techniką', 'vengti perkrovos periodų be atsistatymo', 'planuoti judėjimo pertraukas mokyklos dienoje'],
      physioGaitTitle: 'Funkcinė eisenos korekcija',
      physioGaitItems: ['efektyvesnis žingsnio modelis', 'geresnė atramos fazės kontrolė', 'mažesnė kelio ir čiurnos perkrova', 'pasitikėjimas judėjimu'],

      massageTitle: 'Kokia masažo vieta šiame plane',
      massageBody: 'Masažas yra papildoma priemonė, kai: ryški raumenų įtampa po krūvio; skausmingos perkrautos zonos; reikia sumažinti diskomfortą prieš aktyvų darbą. Masažas gali pagerinti komfortą trumpuoju laikotarpiu; jis nepakeičia aktyvios kineziterapijos ir ortopedinio gydymo, jei jis būtinas.',

      orthoTitle: 'Ar reikia ortopedinių priemonių ar operacijos',
      orthoPhysio: 'Fiziologinėse situacijose: dauguma mažų vaikų atvejų nereikalauja operacijos ar „agresyvių“ priemonių; stebimi periodiškai.',
      orthoPatho: 'Patologinėse situacijose: ortopedas gali svarstyti augimo korekcijos metodus (guided growth, hemiepifiziodezė) augantiems vaikams; skeletui subrendus – osteotomiją. Šie sprendimai priklauso ortopedui; kineziterapija papildo gydymą prieš ir po intervencijų.',

      visitsTitle: 'Kiek vizitų dažniausiai prireikia',
      visits: [
        { label: '1 vizitas', desc: 'išsamus vertinimas ir planas' },
        { label: '4–6 vizitai', desc: 'pirmi stabilūs pokyčiai lengvesniais funkciniais atvejais' },
        { label: '8–12 vizitų', desc: 'skausmas, ryškesnės kompensacijos ar sporto perkrova' },
        { label: 'Palaikymas', desc: 'pagal augimo etapus ir sporto sezoną' },
      ],
      visitsCriteria: 'Progreso kriterijai: mažesnis skausmas; stabilesnė eisena; mažesnis nuovargis; geresnė žingsnio kokybė; mažiau simptomų po aktyvumo.',

      homeTitle: 'Ką tėvai gali daryti namuose',
      homeDo: ['užtikrinti reguliarų fizinį aktyvumą pagal amžių', 'riboti ilgą sėdėjimą be pertraukų', 'laikytis namų pratimų programos', 'stebėti simptomų dinamiką (skausmo dienynas)', 'užtikrinti tinkamą avalynę pagal veiklą', 'peržiūrėti svorio valdymą, jei yra antsvorio veiksnius'],
      homeDont: ['savarankiškai „gydyti“ internete rastais metodais be vertinimo', 'laukti mėnesiais, jei deformacija didėja', 'ignoruoti vienpusį šlubavimą ar nuolatinį skausmą', 'pasikliauti vien pasyviomis priemonėmis'],

      faqTitle: 'Dažniausiai užduodami klausimai (FAQ)',
      faq: [
        { q: 'Ar O kojos mažiems vaikams visada problema?', a: 'Ne. Ankstyvame amžiuje O forma dažnai yra fiziologinė ir mažėja savaime.' },
        { q: 'Ar X kojos 3-5 metų vaikui visada patologija?', a: 'Ne. Tame amžiuje tai dažnai yra normali raidos stadija.' },
        { q: 'Kada X deformacija jau laikoma įtartina?', a: 'Kai ji ryški, asimetriška, su skausmu, progresuoja ar išlieka po fiziologinio amžiaus.' },
        { q: 'Ar pratimai gali „ištiesinti kaulą“?', a: 'Pratimai gerina funkciją, kontrolę ir simptomus. Struktūrinio kaulo kampo korekcija priklauso nuo augimo ir ortopedinės taktikos.' },
        { q: 'Ar reikia specialių batų?', a: 'Vien batai dažniausiai neišsprendžia problemos. Avalynė turi būti patogi ir atitinkanti veiklą; planas dažniausiai apima ir aktyvią korekciją.' },
        { q: 'Ar masažas gali pakeisti kineziterapiją?', a: 'Ne. Masažas yra papildoma priemonė, o ilgalaikį rezultatą lemia aktyvus judesio planas.' },
        { q: 'Ar reikia rentgeno visiems vaikams su X/O forma?', a: 'Ne visada. Tyrimų poreikį sprendžia gydytojas pagal kliniką ir rizikos požymius.' },
        { q: 'Ar antsvoris gali pabloginti X kojų simptomus?', a: 'Taip, didesnė apkrova gali stiprinti simptomus ir funkcinius apribojimus.' },
        { q: 'Ar vaikas gali sportuoti?', a: 'Dažniausiai taip, su individualiai pritaikytu krūviu ir technikos korekcija.' },
        { q: 'Kada būtina ortopedo konsultacija?', a: 'Kai deformacija ryški, asimetriška, progresuojanti, skausminga arba išlieka už fiziologinio amžiaus ribų.' },
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
        { href: '/vaiku-kineziterapija#ploksciapedyste', label: 'Plokščiapėdystė' },
        { href: '/ka-gydome/reabilitacija-po-traumu-vaikams', label: 'Reabilitacija po traumų' },
      ],

      ctaTitle: 'Registracija',
      ctaDesc: 'Jei matote, kad vaiko kojų ašis ryškiai keičiasi, atsirado skausmas ar eisenos sutrikimas, registruokitės į išsamų vertinimą.',
      ctaRegister: 'Registruotis vizitui',
      ctaPhone: '+37066699676',
      ctaAddress: 'Adresas: Aludarių g. 7-43, Vilnius',

      medNote: 'Ši informacija yra informacinio pobūdžio ir nepakeičia individualios gydytojo konsultacijos. Jei būklė blogėja arba atsiranda pavojaus požymių, nedelsdami kreipkitės į gydytoją.',
    },
    en: {
      heroTitle: 'Bow legs and knock knees (X or O leg deformity) in children and adolescents: signs and what parents should do',
      heroSubtitle: 'What is normal development, when deformity is considered a problem, and how FitKid helps through physiotherapy and functional correction',
      heroNote: 'Not every X or O shape is a disease; but not every case can simply be "waited out".',

      intro1: 'Parents often notice that their child\'s legs look "crooked": some children have a more visible O shape (knees farther apart), others an X shape (knees closer, ankles farther). In most cases this is a natural part of growth that changes with age on its own.',
      intro2: 'However, when the deformity is marked, asymmetric, painful or progressing beyond what is typical for age, targeted assessment is needed.',
      intro3: 'Key message for parents: not every X or O shape is a disease; but not every case can simply be "waited out".',
      intro4: 'On this page we clearly explain: what is physiological (normal) development; when leg alignment is already considered pathological; which signs require urgent medical consultation; how FitKid clinic in Vilnius helps children through physiotherapy and functional correction; when orthopaedic follow-up or surgical treatment is necessary.',

      quickTitle: 'Short answer for parents',
      quickIntro: 'Children\'s leg alignment naturally changes with growth: in early childhood O shape is more common; in preschool age X shape is most often seen; later legs usually move toward a near-adult alignment.',
      quickNoTreatment: 'Usually no treatment is needed if:',
      quickNoTreatmentList: ['deformity is symmetric', 'there is no pain', 'the child is active and does not limp', 'the shape improves with age'],
      quickAssess: 'More active assessment is needed if:',
      quickAssessList: ['deformity is on one side only', 'it becomes more marked over time', 'it causes pain or gait disturbance', 'it persists beyond physiological age limits', 'the child is clearly shorter or lighter than peers without clear reason'],

      whatTitle: 'What are X and O leg deformities',
      oTitle: 'O legs (genu varum)',
      oBody: 'O shape means that when the child stands with ankles together there is a gap between the knees. In early childhood this is often a physiological condition.',
      xTitle: 'X legs (genu valgum)',
      xBody: 'X shape means that when the child stands with knees together there is a gap between the ankles. In preschool age this is often a physiological developmental stage.',
      problemTitle: 'When it is considered a problem',
      problemList: ['deformity persists too long for age', 'it increases rather than decreases', 'it is asymmetric', 'it causes pain, limping or functional limitation', 'there are additional systemic or neurological signs'],

      normalAgeTitle: 'What is normal by age',
      normalAgeIntro: 'In practice we use this pattern: from birth to about 2 years O shape is more common; around 3–4 years X shape is usually most pronounced; around 7–8 years legs usually approach a more neutral alignment; for some children final "straightening" takes longer, into later childhood.',
      normalAgeNote: 'Important: this is a guide, not an absolute rule for every child. We assess the full clinical picture.',

      ageSignsTitle: 'Signs by age',
      age1_3Title: '1–3 years',
      age1_3Note: 'At this age O shape is often normal.',
      age1_3Signs: ['O deformity is very marked', 'only one leg is clearly more crooked', 'deformity increases after 2 years', 'child limps or avoids loading the leg', 'there is pain or marked functional limitation'],
      age4_7Title: '4–7 years',
      age4_7Note: 'At this age X shape is often physiological.',
      age4_7Signs: ['X deformity is very marked and progressing', 'child complains of knee or shin pain', 'tires quickly when walking', 'often stumbles, runs unsteadily', 'deformity is clearly asymmetric'],
      age8_12Title: '8–12 years',
      age8_12Signs: ['persistent marked X or O deformity', 'legs do not approach more neutral alignment', 'increasing pain and load intolerance', 'worsening running/jumping quality', 'knee or ankle overload symptoms'],
      age13_19Title: '13–19 years',
      age13_19Signs: ['recurrent knee pain', 'patellofemoral overload', 'ankle and foot compensations', 'reduced sporting performance', 'higher risk of early degenerative changes'],

      redFlagsTitle: 'When to seek urgent help',
      redFlags: ['child suddenly started limping markedly', 'cannot bear weight on the leg', 'severe pain, redness, swelling or heat in the joint', 'pain is accompanied by fever', 'neurological signs appear (weakness, sensation changes)', 'visible deformity after trauma', 'deformity progresses very quickly over a short period'],

      causesTitle: 'Most common causes',
      causesPhysio: 'Physiological development – the most common cause in young children is normal growth.',
      causesPatho: 'Pathological causes (when deformity is atypical for age or symptoms):',
      causesPathoList: ['Blount disease', 'rickets or other metabolic bone disorders', 'growth plate damage after trauma or infection', 'genetic and skeletal dysplasia conditions', 'obesity affecting biomechanics (especially X deformity)', 'rarer neoplastic or systemic causes'],
      causesNote: 'It is important not only to "look at the legs" but to assess the child\'s overall growth, proportions, function and symptom dynamics.',

      evalTitle: 'How assessment works at FitKid clinic',
      eval1Title: 'Discussion with parents and child',
      eval1Items: ['when the deformity was noticed', 'whether it is increasing', 'whether there is pain, fatigue, limping', 'sport and daily activity patterns', 'growth spurts', 'trauma, past illness, family history'],
      eval2Title: 'Functional assessment',
      eval2Items: ['leg alignment when standing and moving', 'knee, hip, ankle and foot biomechanics', 'gait and running pattern', 'single-leg stability', 'muscle strength/mobility balance', 'trunk and pelvic compensations'],
      eval3Title: 'When we recommend orthopaedic consultation',
      eval3Items: ['deformity is marked or progressing', 'there is clear asymmetry', 'symptoms persist despite conservative correction', 'structural cause is suspected', 'imaging and orthopaedic strategy are needed'],

      physioTitle: 'How physiotherapy helps',
      physioGoals: 'Goals: reduce symptoms; improve movement quality; manage biomechanical compensations; improve endurance and safe activity.',
      physioProgramTitle: 'Individual programme',
      physioProgramItems: ['hip stabilisation', 'trunk control', 'knee axis control', 'foot-ankle function', 'single-leg balance', 'correct step pattern'],
      physioLoadTitle: 'Load correction',
      physioLoadItems: ['gradually increase load', 'correct sport technique', 'avoid overload periods without recovery', 'plan movement breaks during the school day'],
      physioGaitTitle: 'Functional gait correction',
      physioGaitItems: ['more efficient step pattern', 'better stance phase control', 'reduced knee and ankle overload', 'confidence in movement'],

      massageTitle: 'Role of massage in this plan',
      massageBody: 'Massage is an adjunct when: there is marked muscle tension after load; painful overloaded areas; discomfort needs to be reduced before active work. Massage can improve short-term comfort; it does not replace active physiotherapy or orthopaedic treatment when that is needed.',

      orthoTitle: 'Are orthotic measures or surgery needed',
      orthoPhysio: 'In physiological situations: most young children do not need surgery or "aggressive" measures; they are monitored periodically.',
      orthoPatho: 'In pathological situations: the orthopaedic surgeon may consider growth correction (guided growth, hemiepiphysiodesis) in growing children; after skeletal maturity – osteotomy. These decisions are for the orthopaedic surgeon; physiotherapy complements treatment before and after interventions.',

      visitsTitle: 'How many visits are usually needed',
      visits: [
        { label: '1 visit', desc: 'full assessment and plan' },
        { label: '4–6 visits', desc: 'first stable changes in lighter functional cases' },
        { label: '8–12 visits', desc: 'pain, clearer compensations or sport overload' },
        { label: 'Support', desc: 'according to growth stages and sport season' },
      ],
      visitsCriteria: 'Progress criteria: less pain; more stable gait; less fatigue; better step quality; fewer symptoms after activity.',

      homeTitle: 'What parents can do at home',
      homeDo: ['ensure regular physical activity for age', 'limit long sitting without breaks', 'follow the home exercise programme', 'monitor symptom dynamics (pain diary)', 'ensure suitable footwear for activity', 'review weight management if overweight is a factor'],
      homeDont: ['self-"treat" with methods found online without assessment', 'wait for months if deformity is increasing', 'ignore one-sided limping or constant pain', 'rely only on passive measures'],

      faqTitle: 'Frequently asked questions (FAQ)',
      faq: [
        { q: 'Are O legs always a problem in young children?', a: 'No. In early childhood O shape is often physiological and improves on its own.' },
        { q: 'Are X legs always pathology in a 3–5 year old?', a: 'No. At that age it is often a normal developmental stage.' },
        { q: 'When is X deformity already considered suspicious?', a: 'When it is marked, asymmetric, with pain, progressing or persisting beyond physiological age.' },
        { q: 'Can exercises "straighten the bone"?', a: 'Exercises improve function, control and symptoms. Structural bone angle correction depends on growth and orthopaedic strategy.' },
        { q: 'Are special shoes needed?', a: 'Shoes alone usually do not fix the problem. Footwear should be comfortable and suited to activity; the plan usually includes active correction too.' },
        { q: 'Can massage replace physiotherapy?', a: 'No. Massage is an adjunct; long-term results come from an active movement plan.' },
        { q: 'Is X-ray needed for all children with X/O shape?', a: 'Not always. The need for tests is decided by the doctor based on clinical picture and risk signs.' },
        { q: 'Can overweight worsen X leg symptoms?', a: 'Yes, greater load can increase symptoms and functional limitations.' },
        { q: 'Can the child do sport?', a: 'Usually yes, with individually adapted load and technique correction.' },
        { q: 'When is orthopaedic consultation necessary?', a: 'When deformity is marked, asymmetric, progressing, painful or persists beyond physiological age limits.' },
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
        { href: '/vaiku-kineziterapija#ploksciapedyste', label: 'Flat feet' },
        { href: '/ka-gydome/reabilitacija-po-traumu-vaikams', label: 'Rehabilitation after trauma' },
      ],

      ctaTitle: 'Registration',
      ctaDesc: 'If you notice that your child\'s leg alignment is changing markedly, or pain or gait disturbance has appeared, book a full assessment.',
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
            <p className="text-lg text-gray-700 leading-relaxed mb-4">{txt.quickIntro}</p>
            <p className="text-gray-700 font-medium mb-2">{txt.quickNoTreatment}</p>
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
                <h3 className="text-xl font-bold text-[#54B6FC] mb-2">{txt.oTitle}</h3>
                <p className="text-gray-700 leading-relaxed">{txt.oBody}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#54B6FC] mb-2">{txt.xTitle}</h3>
                <p className="text-gray-700 leading-relaxed">{txt.xBody}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{txt.problemTitle}</h3>
                <ul className="space-y-2">
                  {txt.problemList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{txt.normalAgeTitle}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{txt.normalAgeIntro}</p>
            <p className="text-gray-600 text-sm italic">{txt.normalAgeNote}</p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">{txt.ageSignsTitle}</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#54B6FC] mb-2">{txt.age1_3Title}</h3>
                <p className="text-gray-500 text-sm italic mb-4">{txt.age1_3Note}</p>
                <ul className="space-y-2">
                  {txt.age1_3Signs.map((s, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{s}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#54B6FC] mb-2">{txt.age4_7Title}</h3>
                <p className="text-gray-500 text-sm italic mb-4">{txt.age4_7Note}</p>
                <ul className="space-y-2">
                  {txt.age4_7Signs.map((s, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{s}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#54B6FC] mb-4">{txt.age8_12Title}</h3>
                <ul className="space-y-2">
                  {txt.age8_12Signs.map((s, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{s}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{txt.redFlagsTitle}</h2>
            <ul className="space-y-3">
              {txt.redFlags.map((flag, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-red-50 border-l-4 border-red-400 rounded-r-lg px-5 py-3">
                  <span className="text-red-500 font-bold">!</span>
                  <span className="text-gray-800">{flag}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{txt.causesTitle}</h2>
            <p className="text-gray-700 mb-4">{txt.causesPhysio}</p>
            <p className="text-gray-700 font-medium mb-2">{txt.causesPatho}</p>
            <ul className="space-y-2 mb-4">
              {txt.causesPathoList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{item}</span></li>
              ))}
            </ul>
            <p className="text-gray-600 text-sm italic">{txt.causesNote}</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{txt.evalTitle}</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#54B6FC]">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{txt.eval1Title}</h3>
                <ul className="space-y-1">
                  {txt.eval1Items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600"><span className="text-[#54B6FC]">•</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#54B6FC]">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{txt.eval2Title}</h3>
                <ul className="space-y-1">
                  {txt.eval2Items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600"><span className="text-[#54B6FC]">•</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#54B6FC]">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{txt.eval3Title}</h3>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{txt.physioTitle}</h2>
            <p className="text-gray-700 mb-6">{txt.physioGoals}</p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#54B6FC] mb-2">{txt.physioProgramTitle}</h3>
                <ul className="space-y-2">
                  {txt.physioProgramItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{item}</span></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#54B6FC] mb-2">{txt.physioLoadTitle}</h3>
                <ul className="space-y-2">
                  {txt.physioLoadItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{item}</span></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#54B6FC] mb-2">{txt.physioGaitTitle}</h3>
                <ul className="space-y-2">
                  {txt.physioGaitItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{item}</span></li>
                  ))}
                </ul>
              </div>
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{txt.orthoTitle}</h2>
            <p className="text-gray-700 mb-4">{txt.orthoPhysio}</p>
            <p className="text-gray-700">{txt.orthoPatho}</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{txt.visitsTitle}</h2>
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
                <h3 className="text-xl font-bold text-green-700 mb-4">✓ {currentLang === 'lt' ? 'Kas daryti' : 'Do'}</h3>
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
