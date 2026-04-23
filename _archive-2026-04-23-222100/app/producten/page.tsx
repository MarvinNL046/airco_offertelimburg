import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import { CTAWithForm } from "@/components/sections/cta-with-form"
import { productCatalog } from "@/lib/product-catalog"
import { generateOrganizationSchema } from "@/lib/schema"
import Script from "next/script"
import { Shield, Award, Leaf, Zap, ArrowRight, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "500+ Airconditioning Modellen | Alle Merken & Types | Beste Prijzen",
  description: "⚡ Kies uit 500+ airco modellen van Daikin, Mitsubishi, Samsung, LG & meer! ✅ Gratis advies ✅ Scherpe prijzen ✅ Professionele installatie | Bel: 046 202 1430",
  alternates: {
    canonical: "https://aircooffertelimburg.nl/producten"
  },
  keywords: [
    "airconditioning modellen",
    "airco kopen",
    "Daikin airco",
    "Mitsubishi airco",
    "Samsung airconditioning",
    "LG airco modellen",
    "split airco",
    "vloermodel airco",
    "designer airco",
    "premium airconditioning",
    "energiezuinige airco"
  ],
}

export default function ProductsPage() {
  const breadcrumbItems = [
    { label: "Producten", href: "/producten" }
  ]

  const organizationSchema = generateOrganizationSchema()

  // Groepeer producten per merk
  const productsByBrand = Object.entries(productCatalog).map(([brandSlug, products]) => ({
    brandSlug,
    brandName: products[0]?.brand || brandSlug,
    products
  }))

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      <div className="container py-12">
        <Breadcrumb items={breadcrumbItems} />
        
        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-3xl blur-3xl"></div>
          <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-5xl font-heading font-bold mb-6 gradient-text">
                  500+ Airconditioning Modellen
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Van basic modellen tot premium design units. Voor elke ruimte, budget en wens 
                  hebben wij de perfecte airconditioning. Alle modellen zonder prijzen - 
                  vraag een persoonlijke offerte aan.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Badge variant="secondary" className="px-4 py-2">
                    <Shield className="mr-2 h-4 w-4" />
                    Tot 10 jaar garantie
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2">
                    <Award className="mr-2 h-4 w-4" />
                    A-merken
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2">
                    <Leaf className="mr-2 h-4 w-4" />
                    A+++ energielabel
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2">
                    <Zap className="mr-2 h-4 w-4" />
                    Professionele installatie
                  </Badge>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/80 backdrop-blur p-6 rounded-xl text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                    <p className="text-sm text-muted-foreground">Modellen</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur p-6 rounded-xl text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">8</div>
                    <p className="text-sm text-muted-foreground">Premium merken</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur p-6 rounded-xl text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">A+++</div>
                    <p className="text-sm text-muted-foreground">Energie labels</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur p-6 rounded-xl text-center">
                    <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                    <p className="text-sm text-muted-foreground">Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="text-center p-6 hover-lift">
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="font-semibold mb-1">Premium Kwaliteit</h3>
            <p className="text-sm text-muted-foreground">Alleen A-merken</p>
          </Card>
          <Card className="text-center p-6 hover-lift">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="font-semibold mb-1">Scherpe Prijzen</h3>
            <p className="text-sm text-muted-foreground">Beste prijs-kwaliteit</p>
          </Card>
          <Card className="text-center p-6 hover-lift">
            <div className="text-4xl mb-3">🔧</div>
            <h3 className="font-semibold mb-1">Installatie Inclusief</h3>
            <p className="text-sm text-muted-foreground">Alles uit één hand</p>
          </Card>
          <Card className="text-center p-6 hover-lift">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-semibold mb-1">Snelle Levering</h3>
            <p className="text-sm text-muted-foreground">Vaak nog deze week</p>
          </Card>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 text-white mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              🎯 Niet zeker welke airco bij u past?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Onze experts adviseren u graag persoonlijk en maken een offerte op maat. 
              Geheel vrijblijvend en binnen 24 uur!
            </p>
            <Link href="/offerte">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                🚀 Gratis Persoonlijk Advies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Products by Brand */}
        <div className="space-y-16">
          {productsByBrand.map(({ brandSlug, brandName, products }) => (
            <div key={brandSlug}>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-2">
                    {brandName} Airconditioning
                  </h2>
                  <p className="text-muted-foreground">
                    {products.length} modellen beschikbaar
                  </p>
                </div>
                <Link href={`/merken/${brandSlug}`}>
                  <Button variant="outline">
                    Alle {brandName} modellen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product, index) => (
                  <Card key={product.id} className="group relative overflow-hidden hover-lift hover-glow h-full">
                    {(index === 0 && ['daikin', 'mitsubishi-electric', 'samsung'].includes(brandSlug)) && (
                      <Badge className="badge-popular">
                        <Star className="mr-1 h-3 w-3" />
                        POPULAIR
                      </Badge>
                    )}
                    
                    <CardHeader className="pb-4">
                      <div className="aspect-square relative mb-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
                        <Image
                          src={product.image}
                          alt={`${product.name} - ${product.brand} airconditioning`}
                          fill
                          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <Badge variant="outline" className="text-xs">
                          {product.brand}
                        </Badge>
                        <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                          {product.name}
                        </CardTitle>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Type:</span>
                          <div className="font-medium">{product.type}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Capaciteit:</span>
                          <div className="font-medium">{product.capacity}</div>
                        </div>
                        <div className="col-span-2">
                          <span className="text-muted-foreground">Energielabel:</span>
                          <Badge variant="secondary" className="ml-1">
                            {product.energyLabel}
                          </Badge>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Kenmerken:</h4>
                        <div className="flex flex-wrap gap-1">
                          {product.features.slice(0, 3).map((feature, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 space-y-3">
                        <div className="text-center p-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
                          <p className="text-sm font-medium text-gray-700">
                            💬 Vraag vrijblijvend een offerte aan
                          </p>
                        </div>
                        
                        <Link href="/offerte" className="block">
                          <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                            Offerte Aanvragen
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <CTAWithForm 
        title="Hulp Nodig bij het Kiezen van de Juiste Airco?" 
        description="Onze experts adviseren u graag persoonlijk over het beste model voor uw situatie. Geheel vrijblijvend!"
      />
    </>
  )
}