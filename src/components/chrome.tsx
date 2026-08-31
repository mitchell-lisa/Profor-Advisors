import { business, formattedAddress, isPrivate } from "@/lib/business";

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

export function SiteHeader() {
  return (
    <header className="border-b border-rule">
      <div className="mx-auto flex max-w-5xl items-baseline justify-between gap-4 px-6 py-6 sm:px-10 sm:py-7">
        <a
          href="#top"
          className="eyebrow font-serif font-semibold text-ink no-underline"
        >
          {business.name}
        </a>

        {business.phone && (
          <a
            className="eyebrow text-muted no-underline transition-colors hover:text-ink"
            href={`tel:${business.phone}`}
          >
            {business.phoneDisplay}
          </a>
        )}
      </div>
    </header>
  );
}

export function SiteFooter() {
  const address = formattedAddress();
  const { registration } = business;

  return (
    <footer className="mt-auto bg-navy text-navy-soft">
      <div className="mx-auto max-w-5xl px-6 py-14 sm:px-10 sm:py-16">
        <p className="eyebrow font-serif font-semibold text-white">
          {business.name}
        </p>

        <div className="mt-8 grid gap-8 border-t border-navy-rule pt-8 text-sm leading-relaxed sm:grid-cols-2">
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

        <p className="mt-10 border-t border-navy-rule pt-6 text-xs text-navy-soft/70">
          © {new Date().getFullYear()} {business.legalName ?? business.name}.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
