"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, MessageCircle, Calendar, X, ArrowUp } from "lucide-react"
import Link from "next/link"

export function FloatingCTA() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Back to Top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-14 h-14 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-900 transition-all duration-300 flex items-center justify-center animate-in slide-in-from-bottom-2"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        )}

        {/* Appointment Button */}
        <Link href="/afspraak">
          <button className="w-14 h-14 bg-orange-600 text-white rounded-full shadow-lg hover:bg-orange-700 transition-all duration-300 flex items-center justify-center animate-pulse">
            <Calendar className="w-6 h-6" />
          </button>
        </Link>

        {/* Phone Button */}
        <Link href="tel:0462021430">
          <button className="w-14 h-14 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 flex items-center justify-center">
            <Phone className="w-6 h-6" />
          </button>
        </Link>

        {/* Chat Button */}
        <button
          onClick={() => setShowChat(!showChat)}
          className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center relative"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
        </button>
      </div>

      {/* Chat Widget */}
      {showChat && (
        <Card className="fixed bottom-24 right-6 w-80 z-50 shadow-2xl animate-in slide-in-from-bottom-4">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Live Chat Support</h3>
              <p className="text-sm opacity-90">Wij reageren binnen 2 minuten</p>
            </div>
            <button
              onClick={() => setShowChat(false)}
              className="p-1 hover:bg-blue-700 rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-4">
            <div className="bg-gray-100 rounded-lg p-3 mb-4">
              <p className="text-sm text-gray-700">
                👋 Hallo! Hoe kunnen wij u helpen met uw airco vraag?
              </p>
            </div>
            
            <div className="space-y-2">
              <Link href="/offerte">
                <Button variant="outline" className="w-full justify-start" onClick={() => setShowChat(false)}>
                  📋 Gratis offerte aanvragen
                </Button>
              </Link>
              <Link href="/afspraak">
                <Button variant="outline" className="w-full justify-start" onClick={() => setShowChat(false)}>
                  📅 Direct afspraak plannen
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="w-full justify-start" onClick={() => setShowChat(false)}>
                  💬 Contact opnemen
                </Button>
              </Link>
            </div>
            
            <div className="mt-4 pt-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type uw vraag..."
                  className="flex-1 px-3 py-2 border rounded-lg text-sm"
                />
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Send
                </Button>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg md:hidden z-40">
        <div className="grid grid-cols-3 gap-0">
          <Link href="/offerte">
            <button className="py-4 text-center hover:bg-gray-50 transition-colors">
              <span className="text-xs text-gray-600">Gratis</span>
              <div className="font-semibold text-green-600">Offerte</div>
            </button>
          </Link>
          <Link href="/afspraak">
            <button className="py-4 text-center bg-orange-600 text-white hover:bg-orange-700 transition-colors">
              <span className="text-xs">Direct</span>
              <div className="font-semibold">Afspraak</div>
            </button>
          </Link>
          <Link href="tel:0462021430">
            <button className="py-4 text-center hover:bg-gray-50 transition-colors">
              <span className="text-xs text-gray-600">Bel nu</span>
              <div className="font-semibold text-blue-600">046 202 1430</div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}