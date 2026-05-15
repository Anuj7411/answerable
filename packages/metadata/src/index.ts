/**
 * @answerable/metadata — Next.js App Router metadata helpers for the
 * Answerable SEO toolkit. Compose `title`, `description`, canonical
 * URL, OpenGraph, Twitter cards, and robots directives from a single
 * typed input, with smart fallbacks across the social-card chain.
 */

export const VERSION = '0.0.0';

export {
  defineSeo,
  type SeoGoogleBotDirectives,
  type SeoInput,
  type SeoOpenGraph,
  type SeoRobots,
  type SeoTitle,
  type SeoTwitter,
} from './define-seo.js';
