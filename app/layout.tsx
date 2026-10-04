import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { LanguageProvider } from "./components/LanguageContext";
import SiteChrome from "./components/SiteChrome";
import BookingProvider from "./components/BookingProvider";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  /*
   * ============================================================
   * EBEN-EZER HOUSE OF HOPE
   * ============================================================
   *
   * No metadataBase or canonical URL yet because the production
   * domain has not been selected.
   *
   * Add those once the live domain is connected.
   */

  title: {
    default: "Eben-Ezer House of Hope | Sober Living in Brooklyn, NY",
    template: "%s | Eben-Ezer House of Hope",
  },

  description:
    "Eben-Ezer House of Hope is establishing a supportive sober living community in Brooklyn, New York, built around structure, accountability, fellowship, dignity, and renewed hope.",

  keywords: [
    "Eben-Ezer House of Hope",
    "sober living Brooklyn",
    "sober living Brooklyn NY",
    "sober living New York",
    "recovery housing Brooklyn",
    "recovery residence Brooklyn",
    "supportive sober living",
    "structured sober living",
    "sober living community",
    "recovery support Brooklyn",
    "substance free living Brooklyn",
    "recovery community New York",
    "transitional sober living",
    "independent living recovery",
    "recovery housing New York",
    "Brooklyn recovery support",
  ],

  authors: [
    {
      name: "Eben-Ezer House of Hope",
    },
  ],

  creator: "Eben-Ezer House of Hope",
  publisher: "Eben-Ezer House of Hope",

  applicationName: "Eben-Ezer House of Hope",

  category: "Sober Living and Recovery Support",

  /*
   * ============================================================
   * OPEN GRAPH
   * ============================================================
   *
   * No absolute URL yet because the production domain
   * has not been established.
   */

  openGraph: {
    type: "website",
    locale: "en_US",

    siteName: "Eben-Ezer House of Hope",

    title:
      "Eben-Ezer House of Hope | Sober Living in Brooklyn, NY",

    description:
      "A supportive sober living community being established in Brooklyn, New York, where individuals in recovery can rebuild their lives through structure, community, accountability, and renewed hope.",
  },

  /*
   * ============================================================
   * SOCIAL SHARING
   * ============================================================
   */

  twitter: {
    card: "summary_large_image",

    title:
      "Eben-Ezer House of Hope | Sober Living in Brooklyn, NY",

    description:
      "Building a strong foundation for recovery through structure, community, accountability, dignity, and renewed hope.",
  },

  /*
   * ============================================================
   * SEARCH ENGINES
   * ============================================================
   *
   * KEEP FALSE WHILE THE WEBSITE IS UNDER DEVELOPMENT.
   *
   * Change these to true when the real domain is connected
   * and the website is ready for public indexing.
   */

  robots: {
    index: false,
    follow: false,

    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body>
          <LanguageProvider>
            <BookingProvider>
              <SiteChrome>{children}</SiteChrome>
            </BookingProvider>
          </LanguageProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}