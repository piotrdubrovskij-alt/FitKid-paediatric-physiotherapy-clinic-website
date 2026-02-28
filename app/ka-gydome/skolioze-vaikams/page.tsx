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

export default function SkoliozeVaikamsPage() {
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
      heroTitle: 'Skoliozė ir kiti stuburo iškrypimai vaikams ir paaugliams: požymiai ir ką daryti tėvams',
      heroSubtitle: 'Kas yra skoliozė, kokie požymiai pagal amžių ir kaip FitKid padeda kartu su ortopedine stebėsena',
      heroNote: 'Kuo anksčiau atliktas įvertinimas ir pradėta korekcija, tuo daugiau galimybių kontroliuoti progresiją.',

      intro1: 'Skoliozė ir kiti stuburo iškrypimai dažniausiai progresuoja nepastebimai. Tėvai pirmiausia mato ne diagnozę, o kasdienius signalus: nelygius pečius, pasisukusį liemenį, greitesnį nugaros nuovargį, skundus dėl skausmo po mokyklos ar treniruočių.',
      intro2: 'Dalis laikysenos pokyčių yra funkciniai ir koreguojami, tačiau daliai vaikų reikalinga ortopedinė stebėsena, o kai kuriais atvejais – aktyvus gydymas įtvaru ar operacinis gydymas.',
      intro3: 'Svarbiausia tėvams: neignoruoti progresuojančios asimetrijos; laiku atlikti klinikinį vertinimą; suprasti, kad kineziterapija yra būtina funkcinės korekcijos dalis, bet ji nepakeičia ortopedinio gydymo, kai yra aiškios indikacijos.',
      intro4: 'Šiame puslapyje aiškiai paaiškiname: kas yra skoliozė ir kuo ji skiriasi nuo kitų stuburo iškrypimų; kokie požymiai pagal amžių svarbiausi; kada būtina skubi gydytojo konsultacija; kaip FitKid klinikoje Vilniuje vertiname judesį ir laikyseną; kaip kineziterapija ir masažas padeda vaikui kasdienybėje bei sporte.',

      quickTitle: 'Trumpas atsakymas tėvams',
      quickBody: 'Skoliozė yra struktūrinis stuburo iškrypimas trimatėje erdvėje, dažniausiai nustatomas vaikystėje ar paauglystėje. Ji nėra tas pats, kas „susikūprinimas“ ar laikina netaisyklinga laikysena. Tuo tarpu kiti stuburo iškrypimai, pavyzdžiui, hiperkifozė ar hiperlordozė, gali būti tiek funkciniai, tiek struktūriniai.',
      quickList: ['pradėti nuo tikslaus įvertinimo', 'turėti aiškų stebėsenos planą', 'laiku įtraukti kineziterapiją', 'esant indikacijoms, laikytis ortopedo rekomendacijų dėl įtvaro ar kitos taktikos'],

      whatTitle: 'Kas yra skoliozė ir kokie dar būna stuburo iškrypimai',
      scoliosisTitle: 'Skoliozė',
      scoliosisBody: 'Skoliozė yra šoninis stuburo iškrypimas su slankstelių rotacija. Dažniausiai vaikų amžiuje kalbame apie idiopatinę skoliozę, kai tiksli priežastis neaiški. Svarbus faktas: bloga laikysena skoliozės „nesukelia“, bet gali pabloginti bendrą judesio kokybę ir savijautą.',
      functionalTitle: 'Funkcinė skoliozinė laikysena',
      functionalBody: 'Kai vaikas stovi asimetriškai dėl raumenų disbalanso, skausmo, pėdų ar dubens ypatumų, gali susidaryti „skoliozinis vaizdas“ be ryškaus struktūrinio iškrypimo. Tokiais atvejais kineziterapija dažnai duoda labai gerą efektą.',
      hyperkyphosisTitle: 'Hiperkifozė',
      hyperkyphosisBody: 'Padidėjęs krūtininės dalies linkis („susikūprinimas“). Gali būti laikysenos tipo (lankstesnė, dažniausiai koreguojama aktyvia terapija) arba struktūrinė (pvz., Scheuermann liga), kuriai reikalinga ortopedinė stebėsena.',
      hyperlordosisTitle: 'Hiperlordozė',
      hyperlordosisBody: 'Padidėjęs juosmens linkis. Dažnai susijęs su liemens ir dubens kontrolės stoka, raumenų disbalansu, mažesniu aktyvumu ar augimo šuoliais.',
      otherTitle: 'Kiti iškrypimai',
      otherBody: 'Rečiau pasitaiko įgimti ar neuromuskuliniai iškrypimai. Tokiais atvejais reikalingas daugiadalykis gydymas: gydytojas ortopedas, neurologas, reabilitacijos komanda.',

      ageSignsTitle: 'Požymiai pagal amžių: ką stebėti tėvams',
      age1_4Title: '1–4 metai',
      age1_4Note: 'Šiame amžiuje svarbiausia judesio simetrija ir raidos kokybė.',
      age1_4Signs: ['liemuo nuolat krypsta į vieną pusę', 'vaikas stovi ar eina ryškiai asimetriškai', 'matomas pastovus „C“ modelis liemenyje', 'vaikas dažnai vengia tam tikrų judesių', 'asimetrija didėja, o ne mažėja'],
      age5_9Title: '5–9 metai',
      age5_9Signs: ['pečiai skirtingame aukštyje', 'viena mentė ryškesnė', 'liemens „trikampiai“ tarp rankų ir liemens nevienodi', 'viena klubų pusė aukštesnė', 'kartojasi nugaros nuovargis ar skausmas po dienos'],
      age10_14Title: '10–14 metai (aukščiausios rizikos periodas)',
      age10_14Note: 'Augimo šuolis yra didžiausias progresijos rizikos langas, ypač idiopatinės skoliozės atveju.',
      age10_14Signs: ['progresuojanti asimetrija per kelis mėnesius', 'ryškesnis „šonkaulių kuprelės“ vaizdas pasilenkus', 'drabužiai krenta nevienodai', 'greitesnis nuovargis sėdint ar sportuojant', 'periodiniai nugaros skausmai'],
      age15_19Title: '15–19 metai',
      age15_19Signs: ['lėtinis nugaros ar tarpumentės skausmas', 'ištvermės stoka', 'ribotas mobilumas', 'pasikartojančios perkrovos sporte', 'didėjantis nepasitenkinimas laikysena ir kūno kontūru'],

      whyNotIgnoreTitle: 'Kodėl šių būklių nereikėtų ignoruoti',
      whyNotIgnoreList: ['iškrypimas gali progresuoti augimo metu', 'didėja biomechaninės perkrovos', 'atsiranda lėtinis skausmas', 'blogėja judesio ekonomika, ištvermė', 'vėliau gali reikėti sudėtingesnio gydymo'],
      whyNotIgnoreNote: 'Kuo anksčiau pradedama stebėsena ir korekcija, tuo daugiau galimybių kontroliuoti progresą.',

      redFlagsTitle: 'Kada būtina kreiptis skubiai',
      redFlags: ['naktinis nugaros skausmas, pažadinantis iš miego', 'sparčiai didėjanti deformacija', 'rankų ar kojų silpnumas, tirpimas, jutimų pokyčiai', 'eisenos pablogėjimas, griuvinėjimas', 'šlapinimosi ar tuštinimosi kontrolės pokyčiai', 'karščiavimas, neaiškus svorio kritimas, bendras silpnumas', 'stiprus skausmas po traumos'],
      redFlagsNote: 'Tokiais atvejais pirmiausia reikalinga gydytojo diagnostika.',

      diagnosisTitle: 'Kaip nustatoma skoliozė ir kiti iškrypimai',
      clinicalTitle: 'Klinikinis vertinimas',
      clinicalItems: ['pečių, menčių, dubens lygis', 'liemens asimetrija', 'Adams testas (lenkiantis į priekį)', 'neurologinis įvertinimas, jei reikia'],
      imagingTitle: 'Vaizdiniai tyrimai',
      imagingItems: ['rentgenograma (Cobb kampo matavimas)', 'vertinimas pagal augimo stadiją', 'MRT pagal indikacijas (ypač esant neurologiniams signalams ar netipinei eigai)'],
      imagingNote: 'Ne kiekvienam vaikui su nugaros skausmu reikalingi skubūs tyrimai; tyrimų apimtį lemia klinikiniai „raudoni signalai“ ir gydytojo išvada.',

      treatmentTitle: 'Gydymo kryptys: nuo stebėsenos iki aktyvesnių sprendimų',
      treatmentIntro: 'Tikslus planas priklauso nuo: iškrypimo tipo; kreivumo dydžio; augimo likučio; progresijos tempo; simptomų.',
      treatmentDirections: ['stebėsena su periodiniais kontroliniais vertinimais', 'kineziterapija ir specializuoti pratimai', 'įtvaras (kai yra aiškios ortopedinės indikacijos augimo metu)', 'chirurginis gydymas (esant didelėms, progresuojančioms kreivėms)'],
      treatmentPractical: ['mažesnės, neprogresuojančios kreivės dažniau stebimos', 'progresuojančios kreivės augimo metu dažniau vertinamos įtvaro taktikai', 'didelės progresuojančios kreivės gali būti operacinio gydymo objektas'],

      fitkidTitle: 'Kaip padedame FitKid klinikoje',
      fitkidIntro: 'FitKid klinikoje dirbame su funkcine puse: judesio kokybe, simetrija, skausmo kontrole, ištverme ir kasdienio aktyvumo atstatymu.',
      fitkid1: 'Funkcinis kineziterapinis įvertinimas – laikysena stovint, sėdint ir judant; liemens, dubens, mentės kontrolė; mobilumo ir stabilumo balansas; kvėpavimo ir krūtinės ląstos judesio modelis; eisena ir sporto judesių kompensacijos.',
      fitkid2: 'Individuali korekcinė mankšta – tikslai: gerinti ašinę kontrolę; didinti simetrišką jėgos pasiskirstymą; atkurti mobilumo-stabilumo balansą; mažinti skausmą ir nuovargį; didinti funkciją mokykloje ir sporte.',
      fitkid3: 'Kineziterapija augimo šuolio metu – dažnesnė kontrolė; pratimų adaptacija pagal greitai kintantį kūną; aiškus namų planas; krūvio valdymas tarp mokyklos ir sporto.',
      fitkid4: 'Pagalba nešiojant įtvarą – išlaikyti judesio kokybę; valdyti raumenų diskomfortą; adaptuoti mankštą prie režimo; išlaikyti motyvaciją ir nuoseklumą.',
      fitkid5: 'Masažas – papildoma priemonė: mažinti įtampą; gerinti komfortą; didinti toleranciją aktyviems pratimams. Masažas nepakeičia aktyvios korekcinės programos.',
      fitkid6: 'Grįžimas į sportą ir fizinį aktyvumą – individualiai adaptuotas krūvis; technikos kokybė; nuosekli stabilizacijos programa; progresavimo stebėsena.',

      visitsTitle: 'Kiek vizitų dažniausiai prireikia',
      visitsNote: 'Vizitų skaičių lemia diagnozė, simptomai ir namų plano laikymasis.',
      visits: [
        { label: '1 vizitas', desc: 'išsamus vertinimas ir planas' },
        { label: '4–6 vizitai', desc: 'pirmi stabilūs funkciniai pokyčiai' },
        { label: '8–12 vizitų', desc: 'ryškesniems atvejams, skausmui ar progresijai' },
        { label: 'Palaikymas', desc: 'periodinės kontrolės augimo metu' },
      ],
      visitsCriteria: 'Progreso kriterijai: mažesnis skausmas; geresnė laikysenos kontrolė; geresnė ištvermė; mažiau kompensacijų; stabilesnė būklė per kontrolinius vertinimus.',

      homeTitle: 'Ką tėvai gali daryti namuose',
      homeDo: ['užtikrinti reguliarų fizinį aktyvumą pagal amžių', 'daryti judesio pertraukas po ilgo sėdėjimo', 'laikytis namų pratimų plano 10–20 min. per dieną', 'stebėti kuprinės svorį ir nešiojimo būdą', 'užtikrinti pakankamą miegą ir atsistatymą', 'stebėti laikysenos pokyčius nuotraukomis kas 1–2 mėn.'],
      homeDont: ['„stebėjimo be plano“ augimo šuolio metu', 'vien pasyvių procedūrų be aktyvios mankštos', 'intensyvaus sporto per skausmą', 'nepatikrintų „stebuklingų“ metodų su garantijomis'],

      faqTitle: 'Dažniausiai užduodami klausimai (FAQ)',
      faq: [
        { q: 'Ar skoliozę sukelia netaisyklinga laikysena?', a: 'Ne. Netaisyklinga laikysena gali bloginti savijautą, bet idiopatinės skoliozės tiesiogiai nesukelia.' },
        { q: 'Ar kiekvienai skoliozei reikia operacijos?', a: 'Ne. Daugeliui vaikų taikoma stebėsena, pratimai ar įtvaras. Operacija reikalinga daliai progresuojančių sunkių atvejų.' },
        { q: 'Ar su skolioze galima sportuoti?', a: 'Dažniausiai taip. Sportas dažnai rekomenduojamas, jei krūvis pritaikytas ir stebima judesio kokybė.' },
        { q: 'Ar kineziterapija gali „ištiesinti“ kiekvieną kreivę?', a: 'Tikslas dažniausiai yra ne „nulio kampas“, o progresijos kontrolė, funkcijos gerinimas, skausmo mažinimas ir gyvenimo kokybė.' },
        { q: 'Ar įtvaras pakeičia kineziterapiją?', a: 'Ne. Įtvaras ir kineziterapija dažnai papildo vienas kitą.' },
        { q: 'Ar skoliozė visada skauda?', a: 'Ne. Dalis vaikų skausmo nejaučia, todėl reikalinga reguliari stebėsena net be skausmo.' },
        { q: 'Kaip dažnai reikia kontrolės?', a: 'Dažnį nustato ortopedas pagal augimą ir progresijos riziką. Augimo šuolio metu kontrolės dažnesnės.' },
        { q: 'Ar masažas gali būti vienintelis gydymas?', a: 'Ne. Masažas yra pagalbinė priemonė, o bazė yra aktyvi kineziterapija ir medicininė stebėsena.' },
        { q: 'Kada reikalinga MRT?', a: 'Kai klinikinė eiga netipinė arba yra neurologinių požymių, MRT sprendžia gydytojas.' },
        { q: 'Ar galima laukti „kol išaugs“?', a: 'Be plano laukti nerekomenduojama. Augimo metu būklė gali progresuoti.' },
      ],

      specialistsTitle: 'Kodėl tėvai renkasi FitKid',
      specialistsSubtitle: 'FitKid yra vaikų ir paauglių kineziterapijos klinika Vilniuje, orientuota į aiškų, matuojamą progresą ir bendradarbiavimą su tėvais bei gydytojais.',
      specialistAgne: 'Agnė Juodytė',
      specialistAgneRole: 'vaikų kineziterapeutė, Vojta terapijos praktikė',
      specialistKsenija: 'Ksenija Persijanova',
      specialistKsenijaRole: 'vaikų ir paauglių kineziterapeutė',
      specialistRamune: 'Ramunė Nemeikaitė',
      specialistRamuneRole: 'gydomojo masažo specialistė, dirba su vaikais ir paaugliais',

      relatedTitle: 'Susijusios temos',
      related: [
        { href: '/ka-gydome/netaisyklinga-laikysena-vaikams', label: 'Netaisyklinga laikysena' },
        { href: '/vaiku-kineziterapija#nugaros-skausmai', label: 'Nugaros, kaklo ir pečių skausmai' },
        { href: '/vaiku-kineziterapija#ploksciapedyste', label: 'Plokščiapėdystė' },
        { href: '/vaiku-kineziterapija#kreivos-kojos', label: 'Kreivos kojos (X/O)' },
        { href: '/vaiku-kineziterapija#reabilitacija', label: 'Reabilitacija po traumų' },
      ],

      ctaTitle: 'Registracija',
      ctaDesc: 'Jei matote progresuojančią asimetriją, nugaros skausmus ar laikysenos blogėjimą, registruokitės į vertinimą.',
      ctaRegister: 'Registruotis vizitui',
      ctaPhone: '+37066699676',
      ctaAddress: 'Adresas: Aludarių g. 7-43, Vilnius',

      medNote: 'Ši informacija yra informacinio pobūdžio ir nepakeičia individualios gydytojo konsultacijos. Jei būklė blogėja arba atsiranda pavojaus požymių, nedelsdami kreipkitės į gydytoją.',
    },
    en: {
      heroTitle: 'Scoliosis and other spinal deformities in children and adolescents: signs and what parents should do',
      heroSubtitle: 'What scoliosis is, signs by age, and how FitKid helps alongside orthopaedic follow-up',
      heroNote: 'The earlier assessment and correction start, the more options to control progression.',

      intro1: 'Scoliosis and other spinal deformities often progress unnoticed. Parents first notice everyday signs: uneven shoulders, rotated trunk, quicker back fatigue, complaints of pain after school or training.',
      intro2: 'Some postural changes are functional and correctable, but some children need orthopaedic follow-up, and in some cases – active bracing or surgical treatment.',
      intro3: 'Key for parents: do not ignore progressing asymmetry; have a clinical assessment in time; understand that physiotherapy is an essential part of functional correction but does not replace orthopaedic treatment when clearly indicated.',
      intro4: 'On this page we explain: what scoliosis is and how it differs from other spinal deformities; which signs by age matter most; when urgent medical consultation is needed; how we assess movement and posture at FitKid clinic in Vilnius; how physiotherapy and massage help the child in daily life and sport.',

      quickTitle: 'Short answer for parents',
      quickBody: 'Scoliosis is a structural spinal curvature in three dimensions, usually identified in childhood or adolescence. It is not the same as "slouching" or temporary poor posture. Other deformities such as hyperkyphosis or hyperlordosis can be either functional or structural.',
      quickList: ['start with a proper assessment', 'have a clear follow-up plan', 'include physiotherapy in time', 'when indicated, follow orthopaedic recommendations on bracing or other tactics'],

      whatTitle: 'What is scoliosis and what other spinal deformities exist',
      scoliosisTitle: 'Scoliosis',
      scoliosisBody: 'Scoliosis is a lateral curvature of the spine with rotation of vertebrae. In children we usually mean idiopathic scoliosis, where the exact cause is unclear. Important: poor posture does not "cause" scoliosis but can worsen overall movement quality and comfort.',
      functionalTitle: 'Functional scoliotic posture',
      functionalBody: 'When a child stands asymmetrically due to muscle imbalance, pain, foot or pelvic factors, a "scoliotic look" can appear without a clear structural curve. In such cases physiotherapy often gives very good results.',
      hyperkyphosisTitle: 'Hyperkyphosis',
      hyperkyphosisBody: 'Increased thoracic curve ("hunchback"). Can be postural (more flexible, often corrected with active therapy) or structural (e.g. Scheuermann\'s disease), requiring orthopaedic follow-up.',
      hyperlordosisTitle: 'Hyperlordosis',
      hyperlordosisBody: 'Increased lumbar curve. Often linked to poor trunk and pelvic control, muscle imbalance, less activity or growth spurts.',
      otherTitle: 'Other deformities',
      otherBody: 'Congenital or neuromuscular curves are rarer. These require multidisciplinary care: orthopaedic surgeon, neurologist, rehabilitation team.',

      ageSignsTitle: 'Signs by age: what parents should watch',
      age1_4Title: '1–4 years',
      age1_4Note: 'At this age movement symmetry and development quality matter most.',
      age1_4Signs: ['trunk consistently leans to one side', 'child stands or walks clearly asymmetrically', 'constant "C" pattern in the trunk', 'child often avoids certain movements', 'asymmetry increases rather than decreases'],
      age5_9Title: '5–9 years',
      age5_9Signs: ['shoulders at different heights', 'one shoulder blade more prominent', 'uneven "triangles" between arms and trunk', 'one hip higher', 'repeated back fatigue or pain after the day'],
      age10_14Title: '10–14 years (highest risk period)',
      age10_14Note: 'Growth spurt is the biggest window for progression risk, especially in idiopathic scoliosis.',
      age10_14Signs: ['progressive asymmetry over months', 'more obvious "rib hump" when bending forward', 'clothes hang unevenly', 'quicker fatigue when sitting or exercising', 'periodic back pain'],
      age15_19Title: '15–19 years',
      age15_19Signs: ['chronic back or thoracic pain', 'reduced endurance', 'limited mobility', 'repeated overload with sport', 'growing dissatisfaction with posture and body shape'],

      whyNotIgnoreTitle: 'Why these conditions should not be ignored',
      whyNotIgnoreList: ['the curve can progress during growth', 'biomechanical loads increase', 'chronic pain can develop', 'movement economy and endurance worsen', 'more complex treatment may be needed later'],
      whyNotIgnoreNote: 'The earlier follow-up and correction start, the more chance to control progression.',

      redFlagsTitle: 'When to seek urgent help',
      redFlags: ['night-time back pain that wakes from sleep', 'rapidly increasing deformity', 'arm or leg weakness, numbness, sensation changes', 'worsening gait, stumbling', 'changes in bladder or bowel control', 'fever, unexplained weight loss, general weakness', 'severe pain after trauma'],
      redFlagsNote: 'In these cases medical diagnosis is needed first.',

      diagnosisTitle: 'How scoliosis and other deformities are diagnosed',
      clinicalTitle: 'Clinical assessment',
      clinicalItems: ['shoulder, scapular, pelvic level', 'trunk asymmetry', 'Adams test (forward bend)', 'neurological assessment if needed'],
      imagingTitle: 'Imaging',
      imagingItems: ['X-ray (Cobb angle measurement)', 'assessment by growth stage', 'MRI when indicated (especially with neurological signs or atypical course)'],
      imagingNote: 'Not every child with back pain needs urgent imaging; the scope is determined by clinical red flags and the doctor\'s judgment.',

      treatmentTitle: 'Treatment options: from observation to active intervention',
      treatmentIntro: 'The exact plan depends on: type of deformity; curve size; growth remaining; rate of progression; symptoms.',
      treatmentDirections: ['observation with periodic clinical review', 'physiotherapy and specific exercises', 'bracing (when there are clear orthopaedic indications during growth)', 'surgical treatment (for large, progressive curves)'],
      treatmentPractical: ['smaller, non-progressive curves are often observed', 'progressive curves during growth are more often considered for bracing', 'large progressive curves may be candidates for surgery'],

      fitkidTitle: 'How we help at FitKid clinic',
      fitkidIntro: 'At FitKid we work on the functional side: movement quality, symmetry, pain control, endurance and return to daily activity.',
      fitkid1: 'Functional physiotherapy assessment – posture when standing, sitting and moving; trunk, pelvic, scapular control; mobility-stability balance; breathing and rib cage movement pattern; gait and sport movement compensations.',
      fitkid2: 'Individual corrective exercise programme – aims: improve axial control; increase symmetrical strength; restore mobility-stability balance; reduce pain and fatigue; improve function at school and in sport.',
      fitkid3: 'Physiotherapy during growth spurt – more frequent review; exercise adaptation to a rapidly changing body; clear home plan; load management between school and sport.',
      fitkid4: 'Support when wearing a brace – maintain movement quality; manage muscle discomfort; adapt exercise to the regime; maintain motivation and consistency.',
      fitkid5: 'Massage – as an adjunct: reduce tension; improve comfort; increase tolerance for active exercise. Massage does not replace an active corrective programme.',
      fitkid6: 'Return to sport and physical activity – individually adapted load; movement quality; consistent stabilisation programme; progression monitoring.',

      visitsTitle: 'How many visits are usually needed',
      visitsNote: 'The number depends on diagnosis, symptoms and adherence to the home plan.',
      visits: [
        { label: '1 visit', desc: 'full assessment and plan' },
        { label: '4–6 visits', desc: 'first stable functional changes' },
        { label: '8–12 visits', desc: 'for more marked cases, pain or progression' },
        { label: 'Maintenance', desc: 'periodic reviews during growth' },
      ],
      visitsCriteria: 'Progress criteria: less pain; better postural control; better endurance; fewer compensations; more stable condition at follow-up.',

      homeTitle: 'What parents can do at home',
      homeDo: ['ensure regular physical activity for age', 'take movement breaks after long sitting', 'follow the home exercise plan 10–20 min per day', 'check bag weight and how it is carried', 'ensure enough sleep and recovery', 'monitor postural changes with photos every 1–2 months'],
      homeDont: ['"watch and wait" without a plan during growth spurt', 'passive treatments only without active exercise', 'intense sport through pain', 'unproven "miracle" methods with guarantees'],

      faqTitle: 'Frequently asked questions (FAQ)',
      faq: [
        { q: 'Does poor posture cause scoliosis?', a: 'No. Poor posture can worsen comfort but does not directly cause idiopathic scoliosis.' },
        { q: 'Does every scoliosis need surgery?', a: 'No. Many children are managed with observation, exercises or bracing. Surgery is needed in a proportion of severe progressive cases.' },
        { q: 'Can you do sport with scoliosis?', a: 'Usually yes. Sport is often recommended if load is adapted and movement quality is monitored.' },
        { q: 'Can physiotherapy "straighten" every curve?', a: 'The aim is usually not "zero angle" but controlling progression, improving function, reducing pain and quality of life.' },
        { q: 'Does bracing replace physiotherapy?', a: 'No. Bracing and physiotherapy often complement each other.' },
        { q: 'Does scoliosis always hurt?', a: 'No. Some children have no pain, so regular follow-up is needed even without pain.' },
        { q: 'How often is follow-up needed?', a: 'Frequency is set by the orthopaedic surgeon based on growth and progression risk. More frequent during growth spurt.' },
        { q: 'Can massage be the only treatment?', a: 'No. Massage is an adjunct; the base is active physiotherapy and medical follow-up.' },
        { q: 'When is MRI needed?', a: 'When the clinical picture is atypical or there are neurological signs, the doctor decides on MRI.' },
        { q: 'Can we just wait until they grow?', a: 'Waiting without a plan is not recommended. The condition can progress during growth.' },
      ],

      specialistsTitle: 'Why parents choose FitKid',
      specialistsSubtitle: 'FitKid is a children and adolescent physiotherapy clinic in Vilnius, focused on clear, measurable progress and collaboration with parents and doctors.',
      specialistAgne: 'Agnė Juodytė',
      specialistAgneRole: 'paediatric physiotherapist, Vojta therapy practitioner',
      specialistKsenija: 'Ksenija Persijanova',
      specialistKsenijaRole: 'paediatric and adolescent physiotherapist',
      specialistRamune: 'Ramunė Nemeikaitė',
      specialistRamuneRole: 'therapeutic massage specialist, works with children and adolescents',

      relatedTitle: 'Related topics',
      related: [
        { href: '/ka-gydome/netaisyklinga-laikysena-vaikams', label: 'Poor posture' },
        { href: '/vaiku-kineziterapija#nugaros-skausmai', label: 'Back, neck and shoulder pain' },
        { href: '/vaiku-kineziterapija#ploksciapedyste', label: 'Flat feet' },
        { href: '/vaiku-kineziterapija#kreivos-kojos', label: 'Bow legs (X/O)' },
        { href: '/vaiku-kineziterapija#reabilitacija', label: 'Rehabilitation after injury' },
      ],

      ctaTitle: 'Registration',
      ctaDesc: 'If you notice progressing asymmetry, back pain or worsening posture, book an assessment.',
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
            <p className="text-gray-700 font-medium mb-2">{currentLang === 'lt' ? 'Praktinis kelias:' : 'Practical path:'}</p>
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

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{txt.whatTitle}</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#54B6FC] mb-2">{txt.scoliosisTitle}</h3>
                <p className="text-gray-700 leading-relaxed">{txt.scoliosisBody}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#54B6FC] mb-2">{txt.functionalTitle}</h3>
                <p className="text-gray-700 leading-relaxed">{txt.functionalBody}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#54B6FC] mb-2">{txt.hyperkyphosisTitle}</h3>
                <p className="text-gray-700 leading-relaxed">{txt.hyperkyphosisBody}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#54B6FC] mb-2">{txt.hyperlordosisTitle}</h3>
                <p className="text-gray-700 leading-relaxed">{txt.hyperlordosisBody}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#54B6FC] mb-2">{txt.otherTitle}</h3>
                <p className="text-gray-700 leading-relaxed">{txt.otherBody}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">{txt.ageSignsTitle}</h2>
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#54B6FC] mb-2">{txt.age1_4Title}</h3>
                <p className="text-gray-500 text-sm italic mb-4">{txt.age1_4Note}</p>
                <ul className="space-y-2">
                  {txt.age1_4Signs.map((s, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-[#54B6FC]">•</span><span className="text-gray-700">{s}</span></li>
                  ))}
                </ul>
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
                <h3 className="text-xl font-bold text-[#54B6FC] mb-2">{txt.age10_14Title}</h3>
                <p className="text-gray-500 text-sm italic mb-4">{txt.age10_14Note}</p>
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

        <section className="py-16 bg-[#FFF8F3]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{txt.whyNotIgnoreTitle}</h2>
            <ul className="space-y-2 mb-6">
              {txt.whyNotIgnoreList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#fb7825] mt-1">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg px-5 py-4">
              <p className="text-gray-800 leading-relaxed">{txt.whyNotIgnoreNote}</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{txt.diagnosisTitle}</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border-l-4 border-[#54B6FC]">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{txt.clinicalTitle}</h3>
                <ul className="space-y-1">
                  {txt.clinicalItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600"><span className="text-[#54B6FC]">•</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-[#54B6FC]">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{txt.imagingTitle}</h3>
                <ul className="space-y-1 mb-4">
                  {txt.imagingItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600"><span className="text-[#54B6FC]">•</span>{item}</li>
                  ))}
                </ul>
                <p className="text-gray-600 text-sm italic">{txt.imagingNote}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{txt.treatmentTitle}</h2>
            <p className="text-gray-700 mb-6">{txt.treatmentIntro}</p>
            <ul className="space-y-2 mb-6">
              {txt.treatmentDirections.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#54B6FC] mt-1">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 font-medium mb-2">{currentLang === 'lt' ? 'Praktinė orientacija:' : 'Practical orientation:'}</p>
            <ul className="space-y-2">
              {txt.treatmentPractical.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-600">
                  <span className="text-[#fb7825]">•</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{txt.fitkidTitle}</h2>
            <p className="text-gray-700 mb-8">{txt.fitkidIntro}</p>
            <div className="space-y-4">
              {[txt.fitkid1, txt.fitkid2, txt.fitkid3, txt.fitkid4, txt.fitkid5, txt.fitkid6].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-5 border-l-4 border-[#54B6FC]">
                  <span className="text-[#54B6FC] font-bold mr-2">{idx + 1}.</span>
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
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
