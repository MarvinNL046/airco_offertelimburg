import { Metadata } from "next"
import { CityContent } from "@/components/city/city-content"
import { getCities } from "@/lib/cities"
import { generateLocalBusinessSchema } from "@/lib/schema"
import Script from "next/script"
import { notFound } from "next/navigation"

interface CityPageProps {
  params: {
    city: string
  }
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const cities = await getCities()
  const cityData = cities.find(city => city.city.toLowerCase() === params.city)
  
  if (!cityData) {
    return {
      title: "Stad niet gevonden | Airco Offerte Limburg",
      description: "De opgevraagde stad kon niet worden gevonden."
    }
  }

  return {
    title: `Airco Installatie ${cityData.city} | Airco Offerte Limburg`,
    description: `Professionele airconditioning installatie en onderhoud in ${cityData.city}. ✓ Erkend ✓ Gecertificeerd ✓ Vakkundig. Vraag nu een vrijblijvende offerte aan!`,
    openGraph: {
      title: `Airco Installatie ${cityData.city} | Airco Offerte Limburg`,
      description: `Professionele airconditioning installatie en onderhoud in ${cityData.city}. Erkend en gecertificeerd installateur.`,
      url: `https://aircooffertelimburg.nl/steden/${params.city}`,
      siteName: "Airco Offerte Limburg",
      locale: "nl_NL",
      type: "website",
    },
  }
}

export async function generateStaticParams() {
  const cities = await getCities()
  return cities.map((city) => ({
    city: city.city.toLowerCase(),
  }))
}

export default async function CityPage({ params }: CityPageProps) {
  const cities = await getCities()
  const cityData = cities.find(
    (city) => city.city.toLowerCase() === params.city
  )

  if (!cityData) {
    notFound()
  }

  const localBusinessSchema = generateLocalBusinessSchema(cityData.city)

  const city = {
    title: cityData.city,
    description: `Professionele airconditioning services in ${cityData.city}. Wij bieden complete airco-oplossingen voor zowel particulieren als bedrijven.`,
    region: cityData.region,
    population: cityData.population,
    postal_codes: cityData.postal_codes
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