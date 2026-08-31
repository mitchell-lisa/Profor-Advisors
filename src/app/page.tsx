import { business } from "@/lib/business";
import { SiteHeader, SectionLabel } from "@/components/chrome";

export default function Home() {
  return (
    <main id="top" className="flex-1">
      {/* Hero — the header lives inside the same slate block on the home page. */}
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

      {/* Expertise summary — the detail lives on /expertise */}
      {business.focus.length > 0 && (
        <section>
          <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
            <SectionLabel>Expertise</SectionLabel>

            <dl className="mt-10 grid gap-x-10 gap-y-0 sm:grid-cols-3">
              {business.focus.map((item) => (
                <div
                  key={item.title}
                  className="border-t border-rule pt-5 pb-8 sm:pb-0"
                >
                  <dt className="font-serif text-xl leading-snug sm:text-[1.375rem]">
                    {item.title}
                  </dt>
                  <dd className="mt-3 max-w-xs text-sm leading-[1.7] text-muted">
                    {item.body}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-10">
              <a
                className="eyebrow border-b border-rule pb-1 text-ink no-underline transition-colors hover:border-ink"
                href="/expertise"
              >
                What we do
              </a>
            </p>
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

      {/* Closing — routes to the diligence page */}
      <section className="border-t border-rule">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
          <SectionLabel>The firm</SectionLabel>
          <p className="mt-8 max-w-2xl font-serif text-xl leading-[1.5] sm:text-2xl">
            {business.name} is a trade name of{" "}
            {business.legalName ?? business.name}, a broker-dealer registered
            with the SEC and a member of FINRA and SIPC.
          </p>
          <p className="mt-8">
            <a
              className="eyebrow border-b border-rule pb-1 text-ink no-underline transition-colors hover:border-ink"
              href="/firm"
            >
              Registration details
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
