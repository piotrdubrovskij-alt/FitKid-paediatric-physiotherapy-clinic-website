'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import CookieBanner from '@/components/CookieBanner';
import {
  COOKIE_CONSENT_EVENT,
  GA_MEASUREMENT_ID,
  hasAnalyticsConsent,
  LANGUAGE_CHANGE_EVENT,
} from '@/lib/gtag';
import { getStoredLanguage } from '@/lib/languageStorage';
import type { Language } from '@/lib/i18n/translations';

const ANALYTICS_SCRIPT_ID = 'fitkid-google-analytics';

type AnalyticsWindow = Window & {
  dataLayer?: unknown[][];
  gtag?: (...args: unknown[]) => void;
};

function clearAnalyticsCookies() {
  const domains = ['', window.location.hostname];
  if (window.location.hostname === 'fitkid.lt' || window.location.hostname.endsWith('.fitkid.lt')) {
    domains.push('fitkid.lt', '.fitkid.lt');
  }

  for (const entry of document.cookie.split(';')) {
    const name = entry.trim().split('=')[0];
    if (!/^_ga(?:_|$)/.test(name)) continue;
    for (const domain of new Set(domains)) {
      document.cookie = `${name}=; Max-Age=0; Path=/${domain ? `; Domain=${domain}` : ''}`;
    }
  }
}

export default function CookieConsentManager() {
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = useState<Language>('lt');
  const analyticsWasAllowed = useRef(false);

  useEffect(() => {
    const syncLanguage = () => {
      const urlLanguage = new URLSearchParams(window.location.search).get('lang');
      setCurrentLang(urlLanguage === 'en' ||
        (!urlLanguage && pathname === '/kontaktai' && getStoredLanguage() === 'en')
        ? 'en' : 'lt');
    };
    const onLanguageChange = (event: Event) => {
      const language = (event as CustomEvent<string>).detail;
      setCurrentLang(language === 'en' ? 'en' : 'lt');
    };

    syncLanguage();
    window.addEventListener('popstate', syncLanguage);
    window.addEventListener(LANGUAGE_CHANGE_EVENT, onLanguageChange);
    return () => {
      window.removeEventListener('popstate', syncLanguage);
      window.removeEventListener(LANGUAGE_CHANGE_EVENT, onLanguageChange);
    };
  }, [pathname]);

  useEffect(() => {
    const syncAnalytics = () => {
      const allowed = hasAnalyticsConsent();
      const disableKey = `ga-disable-${GA_MEASUREMENT_ID}`;
      (window as unknown as Record<string, unknown>)[disableKey] = !allowed;

      if (!allowed) {
        document.getElementById(ANALYTICS_SCRIPT_ID)?.remove();
        const analyticsWindow = window as AnalyticsWindow;
        analyticsWindow.dataLayer = [];
        analyticsWindow.gtag = undefined;
        clearAnalyticsCookies();
        analyticsWasAllowed.current = false;
        return;
      }

      const analyticsWindow = window as AnalyticsWindow;
      if (typeof analyticsWindow.gtag !== 'function') {
        analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
        analyticsWindow.gtag = (...args: unknown[]) => {
          analyticsWindow.dataLayer?.push(args);
        };
        analyticsWindow.gtag('js', new Date());
      }

      if (!analyticsWasAllowed.current) {
        analyticsWindow.gtag('config', GA_MEASUREMENT_ID);
        analyticsWasAllowed.current = true;
      }

      if (!document.getElementById(ANALYTICS_SCRIPT_ID)) {
        const script = document.createElement('script');
        script.id = ANALYTICS_SCRIPT_ID;
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        document.head.appendChild(script);
      }
    };

    syncAnalytics();
    window.addEventListener(COOKIE_CONSENT_EVENT, syncAnalytics);
    window.addEventListener('storage', syncAnalytics);
    return () => {
      window.removeEventListener(COOKIE_CONSENT_EVENT, syncAnalytics);
      window.removeEventListener('storage', syncAnalytics);
    };
  }, []);

  return <CookieBanner currentLang={currentLang} />;
}
