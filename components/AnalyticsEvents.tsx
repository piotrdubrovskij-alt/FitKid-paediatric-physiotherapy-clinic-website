'use client';

import { useEffect } from 'react';
import { trackBookingClick, trackPhoneClick, trackEmailClick } from '@/lib/gtag';

function getClickedAnchor(target: EventTarget | null): HTMLAnchorElement | null {
  let el = target as HTMLElement | null;
  while (el && el !== document.body) {
    if (el.tagName === 'A') return el as HTMLAnchorElement;
    el = el.parentElement;
  }
  return null;
}

function getButtonText(anchor: HTMLAnchorElement): string {
  const span = anchor.querySelector('span');
  return (span?.textContent || anchor.textContent || '').trim().slice(0, 100);
}

export default function AnalyticsEvents() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = getClickedAnchor(e.target);
      if (!anchor) return;

      const href = anchor.getAttribute('href') || '';
      const pagePath = window.location.pathname;

      if (href.includes('/registracija')) {
        trackBookingClick(getButtonText(anchor), pagePath);
        return;
      }

      if (href.startsWith('tel:')) {
        trackPhoneClick(href.replace('tel:', ''), pagePath);
        return;
      }

      if (href.startsWith('mailto:')) {
        trackEmailClick(href.replace('mailto:', ''), pagePath);
        return;
      }
    }

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);

  return null;
}
