import type { Metadata } from "next";
import { business } from "@/lib/business";
import { PageMasthead, SectionLabel } from "@/components/chrome";

export const metadata: Metadata = {
  title: `Expertise — ${business.name}`,
  description: business.lede ?? undefined,
};

export default function Expertise() {
  return (
    <main id="top" className="flex-1">
      <PageMasthead
        current="/expertise"
        title="Expertise"
        lede={business.lede}
      />

      <section>
        <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
          <dl className="max-w-3xl">
            {business.focus.map((item) => (
              <div
                key={item.title}
                className="border-t border-rule py-10 first:pt-0 first:border-t-0 sm:flex sm:gap-12"
              >
                <dt className="font-serif text-2xl leading-snug sm:w-64 sm:shrink-0">
                  {item.title}
                </dt>
                <dd className="mt-4 text-[0.9375rem] leading-[1.8] text-muted sm:mt-1">
                  {item.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/*
        How an engagement runs.
        Was a numbered list — 01 / 02 / 03 down the left margin. That device is
        the single most recognisable tell of a generated page; every AI-built
        site in every category has it, and it turns five sentences of substance
        into a graphic. Set instead as an editorial run: the stage name as a
        serif lead-in, the sentence continuing straight out of it, hairlines
        between. The sequence is still legible — it reads top to bottom — but
        the page now looks written rather than laid out.
      */}
      {business.process.length > 0 && (
        <section className="border-t border-rule bg-strip">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
            <SectionLabel>How an engagement runs</SectionLabel>

            <div className="mt-10 max-w-3xl">
              {business.process.map((stage) => (
                <p
                  key={stage.title}
                  className="border-t border-rule py-6 text-[0.9375rem] leading-[1.8] text-muted first:border-t-0 first:pt-0"
                >
                  <span className="mr-2 font-serif text-lg leading-none tracking-[-0.01em] text-ink sm:text-xl">
                    {stage.title}
                  </span>
                  <span aria-hidden className="mr-2 text-accent">
                    —
                  </span>
                  {stage.body}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

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
    </main>
  );
}
