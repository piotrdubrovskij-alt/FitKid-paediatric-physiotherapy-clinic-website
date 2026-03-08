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
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    stats: {
      families: string;
      experience: string;
      specialists: string;
    };
    cards: {
      licensed: string;
      specialistsLabel: string;
      reviews: string;
    };
  };
  services: {
    title: string;
    subtitle: string;
    learnMore: string;
    infantsTitle: string;
    childrenTitle: string;
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
    moreConditions: string;
    notFoundMessage: string;
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
  whyUs: {
    title: string;
    subtitle: string;
    features: Array<{ title: string; description: string }>;
  };
  consultation: {
    title: string;
    duration: string;
    stepLabel: string;
    infantsLabel: string;
    childrenLabel: string;
    steps: Array<{ 
      title: string; 
      content: string;
      details?: { 
        infants?: string; 
        children?: string; 
      };
    }>;
    cta: string;
  };
  specialists: {
    title: string;
    subtitle: string;
    team: Array<{ name: string; role: string; bio: string }>;
  };
  testimonials: {
    title: string;
    rating: string;
    viewAllReviews: string;
    verifiedReviews: string;
    clientLabel: string;
    items: Array<{ name: string; text: string }>;
  };
  footer: {
    title: string;
    description: string;
    quickLinks: string;
    servicesTitle: string;
    address: string;
    country: string;
    privacy: string;
    cookies: string;
    copyright: string;
  };
  contactsPage: {
    title: string;
    subtitle: string;
    quickActions: {
      call: string;
      whatsapp: string;
      whatsappText: string;
      email: string;
      navigation: string;
      navigationText: string;
    };
    contactInfo: {
      title: string;
      address: string;
      phone: string;
      emailLabel: string;
    };
    workingHours: {
      title: string;
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
      saturday: string;
      sunday: string;
      closed: string;
    };
    form: {
      title: string;
      subtitle: string;
      name: string;
      emailLabel: string;
      phone: string;
      message: string;
      sending: string;
      send: string;
      successMessage: string;
      errorMessage: string;
    };
    map: {
      title: string;
      showMap: string;
      openGoogleMaps: string;
      openWaze: string;
    };
    howToGet: {
      title: string;
      entrance: string;
      location: string;
      tip: string;
    };
    parking: {
      title: string;
      description: string;
      street: string;
      parking: string;
    };
    howToArrive: {
      title: string;
      byCar: string;
      byCarDescription: string;
      nearestParking: string;
      parkingDescription: string;
      showParkingOnMap: string;
      byPublicTransport: string;
      nearestStop: string;
      buses: string;
      trolleybuses: string;
      showStopOnMap: string;
    };
  };
  pricingPage: {
    title: string;
    subtitle: string;
    backHome: string;
    perVisit: string;
    perVisitShort: string;
    package: string;
    sessions: string;
    saveMoney: string;
    includes: string;
    bookNow: string;
    infantsTitle: string;
    childrenTitle: string;
    benefits: {
      packageTitle: string;
      packageDescription: string;
      scheduleTitle: string;
      scheduleDescription: string;
      consultationTitle: string;
      consultationDescription: string;
    };
    services: {
      consultation: {
        name: string;
        description: string;
        features: string[];
      };
      physiotherapy: {
        name: string;
        description: string;
        features: string[];
      };
      hydrotherapy: {
        name: string;
        description: string;
        features: string[];
      };
      massage: {
        name: string;
        description: string;
        features: string[];
      };
      childPhysiotherapy: {
        name: string;
        description: string;
        features: string[];
      };
      childMassage: {
        name: string;
        description: string;
        features: string[];
      };
    };
    premium: {
      badge: string;
      name: string;
      subtitle: string;
      experience: string[];
      note: string;
      consultationName: string;
      consultationDescription: string;
      physiotherapyName: string;
      physiotherapyDescription: string;
    };
    payment: {
      title: string;
      cash: string;
      card: string;
      transfer: string;
    };
    important: {
      title: string;
      note1: string;
      note2: string;
      note3: string;
    };
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
      badge: "Vilniaus centre",
      title: "Vaikų ir kūdikių kineziterapija Vilniuje",
      subtitle: "Individuali vaikų kineziterapija, pagrįsta klinikine patirtimi",
      cta: "Sužinoti daugiau",
      stats: {
        families: "Laimingų šeimų",
        experience: "Metų patirties",
        specialists: "Specialistai",
      },
      cards: {
        licensed: "Licencijuoti",
        specialistsLabel: "Specialistai",
        reviews: "100+ atsiliepimai",
      },
    },
    services: {
      title: "Paslaugos",
      subtitle: "Specializuotos vaikų ir kūdikių gydymo paslaugos",
      learnMore: "Sužinoti daugiau",
      infantsTitle: "Kūdikiams",
      childrenTitle: "Vaikams",
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
          name: "Vaikų masažas",
          slug: "vaiku-masazas",
          description: "Terapinis masažas vaikams",
          ageGroup: "child" as const,
        },
        {
          name: "Vojta terapija",
          slug: "vojta-terapija",
          description: "Specializuota neurologinių būklių terapija",
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
      moreConditions: "Daugiau būklių",
      notFoundMessage: "Neradote savo situacijos? Susisiekite",
      items: [
        {
          name: "Motorinės raidos vėlavimas",
          hint: "",
          ageGroup: "infant" as const,
        },
        {
          name: "Padidėjęs raumenų tonusas (hipertonusas)",
          hint: "Kūdikis jaudinasi, turi standžius raumenis ar kampuotus judesius? Kineziterapija padeda atpalaiduoti raumenis ir lavinti tinkamus judesių modelius.",
          ageGroup: "infant" as const,
        },
        {
          name: "Sumažėjęs raumenų tonusas (hipotonusas)",
          hint: "Kūdikis atrodo vangus, lėtai laiko galvą ar kūną? Kineziterapija stiprina raumenis ir skatina tinkamą motorinę raidą.",
          ageGroup: "infant" as const,
        },
        {
          name: "Kreivakaklystė (tortikolis)",
          hint: "",
          ageGroup: "infant" as const,
        },
        {
          name: "Plagiocefalija",
          hint: "Pastebėjote plokščią vietą kūdikio galvutėje? Kineziterapija padeda ištaisyti galvos formą ir užtikrina tinkamą kaklo raumenų darbą.",
          ageGroup: "infant" as const,
        },
        {
          name: "Klubo sąnario displazija",
          hint: "Po gydymo ar palaikymų – kineziterapija padeda atkurti tinkamą klubo funkciją ir lavinti eiseną.",
          ageGroup: "infant" as const,
        },
        {
          name: "Netaisyklinga laikysena",
          hint: "Vaikas kumpsta, turi išlenktą nugarą ar išsikišusį pilvą? Vertinsime laikyseną ir sudarysime individualų pratimų planą.",
          ageGroup: "child" as const,
        },
        {
          name: "Nugaros, kaklo ir pečių skausmai",
          hint: "Skausmai dažnai kyla dėl raumenų disbalanso ar netinkamos laikysenos. Kineziterapija šalina priežastį, ne tik simptomus.",
          ageGroup: "child" as const,
        },
        {
          name: "Skoliozė ir kiti stuburo iškrypimai",
          hint: "Nugaros linkimas į šoną, nelygūs pečiai? Anksti pradėjus gydymą, progresą galima sustabdyti ir pagerinti.",
          ageGroup: "child" as const,
        },
        {
          name: "Plokščiapėdystė, pėdų pronacija, eisenos sutrikimai",
          hint: "Vaikas vaikšto ant vidinio pėdos krašto, klumpa ar greitai pavargsta? Padėsime ištaisyti pėdų funkciją ir eiseną.",
          ageGroup: "child" as const,
        },
        {
          name: "Kreivos kojos (X ar O kojų deformacija)",
          hint: "Natūralus korekcijos laikotarpis – iki 7 metų. Kineziterapeutas įvertins, ar reikalinga papildoma pagalba.",
          ageGroup: "child" as const,
        },
        {
          name: "Reabilitacija po traumų ar imobilizacijos",
          hint: "Po lūžio, operacijos ar ilgo nejudėjimo – padėsime greitai ir saugiai atkurti pilną funkciją.",
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
    whyUs: {
      title: "Kodėl verta patikėti vaiko judėjimą mums?",
      subtitle: "Sutelkiame dėmesį į tai, kas svarbiausia – vaiko judėjimo kokybę, saugią raidą ir aiškų planą šeimai.",
      features: [
        {
          title: "Specializacija: nuo kūdikio iki paauglio",
          description: "Dirbame išskirtinai su vaikais. Puikiai suprantame, kaip bėgant metams keičiasi fiziniai poreikiai, todėl vertinimą, krūvį ir bendravimą pritaikome pagal vaiko amžiaus tarpsnį."
        },
        {
          title: "Argumentuoti ir saugūs sprendimai",
          description: "Kiekvienas mūsų žingsnis remiasi kineziterapijos principais ir klinikine praktika. Planą grindžiame objektyviu vertinimu, kad sprendimai būtų saugūs, o progresas – nuoseklus."
        },
        {
          title: "Partnerystė su šeima",
          description: "Tėvai yra aktyvi proceso dalis. Aiškiai paaiškiname, ką matome ir kodėl tai darome. Išeisite su konkrečiomis rekomendacijomis, kad progresas vyktų ir namuose."
        },
        {
          title: "Saugi ir motyvuojanti aplinka",
          description: "Kuriame ramią, pagarbią atmosferą. Kūdikiams pritaikome vizitą pagal jų ritmą, o vyresniems vaikams ir paaugliams – erdvę, kurioje lengviau bendradarbiauti ir stiprėti."
        }
      ],
    },
    consultation: {
      title: "Kaip vyksta pirminė konsultacija?",
      duration: "Trukmė: 45–60 min. (pagal vaiko amžių ir situacijos sudėtingumą)",
      stepLabel: "Žingsnis",
      infantsLabel: "Kūdikiams:",
      childrenLabel: "Vaikams ir paaugliams:",
      steps: [
        {
          title: "Situacijos aptarimas",
          content: "Trumpai peržvelgiame vaiko raidos istoriją, jūsų pastebėjimus ir, jei yra, gydytojo siuntimą ar ankstesnes išvadas. Kūdikių tėvams tai pokalbis apie raidą ir kasdienes situacijas, taip pat apie konkrečius nusiskundimus ar diagnozes. Vyresniems vaikams ir paaugliams – apie simptomus, sportą, krūvį ir įpročius. Sutariame, koks yra pagrindinis vizito tikslas.",
        },
        {
          title: "Funkcinis judėjimo įvertinimas",
          content: "Vertiname pagal vaiko amžių ir individualią situaciją:",
          details: {
            infants: "Kūdikiams: įvertiname motorinę raidą ir judesių kokybę, simetriją, raumenų tonuso ypatumus. Atkreipiame dėmesį į dažnas kūdikių situacijas, pvz., galvos/kaklo asimetriją (kreivą kaklą), kūno \"mėgstamą\" pusę, atramas ir judėjimo modelius.",
            children: "Vaikams ir paaugliams: vertiname laikyseną, koordinaciją, jėgą, ištvermę ir funkcinius judesius, pagal poreikį ir tikslą."
          }
        },
        {
          title: "Išvadų paaiškinimas",
          content: "Rezultatus pristatome aiškiai ir suprantamai: ką vaikas daro gerai ir kur šiuo metu svarbiausia sustiprėti. Paaiškiname, į ką verta atkreipti dėmesį, kad judėjimas būtų lengvesnis, o raida – nuosekli.",
        },
        {
          title: "Individualus veiksmų planas",
          content: "Pateikiame aiškų tolimesnį planą: prioritetus, rekomenduojamą vizitų dažnį ir darbo kryptį. Taip pat duodame praktines rekomendacijas namams – trumpą gidą, ką verta keisti kasdienybėje ir ką galima daryti tarp vizitų, kad progresas vyktų nuosekliai.",
        },
      ],
      cta: "Registruotis konsultacijai",
    },
    specialists: {
      title: "Specialistai",
      subtitle: "Licencijuoti tinkamos kvalifikacijos ir patirties specialistai",
      team: [
        {
          name: "Agnė Juodytė",
          role: "Kineziterapeutė",
          bio: "Dirba su kūdikiais nuo pirmųjų dienų ir vaikais. Taiko Vojta terapiją ir DNS principus, dėsto Vilniaus universitete kineziterapeutams.",
        },
        {
          name: "Ksenija Persijanova",
          role: "Kineziterapeutė",
          bio: "Dirba su kūdikiais ir vaikais. Praktikoje taiko DNS principus, atlieka kūdikių hidroterapiją, konsultuoja dėl raidos ir laikysenos.",
        },
        {
          name: "Ramunė Nemeikaitė",
          role: "Masažuotoja",
          bio: "Sertifikuota vaikų masažo specialistė, dirbanti Santaros klinikose. Atlieka gydomuosius masažus kūdikiams ir vaikams, kaip pagalbą šalia kineziterapijos.",
        },
      ],
    },
    testimonials: {
      title: "Atsiliepimai",
      rating: "5.0/5 iš 45+ atsiliepimų Google",
      viewAllReviews: "Žiūrėti visus atsiliepimus Google Maps",
      verifiedReviews: "Patikrinti atsiliepimai iš Google",
      clientLabel: "FitKid klientė",
      items: [
        {
          name: "Skaistė Volungevičienė",
          text: "Jauku, šeimyniška, profesionalu: šioje klinikoje kiekvienas pacientas gauna viską ir kartais daug daugiau nei gali įsivaizduoti. Gera lankytis, kai jauti, jog dirbantys specialistai yra viena darni komanda. Ačiū Ramunei už masažus, ačiū Agnei už Vojta ir kineziterapiją, ačiū Ksenijai už nuostabią šypseną ir gerą nuotaiką, su kuria ji pasitinka ne tik savo, bet ir kolegių pacientus 🥰.",
        },
        {
          name: "Svetlana Urbanović",
          text: "Puiki kineziterapijos klinika. Lankėmės pas kineziterapeutę Kseniją ir likome labai patenkinti sūnaus pažanga. Vienareikšmiškai rekomenduojame rinktis šią kliniką ir kitiems tėveliams!",
        },
        {
          name: "Julija M.",
          text: "Rekomenduoju FitKid kliniką! Nuostabios specialistės, kurios atsakingai dirba ir atsižvelgia į vaiko poreikius. Mes pradėjome lankyti nuo hidroterapijos pas kineziterapeutę Kseniją 💛 prieš vonelę mankštindavo mūsų mažylį ir parodydavo ką ir kaip mes galime atlikti namie. Mažylis po plukdymo atsipalaiduodavo, net geriau miegojo. Dėl padidėjusio tonuso lankėme masažus pas Ramunę 💛 nors mums dar metukų nebuvo, bet mažylis išbūdavo visą laiką. A po masažo jo kūnelis tikrai jautėsi atsipalaidavęs. Taip pat lankome mankštas pas kineziterapeutę Agnę 💛 Kiekvienam užsiėmui laukia vis kitokie žaislai, vis kažkas naujo kas tik sudomintų vaiką. Visada po užsiėmimo papasakos kaip sekėsi, patars mums.",
        },
      ],
    },
    footer: {
      title: "FitKid",
      description: "Vaikų kineziterapijos klinika Vilniuje. Aukščiausios kokybės gydymas ir sveikatinimas.",
      quickLinks: "Greitos nuorodos",
      servicesTitle: "Paslaugos",
      address: "Aludarių g. 7 - 43, 01113, Vilnius",
      country: "Lietuva",
      privacy: "Privatumo politika",
      cookies: "Slapukų nustatymai",
      copyright: "© 2026 FitKid. Visos teisės saugomos.",
    },
    contactsPage: {
      title: "Kontaktai",
      subtitle: "Susisiekite su mumis – mielai atsakysime į visus klausimus",
      quickActions: {
        call: "Paskambinti",
        whatsapp: "WhatsApp",
        whatsappText: "Parašyti žinutę",
        email: "El. paštas",
        navigation: "Navigacija",
        navigationText: "Rodyti žemėlapį",
      },
      contactInfo: {
        title: "Kontaktinė informacija",
        address: "Adresas",
        phone: "Telefono numeris",
        emailLabel: "El. paštas",
      },
      workingHours: {
        title: "Darbo laikas",
        monday: "Pirmadienis",
        tuesday: "Antradienis",
        wednesday: "Trečiadienis",
        thursday: "Ketvirtadienis",
        friday: "Penktadienis",
        saturday: "Šeštadienis",
        sunday: "Sekmadienis",
        closed: "Nedirbame",
      },
      form: {
        title: "Užduokite klausimą",
        subtitle: "Parašykite – susisieksime artimiausiu metu darbo valandomis.",
        name: "Vardas *",
        emailLabel: "El. paštas *",
        phone: "Telefono numeris *",
        message: "Žinutė *",
        sending: "Siunčiama...",
        send: "Siųsti žinutę",
        successMessage: "Žinutė sėkmingai išsiųsta!",
        errorMessage: "Klaida siunčiant žinutę. Bandykite dar kartą.",
      },
      map: {
        title: "Kaip mus rasti?",
        showMap: "Rodyti žemėlapį",
        openGoogleMaps: "Atidaryti Google Maps",
        openWaze: "Atidaryti Waze",
      },
      howToGet: {
        title: "Kaip patekti?",
        entrance: "Įėjimas iš Aludarių g. pusės",
        location: "Klinika pirmame aukšte, yra atskiras įėjimas",
        tip: "💡 Jei turite klausimų kaip mus rasti –",
      },
      parking: {
        title: "Parkavimas",
        description: "Parkavimą galite rasti:",
        street: "Gatvėje – nemokamas parkavimas greta",
        parking: "Mokamoje automobilių stovėjimo aikštelėje (Aludarių g. 5)",
      },
      howToArrive: {
        title: "Kaip atvykti ir kur parkuoti",
        byCar: "Automobiliu / taksi",
        byCarDescription: "Galima privažiuoti beveik iki durų. Parkavimo vietų šalia klinikos gali nebūti, todėl rekomenduojame atvykti 5–10 min anksčiau. Aplink – raudona zona (mokamas parkavimas gatvėje ir kiemuose). Nemokamo parkavimo ar priskirtų vietų prie klinikos nėra.",
        nearestParking: "Artimiausia parkavimo aikštelė",
        parkingDescription: "Stovėjimo aikštelė (apie 450 m pėsčiomis, orientyras: Pamėnkalnio g.).",
        showParkingOnMap: "Rodyti parkavimą žemėlapyje",
        byPublicTransport: "Viešuoju transportu",
        nearestStop: "Artimiausia stotelė: Pamėnkalnio – apie 230 m pėsčiomis.",
        buses: "Autobusai:",
        trolleybuses: "Troleibusai:",
        showStopOnMap: "Rodyti stotelę žemėlapyje",
      },
    },
    pricingPage: {
      title: "Kainos",
      subtitle: "Skaidrios ir suprantamos vaikų kineziterapijos paslaugų kainos Vilniuje",
      backHome: "Grįžti į pagrindinį",
      perVisit: "/ apsilankymas",
      perVisitShort: "už apsilankymą",
      package: "Paketas",
      sessions: "apsilankymai",
      saveMoney: "Sutaupote",
      includes: "Įskaičiuota:",
      bookNow: "Registruotis",
      infantsTitle: "Kūdikiams",
      childrenTitle: "Vaikams",
      benefits: {
        packageTitle: "Pigiau paketu",
        packageDescription: "Sutaupykite iki 25€ įsigydami 5 apsilankymų paketą",
        scheduleTitle: "Lankstus grafikas",
        scheduleDescription: "Dirbame ir vakarais bei savaitgaliais",
        consultationTitle: "Nemokama konsultacija",
        consultationDescription: "Skambinkite tel. 066 699 676",
      },
      services: {
        consultation: {
          name: "Pirminė konsultacija",
          description: "Išsami konsultacija su diagnostika ir gydymo planu",
          features: ["Išsami konsultacija", "Diagnostika", "Individualus planas"],
        },
        physiotherapy: {
          name: "Individuali kineziterapija",
          description: "Individualūs kineziterapijos užsiėmimai",
          features: ["Individualūs pratimai", "Pratimų mokymas", "Rekomendacijos namams"],
        },
        hydrotherapy: {
          name: "Hidroterapija ir kineziterapija",
          description: "Kompleksiniai užsiėmimai vandenyje ir salėje",
          features: ["Užsiėmimai vandenyje", "Kineziterapija", "Abiejų tėvų dalyvavimas"],
        },
        massage: {
          name: "Gydomasis masažas",
          description: "Profesionalus gydomasis masažas kūdikiams",
          features: ["Švelnūs metodai", "Adaptuota kūdikiams", "Tėvų dalyvavimas"],
        },
        childPhysiotherapy: {
          name: "Individuali kineziterapija",
          description: "Individualūs kineziterapijos užsiėmimai vaikams",
          features: ["Individualūs pratimai", "Pratimų mokymas", "Rekomendacijos namams"],
        },
        childMassage: {
          name: "Gydomasis masažas",
          description: "Profesionalus gydomasis masažas vaikams",
          features: ["Švelnūs metodai", "Adaptuota vaikams", "Tėvų dalyvavimas"],
        },
      },
      premium: {
        badge: "Vyriausioji kineziterapeutė",
        name: "Agnė Juodytė",
        subtitle: "Aukščiausios kvalifikacijos specialistė su išskirtine patirtimi",
        experience: [
          "15+ metų patirtis vaikų kineziterapijoje",
          "Tarptautinės sertifikacijos (DNS, NDT, Bobath)",
          "Išplėstinė diagnostika ir gydymo technikų arsenalas",
          "Darbas su sudėtingais atvejais"
        ],
        note: "* Paketinių nuolaidų nėra dėl individualaus požiūrio ir išskirtinės patirties",
        consultationName: "Pirminė konsultacija",
        consultationDescription: "Išsami diagnostika ir gydymo strategija",
        physiotherapyName: "Individuali kineziterapija",
        physiotherapyDescription: "Kompleksiniai užsiėmimai su išplėstinėmis technikomis",
      },
      payment: {
        title: "Mokėjimo būdai",
        cash: "Grynaisiais pinigais",
        card: "Banko kortele",
        transfer: "Banko pavedimu",
      },
      important: {
        title: "Svarbu žinoti",
        note1: "Paketų galiojimas - 2 mėnesiai nuo įsigijimo datos",
        note2: "Atšaukiant vizitą likus mažiau nei 24 val., mokestis negrąžinamas",
        note3: "Pirminė konsultacija privaloma visiem naujiem pacientams",
      },
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
      badge: "In Vilnius Center",
      title: "Children's and Infant Physiotherapy in Vilnius",
      subtitle: "Individual children's physiotherapy based on clinical experience",
      cta: "Learn More",
      stats: {
        families: "Happy Families",
        experience: "Years of Experience",
        specialists: "Specialists",
      },
      cards: {
        licensed: "Licensed",
        specialistsLabel: "Specialists",
        reviews: "100+ reviews",
      },
    },
    services: {
      title: "Services",
      subtitle: "Specialized treatment services for children and infants",
      learnMore: "Learn More",
      infantsTitle: "For Infants",
      childrenTitle: "For Children",
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
          slug: "vaiku-masazas",
          description: "Therapeutic massage for children",
          ageGroup: "child" as const,
        },
        {
          name: "Vojta Therapy",
          slug: "vojta-terapija",
          description: "Specialized therapy for neurological conditions",
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
      moreConditions: "More Conditions",
      notFoundMessage: "Didn't find your situation? Contact us",
      items: [
        {
          name: "Motor Development Delays",
          hint: "",
          ageGroup: "infant" as const,
        },
        {
          name: "Increased Muscle Tone (Hypertonia)",
          hint: "Baby seems tense, stiff, or moves in angular patterns? Physiotherapy helps relax muscles and develop natural movement.",
          ageGroup: "infant" as const,
        },
        {
          name: "Decreased Muscle Tone (Hypotonia)",
          hint: "Baby seems floppy or slow to hold their head and body? Physiotherapy strengthens muscles and supports motor development.",
          ageGroup: "infant" as const,
        },
        {
          name: "Torticollis",
          hint: "",
          ageGroup: "infant" as const,
        },
        {
          name: "Plagiocephaly",
          hint: "Noticed a flat spot on baby's head? Physiotherapy corrects head shape and ensures proper neck muscle function.",
          ageGroup: "infant" as const,
        },
        {
          name: "Hip Dysplasia",
          hint: "After treatment or bracing — physiotherapy restores proper hip function and helps develop correct gait.",
          ageGroup: "infant" as const,
        },
        {
          name: "Incorrect Posture",
          hint: "Child slouches or has a curved back? We'll assess posture and create an individual exercise plan.",
          ageGroup: "child" as const,
        },
        {
          name: "Back, Neck and Shoulder Pain",
          hint: "Pain usually stems from muscle imbalance or poor posture. Physiotherapy addresses the cause, not just symptoms.",
          ageGroup: "child" as const,
        },
        {
          name: "Scoliosis and Spinal Deformities",
          hint: "Sideways spinal curve or uneven shoulders? Early treatment can stop progression and improve alignment.",
          ageGroup: "child" as const,
        },
        {
          name: "Flat Feet, Foot Pronation, Gait Disorders",
          hint: "Child walks on inner foot edge, trips, or tires quickly? We'll correct foot function and gait.",
          ageGroup: "child" as const,
        },
        {
          name: "Crooked Legs (X or O Leg Deformity)",
          hint: "Natural correction window is until age 7. A physiotherapist will assess whether additional help is needed.",
          ageGroup: "child" as const,
        },
        {
          name: "Rehabilitation After Trauma or Immobilization",
          hint: "After fracture, surgery or prolonged immobilization — we'll help restore full function safely and quickly.",
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
    whyUs: {
      title: "Why trust your child's movement to us?",
      subtitle: "We focus on what matters most – your child's movement quality, safe development, and a clear plan for the family.",
      features: [
        {
          title: "Specialization: from infant to teenager",
          description: "We work exclusively with children. We understand well how physical needs change over the years, so we adapt assessment, load, and communication according to the child's age stage."
        },
        {
          title: "Evidence-based and safe solutions",
          description: "Every step we take is based on physiotherapy principles and clinical practice. We base our plan on objective assessment so that decisions are safe and progress is consistent."
        },
        {
          title: "Partnership with family",
          description: "Parents are an active part of the process. We clearly explain what we see and why we do it. You will leave with specific recommendations so that progress continues at home."
        },
        {
          title: "Safe and motivating environment",
          description: "We create a calm, respectful atmosphere. For infants, we adapt the visit to their rhythm, and for older children and teenagers – a space where it's easier to cooperate and grow stronger."
        }
      ],
    },
    consultation: {
      title: "How does the initial consultation work?",
      duration: "Duration: 45–60 min. (depending on child's age and situation complexity)",
      stepLabel: "Step",
      infantsLabel: "For infants:",
      childrenLabel: "For children and teenagers:",
      steps: [
        {
          title: "Situation Discussion",
          content: "We briefly review the child's development history, your observations, and if available, doctor's referral or previous conclusions. For infant parents, this is a conversation about development and daily situations, as well as specific complaints or diagnoses. For older children and teenagers – about symptoms, sports, load, and habits. We agree on what the main goal of the visit is.",
        },
        {
          title: "Functional Movement Assessment",
          content: "We assess according to the child's age and individual situation:",
          details: {
            infants: "For infants: we assess motor development and movement quality, symmetry, muscle tone characteristics. We pay attention to common infant situations, e.g., head/neck asymmetry (torticollis), body's \"favorite\" side, support, and movement patterns.",
            children: "For children and teenagers: we assess posture, coordination, strength, endurance, and functional movements, according to needs and goals."
          }
        },
        {
          title: "Explanation of Findings",
          content: "We present results clearly and understandably: what the child does well and where it's most important to strengthen now. We explain what's worth paying attention to so that movement becomes easier and development is consistent.",
        },
        {
          title: "Individual Action Plan",
          content: "We provide a clear further plan: priorities, recommended visit frequency, and direction of work. We also give practical recommendations for home – a brief guide on what's worth changing in daily life and what can be done between visits so that progress is consistent.",
        },
      ],
      cta: "Book a Consultation",
    },
    specialists: {
      title: "Specialists",
      subtitle: "Licensed specialists with proper qualifications and experience",
      team: [
        {
          name: "Agnė Juodytė",
          role: "Physiotherapist",
          bio: "Works with infants from first days and children. Applies Vojta therapy and DNS principles, teaches physiotherapists at Vilnius University.",
        },
        {
          name: "Ksenija Persijanova",
          role: "Physiotherapist",
          bio: "Works with infants and children. Applies DNS principles in practice, performs infant hydrotherapy, consults on development and posture.",
        },
        {
          name: "Ramunė Nemeikaitė",
          role: "Massage Therapist",
          bio: "Certified children's massage specialist working at Santaros Clinics. Performs therapeutic massages for infants and children as support alongside physiotherapy.",
        },
      ],
    },
    testimonials: {
      title: "Testimonials",
      rating: "5.0/5 from 45+ Google reviews",
      viewAllReviews: "View all reviews on Google Maps",
      verifiedReviews: "Verified reviews from Google",
      clientLabel: "FitKid client",
      items: [
        {
          name: "Skaistė Volungevičienė",
          text: "Cozy, family-like, professional: at this clinic every patient receives everything and sometimes much more than they can imagine. It's good to visit when you feel that the specialists working there are one harmonious team. Thanks to Ramunė for massages, thanks to Agnė for Vojta and physiotherapy, thanks to Ksenija for wonderful smile and good mood with which she greets not only her own but also colleagues' patients 🥰.",
        },
        {
          name: "Svetlana Urbanović",
          text: "Excellent physiotherapy clinic. We visited physiotherapist Ksenija and were very satisfied with our son's progress. We definitely recommend choosing this clinic to other parents!",
        },
        {
          name: "Julija M.",
          text: "I recommend FitKid clinic! Amazing specialists who work responsibly and consider child's needs. We started with hydrotherapy with physiotherapist Ksenija 💛 before bath she exercised our baby and showed what and how we can do at home. Baby relaxed after swimming, even slept better. Due to increased tone we visited massages with Ramunė 💛 though our baby wasn't even a year old, he stayed for whole session. After massage his body really felt relaxed. We also visit exercises with physiotherapist Agnė 💛 Each session has different toys, always something new to interest the child. After session she always tells how it went and advises us.",
        },
      ],
    },
    footer: {
      title: "FitKid",
      description: "Children's physiotherapy clinic in Vilnius. Highest quality treatment and health care.",
      quickLinks: "Quick Links",
      servicesTitle: "Services",
      address: "Aludarių st. 7 - 43, 01113, Vilnius",
      country: "Lithuania",
      privacy: "Privacy Policy",
      cookies: "Cookie Settings",
      copyright: "© 2026 FitKid. All rights reserved.",
    },
    contactsPage: {
      title: "Contacts",
      subtitle: "Get in touch with us – we'll be happy to answer all your questions",
      quickActions: {
        call: "Call Us",
        whatsapp: "WhatsApp",
        whatsappText: "Send a message",
        email: "Email",
        navigation: "Navigation",
        navigationText: "Show map",
      },
      contactInfo: {
        title: "Contact Information",
        address: "Address",
        phone: "Phone number",
        emailLabel: "Email",
      },
      workingHours: {
        title: "Working Hours",
        monday: "Monday",
        tuesday: "Tuesday",
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday",
        saturday: "Saturday",
        sunday: "Sunday",
        closed: "Closed",
      },
      form: {
        title: "Ask a Question",
        subtitle: "Write to us – we'll get back to you as soon as possible during business hours.",
        name: "Name *",
        emailLabel: "Email *",
        phone: "Phone number *",
        message: "Message *",
        sending: "Sending...",
        send: "Send Message",
        successMessage: "Message sent successfully!",
        errorMessage: "Error sending message. Please try again.",
      },
      map: {
        title: "How to Find Us?",
        showMap: "Show Map",
        openGoogleMaps: "Open Google Maps",
        openWaze: "Open Waze",
      },
      howToGet: {
        title: "How to Get Here?",
        entrance: "Entrance from Aludarių street",
        location: "Clinic on the first floor, separate entrance",
        tip: "💡 If you have questions on how to find us –",
      },
      parking: {
        title: "Parking",
        description: "You can park:",
        street: "On the street – free parking nearby",
        parking: "In paid parking lot (Aludarių st. 5)",
      },
      howToArrive: {
        title: "How to Get Here and Where to Park",
        byCar: "By car / taxi",
        byCarDescription: "You can drive almost to the door. Parking spaces near the clinic may not be available, so we recommend arriving 5–10 minutes early. The area has a red zone (paid parking on streets and courtyards). There is no free parking or designated spaces near the clinic.",
        nearestParking: "Nearest parking lot",
        parkingDescription: "Parking lot (about 450 m walk, landmark: Pamėnkalnio st.).",
        showParkingOnMap: "Show parking on map",
        byPublicTransport: "By public transport",
        nearestStop: "Nearest stop: Pamėnkalnio – about 230 m walk.",
        buses: "Buses:",
        trolleybuses: "Trolleybuses:",
        showStopOnMap: "Show stop on map",
      },
    },
    pricingPage: {
      title: "Pricing",
      subtitle: "Transparent and clear prices for children's physiotherapy services in Vilnius",
      backHome: "Back to Home",
      perVisit: "/ visit",
      perVisitShort: "per visit",
      package: "Package",
      sessions: "sessions",
      saveMoney: "You save",
      includes: "Includes:",
      bookNow: "Book Now",
      infantsTitle: "For Infants",
      childrenTitle: "For Children",
      benefits: {
        packageTitle: "Cheaper with packages",
        packageDescription: "Save up to €25 by purchasing a 5-visit package",
        scheduleTitle: "Flexible schedule",
        scheduleDescription: "We work evenings and weekends",
        consultationTitle: "Free consultation",
        consultationDescription: "Call tel. 066 699 676",
      },
      services: {
        consultation: {
          name: "Initial Consultation",
          description: "Comprehensive consultation with diagnosis and treatment plan",
          features: ["Comprehensive consultation", "Diagnosis", "Individual plan"],
        },
        physiotherapy: {
          name: "Individual Physiotherapy",
          description: "Individual physiotherapy sessions",
          features: ["Individual exercises", "Exercise training", "Home recommendations"],
        },
        hydrotherapy: {
          name: "Hydrotherapy and Physiotherapy",
          description: "Combined sessions in water and gym",
          features: ["Water exercises", "Physiotherapy", "Both parents can participate"],
        },
        massage: {
          name: "Therapeutic Massage",
          description: "Professional therapeutic massage for infants",
          features: ["Gentle methods", "Adapted for infants", "Parent participation"],
        },
        childPhysiotherapy: {
          name: "Individual Physiotherapy",
          description: "Individual physiotherapy sessions for children",
          features: ["Individual exercises", "Exercise training", "Home recommendations"],
        },
        childMassage: {
          name: "Therapeutic Massage",
          description: "Professional therapeutic massage for children",
          features: ["Gentle methods", "Adapted for children", "Parent participation"],
        },
      },
      premium: {
        badge: "Chief Physiotherapist",
        name: "Agnė Juodytė",
        subtitle: "Highly qualified specialist with exceptional experience",
        experience: [
          "15+ years of experience in pediatric physiotherapy",
          "International certifications (DNS, NDT, Bobath)",
          "Advanced diagnostics and treatment techniques",
          "Working with complex cases"
        ],
        note: "* Package discounts not available due to individual approach and exceptional expertise",
        consultationName: "Initial Consultation",
        consultationDescription: "Comprehensive diagnostics and treatment strategy",
        physiotherapyName: "Individual Physiotherapy",
        physiotherapyDescription: "Complex sessions with advanced techniques",
      },
      payment: {
        title: "Payment Methods",
        cash: "Cash",
        card: "Bank card",
        transfer: "Bank transfer",
      },
      important: {
        title: "Important to Know",
        note1: "Package validity - 2 months from purchase date",
        note2: "Canceling a visit with less than 24 hours notice, payment is non-refundable",
        note3: "Initial consultation is mandatory for all new patients",
      },
    },
  },
};
