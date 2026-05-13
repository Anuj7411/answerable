import { SchemaValidationError, parseAbsoluteUrl } from '@answerable/core';
import type { WebSite, WithContext } from 'schema-dts';

/**
 * schema-dts's `WebSite` is `WebSiteLeaf | … | string`. Narrow the
 * return type so callers can access fields like `.potentialAction`
 * directly without first ruling out the IRI-reference string form.
 */
type WebSiteObject = WithContext<Exclude<WebSite, string>>;

export interface WebSiteInput {
  readonly name: string;
  /** Canonical site URL. Must be an absolute http(s) URL. */
  readonly url: string;
  readonly description?: string | undefined;
  /**
   * URL template for the sitelinks search box. Must contain
   * `{search_term_string}` as the query placeholder.
   *
   * @example
   * 'https://example.com/search?q={search_term_string}'
   */
  readonly searchUrlTemplate?: string | undefined;
}

/**
 * Generate a fully-typed JSON-LD `WebSite` object.
 *
 * When `searchUrlTemplate` is supplied, a `potentialAction` of type
 * `SearchAction` is emitted so search engines can render a sitelinks
 * search box in results.
 *
 * @throws InvalidUrlError if `url` is not a valid http(s) URL.
 * @throws SchemaValidationError if `searchUrlTemplate` is missing the
 *   `{search_term_string}` placeholder.
 */
export function webSite(input: WebSiteInput): WebSiteObject {
  const url: string = parseAbsoluteUrl(input.url);

  const out: WebSiteObject = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: input.name,
    url,
  };

  if (input.description !== undefined) {
    out.description = input.description;
  }

  if (input.searchUrlTemplate !== undefined) {
    if (!input.searchUrlTemplate.includes('{search_term_string}')) {
      throw new SchemaValidationError([
        'searchUrlTemplate must contain the {search_term_string} placeholder',
      ]);
    }
    // schema-dts removed the `query-input` field after Google deprecated the
    // sitelinks search box in 2024. The field is still valid schema.org JSON-LD
    // and consumed by other search engines and AI answer engines, so we keep
    // emitting it. The `as unknown as` bypass is intentional and isolated.
    const action = {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: input.searchUrlTemplate,
      },
      'query-input': 'required name=search_term_string',
    } as const;
    out.potentialAction = action as unknown as NonNullable<WebSiteObject['potentialAction']>;
  }

  return out;
}
