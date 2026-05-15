import { InvalidUrlError, SchemaValidationError } from '@answerable/core';
import { describe, expect, it } from 'vitest';
import { defineSeo } from './define-seo.js';

const MINIMAL = {
  title: 'Acme',
  description: 'The friendliest widget shop on the internet.',
  url: 'https://acme.com',
} as const;

describe('defineSeo — top-level fields', () => {
  it('emits title, description, metadataBase, and canonical', () => {
    const md = defineSeo(MINIMAL);
    expect(md.title).toBe('Acme');
    expect(md.description).toBe('The friendliest widget shop on the internet.');
    expect((md.metadataBase as URL).toString()).toBe('https://acme.com/');
    expect(md.alternates?.canonical).toBe('https://acme.com');
  });

  it('preserves a template title verbatim and propagates default to OG', () => {
    const md = defineSeo({
      ...MINIMAL,
      title: { default: 'Acme', template: '%s — Acme' },
    });
    expect(md.title).toEqual({ default: 'Acme', template: '%s — Acme' });
    expect((md.openGraph as { title: string }).title).toBe('Acme');
  });
});

describe('defineSeo — OpenGraph defaults and fallbacks', () => {
  it('defaults type to "website"', () => {
    const md = defineSeo(MINIMAL);
    expect((md.openGraph as { type: string }).type).toBe('website');
  });

  it('inherits title and description from the top level when OG omits them', () => {
    const md = defineSeo({ ...MINIMAL, title: 'Acme' });
    const og = md.openGraph as { title: string; description: string };
    expect(og.title).toBe('Acme');
    expect(og.description).toBe(MINIMAL.description);
  });

  it('lets explicit OG fields override top-level fallbacks', () => {
    const md = defineSeo({
      ...MINIMAL,
      openGraph: { title: 'OG-specific title', description: 'OG-specific desc' },
    });
    const og = md.openGraph as { title: string; description: string };
    expect(og.title).toBe('OG-specific title');
    expect(og.description).toBe('OG-specific desc');
  });

  it('promotes top-level siteName and locale to OG when not overridden', () => {
    const md = defineSeo({ ...MINIMAL, siteName: 'Acme', locale: 'en_US' });
    const og = md.openGraph as { siteName: string; locale: string };
    expect(og.siteName).toBe('Acme');
    expect(og.locale).toBe('en_US');
  });

  it('uses the top-level image as the single OG image when supplied', () => {
    const md = defineSeo({ ...MINIMAL, image: 'https://acme.com/og.png' });
    const og = md.openGraph as { images: Array<{ url: string }> };
    expect(og.images).toEqual([{ url: 'https://acme.com/og.png' }]);
  });

  it('lets explicit OG images override the single top-level image', () => {
    const md = defineSeo({
      ...MINIMAL,
      image: 'https://acme.com/og.png',
      openGraph: { images: ['https://acme.com/a.png', 'https://acme.com/b.png'] },
    });
    const og = md.openGraph as { images: Array<{ url: string }> };
    expect(og.images).toEqual([
      { url: 'https://acme.com/a.png' },
      { url: 'https://acme.com/b.png' },
    ]);
  });

  it('omits images when neither top-level nor OG supplies any', () => {
    const md = defineSeo(MINIMAL);
    expect('images' in (md.openGraph ?? {})).toBe(false);
  });
});

describe('defineSeo — Twitter defaults and fallbacks', () => {
  it('defaults card to summary_large_image', () => {
    const md = defineSeo(MINIMAL);
    expect((md.twitter as { card: string }).card).toBe('summary_large_image');
  });

  it('inherits title/description from OG when not set on Twitter', () => {
    const md = defineSeo({
      ...MINIMAL,
      openGraph: { title: 'OG title', description: 'OG desc' },
    });
    const tw = md.twitter as { title: string; description: string };
    expect(tw.title).toBe('OG title');
    expect(tw.description).toBe('OG desc');
  });

  it('inherits images from OG (or the top-level fallback)', () => {
    const md = defineSeo({ ...MINIMAL, image: 'https://acme.com/og.png' });
    const tw = md.twitter as { images: string[] };
    expect(tw.images).toEqual(['https://acme.com/og.png']);
  });

  it('lets explicit Twitter images override OG fallback', () => {
    const md = defineSeo({
      ...MINIMAL,
      image: 'https://acme.com/og.png',
      twitter: { images: ['https://acme.com/twitter.png'] },
    });
    const tw = md.twitter as { images: string[] };
    expect(tw.images).toEqual(['https://acme.com/twitter.png']);
  });

  it('includes the Twitter handle when supplied', () => {
    const md = defineSeo({ ...MINIMAL, twitter: { site: '@acme' } });
    expect((md.twitter as { site: string }).site).toBe('@acme');
  });
});

