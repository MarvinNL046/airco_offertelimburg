import type { Metadata } from "next";
import { ClusterLayout, type ClusterData } from "@/components/cluster-layout";

const data: ClusterData = {
  slug: "/prijzen/single-split",
  breadcrumbParent: { title: "Prijzen", href: "/prijzen" },
  metaTitle: "Single split airco prijs 2026 — €1.800-€2.800 all-in | AircoOfferteLimburg",
  metaDescription:
    "Single split airco inclusief plaatsen kost in 2026 gemiddeld €1.800-€2.800 in Limburg. Zes factoren bepalen de prijs. Vraag direct offertes aan.",
  h1: "Wat kost een single split airco in 2026? Prijzen inclusief installatie",
  introLead:
    "Een single split airco kost in Limburg gemiddeld €1.800 tot €2.800 inclusief apparaat en plaatsing door een F-gassen gecertificeerde monteur.",
  introBody: (
    <>
      <p>
        Dit is de all-in prijs voor een standaard installatie: één binnendeel,
        één buitendeel, 3 tot 4 meter leiding en inbedrijfstelling. Voor alleen
        de installatie (als je zelf een apparaat levert) reken je €600 tot
        €950.
      </p>
      <p>
        De spreiding van €1.000 tussen laagste en hoogste offerte verklaren we
        hieronder met zes factoren. Vergelijk altijd minimaal drie offertes
        voordat je kiest.
      </p>
    </>
  ),
  sections: [
    {
      h2: "Wat kost een single split airco gemiddeld?",
      body: (
        <>
          <p>
            De gemiddelde prijs ligt op <strong>€2.300 all-in</strong> voor een
            woonkamer of slaapkamer tot 40 m². Dit is gebaseerd op ongeveer 120
            offertes die Limburgse monteurs tussen januari en april 2026
            uitbrachten.
          </p>
          <p>
            Goedkoper dan €1.800 is vrijwel altijd een lager-segment merk of
            een kale installatie zonder inbedrijfstelling en garantie. Duurder
            dan €2.800 zit meestal top-tier (Daikin, Mitsubishi Heavy,
            Toshiba) of een complexere plaatsing.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>2,5 kW</strong> (slaapkamer, 10-20 m²): €1.800 - €2.300</li>
            <li><strong>3,5 kW</strong> (woonkamer, 20-35 m²): €2.100 - €2.600</li>
            <li><strong>5,0 kW</strong> (grote woonkamer, 35-50 m²): €2.500 - €2.800</li>
          </ul>
        </>
      ),
    },
    {
      h2: "Wat zit er wel en niet bij een all-in prijs?",
      body: (
        <>
          <p>
            Een goede all-in offerte dekt <strong>apparaat, montage,
            F-gassen, inbedrijfstelling en BTW</strong>. Controleer deze
            punten voordat je akkoord geeft:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Apparaat met exacte merk + type + kW-specificatie</li>
            <li>Standaard kabellengte (meestal 3-4 meter)</li>
            <li>F-gassen vullen en lektest</li>
            <li>Condensafvoer (horizontaal en verticaal)</li>
            <li>Inbedrijfstelling en afstandsbediening instellen</li>
            <li>2 tot 5 jaar garantie op apparaat én installatie</li>
            <li>BTW (21% voor particulier)</li>
          </ul>
          <p>
            Vaak ontbreekt: <strong>afvoer van een oude airco</strong>
            (€75-€150), <strong>extra kabellengte</strong> boven de 4 meter,
            en <strong>hoogwerker of dakkosten</strong> als de buitenunit moeilijk
            bereikbaar is.
          </p>
        </>
      ),
    },
    {
      h2: "Single split of multisplit — wanneer is welk beter?",
      body: (
        <>
          <p>
            Kies <strong>single split</strong> als je één ruimte wilt koelen en
            die ruimte minder dan 50 m² is. Simpeler systeem, lagere
            aanschafprijs, beter te repareren bij storing.
          </p>
          <p>
            Kies <strong>multisplit</strong> als je twee of meer ruimtes wilt
            koelen. Eén buitendeel voor meerdere binnendelen bespaart gevelruimte
            en het totale prijsverschil tussen twee single splits en één
            multisplit is kleiner dan je denkt — vooral bij drie of meer
            binnendelen.
          </p>
          <p>
            De totale kW-capaciteit van de binnendelen mag bij multisplit niet
            hoger zijn dan de maximale output van het buitendeel. Een monteur
            rekent dat ter plekke na — laat je daarin adviseren.
          </p>
        </>
      ),
    },
    {
      h2: "Welke 6 factoren bepalen de prijs?",
      body: (
        <>
          <p>
            Prijsverschillen tot €500 tussen offertes zijn normaal. Deze zes
            factoren verklaren vrijwel alles:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>Capaciteit (kW)</strong> — een 2,5 kW-unit kost
              €300-€500 minder dan een 5 kW-unit bij hetzelfde merk.
            </li>
            <li>
              <strong>Afstand binnendeel-buitendeel</strong> — extra meter
              leiding boven standaard kost €25-€50 per meter.
            </li>
            <li>
              <strong>Meterkast en elektra</strong> — voor grotere single splits
              (&gt;5 kW) soms een extra groep nodig, €180-€450.
            </li>
            <li>
              <strong>Plaatsingslocatie buitendeel</strong> — moeilijk
              bereikbaar of op pannendak: €150-€400 extra voor hoogwerker of
              dakwerk.
            </li>
            <li>
              <strong>Merk</strong> — top-tier (Daikin, Mitsubishi) zit
              €300-€600 boven mid-range (LG, Samsung, Tosot) bij vergelijkbare
              kW.
            </li>
            <li>
              <strong>Garantie en onderhoudscontract</strong> — uitgebreide
              garantie (tot 7 jaar) vereist vaak een jaarlijks
              onderhoudscontract van €80-€140.
            </li>
          </ol>
        </>
      ),
    },
    {
      h2: "Single split merken vergelijken op prijs-kwaliteit",
      body: (
        <>
          <p>
            Alle nieuwe single splits in 2026 draaien op R32 koudemiddel.
            Verschil tussen merken zit in service-reputatie en onderdelen-garantie,
            minder in techniek zelf.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Daikin</strong>: marktleider, sterke service, iets hogere
              prijs. Goed bij complexe installaties.
            </li>
            <li>
              <strong>Mitsubishi Electric / Heavy</strong>: Japans, betrouwbaar,
              ruim verkrijgbaar. Mid-tot-hoge prijs.
            </li>
            <li>
              <strong>Toshiba</strong>: hoogwaardig, iets stiller, mid-tot-hoge
              prijs.
            </li>
            <li>
              <strong>LG / Samsung</strong>: mid-range, prima kwaliteit, iets
              minder installateurs werken er standaard mee.
            </li>
            <li>
              <strong>Tosot / Gree</strong>: budget-vriendelijk, korter
              servicenetwerk. Prima voor single-zone, minder geschikt voor
              zware gebruik.
            </li>
          </ul>
          <p>
            Een monteur in Limburg draait meestal op 2-3 merken waar hij
            jarenlang garantie-ervaring mee heeft. Laat de monteur adviseren op
            basis van jouw ruimte, niet omgekeerd.
          </p>
        </>
      ),
    },
    {
      h2: "Wat kost een uur airco draaien aan stroom?",
      body: (
        <>
          <p>
            Een single split verbruikt <strong>gemiddeld 1 kWh per uur</strong>{" "}
            bij volle koelvraag. Bij de huidige NL stroomprijs (€0,28-€0,35
            per kWh in 2026) komt dat neer op <strong>€0,28 tot €0,35 per
            draaiuur</strong>.
          </p>
          <p>
            In de praktijk draait een airco zelden op vol vermogen. Met een
            inverter-compressor (standaard in alle nieuwe units) modulieert het
            verbruik met de vraag, typisch 0,4-0,7 kWh per uur over een hele
            dag. Reken op €0,15-€0,25 per uur gemiddeld.
          </p>
          <p>
            In de hete week van 20 dagen × 8 uur gebruik: ongeveer €25-€40 aan
            stroom. Seizoen (juni-aug) totaal: €60-€100 bij normaal gebruik.
          </p>
        </>
      ),
    },
  ],
  faq: [
    {
      q: "Wat kost een single split airco inclusief montage?",
      a: "In Limburg gemiddeld €1.800 tot €2.800 all-in voor 2,5 tot 5 kW. Onder de €1.800 is ongebruikelijk voor een goed merk met F-gassen certificering; boven de €2.800 zit je meestal in top-tier of complexe plaatsing.",
    },
    {
      q: "Wat is het verschil tussen single split en multisplit?",
      a: "Een single split heeft één binnendeel op één buitendeel. Een multisplit heeft meerdere binnendelen op één gedeeld buitendeel. Single split is goedkoper voor één ruimte; multisplit is beter voor twee of meer ruimtes.",
    },
    {
      q: "Hoeveel kW single split heb ik nodig per kamer?",
      a: "Vuistregel: 0,1 kW per m² bij goed geïsoleerde woning. Slaapkamer van 15 m² = 2,5 kW. Woonkamer van 35 m² = 3,5 kW. Bij veel glas op het zuiden of hoog plafond: 20-30% opslag.",
    },
    {
      q: "Wat kost 1 uur airco draaien?",
      a: "Gemiddeld €0,28 tot €0,35 per uur bij volle koelvraag. In de praktijk met inverter-compressor €0,15-€0,25 per uur gemiddeld over een hele dag.",
    },
    {
      q: "Is een single split voldoende voor een hele verdieping?",
      a: "Alleen als de verdieping één open ruimte is. Voor losse slaap- en woonkamers achter deuren is single split ontoereikend — je hebt een multisplit of meerdere single splits nodig.",
    },
    {
      q: "Welk merk single split is het beste in prijs-kwaliteit?",
      a: "Mitsubishi Electric en Toshiba zitten in de sweet spot: hoge kwaliteit, goede service, niet top-duur. Daikin is duurder maar heeft uitgebreidere service-garantie. Budget: Tosot of Gree werken prima voor lichtere ruimtes.",
    },
  ],
  related: [
    {
      href: "/prijzen/multisplit",
      title: "Multisplit airco prijzen",
      description: "Wat kost een multisplit met 2, 3 of 4 binnendelen in Limburg?",
    },
    {
      href: "/kosten/installatiekosten-apart",
      title: "Installatiekosten zonder apparaat",
      description: "Hoeveel kost alleen de montage van een airco die jij levert?",
    },
    {
      href: "/vergelijk/r32-vs-r410a-prijsverschil",
      title: "R32 vs R410A prijsverschil",
      description: "Koudemiddel-keuze: impact op offerte en exploitatiekosten.",
    },
    {
      href: "https://aircoplaatsenlimburg.nl/",
      title: "Hoe wordt een airco geplaatst?",
      description: "Proces-gids: buitenunit-locatie, F-gassen vullen, installatietijd.",
    },
  ],
};

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: data.slug },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    type: "article",
    locale: "nl_NL",
  },
};

export default function Page() {
  return <ClusterLayout data={data} />;
}
