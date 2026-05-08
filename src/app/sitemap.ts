import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: 'https://www.remodex.site',
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.remodex.site/privacy-policy',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://www.remodex.site/android-beta',
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'https://www.remodex.site/terms',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
