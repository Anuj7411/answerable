/**
 * @answerable/core — shared types, utilities, and error classes
 * used across the Answerable SEO toolkit.
 */

export const VERSION = '0.0.0';

export { AnswerableError, InvalidUrlError, SchemaValidationError } from './errors.js';

export { SEVERITY_ORDER, SeveritySchema, severityRank, type Severity } from './severity.js';

export {
  CATEGORY_ID_PREFIX,
  CATEGORY_POINT_BUDGET,
  CategorySchema,
  type Category,
  type CategoryIdPrefix,
} from './category.js';

export {
  AbsoluteUrlSchema,
  parseAbsoluteUrl,
  tryParseAbsoluteUrl,
  URLStringSchema,
  type AbsoluteUrl,
  type URLString,
} from './url.js';

export {
  defineCheck,
  type Check,
  type CheckInput,
  type CheckResult,
  type ProjectContext,
} from './check.js';
