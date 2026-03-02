import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(__dirname, '..');

describe('SEO & Metadata', () => {
  it('layout.tsx has required metadata fields', () => {
    const content = fs.readFileSync(path.join(ROOT, 'app', 'layout.tsx'), 'utf-8');
    expect(content).toContain('title:');
    expect(content).toContain('description:');
    expect(content).toContain('openGraph');
    expect(content).toContain('twitter');
    expect(content).toContain('robots');
  });

  it('schema.tsx structured data exists', () => {
    expect(fs.existsSync(path.join(ROOT, 'app', 'schema.tsx'))).toBe(true);
    const content = fs.readFileSync(path.join(ROOT, 'app', 'schema.tsx'), 'utf-8');
    expect(content).toContain('schema.org');
  });

  it('layout uses semantic HTML lang attribute', () => {
    const content = fs.readFileSync(path.join(ROOT, 'app', 'layout.tsx'), 'utf-8');
    expect(content).toContain('lang="lt"');
  });

  it('canonical URL is set', () => {
    const content = fs.readFileSync(path.join(ROOT, 'app', 'layout.tsx'), 'utf-8');
    expect(content).toContain('canonical');
    expect(content).toContain('fitkid.lt');
  });

  it('Open Graph image is configured', () => {
    const content = fs.readFileSync(path.join(ROOT, 'app', 'layout.tsx'), 'utf-8');
    expect(content).toContain('og-image');
  });
});
