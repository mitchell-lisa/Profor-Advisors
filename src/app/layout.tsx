import type { Metadata } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import { business, isPrivate } from "@/lib/business";
import { PreviewNotice, SiteHeader, SiteFooter } from "@/components/chrome";
import "./globals.css";

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: business.seo.title,
  description: business.seo.metaDescription,
  metadataBase: business.seo.siteUrl ? new URL(business.seo.siteUrl) : undefined,
  robots: isPrivate ? { index: false, follow: false } : undefined,
  openGraph: {
    title: business.seo.title,
    description: business.seo.metaDescription,
    siteName: business.name,
    type: "website",
  },
};

function structuredData() {
  const a = business.address;

  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: business.name,
    legalName: business.legalName ?? undefined,
    description: business.lede ?? undefined,
    url: business.seo.siteUrl ?? undefined,
    telephone: business.phoneDisplay ?? undefined,
    address: a
      ? {
          "@type": "PostalAddress",
          streetAddress: [a.street, a.suite].filter(Boolean).join(", "),
          addressLocality: a.city ?? undefined,
          addressRegion: a.state ?? undefined,
          postalCode: a.zip ?? undefined,
          addressCountry: "US",
        }
      : undefined,
  };
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <PreviewNotice />
        <SiteHeader />
        {children}
        <SiteFooter />

        {!isPrivate && (
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData()),
            }}
          />
        )}
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import { business, isPrivate } from "@/lib/business";
import "./globals.css";

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: business.seo.title,
  description: business.seo.metaDescription,
  robots: isPrivate ? { index: false, follow: false } : undefined,
  openGraph: {
    title: business.seo.title,
    description: business.seo.metaDescription,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
