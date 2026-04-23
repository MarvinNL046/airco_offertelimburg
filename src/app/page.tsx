import { HeroWithPricing } from "@/components/hero-with-pricing";
import { PriceTable } from "@/components/price-table";
import { PriceFactors } from "@/components/price-factors";
import { HowItWorks } from "@/components/how-it-works";
import { LeadForm } from "@/components/lead-form";
import { OfferteChecklist } from "@/components/offerte-checklist";
import { Faq } from "@/components/faq";
import { OutboundLinks } from "@/components/outbound-links";
import { siteConfig } from "@/config/site.config";
import { faqJsonLd } from "@/lib/json-ld";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${siteConfig.domain}`;

function serviceWithAggregateOffer() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: siteConfig.siteName,
    serviceType: siteConfig.serviceTypeLabel,
    description: siteConfig.metaDescription,
    provider: {
      "@type": "Organization",
      name: siteConfig.siteName,
      url: siteUrl,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Limburg",
      containedInPlace: { "@type": "Country", name: "Netherlands" },
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: "600",
      highPrice: "5400",
      offerCount: "3",
      availability: "https://schema.org/InStock",
    },
    url: siteUrl,
  };
}

export default function HomePage() {
  const serviceLd = serviceWithAggregateOffer();
  const faqLd = faqJsonLd(siteConfig);
  return (
    <>
      <HeroWithPricing />
      <PriceTable />
      <PriceFactors />
      <HowItWorks />
      <LeadForm />
      <OfferteChecklist />
      <Faq />
      <OutboundLinks />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </>
  );
}
