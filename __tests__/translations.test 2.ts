import { describe, it, expect } from 'vitest';
import { translations } from '@/lib/i18n/translations';

describe('Translations (i18n)', () => {
  const languages = Object.keys(translations) as Array<keyof typeof translations>;

  it('both Lithuanian and English translations exist', () => {
    expect(translations.lt).toBeDefined();
    expect(translations.en).toBeDefined();
  });

  it('all navigation keys are present in both languages', () => {
    const navKeys = ['registration', 'services', 'treatments', 'prices', 'specialists', 'contacts'];
    for (const lang of languages) {
      for (const key of navKeys) {
        expect(
          (translations[lang].nav as Record<string, string>)[key],
          `Missing nav.${key} in ${lang}`
        ).toBeDefined();
      }
    }
  });

  it('hero section is fully translated', () => {
    for (const lang of languages) {
      expect(translations[lang].hero.title, `Missing hero.title in ${lang}`).toBeTruthy();
      expect(translations[lang].hero.subtitle, `Missing hero.subtitle in ${lang}`).toBeTruthy();
      expect(translations[lang].hero.cta, `Missing hero.cta in ${lang}`).toBeTruthy();
    }
  });

  it('services section has items in both languages', () => {
    for (const lang of languages) {
      expect(translations[lang].services.items.length).toBeGreaterThan(0);
      expect(translations[lang].services.title).toBeTruthy();
    }
  });

  it('services items have required fields', () => {
    for (const lang of languages) {
      for (const item of translations[lang].services.items) {
        expect(item.name, `Service item missing name in ${lang}`).toBeTruthy();
        expect(item.slug, `Service item missing slug in ${lang}`).toBeTruthy();
        expect(item.ageGroup, `Service item missing ageGroup in ${lang}`).toBeTruthy();
      }
    }
  });

  it('treatments section has items in both languages', () => {
    for (const lang of languages) {
      expect(translations[lang].treatments.items.length).toBeGreaterThan(0);
    }
  });

  it('both languages have the same number of service items', () => {
    expect(translations.lt.services.items.length).toBe(translations.en.services.items.length);
  });

  it('both languages have the same number of treatment items', () => {
    expect(translations.lt.treatments.items.length).toBe(translations.en.treatments.items.length);
  });

  it('no empty translation strings in navigation', () => {
    for (const lang of languages) {
      for (const [key, value] of Object.entries(translations[lang].nav)) {
        expect(value.trim().length, `Empty nav.${key} in ${lang}`).toBeGreaterThan(0);
      }
    }
  });
});