describe('defineSeo — robots', () => {
  it('omits robots when not supplied', () => {
    const md = defineSeo(MINIMAL);
    expect(md.robots).toBeUndefined();
  });

  it('emits simple top-level index/follow when supplied', () => {
    const md = defineSeo({ ...MINIMAL, robots: { index: true, follow: false } });
    expect(md.robots).toEqual({ index: true, follow: false });
  });

  it('passes through googleBot advanced directives', () => {
    const md = defineSeo({
      ...MINIMAL,
      robots: {
        index: true,
        follow: true,
        googleBot: { 'max-snippet': -1, 'max-image-preview': 'large' },
      },
    });
    expect(md.robots).toEqual({
      index: true,
      follow: true,
      googleBot: { 'max-snippet': -1, 'max-image-preview': 'large' },
    });
  });

  it('rejects googleBot.index=true when top-level index=false', () => {
    try {
      defineSeo({
        ...MINIMAL,
        robots: { index: false, googleBot: { index: true } },
      });
      expect.fail('should have thrown');
    } catch (e) {
      expect(e).toBeInstanceOf(SchemaValidationError);
      expect((e as SchemaValidationError).issues[0]).toContain('googleBot.index');
    }
  });

  it('rejects googleBot.follow=true when top-level follow=false', () => {
    expect(() =>
      defineSeo({
        ...MINIMAL,
        robots: { follow: false, googleBot: { follow: true } },
      }),
    ).toThrow(SchemaValidationError);
  });

  it('allows googleBot to be stricter than top-level', () => {
    expect(() =>
      defineSeo({
        ...MINIMAL,
        robots: { index: true, follow: true, googleBot: { index: false, follow: false } },
      }),
    ).not.toThrow();
  });
});

describe('defineSeo — validation errors', () => {
  it('throws SchemaValidationError on empty title string', () => {
    expect(() => defineSeo({ ...MINIMAL, title: '   ' })).toThrow(SchemaValidationError);
  });

  it('throws SchemaValidationError on empty title.default', () => {
    expect(() => defineSeo({ ...MINIMAL, title: { default: '', template: '%s — Acme' } })).toThrow(
      SchemaValidationError,
    );
  });

  it('throws SchemaValidationError when template is missing %s', () => {
    try {
      defineSeo({ ...MINIMAL, title: { default: 'Acme', template: 'Acme — site' } });
      expect.fail('should have thrown');
    } catch (e) {
      expect(e).toBeInstanceOf(SchemaValidationError);
      expect((e as SchemaValidationError).issues[0]).toContain('%s');
    }
  });

  it('throws SchemaValidationError on empty description', () => {
    expect(() => defineSeo({ ...MINIMAL, description: '   ' })).toThrow(SchemaValidationError);
  });

  it('batches title + description + robots issues into one error', () => {
    try {
      defineSeo({
        title: '',
        description: '',
        url: 'https://acme.com',
        robots: { index: false, googleBot: { index: true } },
      });
      expect.fail('should have thrown');
    } catch (e) {
      expect(e).toBeInstanceOf(SchemaValidationError);
      const issues = (e as SchemaValidationError).issues;
      expect(issues.length).toBe(3);
      expect(issues.some((i) => i.includes('title'))).toBe(true);
      expect(issues.some((i) => i.includes('description'))).toBe(true);
      expect(issues.some((i) => i.includes('googleBot'))).toBe(true);
    }
  });

  it('throws InvalidUrlError on a bad canonical URL', () => {
    expect(() => defineSeo({ ...MINIMAL, url: 'not a url' })).toThrow(InvalidUrlError);
  });

  it('throws InvalidUrlError on a bad top-level image URL', () => {
    expect(() => defineSeo({ ...MINIMAL, image: 'not a url' })).toThrow(InvalidUrlError);
  });

  it('throws InvalidUrlError on a bad explicit OG image URL', () => {
    expect(() =>
      defineSeo({
        ...MINIMAL,
        openGraph: { images: ['https://ok.com/a.png', 'not a url'] },
      }),
    ).toThrow(InvalidUrlError);
  });

  it('throws InvalidUrlError on a bad explicit Twitter image URL', () => {
    expect(() =>
      defineSeo({
        ...MINIMAL,
        twitter: { images: ['not a url'] },
      }),
    ).toThrow(InvalidUrlError);
  });
});
