import { Metadata } from "next"
import EnhancedCityContent from "@/components/city/enhanced-city-content"
import { getCities } from "@/lib/cities"
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from "@/lib/schema"
import Script from "next/script"
import { notFound } from "next/navigation"
import { Breadcrumb } from "@/components/navigation/breadcrumb"

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
    title: `Airco ${cityData.city} NODIG? 🥵 Nog 3 Plekken Deze Week!`,
    description: `⚡ MORGEN al koele lucht in ${cityData.city}! ✅ 150+ tevreden klanten ✅ Gratis advies thuis ✅ Snelle reactie. Bel direct: 046 202 1430`,
    openGraph: {
      title: `Airco ${cityData.city} - Direct Geïnstalleerd | Airco Offerte Limburg`,
      description: `Snel een airco nodig in ${cityData.city}? Wij installeren binnen 48 uur! Ervaren monteurs, eerlijke prijzen.`,
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
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Steden", item: "/steden" },
    { name: cityData.city, item: `/steden/${params.city}` }
  ])

  const city = {
    name: cityData.city,
    slug: params.city,
    description: `Professionele airconditioning services in ${cityData.city}. Wij bieden complete airco-oplossingen voor zowel particulieren als bedrijven.`,
    province: "Limburg",
    region: cityData.region,
    inhabitants: cityData.population.toString(),
    postcodes: cityData.postal_codes.split(",").map(pc => pc.trim())
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Steden", href: "/steden" },
    { label: cityData.city, href: `/steden/${params.city}` }
  ]

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
          <EnhancedCityContent city={city} />
        </div>
      </section>
    </>
  )
}