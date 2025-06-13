import { Organization, WithContext, Service, LocalBusiness, BreadcrumbList, Article, FAQPage, Product } from "schema-dts"

export function generateOrganizationSchema(): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Klimaatbeheersing & Airco Limburg",
    url: "https://aircooffertelimburg.nl",
    logo: "https://aircooffertelimburg.nl/icon-512.png",
    description: "Dé specialist in klimaatbeheersing en airco in Limburg. Installatie, onderhoud en reparatie voor woningen en bedrijven.",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Limburg",
      addressCountry: "NL",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+31-46-202-1430",
      contactType: "customer service",
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
    "@id": "https://aircooffertelimburg.nl/#organization"
  }
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  price: string;
}): WithContext<Service> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Klimaatbeheersing & Airco Limburg",
      "@id": "https://aircooffertelimburg.nl/#organization",
    },
    areaServed: {
      "@type": "State",
      name: "Limburg",
    },
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: service.price,
        priceCurrency: "EUR",
      },
    },
  }
}

export function generateLocalBusinessSchema(city: string): WithContext<LocalBusiness> {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Klimaatbeheersing & Airco Limburg - ${city}`,
    description: `Professionele klimaatbeheersing en airconditioning installatie in ${city}. LAAGSTE prijsgarantie. Erkend en gecertificeerd installateur.`,
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
    priceRange: "€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00"
      }
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127"
    }
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

export function generateArticleSchema(article: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url: string;
}): WithContext<Article> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Organization",
      name: "Klimaatbeheersing & Airco Limburg",
      "@id": "https://aircooffertelimburg.nl/#organization",
    },
    publisher: {
      "@type": "Organization",
      name: "Klimaatbeheersing & Airco Limburg",
      "@id": "https://aircooffertelimburg.nl/#organization",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
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
        text: faq.answer,
      },
    })),
  }
}

export function generateProductSchema(product: {
  name: string;
  description: string;
  brand: string;
  image?: string[];
  offers?: {
    price: string;
    availability: string;
  };
}): WithContext<Product> {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    image: product.image,
    offers: product.offers ? {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: product.offers.price,
      availability: product.offers.availability || "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Klimaatbeheersing & Airco Limburg",
        "@id": "https://aircooffertelimburg.nl/#organization",
      },
    } : undefined,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "45",
    },
  }
}