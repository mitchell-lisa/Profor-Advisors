/**
 * Single source of truth for every business-specific fact on this site.
 *
 * RULES
 * - If a fact is not verified, it stays `null` / empty. Components render
 *   nothing rather than a guess.
 * - Every value below is traceable to FINRA BrokerCheck (CRD 136084) or to
 *   Profor's own published site copy. Nothing here is inferred.
 * - `status` drives noindex and the preview banner. Do not override in components.
 */

export type Focus = {
  title: string;
  body: string;
};

export type Fact = {
  label: string;
  value: string;
  href?: string;
};

export type Person = {
  name: string;
  role: string;
  bio: string | null;
  image: string | null;
};

/** One stage of a capital raise. Descriptive of the category, not a claim. */
export type Stage = {
  title: string;
  body: string;
};

export type Business = {
  id: string;
  status: "scaffold" | "demo" | "sold" | "client" | "archived";

  /** Trading name used throughout the site. */
  name: string;
  /** Registered legal entity. Appears in the footer. */
  legalName: string | null;
  /** How the two relate, in plain words. Footer line. */
  entityNote: string | null;

  location: string | null;
  tagline: string | null;
  lede: string | null;
  approach: string | null;

  phone: string | null;
  phoneDisplay: string | null;
  email: string | null;

  address: {
    street: string | null;
    suite: string | null;
    city: string | null;
    state: string | null;
    zip: string | null;
  } | null;

  focus: Focus[];
  /** How an engagement runs, stage by stage. */
  process: Stage[];
  /** Registration details an allocator would check during diligence. */
  facts: Fact[];
  team: Person[];

  registration: {
    crd: string | null;
    secNumber: string | null;
    memberships: { label: string; href: string }[];
    /** FINRA Rule 2210(d)(8) requires a reference and hyperlink to BrokerCheck. */
    brokerCheckUrl: string | null;
  };

  seo: {
    title: string;
    metaDescription: string;
    siteUrl: string | null;
  };

  /** Preview disclosure. Shown whenever status is "scaffold" or "demo". */
  preview: {
    builtBy: string;
    contactEmail: string;
  };
};

