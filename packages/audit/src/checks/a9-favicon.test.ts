import { parseAbsoluteUrl } from '@answerable/core';
import { describe, expect, it } from 'vitest';
import { loadHtml } from '../parser.js';
import { a9Favicon } from './a9-favicon.js';

const URL = parseAbsoluteUrl('https://example.com');
const inputFor = (html: string) => ({ url: URL, html, dom: loadHtml(html) });

describe('A9 — favicon', () => {
  it('passes with multiple icon links', async () => {
    const html = `<html><head>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png">
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
      <link rel="icon" type="image/svg+xml" href="/icon.svg">
    </head></html>`;
    const r = await a9Favicon.run(inputFor(html));
    expect(r.status).toBe('pass');
    expect(r.evidence).toContain('3');
  });

  it('passes with shortcut icon legacy form', async () => {
    const html = `<html><head>
      <link rel="shortcut icon" href="/favicon.ico">
      <link rel="icon" href="/icon.svg">
    </head></html>`;
    const r = await a9Favicon.run(inputFor(html));
    expect(r.status).toBe('pass');
  });

  it('warns on a single icon link (recommend multi-size set)', async () => {
    const html = '<html><head><link rel="icon" href="/favicon.ico"></head></html>';
    const r = await a9Favicon.run(inputFor(html));
    expect(r.status).toBe('warn');
    expect(r.fixRecommendation).toContain('multiple');
  });

  it('fails when no icon links are declared', async () => {
    const r = await a9Favicon.run(inputFor('<html><head></head></html>'));
    expect(r.status).toBe('fail');
  });
});
