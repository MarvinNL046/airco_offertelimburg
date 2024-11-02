import { Metadata } from "next"
import { notFound } from "next/navigation"
import diensten from "@/data/diensten.json"
import citiesData from "@/data/steden.json"

type Props = {
  params: {
    dienstSlug: string
    stadSlug: string
  }
}

export function generateStaticParams() {
  const allCities = citiesData.limburg.reduce((acc: string[], municipality) => {
    return [...acc, ...municipality.places]
  }, [])

  const paths = []
  for (const dienst of diensten) {
    for (const city of allCities) {
      paths.push({
        dienstSlug: dienst.slug,
        stadSlug: city.toLowerCase(),
      })
    }
  }
  return paths
}

export function generateMetadata({ params }: Props): Metadata {
  const dienst = diensten.find((d) => d.slug === params.dienstSlug)
  const city = params.stadSlug

  if (!dienst) {
    return {}
  }

  const title = `${dienst.title} in ${city} | Airco Offerte Limburg`
  const description = `Professionele ${dienst.title.toLowerCase()} in ${city}. ✓ Erkend ✓ Gecertificeerd ✓ Vakkundig. Vraag nu een vrijblijvende offerte aan!`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  }
}

export default function DienstStadPage({ params }: Props) {
  const dienst = diensten.find((d) => d.slug === params.dienstSlug)
  const city = params.stadSlug

  if (!dienst) {
    notFound()
  }

  return (
    <div className="container py-12">
      <h1 className="mb-8 text-4xl font-bold tracking-tight">
        {dienst.title} in {city}
      </h1>
      <div className="prose prose-lg max-w-none">
        <p className="lead">
          Op zoek naar professionele {dienst.title.toLowerCase()} in {city}? 
          Wij zijn uw betrouwbare partner voor alle airconditioning diensten in de regio {city}.
        </p>
        <h2>Onze {dienst.title} Diensten in {city}</h2>
        <p>{dienst.description}</p>
        <h2>Waarom Kiezen voor Onze {dienst.title} in {city}?</h2>
        <ul>
          {dienst.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}