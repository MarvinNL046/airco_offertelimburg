import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import citiesData from "@/data/steden.json"

export default function CitiesPage() {
  const allCities = citiesData.limburg.reduce((acc: string[], municipality) => {
    return [...acc, ...municipality.places]
  }, [])

  const breadcrumbItems = [
    { label: "Steden", href: "/steden" }
  ];

  return (
    <div className="container py-12">
      <Breadcrumb items={breadcrumbItems} />
      
      <h1 className="text-4xl font-bold mb-8">Airco Installatie in Limburg</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {allCities.map((city) => (
          <Card key={city} className="p-6 hover:shadow-lg transition-shadow">
            <Link href={`/steden/${city.toLowerCase()}`}>
              <h2 className="text-2xl font-semibold mb-2">{city}</h2>
              <p className="text-muted-foreground">
                Professionele airco installatie, onderhoud en reparatie in {city}
              </p>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}