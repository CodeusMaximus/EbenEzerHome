import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import CookieConsent from "./components/CookieConsent";
import { LanguageProvider } from "./components/LanguageContext";
import SiteChrome from "./components/SiteChrome";
import "./globals.css";
import ReferralFormProvider from "./components/referralformprovider";

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
   * SEO METADATA — LONG ISLAND, NEW YORK
   * ============================================================
   *
   * The organization is currently searching for its
   * residential property on Long Island.
   *
   * No metadataBase or canonical URL is configured yet
   * because the production domain has not been selected.
   */

  title: {
    default:
      "Eben-Ezer House of Hope | Recovery Housing on Long Island, NY",
    template: "%s | Eben-Ezer House of Hope",
  },

  description:
    "Eben-Ezer House of Hope is developing a supportive sober living and recovery housing community on Long Island, New York. Our mission is to help individuals build stability, independence, and renewed hope through structure, accountability, fellowship, and compassionate support.",

  keywords: [
    // Organization
    "Eben-Ezer House of Hope",
    "Ebenezer House of Hope",
    "Eben Ezer House of Hope",

    // Long Island
    "sober living Long Island",
    "sober living Long Island NY",
    "recovery housing Long Island",
    "recovery residences Long Island",
    "transitional housing Long Island",
    "supportive housing Long Island",
    "recovery support Long Island",

    // Nassau County
    "sober living Nassau County",
    "recovery housing Nassau County",
    "transitional housing Nassau County",
    "supportive housing Nassau County",

    // Suffolk County
    "sober living Suffolk County",
    "recovery housing Suffolk County",
    "transitional housing Suffolk County",
    "supportive housing Suffolk County",

    // Programs and services
    "supportive sober living",
    "structured sober living",
    "recovery community",
    "substance free living",
    "recovery support services",
    "community based recovery support",
    "independent living support",
    "structured recovery housing",
    "transitional recovery housing",
    "recovery focused housing",

    // Mission and values
    "faith based recovery support",
    "compassionate recovery housing",
    "accountability in recovery",
    "community support for recovery",
    "rebuilding lives through recovery",

    // Broader region
    "sober living New York",
    "recovery housing New York",
    "supportive recovery residences New York",
  ],

  authors: [
    {
      name: "Eben-Ezer House of Hope",
    },
  ],

  creator: "Eben-Ezer House of Hope",

  publisher: "Eben-Ezer House of Hope",

  applicationName: "Eben-Ezer House of Hope",

  category: "Recovery Housing and Supportive Living",

  /*
   * ============================================================
   * OPEN GRAPH
   * Facebook, LinkedIn, and other social platforms
   * ============================================================
   */

  openGraph: {
    type: "website",

    locale: "en_US",

    siteName: "Eben-Ezer House of Hope",

    title:
      "Eben-Ezer House of Hope | A New Beginning on Long Island",

    description:
      "A supportive recovery housing community in development on Long Island, New York. Built on faith, dignity, accountability, community, and the belief that every person deserves an opportunity for a new beginning.",

    // Add an Open Graph image when available:
    // images: [
    //   {
    //     url: "/images/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Eben-Ezer House of Hope",
    //   },
    // ],
  },

  /*
   * ============================================================
   * TWITTER / X
   * Social sharing metadata
   * ============================================================
   */

  twitter: {
    card: "summary_large_image",

    title:
      "Eben-Ezer House of Hope | Recovery Housing on Long Island",

    description:
      "Building a foundation for recovery, stability, and renewed hope. Discover Eben-Ezer House of Hope, a supportive living community in development on Long Island, New York.",
  },

  /*
   * ============================================================
   * SEARCH ENGINE INDEXING
   * ============================================================
   *
   * IMPORTANT:
   *
   * Keep indexing disabled while the website is
   * under development.
   *
   * When the production domain is connected and
   * the organization is ready for public visibility,
   * change index and follow to true.
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
            <ReferralFormProvider>
              <CookieConsent />
              <SiteChrome>{children}

              </SiteChrome>
            </ReferralFormProvider>
          </LanguageProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}