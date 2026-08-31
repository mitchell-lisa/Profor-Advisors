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
