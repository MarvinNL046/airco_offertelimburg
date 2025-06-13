import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import brandsData from "@/data/brands.json"
import { CTAWithForm } from "@/components/sections/cta-with-form"
import { generateOrganizationSchema } from "@/lib/schema"
import Script from "next/script"
import { Shield, Award, Leaf, Zap, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "🏆 TOP 8 Airco Merken 2025 | Welke Past Bij U? (Test)",
  description: "⭐ Daikin vs Mitsubishi vs Samsung? Ontdek het BESTE merk voor UW situatie! ✅ Onafhankelijk advies ✅ Laagste prijsgarantie ✅ 10 jaar garantie mogelijk",
  keywords: [
    "beste airco merk 2025",
    "airco merken vergelijken",
    "Daikin of Mitsubishi",
    "Samsung airco review",
    "LG airco ervaringen",
    "Tosot prijs kwaliteit",
    "Gree airco test",
    "airconditioning advies",
    "welke airco kiezen",
    "airco merk verschillen"
  ],
}

export default function BrandsPage() {
  const breadcrumbItems = [
    { label: "Merken", href: "/merken" }
  ]

  const organizationSchema = generateOrganizationSchema()

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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-3xl blur-3xl"></div>
          <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-5xl font-heading font-bold mb-6 gradient-text">
                  Premium Airco Merken
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Wij werken uitsluitend met A-merken voor optimale kwaliteit, betrouwbaarheid en de beste garantievoorwaarden.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Badge variant="secondary" className="px-4 py-2">
                    <Shield className="mr-2 h-4 w-4" />
                    Tot 10 jaar garantie
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2">
                    <Award className="mr-2 h-4 w-4" />
                    Topkwaliteit
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2">
                    <Leaf className="mr-2 h-4 w-4" />
                    Energiezuinig
                  </Badge>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/80 backdrop-blur p-6 rounded-xl text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">8+</div>
                    <p className="text-sm text-muted-foreground">Premium merken</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur p-6 rounded-xl text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                    <p className="text-sm text-muted-foreground">Modellen</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur p-6 rounded-xl text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">A+++</div>
                    <p className="text-sm text-muted-foreground">Energie labels</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur p-6 rounded-xl text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                    <p className="text-sm text-muted-foreground">Klanttevredenheid</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <Card className="text-center p-6 hover-lift">
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="font-semibold mb-1">8+ Topmerken</h3>
            <p className="text-sm text-muted-foreground">Alleen A-merken</p>
          </Card>
          <Card className="text-center p-6 hover-lift">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-semibold mb-1">500+ Modellen</h3>
            <p className="text-sm text-muted-foreground">Ruime keuze</p>
          </Card>
          <Card className="text-center p-6 hover-lift">
            <div className="text-4xl mb-3">🌿</div>
            <h3 className="font-semibold mb-1">Duurzaam</h3>
            <p className="text-sm text-muted-foreground">Milieuvriendelijk</p>
          </Card>
          <Card className="text-center p-6 hover-lift">
            <div className="text-4xl mb-3">✅</div>
            <h3 className="font-semibold mb-1">Gecertificeerd</h3>
            <p className="text-sm text-muted-foreground">F-gassen erkend</p>
          </Card>
        </div>

        {/* Brands Grid */}
        <h2 className="text-3xl font-heading font-bold mb-8">Ons Merkenportfolio</h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {brandsData.brands.map((brand, index) => (
            <Link key={brand.slug} href={`/merken/${brand.slug}`} className="group">
              <Card className="h-full hover-lift hover-glow relative overflow-hidden">
                {index < 3 && (
                  <Badge className="badge-popular">POPULAIR</Badge>
                )}
                <CardHeader className="pb-4">
                  <div className="h-24 flex items-center justify-center mb-4">
                    {brand.image ? (
                      <Image
                        src={brand.image}
                        alt={`${brand.name} logo`}
                        width={120}
                        height={60}
                        className="object-contain"
                      />
                    ) : (
                      <div className="text-5xl">
                        {index === 0 ? "🏆" : index === 1 ? "⭐" : index === 2 ? "💎" : "✨"}
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-xl gradient-text group-hover:scale-105 transition-transform">
                    {brand.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {brand.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {brand.features.slice(0, 2).map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-600 group-hover:underline">
                      Ontdek modellen
                    </span>
                    <ArrowRight className="h-4 w-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Why Choose Section */}
      <div className="bg-gradient-secondary rounded-3xl p-8 md:p-12 my-16">
        <h2 className="text-3xl font-heading font-bold mb-8 text-center">
          Waarom Kiezen voor Onze Merken?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">Bewezen Kwaliteit</h3>
            <p className="text-sm text-muted-foreground">
              Alleen merken met jarenlange ervaring en uitstekende reviews
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Leaf className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-semibold mb-2">Energiezuinig</h3>
            <p className="text-sm text-muted-foreground">
              Alle modellen met A+++ energielabel voor lagere energiekosten
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="font-semibold mb-2">Uitgebreide Garantie</h3>
            <p className="text-sm text-muted-foreground">
              Tot 10 jaar fabrieksgarantie op geselecteerde modellen
            </p>
          </div>
        </div>
      </div>

      <CTAWithForm 
        title="Advies over het Beste Merk voor uw Situatie?" 
        description="Onze experts helpen u graag bij het kiezen van de juiste airconditioning"
      />
    </>
  )
}