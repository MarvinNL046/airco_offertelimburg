"use client"

import { ContactForm } from "@/components/forms/contact-form"
import { Card } from "@/components/ui/card"

export function HeroSection() {
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
              id="hero-heading" 
              className="text-4xl font-bold tracking-tight sm:text-6xl"
              tabIndex={-1}
            >
              Professionele Airconditioning in Limburg
            </h1>
            <p className="mt-6 text-xl text-blue-100">
              Geniet van optimaal klimaatcomfort het hele jaar door. 
              Vakkundige installatie met 5 jaar garantie.
            </p>
            <div 
              className="mt-8 flex items-center gap-4 text-sm"
              role="list"
              aria-label="Voordelen"
            >
              {["5 jaar garantie", "24/7 service", "Gratis advies"].map((item) => (
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
                <p className="text-sm text-gray-600">Vanaf</p>
                <p className="text-4xl font-bold text-blue-600">€999,-</p>
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