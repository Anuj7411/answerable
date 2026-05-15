import { parseAbsoluteUrl } from '@answerable/core';
import { describe, expect, it } from 'vitest';
import { loadHtml } from '../parser.js';
import { a6Viewport } from './a6-viewport.js';

const URL = parseAbsoluteUrl('https://example.com');
const inputFor = (html: string) => ({ url: URL, html, dom: loadHtml(html) });

describe('A6 — viewport meta', () => {
  it('passes with the canonical width + scale combination', async () => {
    const html =
      '<html><head><meta name="viewport" content="width=device-width, initial-scale=1"></head></html>';
    const r = await a6Viewport.run(inputFor(html));
    expect(r.status).toBe('pass');
  });

  it('passes with initial-scale=1.0 spelling', async () => {
    const html =
      '<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head></html>';
    const r = await a6Viewport.run(inputFor(html));
    expect(r.status).toBe('pass');
  });

  it('warns when width is missing', async () => {
    const html = '<html><head><meta name="viewport" content="initial-scale=1"></head></html>';
    const r = await a6Viewport.run(inputFor(html));
    expect(r.status).toBe('warn');
    expect(r.fixRecommendation).toContain('device-width');
  });

  it('warns when scale is missing', async () => {
    const html = '<html><head><meta name="viewport" content="width=device-width"></head></html>';
    const r = await a6Viewport.run(inputFor(html));
    expect(r.status).toBe('warn');
  });

  it('fails when the viewport meta is missing', async () => {
    const r = await a6Viewport.run(inputFor('<html><head></head></html>'));
    expect(r.status).toBe('fail');
    expect(r.fixRecommendation).toContain('viewport');
  });
});
