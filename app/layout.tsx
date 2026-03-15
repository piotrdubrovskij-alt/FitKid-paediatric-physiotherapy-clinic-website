import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Poppins } from "next/font/google";
import StructuredData from "./schema";
import AnalyticsEvents from "@/components/AnalyticsEvents";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FitKid - Vaikų kineziterapijos klinika Vilniuje | Kūdikių ir vaikų gydymas",
  description: "Profesionali vaikų kineziterapija Vilniaus centre. Kūdikių masažai, plukdymas, kineziterapija nuo 5 savaičių. Patyrę licencijuoti specialistai. ☎ +370 666 99676",
  keywords: "kineziterapija vaikams Vilnius, kūdikių masažas, vaikų fizioterapija, kūdikių plukdymas, pediatrinė kineziterapija, vaikų masažas Vilnius, FitKid klinika",
  authors: [{ name: "FitKid" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "FitKid - Vaikų kineziterapijos klinika Vilniuje",
    description: "Aukščiausios kokybės vaikų ir kūdikių gydymas Vilniaus centre. Kineziterapija, masažai, plukdymas. Patyrę specialistai.",
    url: "https://fitkid.lt",
    siteName: "FitKid",
    locale: "lt_LT",
    type: "website",
    images: [
      {
        url: "https://fitkid.lt/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FitKid vaikų kineziterapijos klinika",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FitKid - Vaikų kineziterapija Vilniuje",
    description: "Profesionali vaikų ir kūdikių kineziterapija, masažai, plukdymas",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
  alternates: {
    canonical: "https://fitkid.lt",
    languages: {
      'lt': 'https://fitkid.lt',
      'en': 'https://fitkid.lt/en',
      'ru': 'https://fitkid.lt/ru',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lt" className="scroll-smooth">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HLJPTQ5XLD" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HLJPTQ5XLD');
        `}} />
        <link href="https://www.manodaktaras.lt/widget/css/mydocwidget.css" rel="stylesheet" />
        <StructuredData />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <AnalyticsEvents />
        {children}
        <Script
          src="https://www.manodaktaras.lt/widget/js/mydocwidget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
