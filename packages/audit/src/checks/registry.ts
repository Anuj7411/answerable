import type { Check } from '@answerable/core';
import type { AuditDom } from '../parser.js';
import { a1Title } from './a1-title.js';
import { a3Description } from './a3-description.js';
import { a4Canonical } from './a4-canonical.js';
import { a5HtmlLang } from './a5-html-lang.js';
import { a6Viewport } from './a6-viewport.js';
import { a7Charset } from './a7-charset.js';
import { a8Robots } from './a8-robots.js';
import { a9Favicon } from './a9-favicon.js';
import { a10AppleTouchIcon } from './a10-apple-touch.js';
import { c1JsonLd } from './c1-json-ld.js';
import { c2Organization } from './c2-organization.js';
import { f1OgTitle } from './f1-og-title.js';
import { f2OgDescription } from './f2-og-description.js';
import { f3OgImage } from './f3-og-image.js';
import { f5OgUrl } from './f5-og-url.js';
import { f6TwitterCard } from './f6-twitter-card.js';
import { f7TwitterImage } from './f7-twitter-image.js';

/**
 * Every check registered with the audit engine, in stable AUDIT-FRAMEWORK
 * order. Subsequent PRs append to this list — never reorder, never
 * renumber. Stable IDs (`A1`, `A3`, ...) are part of the public API
 * (users pin `--ignore A4` in CI).
 */
export const DEFAULT_CHECKS: readonly Check<AuditDom>[] = [
  a1Title,
  a3Description,
  a4Canonical,
  a5HtmlLang,
  a6Viewport,
  a7Charset,
  a8Robots,
  a9Favicon,
  a10AppleTouchIcon,
  c1JsonLd,
  c2Organization,
  f1OgTitle,
  f2OgDescription,
  f3OgImage,
  f5OgUrl,
  f6TwitterCard,
  f7TwitterImage,
];
