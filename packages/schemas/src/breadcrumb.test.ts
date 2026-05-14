import { InvalidUrlError, SchemaValidationError } from '@answerable/core';
import { describe, expect, it } from 'vitest';
import { breadcrumb } from './breadcrumb.js';

describe('breadcrumb', () => {
  it('emits a single-item BreadcrumbList with position 1', () => {
    const out = breadcrumb({
      items: [{ name: 'Home', url: 'https://example.com' }],
    });
    expect(out).toEqual({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://example.com',
        },
      ],
    });
  });

  it('auto-numbers positions starting at 1 in input order', () => {
    const out = breadcrumb({
      items: [
        { name: 'Home', url: 'https://example.com' },
        { name: 'Blog', url: 'https://example.com/blog' },
        { name: 'Post', url: 'https://example.com/blog/post' },
      ],
    });
    const items = out.itemListElement as ReadonlyArray<{ position: number; name: string }>;
    expect(items.map((i) => i.position)).toEqual([1, 2, 3]);
    expect(items.map((i) => i.name)).toEqual(['Home', 'Blog', 'Post']);
  });

  it('throws SchemaValidationError on an empty items array', () => {
    expect(() => breadcrumb({ items: [] })).toThrow(SchemaValidationError);
  });

  it('throws SchemaValidationError with every blank-name entry enumerated', () => {
    try {
      breadcrumb({
        items: [
          { name: 'Home', url: 'https://example.com' },
          { name: '   ', url: 'https://example.com/blog' },
          { name: '', url: 'https://example.com/contact' },
        ],
      });
      expect.fail('should have thrown');
    } catch (e) {
      expect(e).toBeInstanceOf(SchemaValidationError);
      const issues = (e as SchemaValidationError).issues;
      expect(issues).toHaveLength(2);
      expect(issues[0]).toContain('items[1].name');
      expect(issues[1]).toContain('items[2].name');
    }
  });

  it('throws InvalidUrlError when any item URL fails validation', () => {
    expect(() =>
      breadcrumb({
        items: [
          { name: 'Home', url: 'https://example.com' },
          { name: 'Bad', url: 'not a url' },
        ],
      }),
    ).toThrow(InvalidUrlError);
  });

  it('reports empty-name issues before checking URLs', () => {
    // Both problems present; the SchemaValidationError fires first because
    // it can enumerate every blank name at once, while InvalidUrlError
    // would only surface the first bad URL.
    try {
      breadcrumb({ items: [{ name: '', url: 'not a url' }] });
      expect.fail('should have thrown');
    } catch (e) {
      expect(e).toBeInstanceOf(SchemaValidationError);
    }
  });
});
