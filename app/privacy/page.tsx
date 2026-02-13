'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import { translations, type Language } from '@/lib/i18n/translations';
import Link from 'next/link';

export default function PrivacyPage() {
  const [currentLang, setCurrentLang] = useState<Language>('lt');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang') as Language;
    if (lang && (lang === 'lt' || lang === 'en')) {
      setCurrentLang(lang);
    }
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    const url = new URL(window.location.href);
    if (lang === 'lt') {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', lang);
    }
    window.history.pushState({}, '', url.toString());
  };

  const t = translations[currentLang];

  return (
    <>
      <Header
        translations={t}
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
      />

      <main className="pt-20 md:pt-24 min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          {/* Back to Home */}
          <Link
            href={currentLang === 'lt' ? '/' : `/?lang=${currentLang}`}
            className="inline-flex items-center text-[#54B6FC] hover:text-[#4a9fe0] mb-8 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {currentLang === 'lt' ? 'Grįžti į pagrindinį' : 'Back to Home'}
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {currentLang === 'lt' ? 'PRIVATUMO POLITIKA' : 'PRIVACY POLICY'}
            </h1>
            <p className="text-gray-600">
              {currentLang === 'lt' 
                ? 'Atnaujinimo data: 2026-02-04' 
                : 'Last updated: 2026-02-04'}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {currentLang === 'lt' ? (
              <>
                {/* Section 1 */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. DUOMENŲ VALDYTOJAS</h2>
                  <p className="text-gray-700 mb-4">
                    Šią Privatumo politiką taiko ir už Jūsų asmens duomenų tvarkymą atsako:
                  </p>
                  <p className="text-gray-700 mb-2">
                    Juridinio asmens pavadinimas: MB Kineziterapija, veikianti pavadinimu „FitKid"
                  </p>
                  <p className="text-gray-700 mb-2">
                    Įmonės kodas: 305136936
                  </p>
                  <p className="text-gray-700 mb-2">
                    Buveinės / registracijos adresas: Ukmergės 224-4, Vilnius
                  </p>
                  <p className="text-gray-700 mb-2">
                    El. paštas asmens duomenų klausimais: info@fitkid.lt
                  </p>
                  <p className="text-gray-700">
                    Telefonas: +370 666 99676
                  </p>
                </section>

                {/* Section 2 */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. BENDROJI INFORMACIJA</h2>
                  <p className="text-gray-700 mb-4">
                    „FitKid" teikia sveikatos priežiūros paslaugas ir tvarko asmens duomenis, įskaitant sveikatos duomenis, kurie laikomi ypatingai jautriais. Skiriame maksimalų dėmesį jų saugumui ir tvarkome duomenis tik tiek, kiek būtina paslaugoms suteikti, administruoti ir įstatymams vykdyti.
                  </p>
                  <p className="text-gray-700">
                    Svarbu tėvams / globėjams: mūsų pacientai dažniausiai yra vaikai, todėl praktikoje informaciją ir sutikimus (kai jų reikia) paprastai pateikia vaiko tėvai (įtėviai) ar globėjai. Kai kuriais atvejais, atsižvelgiant į vaiko amžių ir taikomus teisės aktus, vaikas taip pat gali būti įtraukiamas į sprendimų priėmimą.
                  </p>
                </section>

                {/* Section 3 */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. KOKIUS DUOMENIS TVARKOME IR KODĖL</h2>
                  
                  <div className="mb-6">
                    <p className="text-gray-700 mb-3">
                      <strong>A. Sveikatos priežiūros paslaugų teikimas</strong>
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Tvarkomi duomenys:</strong> vaiko ir (ar) atstovų vardas, pavardė, gimimo data ir (ar) asmens kodas, kontaktai; sveikatos duomenys (nusiskundimai, anamnezė, įvertinimai, diagnozės, tyrimai, paslaugų eiga, išvados, rekomendacijos), siuntimai (jei taikoma).
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Teisiniai pagrindai:</strong> sutarties sudarymas ir vykdymas, teisinė prievolė, tvarkymas būtinas sveikatos priežiūros tikslams.
                    </p>
                    <p className="text-gray-700">
                      <strong>Pastaba:</strong> atskiro sutikimo sveikatos duomenims paprastai nereikia, nes be šių duomenų negalime suteikti paslaugų.
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="text-gray-700 mb-3">
                      <strong>B. Administravimas ir buhalterija</strong>
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Tvarkomi duomenys:</strong> mokėjimų informacija, sąskaitos faktūros rekvizitai, paslaugų apskaita, skolų administravimas (jei taikoma).
                    </p>
                    <p className="text-gray-700">
                      <strong>Teisinis pagrindas:</strong> teisinė prievolė. Dokumentų saugojimo terminai – pagal teisės aktus.
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="text-gray-700 mb-3">
                      <strong>C. Komunikacija ir priminimai apie vizitus</strong>
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Tvarkomi duomenys:</strong> telefono numeris, el. paštas, registracijos informacija.
                    </p>
                    <p className="text-gray-700">
                      <strong>Teisinis pagrindas:</strong> sutarties vykdymas ir (ar) teisėtas interesas užtikrinti sklandų vizitų organizavimą.
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="text-gray-700 mb-3">
                      <strong>D. Tiesioginė rinkodara</strong>
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Tvarkomi duomenys:</strong> el. paštas, vardas (jei pateikiate).
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Teisinis pagrindas:</strong> Jūsų sutikimas.
                    </p>
                    <p className="text-gray-700">
                      <strong>Svarbu:</strong> sutikimą galite bet kada atšaukti.
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="text-gray-700 mb-3">
                      <strong>E. Vaizdo stebėjimas</strong>
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Tikslas:</strong> turto ir asmenų saugumas bendrose patalpose. Kabinetuose vaizdo stebėjimas nevykdomas, nebent aiškiai nurodyta kitaip ir užtikrintas teisėtas pagrindas.
                    </p>
                    <p className="text-gray-700">
                      <strong>Teisinis pagrindas:</strong> teisėtas interesas.
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="text-gray-700 mb-3">
                      <strong>F. Nuotraukos / vaizdo įrašai socialiniams tinklams</strong>
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Tvarkomi duomenys:</strong> Jūsų ar vaiko atvaizdas, renginio / veiklos kontekstas.
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Teisinis pagrindas:</strong> aiškus sutikimas.
                    </p>
                    <p className="text-gray-700">
                      Be sutikimo nuotraukų / vaizdo medžiagos neviešiname.
                    </p>
                  </div>
                </section>

                {/* Section 4 */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. VAIKŲ ASMENS DUOMENŲ TVARKYMAS</h2>
                  <p className="text-gray-700 mb-4">
                    Vaikų asmens duomenis tvarkome tiek, kiek būtina paslaugoms suteikti, sutartiniams įsipareigojimams vykdyti ir teisės aktų reikalavimams laikytis.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Kai sutikimas reikalingas, už nepilnametį vaiką sutikimą paprastai pateikia tėvai / globėjai, ypač kai vaikas jaunesnis.
                  </p>
                  <p className="text-gray-700">
                    Jei vaikui tiesiogiai siūlomos informacinės visuomenės paslaugos, taikomi papildomi sutikimo reikalavimai pagal Lietuvos teisę.
                  </p>
                </section>

                {/* Section 5 */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. IŠ KUR GAUNAME DUOMENIS</h2>
                  <p className="text-gray-700 mb-4">
                    Duomenis gauname:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>tiesiogiai iš Jūsų (tėvų / globėjų) ir, kai taikoma, iš paties paciento registracijos, konsultacijos ar gydymo metu;</li>
                    <li>iš kitų įstaigų / specialistų, kai tai būtina gydymui ir yra teisėtas pagrindas;</li>
                    <li>iš valstybinių sistemų / registrų, kai to reikalauja teisės aktai.</li>
                  </ul>
                </section>

                {/* Section 6 */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. KAM PERDUODAME DUOMENIS</h2>
                  <p className="text-gray-700 mb-4">
                    Jūsų duomenų neperduodame ir neteikiame tretiesiems asmenims rinkodaros tikslais.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Duomenis galime perduoti tik tiek, kiek būtina ir teisėta:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>valstybės institucijoms ir sistemoms, kai privaloma pagal teisės aktus;</li>
                    <li>duomenų tvarkytojams (IT, buhalterija, teisės paslaugos ir kiti paslaugų tiekėjai), kurie padeda mums vykdyti veiklą ir duomenis tvarko tik pagal mūsų nurodymus;</li>
                    <li>draudimo bendrovėms – tik Jūsų prašymu arba kai to reikia paslaugų apmokėjimui pagal sutartį.</li>
                  </ul>
                </section>

                {/* Section 7 */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. DUOMENŲ PERDAVIMAS UŽ ES/EEE RIBŲ</h2>
                  <p className="text-gray-700">
                    Paprastai siekiame, kad duomenys būtų tvarkomi ES/EEE ribose. Jei naudojamės paslaugomis, kurių tiekėjai gali būti už ES/EEE ribų, taikome reikiamas apsaugos priemones.
                  </p>
                </section>

                {/* Section 8 */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. KIEK LAIKO SAUGOME DUOMENIS</h2>
                  <p className="text-gray-700 mb-4">
                    Duomenis saugome ne ilgiau, nei to reikia tikslams pasiekti arba nei nustato teisės aktai. Pagrindiniai terminai:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>medicininiai dokumentai – saugomi teisės aktų nustatytais terminais;</li>
                    <li>buhalteriniai dokumentai – saugomi teisės aktų nustatytais terminais;</li>
                    <li>rinkodaros duomenys – iki sutikimo atšaukimo arba ne ilgiau kaip 3 metus nuo sutikimo gavimo / paskutinio aktyvaus kontakto;</li>
                    <li>užklausos el. paštu / telefonu – 1–2 metus po bendravimo pabaigos, jei nereikia ilgiau;</li>
                    <li>vaizdo įrašai (jei taikoma) – paprastai iki 14–30 dienų, o incidento atveju – iki tyrimo pabaigos.</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    Pasibaigus terminui duomenys sunaikinami arba anonimizuojami.
                  </p>
                </section>

                {/* Section 9 */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. AUTOMATIZUOTAS SPRENDIMŲ PRIĖMIMAS IR PROFILIAVIMAS</h2>
                  <p className="text-gray-700">
                    Automatizuoto sprendimų priėmimo, įskaitant profiliavimą, nevykdome.
                  </p>
                </section>

                {/* Section 10 */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. JŪSŲ TEISĖS</h2>
                  <p className="text-gray-700 mb-4">
                    Jūs turite teisę:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>susipažinti su savo (ir atstovaujamo vaiko) duomenimis;</li>
                    <li>reikalauti ištaisyti netikslius duomenis;</li>
                    <li>reikalauti ištrinti duomenis, kai taikoma;</li>
                    <li>apriboti duomenų tvarkymą;</li>
                    <li>nesutikti su tvarkymu;</li>
                    <li>perkelti duomenis, kai taikoma;</li>
                    <li>atšaukti sutikimą, kai tvarkymas grindžiamas sutikimu.</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    <strong>Kaip pasinaudoti teisėmis:</strong> kreipkitės el. paštu info@fitkid.lt.
                  </p>
                  <p className="text-gray-700 mt-4">
                    <strong>Teisė pateikti skundą:</strong> Valstybinei duomenų apsaugos inspekcijai (VDAI), L. Sapiegos g. 17, 10312 Vilnius, el. paštas info@ada.lt, tel. +370 5 271 28 04.
                  </p>
                </section>

                {/* Section 11 */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. SLAPUKAI (COOKIES)</h2>
                  <p className="text-gray-700">
                    Svetainėje naudojami slapukai, kad ji veiktų sklandžiai, o analitiniai / rinkodaros slapukai – tik gavus Jūsų sutikimą per slapukų juostą.
                  </p>
                </section>

                {/* Section 12 */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">12. SAUGUMAS</h2>
                  <p className="text-gray-700">
                    Taikome tinkamas technines ir organizacines priemones, kad apsaugotume duomenis nuo neteisėtos prieigos, praradimo ar atskleidimo.
                  </p>
                </section>

                {/* Section 13 */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">13. POLITIKOS PAKEITIMAI</h2>
                  <p className="text-gray-700">
                    Politika gali būti atnaujinama. Naujausia versija skelbiama Bendrovės svetainėje.
                  </p>
                </section>
              </>
            ) : (
              <>
                {/* English version - keeping concise */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. DATA CONTROLLER</h2>
                  <p className="text-gray-700 mb-4">
                    This Privacy Policy is applied and responsible for your personal data processing:
                  </p>
                  <p className="text-gray-700 mb-2">Legal name: MB Kineziterapija, operating as "FitKid"</p>
                  <p className="text-gray-700 mb-2">Company code: 305136936</p>
                  <p className="text-gray-700 mb-2">Registered address: Ukmergės 224-4, Vilnius</p>
                  <p className="text-gray-700 mb-2">Email for data protection matters: info@fitkid.lt</p>
                  <p className="text-gray-700">Phone: +370 666 99676</p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. GENERAL INFORMATION</h2>
                  <p className="text-gray-700 mb-4">
                    "FitKid" provides healthcare services and processes personal data, including health data, which is considered particularly sensitive. We pay maximum attention to their security and process data only to the extent necessary for service provision, administration, and legal compliance.
                  </p>
                  <p className="text-gray-700">
                    Important for parents/guardians: our patients are usually children, so in practice, information and consents (when required) are typically provided by the child's parents or guardians. In some cases, depending on the child's age and applicable law, the child may also be involved in decision-making.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. WHAT DATA WE PROCESS AND WHY</h2>
                  <p className="text-gray-700 mb-4">
                    <strong>A. Healthcare Service Provision</strong><br />
                    Data processed: child's and/or representatives' name, surname, date of birth and/or personal code, contacts; health data (complaints, medical history, assessments, diagnoses, examinations, service progress, conclusions, recommendations), referrals (if applicable).<br />
                    Legal basis: contract performance, legal obligation, processing necessary for healthcare purposes.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>B. Administration and Accounting</strong><br />
                    Data processed: payment information, invoice details, service records, debt administration (if applicable).<br />
                    Legal basis: legal obligation.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>C. Communication and Appointment Reminders</strong><br />
                    Data processed: phone number, email, registration information.<br />
                    Legal basis: contract performance and/or legitimate interest.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>D. Direct Marketing</strong><br />
                    Data processed: email, name (if provided).<br />
                    Legal basis: your consent. You can withdraw consent at any time.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>E. Video Surveillance</strong><br />
                    Purpose: security of property and persons in common areas. No surveillance in treatment rooms unless clearly indicated.<br />
                    Legal basis: legitimate interest.
                  </p>
                  <p className="text-gray-700">
                    <strong>F. Photos/Videos for Social Media</strong><br />
                    Data processed: your or child's image, event/activity context.<br />
                    Legal basis: explicit consent. We do not publish photos/videos without consent.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. PROCESSING CHILDREN'S PERSONAL DATA</h2>
                  <p className="text-gray-700">
                    We process children's personal data to the extent necessary for service provision, contractual obligations, and legal compliance. When consent is required, it is usually provided by parents/guardians, especially for younger children.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. DATA SOURCES</h2>
                  <p className="text-gray-700">
                    We obtain data directly from you (parents/guardians) and, when applicable, from the patient during registration, consultation, or treatment; from other institutions/specialists when necessary for treatment; from state systems/registers as required by law.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. DATA RECIPIENTS</h2>
                  <p className="text-gray-700">
                    We do not share your data for marketing purposes. Data may be shared only when necessary and lawful: with state institutions, data processors (IT, accounting, legal services), and insurance companies (at your request or as needed for payment).
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. DATA TRANSFERS OUTSIDE EU/EEA</h2>
                  <p className="text-gray-700">
                    We generally aim to process data within the EU/EEA. If we use services whose providers may be outside the EU/EEA, we apply appropriate safeguards.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. DATA RETENTION</h2>
                  <p className="text-gray-700">
                    We retain data no longer than necessary or as required by law: medical documents (as per legal requirements), accounting documents (as per legal requirements), marketing data (until consent withdrawal or max 3 years), video recordings (usually 14-30 days, longer in case of incident).
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. AUTOMATED DECISION-MAKING AND PROFILING</h2>
                  <p className="text-gray-700">
                    We do not conduct automated decision-making, including profiling.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. YOUR RIGHTS</h2>
                  <p className="text-gray-700 mb-4">
                    You have the right to: access your data, request rectification, request erasure, restrict processing, object to processing, data portability, withdraw consent.
                  </p>
                  <p className="text-gray-700">
                    To exercise your rights: contact info@fitkid.lt<br />
                    To file a complaint: State Data Protection Inspectorate (VDAI), L. Sapiegos st. 17, 10312 Vilnius, email info@ada.lt, tel. +370 5 271 28 04.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. COOKIES</h2>
                  <p className="text-gray-700">
                    We use cookies for website functionality, while analytical/marketing cookies are used only with your consent via the cookie banner.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">12. SECURITY</h2>
                  <p className="text-gray-700">
                    We apply appropriate technical and organizational measures to protect data from unauthorized access, loss, or disclosure.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">13. POLICY CHANGES</h2>
                  <p className="text-gray-700">
                    This policy may be updated. The latest version is published on the Company's website.
                  </p>
                </section>
              </>
            )}
          </div>
        </div>
      </main>

      <Footer translations={t} />
      <CookieBanner currentLang={currentLang} />
    </>
  );
}
