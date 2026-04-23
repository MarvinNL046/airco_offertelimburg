import { siteConfig } from "@/config/site.config";

export function OfferteChecklist() {
  const checklist = siteConfig.offerteChecklist;
  if (!checklist) return null;

  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
        Waar let je op in een offerte?
      </h2>
      <p className="mt-3 text-slate-700 max-w-3xl">{checklist.intro}</p>

      <ol className="mt-8 space-y-5 max-w-3xl">
        {checklist.items.map((item, i) => (
          <li key={item.title} className="flex gap-4">
            <span className="shrink-0 w-8 h-8 rounded-full accent-soft accent-text font-semibold flex items-center justify-center">
              {i + 1}
            </span>
            <div>
              <div className="font-medium text-slate-900">{item.title}</div>
              <p className="text-sm text-slate-700 mt-1 leading-relaxed">{item.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
