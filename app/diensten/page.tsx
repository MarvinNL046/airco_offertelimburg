import { Metadata } from "next"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import { CTAWithForm } from "@/components/sections/cta-with-form"
import { Card } from "@/components/ui/card"
import { AirVent, Settings, Wrench } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Onze Diensten | Airco Offerte Limburg",
  description: "Bekijk ons complete aanbod van airconditioning diensten in Limburg",
}

const services = [
  {
    icon: AirVent,
    title: "Airco Installatie",
    description: "Professionele installatie van airconditioningsystemen voor uw woning of bedrijf.",
    slug: "airco-installatie",
  },
  {
    icon: Settings,
    title: "Airco Onderhoud",
    description: "Regelmatig onderhoud voor optimale prestaties en langere levensduur van uw systeem.",
    slug: "airco-onderhoud",
  },
  {
    icon: Wrench,
    title: "Airco Reparatie",
    description: "Snelle en vakkundige reparatie bij storingen aan uw airconditioner.",
    slug: "airco-reparatie",
  },
]

export default function DienstenPage() {
  const breadcrumbItems = [
    { label: "Diensten", href: "/diensten" }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />
      
      <h1 className="text-4xl font-bold mb-8">Onze Diensten</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <Link key={service.slug} href={`/diensten/${service.slug}`}>
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <Icon className="h-12 w-12 text-blue-600 mb-4" />
                <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            </Link>
          )
        })}
      </div>

      <CTAWithForm 
        title="Vraag een Vrijblijvende Offerte Aan"
        description="Ontvang binnen 24 uur een offerte op maat voor uw airconditioning project."
      />
    </div>
  )
}