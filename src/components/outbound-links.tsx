import { siteConfig } from "@/config/site.config";

export function OutboundLinks() {
  const block = siteConfig.outboundLinks;
  if (!block) return null;

  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">{block.heading}</h2>
      <p className="mt-3 text-slate-700 max-w-3xl">{block.intro}</p>

      <div className="mt-6 grid md:grid-cols-3 gap-5">
        {block.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="border border-slate-200 rounded-xl p-5 hover:accent-border transition block"
          >
            <div className="font-medium text-slate-900">{link.title}</div>
            <p className="mt-2 text-sm text-slate-700">{link.description}</p>
            <div className="mt-3 text-sm accent-text">{link.label}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
