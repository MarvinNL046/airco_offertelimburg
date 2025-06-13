"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ContactForm } from "@/components/forms/contact-form"
import { Phone } from "lucide-react"
import { markAsLCP, prefetchCriticalPaths } from "@/lib/performance"

export function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    // Optimize the LCP element
    if (headingRef.current) {
      markAsLCP(headingRef.current);
    }
    
    // Prefetch critical navigation paths
    prefetchCriticalPaths();
  }, []);
  
  return (
    <section 
      className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 py-20 text-white"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-grid-white/[0.2] bg-grid-8" aria-hidden="true" />
      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center">
            <h1 
              ref={headingRef}
              id="hero-heading" 
              className="text-4xl font-bold tracking-tight sm:text-6xl"
              tabIndex={-1}
              style={{ contentVisibility: "auto" }}
              data-lcp="true"
            >
              Klimaatbeheersing & Airco in Limburg
            </h1>
            <p className="mt-6 text-xl text-blue-100">
              Geniet van optimaal klimaatcomfort het hele jaar door. 
              Vakkundige installatie met 5 jaar garantie.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/offerte">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Offerte Aanvragen
                </Button>
              </Link>
              <Link href="tel:0462021430">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20">
                  <Phone className="mr-2 h-5 w-5" />
                  Bel 046 202 1430
                </Button>
              </Link>
            </div>
            <div 
              className="mt-8 flex flex-wrap items-center gap-4 text-sm"
              role="list"
              aria-label="Voordelen"
            >
              {["5 jaar garantie", "Uitstekende service", "Gratis advies"].map((item) => (
                <div 
                  key={item} 
                  className="flex items-center gap-2"
                  role="listitem"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Card className="p-6 bg-white/95 backdrop-blur">
              <div className="text-center mb-6">
                <p className="text-sm text-gray-600">Vraag nu een</p>
                <p className="text-3xl font-bold text-blue-600">Gratis Offerte</p>
                <p className="text-sm text-gray-600">Complete installatie</p>
              </div>
              <ContactForm />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
