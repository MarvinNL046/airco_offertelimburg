import type { Metadata } from "next";
import { ClusterLayout, type ClusterData } from "@/components/cluster-layout";

const data: ClusterData = {
  slug: "/gids/all-in-offerte-of-losse-posten",
  breadcrumbParent: { title: "Gids", href: "/gids" },
  metaTitle: "All-in airco offerte of losse posten? Verborgen kosten ontdekken",
  metaDescription:
    "Vergelijk all-in vs losse airco-offertes. Dit zijn de 6 posten die vaak verborgen blijven. Zo vergelijk je twee offertes eerlijk.",
  h1: "All-in airco offerte of losse posten? Zo vergelijk je eerlijk",
  introLead:
    "Een all-in offerte is meestal veiliger dan losse posten — mits je zes specifieke kostensoorten expliciet controleert voordat je tekent.",
  introBody: (
    <>
      <p>
        Twee airco-offertes die op het eerste gezicht €500 verschillen kunnen
        bij nadere inspectie gelijk uitkomen, of juist €1.500 verschillen.
        Het verschil zit in wat wél en níet in de all-in prijs is opgenomen.
      </p>
      <p>
        Deze gids geeft je een checklist waarmee je twee offertes naast elkaar
        legt. Zo voorkom je de meest-voorkomende verrassingsfacturen — van
        extra kabel tot BTW-ondermelding.
      </p>
    </>
  ),
  sections: [
    {
      h2: "Wat is een all-in airco-offerte?",
      body: (
        <>
          <p>
            Een all-in offerte bevat <strong>apparaat + installatie + materialen
            + F-gassen + BTW</strong> in één totaalprijs. Je betaalt achteraf
            niets extra, tenzij iets bij eerste bezoek afwijkt van wat
            besproken is (bijv. muurdikte, locatie).
          </p>
          <p>
            Een losse-posten-offerte splitst: "apparaat €1.200", "montage €650",
            "F-gassen €85", "meerkabel €45 per meter", "BTW 21%". Transparanter
            op papier, maar in de praktijk moet je dan zelf optellen én checken
            of alle nodige posten er bij staan.
          </p>
          <p>
            <strong>Voor particulier: all-in is doorgaans beter.</strong> Je
            krijgt één prijs, één factuur, één garantie-aanspreekpunt. Losse
            posten werken vooral als je zakelijk de BTW wil zien of onderdelen
            apart wilt verrekenen.
          </p>
        </>
      ),
    },
    {
      h2: "6 posten die vaak verborgen blijven",
      body: (
        <>
          <p>
            Controleer of deze zes posten expliciet in de offerte staan — niet
            alleen als opmerking maar met bedrag of "inbegrepen":
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>BTW (21%)</strong> — sommige offertes tonen ex-BTW
              prijzen. Verschil op €3.000: €630.
            </li>
            <li>
              <strong>Meerkabel</strong> — standaard zit 3-4 meter erbij. Extra
              kost €25-€50 per meter. Vraag: "voor hoeveel meter is dit?"
            </li>
            <li>
              <strong>F-gassen + lektest</strong> — moet er zijn bij elke nieuwe
              installatie. Zo niet, de installatie is wettelijk niet compliant
              en je garantie vervalt.
            </li>
            <li>
              <strong>Elektragroep of meterkast-werk</strong> — bij multisplit
              of hogere single splits vaak nodig. €180-€450 extra.
            </li>
            <li>
              <strong>Afvoer oude airco</strong> — bij vervanging. €75-€150.
              Moet expliciet genoemd worden.
            </li>
            <li>
              <strong>Hoogwerker of dakklim</strong> — bij moeilijk bereikbaar
              buitendeel. €150-€400.
            </li>
          </ol>
          <p>
            Vraag per post: "staat dit nu in de prijs of komt het er later
            bij?" — een eerlijke monteur geeft direct uitleg, een dubieuze
            monteur zegt "nader te bepalen".
          </p>
        </>
      ),
    },
    {
      h2: "Waarom sommige bedrijven losse posten gebruiken",
      body: (
        <>
          <p>
            Losse posten zijn niet per definitie schimmig. Bij zakelijke
            klanten (horeca, kantoor) is split-invoicing voor BTW-aftrek en
            investeringsregelingen handiger.
          </p>
          <p>
            Ook bij <strong>complexe plaatsing</strong> — waar bij eerste
            bezoek nog niet zeker is hoeveel kabel of hoogwerker nodig is —
            geeft losse-posten flexibiliteit. De basis staat vast, de variabele
            kosten komen na inspectie.
          </p>
          <p>
            Pas op bij <strong>"vanaf €1.499"</strong>-advertenties met daarna
            een lijst opties. Dat is bijna altijd een commerciële truc om een
            lage prijs te tonen die voor geen enkele echte installatie haalbaar
            is.
          </p>
        </>
      ),
    },
    {
      h2: "Zo vergelijk je twee offertes eerlijk",
      body: (
        <>
          <p>
            Leg twee offertes naast elkaar en vul deze checklist in voor beide:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Totaalprijs incl. BTW: ...</li>
            <li>Apparaat-merk + type: ...</li>
            <li>Kabellengte inbegrepen: ... meter</li>
            <li>F-gassen + lektest inbegrepen: ja/nee</li>
            <li>Inbedrijfstelling inbegrepen: ja/nee</li>
            <li>Garantie op apparaat: ... jaar</li>
            <li>Garantie op installatie: ... jaar</li>
            <li>Oude unit afvoer: ja/nee/meerprijs</li>
            <li>F-gassen certificaat nr van monteur: ...</li>
            <li>Datum offerte geldig tot: ...</li>
          </ul>
          <p>
            Als bij één offerte de helft leeg is en bij de andere alles ingevuld —
            ga met de transparante in zee, ook als die €200 duurder is. Je
            koopt duidelijkheid.
          </p>
        </>
      ),
    },
    {
      h2: "Wat als na akkoord een meerprijs komt?",
      body: (
        <>
          <p>
            Een all-in offerte dekt wat op papier staat bij akkoord. Zijn er
            bij uitvoering onverwacht afwijkingen (bijv. dragende muur moet
            doorboord, niet-gemelde zolderleiding), dan mag een monteur
            meerkosten rekenen — mits hij <strong>vooraf</strong> waarschuwt en
            je toestemt.
          </p>
          <p>
            Jij hebt altijd het recht: ik wil niet doorgaan zonder vooraf
            akkoord op meerprijs. Een goede monteur stopt en belt je. Een
            dubieuze monteur werkt door en legt de rekening achteraf.
          </p>
          <p>
            Noteer in je agenda: op de dag van uitvoering, bevestigt de monteur
            de all-in prijs schriftelijk (sms of mail volstaat) voordat hij
            begint. Dat voorkomt 95% van de meerkosten-conflicten.
          </p>
        </>
      ),
    },
  ],
  faq: [
    {
      q: "Is een all-in offerte altijd duurder dan losse posten?",
      a: "Nee. Goede monteurs rekenen identiek of zelfs iets goedkoper voor all-in omdat ze zo werken. Losse-posten-offertes lijken op papier goedkoper maar eindigen vaak met meerfacturen.",
    },
    {
      q: "Welke posten moet ik expliciet controleren?",
      a: "Zes kritieke: BTW, meerkabel, F-gassen vullen, extra elektragroep, afvoer oude unit, hoogwerker. Vraag per post: inbegrepen of meerprijs?",
    },
    {
      q: "Mag een monteur achteraf meerprijs rekenen?",
      a: "Alleen als hij vooraf schriftelijk waarschuwt én jij akkoord geeft. Bij akkoord op de dag van uitvoering: standaardpraktijk. Zonder melding achteraf rekenen: juridisch aanvechtbaar.",
    },
    {
      q: "Wat kost een goede airco inclusief montage?",
      a: "In Limburg gemiddeld €2.300 all-in voor single split en €4.400 voor multisplit met 2 binnendelen. Zie onze detail-pagina's voor precieze ranges per configuratie.",
    },
    {
      q: "Krijg ik subsidie op een airco?",
      a: "Niet op losse koeling-airco. Wel op lucht/lucht-warmtepomp (airco die ook verwarmt) via ISDE-regeling. De monteur adviseert of jouw apparaat onder de regeling valt.",
    },
    {
      q: "Moet ik voor akkoord altijd drie offertes hebben?",
      a: "Aanbevolen. Twee is minimum om spreiding te zien. Drie of vier is ideaal — zo zie je of een buitenstaander onredelijk hoog of verdacht laag zit.",
    },
  ],
  related: [
    {
      href: "/prijzen/single-split",
      title: "Single split prijzen",
      description: "Wat kost een single split airco in 2026? Concrete ranges per kW.",
    },
    {
      href: "/prijzen/multisplit",
      title: "Multisplit prijzen",
      description: "Prijzen voor 2, 3 of 4 binnendelen inclusief installatie.",
    },
    {
      href: "/kosten/installatiekosten-apart",
      title: "Installatiekosten apart",
      description: "Uurtarieven, toeslagen en wat er in een installatie zit.",
    },
    {
      href: "https://aircoinstallateurlimburg.nl/kiezen/10-vragen-voor-je-installateur",
      title: "10 vragen voor je installateur",
      description: "Check-vragen vóór je akkoord geeft op een offerte.",
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
