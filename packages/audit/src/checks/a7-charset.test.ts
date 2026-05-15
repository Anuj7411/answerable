import { parseAbsoluteUrl } from '@answerable/core';
import { describe, expect, it } from 'vitest';
import { loadHtml } from '../parser.js';
import { a7Charset } from './a7-charset.js';

const URL = parseAbsoluteUrl('https://example.com');
const inputFor = (html: string) => ({ url: URL, html, dom: loadHtml(html) });

describe('A7 — charset', () => {
  it('passes on modern <meta charset="utf-8">', async () => {
    const html = '<html><head><meta charset="utf-8"></head></html>';
    const r = await a7Charset.run(inputFor(html));
    expect(r.status).toBe('pass');
  });

  it('passes on uppercase UTF-8', async () => {
    const html = '<html><head><meta charset="UTF-8"></head></html>';
    const r = await a7Charset.run(inputFor(html));
    expect(r.status).toBe('pass');
  });

  it('passes on legacy http-equiv form', async () => {
    const html =
      '<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head></html>';
    const r = await a7Charset.run(inputFor(html));
    expect(r.status).toBe('pass');
  });

  it('warns on non-UTF-8 charset', async () => {
    const html = '<html><head><meta charset="iso-8859-1"></head></html>';
    const r = await a7Charset.run(inputFor(html));
    expect(r.status).toBe('warn');
    expect(r.fixRecommendation).toContain('UTF-8');
  });

  it('fails when no charset is declared', async () => {
    const r = await a7Charset.run(inputFor('<html><head></head></html>'));
    expect(r.status).toBe('fail');
  });
});
