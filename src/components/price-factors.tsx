import { siteConfig } from "@/config/site.config";

export function PriceFactors() {
  const factors = siteConfig.priceFactors;
  if (!factors) return null;

  return (
    <section className="bg-slate-50 border-y border-slate-200">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
          Wat bepaalt de prijs van jouw airco?
        </h2>
        <p className="mt-3 text-slate-700 max-w-3xl">{factors.intro}</p>

        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {factors.cards.map((c) => (
            <div key={c.title} className="bg-white border border-slate-200 rounded-xl p-5">
              <div className="font-semibold text-slate-900">{c.title}</div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
