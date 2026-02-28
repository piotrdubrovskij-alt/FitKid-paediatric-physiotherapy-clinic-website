import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(__dirname, '..');

describe('Configuration Validation', () => {
  it('tsconfig.json exists and has correct settings', () => {
    const tsconfig = JSON.parse(fs.readFileSync(path.join(ROOT, 'tsconfig.json'), 'utf-8'));
    expect(tsconfig.compilerOptions.strict).toBe(true);
    expect(tsconfig.compilerOptions.jsx).toBe('react-jsx');
    expect(tsconfig.compilerOptions.paths['@/*']).toEqual(['./*']);
  });

  it('next.config.ts exists', () => {
    expect(fs.existsSync(path.join(ROOT, 'next.config.ts'))).toBe(true);
  });

  it('tailwind.config.ts exists and has FitKid brand colors', () => {
    const content = fs.readFileSync(path.join(ROOT, 'tailwind.config.ts'), 'utf-8');
    expect(content).toContain('#54B6FC');   // fitkid-blue
    expect(content).toContain('#fb7825');   // fitkid-orange
    expect(content).toContain('#E8F5FE');   // fitkid-light-blue
  });

  it('tailwind.config.ts scans all source directories', () => {
    const content = fs.readFileSync(path.join(ROOT, 'tailwind.config.ts'), 'utf-8');
    expect(content).toContain('./components/**');
    expect(content).toContain('./app/**');
  });

  it('globals.css exists and imports Tailwind', () => {
    const css = fs.readFileSync(path.join(ROOT, 'app', 'globals.css'), 'utf-8');
    expect(css).toContain('tailwindcss');
  });

  it('.gitignore exists and ignores node_modules and .next', () => {
    const gitignore = fs.readFileSync(path.join(ROOT, '.gitignore'), 'utf-8');
    expect(gitignore).toContain('node_modules');
    expect(gitignore).toContain('.next');
  });

  it('no .env file is committed (security check)', () => {
    // .env.local and .env should NOT be in the repo
    expect(fs.existsSync(path.join(ROOT, '.env'))).toBe(false);
    expect(fs.existsSync(path.join(ROOT, '.env.local'))).toBe(false);
  });

  it('favicon.ico exists', () => {
    expect(fs.existsSync(path.join(ROOT, 'app', 'favicon.ico'))).toBe(true);
  });

  it('public directory has required assets', () => {
    expect(fs.existsSync(path.join(ROOT, 'public', 'fitkid-logo.png'))).toBe(true);
  });

  it('all required npm scripts are defined', () => {
    const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf-8'));
    const requiredScripts = ['dev', 'build', 'start', 'lint', 'test'];
    for (const script of requiredScripts) {
      expect(pkg.scripts[script], `Missing script: ${script}`).toBeDefined();
    }
  });
});
