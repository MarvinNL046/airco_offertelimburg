"use client"

import { Card } from "@/components/ui/card"
import { Shield, Award, Zap, ThumbsUp, Clock, Users, BadgeCheck, Wrench } from "lucide-react"

const guarantees = [
  {
    icon: Shield,
    title: "5 Jaar Garantie",
    description: "Volledige garantie op installatie en apparatuur",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: Clock,
    title: "48 Uur Service",
    description: "Installatie binnen 48 uur na goedkeuring mogelijk",
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    icon: ThumbsUp,
    title: "Tevredenheidsgarantie",
    description: "Niet tevreden? 30 dagen bedenktijd",
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    icon: Zap,
    title: "Energiebesparing",
    description: "Tot 40% besparing op energiekosten gegarandeerd",
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  }
];

const certifications = [
  { name: "F-Gassen Certificaat", icon: "🏆" },
  { name: "VCA Gecertificeerd", icon: "✅" },
  { name: "STEK Erkend", icon: "🛡️" },
  { name: "ISO 9001", icon: "📜" }
];

const brands = [
  { name: "Daikin", displayName: "DAIKIN" },
  { name: "Mitsubishi", displayName: "MITSUBISHI" },
  { name: "LG", displayName: "LG" },
  { name: "Samsung", displayName: "SAMSUNG" },
  { name: "Panasonic", displayName: "Panasonic" },
  { name: "Toshiba", displayName: "TOSHIBA" }
];

export function TrustSignalsSection() {
  return (
    <>
      {/* Guarantees Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Onze IJzersterke Garanties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We staan 100% achter onze service en producten
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-all duration-300 border-0 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${guarantee.bgColor} mb-4`}>
                    <guarantee.icon className={`w-8 h-8 ${guarantee.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {guarantee.title}
                  </h3>
                  <p className="text-gray-600">
                    {guarantee.description}
                  </p>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-500/20 transition-all duration-300" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Partners */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          {/* Certifications */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <BadgeCheck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Erkend & Gecertificeerd
              </h3>
              <p className="text-gray-600">
                Alle benodigde certificaten voor professionele airco installatie
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="text-4xl mb-2">{cert.icon}</div>
                  <p className="text-sm font-semibold text-gray-800">{cert.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Brand Partners */}
          <div>
            <div className="text-center mb-8">
              <Wrench className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Officieel Dealer van Premium Merken
              </h3>
              <p className="text-gray-600">
                Directe samenwerking met de beste airco fabrikanten
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
                {brands.map((brand, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center text-gray-400 hover:text-gray-700 transition-all duration-300"
                  >
                    <div className="text-lg font-bold tracking-wider">
                      {brand.displayName}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trust Stats Banner */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <Users className="w-8 h-8 mx-auto mb-2 opacity-80" />
                <div className="text-3xl font-bold">12+</div>
                <div className="text-blue-100">Ervaren monteurs</div>
              </div>
              <div>
                <Clock className="w-8 h-8 mx-auto mb-2 opacity-80" />
                <div className="text-3xl font-bold">8 jaar</div>
                <div className="text-blue-100">Ervaring</div>
              </div>
              <div>
                <Award className="w-8 h-8 mx-auto mb-2 opacity-80" />
                <div className="text-3xl font-bold">2847+</div>
                <div className="text-blue-100">Succesvolle installaties</div>
              </div>
              <div>
                <Shield className="w-8 h-8 mx-auto mb-2 opacity-80" />
                <div className="text-3xl font-bold">100%</div>
                <div className="text-blue-100">Verzekerd & erkend</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}