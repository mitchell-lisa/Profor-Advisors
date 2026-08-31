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
