import type { Metadata } from "next";
import { ClusterLayout, type ClusterData } from "@/components/cluster-layout";

const data: ClusterData = {
  slug: "/kosten/installatiekosten-apart",
  breadcrumbParent: { title: "Kosten", href: "/kosten" },
  metaTitle: "Airco installatiekosten apart — €600-€950 los van apparaat | Limburg",
  metaDescription:
    "Wat kost alleen airco-installatie in Limburg? €600-€950 all-in voor een single split. Uurtarieven, toeslagen en verschil zzp vs bedrijf.",
  h1: "Wat kost airco-installatie apart van het apparaat?",
  introLead:
    "Alleen de installatie van een single-split airco kost in Limburg €600 tot €950 inclusief F-gassen vullen, inbedrijfstelling en BTW — zónder het apparaat zelf.",
  introBody: (
    <>
      <p>
        Dit is relevant als je al een airco hebt (bijv. via webshop gekocht)
        of als je het apparaat apart wilt bestellen en alleen voor montage
        betaalt. Voor multisplit loopt de installatie-prijs op naar €1.000-€1.800
        afhankelijk van aantal binnendelen.
      </p>
      <p>
        Niet elke installateur accepteert klant-levert-apparaat. Garantie op de
        installatie wordt soms beperkt omdat de monteur niet voor het apparaat
        verantwoordelijk is. Vraag daar vooraf naar.
      </p>
    </>
  ),
  sections: [
    {
      h2: "Wat kost alleen installatie in Limburg?",
      body: (
        <>
          <p>
            Gemiddelde prijzen bij Limburgse airco-monteurs voor montage
            exclusief apparaat:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Single split</strong>: €600 - €950</li>
            <li><strong>Multisplit 2 binnendelen</strong>: €1.000 - €1.400</li>
            <li><strong>Multisplit 3 binnendelen</strong>: €1.400 - €1.800</li>
            <li><strong>Verplaatsen van bestaande airco</strong>: €450 - €750</li>
          </ul>
          <p>
            Prijzen zijn <strong>inclusief</strong>: kabelleggen (tot 4m
            standaard), doorvoer door de gevel, aansluiting op het elektranet,
            F-gassen vullen, vacumeren, inbedrijfstelling en oplevering.
          </p>
          <p>
            <strong>Niet inbegrepen</strong>: meerkosten voor extra kabellengte,
            hoogwerker, nieuwe elektragroep, afvoer van oude apparaten, en
            eventueel doorbraakwerk in dragende muren.
          </p>
        </>
      ),
    },
    {
      h2: "Wat is het uurtarief van een airco-monteur?",
      body: (
        <>
          <p>
            F-gassen gecertificeerde monteurs in Limburg rekenen typisch
            <strong> €55 tot €85 per uur</strong>. Voorrijkosten daarbovenop:
            €45-€70.
          </p>
          <p>
            Een single-split-installatie duurt 3 tot 5 uur. Met uurtarief +
            materialen kom je daarmee op ongeveer het genoemde €600-€950. Als
            een monteur significant daaronder zit, check dan of F-gassen vullen
            en inbedrijfstelling echt inbegrepen zijn.
          </p>
          <p>
            Buiten kantooruren (avond/weekend) stijgt het uurtarief met 25-50%.
            Voor spoed-installatie (binnen 48 uur): reken op 10-20% opslag.
          </p>
        </>
      ),
    },
    {
      h2: "Wat zit er allemaal in de installatie?",
      body: (
        <>
          <p>
            Een complete installatie (3-5 uur voor single split) bestaat uit:
          </p>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Inmeten binnen- en buitendeel-locatie</li>
            <li>Muurdoorbraak voor leiding (typisch 6-8 cm diameter)</li>
            <li>Kabelgoot aanleggen binnen (kan in de muur of opbouw)</li>
            <li>Binnendeel monteren op muurbeugel</li>
            <li>Buitendeel monteren op gevelconsole of plaatsen op platdak</li>
            <li>Koelleidingen aansluiten + vacumeren</li>
            <li>F-gassen (R32) afvullen volgens specificatie</li>
            <li>Lektest</li>
            <li>Elektra aansluiten (meestal op bestaande groep)</li>
            <li>Condensafvoer aansluiten (horizontaal naar buiten of op
            riolering)</li>
            <li>Inbedrijfstelling + klant instructie + garantiepapieren</li>
          </ol>
          <p>
            Als één van deze stappen ontbreekt in de offerte, vraag waarom.
            Zonder F-gassen vullen werkt het systeem niet, zonder lektest
            verloopt de garantie.
          </p>
        </>
      ),
    },
    {
      h2: "Toeslagen: kabel, hoogwerker, 3-fase",
      body: (
        <>
          <p>
            Standaard inbegrepen: 3-4 meter kabel tussen binnendeel en
            buitendeel. Elke meter daarboven kost €25-€50.
          </p>
          <p>
            Andere meerkosten die niet in standaard-installatie zitten:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Hoogwerker of dakklim</strong>: €150-€400 (voor
            buitendeel hoog op de gevel of op schuin dak)</li>
            <li><strong>Extra elektragroep</strong>: €180-€450 (bij hogere
            kW-vermogen of meerdere binnendelen)</li>
            <li><strong>3-fase verzwaring</strong>: €250-€500 (eenmalig,
            netbeheerder)</li>
            <li><strong>Afvoer oude airco</strong>: €75-€150 (bij vervanging)</li>
            <li><strong>Kernboren door dragende muur</strong>: €100-€250
            (handmatig of machinaal)</li>
          </ul>
          <p>
            Een goede offerte benoemt deze posten als risico zelfs als ze niet
            van toepassing zijn. Een dubieuze offerte verstopt ze onder "nader
            overleg".
          </p>
        </>
      ),
    },
    {
      h2: "Zzp-monteur of bedrijf?",
      body: (
        <>
          <p>
            Prijsverschil tussen zzp'er en bedrijf voor pure installatie is
            klein (5-15%), maar de <strong>service-ervaring na oplevering</strong>
            verschilt meer.
          </p>
          <p>
            <strong>Zzp'er</strong>: vaak iets lager uurtarief, persoonlijke
            aanpak, minder voorraad-onderdelen bij storing. Garantie ligt bij
            één persoon — als die een jaar later met verlof is, sta je
            misschien te wachten.
          </p>
          <p>
            <strong>Bedrijf</strong>: iets hogere prijs, maar 24/7 service-bel,
            voorraad, meerdere monteurs. Handig bij storing buiten kantoortijd
            of bij grotere installaties.
          </p>
          <p>
            Voor een enkele single-split thuis: zzp'er werkt prima. Voor
            multisplit, zakelijk of een VvE: kies een bedrijf met ruime service.
          </p>
        </>
      ),
    },
  ],
  faq: [
    {
      q: "Wat kost het als ik mijn airco zelf lever?",
      a: "Alleen installatie kost €600-€950 voor single split in Limburg, €1.000-€1.800 voor multisplit. Check wel dat de installateur klant-levert-apparaat accepteert en welke garantie hij daarop geeft.",
    },
    {
      q: "Wat is het uurtarief voor een airco monteur?",
      a: "€55-€85 per uur voor F-gassen gecertificeerde monteurs in Limburg tijdens kantooruren. Voorrijkosten €45-€70. Avond/weekend + 25-50%.",
    },
    {
      q: "Hoe lang duurt een airco-installatie?",
      a: "Single split: 3-5 uur. Multisplit met 2 binnendelen: 6-9 uur. Multisplit met 3+ binnendelen: 1 volledige werkdag.",
    },
    {
      q: "Zijn F-gassen vullen en BTW altijd inbegrepen?",
      a: "Bij nette monteurs in Limburg: ja. Vraag expliciet of F-gassen R32 en 21% BTW in de prijs zitten — zo niet, kan er €100-€200 bij komen.",
    },
    {
      q: "Kan ik een Hornbach-airco laten plaatsen?",
      a: "Vaak wel, maar sommige monteurs willen alleen merken installeren waar ze service-garantie op kunnen geven. Vraag vooraf of een specifiek merk/type wordt geaccepteerd.",
    },
    {
      q: "Wat als er iets kapot gaat na installatie?",
      a: "Bij apparaat-defect: fabrieksgarantie (2-5 jaar). Bij installatie-fout (lek, verkeerde montage): installateurgarantie (minimaal 1-2 jaar). Klant-levert-apparaat: installateur dekt alleen zijn eigen werk, niet het apparaat zelf.",
    },
  ],
  related: [
    {
      href: "/prijzen/single-split",
      title: "Single split inclusief apparaat",
      description: "Complete all-in prijzen voor single split met apparaat + montage.",
    },
    {
      href: "/prijzen/multisplit",
      title: "Multisplit prijzen",
      description: "Wat kost een multi-split met 2, 3 of 4 binnendelen?",
    },
    {
      href: "/gids/all-in-offerte-of-losse-posten",
      title: "All-in of losse posten",
      description: "Hoe voorkom je verborgen kosten in een airco-offerte?",
    },
    {
      href: "https://aircoinstallateurlimburg.nl/",
      title: "Installateur vinden",
      description: "F-gassen erkende monteurs in Zuid-, Midden- en Noord-Limburg.",
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
