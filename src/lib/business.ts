/**
 * Single source of truth for every business-specific fact on this site.
 *
 * RULES
 * - If a fact is not verified, it stays `null`. Components render nothing for `null`.
 * - Never invent years in business, credentials, awards, staff, pricing, or claims.
 * - `status` drives noindex + demo banner. Do not hand-edit those in components.
 */

export type Hours = {
  day: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
  open: string | null; // "09:00" — null means closed
  close: string | null;
};

export type Service = {
  name: string;
  blurb: string | null;
};

export type Business = {
  id: string;
  status: "scaffold" | "demo" | "sold" | "client" | "archived";

  name: string;
  legalName: string | null;
  tagline: string | null;
  description: string | null;
  industry: string | null;
  yearEstablished: number | null;

  phone: string | null; // E.164, e.g. "+18565550100"
  phoneDisplay: string | null; // e.g. "(856) 555-0100"
  email: string | null;

  address: {
    street: string | null;
    city: string | null;
    state: string | null;
    zip: string | null;
    mapsUrl: string | null;
  } | null;

  serviceArea: string[];
  hours: Hours[];
  services: Service[];
  differentiators: string[];

  reviews: {
    rating: number;
    count: number;
    source: string;
    url: string | null;
  } | null;

  social: {
    facebook: string | null;
    instagram: string | null;
    linkedin: string | null;
  };

  cta: {
    primary: { label: string; type: "tel" | "email" | "directions" | "form" } | null;
    secondary: { label: string; type: "tel" | "email" | "directions" | "form" } | null;
  };

  seo: {
    title: string;
    metaDescription: string;
    siteUrl: string | null;
  };
};

export const business: Business = {
  id: "profor-advisors",
  status: "scaffold",

  name: "Profor Advisors",
  legalName: null,
  tagline: null,
  description: null,
  industry: null,
  yearEstablished: null,

  phone: null,
  phoneDisplay: null,
  email: null,

  address: null,

  serviceArea: [],
  hours: [],
  services: [],
  differentiators: [],

  reviews: null,

  social: {
    facebook: null,
    instagram: null,
    linkedin: null,
  },

  cta: {
    primary: null,
    secondary: null,
  },

  seo: {
    title: "Profor Advisors",
    metaDescription: "Profor Advisors — site in development.",
    siteUrl: null,
  },
};

/** True while the site must stay out of search results. */
export const isPrivate = business.status === "scaffold" || business.status === "demo";
