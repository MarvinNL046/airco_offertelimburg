import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Phone, Mail, ThermometerSun } from "lucide-react"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"
import type { City } from "@/lib/cities"

interface CityContentProps {
  city: City
  nearbyCities: City[]
}

export function CityContent({ city, nearbyCities }: CityContentProps) {
  return (
    <div className="container py-12">
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <div className="flex items-center gap-2 text-blue-600 mb-4">
            <MapPin className="h-5 w-5" />
            <span className="font-medium">{city.region}</span>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Airco Installatie {city.city}
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
              Postcodes: {city.postal_codes}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-md bg-green-50 text-green-700 text-sm">
              {city.population.toLocaleString()} inwoners
            </span>
          </div>

          <p className="text-xl text-muted-foreground mb-8">
            Professionele airconditioning services in {city.city}. Wij bieden complete 
            airco-oplossingen voor zowel particulieren als bedrijven in {city.region}.
          </p>

          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Onze Services in {city.city}
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <ThermometerSun className="h-5 w-5 text-blue-600" />
                <span>Airco installatie</span>
              </li>
              <li className="flex items-center gap-3">
                <ThermometerSun className="h-5 w-5 text-blue-600" />
                <span>Airco onderhoud</span>
              </li>
              <li className="flex items-center gap-3">
                <ThermometerSun className="h-5 w-5 text-blue-600" />
                <span>Airco reparatie</span>
              </li>
            </ul>
          </Card>

          {nearbyCities.length > 0 && (
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">
                Ook actief in de omgeving van {city.city}
              </h2>
              <div className="flex flex-wrap gap-2">
                {nearbyCities.map((nearbyCity) => (
                  <Link 
                    key={nearbyCity.slug}
                    href={`/steden/${nearbyCity.slug}`}
                    className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm hover:bg-blue-100 transition-colors"
                  >
                    {nearbyCity.city}
                  </Link>
                ))}
              </div>
            </Card>
          )}
        </div>

        <div>
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">
              Vraag een Offerte Aan
            </h2>
            <ContactForm cityName={city.city} />
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Direct Contact
            </h2>
            <div className="space-y-4">
              <Button
                variant="outline"
                className="w-full justify-start gap-2"
                asChild
              >
                <Link href="tel:0462021430">
                  <Phone className="h-4 w-4" />
                  <span>Telefoon: 046 202 1430</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start gap-2"
                asChild
              >
                <Link href="https://wa.me/31636481054">
                  <Phone className="h-4 w-4" />
                  <span>WhatsApp: 06 3648 1054</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start gap-2"
                asChild
              >
                <Link href="mailto:info@staycoolairco.nl">
                  <Mail className="h-4 w-4" />
                  <span>info@staycoolairco.nl</span>
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}