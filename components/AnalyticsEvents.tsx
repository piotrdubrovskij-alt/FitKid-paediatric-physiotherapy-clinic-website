'use client';

import { useEffect } from 'react';
import { trackBookingClick, trackPhoneClick, trackEmailClick } from '@/lib/gtag';

function getLinkText(el: HTMLElement): string {
  const span = el.querySelector('span');
  return (span?.textContent || el.textContent || '').trim().slice(0, 100);
}

export default function AnalyticsEvents() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const pagePath = window.location.pathname;

      // 1. Check data-analytics attribute on target or any ancestor
      const tracked = target.closest<HTMLElement>('[data-analytics]');
      if (tracked) {
        const event = tracked.getAttribute('data-analytics');
        if (event === 'click_booking') {
          trackBookingClick(getLinkText(tracked), pagePath);
          return;
        }
        if (event === 'click_phone') {
          trackPhoneClick(tracked.getAttribute('data-phone') || '', pagePath);
          return;
        }
        if (event === 'click_email') {
          trackEmailClick(tracked.getAttribute('data-email') || '', pagePath);
          return;
        }
      }

      // 2. Auto-detect from anchor href
      const anchor = target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href') || '';

      if (href.includes('/registracija')) {
        trackBookingClick(getLinkText(anchor), pagePath);
        return;
      }

      if (href.startsWith('tel:')) {
        trackPhoneClick(href.replace('tel:', ''), pagePath);
        return;
      }

      // mailto: links — also handle Cloudflare email obfuscation
      if (href.startsWith('mailto:')) {
        trackEmailClick(href.replace('mailto:', ''), pagePath);
        return;
      }
      if (href.includes('/cdn-cgi/l/email-protection')) {
        const decoded = anchor.textContent?.trim() || '';
        trackEmailClick(decoded, pagePath);
        return;
      }
      if (anchor.querySelector('[data-cfemail]')) {
        const decoded = anchor.textContent?.trim() || '';
        trackEmailClick(decoded, pagePath);
        return;
      }
    }

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);

  return null;
}
