import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import { Book } from "lucide-react"
import articles from "@/data/kennisbank.json"

export const metadata: Metadata = {
  title: "Kennisbank | Airco Offerte Limburg",
  description: "Ontdek alles wat u moet weten over airconditioning en klimaatbeheersing in onze uitgebreide kennisbank.",
}

export default function KennisbankPage() {
  const breadcrumbItems = [
    { label: "Kennisbank", href: "/kennisbank" }
  ];

  return (
    <div className="container py-12">
      <Breadcrumb items={breadcrumbItems} />
      
      <h1 className="mb-8 text-4xl font-bold">Kennisbank</h1>
      <p className="mb-12 text-xl text-muted-foreground">
        Ontdek alles wat u moet weten over airconditioning en klimaatbeheersing
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.articles.map((article) => (
          <Link key={article.slug} href={`/kennisbank/${article.slug}`}>
            <Card className="h-full transition-colors hover:bg-muted/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-5 w-5 text-blue-600" />
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{article.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}