"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronDown, HelpCircle, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const faqCategories = [
  {
    category: "Kosten & Prijzen",
    icon: "💰",
    questions: [
      {
        question: "Hoeveel kost een airco installatie?",
        answer: "De prijs van een complete airco installatie begint vanaf €1.299,- inclusief montage. De exacte prijs hangt af van het vermogen, het merk en de complexiteit van de installatie. Vraag een gratis offerte aan voor een exacte prijs op maat.",
        cta: true
      },
      {
        question: "Zijn er verborgen kosten?",
        answer: "Nee, wij werken met transparante all-in prijzen. De offerte bevat alle kosten: het apparaat, montage, materialen en BTW. Geen verrassingen achteraf!"
      },
      {
        question: "Kan ik gebruik maken van subsidie?",
        answer: "Ja! Voor energiezuinige airconditioners (A+++ label) kunt u vaak subsidie aanvragen. Wij helpen u graag met de aanvraag en informatie over actuele subsidieregelingen."
      }
    ]
  },
  {
    category: "Installatie & Service",
    icon: "🔧",
    questions: [
      {
        question: "Hoe lang duurt de installatie?",
        answer: "Een standaard installatie duurt 4-6 uur. Voor meerdere units rekenen we ongeveer 3-4 uur per unit. We kunnen binnen 48 uur na goedkeuring installeren."
      },
      {
        question: "Moet ik thuis zijn tijdens installatie?",
        answer: "Ja, het is belangrijk dat u of een vertegenwoordiger aanwezig is. Onze monteurs bespreken de exacte plaatsing en testen samen met u het systeem na installatie."
      },
      {
        question: "Wat gebeurt er na de installatie?",
        answer: "Na installatie krijgt u een uitgebreide uitleg over de bediening, onderhoudstips en garantievoorwaarden. Ook ontvangt u alle documentatie digitaal."
      }
    ]
  },
  {
    category: "Technisch & Onderhoud",
    icon: "⚡",
    questions: [
      {
        question: "Hoeveel stroom verbruikt een airco?",
        answer: "Moderne airconditioners zijn zeer zuinig. Een gemiddelde unit verbruikt 0.5-1.5 kWh, vergelijkbaar met een stofzuiger. Met een A+++ label bespaart u tot 40% op energiekosten."
      },
      {
        question: "Hoe vaak moet een airco onderhouden worden?",
        answer: "Wij adviseren jaarlijks onderhoud voor optimale prestaties en levensduur. Dit voorkomt storingen en houdt het energieverbruik laag. Onderhoudscontracten zijn beschikbaar vanaf €149,- per jaar."
      },
      {
        question: "Kan ik ook verwarmen met een airco?",
        answer: "Ja! Alle moderne airconditioners hebben een verwarmingsfunctie. Dit is tot 4x efficiënter dan elektrische verwarming en een uitstekende aanvulling op uw CV-installatie."
      }
    ]
  }
];

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);

  const toggleQuestion = (question: string) => {
    setOpenQuestions(prev =>
      prev.includes(question)
        ? prev.filter(q => q !== question)
        : [...prev, question]
    );
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <HelpCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Veelgestelde Vragen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Alles wat u moet weten over airco installatie - direct duidelijk
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {faqCategories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === index
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="text-xl">{cat.icon}</span>
                <span>{cat.category}</span>
              </button>
            ))}
          </div>

          {/* Questions */}
          <div className="space-y-4">
            {faqCategories[activeCategory].questions.map((item, index) => (
              <Card
                key={index}
                className={`overflow-hidden transition-all duration-300 ${
                  openQuestions.includes(item.question)
                    ? "shadow-lg border-blue-200"
                    : "shadow-sm hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => toggleQuestion(item.question)}
                  className="w-full p-6 text-left flex items-center justify-between group"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      openQuestions.includes(item.question) ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openQuestions.includes(item.question) && (
                  <div className="px-6 pb-6 animate-in slide-in-from-top-2">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                    
                    {item.cta && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <Link href="/offerte">
                          <Button className="bg-green-600 hover:bg-green-700">
                            Vraag gratis offerte aan →
                          </Button>
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Still Questions CTA */}
          <Card className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-white border-0">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Staat uw vraag er niet bij?
              </h3>
              <p className="text-gray-600 mb-6">
                Onze experts staan klaar om al uw vragen te beantwoorden
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="tel:0462021430">
                  <Button size="lg" variant="outline" className="bg-white">
                    <Phone className="mr-2 h-5 w-5" />
                    Bel 046 202 1430
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Stel een vraag
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}