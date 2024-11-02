import { LocalBusiness, WithContext } from "schema-dts"

export function generateLocalBusinessSchema(city?: string): WithContext<LocalBusiness> {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Airco Offerte Limburg - ${city || "Limburg"}`,
    description: `Professionele airconditioning installatie en onderhoud${
      city ? ` in ${city}` : " in Limburg"
    }. Erkend en gecertificeerd installateur.`,
    url: `https://aircooffertelimburg.nl${city ? `/steden/${city.toLowerCase()}` : ""}`,
    telephone: "+31462021430",
    email: "info@staycoolairco.nl",
    areaServed: {
      "@type": "State",
      name: "Limburg",
      containsPlace: city
        ? {
            "@type": "City",
            name: city,
          }
        : undefined,
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
    image: "https://aircooffertelimburg.nl/images/logo.png",
    sameAs: [
      "https://facebook.com/aircooffertelimburg",
      "https://instagram.com/aircooffertelimburg",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
    },
  }
}