import { parseAbsoluteUrl } from '@answerable/core';
import { describe, expect, it } from 'vitest';
import { loadHtml } from '../parser.js';
import { a10AppleTouchIcon } from './a10-apple-touch.js';

const URL = parseAbsoluteUrl('https://example.com');
const inputFor = (html: string) => ({ url: URL, html, dom: loadHtml(html) });

describe('A10 — apple touch icon', () => {
  it('passes when an apple-touch-icon link is present', async () => {
    const html =
      '<html><head><link rel="apple-touch-icon" sizes="180x180" href="/apple.png"></head></html>';
    const r = await a10AppleTouchIcon.run(inputFor(html));
    expect(r.status).toBe('pass');
  });

  it('passes on the precomposed variant', async () => {
    const html =
      '<html><head><link rel="apple-touch-icon-precomposed" href="/apple.png"></head></html>';
    const r = await a10AppleTouchIcon.run(inputFor(html));
    expect(r.status).toBe('pass');
  });

  it('fails when no apple-touch-icon is declared', async () => {
    const r = await a10AppleTouchIcon.run(inputFor('<html><head></head></html>'));
    expect(r.status).toBe('fail');
    expect(r.fixRecommendation).toContain('apple-touch-icon');
  });
});
