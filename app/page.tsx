import { Metadata } from "next"
import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { ServicesSection } from "@/components/sections/services-section"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { CTASection } from "@/components/sections/cta-section"
import { CTABanner } from "@/components/sections/cta-banner"
import { generateOrganizationSchema } from "@/lib/schema"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'Airco Specialist Limburg | #1 in Airconditioning ✓',
  description: 'Dé airco specialist van Limburg! Professionele airco installatie voor woning en bedrijf. ✓ Gratis offerte ✓ Erkend installateur ✓ Alle topmerken ✓ 5 jaar garantie. Bel: 046 202 1430',
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
        <TestimonialsSection />
        <CTASection />
        <CTABanner theme="dark" />
      </main>
    </>
  )
}