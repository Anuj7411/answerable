import { z } from 'zod';

/**
 * The four severity levels every audit check ships with.
 * Independent of point weight: a low-point check can still be critical.
 */
export const SeveritySchema = z.enum(['critical', 'high', 'medium', 'low']);
export type Severity = z.infer<typeof SeveritySchema>;

/**
 * Severities in descending order of urgency (most severe first).
 * Stable order — relied on by reporters and CI summaries.
 */
export const SEVERITY_ORDER: readonly Severity[] = ['critical', 'high', 'medium', 'low'];

/**
 * Numeric rank for sorting. Lower number = more severe.
 * `critical` → 0, `low` → 3.
 */
export function severityRank(s: Severity): number {
  return SEVERITY_ORDER.indexOf(s);
}
