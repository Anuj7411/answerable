import { z } from 'zod';

/**
 * The six audit categories defined in AUDIT-FRAMEWORK.md.
 * Stored as kebab-case for use in config files; the public-facing
 * single-letter prefix (A/B/C/D/E/F) lives on each check's `id`.
 */
export const CategorySchema = z.enum([
  'meta-and-technical',
  'content-structure',
  'structured-data',
  'eeat-and-authority',
  'offsite-citations',
  'og-and-social',
]);
export type Category = z.infer<typeof CategorySchema>;

/**
 * Maps each category to the single-letter prefix used in check IDs.
 * Example: `B5` → `content-structure`.
 */
export const CATEGORY_ID_PREFIX = {
  'meta-and-technical': 'A',
  'content-structure': 'B',
  'structured-data': 'C',
  'eeat-and-authority': 'D',
  'offsite-citations': 'E',
  'og-and-social': 'F',
} as const satisfies Record<Category, string>;

export type CategoryIdPrefix = (typeof CATEGORY_ID_PREFIX)[Category];

/**
 * Per-category point budget. Sums to exactly 100.
 * Source: docs/internal/AUDIT-FRAMEWORK.md §1.
 */
export const CATEGORY_POINT_BUDGET = {
  'meta-and-technical': 20,
  'content-structure': 20,
  'structured-data': 18,
  'eeat-and-authority': 22,
  'offsite-citations': 12,
  'og-and-social': 8,
} as const satisfies Record<Category, number>;
