import { Metadata } from "next"
import { CityContent } from "@/components/city/city-content"
import citiesData from "@/data/steden.json"
import { generateLocalBusinessSchema } from "@/lib/structured-data"
import Script from "next/script"

interface CityPageProps {
  params: {
    city: string
  }
}

export function generateMetadata({ params }: CityPageProps): Metadata {
  const cityName = params.city.charAt(0).toUpperCase() + params.city.slice(1)
  
  return {
    title: `Airco Installatie ${cityName} | Airco Offerte Limburg`,
    description: `Professionele airconditioning installatie en onderhoud in ${cityName}. ✓ Erkend ✓ Gecertificeerd ✓ Vakkundig. Vraag nu een vrijblijvende offerte aan!`,
    openGraph: {
      title: `Airco Installatie ${cityName} | Airco Offerte Limburg`,
      description: `Professionele airconditioning installatie en onderhoud in ${cityName}. Erkend en gecertificeerd installateur.`,
      url: `https://aircooffertelimburg.nl/steden/${params.city}`,
      siteName: "Airco Offerte Limburg",
      locale: "nl_NL",
      type: "website",
    },
  }
}

export function generateStaticParams() {
  const allCities = citiesData.limburg.reduce((acc: string[], municipality) => {
    return [...acc, ...municipality.places.map(place => place.toLowerCase())]
  }, [])

  return allCities.map((city) => ({
    city: city.toLowerCase(),
  }))
}

export default function CityPage({ params }: CityPageProps) {
  const cityData = citiesData.limburg.find((municipality) =>
    municipality.places.some(
      (place) => place.toLowerCase() === params.city.toLowerCase()
    )
  )

  if (!cityData) {
    return null
  }

  const cityName = params.city.charAt(0).toUpperCase() + params.city.slice(1)
  const localBusinessSchema = generateLocalBusinessSchema(cityName)

  const city = {
    title: cityName,
    description: `Professionele airconditioning services in ${cityName}. Wij bieden complete airco-oplossingen voor zowel particulieren als bedrijven.`,
    places: cityData.places,
    region: cityData.municipality
  }

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <CityContent city={city} />
    </>
  )
}