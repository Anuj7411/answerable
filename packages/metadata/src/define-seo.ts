import { SchemaValidationError, parseAbsoluteUrl } from '@answerable/core';
import type { Metadata } from 'next';

/**
 * A static title (`"Acme"`) or a templated title with `%s` placeholder
 * that Next.js substitutes with each child page's title
 * (`{ default: "Acme", template: "%s — Acme" }`).
 */
export type SeoTitle = string | { readonly default: string; readonly template: string };

export interface SeoOpenGraph {
  /** Defaults to the top-level title. */
  readonly title?: string | undefined;
  /** Defaults to the top-level description. */
  readonly description?: string | undefined;
  readonly siteName?: string | undefined;
  /** BCP 47 locale code, e.g. `"en_US"`. */
  readonly locale?: string | undefined;
  readonly type?: 'website' | 'article' | 'profile' | 'book' | undefined;
  /** Absolute http(s) URLs. Defaults to `[image]` from the top level. */
  readonly images?: readonly string[] | undefined;
}

export interface SeoTwitter {
  readonly card?: 'summary' | 'summary_large_image' | 'app' | 'player' | undefined;
  /** Defaults to og.title, then top-level title. */
  readonly title?: string | undefined;
  /** Defaults to og.description, then top-level description. */
  readonly description?: string | undefined;
  /** Defaults to og.images, then `[image]` from the top level. */
  readonly images?: readonly string[] | undefined;
  /** Twitter handle, e.g. `"@acme"`. */
  readonly site?: string | undefined;
}

export interface SeoGoogleBotDirectives {
  readonly index?: boolean | undefined;
  readonly follow?: boolean | undefined;
  readonly noimageindex?: boolean | undefined;
  readonly 'max-snippet'?: number | undefined;
  readonly 'max-image-preview'?: 'none' | 'standard' | 'large' | undefined;
  readonly 'max-video-preview'?: number | undefined;
}

export interface SeoRobots {
  readonly index?: boolean | undefined;
  readonly follow?: boolean | undefined;
  readonly googleBot?: SeoGoogleBotDirectives | undefined;
}

export interface SeoInput {
  readonly title: SeoTitle;
  readonly description: string;
  /** Canonical absolute http(s) URL for this page. */
  readonly url: string;
  /** Single hero image. Populates both OG and Twitter unless overridden. */
  readonly image?: string | undefined;
  /** Site name, propagated to `openGraph.siteName`. */
  readonly siteName?: string | undefined;
  /** Default locale, propagated to `openGraph.locale`. */
  readonly locale?: string | undefined;
  readonly openGraph?: SeoOpenGraph | undefined;
  readonly twitter?: SeoTwitter | undefined;
  readonly robots?: SeoRobots | undefined;
}

function validateTitle(t: SeoTitle, issues: string[]): void {
  if (typeof t === 'string') {
    if (t.trim() === '') issues.push('title is empty');
    return;
  }
  if (t.default.trim() === '') issues.push('title.default is empty');
  if (t.template.trim() === '') issues.push('title.template is empty');
  else if (!t.template.includes('%s')) {
    issues.push('title.template must contain "%s" placeholder');
  }
}

function validateRobots(r: SeoRobots, issues: string[]): void {
  const bot = r.googleBot;
  if (bot === undefined) return;
  // Googlebot must be at most as permissive as the top-level directive.
  if (r.index === false && bot.index === true) {
    issues.push(
      'robots: googleBot.index cannot be true when top-level index is false (googleBot must be at most as permissive as the top-level directive)',
    );
  }
  if (r.follow === false && bot.follow === true) {
    issues.push('robots: googleBot.follow cannot be true when top-level follow is false');
  }
}

function titleText(t: SeoTitle): string {
  return typeof t === 'string' ? t : t.default;
}

