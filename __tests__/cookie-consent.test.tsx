import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import CookieBanner from '@/components/CookieBanner';
import CookieConsentManager from '@/components/CookieConsentManager';
import {
  OPEN_COOKIE_PREFERENCES_EVENT,
  hasAnalyticsConsent,
  readCookiePreferences,
  saveCookiePreferences,
  trackBookingClick,
} from '@/lib/gtag';

vi.mock('next/navigation', () => ({ usePathname: () => '/' }));

type AnalyticsTestWindow = Window & {
  dataLayer?: unknown[][];
  gtag?: (...args: unknown[]) => void;
};

beforeEach(() => {
  window.localStorage.clear();
  const analyticsWindow = window as AnalyticsTestWindow;
  analyticsWindow.dataLayer = undefined;
  analyticsWindow.gtag = undefined;
  document.getElementById('fitkid-google-analytics')?.remove();
});

afterEach(() => {
  cleanup();
  vi.useRealTimers();
  document.getElementById('fitkid-google-analytics')?.remove();
});

describe('analytics consent', () => {
  it('honors legacy choices and never queues events without consent', () => {
    trackBookingClick('Book', '/');
    expect((window as AnalyticsTestWindow).dataLayer).toBeUndefined();

    window.localStorage.setItem('cookieConsent', 'necessary');
    expect(hasAnalyticsConsent()).toBe(false);
    trackBookingClick('Book', '/');
    expect((window as AnalyticsTestWindow).dataLayer).toBeUndefined();

    window.localStorage.setItem('cookieConsent', 'all');
    expect(readCookiePreferences()).toEqual({ functional: true, analytics: true, marketing: true });
    expect(hasAnalyticsConsent()).toBe(true);
    const send = vi.fn();
    (window as AnalyticsTestWindow).gtag = send;
    trackBookingClick('Book', '/');
    expect(send).toHaveBeenCalledWith('event', 'click_booking', {
      button_text: 'Book',
      page_path: '/',
    });
  });

  it('loads Google Analytics only after analytic consent and stops it on withdrawal', () => {
    render(<CookieConsentManager />);
    expect(document.getElementById('fitkid-google-analytics')).toBeNull();

    act(() => {
      saveCookiePreferences({ functional: false, analytics: true, marketing: false });
    });
    expect(document.getElementById('fitkid-google-analytics')).toHaveAttribute(
      'src', 'https://www.googletagmanager.com/gtag/js?id=G-HLJPTQ5XLD'
    );

    document.cookie = '_ga=test-value; Path=/';
    act(() => {
      saveCookiePreferences({ functional: false, analytics: false, marketing: false });
    });
    expect(document.getElementById('fitkid-google-analytics')).toBeNull();
    expect(document.cookie).not.toContain('_ga=');
    const analyticsWindow = window as AnalyticsTestWindow;
    expect(analyticsWindow.gtag).toBeUndefined();
    trackBookingClick('Book', '/');
    expect(analyticsWindow.dataLayer).toEqual([]);

    act(() => {
      saveCookiePreferences({ functional: false, analytics: true, marketing: false });
    });
    expect(document.getElementById('fitkid-google-analytics')).not.toBeNull();
  });

  it('saves the detailed checkbox choices and allows changing them later', () => {
    vi.useFakeTimers();
    render(<CookieBanner currentLang="en" />);
    act(() => vi.advanceTimersByTime(1000));
    fireEvent.click(screen.getByRole('button', { name: 'Customize' }));
    fireEvent.click(screen.getByRole('checkbox', { name: 'Analytical cookies' }));
    fireEvent.click(screen.getByRole('button', { name: 'Save Preferences' }));
    expect(readCookiePreferences()).toEqual({
      functional: false,
      analytics: true,
      marketing: false,
    });

    act(() => window.dispatchEvent(new Event(OPEN_COOKIE_PREFERENCES_EVENT)));
    expect(screen.getByRole('checkbox', { name: 'Analytical cookies' })).toBeChecked();
    fireEvent.click(screen.getByRole('checkbox', { name: 'Analytical cookies' }));
    fireEvent.click(screen.getByRole('button', { name: 'Save Preferences' }));
    expect(window.localStorage.getItem('cookieConsent')).toBe('necessary');
  });
});
