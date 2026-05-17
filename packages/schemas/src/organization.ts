import { parseAbsoluteUrl } from '@answerable-kit/core';
import type { ContactPoint, Organization } from 'schema-dts';
import type { Schema } from './_internal.js';

export interface ContactPointInput {
  readonly email?: string | undefined;
  readonly telephone?: string | undefined;
  /** Defaults to `"customer support"` when omitted. */
  readonly contactType?: string | undefined;
}

export interface OrganizationInput {
  readonly name: string;
  /** Canonical home page URL. Must be an absolute http(s) URL. */
  readonly url: string;
  /** Absolute URL to the org's logo image. */
  readonly logo?: string | undefined;
  readonly description?: string | undefined;
  /**
   * URLs of official profiles on other authoritative sites
   * (Twitter, LinkedIn, GitHub, Wikipedia, ...). Each entry must be
   * an absolute http(s) URL.
   */
  readonly sameAs?: readonly string[] | undefined;
  readonly contactPoint?: ContactPointInput | undefined;
}

/**
 * Generate a fully-typed JSON-LD `Organization` object ready to be
 * embedded in a `<script type="application/ld+json">` tag.
 *
 * @throws InvalidUrlError if `url`, `logo`, or any `sameAs` entry is
 *   not a valid http(s) URL.
 */
export function organization(input: OrganizationInput): Schema<Organization> {
  const url: string = parseAbsoluteUrl(input.url);

  const out: Schema<Organization> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: input.name,
    url,
  };

  if (input.logo !== undefined) {
    out.logo = parseAbsoluteUrl(input.logo);
  }
  if (input.description !== undefined) {
    out.description = input.description;
  }
  if (input.sameAs !== undefined && input.sameAs.length > 0) {
    out.sameAs = input.sameAs.map((u) => parseAbsoluteUrl(u));
  }
  if (input.contactPoint !== undefined) {
    out.contactPoint = buildContactPoint(input.contactPoint);
  }

  return out;
}

function buildContactPoint(input: ContactPointInput): ContactPoint {
  const cp: ContactPoint = {
    '@type': 'ContactPoint',
    contactType: input.contactType ?? 'customer support',
  };
  if (input.email !== undefined) {
    cp.email = input.email;
  }
  if (input.telephone !== undefined) {
    cp.telephone = input.telephone;
  }
  return cp;
}
