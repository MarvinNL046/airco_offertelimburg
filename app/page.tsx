import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { ServicesSection } from "@/components/sections/services-section"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { CTASection } from "@/components/sections/cta-section"
import { CTABanner } from "@/components/sections/cta-banner"

export default function HomePage() {
  return (
    <main>
      <CTABanner theme="light" />
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <CTABanner theme="dark" />
    </main>
  )
}