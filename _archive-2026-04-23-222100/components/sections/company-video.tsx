"use client"

import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CompanyVideoSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ontdek Ons Bedrijf</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bekijk onze bedrijfsvideo en leer meer over hoe wij de beste airconditioning oplossingen in Limburg bieden.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
            <iframe 
              src="https://www.youtube.com/embed/9m-jkGgfLog" 
              title="Stay Cool Airco bedrijfsvideo" 
              className="absolute inset-0 w-full h-full"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>

          <div className="mt-8 text-center">
            <p className="mb-4 text-gray-700">
              Bezoek onze hoofdwebsite voor meer informatie over onze diensten en projecten.
            </p>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="https://staycoolairco.nl" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                Bezoek Stay Cool Airco
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
