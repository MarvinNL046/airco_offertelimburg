import { MetadataRoute } from 'next'
import diensten from '@/data/diensten.json'
import { getCities } from '@/lib/cities'
import { blogPosts } from '@/data/blog-posts'
import brands from '@/data/brands.json'

export default async function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aircooffertelimburg.nl'
  const lastModified = new Date()

  // Static pages with custom priorities
  const staticPages = [
    { route: '', priority: 1.0 }, // Homepage
    { route: 'offerte', priority: 0.9 }, // High priority for conversion page
    { route: 'diensten', priority: 0.9 },
    { route: 'contact', priority: 0.8 },
    { route: 'over-ons', priority: 0.7 },
    { route: 'faq', priority: 0.7 },
    { route: 'blog', priority: 0.6 },
    { route: 'kennisbank', priority: 0.6 },
    { route: 'merken', priority: 0.6 },
    { route: 'steden', priority: 0.8 },
  ].map((page) => ({
    url: `${siteUrl}/${page.route}`,
    lastModified,
    changeFrequency: page.route === '' ? 'daily' : 'weekly' as const,
    priority: page.priority,
  }))

  // Get all cities
  const cities = await getCities()

  // Generate city URLs with dynamic priorities based on population
  const cityUrls = cities.map((city) => ({
    url: `${siteUrl}/steden/${city.slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    // Higher priority for larger cities
    priority: city.population > 50000 ? 0.9 : 
             city.population > 20000 ? 0.8 : 
             city.population > 10000 ? 0.7 : 0.6,
  }))

  // Generate service URLs with high priority
  const serviceUrls = diensten.map((dienst) => ({
    url: `${siteUrl}/diensten/${dienst.slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Generate blog URLs with dynamic priority based on date
  const blogUrls = blogPosts.map((post) => {
    const postDate = new Date(post.date)
    const ageInDays = (Date.now() - postDate.getTime()) / (1000 * 60 * 60 * 24)
    
    return {
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: postDate,
      changeFrequency: 'monthly' as const,
      // Newer posts get higher priority
      priority: ageInDays < 30 ? 0.8 :
               ageInDays < 90 ? 0.7 :
               0.6,
    }
  })

  // Generate brand URLs
  const brandUrls = brands.brands.map((brand) => ({
    url: `${siteUrl}/merken/${brand.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Generate service-city combination URLs with dynamic priorities
  const serviceCityUrls = diensten.flatMap((dienst) =>
    cities.map((city) => ({
      url: `${siteUrl}/diensten/${dienst.slug}/${city.slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      // Higher priority for service pages in larger cities
      priority: city.population > 50000 ? 0.8 : 
               city.population > 20000 ? 0.7 : 
               0.6,
    }))
  )

  return [
    ...staticPages,
    ...cityUrls,
    ...serviceUrls,
    ...blogUrls,
    ...brandUrls,
    ...serviceCityUrls,
  ]
}