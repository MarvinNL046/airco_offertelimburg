import { promises as fs } from 'fs'
import path from 'path'
import { parse } from 'csv-parse/sync'

export interface City {
  city: string
  region: string
  population: number
  postal_codes: string
  slug: string
}

export async function getCities(): Promise<City[]> {
  const csvPath = path.join(process.cwd(), 'data', 'cities.csv')
  const fileContent = await fs.readFile(csvPath, 'utf-8')
  
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true
  })

  return records.map((record: any) => ({
    ...record,
    population: parseInt(record.population),
    slug: record.city.toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
  }))
}

export async function getCityBySlug(slug: string): Promise<City | null> {
  const cities = await getCities()
  return cities.find(city => city.slug === slug) || null
}

export async function getNearbyCity(citySlug: string, limit = 5): Promise<City[]> {
  const cities = await getCities()
  const currentCity = cities.find(city => city.slug === citySlug)
  
  if (!currentCity) return []
  
  // Sort by population and filter same region
  return cities
    .filter(city => city.region === currentCity.region && city.slug !== citySlug)
    .sort((a, b) => b.population - a.population) // Sort by population descending
    .slice(0, limit)
}

export function generateMetaDescription(city: City): string {
  const regionText = city.population > 50000 
    ? `grootste stad van ${city.region}`
    : `${city.region}`

  const populationText = city.population > 10000
    ? `Met ${city.population.toLocaleString()} inwoners`
    : ''

  return `Airco installatie in ${city.city}. ${populationText} zijn wij dé airco specialist in deze ${regionText}. ✓ Gratis offerte ✓ Erkend installateur ✓ Alle topmerken ✓ Binnen 24 uur reactie. Bel nu: 046 202 1430`
}

export function generateCityTitle(city: City): string {
  const regionText = city.population > 50000 
    ? `${city.region}`
    : city.region

  return `Airco Installatie ${city.city} | #1 Airco Specialist ${regionText}`
}

export function generateCityKeywords(city: City): string[] {
  const cityName = city.city.toLowerCase()
  const regionName = city.region.toLowerCase()
  
  return [
    // Location specific
    `airco ${cityName}`,
    `airconditioning ${cityName}`,
    `airco installatie ${cityName}`,
    `airco specialist ${cityName}`,
    `airco monteur ${cityName}`,
    `airco onderhoud ${cityName}`,
    `airco storing ${cityName}`,
    `airco reparatie ${cityName}`,
    `airco prijzen ${cityName}`,
    `airco offerte ${cityName}`,
    
    // Regional
    `airco ${regionName}`,
    `airconditioning ${regionName}`,
    `airco installatie ${regionName}`,
    
    // Service specific
    'split unit airco',
    'multi split airco',
    'airco met warmtepomp',
    'professionele airco installatie',
    'energiezuinige airco',
    'airco installateur',
    
    // Commercial intent
    'airco prijzen',
    'airco kosten',
    'airco offerte aanvragen',
    'airco laten installeren',
    
    // Postal code targeting
    `airco installatie ${city.postal_codes}`,
    `airconditioning ${city.postal_codes}`
  ]
}

export function getPopulationCategory(population: number): string {
  if (population > 100000) return 'Grote stad'
  if (population > 50000) return 'Middelgrote stad'
  if (population > 20000) return 'Kleine stad'
  if (population > 5000) return 'Groot dorp'
  return 'Dorp'
}