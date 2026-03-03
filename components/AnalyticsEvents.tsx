'use client';

import { useEffect } from 'react';
import { trackBookingClick, trackPhoneClick, trackEmailClick } from '@/lib/gtag';

function getButtonText(el: Element): string {
  const span = el.querySelector('span');
  return (span?.textContent || el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 100);
}

export default function AnalyticsEvents() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const pagePath = window.location.pathname;

      // Walk up from click target — handles SVG, nested icons, any DOM structure
      let el: Element | null = e.target as Element;

      while (el && el !== document.body) {
        // Check data-analytics on every element as we walk up
        const dataAnalytics = (el as HTMLElement).getAttribute?.('data-analytics');

        if (dataAnalytics === 'click_phone') {
          const phone = (el as HTMLElement).getAttribute('data-phone') || '';
          trackPhoneClick(phone, pagePath);
          return;
        }

        if (dataAnalytics === 'click_email') {
          const email = (el as HTMLElement).getAttribute('data-email') || 'info@fitkid.lt';
          trackEmailClick(email, pagePath);
          return;
        }

        if (dataAnalytics === 'click_booking') {
          trackBookingClick(getButtonText(el), pagePath);
          return;
        }

        // When we reach an anchor tag, check href as fallback
        if (el.tagName === 'A') {
          const href = (el as HTMLAnchorElement).getAttribute('href') || '';

          if (href.startsWith('tel:')) {
            trackPhoneClick(href.replace('tel:', '').trim(), pagePath);
            return;
          }

          if (href.startsWith('mailto:')) {
            trackEmailClick(href.replace('mailto:', '').trim(), pagePath);
            return;
          }

          // Cloudflare email obfuscation — anchor has data-analytics, use data-email
          if (href.includes('/cdn-cgi/l/email-protection')) {
            trackEmailClick('info@fitkid.lt', pagePath);
            return;
          }

          if (href.includes('/registracija')) {
            trackBookingClick(getButtonText(el), pagePath);
            return;
          }

          // Stop at anchor — don't track generic clicks
          return;
        }

        el = el.parentElement;
      }
    }

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);

  return null;
}
