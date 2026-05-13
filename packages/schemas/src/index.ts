/**
 * @answerable/schemas — type-safe JSON-LD generators for the
 * Answerable SEO toolkit. Each helper returns a `WithContext<T>`
 * object from `schema-dts` that's ready to be embedded as
 * `<script type="application/ld+json">{...}</script>`.
 */

export const VERSION = '0.0.0';

export {
  organization,
  type ContactPointInput,
  type OrganizationInput,
} from './organization.js';

export { webSite, type WebSiteInput } from './website.js';
