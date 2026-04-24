import type { Metadata } from "next";
import { ClusterLayout, type ClusterData } from "@/components/cluster-layout";

const data: ClusterData = {
  slug: "/prijzen/multisplit",
  breadcrumbParent: { title: "Prijzen", href: "/prijzen" },
  metaTitle: "Multisplit airco prijs 2026 — 2, 3 of 4 binnendelen | Limburg",
  metaDescription:
    "Multisplit airco kost vanaf €3.400 voor 2 binnendelen tot €8.500+ voor 4. Alle prijzen inclusief montage in Limburg. Vraag direct offertes aan.",
  h1: "Multisplit airco prijzen 2026: wat kost 2, 3 of 4 binnendelen?",
  introLead:
    "Een multisplit airco kost in Limburg €3.400 tot €5.400 voor 2 binnendelen inclusief plaatsing — bij 3 binnendelen loopt dat op naar €5.500-€7.200 en bij 4 binnendelen naar €7.500-€8.500.",
  introBody: (
    <>
      <p>
        Multisplit koppelt meerdere binnendelen aan één gedeeld buitendeel.
        Daarmee bespaar je gevelruimte en krijg je centrale controle over
        meerdere ruimtes, maar je installeert wel meer leiding en koeltechniek
        dan bij meerdere single splits.
      </p>
      <p>
        Reken voor multi-split in Limburg met een spreiding van €1.500 tot
        €2.000 tussen verschillende offertes bij gelijke capaciteit. De echte
        verschillen zitten in merk, kabellengte per binnendeel en de complexiteit
        van de plaatsing.
      </p>
    </>
  ),
  sections: [
    {
      h2: "Wat kost een multisplit per aantal binnendelen?",
      body: (
        <>
          <p>
            Onderstaande prijzen zijn <strong>all-in voor Limburg</strong>,
            inclusief apparaat, plaatsing, F-gassen en BTW. Op basis van
            offerte-data jan-apr 2026:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>2 binnendelen (5-7 kW totaal)</strong>: €3.400 - €5.400</li>
            <li><strong>3 binnendelen (7-10 kW totaal)</strong>: €5.500 - €7.200</li>
            <li><strong>4 binnendelen (10-12 kW totaal)</strong>: €7.500 - €8.500</li>
            <li><strong>5 binnendelen (12-14 kW totaal)</strong>: €9.000 - €10.500</li>
          </ul>
          <p>
            Richtlijn: <strong>één binnendeel per afzonderlijke ruimte die je
            wilt koelen</strong>. Een binnendeel in een gang met open deuren
            naar slaapkamers werkt slecht — het koelt vooral de gang.
          </p>
        </>
      ),
    },
    {
      h2: "Wanneer multisplit en wanneer meerdere single splits?",
      body: (
        <>
          <p>
            Multisplit wint als je <strong>2 of meer ruimtes</strong> wilt
            koelen én de gevelruimte voor buitendelen beperkt is. Eén buitendeel
            voor 3 binnendelen bespaart typisch €1.500-€2.500 tegenover drie
            losse single splits.
          </p>
          <p>
            Meerdere single splits winnen als:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>De ruimtes ver uit elkaar liggen (lange leidingen = duur multi)</li>
            <li>Je de ruimtes op verschillende momenten wilt koelen zonder capaciteitsverlies</li>
            <li>Je reparatie-risico wil spreiden — bij multisplit defect is alles uit</li>
          </ul>
          <p>
            Laat een Limburgse monteur beide opties inmeten voordat je kiest.
            Het gevel-plaatje en de kabelroutes bepalen vaak wat slimmer is,
            niet alleen de aankoopprijs.
          </p>
        </>
      ),
    },
    {
      h2: "Capaciteit verdelen over binnendelen",
      body: (
        <>
          <p>
            Bij multisplit is de <strong>som van de binnendeel-kW</strong> niet
            gelijk aan de max-capaciteit van het buitendeel. Fabrikanten staan
            overallocatie toe (typisch tot 130%) omdat binnendelen zelden
            tegelijk op vol vermogen draaien.
          </p>
          <p>
            Voorbeeld: een buitendeel van 7,1 kW kan drie binnendelen à 2,5
            kW aansturen (totaal 7,5 kW nominaal), omdat je woonkamer en
            slaapkamers niet tegelijk op maximum staan. Een goede monteur rekent
            de gelijktijdigheidsfactor uit — vraag daarnaar in de offerte.
          </p>
          <p>
            Te royaal overallokeren betekent dat bij hittegolven één of twee
            binnendelen onvoldoende koelen. Vraag de monteur daarom naar
            worst-case gedrag, niet alleen naar nominaal.
          </p>
        </>
      ),
    },
    {
      h2: "Meerprijs voor extra elektra-groep of 3-fase",
      body: (
        <>
          <p>
            Een multisplit boven 7 kW heeft vaak een <strong>eigen groep in
            de meterkast</strong> nodig. Kosten: €180-€300 voor een 1-fase
            groep en €300-€450 voor een 3-fase aansluiting.
          </p>
          <p>
            Bij grotere multisplits (4+ binnendelen, 10+ kW) wordt 3-fase
            feitelijk verplicht. Als jouw woning nog 1-fase 1x35A heeft, komt
            er een verzwaring vanuit de netbeheerder bij. Die kosten (€250-€500
            extra) staan vaak niet in de airco-offerte — vraag er expliciet
            naar.
          </p>
          <p>
            Een monteur checkt je meterkast bij het eerste bezoek. Als hij
            zonder meterkast-check een definitieve prijs geeft, zit er vrijwel
            altijd een meerprijs-post op de definitieve factuur.
          </p>
        </>
      ),
    },
    {
      h2: "Multisplit prijzen per merk vergelijken",
      body: (
        <>
          <p>
            Merk-prijsverschillen voor multisplit (2 binnendelen, 5 kW totaal,
            Limburg, incl. montage):
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Daikin</strong>: €4.500 - €5.400</li>
            <li><strong>Mitsubishi Electric</strong>: €4.300 - €5.200</li>
            <li><strong>Toshiba</strong>: €4.200 - €5.000</li>
            <li><strong>LG / Samsung</strong>: €3.700 - €4.500</li>
            <li><strong>Tosot / Gree</strong>: €3.400 - €4.000</li>
          </ul>
          <p>
            Belangrijk: bij multisplit telt <strong>merk-compatibiliteit</strong>.
            Binnendelen en buitendeel moeten van hetzelfde merk komen. Mix-en-
            match werkt niet, en garantie vervalt direct.
          </p>
        </>
      ),
    },
  ],
  faq: [
    {
      q: "Wat kost een multisplit airco inclusief montage?",
      a: "Voor Limburg 2026: €3.400-€5.400 voor 2 binnendelen, €5.500-€7.200 voor 3, €7.500-€8.500 voor 4. All-in prijs inclusief apparaat, plaatsing, F-gassen, BTW.",
    },
    {
      q: "Wat kost een airco met 2 units?",
      a: "Gemiddeld €4.400 all-in in Limburg voor een multisplit met 2 binnendelen (5-7 kW totaal). Bij top-tier merken (Daikin, Mitsubishi) loopt dat op naar €5.200-€5.400.",
    },
    {
      q: "Wat kost een airco met 3 units?",
      a: "€5.500-€7.200 inclusief montage. Let op meerprijs voor extra elektra-groep (€180-€450) die bij 3+ binnendelen vaak nodig is.",
    },
    {
      q: "Is een multisplit goedkoper dan meerdere single splits?",
      a: "Meestal ja, vooral bij 3 of meer ruimtes. Bij 2 ruimtes dicht bij elkaar is het verschil klein — dan weegt onderhoud en reparatie-risico zwaarder dan prijs.",
    },
    {
      q: "Heb ik 3-fase nodig voor multisplit?",
      a: "Tot 7 kW totaalvermogen werkt 1-fase meestal. Boven 10 kW (4+ binnendelen) is 3-fase vaak verplicht. Een monteur checkt je meterkast bij de eerste inspectie.",
    },
    {
      q: "Kan ik binnendelen van verschillende merken combineren?",
      a: "Nee. Binnendelen en buitendeel moeten van hetzelfde merk komen, anders werkt de communicatie niet en vervalt de fabrieksgarantie.",
    },
  ],
  related: [
    {
      href: "/prijzen/single-split",
      title: "Single split airco prijzen",
      description: "Prijzen voor één binnendeel, één buitendeel - vanaf €1.800 all-in.",
    },
    {
      href: "/kosten/installatiekosten-apart",
      title: "Installatiekosten apart",
      description: "Wat kost alleen de installatie als je zelf apparaten levert?",
    },
    {
      href: "/gids/all-in-offerte-of-losse-posten",
      title: "All-in offerte of losse posten?",
      description: "Welke posten vaak verborgen blijven in een multisplit-offerte.",
    },
    {
      href: "https://aircoinstallateurlimburg.nl/",
      title: "Kies de juiste installateur",
      description: "F-gassen certificering en 10 vragen voor je akkoord geeft.",
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
