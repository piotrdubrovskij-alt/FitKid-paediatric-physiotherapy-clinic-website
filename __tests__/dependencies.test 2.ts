import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ROOT = path.resolve(__dirname, '..');

describe('Dependencies & Versions', () => {
  const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf-8'));

  it('package.json exists and is valid JSON', () => {
    expect(pkg).toBeDefined();
    expect(pkg.name).toBe('fitkid-website');
  });

  it('required dependencies are declared', () => {
    const requiredDeps = ['next', 'react', 'react-dom', 'typescript'];
    const allDeps = { ...pkg.dependencies, ...pkg.devDependencies };
    for (const dep of requiredDeps) {
      expect(allDeps[dep], `Missing dependency: ${dep}`).toBeDefined();
    }
  });

  it('node_modules directory exists', () => {
    expect(fs.existsSync(path.join(ROOT, 'node_modules'))).toBe(true);
  });

  it('critical packages are installed and resolvable', () => {
    const criticalPackages = ['next', 'react', 'react-dom', 'typescript', 'tailwindcss'];
    for (const pkg of criticalPackages) {
      const pkgPath = path.join(ROOT, 'node_modules', pkg, 'package.json');
      expect(fs.existsSync(pkgPath), `Package not installed: ${pkg}`).toBe(true);
    }
  });

  it('installed Next.js version matches package.json', () => {
    const installedPkg = JSON.parse(
      fs.readFileSync(path.join(ROOT, 'node_modules', 'next', 'package.json'), 'utf-8')
    );
    expect(installedPkg.version).toMatch(/^16\./);
  });

  it('installed React version is 19.x', () => {
    const installedPkg = JSON.parse(
      fs.readFileSync(path.join(ROOT, 'node_modules', 'react', 'package.json'), 'utf-8')
    );
    expect(installedPkg.version).toMatch(/^19\./);
  });

  it('installed TypeScript version is 5.x', () => {
    const installedPkg = JSON.parse(
      fs.readFileSync(path.join(ROOT, 'node_modules', 'typescript', 'package.json'), 'utf-8')
    );
    expect(installedPkg.version).toMatch(/^5\./);
  });

  it('Node.js version meets minimum requirement (>=18)', () => {
    const nodeVersion = process.version;
    const major = parseInt(nodeVersion.slice(1).split('.')[0], 10);
    expect(major).toBeGreaterThanOrEqual(18);
  });

  it('package-lock.json exists', () => {
    expect(fs.existsSync(path.join(ROOT, 'package-lock.json'))).toBe(true);
  });

  it('no duplicate react versions in node_modules', () => {
    const rootReactPath = path.join(ROOT, 'node_modules', 'react', 'package.json');
    expect(fs.existsSync(rootReactPath)).toBe(true);
    const rootReact = JSON.parse(fs.readFileSync(rootReactPath, 'utf-8'));
    expect(rootReact.version).toMatch(/^19\./);
  });
});
