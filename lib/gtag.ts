export const GA_MEASUREMENT_ID = 'G-HLJPTQ5XLD';

type GTagEvent = {
  action: string;
  [key: string]: string | number | undefined;
};

export function trackEvent({ action, ...params }: GTagEvent) {
  if (typeof window === 'undefined') return;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  // Ensure dataLayer exists (standard GA4 pattern)
  w.dataLayer = w.dataLayer || [];
  if (typeof w.gtag === 'function') {
    w.gtag('event', action, params);
  } else {
    // Fallback: queue directly to dataLayer (processed when GA library loads)
    w.dataLayer.push({ event: action, ...params });
  }
}

export function trackBookingClick(buttonText: string, pagePath: string) {
  trackEvent({ action: 'click_booking', button_text: buttonText, page_path: pagePath });
}

export function trackPhoneClick(phoneNumber: string, pagePath: string) {
  trackEvent({ action: 'click_phone', link_url: phoneNumber, page_path: pagePath });
}

export function trackEmailClick(email: string, pagePath: string) {
  trackEvent({ action: 'click_email', link_url: email, page_path: pagePath });
}

export function trackFormSubmit(formName: string, pagePath: string) {
  trackEvent({ action: 'form_submit', form_name: formName, page_path: pagePath });
}
