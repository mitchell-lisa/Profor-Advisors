import type { Metadata } from "next";
import { business } from "@/lib/business";
import { PageMasthead, SectionLabel } from "@/components/chrome";

export const metadata: Metadata = {
  title: `The firm | ${business.name}`,
  description: `${business.name} is a trade name of ${
    business.legalName ?? business.name
  }, a broker-dealer registered with the SEC and a member of FINRA and SIPC.`,
};

export default function Firm() {
  return (
    <main id="top" className="flex-1">
      <PageMasthead
        current="/firm"
        title="The firm"
        lede={`${business.name} is a trade name of ${
          business.legalName ?? business.name
        }, a broker-dealer registered with the SEC and a member of FINRA and SIPC.`}
      />

      {/* Registration: the diligence block. The reason this page exists. */}
      {business.facts.length > 0 && (
        <section>
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
    </main>
  );
}
