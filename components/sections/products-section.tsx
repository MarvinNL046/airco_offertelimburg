"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ArrowRight, Zap, Leaf, Shield } from "lucide-react"
import { getAllProducts, Product } from "@/lib/product-catalog"

// Selecteer populaire producten uit verschillende merken
const getFeaturedProducts = (): Product[] => {
  const allProducts = getAllProducts()
  
  const featured = [
    allProducts.find(p => p.id === "daikin-perfera"),
    allProducts.find(p => p.id === "mitsubishi-msz-ln25"),
    allProducts.find(p => p.id === "samsung-wind-free-comfort"),
    allProducts.find(p => p.id === "lg-artcool-mirror"),
    allProducts.find(p => p.id === "toshiba-haori-zwart"),
    allProducts.find(p => p.id === "gree-clivia-wit"),
  ].filter(Boolean) as Product[]
  
  return featured
}

export function ProductsSection() {
  const featuredProducts = getFeaturedProducts()

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-4 gradient-text">
            Populaire Airconditioning Modellen
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Ontdek onze bestsellers van topmerken. Elk model werd geselecteerd op basis van kwaliteit, 
            energiezuinigheid en klanttevredenheid.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="px-4 py-2">
              <Shield className="mr-2 h-4 w-4" />
              Tot 10 jaar garantie
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              <Leaf className="mr-2 h-4 w-4" />
              A+++ energielabel
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              <Zap className="mr-2 h-4 w-4" />
              Fluisterstil
            </Badge>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product, index) => (
            <Card key={product.id} className="group relative overflow-hidden hover-lift hover-glow h-full">
              {index < 2 && (
                <Badge className="badge-popular">
                  <Star className="mr-1 h-3 w-3" />
                  BESTSELLER
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
                  <div>
                    <span className="text-muted-foreground">Energielabel:</span>
                    <Badge variant="secondary" className="ml-1">
                      {product.energyLabel}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Belangrijkste kenmerken:</h4>
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
                      🎯 Vraag vrijblijvend een persoonlijke offerte aan
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

        {/* View All Products CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Bekijk Alle 500+ Airconditioning Modellen
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Van basic modellen tot premium design units. Wij hebben voor elke ruimte, 
              budget en wens de perfecte airconditioning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/merken">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 min-w-[200px]">
                  Bekijk Alle Merken
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/offerte">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 min-w-[200px]">
                  Gratis Advies Aanvragen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}