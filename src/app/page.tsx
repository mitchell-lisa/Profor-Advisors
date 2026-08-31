import { business, formattedAddress } from "@/lib/business";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow text-muted">{children}</p>;
}

export default function Home() {
  const address = formattedAddress();

  return (
    <main id="top" className="flex-1">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-20 sm:px-10 sm:pt-28 sm:pb-28">
        {business.location && (
          <SectionLabel>Placement agent · {business.location}</SectionLabel>
        )}

        {business.tagline && (
          <h1 className="mt-6 max-w-3xl font-serif text-[2rem] leading-[1.12] tracking-[-0.015em] text-balance sm:text-5xl lg:text-[3.5rem]">
            {business.tagline}
          </h1>
        )}

        {business.lede && (
          <p className="mt-8 max-w-2xl text-base leading-[1.75] text-muted sm:text-lg">
            {business.lede}
          </p>
        )}

        {business.phone && (
          <p className="mt-10">
            <a
              className="inline-flex min-h-11 items-center border-b border-ink pb-1 font-serif text-lg text-ink no-underline transition-colors hover:border-muted hover:text-muted sm:text-xl"
              href={`tel:${business.phone}`}
            >
              {business.phoneDisplay}
            </a>
          </p>
        )}
      </section>

      {/* What we do */}
      {business.focus.length > 0 && (
        <section className="border-t border-rule">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
            <SectionLabel>What we do</SectionLabel>

            <dl className="mt-10 grid gap-x-10 gap-y-0 sm:grid-cols-3">
              {business.focus.map((item) => (
                <div key={item.title} className="border-t border-rule pt-5 pb-8 sm:pb-0">
                  <dt className="font-serif text-xl leading-snug sm:text-[1.375rem]">
                    {item.title}
                  </dt>
                  <dd className="mt-3 max-w-xs text-sm leading-[1.7] text-muted">
                    {item.body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* Approach */}
      {business.approach && (
        <section className="border-t border-rule">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-24">
            <SectionLabel>Approach</SectionLabel>
            <p className="mt-8 max-w-3xl font-serif text-2xl leading-[1.4] tracking-[-0.01em] text-balance sm:text-[2rem] sm:leading-[1.35]">
              {business.approach}
            </p>
          </div>
        </section>
      )}

      {/* Registration — the diligence block */}
      {business.facts.length > 0 && (
        <section className="border-t border-rule">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
            <SectionLabel>Registration</SectionLabel>

            <dl className="mt-10 max-w-2xl">
              {business.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col gap-1 border-b border-rule py-4 first:border-t sm:flex-row sm:items-baseline sm:gap-8"
                >
                  <dt className="eyebrow text-muted sm:w-48 sm:shrink-0">
                    {fact.label}
                  </dt>
                  <dd className="text-[0.9375rem] leading-relaxed">
                    {fact.href ? (
                      <a
                        className="underline underline-offset-4 decoration-rule transition-colors hover:decoration-ink"
                        href={fact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {fact.value}
                      </a>
                    ) : (
                      fact.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            {business.registration.brokerCheckUrl && (
              <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
                Our firm and registered professionals can be researched on{" "}
                <a
                  className="underline underline-offset-4 decoration-rule transition-colors hover:decoration-ink hover:text-ink"
                  href={business.registration.brokerCheckUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FINRA BrokerCheck
                </a>
                .
              </p>
            )}
          </div>
        </section>
      )}

      {/* Contact */}
      <section className="border-t border-rule">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-24">
          <SectionLabel>Contact</SectionLabel>

          <div className="mt-8">
            {address && (
              <address className="font-serif text-xl leading-[1.5] not-italic sm:text-2xl">
                {business.address?.street}
                <br />
                {business.address?.suite}
                <br />
                {business.address?.city}, {business.address?.state}{" "}
                {business.address?.zip}
              </address>
            )}

            <div className="mt-8 flex flex-col gap-2 text-lg sm:flex-row sm:gap-10">
              {business.phone && (
                <a
                  className="inline-flex min-h-11 w-fit items-center border-b border-ink pb-1 font-serif no-underline transition-colors hover:border-muted hover:text-muted"
                  href={`tel:${business.phone}`}
                >
                  {business.phoneDisplay}
                </a>
              )}
              {business.email && (
                <a
                  className="inline-flex min-h-11 w-fit items-center border-b border-ink pb-1 font-serif no-underline transition-colors hover:border-muted hover:text-muted"
                  href={`mailto:${business.email}`}
                >
                  {business.email}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
import { business } from "@/lib/business";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-24">
      <div className="w-full max-w-xl">
        <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-muted">
          In development
        </p>

        <h1 className="mt-5 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
          {business.name}
        </h1>

        {business.tagline && (
          <p className="mt-4 max-w-md font-sans text-lg leading-relaxed text-muted">
            {business.tagline}
          </p>
        )}

        <hr className="mt-10 border-0 border-t border-rule" />

        <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-muted">
          This site is being built. Content and design are in progress — nothing
          on this page is final.
        </p>

        {business.email && (
          <p className="mt-6 font-sans text-sm">
            <a
              className="underline underline-offset-4 decoration-rule hover:decoration-current"
              href={`mailto:${business.email}`}
            >
              {business.email}
            </a>
          </p>
        )}
      </div>
    </main>
  );
}
