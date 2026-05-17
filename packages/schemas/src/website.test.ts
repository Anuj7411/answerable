import { InvalidUrlError, SchemaValidationError } from '@answerable-kit/core';
import { describe, expect, it } from 'vitest';
import { webSite } from './website.js';

describe('webSite', () => {
  it('emits a well-formed minimal WebSite JSON-LD', () => {
    const out = webSite({ name: 'Acme', url: 'https://acme.com' });
    expect(out).toEqual({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Acme',
      url: 'https://acme.com',
    });
  });

  it('includes description when supplied', () => {
    const out = webSite({
      name: 'Acme',
      url: 'https://acme.com',
      description: 'A site that does things.',
    });
    expect(out.description).toBe('A site that does things.');
  });

  it('emits a SearchAction when searchUrlTemplate is supplied', () => {
    const out = webSite({
      name: 'Acme',
      url: 'https://acme.com',
      searchUrlTemplate: 'https://acme.com/search?q={search_term_string}',
    });
    expect(out.potentialAction).toEqual({
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://acme.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    });
  });

  it('omits potentialAction when no template is supplied', () => {
    const out = webSite({ name: 'Acme', url: 'https://acme.com' });
    expect('potentialAction' in out).toBe(false);
  });

  it('throws SchemaValidationError when the template lacks {search_term_string}', () => {
    expect(() =>
      webSite({
        name: 'Acme',
        url: 'https://acme.com',
        searchUrlTemplate: 'https://acme.com/search?q=hardcoded',
      }),
    ).toThrow(SchemaValidationError);
  });

  it('throws InvalidUrlError on a malformed site URL', () => {
    expect(() => webSite({ name: 'Acme', url: 'not a url' })).toThrow(InvalidUrlError);
  });
});
