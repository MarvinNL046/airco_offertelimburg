import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "Luxe Villa Maastricht",
    description: "Complete klimaatbeheersing met multi-split systeem",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
    type: "Residentieel"
  },
  {
    title: "Kantoorpand Venlo",
    description: "VRF-systeem voor 20+ werkplekken",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    type: "Commercieel"
  },
  {
    title: "Hotelkamers Valkenburg",
    description: "Airconditioning voor 40 hotelkamers",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800",
    type: "Horeca"
  }
]

export function ProjectsSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Recente Projecten</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Bekijk enkele van onze recent uitgevoerde projecten
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="mb-2">
                  <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-600">
                    {project.type}
                  </span>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}