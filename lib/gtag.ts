export const GA_MEASUREMENT_ID = 'G-HLJPTQ5XLD';
export const COOKIE_CONSENT_EVENT = 'fitkid-cookie-consent-changed';
export const LANGUAGE_CHANGE_EVENT = 'fitkid-language-changed';
export const OPEN_COOKIE_PREFERENCES_EVENT = 'fitkid-open-cookie-preferences';

export type CookiePreferences = {
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
};

const allPreferences: CookiePreferences = {
  functional: true,
  analytics: true,
  marketing: true,
};

const necessaryPreferences: CookiePreferences = {
  functional: false,
  analytics: false,
  marketing: false,
};

export function readCookiePreferences(): CookiePreferences | null {
  if (typeof window === 'undefined') return null;

  try {
    const stored = window.localStorage.getItem('cookieConsent');
    if (stored === 'all') return { ...allPreferences };
    if (stored === 'necessary') return { ...necessaryPreferences };
    if (!stored) return null;

    const parsed: unknown = JSON.parse(stored);
    if (
      parsed &&
      typeof parsed === 'object' &&
      'functional' in parsed && typeof parsed.functional === 'boolean' &&
      'analytics' in parsed && typeof parsed.analytics === 'boolean' &&
      'marketing' in parsed && typeof parsed.marketing === 'boolean'
    ) {
      return {
        functional: parsed.functional,
        analytics: parsed.analytics,
        marketing: parsed.marketing,
      };
    }
  } catch {
    // Storage may be unavailable. In that case analytics must stay disabled.
  }

  return null;
}

export function saveCookiePreferences(preferences: CookiePreferences): boolean {
  if (typeof window === 'undefined') return false;

  try {
    const value = Object.values(preferences).every(Boolean)
      ? 'all'
      : Object.values(preferences).every(value => !value)
        ? 'necessary'
        : JSON.stringify(preferences);
    window.localStorage.setItem('cookieConsent', value);
    window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
    return true;
  } catch {
    return false;
  }
}

export function hasAnalyticsConsent(): boolean {
  return readCookiePreferences()?.analytics === true;
}

type GTagEvent = {
  action: string;
  [key: string]: string | number | undefined;
};

export function trackEvent({ action, ...params }: GTagEvent) {
  if (typeof window === 'undefined' || !hasAnalyticsConsent()) return;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  if (typeof w.gtag === 'function') {
    w.gtag('event', action, params);
  }
}

export function trackBookingClick(buttonText: string, pagePath: string) {
  trackEvent({ action: 'click_booking', button_text: buttonText, page_path: pagePath });
}

export function trackSpecialistBookingClick(specialist: string, buttonText: string, pagePath: string) {
  trackEvent({ action: 'click_specialist_booking', specialist, button_text: buttonText, page_path: pagePath });
}

export function trackPhoneClick(phoneNumber: string, pagePath: string) {
  trackEvent({ action: 'click_phone', link_url: phoneNumber, page_path: pagePath });
}

export function trackEmailClick(email: string, pagePath: string) {
  trackEvent({ action: 'click_email', link_url: email, page_path: pagePath });
}

export function trackWhatsAppClick(pagePath: string) {
  trackEvent({ action: 'whatsapp_click', page_path: pagePath });
}

export function trackMapsClick(mapType: string, pagePath: string) {
  trackEvent({ action: 'maps_click', map_type: mapType, page_path: pagePath });
}

export function trackWazeClick(pagePath: string) {
  trackEvent({ action: 'waze_click', page_path: pagePath });
}

export function trackLanguageSwitch(language: string, pagePath: string) {
  trackEvent({ action: 'language_switch', language, page_path: pagePath });
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(LANGUAGE_CHANGE_EVENT, { detail: language }));
  }
}

export function trackFormSubmit(formName: string, pagePath: string) {
  trackEvent({ action: 'form_submit', form_name: formName, page_path: pagePath });
}
