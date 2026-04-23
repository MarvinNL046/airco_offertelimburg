"use client"

import { HeroSectionV2 } from "@/components/sections/hero-section-v2"
import { SocialProofSection } from "@/components/sections/social-proof-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { TrustSignalsSection } from "@/components/sections/trust-signals-section"
import { ServicesSection } from "@/components/sections/services-section"
import { FAQSection } from "@/components/sections/faq-section"
import { CTASection } from "@/components/sections/cta-section"
import { FloatingCTA } from "@/components/floating-cta"
import { MainLayout } from "@/components/layout/main-layout"

export function HomePageV2() {
  return (
    <MainLayout>
      {/* Modern Hero with Video Background */}
      <HeroSectionV2 />
      
      {/* Social Proof & Reviews */}
      <SocialProofSection />
      
      {/* Trust Signals & Certifications */}
      <TrustSignalsSection />
      
      {/* Features & Benefits */}
      <FeaturesSection />
      
      {/* Services Overview */}
      <ServicesSection />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Final CTA */}
      <CTASection />
      
      {/* Floating CTAs & Chat */}
      <FloatingCTA />
    </MainLayout>
  )
}