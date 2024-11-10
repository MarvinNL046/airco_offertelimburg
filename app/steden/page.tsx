import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import { getCities } from "@/lib/cities"

export const metadata: Metadata = {
  title: 'Airco Installatie Limburg | Alle Steden en Regio\'s',
  description: 'Professionele airco installatie in heel Limburg. Vind uw stad of regio en vraag direct een vrijblijvende offerte aan. ✓ Erkend ✓ Gecertificeerd ✓ Vakkundig.',
}

export default async function CitiesPage() {
  const cities = await getCities()

  // Group cities by region
  const citiesByRegion = cities.reduce((acc: { [key: string]: typeof cities }, city) => {
    if (!acc[city.region]) {
      acc[city.region] = []
    }
    acc[city.region].push(city)
    return acc
  }, {})

  const breadcrumbItems = [
    { label: "Steden", href: "/steden" }
  ]

  return (
    <div className="container py-12">
      <Breadcrumb items={breadcrumbItems} />
      
      <h1 className="text-4xl font-bold mb-8">Airco Installatie in Limburg</h1>

      {Object.entries(citiesByRegion).map(([region, cities]) => (
        <div key={region} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{region}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cities
              .sort((a, b) => b.population - a.population)
              .map((city) => (
                <Link key={city.slug} href={`/steden/${city.slug}`}>
                  <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                    <h3 className="text-xl font-semibold mb-2">{city.city}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {city.population.toLocaleString()} inwoners
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Postcodes: {city.postal_codes}
                    </p>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}