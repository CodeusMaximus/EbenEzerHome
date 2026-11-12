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
  metadataBase: new URL("https://ebenezerhouseofhope.com"),

  title: {
    default:
      "Eben-Ezer House of Hope | Recovery Housing on Long Island, NY",
    template: "%s | Eben-Ezer House of Hope",
  },

  description:
    "Eben-Ezer House of Hope is developing a supportive recovery housing community on Long Island, New York. Our mission is to help individuals build stability, independence, and renewed hope through structure, accountability, fellowship, and compassionate support.",

  keywords: [
    "Eben-Ezer House of Hope",
    "Ebenezer House of Hope",
    "sober living Long Island",
    "recovery housing Long Island",
    "supportive housing Long Island",
    "transitional housing Long Island",
    "sober living Nassau County",
    "recovery housing Nassau County",
    "sober living Suffolk County",
    "recovery housing Suffolk County",
    "structured sober living",
    "recovery support services",
    "supportive recovery community",
    "independent living support",
    "faith based recovery support",
    "veterans recovery housing Long Island",
    "women's supportive housing Long Island",
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

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ebenezerhouseofhope.com",
    siteName: "Eben-Ezer House of Hope",

    title:
      "Eben-Ezer House of Hope | A New Beginning on Long Island",

    description:
      "A supportive recovery housing community in development on Long Island, New York. Built on faith, dignity, accountability, community, and renewed hope.",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Eben-Ezer House of Hope | Recovery Housing on Long Island",

    description:
      "Building a foundation for recovery, stability, and renewed hope on Long Island, New York.",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
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