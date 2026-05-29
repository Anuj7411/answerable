# @answerfox/schemas

Type-safe JSON-LD generators for the [Answerfox](https://github.com/Anuj7411/answerfox) SEO toolkit. Each generator returns a fully-typed `WithContext<T>` object validated at the type level by [`schema-dts`](https://github.com/google/schema-dts).

> **v0.1.0.** All eight generators ship today: `organization`, `webSite`, `article`, `breadcrumb`, `faqPage`, `howTo`, `product`, and `softwareApplication`.

## Install

```bash
pnpm add @answerfox/schemas
```

## Usage

```ts
import { organization, webSite } from '@answerfox/schemas';

const org = organization({
  name: 'Acme',
  url: 'https://acme.com',
  logo: 'https://acme.com/logo.png',
  sameAs: ['https://twitter.com/acme', 'https://github.com/acme'],
});

const site = webSite({
  name: 'Acme',
  url: 'https://acme.com',
  searchUrlTemplate: 'https://acme.com/search?q={search_term_string}',
});

// Inject as JSON-LD in your Next.js layout:
// <script type="application/ld+json">{JSON.stringify(org)}</script>
```

All URL inputs are validated as absolute `http(s)` URLs at runtime — invalid input throws `InvalidUrlError` from `@answerfox/core`.

## License

[MIT](../../LICENSE) © 2026 Anuj Ojha
