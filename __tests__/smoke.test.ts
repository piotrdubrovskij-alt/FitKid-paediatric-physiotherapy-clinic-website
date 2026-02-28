import { describe, it, expect } from 'vitest';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(__dirname, '..');

function runCommand(cmd: string, timeout = 120_000): { exitCode: number; output: string } {
  try {
    const output = execSync(cmd, {
      cwd: ROOT,
      encoding: 'utf-8',
      timeout,
    });
    return { exitCode: 0, output: output || '' };
  } catch (error: unknown) {
    const execError = error as { status?: number; stdout?: string; stderr?: string };
    return {
      exitCode: execError.status ?? 1,
      output: (execError.stdout || '') + (execError.stderr || ''),
    };
  }
}

describe('Smoke Tests', () => {
  it('TypeScript compiles without errors', () => {
    const { exitCode, output } = runCommand('npx tsc --noEmit 2>&1');
    if (exitCode !== 0) {
      const errorLines = output.split('\n').filter(l => l.includes('error TS'));
      const uniqueFiles = [...new Set(errorLines.map(l => l.split('(')[0]))];
      expect.fail(
        `TypeScript found ${errorLines.length} error(s) in ${uniqueFiles.length} file(s):\n` +
        uniqueFiles.map(f => `  - ${f}`).join('\n') + '\n' +
        'Run "npx tsc --noEmit" for details.'
      );
    }
  }, 120_000);

  it('ESLint passes without errors', () => {
    const { exitCode, output } = runCommand('npx eslint . 2>&1');
    if (exitCode !== 0) {
      const summary = output.split('\n').filter(l => l.includes('problem')).join('\n');
      expect.fail(
        `ESLint found issues:\n${summary}\n` +
        'Run "npx eslint ." for details.'
      );
    }
  }, 120_000);

  it('Next.js build completes successfully', () => {
    const { exitCode, output } = runCommand('npx next build 2>&1', 300_000);
    if (exitCode !== 0) {
      // Check if failure is due to network issues (Google Fonts, etc.)
      const isNetworkError = output.includes('establishing a connection') ||
        output.includes('Failed to fetch') ||
        output.includes('ENOTFOUND') ||
        output.includes('TLS-related');

      if (isNetworkError) {
        console.warn('Build failed due to network issues (e.g., Google Fonts). Skipping in offline environment.');
        return; // pass — not a code issue
      }

      expect.fail(
        'Next.js build failed. Run "npx next build" for details.\n' +
        output.slice(0, 500)
      );
    }
  }, 300_000);

  it('all page directories have a page.tsx file', () => {
    const appDir = path.join(ROOT, 'app');
    // Directories that contain sub-routes instead of a page.tsx
    const layoutDirs = ['specialists', 'api'];

    const dirs = fs.readdirSync(appDir, { withFileTypes: true })
      .filter(d => d.isDirectory() && !d.name.startsWith('_') && !layoutDirs.includes(d.name));

    for (const dir of dirs) {
      const pagePath = path.join(appDir, dir.name, 'page.tsx');
      expect(fs.existsSync(pagePath), `Missing page.tsx in app/${dir.name}`).toBe(true);
    }
  });

  it('root page.tsx exists', () => {
    expect(fs.existsSync(path.join(ROOT, 'app', 'page.tsx'))).toBe(true);
  });

  it('root layout.tsx exists', () => {
    expect(fs.existsSync(path.join(ROOT, 'app', 'layout.tsx'))).toBe(true);
  });
});
