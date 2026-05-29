import { parseAbsoluteUrl } from '@answerfox/core';
import { describe, expect, it } from 'vitest';
import { loadHtml } from '../parser.js';
import { f6TwitterCard } from './f6-twitter-card.js';

const URL = parseAbsoluteUrl('https://example.com');
const inputFor = (html: string) => ({ url: URL, html, dom: loadHtml(html) });

describe('F6 — twitter:card', () => {
  it('passes on summary_large_image', async () => {
    const html =
      '<html><head><meta name="twitter:card" content="summary_large_image"></head></html>';
    const r = await f6TwitterCard.run(inputFor(html));
    expect(r.status).toBe('pass');
  });

  it('passes on summary', async () => {
    const html = '<html><head><meta name="twitter:card" content="summary"></head></html>';
    const r = await f6TwitterCard.run(inputFor(html));
    expect(r.status).toBe('pass');
  });

  it('warns on an unrecognized card type', async () => {
    const html = '<html><head><meta name="twitter:card" content="custom_card"></head></html>';
    const r = await f6TwitterCard.run(inputFor(html));
    expect(r.status).toBe('warn');
    expect(r.fixRecommendation).toContain('summary');
  });

  it('fails when twitter:card is missing', async () => {
    const r = await f6TwitterCard.run(inputFor('<html><head></head></html>'));
    expect(r.status).toBe('fail');
  });
});
