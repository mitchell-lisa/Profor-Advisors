import type { Metadata } from "next";
import { business, formattedAddress } from "@/lib/business";
import { PageMasthead, SectionLabel } from "@/components/chrome";

export const metadata: Metadata = {
  title: `Contact | ${business.name}`,
  description: `${business.name}, ${
    formattedAddress() ?? business.location ?? ""
  }`,
};

/**
 * Address, phone, email. No contact form, since none of the peer firms in this
 * category use one, and data capture by a regulated firm is a compliance
 * decision the firm has to make, not us.
 */
export default function Contact() {
  const address = formattedAddress();

  return (
    <main id="top" className="flex-1">
      <PageMasthead current="/contact" title="Contact" />

      <section>
        <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
          <div className="grid gap-12 sm:grid-cols-2">
            <div>
              <SectionLabel>Office</SectionLabel>
              {address && (
                <address className="mt-6 font-serif text-xl leading-[1.5] not-italic sm:text-2xl">
                  {business.address?.street}
                  <br />
                  {business.address?.suite}
                  <br />
                  {business.address?.city}, {business.address?.state}{" "}
                  {business.address?.zip}
                </address>
              )}
            </div>

            <div>
              <SectionLabel>Get in touch</SectionLabel>
              <div className="mt-6 flex flex-col gap-4 text-lg">
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
        </div>
      </section>
    </main>
  );
}
