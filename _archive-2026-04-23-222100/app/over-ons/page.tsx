import { Metadata } from 'next';
import { Building2, Award, Users2, ThumbsUp } from 'lucide-react';
import { Breadcrumb } from "@/components/navigation/breadcrumb";

export const metadata: Metadata = {
  title: 'Over Ons | Airco Offerte Limburg',
  description: 'Leer meer over Airco Offerte Limburg - uw betrouwbare partner voor airconditioning installatie, onderhoud en reparatie in heel Limburg.',
};

const features = [
  {
    icon: Building2,
    title: 'Ervaren Specialisten',
    description: 'Meer dan 10 jaar ervaring in airconditioning installatie en onderhoud.'
  },
  {
    icon: Award,
    title: 'Gecertificeerd',
    description: 'Volledig gecertificeerd en erkend voor alle airconditioning werkzaamheden.'
  },
  {
    icon: Users2,
    title: 'Klanttevredenheid',
    description: 'Hoogste prioriteit voor klanttevredenheid en service.'
  },
  {
    icon: ThumbsUp,
    title: 'Garantie',
    description: 'Uitgebreide garantie op al onze installaties en werkzaamheden.'
  }
];

export default function AboutPage() {
  const breadcrumbItems = [
    { label: "Over Ons", href: "/over-ons" }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumb items={breadcrumbItems} />
      
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6">Over Airco Offerte Limburg</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            Airco Offerte Limburg is uw betrouwbare partner voor alle airconditioning oplossingen in de provincie Limburg. 
            Met jarenlange ervaring en expertise staan wij klaar om u te voorzien van het perfecte klimaatsysteem voor uw woning of bedrijf.
          </p>
          <p className="text-lg mb-4">
            Wij onderscheiden ons door onze persoonlijke aanpak, vakkundig advies en professionele installatie. 
            Ons team van gecertificeerde monteurs staat garant voor kwaliteit en betrouwbaarheid.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div key={feature.title} className="bg-white p-6 rounded-lg shadow-lg">
              <Icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          );
        })}
      </section>

      <section className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6">Onze Missie</h2>
        <p className="text-lg mb-4">
          Wij streven ernaar om hoogwaardige airconditioning oplossingen toegankelijk te maken voor iedereen in Limburg. 
          Door onze expertise te combineren met persoonlijke service, zorgen we ervoor dat elk project succesvol wordt afgerond.
        </p>
        <p className="text-lg">
          Of het nu gaat om een nieuwe installatie, regelmatig onderhoud of een spoedige reparatie, 
          u kunt rekenen op onze professionaliteit en toewijding aan kwaliteit.
        </p>
      </section>
    </div>
  );
}