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
  title: 'Klimaatbeheersing & Airco Limburg | GRATIS Offerte Binnen 24u ✓',
  description: 'Zoekt u airco of klimaatbeheersing in Limburg? ✓ LAAGSTE prijsgarantie ✓ Vakkundige installatie ✓ 5 jaar garantie ✓ GRATIS offerte. Bel direct: 046 202 1430!',
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
