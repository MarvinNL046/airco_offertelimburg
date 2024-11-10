import { WithContext, Organization, Service, LocalBusiness, BreadcrumbList, FAQPage, Review, AggregateRating } from "schema-dts"

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
      postalCode: "6161",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+31462021430",
      email: "info@staycoolairco.nl",
      contactType: "customer service",
      availableLanguage: ["Dutch", "English"],
      areaServed: "Limburg"
    },
    sameAs: [
      "https://facebook.com/aircooffertelimburg",
      "https://instagram.com/aircooffertelimburg",
      "https://linkedin.com/company/aircooffertelimburg",
    ],
    areaServed: {
      "@type": "State",
      name: "Limburg",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1"
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      opens: "08:00",
      closes: "18:00"
    },
    priceRange: "€€",
    paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
    currenciesAccepted: "EUR"
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
      url: "https://aircooffertelimburg.nl"
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
      availability: "https://schema.org/InStock",
      areaServed: "Limburg",
      validFrom: new Date().toISOString()
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
    priceRange: "€€",
    image: "https://aircooffertelimburg.nl/logo.png",
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
      postalCode: "6161",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "51.2195",
      longitude: "5.9553"
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
    paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
    currenciesAccepted: "EUR",
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

export function generateFAQSchema(faqs: { question: string; answer: string }[]): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  }
}

export function generateReviewSchema(review: {
  author: string
  reviewBody: string
  reviewRating: number
  datePublished: string
}): WithContext<Review> {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.reviewRating,
      bestRating: "5",
      worstRating: "1"
    },
    author: {
      "@type": "Person",
      name: review.author
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished,
    itemReviewed: {
      "@type": "LocalBusiness",
      name: "Airco Offerte Limburg",
      image: "https://aircooffertelimburg.nl/logo.png",
      telephone: "+31462021430",
      url: "https://aircooffertelimburg.nl"
    }
  }
}

export function generateAggregateRatingSchema(): WithContext<AggregateRating> {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    itemReviewed: {
      "@type": "LocalBusiness",
      name: "Airco Offerte Limburg",
      image: "https://aircooffertelimburg.nl/logo.png",
      telephone: "+31462021430",
      url: "https://aircooffertelimburg.nl"
    },
    ratingValue: "4.8",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1"
  }
}