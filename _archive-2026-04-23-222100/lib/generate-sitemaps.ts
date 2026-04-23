import { promises as fs } from 'fs'
import path from 'path'
import { getCities } from './cities'
import diensten from '@/data/diensten.json'

async function generateServicesSitemap() {
  const services = diensten.map(dienst => ({
    loc: `https://aircooffertelimburg.nl/diensten/${dienst.slug}`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.9
  }))

  // Add service-city combinations
  const cities = await getCities()
  const serviceCityUrls = diensten.flatMap(dienst =>
    cities.map(city => ({
      loc: `https://aircooffertelimburg.nl/diensten/${dienst.slug}/${city.slug}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: city.population > 50000 ? 0.8 : 0.7
    }))
  )

  const allServiceUrls = [...services, ...serviceCityUrls]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allServiceUrls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  await fs.writeFile(
    path.join(process.cwd(), 'public', 'sitemap-services.xml'),
    xml
  )
}

async function generateLocationsSitemap() {
  const cities = await getCities()
  const locations = cities.map(city => ({
    loc: `https://aircooffertelimburg.nl/steden/${city.slug}`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: city.population > 50000 ? 0.9 : 
             city.population > 20000 ? 0.8 : 
             0.7
  }))

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${locations.map(location => `  <url>
    <loc>${location.loc}</loc>
    <lastmod>${location.lastmod}</lastmod>
    <changefreq>${location.changefreq}</changefreq>
    <priority>${location.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  await fs.writeFile(
    path.join(process.cwd(), 'public', 'sitemap-locations.xml'),
    xml
  )
}

async function generateMainSitemap() {
  const staticPages = [
    { url: '', priority: 1.0 },
    { url: 'offerte', priority: 0.9 },
    { url: 'diensten', priority: 0.9 },
    { url: 'contact', priority: 0.8 },
    { url: 'over-ons', priority: 0.7 },
    { url: 'faq', priority: 0.7 },
    { url: 'blog', priority: 0.6 },
    { url: 'kennisbank', priority: 0.6 },
    { url: 'merken', priority: 0.6 },
    { url: 'steden', priority: 0.8 },
  ].map(page => ({
    loc: `https://aircooffertelimburg.nl/${page.url}`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: page.url === '' ? 'daily' : 'weekly',
    priority: page.priority
  }))

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(page => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  await fs.writeFile(
    path.join(process.cwd(), 'public', 'sitemap-main.xml'),
    xml
  )
}

async function generateSitemapIndex() {
  const today = new Date().toISOString().split('T')[0]
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://aircooffertelimburg.nl/sitemap-main.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://aircooffertelimburg.nl/sitemap-services.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://aircooffertelimburg.nl/sitemap-locations.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>`

  await fs.writeFile(
    path.join(process.cwd(), 'public', 'sitemap.xml'),
    xml
  )
}

export async function generateAllSitemaps() {
  await Promise.all([
    generateMainSitemap(),
    generateServicesSitemap(),
    generateLocationsSitemap(),
    generateSitemapIndex()
  ])
}