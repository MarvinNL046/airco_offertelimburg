import { siteConfig } from "@/config/site.config";

export function PriceTable() {
  const pricing = siteConfig.pricingPreview;
  if (!pricing) return null;

  return (
    <section id="prijzen" className="mx-auto max-w-6xl px-5 py-14">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
        Wat kost een airco in Limburg?
      </h2>
      <p className="mt-3 text-slate-700 max-w-3xl">{pricing.intro}</p>

      <div className="mt-8 grid md:grid-cols-3 gap-5">
        {pricing.rows.map((row) => (
          <div
            key={row.title}
            className={`border rounded-xl p-5 ${
              row.highlight ? "accent-soft accent-border" : "border-slate-200"
            }`}
          >
            <div className="font-semibold text-slate-900">{row.title}</div>
            <div className="text-sm text-slate-500 mt-1">{row.subtitle}</div>
            <div className="mt-4 text-2xl font-semibold text-slate-900">{row.priceRange}</div>
            <ul className="mt-3 text-sm text-slate-700 space-y-1">
              {row.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {pricing.footnote && (
        <p className="mt-6 text-sm text-slate-500">{pricing.footnote}</p>
      )}
    </section>
  );
}
