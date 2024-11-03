import { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog | Airco Offerte Limburg",
  description: "Lees onze laatste artikelen over airconditioning, klimaatbeheersing, energiebesparing en meer.",
}

const blogPosts = [
  {
    title: "Voordelen van Airconditioning",
    slug: "voordelen-van-airconditioning",
    excerpt: "Ontdek waarom steeds meer mensen kiezen voor een airco en wat de voordelen zijn voor uw woning of kantoor.",
    date: "2024-02-15",
    category: "Advies"
  },
  {
    title: "Energiebesparing met Moderne Airco's",
    slug: "energiebesparing-met-moderne-aircos",
    excerpt: "Leer hoe moderne airconditioners bijdragen aan energiebesparing en een lagere energierekening.",
    date: "2024-02-10",
    category: "Energie"
  },
  {
    title: "Onderhoudstips voor uw Airco",
    slug: "onderhoudstips-voor-uw-airco",
    excerpt: "Praktische tips voor het onderhouden van uw airconditioning voor optimale prestaties en een lange levensduur.",
    date: "2024-02-05",
    category: "Onderhoud"
  }
]

export default function BlogPage() {
  const breadcrumbItems = [
    { label: "Blog", href: "/blog" }
  ];

  return (
    <div className="container py-12">
      <Breadcrumb items={breadcrumbItems} />
      
      <h1 className="mb-8 text-4xl font-bold">Blog</h1>
      <p className="mb-12 text-xl text-muted-foreground">
        Ontdek de laatste inzichten en tips over airconditioning en klimaatbeheersing
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="h-full p-6 transition-shadow hover:shadow-lg">
              <div className="mb-4 text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString("nl-NL", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })}
              </div>
              <h2 className="mb-2 text-2xl font-semibold">{post.title}</h2>
              <div className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                {post.category}
              </div>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}