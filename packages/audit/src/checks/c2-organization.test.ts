import { parseAbsoluteUrl } from '@answerable-kit/core';
import { describe, expect, it } from 'vitest';
import { loadHtml } from '../parser.js';
import { c2Organization } from './c2-organization.js';

const URL = parseAbsoluteUrl('https://example.com');
const inputFor = (html: string) => ({ url: URL, html, dom: loadHtml(html) });

describe('C2 — Organization JSON-LD', () => {
  it('passes when a single Organization block is present', async () => {
    const html = `<html><head>
      <script type="application/ld+json">{"@context":"https://schema.org","@type":"Organization","name":"Acme"}</script>
    </head></html>`;
    const r = await c2Organization.run(inputFor(html));
    expect(r.status).toBe('pass');
  });

  it('passes when Organization is found inside an @graph array', async () => {
    const html = `<html><head>
      <script type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"WebSite"},{"@type":"Organization","name":"Acme"}]}</script>
    </head></html>`;
    const r = await c2Organization.run(inputFor(html));
    expect(r.status).toBe('pass');
  });

  it('passes when JSON-LD is an array containing Organization', async () => {
    const html = `<html><head>
      <script type="application/ld+json">[{"@type":"WebSite"},{"@type":"Organization","name":"Acme"}]</script>
    </head></html>`;
    const r = await c2Organization.run(inputFor(html));
    expect(r.status).toBe('pass');
  });

  it('fails when JSON-LD blocks exist but none is Organization', async () => {
    const html = `<html><head>
      <script type="application/ld+json">{"@type":"WebSite","name":"Acme"}</script>
    </head></html>`;
    const r = await c2Organization.run(inputFor(html));
    expect(r.status).toBe('fail');
  });

  it('fails when there are no JSON-LD blocks at all', async () => {
    const r = await c2Organization.run(inputFor('<html><head></head></html>'));
    expect(r.status).toBe('fail');
    expect(r.fixRecommendation).toContain('Organization');
  });

  it('ignores invalid-JSON blocks and still finds Organization elsewhere', async () => {
    const html = `<html><head>
      <script type="application/ld+json">{ broken }</script>
      <script type="application/ld+json">{"@type":"Organization","name":"Acme"}</script>
    </head></html>`;
    const r = await c2Organization.run(inputFor(html));
    expect(r.status).toBe('pass');
  });
});
