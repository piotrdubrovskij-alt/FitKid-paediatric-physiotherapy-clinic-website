/**
 * SEO metadata (title, description) for each page.
 * Used in layout.tsx - Server Components can export metadata.
 */

export type Language = 'lt' | 'en';

export const pageMetadata: Record<string, Record<Language, { title: string; description: string }>> = {
  '/': {
    lt: {
      title: 'FitKid - Vaikų kineziterapijos klinika Vilniuje | Kūdikių ir vaikų gydymas',
      description: 'Profesionali vaikų kineziterapija Vilniaus centre. Kūdikių masažai, plukdymas, kineziterapija nuo 5 savaičių. Patyrę licencijuoti specialistai. ☎ +370 666 99676',
    },
    en: {
      title: 'FitKid - Pediatric Physiotherapy Clinic Vilnius | Infant and Child Therapy',
      description: 'Professional pediatric physiotherapy in Vilnius center. Infant massage, swimming, physiotherapy from 5 weeks. Experienced licensed specialists. ☎ +370 666 99676',
    },
  },
  '/kudikiu-kineziterapija': {
    lt: {
      title: 'Kūdikių kineziterapija Vilniuje | FitKid klinika',
      description: 'Profesionalus kūdikių motorinės raidos įvertinimas ir individuali kineziterapija nuo pirmųjų savaičių. Patyrė specialistai FitKid klinikoje.',
    },
    en: {
      title: 'Infant Physiotherapy Vilnius | FitKid Clinic',
      description: 'Professional infant motor development assessment and individual physiotherapy from first weeks. Experienced specialists at FitKid clinic.',
    },
  },
  '/kudikiu-masazai': {
    lt: {
      title: 'Kūdikių masažas Vilniuje | FitKid klinika',
      description: 'Profesionalus kūdikių gydomasis masažas. Pagerina miegą, skausmo reljavimą, ryšį su mažyliu. Švelnūs metodai.',
    },
    en: {
      title: 'Infant Massage Vilnius | FitKid Clinic',
      description: 'Professional therapeutic infant massage. Improves sleep, pain relief, bonding with baby. Gentle methods at FitKid clinic.',
    },
  },
  '/kudikiu-plukdymas': {
    lt: {
      title: 'Kūdikių plukdymas Vilniuje | FitKid klinika',
      description: 'Kūdikių plaukimo pamokos nuo 2 mėnesių. Šiltas vanduo, patyrę instruktoriai, saugus ir linksmas aplinka.',
    },
    en: {
      title: 'Infant Swimming Vilnius | FitKid Clinic',
      description: 'Infant swimming lessons from 2 months. Warm water, experienced instructors, safe and fun environment at FitKid.',
    },
  },
  '/vaiku-kineziterapija': {
    lt: {
      title: 'Vaikų kineziterapija Vilniuje | FitKid klinika',
      description: 'Profesionali vaikų kineziterapija ir fizioterapija. Motorių problemų diagnostika, individualus gydymo planas.',
    },
    en: {
      title: 'Children Physiotherapy Vilnius | FitKid Clinic',
      description: 'Professional pediatric physiotherapy. Motor issues diagnosis, individual treatment plan. Experienced specialists.',
    },
  },
  '/vaiku-masazas': {
    lt: {
      title: 'Vaikų masažas Vilniuje | FitKid klinika',
      description: 'Profesionalus vaikų gydomasis masažas. Pagerina laikyseną, reljavimas, geresnis miegas ir bendra savijauta.',
    },
    en: {
      title: 'Children Massage Vilnius | FitKid Clinic',
      description: 'Professional therapeutic children massage. Improves posture, relaxation, better sleep and wellbeing.',
    },
  },
  '/vojta-terapija': {
    lt: {
      title: 'Vojta terapija kūdikiams Vilniuje | FitKid',
      description: 'Vojta metodika kūdikiams su motorinių problemų prevencija ir gydymas. Sertifikuoti specialistai FitKid klinikoje.',
    },
    en: {
      title: 'Vojta Therapy for Infants Vilnius | FitKid',
      description: 'Vojta method for infants with motor development prevention and treatment. Certified specialists at FitKid clinic.',
    },
  },
  '/motorines-raidos-velavimas': {
    lt: {
      title: 'Motorinės raidos vėlavimas kūdikiams | Požymiai ir pagalba | FitKid',
      description: 'Motorinės raidos vėlavimo požymiai, priežastys ir šiuolaikinė kineziterapinė pagalba. Individualus įvertinimas FitKid klinikoje Vilniuje.',
    },
    en: {
      title: 'Motor Development Delays in Infants | Signs and Help | FitKid',
      description: 'Motor development delay signs, causes and modern physiotherapy help. Individual assessment at FitKid clinic Vilnius.',
    },
  },
  '/kudikiu-hipertonusas': {
    lt: {
      title: 'Kūdikių hipertonusas | Padidėjęs raumenų tonusas – požymiai ir korekcija | FitKid',
      description:
        'Kūdikių hipertonuso (padidėjusio raumenų tonuso) požymiai pagal amžių, priežastys ir kineziterapinė korekcija. Individualus įvertinimas FitKid klinikoje Vilniuje. ☎ +370 666 99676',
    },
    en: {
      title: 'Infant Hypertonia | Increased Muscle Tone – Signs & Correction | FitKid Vilnius',
      description:
        'Infant hypertonia (increased muscle tone) signs by age, causes and physiotherapy correction. Individual assessment at FitKid clinic in Vilnius. ☎ +370 666 99676',
    },
  },
  '/ka-gydome/klubo-sanario-displazija-kudikiams': {
    lt: {
      title:
        'Kūdikių klubo sąnario displazija Vilniuje | Požymiai, diagnostika ir pagalba | FitKid',
      description:
        'Kūdikių klubo sąnario displazija: požymiai pagal amžių, rizikos veiksniai, kada kreiptis skubiai, kaip vyksta diagnostika ir kaip kineziterapija padeda kartu su ortopediniu gydymu.',
    },
    en: {
      title:
        'Infant Hip Dysplasia in Vilnius | Signs, Diagnosis and Support | FitKid',
      description:
        'Infant developmental dysplasia of the hip: age-related signs, risk factors, when to seek urgent help, how diagnosis is performed and how physiotherapy supports orthopedic treatment.',
    },
  },
  '/ka-gydome/kudikiu-hipotonusas': {
    lt: {
      title: 'Kūdikių hipotonusas Vilniuje | Žemas raumenų tonusas: požymiai ir pagalba | FitKid',
      description:
        'Sumažėjęs raumenų tonusas (hipotonusas) kūdikiams: požymiai pagal amžių, kada kreiptis, kaip padeda kineziterapija, Vojta, DNS, masažas ir hidroterapija.',
    },
    en: {
      title: 'Infant Hypotonia in Vilnius | Low Muscle Tone: Signs and Help | FitKid',
      description:
        'Decreased muscle tone (hypotonia) in infants: age-related signs, when to seek help, how physiotherapy, Vojta, DNS, massage and hydrotherapy help.',
    },
  },
  '/plagiocefalija': {
    lt: {
      title: 'Kūdikių plagiocefalija | Plokšia galvytė – požymiai ir korekcija | FitKid',
      description: 'Kūdikių plagiocefalijos (plokščios galvytės) požymiai pagal amžių, tipai ir kineziterapinė korekcija. Individualus įvertinimas FitKid klinikoje Vilniuje. ☎ +370 666 99676',
    },
    en: {
      title: 'Infant Plagiocephaly | Flat Head Signs & Correction | FitKid Vilnius',
      description: 'Infant plagiocephaly signs by age, types and physiotherapy correction. Individual assessment at FitKid clinic in Vilnius. ☎ +370 666 99676',
    },
  },
  '/kudikio-kreivakakliste': {
    lt: {
      title: 'Kūdikio kreivakaklystė (tortikolis) | Požymiai, tipai, gydymas | FitKid',
      description: 'Kūdikio kreivakaklystės (tortikolis) požymiai, tipai ir kineziterapinis gydymas. Individualus įvertinimas FitKid klinikoje Vilniuje. ☎ +370 666 99676',
    },
    en: {
      title: 'Infant Torticollis | Signs, Types & Treatment | FitKid Vilnius',
      description: 'Infant torticollis signs, types and physiotherapy treatment. Individual assessment at FitKid clinic in Vilnius. ☎ +370 666 99676',
    },
  },
  '/ka-gydome': {
    lt: {
      title: 'Ką gydome | Būklės ir situacijos | FitKid klinika',
      description: 'Dažniausios būklės, su kuriomis kreipiasi tėvai: motorinės raidos vėlavimas, tortikolis, hipertonusas, asimetrija. FitKid Vilniuje.',
    },
    en: {
      title: 'What We Treat | Conditions and Situations | FitKid Clinic',
      description: 'Common conditions parents seek help for: motor delays, torticollis, hypertonia, asymmetry. FitKid Vilnius.',
    },
  },
  '/kainos': {
    lt: {
      title: 'Kainos | FitKid vaikų kineziterapijos klinika',
      description: 'Kūdikių ir vaikų kineziterapijos, masažo ir plukdymo kainos. Paketai su nuolaida. Nemokama konsultacija.',
    },
    en: {
      title: 'Prices | FitKid Pediatric Physiotherapy Clinic',
      description: 'Infant and children physiotherapy, massage and swimming prices. Package deals. Free consultation.',
    },
  },
  '/kontaktai': {
    lt: {
      title: 'Kontaktai | FitKid Vilniuje | Ukmergės g.',
      description: 'FitKid klinikos adresas, telefonas, darbo laikas. Registracija vizitui. Ukmergės 224-4, Vilnius.',
    },
    en: {
      title: 'Contacts | FitKid Vilnius | Ukmergės st.',
      description: 'FitKid clinic address, phone, working hours. Appointment registration. Ukmergės 224-4, Vilnius.',
    },
  },
  '/registracija': {
    lt: {
      title: 'Registracija vizitui | FitKid klinika',
      description: 'Užsiregistruokite į kūdikių ar vaikų kineziterapijos, masažo ar plukdymo vizitą. Skambinkite +370 666 99676.',
    },
    en: {
      title: 'Book an Appointment | FitKid Clinic',
      description: 'Book a physiotherapy, massage or swimming visit for your infant or child. Call +370 666 99676.',
    },
  },
  '/privacy': {
    lt: {
      title: 'Privatumo politika | FitKid',
      description: 'FitKid asmens duomenų tvarkymo ir privatumo politika. MB Kineziterapija, veikianti pavadinimu FitKid.',
    },
    en: {
      title: 'Privacy Policy | FitKid',
      description: 'FitKid privacy and personal data processing policy. MB Kineziterapija, operating as FitKid.',
    },
  },
  '/cookies': {
    lt: {
      title: 'Slapukų nustatymai | FitKid',
      description: 'FitKid svetainės slapukų (cookies) nustatymai ir valdymas.',
    },
    en: {
      title: 'Cookie Settings | FitKid',
      description: 'FitKid website cookie settings and management.',
    },
  },
  '/specialists/agne-juodyte': {
    lt: {
      title: 'Agnė Juodytė - Vaikų kineziterapeutė, Vojta terapeutė | FitKid',
      description: 'Agnė Juodytė - vaikų kineziterapeutė, Vojta terapeutė, DNS metodika. 15+ metų patirtis. Dėsto Vilniaus universitete. Tikslus įvertinimas ir aiškus planas šeimai.',
    },
    en: {
      title: 'Agnė Juodytė - Pediatric Physiotherapist, Vojta Therapist | FitKid',
      description: 'Agnė Juodytė - pediatric physiotherapist, Vojta therapist, DNS methodology. 15+ years experience. Teaches at Vilnius University. Precise assessment and clear family plan.',
    },
  },
};

const SITE_URL = 'https://fitkid.lt';

export function getMetadataForPage(pathname: string, lang: Language = 'lt') {
  const key = pathname === '' ? '/' : pathname.startsWith('/') ? pathname : `/${pathname}`;
  const normalizedKey = key === '/' ? '/' : key.replace(/\/$/, '') || '/';
  const meta = pageMetadata[normalizedKey] || pageMetadata['/'];
  const { title, description } = meta[lang] || meta.lt;
  return { title, description };
}

export function buildAlternates(pathname: string) {
  const path = (!pathname || pathname === '/') ? '' : pathname;
  const baseUrl = path ? `${SITE_URL}${path}` : SITE_URL;
  return {
    canonical: baseUrl,
    languages: {
      'lt': path ? baseUrl : SITE_URL,
      'en': path ? `${baseUrl}?lang=en` : `${SITE_URL}?lang=en`,
    },
  };
}
