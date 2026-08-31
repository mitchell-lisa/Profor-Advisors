import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { business } from "@/lib/business";
import { PageMasthead } from "@/components/chrome";

export const metadata: Metadata = {
  title: `Team — ${business.name}`,
};

/**
 * A list, not a grid — the convention for firms this size. Athos Partners runs
 * 30 bios with no photographs and reads as substantial; a three-card photo grid
 * reads as an empty shelf.
 *
 * While team[] is empty this route 404s and the nav link is hidden, so the site
 * never shows a hollow "coming soon" page. Populate team[] in business.ts and
 * both the page and the nav item appear.
 */
export default function Team() {
  if (business.team.length === 0) notFound();

  return (
    <main id="top" className="flex-1">
      <PageMasthead current="/team" title="Team" />

      <section>
        <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
          <div className="max-w-3xl">
            {business.team.map((person) => (
              <div
                key={person.name}
                className="border-t border-rule py-10 first:border-t-0 first:pt-0 sm:flex sm:gap-12"
              >
                <div className="sm:w-64 sm:shrink-0">
                  <span
                    aria-hidden
                    className="mb-5 block h-px w-6 bg-accent"
                  />
                  <h2 className="font-serif text-2xl leading-snug">
                    {person.name}
                  </h2>
                  <p className="eyebrow mt-2.5 text-muted">{person.role}</p>
                  {person.base && (
                    <p className="eyebrow mt-1.5 text-muted/70">{person.base}</p>
                  )}
                </div>

                {person.bio && (
                  <p className="mt-5 text-base leading-[1.85] text-muted sm:mt-0">
                    {person.bio}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
