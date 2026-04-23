"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ContactForm } from "@/components/contact-form"
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Star, 
  Thermometer,
  TrendingUp,
  Shield,
  Euro,
  Home,
  AlertCircle
} from "lucide-react"

interface EnhancedCityContentProps {
  city: {
    name: string
    slug: string
    description: string
    province: string
    region: string
    inhabitants: string
    postcodes: string[]
  }
}

// Stad-specifieke data
const cityData: Record<string, {
  wijken: string[]
  installaties: number
  beschikbaarheid: number
  temperatuur: number
}> = {
  landgraaf: {
    wijken: ["Nieuwenhagen", "Schaesberg", "Ubach over Worms", "Rimburg"],
    installaties: 127,
    beschikbaarheid: 3,
    temperatuur: 26
  },
  maastricht: {
    wijken: ["Centrum", "Wyck", "Céramique", "Randwyck", "Heugem", "Heer"],
    installaties: 284,
    beschikbaarheid: 5,
    temperatuur: 27
  },
  heerlen: {
    wijken: ["Centrum", "Hoensbroek", "Heerlerheide", "Heerlerbaan"],
    installaties: 193,
    beschikbaarheid: 4,
    temperatuur: 26
  },
  sittard: {
    wijken: ["Centrum", "Geleen", "Born", "Limbrichterveld", "Stadbroek"],
    installaties: 156,
    beschikbaarheid: 2,
    temperatuur: 27
  }
}

// Merken voor showcase
const topBrands = [
  { name: "Daikin", logo: "🏆" },
  { name: "Mitsubishi", logo: "⭐" },
  { name: "Samsung", logo: "💎" },
  { name: "LG", logo: "✨" }
]