function resolveOgImages(input: SeoInput): readonly string[] {
  if (input.openGraph?.images !== undefined) return input.openGraph.images;
  if (input.image !== undefined) return [input.image];
  return [];
}

function resolveTwitterImages(input: SeoInput, ogImages: readonly string[]): readonly string[] {
  if (input.twitter?.images !== undefined) return input.twitter.images;
  return ogImages;
}

type OpenGraph = NonNullable<Metadata['openGraph']>;
type Twitter = NonNullable<Metadata['twitter']>;
// Metadata['robots'] is `string | RobotsFile | null | undefined`. Narrow to
// the structured form so we can set `googleBot`, `index`, `follow`, etc.
type Robots = Extract<NonNullable<Metadata['robots']>, { index?: unknown }>;

function buildOpenGraph(input: SeoInput, ogImageUrls: readonly string[]): OpenGraph {
  const og: OpenGraph = {
    title: input.openGraph?.title ?? titleText(input.title),
    description: input.openGraph?.description ?? input.description,
    url: parseAbsoluteUrl(input.url),
    type: input.openGraph?.type ?? 'website',
  };
  const siteName = input.openGraph?.siteName ?? input.siteName;
  if (siteName !== undefined) og.siteName = siteName;
  const locale = input.openGraph?.locale ?? input.locale;
  if (locale !== undefined) og.locale = locale;
  if (ogImageUrls.length > 0) {
    og.images = ogImageUrls.map((url) => ({ url: parseAbsoluteUrl(url) }));
  }
  return og;
}

function buildTwitter(input: SeoInput, twitterImageUrls: readonly string[]): Twitter {
  const tw: Twitter = {
    card: input.twitter?.card ?? 'summary_large_image',
    title: input.twitter?.title ?? input.openGraph?.title ?? titleText(input.title),
    description: input.twitter?.description ?? input.openGraph?.description ?? input.description,
  };
  if (twitterImageUrls.length > 0) {
    tw.images = twitterImageUrls.map((url) => parseAbsoluteUrl(url));
  }
  if (input.twitter?.site !== undefined) tw.site = input.twitter.site;
  return tw;
}

function buildRobots(r: SeoRobots): Robots {
  const out: Robots = {};
  if (r.index !== undefined) out.index = r.index;
  if (r.follow !== undefined) out.follow = r.follow;
  if (r.googleBot !== undefined) {
    // Pass through the structured-record form; Next.js accepts it.
    out.googleBot = r.googleBot as Robots['googleBot'];
  }
  return out;
}

/**
 * Compose a complete Next.js `Metadata` object from a single typed
 * input. Drives audit checks **A1** (title length), **A3** (meta
 * description length), **A4** (canonical URL), and the **F-series**
 * (OpenGraph + Twitter cards).
 *
 * @throws SchemaValidationError batching every issue across title,
 *   description, and robots directives.
 * @throws InvalidUrlError for the first malformed URL encountered
 *   (`url`, `image`, any `openGraph.images` entry, any
 *   `twitter.images` entry).
 */
export function defineSeo(input: SeoInput): Metadata {
  const issues: string[] = [];
  validateTitle(input.title, issues);
  if (input.description.trim() === '') {
    issues.push('description is empty');
  }
  if (input.robots !== undefined) {
    validateRobots(input.robots, issues);
  }
  if (issues.length > 0) {
    throw new SchemaValidationError(issues);
  }

  const canonicalUrl = parseAbsoluteUrl(input.url);
  const ogImageUrls = resolveOgImages(input);
  const twitterImageUrls = resolveTwitterImages(input, ogImageUrls);

  const out: Metadata = {
    title: input.title,
    description: input.description,
    metadataBase: new URL(new URL(canonicalUrl).origin),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: buildOpenGraph(input, ogImageUrls),
    twitter: buildTwitter(input, twitterImageUrls),
  };

  if (input.robots !== undefined) {
    out.robots = buildRobots(input.robots);
  }

  return out;
}
