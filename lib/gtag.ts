export const GA_MEASUREMENT_ID = 'G-HLJPTQ5XLD';

type GTagEvent = {
  action: string;
  [key: string]: string | number | undefined;
};

export function trackEvent({ action, ...params }: GTagEvent) {
  if (typeof window === 'undefined') return;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  w.dataLayer = w.dataLayer || [];
  // Debug: confirm event fires in browser console
  console.log('[GA4]', action, params);
  if (typeof w.gtag === 'function') {
    w.gtag('event', action, params);
  } else {
    w.dataLayer.push({ event: action, ...params });
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
}

export function trackFormSubmit(formName: string, pagePath: string) {
  trackEvent({ action: 'form_submit', form_name: formName, page_path: pagePath });
}
