import { parseAbsoluteUrl } from '@answerable/core';
import { describe, expect, it } from 'vitest';
import { loadHtml } from '../parser.js';
import { f3OgImage } from './f3-og-image.js';

const URL = parseAbsoluteUrl('https://example.com');
const inputFor = (html: string) => ({ url: URL, html, dom: loadHtml(html) });

describe('F3 — og:image', () => {
  it('passes with an absolute https og:image', async () => {
    const html =
      '<html><head><meta property="og:image" content="https://example.com/og.png"></head></html>';
    const r = await f3OgImage.run(inputFor(html));
    expect(r.status).toBe('pass');
  });

  it('warns when og:image is a relative path', async () => {
    const html = '<html><head><meta property="og:image" content="/og.png"></head></html>';
    const r = await f3OgImage.run(inputFor(html));
    expect(r.status).toBe('warn');
    expect(r.fixRecommendation).toContain('absolute');
  });

  it('fails when og:image is missing', async () => {
    const r = await f3OgImage.run(inputFor('<html><head></head></html>'));
    expect(r.status).toBe('fail');
    expect(r.fixRecommendation).toContain('1200');
  });
});
