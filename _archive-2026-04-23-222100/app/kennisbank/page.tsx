import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Kennisbank | Airco Offerte Limburg",
  description: "Ontdek alles wat u moet weten over airconditioning en klimaatbeheersing in onze uitgebreide kennisbank.",
}

const articles = [
  {
    title: "Alles over Klimaatbeheersing",
    description: "Een complete gids over moderne klimaatbeheersing voor uw woning of bedrijf",
    slug: "klimaatbeheersing",
    tags: ["klimaat", "comfort", "technologie"]
  },
  {
    title: "SCOP en SEER Waarden Uitgelegd",
    description: "Alles wat u moet weten over de energie-efficiëntie van airconditioners",
    slug: "scop-seer-waarden",
    tags: ["energie", "efficiëntie", "technologie", "duurzaamheid"]
  },
  {
    title: "Energiebesparende Tips voor uw Airconditioning",
    description: "Praktische tips om uw airconditioning energiezuinig te gebruiken",
    slug: "energiebesparing",
    tags: ["energie", "besparing", "kosten"]
  },
  {
    title: "Onderhoudstips voor Optimale Prestaties",
    description: "Essentiële tips voor het onderhoud van uw airconditioning",
    slug: "onderhoud-tips",
    tags: ["onderhoud", "prestaties", "levensduur"]
  }
]

export default function KennisbankPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">Kennisbank</h1>
      <p className="text-xl text-muted-foreground mb-12">
        Ontdek alles wat u moet weten over airconditioning en klimaatbeheersing
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {articles.map((article) => (
          <Link key={article.slug} href={`/kennisbank/${article.slug}`}>
            <Card className="h-full p-6 transition-colors hover:bg-muted/50">
              <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
              <p className="text-muted-foreground mb-4">{article.description}</p>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}