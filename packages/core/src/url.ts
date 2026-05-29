import { z } from 'zod';
import { InvalidUrlError } from './errors.js';

/**
 * A URL string that has passed zod's URL validation (any scheme).
 * Branded so `string` literals can't accidentally substitute.
 */
export const URLStringSchema = z.string().url().brand<'URLString'>();
export type URLString = z.infer<typeof URLStringSchema>;

/**
 * An absolute http(s) URL — the strictest form, used wherever Answerfox
 * fetches or audits a target site.
 */
export const AbsoluteUrlSchema = z
  .string()
  .url()
  .refine((s) => /^https?:\/\//i.test(s), { message: 'must use http or https' })
  .brand<'AbsoluteUrl'>();
export type AbsoluteUrl = z.infer<typeof AbsoluteUrlSchema>;

/**
 * Parse an input string into an AbsoluteUrl. Throws `InvalidUrlError`
 * on failure with the original zod issue preserved on `.cause`.
 */
export function parseAbsoluteUrl(input: string): AbsoluteUrl {
  const result = AbsoluteUrlSchema.safeParse(input);
  if (!result.success) {
    const reason = result.error.issues.map((i) => i.message).join('; ');
    throw new InvalidUrlError(input, reason, { cause: result.error });
  }
  return result.data;
}

/**
 * Non-throwing variant of `parseAbsoluteUrl`. Returns `null` on failure.
 */
export function tryParseAbsoluteUrl(input: string): AbsoluteUrl | null {
  const result = AbsoluteUrlSchema.safeParse(input);
  return result.success ? result.data : null;
}
