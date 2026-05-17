import { parseAbsoluteUrl } from '@answerable-kit/core';
import { describe, expect, it } from 'vitest';
import { loadHtml } from '../parser.js';
import { f2OgDescription } from './f2-og-description.js';

const URL = parseAbsoluteUrl('https://example.com');
const inputFor = (html: string) => ({ url: URL, html, dom: loadHtml(html) });

describe('F2 — og:description', () => {
  it('passes when og:description is present', async () => {
    const html = '<html><head><meta property="og:description" content="What we do."></head></html>';
    const r = await f2OgDescription.run(inputFor(html));
    expect(r.status).toBe('pass');
  });

  it('fails when og:description is missing', async () => {
    const r = await f2OgDescription.run(inputFor('<html><head></head></html>'));
    expect(r.status).toBe('fail');
  });
});
