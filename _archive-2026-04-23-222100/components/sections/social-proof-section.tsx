"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, CheckCircle, TrendingUp, Users, Calendar } from "lucide-react"
import Link from "next/link"

const testimonials = [
  {
    id: 1,
    name: "Johan van der Berg",
    location: "Maastricht",
    rating: 5,
    date: "2 weken geleden",
    text: "Fantastische service! Binnen 2 dagen was alles geïnstalleerd. De monteurs waren zeer professioneel en netjes. Mijn energierekening is al met 30% gedaald!",
    verified: true,
    product: "Daikin Perfera 3.5kW"
  },
  {
    id: 2,
    name: "Maria Janssen",
    location: "Venlo",
    rating: 5,
    date: "1 maand geleden",
    text: "Eindelijk een betrouwbaar bedrijf gevonden! Transparante prijzen, geen verborgen kosten. De airco werkt perfect en is super stil.",
    verified: true,
    product: "Mitsubishi Heavy SRK35ZS-W"
  },
  {
    id: 3,
    name: "Peter Smeets",
    location: "Roermond",
    rating: 5,
    date: "3 weken geleden",
    text: "De beste investering van het jaar! Het huis blijft nu heerlijk koel en in de winter gebruik ik het als verwarming. Top advies gehad!",
    verified: true,
    product: "LG Deluxe DC09RQ"
  },
  {
    id: 4,
    name: "Linda Peeters",
    location: "Sittard",
    rating: 5,
    date: "5 dagen geleden",
    text: "Snelle reactie op mijn aanvraag en dezelfde week nog geïnstalleerd. Zeer tevreden met het resultaat en de service!",
    verified: true,
    product: "Samsung Wind-Free Elite"
  }
];

const stats = [
  { value: "98%", label: "Klanttevredenheid", icon: TrendingUp },
  { value: "2847+", label: "Installaties", icon: Users },
  { value: "4.9/5", label: "Gemiddelde score", icon: Star },
  { value: "<48u", label: "Installatietijd", icon: Calendar }
];

export function SocialProofSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        {/* Stats Bar */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Wat onze klanten zeggen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meer dan 2800 tevreden klanten in Limburg vertrouwen op onze expertise
          </p>
          
          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="font-semibold text-gray-700">Google Reviews</span>
              <span className="text-sm text-gray-600">4.9/5</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
              <Star className="w-5 h-5 text-green-500 fill-green-500" />
              <span className="font-semibold text-gray-700">Trustpilot</span>
              <span className="text-sm text-gray-600">9.2/10</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
              <CheckCircle className="w-5 h-5 text-blue-500" />
              <span className="font-semibold text-gray-700">Klantenvertellen</span>
              <span className="text-sm text-gray-600">98%</span>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Display */}
            <Card className="p-8 md:p-12 bg-white shadow-xl border-0 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16" />
              <Quote className="w-12 h-12 text-blue-200 mb-6" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {testimonials[activeTestimonial].name}
                    </h3>
                    <p className="text-gray-600 flex items-center gap-2 mt-1">
                      {testimonials[activeTestimonial].location}
                      {testimonials[activeTestimonial].verified && (
                        <span className="flex items-center gap-1 text-green-600 text-sm">
                          <CheckCircle className="w-4 h-4" />
                          Geverifieerd
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  "{testimonials[activeTestimonial].text}"
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Product: {testimonials[activeTestimonial].product}
                  </span>
                  <span className="text-sm text-gray-500">
                    {testimonials[activeTestimonial].date}
                  </span>
                </div>
              </div>
            </Card>

            {/* Testimonial Navigation */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveTestimonial(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? "w-8 bg-blue-600"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Ga naar review ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Mini Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => {
                  setActiveTestimonial(index);
                  setIsAutoPlaying(false);
                }}
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 line-clamp-3 text-sm mb-3">
                  "{testimonial.text}"
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Word ook een tevreden klant! Start vandaag nog.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/offerte">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Bekijk alle reviews
              </Button>
            </Link>
            <Link href="/offerte">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Start uw aanvraag
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}