import type { Metadata } from "next";
import { business } from "@/lib/business";
import { PageMasthead } from "@/components/chrome";

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

      {business.approach && (
        <section className="border-t border-rule">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-24">
            <p className="eyebrow text-muted">Approach</p>
            <p className="mt-8 max-w-3xl font-serif text-2xl leading-[1.4] tracking-[-0.01em] text-balance sm:text-[2rem] sm:leading-[1.35]">
              {business.approach}
            </p>
          </div>
        </section>
      )}
    </main>
  );
}