export const business: Business = {
  id: "profor-advisors",
  status: "demo",

  name: "Profor Advisors",
  legalName: "Profor Securities, LLC",
  entityNote: "Profor Advisors is a trade name of Profor Securities, LLC.",

  location: "Rye Brook, New York",

  // Adapted from Profor's own published site copy. No claims added.
  tagline:
    "Marketing, sales, and product placement for alternative investment managers.",
  lede: "Profor Advisors provides marketing and sales consulting to asset managers and places alternative investments with institutional investors worldwide.",
  approach:
    "Our group’s experience and institutional networks let us tailor each engagement to the manager — throughout the capital-raising process and beyond.",

  phone: "+16462022969",
  phoneDisplay: "646.202.2969",
  email: null, // UNKNOWN — awaiting the firm

  address: {
    street: "800 Westchester Avenue",
    suite: "Suite 641N",
    city: "Rye Brook",
    state: "NY",
    zip: "10573",
  },

  /**
   * Named as transaction types, not benefits — the convention across this
   * category (Campbell Lutyens and Monument Group both call this section
   * "Expertise"; Asante calls it "Solutions"; nobody credible calls it
   * "Services"). Descriptions open with a verb, per the same house style.
   *
   * The scope of each item is taken from Profor's own published copy. The
   * wording is DRAFTED and needs Patrick O'Meara's approval before launch —
   * as does everything else on the site.
   */
  focus: [
    {
      title: "Fund placement",
      body: "Act as placement agent to alternative investment managers, introducing funds to institutional investors worldwide and carrying the mandate through to close.",
    },
    {
      title: "Marketing and sales consulting",
      body: "Advise managers on positioning and distribution — how a fund is presented, which investors it suits, and how the sales effort is organised.",
    },
    {
      title: "Capital raising",
      body: "Support the manager throughout the capital-raising process and beyond, tailored to each situation rather than run to a template.",
    },
  ],

  /**
   * How a raise runs, stage by stage. This is a description of what the work
   * of a placement agent consists of — the category's standard sequence, the
   * way Campbell Lutyens splits fund placement into "Advisory and execution"
   * and "Distribution". It makes no claim about Profor's history, mandates,
   * results, or method, and cites no numbers.
   *
   * DRAFTED. Patrick O'Meara approves or rewrites it before launch, like
   * everything else on the site. If his process differs, his version wins.
   */
  process: [
    {
      title: "Positioning",
      body: "Agree the story before anyone hears it — strategy, track record, team, and what genuinely separates the fund from the others an allocator is seeing that quarter.",
    },
    {
      title: "Materials",
      body: "Prepare the deck, the DDQ and the data room so that the obvious diligence questions are already answered by the time they are asked.",
    },
    {
      title: "Targeting",
      body: "Build the investor list. Which institutions fit the strategy, the ticket size and the geography — and, just as important, which do not.",
    },
    {
      title: "Introductions",
      body: "Make the introductions and run the process: meetings, follow-ups, and the sequencing that keeps a raise moving rather than stalling between quarters.",
    },
    {
      title: "Diligence and close",
      body: "Stay with the manager through operational and investment due diligence, and through to the close.",
    },
  ],

  facts: [
    { label: "Registered entity", value: "Profor Securities, LLC" },
    { label: "CRD number", value: "136084" },
    { label: "SEC number", value: "8-66974" },
    { label: "Registered as", value: "Broker-dealer (SEC, FINRA)" },
    { label: "Memberships", value: "FINRA / SIPC" },
    { label: "Office", value: "Rye Brook, New York" },
  ],

  /**
   * Every firm in this category has a team section — including BerchWood
   * Partners, which has three people and still gives it a top-level nav slot.
   * LPs and GPs hire people, not firms, so an absent team section reads as
   * something withheld. This is the highest-value thing Patrick can send us.
   *
   * Convention for a firm this size: a LIST, not a grid — a three-card grid
   * looks like an empty shelf. Athos Partners runs 30 bios with no photographs
   * at all and reads as substantial, so headshots are welcome but not required.
   * Bio formula, lifted from Monument Group: name, title, location, year
   * joined, then prior firms, then education. 75–150 words.
   *
   * Patrick's entry is taken straight from Profor's FINRA BrokerCheck record
   * (CRD 136084), which lists him as a direct owner of 75%+ and as Managing
   * Director, Designated Principal, Chief Compliance Officer and AML
   * Compliance Principal. The two titles shown are the two that mean anything
   * to an outside reader; the rest are internal regulatory roles.
   *
   * `bio: null` renders nothing. One paragraph from Patrick — title, location,
   * year, prior firms, education — turns this from a name into the thing an
   * allocator actually reads.
   *
   * BrokerCheck also lists Thomas Gerard Mahala (Registered Principal) and
   * Martin Jay Pollock (FINOP) as executive officers. Deliberately not shown:
   * FINOP is an internal regulatory role rather than a client-facing one, and
   * BrokerCheck records lag departures. Add them only if Patrick confirms.
   */
  team: [
    {
      name: "Patrick J. O'Meara Jr.",
      role: "Managing Director and Chief Compliance Officer",
      bio: null, // awaiting one paragraph from Patrick
      image: null,
    },
  ],

  registration: {
    crd: "136084",
    secNumber: "8-66974",
    memberships: [
      { label: "FINRA", href: "https://www.finra.org" },
      { label: "SIPC", href: "https://www.sipc.org" },
    ],
    brokerCheckUrl: "https://brokercheck.finra.org/firm/summary/136084",
  },

  seo: {
    title: "Profor Advisors — Placement agent for alternative investment managers",
    metaDescription:
      "Profor Advisors provides marketing and sales consulting to asset managers and places alternative investments with institutional investors worldwide. Rye Brook, New York.",
    siteUrl: null, // set to the real domain at launch
  },

  preview: {
    builtBy: "MJL Collective",
    contactEmail: "mitchelljordanlisa@gmail.com",
  },
};

/** True while the site must stay out of search results and show the preview notice. */
export const isPrivate =
  business.status === "scaffold" || business.status === "demo";

export function formattedAddress(): string | null {
  const a = business.address;
  if (!a) return null;
  return [a.street, a.suite, [a.city, a.state].filter(Boolean).join(", "), a.zip]
    .filter(Boolean)
    .join(" · ");
}
