import { WithContext, Organization, Service, LocalBusiness, BreadcrumbList } from "schema-dts"

export function generateOrganizationSchema(): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Airco Offerte Limburg",
    url: "https://aircooffertelimburg.nl",
    logo: "https://aircooffertelimburg.nl/logo.png",
    description: "Professionele airconditioning installatie en onderhoud in Limburg. Erkend en gecertificeerd installateur.",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Limburg",
      addressCountry: "NL",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+31462021430",
      email: "info@staycoolairco.nl",
      contactType: "customer service",
      availableLanguage: "Dutch",
    },
    sameAs: [
      "https://facebook.com/aircooffertelimburg",
      "https://instagram.com/aircooffertelimburg",
    ],
    areaServed: {
      "@type": "State",
      name: "Limburg",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
    },
  }
}

export function generateServiceSchema(service: {
  name: string
  description: string
  price: { from: number; currency: string }
  image?: string
}): WithContext<Service> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Airco Offerte Limburg",
    },
    areaServed: {
      "@type": "State",
      name: "Limburg",
    },
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: service.price.from,
        priceCurrency: service.price.currency,
        minPrice: service.price.from,
      },
    },
    image: service.image,
    termsOfService: "https://aircooffertelimburg.nl/voorwaarden",
    serviceType: "Airconditioning Service",
  }
}

export function generateLocalBusinessSchema(city: string): WithContext<LocalBusiness> {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Airco Offerte Limburg - ${city}`,
    description: `Professionele airconditioning installatie en onderhoud in ${city}. Erkend en gecertificeerd installateur.`,
    url: `https://aircooffertelimburg.nl/steden/${city.toLowerCase()}`,
    telephone: "+31462021430",
    email: "info@staycoolairco.nl",
    areaServed: {
      "@type": "City",
      name: city,
      containedIn: {
        "@type": "State",
        name: "Limburg",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "Limburg",
      addressCountry: "NL",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
    priceRange: "€€",
    paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
    currenciesAccepted: "EUR",
    hasMap: `https://www.google.com/maps?q=${encodeURIComponent(`Airco Offerte Limburg ${city}`)}`,
  }
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://aircooffertelimburg.nl${item.item}`,
    })),
  }
}