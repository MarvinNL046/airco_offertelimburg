import { Metadata } from "next"
import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { ServicesSection } from "@/components/sections/services-section"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { CTASection } from "@/components/sections/cta-section"
import { CTABanner } from "@/components/sections/cta-banner"
import { CompanyVideoSection } from "@/components/sections/company-video"
import { generateOrganizationSchema } from "@/lib/schema"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'Airco Nodig? 🌡️ Direct KOEL in Limburg | Nu -15% Korting',
  description: '⚡ VANDAAG geïnstalleerd mogelijk! 500+ airco\'s in Maastricht, Heerlen & Sittard ✓ Gratis advies aan huis ✓ Eerlijke prijzen ✓ Bel NU: 046 202 1430',
  alternates: {
    canonical: 'https://aircooffertelimburg.nl'
  }
}

export default function HomePage() {
  const organizationSchema = generateOrganizationSchema()

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      <main>
        <CTABanner theme="light" />
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <CompanyVideoSection />
        <TestimonialsSection />
        <CTASection />
        <CTABanner theme="dark" />
      </main>
    </>
  )
}
