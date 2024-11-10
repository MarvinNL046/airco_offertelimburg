import { Metadata } from "next"
import { notFound } from "next/navigation"
import { CityContent } from "@/components/city/city-content"
import { getCityBySlug, getNearbyCity, generateMetaDescription, generateCityTitle, generateCityKeywords } from "@/lib/cities"
import { generateLocalBusinessSchema, generateFAQSchema } from "@/lib/schema"
import Script from "next/script"

interface CityPageProps {
  params: {
    city: string
  }
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const city = await getCityBySlug(params.city)
  
  if (!city) {
    return {
      title: "Stad niet gevonden | Airco Offerte Limburg",
      description: "De opgevraagde stad kon niet worden gevonden.",
    }
  }

  const cityFaqs = [
    {
      question: `Wat kost een airco installatie in ${city.city}?`,
      answer: `De kosten voor een airco installatie in ${city.city} beginnen vanaf €999. De exacte prijs hangt af van het type systeem en de specifieke situatie. Vraag een gratis offerte aan voor een exacte prijsopgave.`
    },
    {
      question: `Hoe snel kunnen jullie een airco installeren in ${city.city}?`,
      answer: `In ${city.city} kunnen we meestal binnen 1-2 weken uw airco installeren. Bij spoed is snellere installatie mogelijk. Neem contact op voor de actuele planning.`
    },
    {
      question: `Welke merken airco's installeren jullie in ${city.city}?`,
      answer: `In ${city.city} installeren we alle topmerken zoals Daikin, Mitsubishi, Samsung en Toshiba. We adviseren u graag over de beste keuze voor uw situatie.`
    }
  ]

  return {
    title: generateCityTitle(city),
    description: generateMetaDescription(city),
    openGraph: {
      title: generateCityTitle(city),
      description: generateMetaDescription(city),
      url: `https://aircooffertelimburg.nl/steden/${params.city}`,
      siteName: "Airco Offerte Limburg",
      locale: "nl_NL",
      type: "website",
    },
    alternates: {
      canonical: `https://aircooffertelimburg.nl/steden/${params.city}`,
    },
    keywords: generateCityKeywords(city),
  }
}

export default async function CityPage({ params }: CityPageProps) {
  const city = await getCityBySlug(params.city)
  const nearbyCities = await getNearbyCity(params.city)

  if (!city) {
    notFound()
  }

  const localBusinessSchema = generateLocalBusinessSchema(city.city)
  const faqSchema = generateFAQSchema([
    {
      question: `Wat kost een airco installatie in ${city.city}?`,
      answer: `De kosten voor een airco installatie in ${city.city} beginnen vanaf €999. De exacte prijs hangt af van het type systeem en de specifieke situatie. Vraag een gratis offerte aan voor een exacte prijsopgave.`
    },
    {
      question: `Hoe snel kunnen jullie een airco installeren in ${city.city}?`,
      answer: `In ${city.city} kunnen we meestal binnen 1-2 weken uw airco installeren. Bij spoed is snellere installatie mogelijk. Neem contact op voor de actuele planning.`
    },
    {
      question: `Welke merken airco's installeren jullie in ${city.city}?`,
      answer: `In ${city.city} installeren we alle topmerken zoals Daikin, Mitsubishi, Samsung en Toshiba. We adviseren u graag over de beste keuze voor uw situatie.`
    }
  ])

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CityContent city={city} nearbyCities={nearbyCities} />
    </>
  )
}

// Force dynamic rendering
export const dynamic = 'force-dynamic'

// Revalidate the page every hour
export const revalidate = 3600