import { MetadataRoute } from 'next'
import diensten from '@/data/diensten.json'
import steden from '@/data/steden.json'
import { blogPosts } from '@/data/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aircooffertelimburg.nl'

  // Static pages
  const staticPages = [
    '',
    'over-ons',
    'contact',
    'offerte',
    'faq',
    'blog',
    'kennisbank',
    'merken',
    'steden',
  ].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Generate city URLs
  const cityUrls = steden.limburg.flatMap((municipality) =>
    municipality.places.map((city) => ({
      url: `${siteUrl}/steden/${city.toLowerCase()}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  )

  // Generate service URLs
  const serviceUrls = diensten.map((dienst) => ({
    url: `${siteUrl}/diensten/${dienst.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Generate blog URLs
  const blogUrls = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...cityUrls, ...serviceUrls, ...blogUrls]
}