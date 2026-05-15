/**
 * @answerable/audit — audit engine for the Answerable SEO toolkit.
 * Fetches a target URL, parses HTML, runs every registered check in
 * parallel, and returns a structured report. Ships with foundations
 * + the first 5 checks (A1, A3, A4, A5, C1); the remaining 45 land
 * in subsequent PRs.
 */

export const VERSION = '0.0.0';

export {
  CrawlError,
  DEFAULT_TIMEOUT_MS,
  DEFAULT_USER_AGENT,
  fetchAndParse,
  type FetchAndParseOptions,
  type FetchAndParseResult,
} from './crawler.js';

export { type AuditDom, loadHtml } from './parser.js';

export { DEFAULT_CHECKS } from './checks/registry.js';

export {
  audit,
  bandFromScore,
  runChecks,
  type AuditConvenienceOptions,
  type RunChecksInput,
} from './runner.js';

export { consoleReport, type ConsoleReportOptions } from './reporters/console.js';

export type { AuditOptions, AuditReport, CheckRunResult, ScoreBand } from './types.js';

export { a1Title } from './checks/a1-title.js';
export { a3Description } from './checks/a3-description.js';
export { a4Canonical } from './checks/a4-canonical.js';
export { a5HtmlLang } from './checks/a5-html-lang.js';
export { a6Viewport } from './checks/a6-viewport.js';
export { a7Charset } from './checks/a7-charset.js';
export { a8Robots } from './checks/a8-robots.js';
export { a9Favicon } from './checks/a9-favicon.js';
export { a10AppleTouchIcon } from './checks/a10-apple-touch.js';
export { c1JsonLd } from './checks/c1-json-ld.js';
export { c2Organization } from './checks/c2-organization.js';
export { f1OgTitle } from './checks/f1-og-title.js';
export { f2OgDescription } from './checks/f2-og-description.js';
export { f3OgImage } from './checks/f3-og-image.js';
export { f5OgUrl } from './checks/f5-og-url.js';
export { f6TwitterCard } from './checks/f6-twitter-card.js';
export { f7TwitterImage } from './checks/f7-twitter-image.js';
