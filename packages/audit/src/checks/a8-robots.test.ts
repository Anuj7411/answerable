import { parseAbsoluteUrl } from '@answerfox/core';
import { describe, expect, it } from 'vitest';
import { loadHtml } from '../parser.js';
import { a8Robots } from './a8-robots.js';

const URL = parseAbsoluteUrl('https://example.com');
const inputFor = (html: string) => ({ url: URL, html, dom: loadHtml(html) });

describe('A8 — robots meta', () => {
  it('passes when robots meta is absent (default index, follow)', async () => {
    const r = await a8Robots.run(inputFor('<html><head></head></html>'));
    expect(r.status).toBe('pass');
    expect(r.evidence).toContain('default');
  });

  it('passes on explicit index, follow', async () => {
    const html = '<html><head><meta name="robots" content="index, follow"></head></html>';
    const r = await a8Robots.run(inputFor(html));
    expect(r.status).toBe('pass');
  });

  it('warns on noindex (probably a staging leak)', async () => {
    const html = '<html><head><meta name="robots" content="noindex"></head></html>';
    const r = await a8Robots.run(inputFor(html));
    expect(r.status).toBe('warn');
    expect(r.fixRecommendation).toContain('noindex');
  });

  it('warns on nofollow', async () => {
    const html = '<html><head><meta name="robots" content="nofollow"></head></html>';
    const r = await a8Robots.run(inputFor(html));
    expect(r.status).toBe('warn');
  });

  it('fails on contradictory directives (index, noindex)', async () => {
    const html = '<html><head><meta name="robots" content="index, noindex"></head></html>';
    const r = await a8Robots.run(inputFor(html));
    expect(r.status).toBe('fail');
    expect(r.fixRecommendation).toContain('contradictory');
  });
});
