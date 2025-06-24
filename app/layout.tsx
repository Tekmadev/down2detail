import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";
import I18nProvider from "@/components/I18nProvider";
import ScrollRestoration from "@/components/ScrollRestoration";
import Script from "next/script";

// Set this to false when you're ready to launch the full site
const MAINTENANCE_MODE = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://down2detail.ca"),
  title: {
    default: "Down2Detail - Premium Auto Detailing Services in Montreal, QC",
    template: "%s | Down2Detail - Montreal Auto Detailing Experts",
  },
  description:
    "Professional auto detailing services in Montreal, Quebec including paint correction, ceramic coating, interior detailing, and mobile car wash. Serving Montreal, Laval, Longueuil, and Greater Montreal Area.",
  keywords: [
    "auto detailing Montreal",
    "car detailing Montreal",
    "paint correction Montreal",
    "ceramic coating Montreal",
    "interior detailing Montreal",
    "mobile car wash Montreal",
    "car detailing Quebec",
    "auto detailing Laval",
    "car wash Longueuil",
    "detailing services Montreal",
    "professional car care Montreal",
    "automotive detailing Quebec",
    "paint protection Montreal",
    "headlight restoration Montreal",
    "car detailing Greater Montreal Area",
    "paint polishing Montreal",
  ],
  authors: [{ name: "Down2Detail Team" }],
  creator: "Down2Detail",
  publisher: "Down2Detail",
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
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://down2detail.ca",
    siteName: "Down2Detail",
    title: "Down2Detail - Premium Auto Detailing Services in Montreal",
    description:
      "Professional auto detailing services in Montreal, Quebec including paint correction, ceramic coating, interior detailing, and mobile services. Serving Greater Montreal Area.",
    images: [
      {
        url: "/images/ceramic.png",
        width: 1200,
        height: 630,
        alt: "Down2Detail - Professional Auto Detailing Services in Montreal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Down2Detail - Premium Auto Detailing Services in Montreal",
    description:
      "Professional auto detailing services in Montreal including paint correction, ceramic coating, interior detailing, and mobile services.",
    images: ["/images/ceramic.png"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || undefined,
  },
  alternates: {
    canonical: "https://down2detail.ca",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://down2detail.ca/#business",
  name: "Down2Detail",
  alternateName: "Down 2 Detail Auto Detailing",
  description:
    "Professional auto detailing services including paint correction, ceramic coating, interior detailing, and mobile car washing services in Montreal, Quebec.",
  url: "https://down2detail.ca",
  telephone: "+1-438-483-8175",
  priceRange: "$$",
  image: "https://down2detail.ca/images/d2dlogo.png",
  logo: "https://down2detail.ca/images/d2dlogo.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Montreal",
    addressRegion: "QC",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "45.5017",
    longitude: "-73.5673",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Montreal",
      addressRegion: "QC",
      addressCountry: "CA",
    },
    {
      "@type": "AdministrativeArea",
      name: "Greater Montreal Area",
      addressRegion: "QC",
      addressCountry: "CA",
    },
    {
      "@type": "AdministrativeArea",
      name: "Quebec",
      addressRegion: "QC",
      addressCountry: "CA",
    },
  ],
  serviceArea: [
    {
      "@type": "City",
      name: "Montreal",
    },
    {
      "@type": "City",
      name: "Laval",
    },
    {
      "@type": "City",
      name: "Longueuil",
    },
    {
      "@type": "City",
      name: "Brossard",
    },
    {
      "@type": "City",
      name: "Saint-Laurent",
    },
    {
      "@type": "City",
      name: "Verdun",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Auto Detailing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Paint Correction",
          description:
            "Professional paint correction and polishing services in Montreal",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ceramic Coating",
          description:
            "Premium ceramic coating application for long-lasting protection in Montreal",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Interior Detailing",
          description:
            "Complete interior cleaning and protection services in Montreal",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile Auto Detailing",
          description:
            "Convenient mobile auto detailing services throughout Montreal",
        },
      },
    ],
  },
  sameAs: [
    "https://www.instagram.com/down2detail.ca",
    "https://www.facebook.com/share/15YrsnB1EY/",
  ],
  openingHours: "Mo-Su 08:00-18:00",
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://calendly.com/down2detail-ca/consultation",
    },
    result: {
      "@type": "Reservation",
      name: "Auto Detailing Service Booking",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_TRACKING_ID', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </Script>

        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Favicon Configuration */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#FF4C00" />
        <meta name="msapplication-TileColor" content="#FF4C00" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <I18nProvider>
          <ScrollRestoration />
          {MAINTENANCE_MODE ? (
            <ComingSoon />
          ) : (
            <>
              <Header />
              <main>{children}</main>
              <Footer />
            </>
          )}
        </I18nProvider>
      </body>
    </html>
  );
}
