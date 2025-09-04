"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ContactForm } from "@/components/forms/contact-form"
import { Calendar, Star, Shield, Award, TrendingUp, Clock, Users } from "lucide-react"
import { markAsLCP, prefetchCriticalPaths } from "@/lib/performance"

export function HeroSectionV2() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });
  
  useEffect(() => {
    if (headingRef.current) {
      markAsLCP(headingRef.current);
    }
    prefetchCriticalPaths();
    
    // Countdown timer for urgency
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <>
      {/* Trust Bar */}
      <div className="bg-green-600 text-white py-2 text-center text-sm font-medium">
        <div className="container flex items-center justify-center gap-2">
          <Shield className="w-4 h-4" />
          <span>🎉 Winteractie: €100 korting op alle installaties - Nog {timeLeft.hours}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')} uur!</span>
        </div>
      </div>
      
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Gradient Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900/90" />
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-green-500/20 blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="container relative z-10 py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="flex flex-col justify-center">
              {/* Trust Badges */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm">4.9/5 (312 reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Award className="w-5 h-5 text-green-400" />
                  <span>Top Rated 2024</span>
                </div>
              </div>
              
              <h1 
                ref={headingRef}
                className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl animate-fade-in"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                  Airco Installatie
                </span>
                <br />
                <span className="text-3xl sm:text-5xl lg:text-6xl">in heel Limburg</span>
              </h1>
              
              <p className="mt-6 text-xl text-gray-300 leading-relaxed">
                Bespaar tot <span className="text-green-400 font-bold">40% op energiekosten</span> met onze A+++ airconditioners. 
                <br />Vakkundige installatie binnen 48 uur mogelijk!
              </p>
              
              {/* Social Proof Counter */}
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400">2.847+</div>
                  <div className="text-sm text-gray-400">Tevreden klanten</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">48u</div>
                  <div className="text-sm text-gray-400">Snelle installatie</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">5 jaar</div>
                  <div className="text-sm text-gray-400">Garantie</div>
                </div>
              </div>
              
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/offerte">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-6 text-lg font-bold shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-200"
                  >
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Direct Offerte (Gratis)
                  </Button>
                </Link>
                <Link href="/afspraak">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-6 text-lg font-bold shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-200"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Plan Afspraak
                  </Button>
                </Link>
              </div>
              
              {/* Trust Elements */}
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Binnen 2 min. reactie</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="text-sm">12 monteurs actief</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm">Erkend installateur</span>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce">
                €100 KORTING
              </div>
              
              <Card className="relative p-8 bg-white/95 backdrop-blur-xl border-0 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-lg" />
                
                <div className="relative">
                  <div className="text-center mb-6">
                    <p className="text-sm text-gray-600">Binnen 30 seconden</p>
                    <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
                      Gratis Offerte
                    </p>
                    <p className="text-gray-600 mt-2">Geen verplichtingen • Direct inzicht</p>
                  </div>
                  
                  {/* Live Activity Indicator */}
                  <div className="flex items-center justify-center gap-2 mb-6 text-sm text-gray-600">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span>143 mensen bekijken dit nu</span>
                  </div>
                  
                  <ContactForm />
                  
                  {/* Security & Trust */}
                  <div className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Shield className="w-4 h-4" />
                      <span>SSL Beveiligd</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      <span>Privacy Gewaarborgd</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}