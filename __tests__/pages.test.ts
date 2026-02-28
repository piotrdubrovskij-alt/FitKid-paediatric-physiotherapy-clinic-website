import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(__dirname, '..');
const APP_DIR = path.join(ROOT, 'app');

describe('Pages Structure', () => {
  const expectedPages = [
    'kainos',
    'kontaktai',
    'registracija',
    'privacy',
    'cookies',
    'vaiku-kineziterapija',
    'vaiku-masazas',
    'kudikiu-kineziterapija',
    'kudikiu-masazai',
    'kudikiu-plukdymas',
    'kudikiu-hipertonusas',
    'kudikiu-hipotonusas',
    'motorines-raidos-velavimas',
    'vojta-terapija',
  ];

  for (const page of expectedPages) {
    it(`page /${page} has page.tsx`, () => {
      const pagePath = path.join(APP_DIR, page, 'page.tsx');
      expect(fs.existsSync(pagePath), `Missing: app/${page}/page.tsx`).toBe(true);
    });
  }

  it('specialist pages exist', () => {
    const specialists = ['agne-juodyte', 'ksenija-persijanova', 'ramune-nemeikaite'];
    for (const spec of specialists) {
      const pagePath = path.join(APP_DIR, 'specialists', spec, 'page.tsx');
      expect(fs.existsSync(pagePath), `Missing specialist page: ${spec}`).toBe(true);
    }
  });

  it('API routes exist', () => {
    expect(fs.existsSync(path.join(APP_DIR, 'api', 'contact', 'route.ts'))).toBe(true);
    expect(fs.existsSync(path.join(APP_DIR, 'api', 'reviews', 'route.ts'))).toBe(true);
  });

  it('all page.tsx files use valid exports', () => {
    const pageDirs = fs.readdirSync(APP_DIR, { withFileTypes: true })
      .filter(d => d.isDirectory() && !d.name.startsWith('_') && d.name !== 'api');

    for (const dir of pageDirs) {
      const pagePath = path.join(APP_DIR, dir.name, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        const content = fs.readFileSync(pagePath, 'utf-8');
        // Each page must have a default export
        expect(
          content.includes('export default') || content.includes('export { default'),
          `app/${dir.name}/page.tsx missing default export`
        ).toBe(true);
      }
    }
  });
});

describe('Components Structure', () => {
  const COMPONENTS_DIR = path.join(ROOT, 'components');

  const requiredComponents = [
    'Header.tsx',
    'Footer.tsx',
    'VideoHero.tsx',
    'Services.tsx',
    'Treatments.tsx',
    'WhyUs.tsx',
    'Consultation.tsx',
    'Specialists.tsx',
    'Testimonials.tsx',
    'CookieBanner.tsx',
    'FloatingActionButtons.tsx',
  ];

  for (const component of requiredComponents) {
    it(`component ${component} exists`, () => {
      expect(
        fs.existsSync(path.join(COMPONENTS_DIR, component)),
        `Missing component: ${component}`
      ).toBe(true);
    });
  }

  it('all components have default exports', () => {
    for (const component of requiredComponents) {
      const content = fs.readFileSync(path.join(COMPONENTS_DIR, component), 'utf-8');
      expect(
        content.includes('export default'),
        `${component} missing default export`
      ).toBe(true);
    }
  });
});
