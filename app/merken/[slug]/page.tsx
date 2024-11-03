import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import brandsData from "@/data/brands.json"

interface BrandPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return brandsData.brands.map((brand) => ({
    slug: brand.slug,
  }))
}

export function generateMetadata({ params }: BrandPageProps): Metadata {
  const brand = brandsData.brands.find((b) => b.slug === params.slug)

  if (!brand) {
    return {
      title: "Merk niet gevonden | Airco Offerte Limburg",
      description: "Het opgevraagde merk kon niet worden gevonden.",
    }
  }

  return {
    title: `${brand.name} Airconditioners | Airco Offerte Limburg`,
    description: brand.description,
  }
}

export default function BrandPage({ params }: BrandPageProps) {
  const brand = brandsData.brands.find((b) => b.slug === params.slug)

  if (!brand) {
    notFound()
  }

  const breadcrumbItems = [
    { label: "Merken", href: "/merken" },
    { label: brand.name, href: `/merken/${brand.slug}` }
  ]

  return (
    <div className="container py-12">
      <Breadcrumb items={breadcrumbItems} />
      
      <h1 className="mb-8 text-4xl font-bold">{brand.name} Airconditioners</h1>
      
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Over {brand.name}</h2>
            <p className="text-muted-foreground">{brand.description}</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Kenmerken</h3>
            <ul className="space-y-2">
              {brand.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  )
}