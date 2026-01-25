export type Language = 'lt' | 'en';

export type Translation = {
  nav: {
    registration: string;
    services: string;
    treatments: string;
    prices: string;
    specialists: string;
    contacts: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: Array<{
      name: string;
      slug: string;
      description?: string;
      ageGroup: 'infant' | 'child';
    }>;
  };
  treatments: {
    title: string;
    subtitle: string;
    infantTitle: string;
    infantAge: string;
    childTitle: string;
    childAge: string;
    hint: string;
    items: Array<{
      name: string;
      hint: string;
      ageGroup: 'infant' | 'child';
    }>;
  };
  about: {
    title: string;
    subtitle: string;
    features: Array<{ title: string; description: string }>;
  };
  specialists: {
    title: string;
    subtitle: string;
    team: Array<{ name: string; role: string; bio: string }>;
  };
  testimonials: {
    title: string;
    items: Array<{ name: string; text: string }>;
  };
  footer: {
    address: string;
    country: string;
    privacy: string;
  };
};

export const translations: Record<Language, Translation> = {
  lt: {
    nav: {
      registration: "Registracija vizitui",
      services: "Paslaugos",
      treatments: "Ką gydome",
      prices: "Kainos",
      specialists: "Specialistai",
      contacts: "Kontaktai",
    },
    hero: {
      title: "Vaikų ir kūdikių kineziterapija Vilniuje",
      subtitle: "Individuali vaikų kineziterapija, pagrįsta klinikine patirtimi",
      cta: "Sužinoti daugiau",
    },
    services: {
      title: "Paslaugos",
      subtitle: "Specializuotos vaikų ir kūdikių gydymo paslaugos",
      items: [
        {
          name: "Kūdikių kineziterapija",
          slug: "kudikiu-kineziterapija",
          description: "Individualūs užsiėmimai 0–12 mėn.",
          ageGroup: "infant" as const,
        },
        {
          name: "Kūdikių masažai",
          slug: "kudikiu-masazai",
          description: "Švelnūs, adaptuoti kūdikiams",
          ageGroup: "infant" as const,
        },
        {
          name: "Kūdikių plukdymas",
          slug: "kudikiu-plukdymas",
          description: "Užsiėmimai vandenyje su tėvais",
          ageGroup: "infant" as const,
        },
        {
          name: "Vaikų kineziterapija",
          slug: "vaiku-kineziterapija",
          description: "Individualūs užsiėmimai nuo 1 metų",
          ageGroup: "child" as const,
        },
        {
          name: "Vaikų masažai",
          slug: "vaiku-masazai",
          description: "Terapinis masažas vaikams",
          ageGroup: "child" as const,
        },
        {
          name: "Vojta terapija",
          slug: "vojta-terapija",
          description: "Refleksinė lokomocija vaikams",
          ageGroup: "child" as const,
        },
      ],
    },
    treatments: {
      title: "Ką gydome",
      subtitle: "Dažniausios būklės ir situacijos, su kuriomis kreipiasi tėvai",
      infantTitle: "Kūdikiams",
      infantAge: "0–12 mėn.",
      childTitle: "Vaikams",
      childAge: "Nuo 1 metų",
      hint: "Pasirinkite jums artimiausią situaciją – paaiškinsime, nuo ko pradėti ir kokia pagalba tinkamiausia",
      items: [
        {
          name: "Raidos vėlavimas",
          hint: "kai vaikas neapsiverčia, nesėdi, neropoja",
          ageGroup: "infant" as const,
        },
        {
          name: "Raumenų tonuso sutrikimai",
          hint: "per įtempti arba per atsipalaidavę raumenys",
          ageGroup: "infant" as const,
        },
        {
          name: "Kūno asimetrija",
          hint: "galvos pasvirimas, nevienodi judesiai",
          ageGroup: "infant" as const,
        },
        {
          name: "Laikysenos problemos",
          hint: "kupra, pečių asimetrija",
          ageGroup: "child" as const,
        },
        {
          name: "Plokščiapėdystė ir eisenos sutrikimai",
          hint: "netaisyklinga eisena, pėdų problemos",
          ageGroup: "child" as const,
        },
        {
          name: "Skausmai judant ar sportuojant",
          hint: "nugaros, sąnarių, raumenų skausmai",
          ageGroup: "child" as const,
        },
      ],
    },
    about: {
      title: "Plačiau apie mus",
      subtitle: "FitKid - tai aukščiausios kokybės Jūsų vaiko gydymas ir sveikatinimas",
      features: [
        {
          title: "Patyrusi komanda",
          description: "Klinikoje dirba specialistai turinys patirties vaikų ir kūdikių kineziterapijoje bei tinkamai licencijuoti",
        },
        {
          title: "Individualus gydymas",
          description: "Kiekvienam pacientui skiriamas individualus gydymas atsižvelgiant į jo poreikius ir ligos istoriją",
        },
        {
          title: "Tinkamos funkcinės raidos užtikrinimas",
          description: "Siekiame, kad kiekvienas vaikas turėtų pilnavertį gyvenimą",
        },
        {
          title: "Darbas su įvairaus amžiaus vaikais",
          description: "Klinikoje dirbame su kūdikiais nuo 5 savaičių amžiaus ir vaikais iki 18 metų amžiaus",
        },
        {
          title: "Moderni klinika",
          description: "Naujai įrengta klinika Vilniaus centre su aukščiausios kokybės modernia įranga",
        },
        {
          title: "Holistinis požiūris",
          description: "Siūlome ne tik fizinius pratimus, tačiau ir emocinę paramą tėvams, patarimus padedančius siekti aukščiausio rezultato gydyme",
        },
      ],
    },
    specialists: {
      title: "Mūsų specialistai",
      subtitle: "Licencijuoti tinkamos kvalifikacijos ir patirties specialistai",
      team: [
        {
          name: "Agnė Juodytė",
          role: "Kineziterapeutė",
          bio: "Ilgametę patirtį turinti kineziterapeutė, dirbanti su kūdikiais nuo pirmųjų dienų ir vaikais, turinčiais įvairių raidos, neurologinių ar judėjimo iššūkių.",
        },
        {
          name: "Ksenija Persijanova",
          role: "Kineziterapeutė",
          bio: "Kineziterapeutė, turinti praktinę darbo patirtį kūdikių kineziterapijos ir paliatyvios pediatrijos srityse. Specializuojasi atliekant kūdikių hidroterapijos procedūras bei dirbant su vaikais.",
        },
        {
          name: "Ramunė Nemeikaitė",
          role: "Masažuotoja",
          bio: "Sertifikuota vaikų masažo specialistė. Vaikų ligoninės, Santaros klinikų masažuotoja. Specializuojasi atliekant gydomuosius masažus kūdikiams ir vaikams.",
        },
      ],
    },
    testimonials: {
      title: "Atsiliepimai",
      items: [
        {
          name: "Demetrija Laura",
          text: "Mūsų Mija nuo gimimo draugauja su FitKid komanda, pradžioje lankėsi pas Osteopatą, pora užsiėmimų atnešė didelės naudos Mijos vystimuisi ir padėjo atsipalaiduoti. Vėliau išbandėme mankšta ir voneles, jas lankome iki šiol.",
        },
        {
          name: "Karolina Davidonytė",
          text: "Didžiausios rekomendacijos FitKid klinikai! Lankomės nuo pat pirmųjų mažylio savaičių ir jau 9 mėnesius esame kartu su šia klinika bei pačia geriausia kineziterapiaute Ksenija!",
        },
        {
          name: "Edita Višomirskaja",
          text: "Rekomenduoju kliniką Fitkid. Čia dirba malonios ir kompetetingos savo srities specialistės. Ramunė puikiai atlieka masažus, o Ksenija smagiai ir naudingai praveda mankšteles.",
        },
      ],
    },
    footer: {
      address: "Aludarių g. 7 - 43, 01113, Vilnius",
      country: "Lietuva",
      privacy: "Privatumo politika",
    },
  },
  en: {
    nav: {
      registration: "Book a Visit",
      services: "Services",
      treatments: "What We Treat",
      prices: "Pricing",
      specialists: "Specialists",
      contacts: "Contacts",
    },
    hero: {
      title: "Children's and Infant Physiotherapy in Vilnius",
      subtitle: "Individual children's physiotherapy based on clinical experience",
      cta: "Learn More",
    },
    services: {
      title: "Services",
      subtitle: "Specialized treatment services for children and infants",
      items: [
        {
          name: "Infant Physiotherapy",
          slug: "kudikiu-kineziterapija",
          description: "Individual sessions 0–12 months",
          ageGroup: "infant" as const,
        },
        {
          name: "Infant Massage",
          slug: "kudikiu-masazai",
          description: "Gentle, adapted for infants",
          ageGroup: "infant" as const,
        },
        {
          name: "Infant Swimming",
          slug: "kudikiu-plukdymas",
          description: "Water sessions with parents",
          ageGroup: "infant" as const,
        },
        {
          name: "Children's Physiotherapy",
          slug: "vaiku-kineziterapija",
          description: "Individual sessions from 1 year",
          ageGroup: "child" as const,
        },
        {
          name: "Children's Massage",
          slug: "vaiku-masazai",
          description: "Therapeutic massage for children",
          ageGroup: "child" as const,
        },
        {
          name: "Vojta Therapy",
          slug: "vojta-terapija",
          description: "Reflex locomotion therapy for children",
          ageGroup: "child" as const,
        },
      ],
    },
    treatments: {
      title: "What We Treat",
      subtitle: "Most common conditions and situations parents come to us with",
      infantTitle: "For Infants",
      infantAge: "0–12 months",
      childTitle: "For Children",
      childAge: "From 1 year",
      hint: "Choose the situation closest to yours – we'll explain where to start and what help is best suited",
      items: [
        {
          name: "Developmental Delays",
          hint: "when child doesn't roll over, sit, crawl",
          ageGroup: "infant" as const,
        },
        {
          name: "Muscle Tone Disorders",
          hint: "too tight or too relaxed muscles",
          ageGroup: "infant" as const,
        },
        {
          name: "Body Asymmetry",
          hint: "head tilt, uneven movements",
          ageGroup: "infant" as const,
        },
        {
          name: "Posture Problems",
          hint: "hunchback, shoulder asymmetry",
          ageGroup: "child" as const,
        },
        {
          name: "Flat Feet and Gait Disorders",
          hint: "incorrect gait, foot problems",
          ageGroup: "child" as const,
        },
        {
          name: "Pain During Movement or Sports",
          hint: "back, joint, muscle pain",
          ageGroup: "child" as const,
        },
      ],
    },
    about: {
      title: "More About Us",
      subtitle: "FitKid — highest quality treatment and health care for your child",
      features: [
        {
          title: "Experienced Team",
          description: "Our clinic employs specialists with experience in pediatric physiotherapy who are properly licensed",
        },
        {
          title: "Individual Treatment",
          description: "Each patient receives individual treatment tailored to their needs and medical history",
        },
        {
          title: "Proper Functional Development",
          description: "We strive to ensure every child has a full and healthy life",
        },
        {
          title: "Working with Children of All Ages",
          description: "We work with infants from 5 weeks old and children up to 18 years old",
        },
        {
          title: "Modern Clinic",
          description: "Newly equipped clinic in Vilnius city center with highest quality modern equipment",
        },
        {
          title: "Holistic Approach",
          description: "We offer not only physical exercises, but also emotional support for parents and advice to achieve the best treatment results",
        },
      ],
    },
    specialists: {
      title: "Our Specialists",
      subtitle: "Licensed specialists with proper qualifications and experience",
      team: [
        {
          name: "Agnė Juodytė",
          role: "Physiotherapist",
          bio: "Experienced physiotherapist working with infants from their first days and children with various developmental, neurological or movement challenges.",
        },
        {
          name: "Ksenija Persijanova",
          role: "Physiotherapist",
          bio: "Physiotherapist with practical experience in infant physiotherapy and palliative pediatrics. Specializes in infant hydrotherapy procedures and working with children.",
        },
        {
          name: "Ramunė Nemeikaitė",
          role: "Massage Therapist",
          bio: "Certified children's massage specialist. Massage therapist at Children's Hospital and Santaros Clinics. Specializes in therapeutic massages for infants and children.",
        },
      ],
    },
    testimonials: {
      title: "Testimonials",
      items: [
        {
          name: "Demetrija Laura",
          text: "Our Mija has been friends with the FitKid team since birth. We started with an Osteopath, and a couple of sessions brought great benefits to Mija's development and helped her relax. Later we tried exercises and baths, which we still attend.",
        },
        {
          name: "Karolina Davidonytė",
          text: "Highest recommendations for FitKid clinic! We've been visiting since our baby's first weeks and have been with this clinic for 9 months with the best physiotherapist Ksenija!",
        },
        {
          name: "Edita Višomirskaja",
          text: "I recommend Fitkid clinic. Pleasant and competent specialists work here. Ramunė performs massages excellently, and Ksenija conducts exercises in a fun and useful way.",
        },
      ],
    },
    footer: {
      address: "Aludarių st. 7 - 43, 01113, Vilnius",
      country: "Lithuania",
      privacy: "Privacy Policy",
    },
  },
};
