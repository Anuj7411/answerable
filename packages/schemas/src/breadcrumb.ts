import { SchemaValidationError, parseAbsoluteUrl } from '@answerable/core';
import type { BreadcrumbList } from 'schema-dts';
import type { Schema } from './_internal.js';

export interface BreadcrumbItemInput {
  readonly name: string;
  /** Absolute http(s) URL the breadcrumb item links to. */
  readonly url: string;
}

export interface BreadcrumbInput {
  readonly items: readonly BreadcrumbItemInput[];
}

/**
 * Generate a fully-typed JSON-LD `BreadcrumbList` object with positions
 * assigned automatically starting from 1. Drives audit check `C7`.
 *
 * @throws SchemaValidationError if `items` is empty or any `name` is
 *   blank after trimming.
 * @throws InvalidUrlError if any `url` is not a valid http(s) URL.
 *   URL validation runs after the empty-list / empty-name guards so
 *   callers see the most useful failure first.
 */
export function breadcrumb(input: BreadcrumbInput): Schema<BreadcrumbList> {
  if (input.items.length === 0) {
    throw new SchemaValidationError(['breadcrumb requires at least one item']);
  }

  const issues: string[] = [];
  input.items.forEach((it, i) => {
    if (it.name.trim() === '') {
      issues.push(`items[${i}].name is empty`);
    }
  });
  if (issues.length > 0) {
    throw new SchemaValidationError(issues);
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: input.items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: parseAbsoluteUrl(it.url),
    })),
  };
}
