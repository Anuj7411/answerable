import { parseAbsoluteUrl } from '@answerable-kit/core';
import { describe, expect, it } from 'vitest';
import { loadHtml } from '../parser.js';
import { f7TwitterImage } from './f7-twitter-image.js';

const URL = parseAbsoluteUrl('https://example.com');
const inputFor = (html: string) => ({ url: URL, html, dom: loadHtml(html) });

describe('F7 — twitter:image (with og:image fallback)', () => {
  it('passes with an absolute twitter:image', async () => {
    const html =
      '<html><head><meta name="twitter:image" content="https://example.com/tw.png"></head></html>';
    const r = await f7TwitterImage.run(inputFor(html));
    expect(r.status).toBe('pass');
  });

  it('passes when twitter:image is missing but og:image is set (fallback)', async () => {
    const html =
      '<html><head><meta property="og:image" content="https://example.com/og.png"></head></html>';
    const r = await f7TwitterImage.run(inputFor(html));
    expect(r.status).toBe('pass');
    expect(r.evidence).toContain('og:image');
  });

  it('warns when twitter:image is relative', async () => {
    const html = '<html><head><meta name="twitter:image" content="/tw.png"></head></html>';
    const r = await f7TwitterImage.run(inputFor(html));
    expect(r.status).toBe('warn');
  });

  it('fails when both twitter:image and og:image are missing', async () => {
    const r = await f7TwitterImage.run(inputFor('<html><head></head></html>'));
    expect(r.status).toBe('fail');
  });
});
