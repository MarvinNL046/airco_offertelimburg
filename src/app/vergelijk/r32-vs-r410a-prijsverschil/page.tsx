import type { Metadata } from "next";
import { ClusterLayout, type ClusterData } from "@/components/cluster-layout";

const data: ClusterData = {
  slug: "/vergelijk/r32-vs-r410a-prijsverschil",
  breadcrumbParent: { title: "Vergelijk", href: "/vergelijk" },
  metaTitle: "R32 of R410A airco kiezen? Prijs + wetgeving 2026 | Limburg",
  metaDescription:
    "R32 is nu de standaard. R410A wordt uitgefaseerd. Prijsverschil, milieu-impact, en hoe lang R410A nog mag. Impact op offerte + exploitatie.",
  h1: "R32 of R410A airco? Prijs, wetgeving en duurzaamheid in 2026",
  introLead:
    "Kies in 2026 altijd voor R32 — dit koudemiddel is de wettelijke standaard geworden, heeft 68% lagere milieu-impact dan R410A en kost ongeveer hetzelfde bij nieuwe installatie.",
  introBody: (
    <>
      <p>
        Alle nieuwe airco's die je in 2026 bij Limburgse installateurs koopt,
        draaien standaard op R32. R410A-units zijn niet meer nieuw te koop; ze
        zitten alleen nog in oudere bestaande installaties.
      </p>
      <p>
        De keuze tussen R32 en R410A speelt daarom alleen bij
        <strong> reparatie of uitbreiding van bestaande apparaten</strong>.
        Hieronder lees je wanneer ombouwen zinvol is en wat de financiële impact
        daarvan is.
      </p>
    </>
  ),
  sections: [
    {
      h2: "Wat is het verschil tussen R32 en R410A?",
      body: (
        <>
          <p>
            R32 en R410A zijn allebei HFK-koudemiddelen voor airco's en
            warmtepompen. Het kernverschil zit in <strong>milieu-impact</strong>{" "}
            (GWP, Global Warming Potential):
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>R32</strong>: GWP van 675</li>
            <li><strong>R410A</strong>: GWP van 2088 — drie keer hoger</li>
          </ul>
          <p>
            R32 is een enkelvoudige molecuul (difluormethaan), R410A is een
            mengsel van twee gassen. R32 is efficiënter in warmteoverdracht
            en vereist minder vulgewicht per kW koeling — daardoor kleinere
            compressor en lager stroomverbruik.
          </p>
          <p>
            R32 is licht brandbaar (A2L-klasse), R410A niet. In de praktijk
            betekent dat strengere eisen aan installatie-ventilatie en opslag
            — geen probleem voor consumenten, maar wel de reden dat monteurs
            extra F-gassen-certificering moeten hebben voor R32.
          </p>
        </>
      ),
    },
    {
      h2: "Wat is het prijsverschil tussen R32 en R410A nu?",
      body: (
        <>
          <p>
            Nieuwe installatie: geen keuze meer. R32 is standaard. Alle nieuwe
            airco's uit 2023+ zijn R32. Je betaalt dus de standaard-prijs
            (€1.800-€2.800 voor single split, €3.400-€5.400 voor multisplit 2
            binnendelen) — geen meerprijs voor R32 versus R410A.
          </p>
          <p>
            <strong>Bijvullen van bestaande R410A-unit</strong>: R410A is nog
            verkrijgbaar maar duurder. Per kg €45-€75 tegenover €25-€40 voor
            R32. Bij een kleine bijvulling merk je dat nauwelijks. Bij
            compressor-defect en volle hervulling kan het €200-€400 schelen.
          </p>
          <p>
            <strong>Omschakelen van R410A naar R32</strong> is feitelijk niet
            mogelijk op bestaande apparaten — het compressor-type en de
            smeerolie verschillen. Je moet dan het hele systeem vervangen,
            geen chemische conversie.
          </p>
        </>
      ),
    },
    {
      h2: "Tot wanneer mag R410A nog worden gebruikt?",
      body: (
        <>
          <p>
            De <strong>F-gassen-verordening (EU 2024/573)</strong> fase uit
            R410A stapsgewijs:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>2025</strong>: nieuwe split-airco's boven 3 kW op
            R410A verboden</li>
            <li><strong>2027</strong>: alle nieuwe airco's op R410A verboden</li>
            <li><strong>2030</strong>: onderhoud met vers R410A verboden, alleen
            gerecycled materiaal toegestaan</li>
            <li><strong>2032+</strong>: volledige uitfasering — R410A-apparaten
            kunnen dan niet meer onderhouden worden</li>
          </ul>
          <p>
            Voor consumenten: bestaande R410A-apparaten mogen gewoon blijven
            draaien. Bij groot defect na 2030 zal reparatie moeilijk/duur
            worden — vervangen door R32-unit is dan beter.
          </p>
          <p>
            Heb je nu (2026) een werkende R410A-unit: gewoon laten staan.
            Vervang pas als reparatiekosten in de buurt van nieuwe-unit-kosten
            komen, of bij hoofd-defect (compressor, meerdere lekken).
          </p>
        </>
      ),
    },
    {
      h2: "Kan ik mijn R410A-unit vervangen door een R32?",
      body: (
        <>
          <p>
            Ja, maar dat is altijd een <strong>complete vervanging</strong> —
            zowel binnendeel als buitendeel. De leidingen (koperen koelbuizen)
            moeten <strong>gespoeld en uitgeblazen</strong> worden als je ze
            wilt hergebruiken, omdat R410A-olie niet compatibel is met
            R32-compressoren.
          </p>
          <p>
            Kosten voor vervanging:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Nieuwe R32 single-split: €1.800-€2.800 all-in</li>
            <li>Bestaande leidingen spoelen (als goed toegankelijk): €150-€250
            extra</li>
            <li>Nieuwe leidingen leggen (als oud systeem ondoorzichtig is):
            €350-€600 extra</li>
            <li>Afvoer oude R410A-unit: €75-€150</li>
          </ul>
          <p>
            Totaal voor vervanging: €2.075-€3.550 afhankelijk van of
            leidingen hergebruikt kunnen worden.
          </p>
        </>
      ),
    },
    {
      h2: "R32 exploitatiekosten vs R410A",
      body: (
        <>
          <p>
            R32 is <strong>5-10% zuiniger</strong> dan R410A bij vergelijkbare
            capaciteit. Over een typisch seizoen (juni-aug, 300 draaiuren)
            bespaart dat €3-€6 aan stroom — verwaarloosbaar op individuele
            basis.
          </p>
          <p>
            Relevanter: bij lekkage moet nieuw koudemiddel bijgevuld worden.
            R32 kost €25-€40/kg, R410A €45-€75/kg. Een gemiddelde bijvulling
            van 0,5 kg: €12 vs €35 verschil. Over de levensduur van het
            apparaat: €50-€150 verschil.
          </p>
          <p>
            Milieu-impact is het grootste verschil. Als je hele familie en
            buren op R32 overstappen: significante collectieve CO2-impact
            reductie. Individueel merkt niemand het.
          </p>
        </>
      ),
    },
  ],
  faq: [
    {
      q: "Wat is beter, R32 of R410A?",
      a: "R32 — 68% lagere milieu-impact (GWP 675 vs 2088), 5-10% zuiniger, EU-wetgeving verkiest R32. In 2026 is het sowieso de enige optie voor nieuwe installaties.",
    },
    {
      q: "Hoe lang mag R410A nog worden gebruikt?",
      a: "Bestaande R410A-units mogen blijven draaien. Nieuwe verkoop boven 3 kW: verboden sinds 2025. Vers R410A bijvullen: alleen tot 2030. Daarna alleen gerecycled materiaal tot volledige uitfasering rond 2032.",
    },
    {
      q: "Kan ik R410A vervangen door R32?",
      a: "Niet chemisch — compressor en olie verschillen. Wel het hele systeem vervangen door een R32-unit. Leidingen kunnen meestal hergebruikt worden mits goed gespoeld.",
    },
    {
      q: "Hoe lang mag R32 nog gebruikt worden?",
      a: "R32 heeft GWP 675 — onder de EU-limiet voor residentiële airco's. Voor de komende 10-15 jaar geen uitfasering aangekondigd. Vervanger (R454B, R290 propaan) in onderzoek voor de lange termijn.",
    },
    {
      q: "Is R32 gevaarlijk voor mijn huis?",
      a: "Nee, mits correct geïnstalleerd. R32 is licht brandbaar (A2L) maar de hoeveelheid in een woning-airco is te klein om brandgevaar te vormen bij normaal gebruik. F-gassen gecertificeerde monteurs kennen de installatie-eisen.",
    },
    {
      q: "Moet ik mijn R410A-airco vervangen?",
      a: "Alleen als hij defect is of bijna aan het einde van zijn levensduur. Een werkende R410A-unit mag gewoon blijven draaien — de EU-regels gelden voor nieuwe verkoop en productie, niet voor gebruik.",
    },
  ],
  related: [
    {
      href: "/prijzen/single-split",
      title: "Single split prijzen 2026",
      description: "Alle nieuwe single splits draaien op R32 — prijzen vanaf €1.800.",
    },
    {
      href: "/prijzen/multisplit",
      title: "Multisplit prijzen 2026",
      description: "R32 multisplit systemen: 2, 3 of 4 binnendelen inclusief installatie.",
    },
    {
      href: "/kosten/installatiekosten-apart",
      title: "Installatiekosten apart",
      description: "Wat kost installatie van een R32-airco die jij levert?",
    },
    {
      href: "https://aircovergelijkenlimburg.nl/",
      title: "Merken vergelijken",
      description: "Daikin, Mitsubishi, LG, Tosot: alle R32-modellen naast elkaar.",
    },
  ],
};

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: data.slug },
  openGraph: { title: data.metaTitle, description: data.metaDescription, type: "article", locale: "nl_NL" },
};

export default function Page() {
  return <ClusterLayout data={data} />;
}
