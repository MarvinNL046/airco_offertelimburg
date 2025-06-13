import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import { ContactForm } from "@/components/contact-form"
import brandsData from "@/data/brands.json"
import { BrandInfo } from "@/components/merken/brand-info"
import { BrandFeatures } from "@/components/merken/brand-features"
import { BrandModels } from "@/components/merken/brand-models"
import { BrandTechnology } from "@/components/merken/brand-technology"
import { getProductsByBrand } from "@/lib/product-catalog"
import ProductGallery from "@/components/merken/product-gallery"
import { Phone, Shield, Award, Zap } from "lucide-react"
import { generateBreadcrumbSchema, generateProductSchema } from "@/lib/schema"
import Script from "next/script"

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
    title: `${brand.name} Airco Kopen? ⚡ Reviews + Beste Prijs 2025`,
    description: `🔥 Alles over ${brand.name} airco's! ✅ Echte gebruikerservaringen ✅ Voor- en nadelen ✅ Beste modellen ✅ Laagste prijs garantie. Vergelijk NU!`,
    alternates: {
      canonical: `https://aircooffertelimburg.nl/merken/${params.slug}`,
    },
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

  const products = getProductsByBrand(brand.slug)
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Merken", item: "/merken" },
    { name: brand.name, item: `/merken/${brand.slug}` }
  ])

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-12">
        <div className="container">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="grid lg:grid-cols-2 gap-8 items-center mt-8">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">
                ✨ Premium Partner
              </Badge>
              <h1 className="text-5xl font-heading font-bold mb-6 gradient-text">
                {brand.name} Airconditioners
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {brand.description}
              </p>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">Tot 10 jaar garantie</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-green-600" />
                  <span className="font-medium">A+++ Energielabel</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-orange-600" />
                  <span className="font-medium">{products.length}+ Modellen</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gradient-primary">
                  <Phone className="mr-2 h-5 w-5" />
                  Direct contact
                </Button>
                <Button size="lg" variant="outline">
                  Gratis adviesgesprek
                </Button>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative h-[400px] hidden lg:block">
              {brand.image ? (
                <Image
                  src={brand.image}
                  alt={`${brand.name} airconditioner`}
                  fill
                  className="object-contain"
                  priority
                />
              ) : (
                <div className="h-full flex items-center justify-center bg-gradient-secondary rounded-xl">
                  <span className="text-8xl">🎆</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      {products.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-heading font-bold mb-8">
              Populaire {brand.name} Modellen
            </h2>
            <ProductGallery products={products} />
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Content - 2 columns */}
            <div className="lg:col-span-2 space-y-8">
              <BrandInfo brand={brand} />
              <BrandFeatures brand={brand} />
              <BrandModels brand={brand} />
              <BrandTechnology brand={brand} />
            </div>

            {/* Right Sidebar - 1 column */}
            <div className="space-y-8">
              {/* Contact Form */}
              <Card className="sticky-sidebar shadow-xl">
                <CardHeader className="gradient-primary text-white">
                  <CardTitle>Vraag een Offerte Aan</CardTitle>
                  <CardDescription className="text-blue-100">
                    Speciaal voor {brand.name} airconditioners
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ContactForm />
                </CardContent>
              </Card>
              
              {/* Brand Benefits */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Waarom {brand.name}?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-sm">Bewezen kwaliteit en betrouwbaarheid</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-sm">Uitgebreide garantie en service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-sm">Energiezuinig en milieuvriendelijk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-sm">Smart home compatible</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}