"use client";

import { useEffect } from "react";
import { Calendar, ExternalLink, Clock, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function AfspraakPage() {
  useEffect(() => {
    // Redirect to external appointment scheduling tool after a brief moment
    const timer = setTimeout(() => {
      window.location.href = "https://afspraken.staycoolairco.nl/";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full mx-auto p-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="mb-6">
            <Calendar className="w-16 h-16 mx-auto text-orange-600 mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Afspraak Maken
            </h1>
            <p className="text-gray-600">
              U wordt doorgestuurd naar onze afsprakenmodule...
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center gap-3 text-sm text-gray-700">
              <Clock className="w-5 h-5 text-green-600" />
              <span>Direct online plannen</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-sm text-gray-700">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>Kies uw voorkeurstijdstip</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-sm text-gray-700">
              <Calendar className="w-5 h-5 text-green-600" />
              <span>Bevestiging per e-mail</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="https://afspraken.staycoolairco.nl/"
              className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium"
            >
              Ga naar afspraken
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 text-sm"
            >
              Terug naar hoofdpagina
            </Link>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Als u niet automatisch wordt doorgestuurd, klik dan op de knop hierboven
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}