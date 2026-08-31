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

  focus: [
    {
      title: "Product placement",
      body: "Placing alternative investments with institutional investors worldwide.",
    },
    {
      title: "Marketing and sales consulting",
      body: "Positioning and distribution support for asset managers.",
    },
    {
      title: "Capital raising",
      body: "Support throughout the capital-raising process and beyond.",
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

  team: [], // Awaiting the firm — nothing published without confirmation

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
    contactEmail: "meetme@cornerof.com",
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
