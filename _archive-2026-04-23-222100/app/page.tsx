import { Metadata } from "next"
import { HomePageV2 } from "@/components/pages/home-page-v2"
import { generateOrganizationSchema } from "@/lib/schema"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'Airco Installatie Limburg | €100 Winterkorting | Direct Geïnstalleerd',
  description: '⚡ #1 Airco specialist in Limburg ✓ 2847+ tevreden klanten ✓ Binnen 48u geïnstalleerd ✓ 5 jaar garantie ✓ A+++ airconditioners vanaf €1299 ✓ Bel: 046 202 1430',
  alternates: {
    canonical: 'https://aircooffertelimburg.nl'
  },
  openGraph: {
    title: 'Airco Installatie Limburg | €100 Winterkorting',
    description: 'Professionele airco installatie in heel Limburg. 5 jaar garantie, binnen 48 uur geïnstalleerd. Vraag nu gratis offerte aan!',
    images: ['/images/og-image.jpg'],
    type: 'website'
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
      
      <HomePageV2 />
    </>
  )
}