export default function EnhancedCityContent({ city }: EnhancedCityContentProps) {
  const [currentTemp, setCurrentTemp] = useState(25)
  const [squareMeters, setSquareMeters] = useState(120)
  
  const cityInfo = cityData[city.slug] || cityData.maastricht
  
  useEffect(() => {
    // Simuleer temperatuur updates
    setCurrentTemp(cityInfo.temperatuur)
  }, [cityInfo.temperatuur])

  return (
    <div className="animate-fade-in">
      {/* Urgentie Alert */}
      <Alert className="mb-6 border-orange-200 bg-orange-50">
        <AlertCircle className="h-4 w-4 text-orange-600" />
        <AlertDescription className="text-orange-800 font-medium">
          ⚡ Let op: Nog maar {cityInfo.beschikbaarheid} installatieplekken beschikbaar deze week in {city.name}!
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Hero Section met Live Data */}
          <Card className="overflow-hidden card-gradient">
            <div className="gradient-primary text-white p-8 relative">
              <div className="absolute top-4 right-4">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full">
                  <Thermometer className="h-5 w-5" />
                  <span className="font-bold">{currentTemp}°C</span>
                </div>
              </div>
              
              <h1 className="text-4xl font-heading font-bold mb-4">
                Professionele Airco Installatie in {city.name}
              </h1>
              <p className="text-xl opacity-90 mb-6">
                {city.description}
              </p>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur px-4 py-3 rounded-lg">
                  <Shield className="h-6 w-6" />
                  <div>
                    <p className="text-sm opacity-75">F-gassen</p>
                    <p className="font-bold">Gecertificeerd</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur px-4 py-3 rounded-lg">
                  <Home className="h-6 w-6" />
                  <div>
                    <p className="text-sm opacity-75">Installaties</p>
                    <p className="font-bold">{cityInfo.installaties}+ in {city.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur px-4 py-3 rounded-lg">
                  <Star className="h-6 w-6" />
                  <div>
                    <p className="text-sm opacity-75">Klantenscore</p>
                    <p className="font-bold">4.8/5 ⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Reviews Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                Wat klanten in {city.name} zeggen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-yellow-400">
                      {"⭐⭐⭐⭐⭐"}
                    </div>
                    <span className="text-sm text-muted-foreground">2 weken geleden</span>
                  </div>
                  <p className="italic">
                    "Uitstekende service! Binnen een dag geïnstalleerd. De monteurs waren zeer professioneel en netjes."
                  </p>
                  <p className="text-sm font-medium mt-2">- Jan P. uit {city.name}</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-yellow-400">
                      {"⭐⭐⭐⭐⭐"}
                    </div>
                    <span className="text-sm text-muted-foreground">1 maand geleden</span>
                  </div>
                  <p className="italic">
                    "Zeer tevreden met onze nieuwe Daikin airco. Koelt perfect en is fluisterstil!"
                  </p>
                  <p className="text-sm font-medium mt-2">- Maria K. uit {city.name}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Services met Prijzen */}
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6">
              Onze Airco Services in {city.name}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="hover-lift hover-glow relative">
                <Badge className="badge-popular">POPULAIR</Badge>
                <CardHeader>
                  <CardTitle className="text-xl">Basis Pakket</CardTitle>
                  <CardDescription>Perfect voor kleine ruimtes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Button className="w-full" variant="outline">
                      <Phone className="mr-2 h-4 w-4" />
                      Vraag prijs op
                    </Button>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      Split-unit airco (2.5kW)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      Professionele installatie
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      2 jaar garantie
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      Gratis WiFi module
                    </li>
                  </ul>
                  <Badge className="mt-4 bg-green-100 text-green-800">
                    10% Buurtkorting {city.name}
                  </Badge>
                </CardContent>
              </Card>

              <Card className="hover-lift hover-glow">
                <CardHeader>
                  <CardTitle className="text-xl">Comfort Pakket</CardTitle>
                  <CardDescription>Voor woonkamer & slaapkamer</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Button className="w-full" variant="outline">
                      <Phone className="mr-2 h-4 w-4" />
                      Gratis adviesgesprek
                    </Button>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      Split-unit airco (3.5kW)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      Fluisterstille werking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      3 jaar garantie
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      Smart home ready
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-lift hover-glow">
                <CardHeader>
                  <CardTitle className="text-xl">Premium Pakket</CardTitle>
                  <CardDescription>Complete klimaatoplossing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Button className="w-full gradient-primary">
                      <Home className="mr-2 h-4 w-4" />
                      Advies aan huis
                    </Button>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      Multi-split systeem (5kW+)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      Tot 3 binnenunits
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      5 jaar garantie
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      Jaarlijks onderhoud incl.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Populaire Wijken */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                We installeren in heel {city.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {cityInfo.wijken.map((wijk) => (
                  <Badge key={wijk} variant="secondary" className="justify-center py-2">
                    {wijk}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                En alle andere wijken in {city.name} en omgeving!
              </p>
            </CardContent>
          </Card>

          {/* Premium Merken */}
          <Card>
            <CardHeader>
              <CardTitle>Premium Airco Merken</CardTitle>
              <CardDescription>
                Wij werken alleen met A-merken voor de beste kwaliteit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {topBrands.map((brand) => (
                  <Link 
                    key={brand.name}
                    href={`/merken/${brand.name.toLowerCase()}`}
                    className="group"
                  >
                    <Card className="text-center p-4 hover-lift hover-glow">
                      <div className="text-4xl mb-2">{brand.logo}</div>
                      <p className="font-medium group-hover:text-blue-600 transition-colors">
                        {brand.name}
                      </p>
                    </Card>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Besparingscalculator */}
          <Card className="gradient-secondary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Euro className="h-5 w-5 text-green-600" />
                Bereken uw jaarlijkse besparing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Oppervlakte van uw woning (m²)
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="250"
                    value={squareMeters}
                    onChange={(e) => setSquareMeters(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>50m²</span>
                    <span className="font-bold text-foreground">{squareMeters}m²</span>
                    <span>250m²</span>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    Voor een woning van {squareMeters}m²
                  </p>
                  <p className="text-2xl font-bold text-green-600 mb-2">
                    Significante besparing mogelijk!
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Ontdek uw exacte besparing in een persoonlijk adviesgesprek
                  </p>
                </div>
                
                <Button className="w-full" size="lg">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Vraag gratis advies aan
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sticky Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky-sidebar space-y-6">
            {/* Contact Form Card */}
            <Card className="shadow-xl">
              <CardHeader className="gradient-primary text-white">
                <CardTitle>Direct een offerte?</CardTitle>
                <CardDescription className="text-blue-100">
                  Binnen 24 uur een vrijblijvende offerte
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ContactForm />
              </CardContent>
            </Card>

            {/* Direct Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Direct contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href="tel:0462021430"
                  className="flex items-center gap-3 p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors group"
                >
                  <Phone className="h-5 w-5 text-green-600 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium">Bel direct</p>
                    <p className="text-sm text-muted-foreground">046 202 1430</p>
                  </div>
                </a>
                
                <a
                  href="https://wa.me/31612345678"
                  className="flex items-center gap-3 p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors group"
                >
                  <MessageSquare className="h-5 w-5 text-green-600 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">Direct antwoord</p>
                  </div>
                </a>
                
                <a
                  href="mailto:info@staycoolairco.nl"
                  className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors group"
                >
                  <Mail className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium">E-mail</p>
                    <p className="text-sm text-muted-foreground">info@staycoolairco.nl</p>
                  </div>
                </a>
              </CardContent>
            </Card>

            {/* Werkgebied */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Ook actief in
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {["Maastricht", "Heerlen", "Sittard", "Landgraaf"]
                    .filter(c => c.toLowerCase() !== city.slug)
                    .map((nearbyCity) => (
                      <Link
                        key={nearbyCity}
                        href={`/steden/${nearbyCity.toLowerCase()}`}
                        className="block py-2 px-3 rounded hover:bg-gray-100 transition-colors"
                      >
                        {nearbyCity} →
                      </Link>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}