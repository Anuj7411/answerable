import { InvalidUrlError } from '@answerable-kit/core';
import { describe, expect, it } from 'vitest';
import { organization } from './organization.js';

describe('organization', () => {
  it('emits a well-formed minimal Organization JSON-LD', () => {
    const out = organization({ name: 'Acme', url: 'https://acme.com' });
    expect(out).toEqual({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Acme',
      url: 'https://acme.com',
    });
  });

  it('includes optional logo, description, and sameAs when supplied', () => {
    const out = organization({
      name: 'Acme',
      url: 'https://acme.com',
      logo: 'https://acme.com/logo.png',
      description: 'We make things.',
      sameAs: ['https://twitter.com/acme', 'https://github.com/acme'],
    });
    expect(out.logo).toBe('https://acme.com/logo.png');
    expect(out.description).toBe('We make things.');
    expect(out.sameAs).toEqual(['https://twitter.com/acme', 'https://github.com/acme']);
  });

  it('omits sameAs entirely when the array is empty', () => {
    const out = organization({ name: 'Acme', url: 'https://acme.com', sameAs: [] });
    expect('sameAs' in out).toBe(false);
  });

  it('builds a ContactPoint with a sensible default contactType', () => {
    const out = organization({
      name: 'Acme',
      url: 'https://acme.com',
      contactPoint: { email: 'hello@acme.com' },
    });
    expect(out.contactPoint).toEqual({
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'hello@acme.com',
    });
  });

  it('preserves a user-supplied contactType', () => {
    const out = organization({
      name: 'Acme',
      url: 'https://acme.com',
      contactPoint: { telephone: '+1-555-0100', contactType: 'sales' },
    });
    expect(out.contactPoint).toEqual({
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: '+1-555-0100',
    });
  });

  it('throws InvalidUrlError on a non-http url', () => {
    expect(() => organization({ name: 'Acme', url: 'ftp://acme.com' })).toThrow(InvalidUrlError);
  });

  it('throws InvalidUrlError on a malformed logo URL', () => {
    expect(() =>
      organization({ name: 'Acme', url: 'https://acme.com', logo: 'not-a-url' }),
    ).toThrow(InvalidUrlError);
  });

  it('throws InvalidUrlError on a malformed sameAs entry', () => {
    expect(() =>
      organization({
        name: 'Acme',
        url: 'https://acme.com',
        sameAs: ['https://twitter.com/acme', 'not a url'],
      }),
    ).toThrow(InvalidUrlError);
  });
});
