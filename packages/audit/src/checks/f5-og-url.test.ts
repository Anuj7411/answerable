import { parseAbsoluteUrl } from '@answerable/core';
import { describe, expect, it } from 'vitest';
import { loadHtml } from '../parser.js';
import { f5OgUrl } from './f5-og-url.js';

const URL = parseAbsoluteUrl('https://example.com');
const inputFor = (html: string) => ({ url: URL, html, dom: loadHtml(html) });

describe('F5 — og:url', () => {
  it('passes with an absolute og:url', async () => {
    const html =
      '<html><head><meta property="og:url" content="https://example.com/page"></head></html>';
    const r = await f5OgUrl.run(inputFor(html));
    expect(r.status).toBe('pass');
  });

  it('warns when og:url is relative', async () => {
    const html = '<html><head><meta property="og:url" content="/page"></head></html>';
    const r = await f5OgUrl.run(inputFor(html));
    expect(r.status).toBe('warn');
  });

  it('fails when og:url is missing', async () => {
    const r = await f5OgUrl.run(inputFor('<html><head></head></html>'));
    expect(r.status).toBe('fail');
  });
});
