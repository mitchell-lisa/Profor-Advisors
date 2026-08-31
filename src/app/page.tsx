import { business, formattedAddress } from "@/lib/business";
import { SiteHeader } from "@/components/chrome";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow text-muted">{children}</p>;
}

export default function Home() {
  const address = formattedAddress();

  return (
    <main id="top" className="flex-1">
      {/* Hero — inverted panel. The page opens into light below it. */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-5xl px-6 sm:px-10">
          <SiteHeader />

          <div className="pt-16 pb-20 sm:pt-24 sm:pb-28">
            {business.location && (
              <p className="eyebrow text-navy-soft">
                Placement agent · {business.location}
              </p>
            )}

            {business.tagline && (
              <h1 className="mt-6 max-w-3xl font-serif text-[2rem] leading-[1.12] tracking-[-0.015em] text-balance sm:text-5xl lg:text-[3.5rem]">
                {business.tagline}
              </h1>
            )}

            {business.lede && (
              <p className="mt-8 max-w-2xl text-base leading-[1.75] text-navy-soft sm:text-lg">
                {business.lede}
              </p>
            )}

            {business.phone && (
              <p className="mt-10">
                <a
                  className="inline-flex min-h-11 items-center border-b border-white/50 pb-1 font-serif text-lg text-white no-underline transition-colors hover:border-white sm:text-xl"
                  href={`tel:${business.phone}`}
                >
                  {business.phoneDisplay}
                </a>
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Expertise */}
      {business.focus.length > 0 && (
        <section>
          <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
            <SectionLabel>Expertise</SectionLabel>

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

      {/* Team — a list, not a grid. Renders nothing until the firm supplies people. */}
      {business.team.length > 0 && (
        <section className="border-t border-rule">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
            <SectionLabel>Team</SectionLabel>

            <div className="mt-10 max-w-3xl">
              {business.team.map((person) => (
                <div
                  key={person.name}
                  className="border-t border-rule py-8 first:border-t-0 first:pt-0 sm:flex sm:gap-10"
                >
                  <div className="sm:w-56 sm:shrink-0">
                    <h3 className="font-serif text-xl leading-snug">
                      {person.name}
                    </h3>
                    <p className="eyebrow mt-2 text-muted">{person.role}</p>
                  </div>

                  {person.bio && (
                    <p className="mt-4 text-[0.9375rem] leading-[1.75] text-muted sm:mt-0">
                      {person.bio}
                    </p>
                  )}
                </div>
              ))}
            </div>
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
