import { describe, expect, it } from 'vitest';
import { InvalidUrlError } from './errors.js';
import {
  AbsoluteUrlSchema,
  URLStringSchema,
  parseAbsoluteUrl,
  tryParseAbsoluteUrl,
} from './url.js';

describe('URLStringSchema', () => {
  it('accepts well-formed URLs of any scheme', () => {
    for (const url of [
      'https://example.com',
      'http://example.com',
      'ftp://example.com',
      'mailto:hello@example.com',
    ]) {
      expect(() => URLStringSchema.parse(url)).not.toThrow();
    }
  });

  it('rejects malformed strings', () => {
    expect(() => URLStringSchema.parse('not a url')).toThrow();
    expect(() => URLStringSchema.parse('')).toThrow();
  });
});

describe('AbsoluteUrlSchema', () => {
  it('accepts http(s) URLs', () => {
    expect(() => AbsoluteUrlSchema.parse('https://example.com')).not.toThrow();
    expect(() => AbsoluteUrlSchema.parse('http://example.com/path?q=1')).not.toThrow();
  });

  it('rejects non-http schemes', () => {
    expect(() => AbsoluteUrlSchema.parse('ftp://example.com')).toThrow();
    expect(() => AbsoluteUrlSchema.parse('mailto:a@b.com')).toThrow();
  });
});

describe('parseAbsoluteUrl', () => {
  it('returns the branded value on success', () => {
    const parsed = parseAbsoluteUrl('https://example.com');
    expect(parsed).toBe('https://example.com');
  });

  it('throws InvalidUrlError with the offending input on failure', () => {
    try {
      parseAbsoluteUrl('not a url');
      expect.fail('should have thrown InvalidUrlError');
    } catch (e) {
      expect(e).toBeInstanceOf(InvalidUrlError);
      expect((e as InvalidUrlError).input).toBe('not a url');
    }
  });

  it('preserves the zod error on cause', () => {
    try {
      parseAbsoluteUrl('not a url');
      expect.fail('should have thrown');
    } catch (e) {
      expect(e).toBeInstanceOf(InvalidUrlError);
      expect((e as InvalidUrlError).cause).toBeDefined();
    }
  });
});

describe('tryParseAbsoluteUrl', () => {
  it('returns the parsed value on success', () => {
    expect(tryParseAbsoluteUrl('https://example.com')).toBe('https://example.com');
  });

  it('returns null on failure', () => {
    expect(tryParseAbsoluteUrl('nope')).toBeNull();
  });
});
