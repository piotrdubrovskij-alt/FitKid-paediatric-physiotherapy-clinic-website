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

export default function KluboDisplazijaPage() {
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
      heroTitle:
        'Kūdikių klubo sąnario displazija: požymiai ir ką daryti tėvams',
      heroSubtitle:
        'Požymiai pagal amžių, rizikos veiksniai, kada kreiptis skubiai ir kaip padeda kineziterapija kartu su ortopediniu gydymu',
      heroNote:
        'Ankstyvas klubo displazijos nustatymas yra kritiškai svarbus. Kuo anksčiau problema atpažįstama, tuo dažniau galima apsieiti be sudėtingesnių intervencijų.',

      intro1:
        'Klubo sąnario displazija kūdikiams (angl. developmental dysplasia of the hip) yra būklė, kai klubo „rutulio ir gūžduobės“ sąnarys formuojasi nepakankamai stabiliai. Paprastai šlaunikaulio galvutė turi tvirtai laikytis klubo gūžduobėje. Esant displazijai, gūžduobė gali būti per sekli, o galvutė – per laisva. Lengvesniais atvejais tai nestabilumas, sunkesniais – dalinis ar pilnas išnirimas.',
      intro2:
        'Ankstyvas nustatymas yra kritiškai svarbus. Kuo anksčiau problema atpažįstama, tuo dažniau galima apsieiti be sudėtingesnių intervencijų. Dėl to tėvams svarbiausia ne „atspėti diagnozę“, o laiku pastebėti signalus ir kreiptis į specialistus.',
      intro3:
        'Šiame puslapyje aiškiai paaiškiname: kokie požymiai dažniausiai matomi namuose; kokie kūdikiai turi didesnę riziką; kada reikalinga skubi gydytojo konsultacija; kaip FitKid klinikoje Vilniuje atliekame funkcinį įvertinimą ir padedame kineziterapija; kuo kineziterapija padeda kartu su ortopediniu gydymu, o ko ji nepakeičia.',

      quickTitle: 'Trumpas atsakymas tėvams',
      quickBody:
        'Klubo sąnario displazija reiškia nepakankamą klubo stabilumą ankstyvoje raidoje. Tai nėra „vien tik laikysenos smulkmena“, nes ilgainiui gali paveikti eiseną, judesių simetriją ir sąnario sveikatą ateityje.',
      quickListTitle: 'Svarbiausi praktiniai principai:',
      quickList: [
        'diagnozę patvirtina gydytojas ortopedas (klinikiniu vertinimu ir vaizdiniais tyrimais pagal amžių);',
        'ankstyvi atvejai dažnai sėkmingai valdomi ortopedinėmis priemonėmis (pvz., Pavlik dirželiais);',
        'kineziterapija yra svarbi pagalba – ji gerina judesio kokybę, simetriją, padeda tėvams saugiai prižiūrėti kūdikį, ypač gydymo metu ir po jo;',
        'kineziterapija nepakeičia ortopedinio gydymo, kai jis būtinas.',
      ],

      spectrumTitle: 'Kas yra klubo sąnario displazija ir kokie jos laipsniai',
      spectrumIntro:
        'Klubo sąnario displazija nėra vienas „taip/ne“ reiškinys. Būklė turi spektrą:',
      spectrumList: [
        'Nestabilus klubas – galvutė sąnaryje, bet laikosi per laisvai.',
        'Subluksacija – dalinis „išslydimas“ iš gūžduobės.',
        'Išnirimas – galvutė yra už gūžduobės ribų.',
      ],
      spectrumNote:
        'Praktikoje tai svarbu, nes nuo laipsnio priklauso gydymo taktika ir trukmė. Ankstyvas nestabilumas kartais stabilizuojasi stebint, o ryškesni atvejai reikalauja aktyvesnio ortopedinio gydymo.',

      ageTitle: 'Požymiai pagal amžių: ką tėvai gali pastebėti',
      ageGroups: [
        {
          age: '0–3 mėn.',
          note:
            'Šiuo laikotarpiu dalis kūdikių neturi ryškių išorinių požymių, todėl reguliarios patikros labai svarbios.',
          signs: [
            'viena kojytė sunkiau atvedama į šoną keičiant sauskelnes;',
            'asimetriškos šlaunų ar sėdmenų raukšlės;',
            '„vienpusis“ judesio modelis (kūdikis vieną pusę naudoja aktyviau).',
          ],
          bottomNote:
            'Vienas požymis dar nereiškia klubo displazijos, bet keli kartu yra signalas pasitikrinti.',
        },
        {
          age: '3–6 mėn.',
          note: 'Šiame amžiuje dažnesni signalai:',
          signs: [
            'ribota vienos pusės klubo atvedimo amplitudė;',
            'aiškesnė kojyčių judesių asimetrija;',
            'vienos pusės aktyvumo stoka vartymosi metu;',
            'netolygi atrama gulint ant pilvo.',
          ],
          bottomNote:
            'Šiame etape gydytojas pagal amžių parenka vaizdinį tyrimą, jei kyla įtarimas.',
        },
        {
          age: '6–12 mėn. ir vėliau',
          note:
            'Jei problema nepastebėta anksčiau, didėjant judrumui atsiranda aiškesni funkcijos pokyčiai.',
          signs: [
            'asimetriškas ropojimas;',
            '„tempimas“ per vieną pusę pereinant į sėdėjimą ar stojimą;',
            'ryški vienos pusės judesių amplitudės stoka;',
            'vėlesnė ar netolygi stovėsenos kontrolė.',
          ],
          bottomNote:
            'Po 12 mėn., kai vaikas pradeda vaikščioti, gali matytis šlubavimas, „ančių“ eisena ar funkcionaliai trumpesnė viena koja.',
        },
      ],

      whyNotIgnoreTitle: 'Kodėl klubo displazijos nereikėtų ignoruoti',
      whyNotIgnoreIntro:
        'Negydoma ar vėlai nustatyta klubo displazija didina ilgalaikių problemų riziką:',
      whyNotIgnoreList: [
        'netaisyklinga eisena;',
        'lėtinis judesio disbalansas;',
        'ankstyvesnis klubo sąnario dėvėjimasis;',
        'skausmai paauglystėje ar suaugus.',
      ],
      whyNotIgnoreNote:
        'Anksti diagnozavus rezultatai paprastai geresni, o invazinių intervencijų poreikis mažesnis. Tai svarbiausias argumentas nelaukti.',

      risksTitle: 'Rizikos veiksniai: kam reikia ypatingo dėmesio',
      risksIntro: 'Dažniau klubo displazija pasitaiko, jei yra:',
      risksList: [
        'sėdmeninė padėtis nėštumo pabaigoje ar gimdymo metu;',
        'teigiama šeimos anamnezė (tėvai, broliai / seserys turėjo klubo displaziją);',
        'mergaitė;',
        'pirmagimis;',
        'mažas vaisiaus vandenų kiekis;',
        'kiti ortopediniai ypatumai (pvz., tortikolis, pėdų deformacijos).',
      ],
      risksNote:
        'Svarbu: klubo displazija gali būti ir be akivaizdžių rizikos veiksnių. Todėl reikalingas ne tik „rizikos grupių“, bet ir visų kūdikių periodinis klubo įvertinimas.',

      urgentTitle: 'Kada būtina kreiptis skubiai',
      urgentListUrgentIntro: 'Skubiai kreipkitės į gydytoją, jei:',
      urgentListUrgent: [
        'viena kojytė staiga juda ženkliai mažiau;',
        'atsiranda ryškus skausmingumas judinant klubus;',
        'matote staigų funkcijos pablogėjimą (vaikas nebeatlieka anksčiau gebėtų judesių);',
        'pradėjus vaikščioti atsiranda aiškus šlubavimas;',
        'po traumos kūdikis neapkrauna kojos.',
      ],
      urgentListPlannedIntro: 'Planinei konsultacijai kreipkitės, jei:',
      urgentListPlanned: [
        'kartojasi ribotas kojytės atvedimas į šoną;',
        'nuolat matote asimetriškas raukšles ir judesio skirtumą;',
        'buvo rizikos veiksnių (ypač sėdmeninė padėtis ar šeimos istorija).',
      ],

      diagnosticsTitle: 'Kaip vyksta diagnostika ir stebėjimas',
      diagnosticsSteps: [
        {
          title: '1. Klinikinis vertinimas',
          text:
            'Gydytojas vertina klubo stabilumą, judesių amplitudes, raukšlių simetriją ir bendrą kūdikio motoriką.',
        },
        {
          title: '2. Vaizdinis tyrimas pagal amžių',
          text:
            'Dažniau taikomas ultragarsas ankstyvame kūdikystės amžiuje, vėliau – rentgenograma, kai klubo struktūros labiau osifikuotos.',
        },
        {
          title: '3. Tolesnė kontrolė pagal rezultatą',
          text:
            'Priklausomai nuo išvadų taikomas stebėjimas, ortopedinė korekcija (pvz., Pavlik diržai ar kitos priemonės), retesniais atvejais – operaciniai metodai.',
        },
      ],
      diagnosticsNote:
        'Normali viena apžiūra nereiškia, kad stebėsena nebereikalinga. Kai kuriems vaikams požymiai išryškėja vėliau, todėl kontrolės planas visada individualus.',

      howWeHelpTitle: 'Kaip padedame FitKid klinikoje',
      howWeHelpIntro:
        'FitKid klinikoje dirbame kaip funkcinės raidos komanda. Jei įtariama ar patvirtinta klubo displazija, mūsų tikslas – ne „diagnozuoti vietoj ortopedo“, o padėti vaikui judėti kuo kokybiškiau.',
      howWeHelpBullets: [
        'sumažinti kompensacijas;',
        'išlaikyti simetrišką raidą gydymo metu ir po jo;',
        'aiškiai apmokyti tėvus kasdieniams veiksmams.',
      ],

      physioTitle: 'Kineziterapija ir pagalbinės priemonės',
      physioBlocks: [
        {
          title: '1. Funkcinis kineziterapinis įvertinimas',
          items: [
            'klubo, dubens ir liemens simetrija;',
            'judesio kokybė pereinant tarp padėčių;',
            'kompensaciniai modeliai (vienpusis vartymasis, asimetrinė atrama);',
            'motorinės raidos etapų eiga;',
            'tėvų kasdienės priežiūros rutina.',
          ],
          note: 'Po įvertinimo pateikiame aiškų planą su prioritetais.',
        },
        {
          title: '2. Individuali kineziterapija',
          items: [
            'gerinti liemens ir dubens stabilumą;',
            'skatinti simetrišką kojų darbą;',
            'mokyti kokybiškų perėjimų tarp padėčių;',
            'mažinti vienpusio judesio dominavimą.',
          ],
          note:
            'Pratimų turinys derinamas su ortopedo rekomendacijomis ir gydymo etapu (ypač jei vaikas nešioja ortopedinę priemonę).',
        },
        {
          title: '3. Kineziterapija gydymo ortopedinėmis priemonėmis metu',
          items: [
            'saugiai imti, nešioti, perrengti, migdyti;',
            'organizuoti dienos režimą, kad išliktų saugus judrumas;',
            'išvengti nereikalingo streso kūdikiui;',
            'atpažinti signalus, kada kreiptis papildomai dėl odos, padėties ar diskomforto.',
          ],
        },
        {
          title: '4. Reabilitacija po ilgesnio imobilizavimo ar ortopedinių etapų',
          items: [
            'atkurti judesio amplitudžių kokybę;',
            'stiprinti atramą ir pusiausvyrą;',
            '„grąžinti“ simetrišką motorinį modelį;',
            'mažinti baimę judėti ir kompensacijas.',
          ],
        },
        {
          title: '5. Gydomasis masažas kūdikiams ir vaikams',
          items: [
            'mažinti antrinę raumenų įtampą;',
            'gerinti audinių toleraciją;',
            'didinti komfortą;',
            'paruošti vaiką aktyvesniam judesiui.',
          ],
          note:
            'Masažas derinamas su aktyviais pratimais – vien pasyvi terapija funkcinio rezultato neužtikrina.',
        },
        {
          title: '6. Hidroterapija (plukdymas)',
          items: [
            'saugiai aktyvinti judesius su mažesne gravitacine apkrova;',
            'didinti judesio pasitikėjimą;',
            'dirbti su simetrija ir ištverme švelniu režimu.',
          ],
          note:
            'Hidroterapijos planas visada individualus ir suderinamas su gydymo etapu.',
        },
      ],

      visitsTitle: 'Kiek vizitų dažniausiai prireikia',
      visitsIntro:
        'Vizitų kiekis priklauso nuo klubo displazijos laipsnio, vaiko amžiaus, taikomo ortopedinio gydymo ir namų plano nuoseklumo.',
      visitsTable: [
        { label: '1 vizitas', desc: 'išsamus funkcinis įvertinimas ir planas' },
        {
          label: '4–6 vizitai',
          desc: 'pirmi stabilūs judesio kokybės pokyčiai lengvesniais atvejais',
        },
        {
          label: '8–12 vizitų',
          desc: 'kai yra ryškesnė asimetrija ar ilgesnis ortopedinis etapas',
        },
        {
          label: 'Toliau',
          desc: 'palaikomasis planas pagal raidos etapą ir funkcinius tikslus',
        },
      ],
      visitsNote:
        'Svarbiausia ne vizitų skaičius, o aiškūs progreso kriterijai: simetriškesni perėjimai tarp padėčių, geresnė liemens / dubens kontrolė, mažiau kompensacijų ir nuosekli amžiui būdingų įgūdžių raida.',

      homeTitle: 'Ką tėvai gali daryti namuose iki vizito',
      homeDoTitle: 'Saugūs baziniai veiksmai',
      homeDo: [
        'laikytis gydytojo ortopedo nurodymų;',
        'dažnai keisti kūdikio padėtis dienos metu;',
        'skatinti simetrišką žaislų siekimą iš abiejų pusių;',
        'įtraukti kokybišką „tummy time“ pagal toleranciją;',
        'vengti ilgalaikio pasyvaus buvimo vienoje padėtyje;',
        'rinktis „hip-healthy“ vystymą ir nešiojimą (nekoreguoti kojų į tiesią, suspaustą poziciją).',
      ],
      homeDontTitle: 'Ko vengti',
      homeDont: [
        'savavališkai nuimti ar keisti ortopedinę priemonę;',
        'daryti atsitiktinius „internetinius“ pratimus be įvertinimo;',
        'agresyviai „tempti“ klubus per jėgą;',
        'laukti kelis mėnesius be jokio stebėjimo, jei signalai išlieka.',
      ],

      faqTitle: 'Dažniausiai užduodami klausimai',
      faq: [
        {
          q: 'Ar klubo displazija visada reiškia operaciją?',
          a:
            'Ne. Anksti nustačius, dažnai pakanka neoperacinių metodų. Operacija svarstoma, kai konservatyvus gydymas neveiksmingas arba diagnozė vėlyva.',
        },
        {
          q: 'Ar kineziterapija gali išgydyti klubo displaziją be ortopedo?',
          a:
            'Ne visais atvejais. Struktūrinę klubo displaziją diagnozuoja ir gydo ortopedas. Kineziterapija yra svarbi funkcinė pagalba prieš, per ir po ortopedinio gydymo.',
        },
        {
          q: 'Ar asimetriškos raukšlės visada reiškia klubo displaziją?',
          a:
            'Ne. Tai tik vienas iš signalų. Vertinama kartu su klubo judesių amplitudėmis ir kitais klinikiniais požymiais.',
        },
        {
          q: 'Kodėl svarbi ankstyva diagnostika?',
          a:
            'Ankstyvame amžiuje klubo struktūros lengviau koreguojamos, todėl gydymas dažniau būna paprastesnis ir trumpesnis.',
        },
        {
          q: 'Ar galima nešioti vaiką nešynėje?',
          a:
            'Galima, jei nešynė užtikrina „M“ poziciją ir leidžia klubo atvedimą bei sulenkimą, o ne tiesina ir suspaudžia kojas. Esant klubo displazijai, pasirinkimą derinkite su specialistu.',
        },
        {
          q: 'Ar vystymas gali pabloginti būklę?',
          a:
            'Tvirtas vystymas, kai kojos ištiesinamos ir suspaudžiamos, didina riziką. Rekomenduojamas „hip-healthy“ vystymas, leidžiantis kojoms laisvai judėti.',
        },
        {
          q: 'Ar klubo displazija sukelia skausmą kūdikystėje?',
          a:
            'Dažniausiai anksti skausmo nebūna, todėl būklė gali likti nepastebėta be patikros. Dėl to periodinės apžiūros labai svarbios.',
        },
        {
          q: 'Kiek dažnai reikia kontrolės?',
          a:
            'Pagal ortopedo planą ir būklės dinamiką. Kineziterapijoje kontrolė derinama pagal funkcinius tikslus ir raidos etapą.',
        },
        {
          q: 'Ar po sėkmingo gydymo problema gali grįžti?',
          a:
            'Dažniausiai rezultatai geri, bet stebėsena reikalinga iki pilno sąnario brandimo. Ankstyva kontrolė leidžia laiku pamatyti likutinius pokyčius.',
        },
        {
          q: 'Kada kreiptis, jei „nesu tikra“?',
          a:
            'Jei kyla klausimas dėl klubo simetrijos ar judesio kokybės, verta konsultuotis anksčiau. Laukimas be vertinimo dažnai prailgina kelią iki rezultato.',
        },
      ],

      teamTitle: 'Kodėl tėvai renkasi FitKid',
      teamIntro:
        'FitKid yra vaikų ir kūdikių kineziterapijos klinika Vilniuje, orientuota į aiškų planą ir funkcinius rezultatus, o ne į bendrines rekomendacijas.',
      specialistsTitle: 'Mūsų komanda',

      relatedTitle: 'Susijusios būklės',
      related: [
        { href: '/kudikiu-hipertonusas', label: 'Hipertonusas' },
        { href: '/ka-gydome/kudikiu-hipotonusas', label: 'Hipotonusas' },
        { href: '/kudikio-kreivakakliste', label: 'Kreivakaklystė' },
        { href: '/plagiocefalija', label: 'Plagiocefalija' },
        { href: '/motorines-raidos-velavimas', label: 'Motorinės raidos vėlavimas' },
      ],

      ctaTitle: 'Įtariate klubo sąnario displaziją?',
      ctaDesc:
        'Jei pastebite judesių asimetriją ar kitus klubo displazijos signalus, registruokitės į išsamų įvertinimą.',
      ctaRegister: 'Registruotis vizitui',
      ctaPhone: '+37066699676',
      ctaAddress: 'Aludarių g. 7-43, Vilnius',

      medNote:
        'Ši informacija yra informacinio pobūdžio ir nepakeičia individualios gydytojo konsultacijos. Jei būklė blogėja arba atsiranda pavojaus požymių, nedelsdami kreipkitės į gydytoją.',
      lastUpdated: '2026-02-22',
      reviewer: 'Agnė Juodytė, vaikų kineziterapeutė',
    },
    en: {
      heroTitle:
        'Infant Hip Dysplasia: Signs and What Parents Should Do',
      heroSubtitle:
        'Age-related signs, risk factors, when to seek urgent help and how physiotherapy supports orthopedic treatment',
      heroNote:
        'Early detection of hip dysplasia is critically important. The earlier the problem is recognised, the more often complex interventions can be avoided.',

      intro1:
        'Developmental dysplasia of the hip is a condition in which the “ball-and-socket” hip joint does not form with sufficient stability. Normally, the femoral head sits firmly in the hip socket. With dysplasia, the socket may be too shallow and the head too loose. In milder cases this means instability, in more severe cases – partial or complete dislocation.',
      intro2:
        'Early diagnosis is crucial. The earlier hip dysplasia is recognised, the more often it can be managed without more invasive procedures. For parents, the key is not to “guess the diagnosis” but to notice signals in time and consult specialists.',
      intro3:
        'On this page we explain: which signs parents can usually see at home; which infants have higher risk; when urgent medical consultation is needed; how we perform functional assessment and physiotherapy at FitKid clinic in Vilnius; and how physiotherapy supports orthopedic treatment and what it cannot replace.',

      quickTitle: 'Short answer for parents',
      quickBody:
        'Hip dysplasia means insufficient hip stability in early development. It is not “just a posture detail”, because over time it can affect gait, movement symmetry and long-term joint health.',
      quickListTitle: 'Key practical principles:',
      quickList: [
        'the diagnosis is confirmed by an orthopedic doctor (clinical assessment and age-appropriate imaging);',
        'early cases are often successfully managed with orthopedic devices (e.g. Pavlik harness);',
        'physiotherapy is essential support – it improves movement quality and symmetry, and helps parents safely care for the infant, especially during and after treatment;',
        'physiotherapy does not replace orthopedic treatment when it is required.',
      ],

      spectrumTitle: 'What is hip dysplasia and which grades exist?',
      spectrumIntro:
        'Hip dysplasia is not a simple “yes/no” condition – it lies on a spectrum:',
      spectrumList: [
        'Instable hip – the head is in the joint but held too loosely.',
        'Subluxation – partial slipping out of the socket.',
        'Dislocation – the head is outside the socket.',
      ],
      spectrumNote:
        'This matters because treatment strategy and duration depend on severity. Early instability may sometimes stabilise under monitoring, while more pronounced cases require more active orthopedic treatment.',

      ageTitle: 'Age-related signs: what parents may notice',
      ageGroups: [
        {
          age: '0–3 months',
          note:
            'In this period many infants have no clear external signs, so regular check-ups are very important.',
          signs: [
            'one leg is harder to abduct to the side when changing diapers;',
            'asymmetrical thigh or buttock skin folds;',
            'a “one-sided” movement pattern (infant uses one side more actively).',
          ],
          bottomNote:
            'A single sign does not automatically mean hip dysplasia, but several together are a signal to get checked.',
        },
        {
          age: '3–6 months',
          note: 'More common signals at this age:',
          signs: [
            'limited hip abduction on one side;',
            'more obvious asymmetry of leg movements;',
            'reduced activity of one side during rolling;',
            'uneven weight bearing when lying on the tummy.',
          ],
          bottomNote:
            'At this stage, if there is suspicion, the doctor chooses appropriate imaging according to age.',
        },
        {
          age: '6–12 months and later',
          note:
            'If the problem was not noticed earlier, increased mobility makes functional changes more apparent.',
          signs: [
            'asymmetrical crawling;',
            '“pulling” through one side when moving to sitting or standing;',
            'clear lack of movement range on one side;',
            'delayed or uneven postural control when standing.',
          ],
          bottomNote:
            'After 12 months, when the child starts walking, limping, “waddling” gait or a functionally shorter leg may become visible.',
        },
      ],

      whyNotIgnoreTitle: 'Why hip dysplasia should not be ignored',
      whyNotIgnoreIntro:
        'Untreated or late-diagnosed hip dysplasia increases long-term risks:',
      whyNotIgnoreList: [
        'abnormal gait;',
        'chronic movement imbalance;',
        'earlier hip joint wear;',
        'pain in adolescence or adulthood.',
      ],
      whyNotIgnoreNote:
        'With early diagnosis outcomes are usually better and invasive interventions are less likely. That is the main reason not to wait.',

      risksTitle: 'Risk factors: who needs extra attention',
      risksIntro: 'Hip dysplasia is more common when there are:',
      risksList: [
        'breech position in late pregnancy or at birth;',
        'positive family history (parents or siblings had hip dysplasia);',
        'female sex;',
        'firstborn child;',
        'low amniotic fluid;',
        'other orthopedic features (e.g. torticollis, foot deformities).',
      ],
      risksNote:
        'Important: Hip dysplasia can occur even without obvious risk factors. Therefore periodic hip assessment is needed not only for “risk groups” but for all infants.',

      urgentTitle: 'When to seek urgent help',
      urgentListUrgentIntro: 'Seek urgent medical help if:',
      urgentListUrgent: [
        'one leg suddenly moves much less;',
        'there is marked pain when moving the hips;',
        'you see a sudden loss of previously acquired motor skills;',
        'clear limping appears when the child starts walking;',
        'after trauma the infant avoids weight-bearing on the leg.',
      ],
      urgentListPlannedIntro: 'Seek planned consultation if:',
      urgentListPlanned: [
        'restricted hip abduction on one side keeps recurring;',
        'you consistently see asymmetric folds and movement differences;',
        'risk factors were present (especially breech position or family history).',
      ],

      diagnosticsTitle: 'How diagnosis and monitoring work',
      diagnosticsSteps: [
        {
          title: '1. Clinical assessment',
          text:
            'The doctor assesses hip stability, range of motion, skin fold symmetry and overall motor status.',
        },
        {
          title: '2. Age-appropriate imaging',
          text:
            'Ultrasound is usually used in early infancy, later – X-ray when hip structures are more ossified.',
        },
        {
          title: '3. Follow-up according to findings',
          text:
            'Depending on the result, options include monitoring, orthopedic correction (e.g. Pavlik harness or other devices) and, more rarely, surgical methods.',
        },
      ],
      diagnosticsNote:
        'A single normal examination does not mean follow-up is unnecessary. In some children signs appear later, so the follow-up plan is always individual.',

      howWeHelpTitle: 'How we help at FitKid clinic',
      howWeHelpIntro:
        'At FitKid we work as a functional development team. When hip dysplasia is suspected or confirmed, our goal is not to “diagnose instead of the orthopedist” but to help the child move as well as possible.',
      howWeHelpBullets: [
        'reduce compensatory movement patterns;',
        'maintain symmetrical development during and after orthopedic treatment;',
        'clearly teach parents safe daily handling strategies.',
      ],

      physioTitle: 'Physiotherapy and supportive measures',
      physioBlocks: [
        {
          title: '1. Functional physiotherapy assessment',
          items: [
            'symmetry of hips, pelvis and trunk;',
            'movement quality during position transitions;',
            'compensatory patterns (one-sided rolling, asymmetric support);',
            'progress through motor milestones;',
            'parents’ daily care routine.',
          ],
          note: 'After the assessment we provide a clear plan with priorities.',
        },
        {
          title: '2. Individual physiotherapy',
          items: [
            'improving trunk and pelvic stability;',
            'promoting symmetrical leg work;',
            'teaching quality transitions between positions;',
            'reducing one-sided movement dominance.',
          ],
          note:
            'Exercise content is aligned with orthopedic recommendations and treatment stage (especially if the child wears an orthopedic device).',
        },
        {
          title: '3. Physiotherapy during orthopedic treatment',
          items: [
            'safe lifting, carrying, changing and positioning for sleep;',
            'organising the daily routine to maintain safe mobility;',
            'avoiding unnecessary stress for the infant;',
            'recognising when to seek additional help for skin, positioning or discomfort issues.',
          ],
        },
        {
          title: '4. Rehabilitation after immobilisation or orthopedic phases',
          items: [
            'restoring range-of-motion quality;',
            'strengthening support and balance;',
            '“bringing back” symmetrical motor patterns;',
            'reducing fear of movement and compensations.',
          ],
        },
        {
          title: '5. Therapeutic massage for infants and children',
          items: [
            'reducing secondary muscle tension;',
            'improving tissue tolerance;',
            'increasing comfort;',
            'preparing the child for more active movement.',
          ],
          note:
            'Massage is combined with active exercises – passive therapy alone does not ensure functional results.',
        },
        {
          title: '6. Hydrotherapy',
          items: [
            'safely activating movements with lower gravitational load;',
            'building movement confidence;',
            'working on symmetry and endurance in a gentle setting.',
          ],
          note:
            'The hydrotherapy plan is always individual and aligned with the treatment stage.',
        },
      ],

      visitsTitle: 'How many visits are usually needed?',
      visitsIntro:
        'The number of visits depends on hip dysplasia severity, child’s age, whether orthopedic treatment is used and how consistently home exercises are performed.',
      visitsTable: [
        { label: '1st visit', desc: 'comprehensive functional assessment and plan' },
        {
          label: '4–6 visits',
          desc: 'first stable improvements in movement quality in milder cases',
        },
        {
          label: '8–12 visits',
          desc: 'when asymmetry is more marked or orthopedic treatment is prolonged',
        },
        {
          label: 'Further',
          desc: 'maintenance plan according to developmental stage and functional goals',
        },
      ],
      visitsNote:
        'The key is not the number of visits but clear progress criteria: more symmetrical transitions between positions, better trunk / pelvic control, fewer compensations and steady age-appropriate skill development.',

      homeTitle: 'What parents can safely do at home before the visit',
      homeDoTitle: 'Safe basic actions',
      homeDo: [
        'follow the orthopedic doctor’s instructions;',
        'change the infant’s positions frequently during the day;',
        'encourage reaching for toys from both sides;',
        'introduce quality tummy time according to tolerance;',
        'avoid prolonged passive time in a single position;',
        'choose hip-healthy swaddling and carrying (do not force legs into straight, tightly bound position).',
      ],
      homeDontTitle: 'What to avoid',
      homeDont: [
        'removing or changing orthopedic devices without medical guidance;',
        'random “internet” exercises without assessment;',
        'forcefully stretching the hips;',
        'waiting for months without any follow-up if warning signs persist.',
      ],

      faqTitle: 'Frequently asked questions',
      faq: [
        {
          q: 'Does hip dysplasia always require surgery?',
          a:
            'No. When diagnosed early, non-surgical methods are often sufficient. Surgery is considered when conservative treatment fails or diagnosis is late.',
        },
        {
          q: 'Can physiotherapy cure hip dysplasia without orthopedics?',
          a:
            'Not in all cases. Structural hip dysplasia is diagnosed and treated by an orthopedic doctor. Physiotherapy is essential functional support before, during and after orthopedic treatment.',
        },
        {
          q: 'Do asymmetric skin folds always mean hip dysplasia?',
          a:
            'No. They are just one possible signal. They must be interpreted together with hip range of motion and other clinical signs.',
        },
        {
          q: 'Why is early diagnosis important?',
          a:
            'In early infancy hip structures are easier to correct, so treatment is often simpler and shorter.',
        },
        {
          q: 'Can I carry my child in a baby carrier?',
          a:
            'Yes, if the carrier supports the “M” position and allows hip flexion and abduction rather than straightening and compressing the legs. With hip dysplasia, always discuss carrier choice with a specialist.',
        },
        {
          q: 'Can swaddling worsen hip dysplasia?',
          a:
            'Tight swaddling with straight, compressed legs increases risk. Hip-healthy swaddling, which allows free leg movement, is recommended.',
        },
        {
          q: 'Does hip dysplasia cause pain in infancy?',
          a:
            'Usually not in early stages, which is why it may go unnoticed without screening. Regular check-ups are therefore very important.',
        },
        {
          q: 'How often are follow-up visits needed?',
          a:
            'According to the orthopedic plan and condition dynamics. In physiotherapy, follow-up is matched to functional goals and developmental stage.',
        },
        {
          q: 'Can the problem return after successful treatment?',
          a:
            'Outcomes are usually good, but monitoring is needed until the hip joint is fully mature. Early follow-up helps detect any residual changes.',
        },
        {
          q: 'When should I consult if I am simply “not sure”?',
          a:
            'If you are unsure about hip symmetry or movement quality, it is better to consult earlier. Waiting without assessment often prolongs the path to a result.',
        },
      ],

      teamTitle: 'Why parents choose FitKid',
      teamIntro:
        'FitKid is a pediatric and infant physiotherapy clinic in Vilnius, focused on clear plans and functional outcomes rather than generic advice.',
      specialistsTitle: 'Our team',

      relatedTitle: 'Related conditions',
      related: [
        { href: '/kudikiu-hipertonusas', label: 'Hypertonia' },
        { href: '/ka-gydome/kudikiu-hipotonusas', label: 'Hypotonia' },
        { href: '/kudikio-kreivakakliste', label: 'Torticollis' },
        { href: '/plagiocefalija', label: 'Plagiocephaly' },
        { href: '/motorines-raidos-velavimas', label: 'Motor development delays' },
      ],

      ctaTitle: 'Suspecting hip dysplasia?',
      ctaDesc:
        'If you notice movement asymmetry or other hip dysplasia signals, book a comprehensive assessment.',
      ctaRegister: 'Register for visit',
      ctaPhone: '+37066699676',
      ctaAddress: 'Aludarių g. 7-43, Vilnius',

      medNote:
        'This information is for informational purposes and does not replace individual medical consultation. If the condition worsens or danger signs appear, contact a doctor without delay.',
      lastUpdated: '2026-02-22',
      reviewer: 'Agnė Juodytė, paediatric physiotherapist',
    },
  };

  const txt = pageText[currentLang];

  const specialists = [
    {
      name: 'Agnė Juodytė',
      role: currentLang === 'lt' ? 'Vaikų kineziterapeutė' : 'Paediatric physiotherapist',
      detail:
        currentLang === 'lt'
          ? 'Vojta terapijos praktikė, dirbanti su kūdikiais ir vaikais.'
          : 'Vojta therapy practitioner working with infants and children.',
      img: '/specialists/agne.png',
      desc:
        currentLang === 'lt'
          ? 'Patyrusi vaikų kineziterapeutė, daug dėmesio skirianti funkcinės motorikos, sąnarių stabilumo ir tėvų edukacijos deriniui.'
          : 'Experienced paediatric physiotherapist focusing on functional motor skills, joint stability and clear parental education.',
    },
    {
      name: 'Ksenija Persijanova',
      role: currentLang === 'lt' ? 'Vaikų ir kūdikių kineziterapeutė' : 'Infant & child physiotherapist',
      detail:
        currentLang === 'lt'
          ? 'Praktika kūdikių kineziterapijoje ir paliatyvioje pediatrijoje.'
          : 'Practical experience in infant physiotherapy and paediatric palliative care.',
      img: '/specialists/ksenija.png',
      desc:
        currentLang === 'lt'
          ? 'Specializuojasi kūdikių raidos, tonuso ir simetrijos korekcijoje bei hidroterapijoje.'
          : 'Specialises in infant development, tone and symmetry correction and hydrotherapy.',
    },
    {
      name: 'Ramunė Nemeikaitė',
      role: currentLang === 'lt' ? 'Gydomojo masažo specialistė' : 'Therapeutic massage specialist',
      detail:
        currentLang === 'lt'
          ? 'Dirba tik su kūdikiais ir vaikais.'
          : 'Works exclusively with infants and children.',
      img: '/specialists/ramune.png',
      desc:
        currentLang === 'lt'
          ? 'Vaikų masažo specialistė, padedanti mažinti antrinę raumenų įtampą ir gerinti bendrą komfortą.'
          : 'Paediatric massage specialist helping reduce secondary muscle tension and improve overall comfort.',
    },
  ];

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
              alt="Kūdikių klubo sąnario displazija"
              fill
              priority
              quality={95}
              sizes="100vw"
              style={{
                objectFit: 'cover',
                objectPosition: 'center 30%',
                filter: 'brightness(1.05) contrast(0.97) blur(8px)',
              }}
            />
            <div className="absolute inset-0 bg-white opacity-15 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
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
                  <p className="text-white/95 text-sm leading-relaxed">{txt.heroNote}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">{txt.intro1}</p>
            <p className="text-lg text-gray-700 leading-relaxed">{txt.intro2}</p>
            <p className="text-lg text-gray-700 leading-relaxed">{txt.intro3}</p>
          </div>
        </section>

        {/* Quick answer */}
        <section className="py-12 bg-[#FFF8F3]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{txt.quickTitle}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">{txt.quickBody}</p>
            <div className="bg-white border border-[#fb7825]/30 rounded-xl px-5 py-4">
              <p className="font-semibold text-gray-900 mb-2">{txt.quickListTitle}</p>
              <ul className="space-y-2 text-gray-700">
                {txt.quickList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#fb7825] mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Spectrum */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {txt.spectrumTitle}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {txt.spectrumIntro}
            </p>
            <ul className="space-y-3 mb-4">
              {txt.spectrumList.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 bg-white rounded-xl px-5 py-3 border border-gray-100"
                >
                  <span className="text-[#54B6FC] mt-1">•</span>
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-blue-50 border-l-4 border-[#54B6FC] rounded-r-xl px-5 py-4">
              <p className="text-gray-800 text-sm leading-relaxed">{txt.spectrumNote}</p>
            </div>
          </div>
        </section>

        {/* Age-related signs */}
        <section className="py-16 bg-gradient-to-br from-[#fb7825] to-[#e66f1f]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
              {txt.ageTitle}
            </h2>
            <div className="space-y-6">
              {txt.ageGroups.map((group, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-[#fb7825] mb-2">{group.age}</h3>
                  <p className="text-gray-600 text-sm italic mb-4">{group.note}</p>
                  <ul className="space-y-2 mb-3">
                    {group.signs.map((sign, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-3">
                        <span className="text-[#fb7825] mt-1">•</span>
                        <span className="text-gray-800">{sign}</span>
                      </li>
                    ))}
                  </ul>
                  {group.bottomNote && (
                    <p className="text-gray-600 text-sm">{group.bottomNote}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why not ignore */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {txt.whyNotIgnoreTitle}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {txt.whyNotIgnoreIntro}
            </p>
            <ul className="space-y-2">
              {txt.whyNotIgnoreList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-800">
                  <span className="text-red-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl px-5 py-4">
              <p className="text-gray-800 text-sm leading-relaxed">{txt.whyNotIgnoreNote}</p>
            </div>
          </div>
        </section>

        {/* Risks */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {txt.risksTitle}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">{txt.risksIntro}</p>
            <ul className="space-y-2">
              {txt.risksList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-800">
                  <span className="text-[#54B6FC] mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 text-sm">{txt.risksNote}</p>
          </div>
        </section>

        {/* Urgent vs planned */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {txt.urgentTitle}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-red-700 mb-3">
                  {txt.urgentListUrgentIntro}
                </h3>
                <ul className="space-y-2 text-sm text-gray-800">
                  {txt.urgentListUrgent.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">!</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  {txt.urgentListPlannedIntro}
                </h3>
                <ul className="space-y-2 text-sm text-gray-800">
                  {txt.urgentListPlanned.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Diagnostics */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {txt.diagnosticsTitle}
            </h2>
            <div className="space-y-4">
              {txt.diagnosticsSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100"
                >
                  <div className="w-8 h-8 rounded-full bg-[#54B6FC] text-white flex items-center justify-center font-semibold text-sm flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-sm">{txt.diagnosticsNote}</p>
          </div>
        </section>

        {/* How we help + physio blocks */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {txt.howWeHelpTitle}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">{txt.howWeHelpIntro}</p>
            <ul className="space-y-2 text-gray-800">
              {txt.howWeHelpBullets.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#54B6FC] mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {txt.physioTitle}
            </h2>
            <div className="space-y-4">
              {txt.physioBlocks.map((block, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {block.title}
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-800 mb-2">
                    {block.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2">
                        <span className="text-[#54B6FC] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {block.note && (
                    <p className="text-gray-600 text-xs leading-relaxed">{block.note}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visits */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">{txt.visitsTitle}</h2>
            <p className="text-gray-700">{txt.visitsIntro}</p>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              {txt.visitsTable.map((row, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-4 px-6 py-4 ${
                    idx !== txt.visitsTable.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <span className="font-bold text-[#54B6FC] w-32 flex-shrink-0">
                    {row.label}
                  </span>
                  <span className="text-gray-800 text-sm">{row.desc}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-sm">{txt.visitsNote}</p>
          </div>
        </section>

        {/* Home advice */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              {txt.homeTitle}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-4">
                  ✓ {txt.homeDoTitle}
                </h3>
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
                <h3 className="text-xl font-bold text-red-600 mb-4">
                  ✗ {txt.homeDontTitle}
                </h3>
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
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
              {txt.faqTitle}
            </h2>
            <div className="space-y-4">
              {txt.faq.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-100"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team / specialists */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {txt.teamTitle}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{txt.teamIntro}</p>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              {txt.specialistsTitle}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specialists.map((spec) => (
                <div
                  key={spec.name}
                  className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
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
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{spec.name}</h4>
                    <div className="text-sm font-semibold text-[#54B6FC] mb-2">
                      {spec.role}
                    </div>
                    <div className="text-xs text-gray-500 mb-3">{spec.detail}</div>
                    <p className="text-gray-600 leading-relaxed text-sm">{spec.desc}</p>
                  </div>
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#54B6FC]/10 to-[#fb7825]/10 rounded-full blur-2xl" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials – Google reviews carousel with map link */}
        <Testimonials translations={t} />

        {/* Related links */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">{txt.relatedTitle}</h2>
            <div className="flex flex-nowrap gap-3">
              {txt.related.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-[#54B6FC] text-gray-700 hover:text-[#54B6FC] px-4 py-2 rounded-full text-sm font-medium transition-all hover:shadow-md whitespace-nowrap flex-shrink-0"
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
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {txt.ctaTitle}
            </h2>
            <p className="text-lg text-white/90 mb-8">{txt.ctaDesc}</p>
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

