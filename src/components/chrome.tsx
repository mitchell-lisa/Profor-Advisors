import { business, formattedAddress, isPrivate } from "@/lib/business";

/**
 * The wordmark. The firm has no logo, so this is it: PROFOR in letterspaced
 * serif capitals, a hairline rule beneath, ADVISORS set small and right-aligned
 * under the rule. The rule echoes the horizontal banding of 800 Westchester.
 *
 * tone describes the TEXT colour: "light" for use on the slate panels.
 */
export function Wordmark({
  tone = "dark",
  size = "sm",
}: {
  tone?: "dark" | "light";
  size?: "sm" | "lg";
}) {
  const ink = tone === "light" ? "text-white" : "text-ink";
  const sub = tone === "light" ? "text-navy-soft" : "text-muted";

  const markSize = size === "lg" ? "text-xl sm:text-2xl" : "text-sm sm:text-base";
  const subSize = size === "lg" ? "text-[10px]" : "text-[8px] sm:text-[9px]";

  return (
    <span className="inline-block select-none">
      <span
        className={`block font-serif font-semibold uppercase leading-none tracking-[0.22em] ${markSize} ${ink}`}
      >
        Profor
      </span>
      {/* The rule under the wordmark is the one place the brass appears at
          full strength. It is what stops the mark reading as set in a text
          field and starts it reading as drawn. */}
      <span className="mt-2 block h-px w-full bg-accent" />
      <span
        className={`mt-1.5 block text-right font-sans uppercase leading-none tracking-[0.34em] mr-[-0.34em] ${subSize} ${sub}`}
      >
        Advisors
      </span>
    </span>
  );
}

/**
 * Navigation. Four items is the boutique convention — Athos runs five, Gallatin
 * four, BerchWood six. Team appears only once the firm has supplied people; an
 * empty Team page reads worse than no Team tab.
 */
export function navItems() {
  const items = [
    { href: "/expertise", label: "Expertise" },
    { href: "/team", label: "Team", requiresTeam: true },
    { href: "/firm", label: "Firm" },
    { href: "/contact", label: "Contact" },
  ];

  return items.filter((i) => !i.requiresTeam || business.team.length > 0);
}

/**
 * Discreet notice that this is a preview, not the firm's live site.
 * Renders only while status is "scaffold" or "demo". Required — a speculative
 * build must never present itself as the official website of the business.
 */
export function PreviewNotice() {
  if (!isPrivate) return null;

  return (
    <div className="border-b border-rule bg-strip">
      <p className="mx-auto max-w-5xl px-6 py-2.5 text-[11px] leading-relaxed text-muted sm:px-10">
        Preview built by {business.preview.builtBy} — not the official website of{" "}
        {business.name}.{" "}
        <a
          className="underline underline-offset-2 hover:text-ink"
          href={`mailto:${business.preview.contactEmail}`}
        >
          {business.preview.contactEmail}
        </a>
      </p>
    </div>
  );
}

/**
 * Slate header band. Sits on every page. On the home page the hero continues
 * inside the same slate block; interior pages open into light directly beneath.
 * No JavaScript — the nav is four links and always visible.
 *
 * The phone number is DESKTOP ONLY, at the far right of the nav line. On a
 * phone it used to wrap onto its own row under the nav and sit there
 * orphaned, left-aligned under nothing, which was the single most
 * template-looking thing on the site. Mobile does not lose the number: the
 * hero carries it as a large tap target immediately below, and /contact has
 * it again. A header is not the place to say something twice.
 *
 * The current page is marked with a short brass rule beneath it rather than a
 * colour change alone — quieter, and it survives being read at a glance.
 */
