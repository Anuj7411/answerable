import { parseAbsoluteUrl } from '@answerable/core';
import { describe, expect, it } from 'vitest';
import { loadHtml } from '../parser.js';
import { f1OgTitle } from './f1-og-title.js';

const URL = parseAbsoluteUrl('https://example.com');
const inputFor = (html: string) => ({ url: URL, html, dom: loadHtml(html) });

describe('F1 — og:title', () => {
  it('passes when og:title is present', async () => {
    const html = '<html><head><meta property="og:title" content="Acme"></head></html>';
    const r = await f1OgTitle.run(inputFor(html));
    expect(r.status).toBe('pass');
    expect(r.evidence).toContain('Acme');
  });

  it('fails when og:title is missing', async () => {
    const r = await f1OgTitle.run(inputFor('<html><head></head></html>'));
    expect(r.status).toBe('fail');
  });

  it('fails when og:title content is empty', async () => {
    const html = '<html><head><meta property="og:title" content="   "></head></html>';
    const r = await f1OgTitle.run(inputFor(html));
    expect(r.status).toBe('fail');
  });
});
