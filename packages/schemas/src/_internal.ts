import type { Thing, WithContext } from 'schema-dts';

/**
 * schema-dts models every schema.org class as `XLeaf | … | string`,
 * where the trailing string is the JSON-LD `@id` reference form. This
 * helper strips that reference variant so callers of our generators
 * can access fields directly (e.g. `.logo`, `.mainEntity`) without
 * first having to rule out the string branch.
 *
 * Constrained to `Thing` because `WithContext` requires it.
 *
 * Internal — not part of the public API.
 */
export type Schema<T extends Thing> = WithContext<Exclude<T, string>>;