export function SiteHeader({ current }: { current?: string }) {
  const items = navItems();

  return (
    <div className="border-b border-navy-rule py-6 sm:py-7">
      <div className="flex items-start justify-between gap-x-6 gap-y-6 max-sm:flex-col">
        <a href="/" className="no-underline">
          <Wordmark tone="light" />
        </a>

        <div className="flex w-full items-center justify-between gap-x-8 pt-1 sm:w-auto sm:justify-end">
          <nav className="flex items-center gap-x-6 sm:gap-x-8">
            {items.map((item) => {
              const active = current === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`navitem group relative no-underline transition-colors hover:text-white ${
                    active ? "text-white" : "text-navy-soft"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={`absolute -bottom-2 left-0 h-px w-full transition-colors ${
                      active ? "bg-accent" : "bg-transparent group-hover:bg-navy-rule"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {business.phone && (
            <a
              className="navitem hidden text-navy-soft no-underline transition-colors hover:text-white sm:inline-block"
              href={`tel:${business.phone}`}
            >
              {business.phoneDisplay}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * The facts an allocator checks first, set as a rail of figures across the
 * bottom of the slate block rather than buried on an interior page. It is the
 * one thing on the site no template could have supplied, so it earns the
 * position — and it means the registration is visible before a single scroll.
 */
export function DataRail() {
  const { registration } = business;

  const cells = [
    registration.memberships.length > 0
      ? {
          label: "Member",
          value: registration.memberships.map((m) => m.label).join(" / "),
        }
      : null,
    registration.crd ? { label: "CRD", value: registration.crd } : null,
    registration.secNumber
      ? { label: "SEC", value: registration.secNumber }
      : null,
    business.location ? { label: "Office", value: business.location } : null,
  ].filter((c): c is { label: string; value: string } => c !== null);

  if (cells.length === 0) return null;

  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-7 border-t border-navy-rule pt-6 pb-8 sm:grid-cols-4 sm:gap-x-8 sm:pt-7 sm:pb-9">
      {cells.map((cell) => (
        <div key={cell.label}>
          <dt className="rail text-navy-soft/60">{cell.label}</dt>
          <dd className="rail mt-2.5 text-white">{cell.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Slate band containing the header plus, on interior pages, the page title. */
export function PageMasthead({
  current,
  title,
  lede,
}: {
  current?: string;
  title: string;
  lede?: string | null;
}) {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <SiteHeader current={current} />

        <div className="pt-14 pb-16 sm:pt-20 sm:pb-20">
          <h1 className="max-w-3xl font-serif text-[2rem] leading-[1.15] tracking-[-0.015em] text-balance sm:text-[2.75rem]">
            {title}
          </h1>
          {lede && (
            <p className="mt-6 max-w-2xl text-base leading-[1.75] text-navy-soft sm:text-lg">
              {lede}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

/** Section label with a short brass tick — the same accent as the wordmark rule. */
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow flex items-center gap-3 text-muted">
      <span aria-hidden className="block h-px w-6 shrink-0 bg-accent" />
      {children}
    </p>
  );
}

export function SiteFooter() {
  const address = formattedAddress();
  const { registration } = business;
  const items = navItems();

  return (
    <footer className="mt-auto bg-navy text-navy-soft">
      <div className="mx-auto max-w-5xl px-6 py-14 sm:px-10 sm:py-16">
        <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-8">
          <a href="/" className="no-underline">
            <Wordmark tone="light" size="lg" />
          </a>

          <nav className="flex flex-wrap gap-x-7 gap-y-3 pt-2">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="eyebrow text-navy-soft no-underline transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 grid gap-8 border-t border-navy-rule pt-8 text-sm leading-relaxed sm:grid-cols-2">
          <div>
            {address && <p>{address}</p>}
            {business.phone && (
              <p className="mt-1">
                <a
                  className="no-underline transition-colors hover:text-white"
                  href={`tel:${business.phone}`}
                >
                  {business.phoneDisplay}
                </a>
              </p>
            )}
            {business.email && (
              <p className="mt-1">
                <a
                  className="no-underline transition-colors hover:text-white"
                  href={`mailto:${business.email}`}
                >
                  {business.email}
                </a>
              </p>
            )}
          </div>

          <div className="sm:text-right">
            {business.entityNote && <p>{business.entityNote}</p>}

            {registration.memberships.length > 0 && (
              <p className="mt-1">
                Member{" "}
                {registration.memberships.map((m, i) => (
                  <span key={m.label}>
                    {i > 0 && " / "}
                    <a
                      className="underline underline-offset-2 transition-colors hover:text-white"
                      href={m.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {m.label}
                    </a>
                  </span>
                ))}
              </p>
            )}

            {registration.brokerCheckUrl && (
              <p className="mt-1">
                Check our background on{" "}
                <a
                  className="underline underline-offset-2 transition-colors hover:text-white"
                  href={registration.brokerCheckUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FINRA BrokerCheck
                </a>
                {registration.crd && ` · CRD ${registration.crd}`}
              </p>
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-navy-rule pt-6 text-xs leading-relaxed text-navy-soft/70 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
          {/* The firm's own transaction disclosure, in the firm's own words. */}
          {registration.disclosure && (
            <p className="max-w-xl">{registration.disclosure}</p>
          )}
          <p className="shrink-0">
            © {new Date().getFullYear()} {business.legalName ?? business.name}.
          </p>
        </div>
      </div>
    </footer>
  );
}
