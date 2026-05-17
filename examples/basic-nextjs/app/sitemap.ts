import { buildSitemap } from '@answerable-kit/sitemap';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemap(
    [
      { path: '/' },
      { path: '/about' },
      { path: '/privacy' },
      { path: '/terms' },
      { path: '/faq' },
      { path: '/contact' },
    ],
    { baseUrl: 'https://example.com' },
  );
}
