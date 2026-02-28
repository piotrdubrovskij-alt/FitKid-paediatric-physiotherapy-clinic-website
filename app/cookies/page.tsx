'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import { translations, type Language } from '@/lib/i18n/translations';
import Link from 'next/link';

export default function CookiesPage() {
  const [currentLang, setCurrentLang] = useState<Language>('lt');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang') as Language;
    if (lang && (lang === 'lt' || lang === 'en')) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
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
              {currentLang === 'lt' ? 'SLAPUKŲ NUSTATYMAI' : 'COOKIE SETTINGS'}
            </h1>
            <p className="text-gray-600">
              {currentLang === 'lt' 
                ? 'Informacija apie svetainėje naudojamus slapukus' 
                : 'Information about cookies used on the website'}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {currentLang === 'lt' ? (
              <>
                {/* Section 1 */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. KAS YRA SLAPUKAI?</h2>
                  <p className="text-gray-700 mb-4">
                    Slapukai (angl. <em>cookies</em>) – tai nedideli tekstiniai failai, kuriuos interneto svetainė įrašo į jūsų įrenginį (kompiuterį, telefoną, planšetę), kai ją aplankote. Jie padeda svetainei {'\u201E'}prisiminti{'\u201C'} jūsų veiksmus ir nuostatas (pvz., kalbą, prisijungimo duomenis), todėl jums nereikia jų įvesti iš naujo kiekvieną kartą.
                  </p>
                </section>

                {/* Section 2 */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. KOKIUS SLAPUKUS NAUDOJAME?</h2>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">A. Būtini slapukai</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Paskirtis:</strong> užtikrinti pagrindinę svetainės veiklą (pvz., prisijungimą, seanso palaikymą, saugumo funkcijas).
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Teisinis pagrindas:</strong> būtinybė svetainei veikti – sutikimo nereikia.
                    </p>
                    <p className="text-gray-700">
                      <strong>Pavyzdžiai:</strong> sesijos ID, prisijungimo būsena, kalbos pasirinkimas.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">B. Funkciniai slapukai</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Paskirtis:</strong> prisiminti jūsų pasirinkimus ir nuostatas (pvz., kalbą, zonas, kurias jau matėte).
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Teisinis pagrindas:</strong> sutikimas (per slapukų juostą).
                    </p>
                    <p className="text-gray-700">
                      <strong>Pavyzdžiai:</strong> kalbos pasirinkimas, rodomi pranešimai.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">C. Analitiniai / statistiniai slapukai</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Paskirtis:</strong> rinkti statistiką apie lankytojus (kiek žmonių apsilankė, kuriuos puslapius peržiūrėjo, kiek laiko praleido). Tai padeda mums gerinti svetainę.
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Teisinis pagrindas:</strong> sutikimas (per slapukų juostą).
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Pavyzdžiai:</strong> Google Analytics ar panašios paslaugos.
                    </p>
                    <p className="text-gray-700">
                      <strong>Pastaba:</strong> duomenys apdorojami anonimiškai arba pseudonimizuotai – mes nematome jūsų asmeninės tapatybės.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">D. Rinkodaros / reklamos slapukai</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Paskirtis:</strong> rodyti jums aktualią reklamą kitose svetainėse arba socialiniuose tinkluose, sekti, ar spustelėjote mūsų skelbimus.
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Teisinis pagrindas:</strong> sutikimas (per slapukų juostą).
                    </p>
                    <p className="text-gray-700">
                      <strong>Pavyzdžiai:</strong> Facebook Pixel, Google Ads konversijų stebėjimas.
                    </p>
                  </div>
                </section>

                {/* Section 3 */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. KAIP VALDYTI SLAPUKUS?</h2>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Per slapukų juostą</h3>
                    <p className="text-gray-700 mb-4">
                      Pirmą kartą apsilankius svetainėje, matote pranešimą (slapukų juostą) su galimybe:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li><strong>Priimti visus</strong> – leidžiate naudoti visus slapukus (būtinus, funkcinius, analitinius, rinkodaros).</li>
                      <li><strong>Pasirinkti kategorijas</strong> – galite atskirai įjungti ar išjungti funkcinius, analitinius ir rinkodaros slapukus.</li>
                      <li><strong>Atmesti nebūtinus</strong> – leidžiate tik būtinus slapukus.</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      Savo pasirinkimą galite bet kada pakeisti paspaudę mygtuką {'\u201E'}Slapukų nustatymai{'\u201C'} svetainės apačioje arba ištrinti slapukus per savo naršyklės nustatymus.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Per naršyklę</h3>
                    <p className="text-gray-700 mb-4">
                      Daugelis naršyklių leidžia valdyti ar blokuoti slapukus. Pavyzdžiui:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li><strong>Google Chrome:</strong> Nustatymai → Privatumas ir saugumas → Slapukai ir kiti svetainės duomenys</li>
                      <li><strong>Mozilla Firefox:</strong> Nustatymai → Privatumas ir saugumas → Slapukai ir svetainės duomenys</li>
                      <li><strong>Safari:</strong> Nuostatos → Privatumas → Svetainės duomenys</li>
                      <li><strong>Microsoft Edge:</strong> Parametrai → Privatumas, paieška ir paslaugos → Slapukai ir svetainės duomenys</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      <strong>Pastaba:</strong> išjungus būtinus slapukus, kai kurios svetainės funkcijos gali neveikti tinkamai.
                    </p>
                  </div>
                </section>

                {/* Section 4 */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. TREČIŲJŲ ŠALIŲ SLAPUKAI</h2>
                  <p className="text-gray-700 mb-4">
                    Kai kurie slapukai gali būti įrašomi ne mūsų, o trečiųjų šalių (pvz., Google, Facebook). Tai atsitinka, kai svetainėje įdiegti jų įskiepiai (analitika, socialinių tinklų mygtukai, reklama).
                  </p>
                  <p className="text-gray-700 mb-4">
                    Tokiais atvejais trečiųjų šalių slapukus valdo pačios tos organizacijos pagal savo privatumo politikas:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li><strong>Google Analytics:</strong> <a href="https://policies.google.com/privacy" className="text-[#54B6FC] hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
                    <li><strong>Facebook:</strong> <a href="https://www.facebook.com/privacy/explanation" className="text-[#54B6FC] hover:underline" target="_blank" rel="noopener noreferrer">Facebook Data Policy</a></li>
                  </ul>
                </section>

                {/* Section 5 */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. KIEK LAIKO SLAPUKAI SAUGOMI?</h2>
                  <div className="mb-4">
                    <p className="text-gray-700 mb-2">
                      <strong>Sesijos slapukai:</strong> ištrinami, kai uždarote naršyklę.
                    </p>
                    <p className="text-gray-700">
                      <strong>Nuolatiniai slapukai:</strong> saugomi ilgesnį laiką (pvz., 1 metus, 2 metus) arba tol, kol juos ištrinate patys.
                    </p>
                  </div>
                  <p className="text-gray-700">
                    Konkretus laikymo terminas priklauso nuo slapuko tipo ir paskirtis.
                  </p>
                </section>

                {/* Section 6 */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. SLAPUKŲ ATNAUJINIMAI</h2>
                  <p className="text-gray-700">
                    Galime atnaujinti slapukų sąrašą ar šią politiką. Rekomenduojame periodiškai peržiūrėti šį puslapį, kad būtumėte informuoti apie pakeitimus.
                  </p>
                </section>

                {/* Section 7 */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. KONTAKTAI</h2>
                  <p className="text-gray-700 mb-4">
                    Jei turite klausimų apie slapukus ar jų valdymą, kreipkitės:
                  </p>
                  <p className="text-gray-700">
                    <strong>El. paštas:</strong> info@fitkid.lt<br />
                    <strong>Telefonas:</strong> +370 666 99676<br />
                    <strong>Adresas:</strong> Ukmergės 224-4, Vilnius
                  </p>
                </section>
              </>
            ) : (
              <>
                {/* English version */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. WHAT ARE COOKIES?</h2>
                  <p className="text-gray-700">
                    Cookies are small text files that a website stores on your device (computer, phone, tablet) when you visit it. They help the website {'\u201C'}remember{'\u201D'} your actions and preferences (e.g., language, login details), so you don{'\u2019'}t have to enter them again each time.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. WHAT COOKIES DO WE USE?</h2>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">A. Essential Cookies</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Purpose:</strong> ensure basic website functionality (e.g., login, session maintenance, security features).
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Legal basis:</strong> necessary for website operation – no consent required.
                    </p>
                    <p className="text-gray-700">
                      <strong>Examples:</strong> session ID, login status, language selection.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">B. Functional Cookies</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Purpose:</strong> remember your choices and preferences (e.g., language, regions you{'\u2019'}ve already seen).
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Legal basis:</strong> consent (via cookie banner).
                    </p>
                    <p className="text-gray-700">
                      <strong>Examples:</strong> language selection, displayed messages.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">C. Analytical / Statistical Cookies</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Purpose:</strong> collect statistics about visitors (how many people visited, which pages they viewed, how long they stayed). This helps us improve the website.
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Legal basis:</strong> consent (via cookie banner).
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Examples:</strong> Google Analytics or similar services.
                    </p>
                    <p className="text-gray-700">
                      <strong>Note:</strong> data is processed anonymously or pseudonymously – we don{'\u2019'}t see your personal identity.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">D. Marketing / Advertising Cookies</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Purpose:</strong> show you relevant advertising on other websites or social networks, track whether you clicked on our ads.
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Legal basis:</strong> consent (via cookie banner).
                    </p>
                    <p className="text-gray-700">
                      <strong>Examples:</strong> Facebook Pixel, Google Ads conversion tracking.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. HOW TO MANAGE COOKIES?</h2>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Via Cookie Banner</h3>
                    <p className="text-gray-700 mb-4">
                      When you first visit the website, you see a message (cookie banner) with options to:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li><strong>Accept all</strong> – allows all cookies (essential, functional, analytical, marketing).</li>
                      <li><strong>Choose categories</strong> – you can separately enable or disable functional, analytical, and marketing cookies.</li>
                      <li><strong>Reject non-essential</strong> – allows only essential cookies.</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      You can change your choice anytime by clicking the {'\u201C'}Cookie Settings{'\u201D'} button at the bottom of the website or by deleting cookies through your browser settings.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Via Browser</h3>
                    <p className="text-gray-700 mb-4">
                      Most browsers allow you to manage or block cookies. For example:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li><strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                      <li><strong>Mozilla Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                      <li><strong>Safari:</strong> Preferences → Privacy → Website Data</li>
                      <li><strong>Microsoft Edge:</strong> Settings → Privacy, search and services → Cookies and site data</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      <strong>Note:</strong> disabling essential cookies may prevent some website features from working properly.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. THIRD-PARTY COOKIES</h2>
                  <p className="text-gray-700 mb-4">
                    Some cookies may be set not by us, but by third parties (e.g., Google, Facebook). This happens when their plugins are embedded on the website (analytics, social media buttons, advertising).
                  </p>
                  <p className="text-gray-700 mb-4">
                    In such cases, third-party cookies are managed by those organizations according to their own privacy policies:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li><strong>Google Analytics:</strong> <a href="https://policies.google.com/privacy" className="text-[#54B6FC] hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
                    <li><strong>Facebook:</strong> <a href="https://www.facebook.com/privacy/explanation" className="text-[#54B6FC] hover:underline" target="_blank" rel="noopener noreferrer">Facebook Data Policy</a></li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. HOW LONG ARE COOKIES STORED?</h2>
                  <div className="mb-4">
                    <p className="text-gray-700 mb-2">
                      <strong>Session cookies:</strong> deleted when you close your browser.
                    </p>
                    <p className="text-gray-700">
                      <strong>Persistent cookies:</strong> stored for a longer period (e.g., 1 year, 2 years) or until you delete them yourself.
                    </p>
                  </div>
                  <p className="text-gray-700">
                    The specific retention period depends on the cookie type and purpose.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. COOKIE UPDATES</h2>
                  <p className="text-gray-700">
                    We may update our cookie list or this policy. We recommend periodically reviewing this page to stay informed about changes.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. CONTACT</h2>
                  <p className="text-gray-700 mb-4">
                    If you have questions about cookies or their management, please contact us:
                  </p>
                  <p className="text-gray-700">
                    <strong>Email:</strong> info@fitkid.lt<br />
                    <strong>Phone:</strong> +370 666 99676<br />
                    <strong>Address:</strong> Ukmergės 224-4, Vilnius
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
