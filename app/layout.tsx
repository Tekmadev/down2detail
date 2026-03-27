import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";
import I18nProvider from "@/components/I18nProvider";
import ScrollRestoration from "@/components/ScrollRestoration";
import StickyCTA from "@/components/StickyCTA";
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
    "Professional auto detailing services in Montreal, Quebec including paint correction, ceramic coating, interior detailing, and exterior car detailing. Serving Montreal, Laval, Longueuil, and Greater Montreal Area.",
  keywords: [
    "ceramic coating Montreal",
    "ceramic coating installer Montreal",
    "best ceramic coating Montreal",
    "professional ceramic coating Longueuil",
    "paint correction Montreal",
    "paint correction Longueuil",
    "best paint correction shop Montreal",
    "auto detailing Montreal",
    "auto detailing Laval",
    "auto detailing Longueuil",
    "car detailing Montreal",
    "detailing Laval Chomedey",
    "Tesla detailing Montreal",
    "luxury car detailing Montreal",
    "ceramic coating near me",
    "paint correction near me",
    "road salt protection Montreal",
    "calcium removal car Montreal",
    "interior detailing Montreal",
    "exterior detailing Montreal",
    "professional car care Quebec",
    "headlight restoration Montreal",
    "paint polish Montreal",
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
      "Professional auto detailing services in Montreal, Quebec including paint correction, ceramic coating, interior detailing, and exterior detailing services. Serving Greater Montreal Area.",
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
      "Professional auto detailing services in Montreal including paint correction, ceramic coating, interior detailing, and exterior detailing services.",
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
  "@type": "AutoBodyShop",
  "@id": "https://down2detail.ca/#business",
  name: "Down2Detail",
  alternateName: "Down 2 Detail Auto Detailing",
  description:
    "Professional auto detailing, paint correction, and ceramic coating installer in Longueuil, Quebec. Serving Montreal, Laval, and the Greater Montreal Area. Specializing in multi-stage paint correction, ceramic coating for Tesla and luxury vehicles, and protection against Quebec road salt and calcium damage.",
  url: "https://down2detail.ca",
  telephone: "+1-438-483-8175",
  email: "down2detail.ca@gmail.com",
  priceRange: "$$-$$$",
  image: "https://down2detail.ca/images/d2dlogo.png",
  logo: "https://down2detail.ca/images/d2dlogo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4500 Bd Kimber",
    addressLocality: "Saint-Hubert",
    addressRegion: "QC",
    postalCode: "J3Y 8K5",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "45.5369",
    longitude: "-73.5051",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Longueuil",
      "@id": "https://www.wikidata.org/wiki/Q141921",
      containedInPlace: { "@type": "AdministrativeArea", name: "Montérégie" },
    },
    {
      "@type": "City",
      name: "Montreal",
      "@id": "https://www.wikidata.org/wiki/Q340",
      containedInPlace: { "@type": "AdministrativeArea", name: "Quebec" },
    },
    {
      "@type": "City",
      name: "Laval",
      "@id": "https://www.wikidata.org/wiki/Q139671",
      containedInPlace: { "@type": "AdministrativeArea", name: "Quebec" },
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
    {
      "@type": "AdministrativeArea",
      name: "Greater Montreal Area",
      addressRegion: "QC",
      addressCountry: "CA",
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
          "@id": "https://down2detail.ca/services/paint-correction#service",
          name: "Paint Correction",
          description:
            "Professional multi-stage paint correction in Montreal. Stage 1 removes 75% of defects, Stage 2 removes 90%, and Stage 3 achieves 99% defect removal. Essential prerequisite before ceramic coating application.",
          url: "https://down2detail.ca/services/paint-correction",
          serviceType: "Paint Correction",
          areaServed: ["Montreal", "Laval", "Longueuil"],
          provider: { "@id": "https://down2detail.ca/#business" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": "https://down2detail.ca/ceramic-coating#service",
          name: "Ceramic Coating",
          description:
            "Professional ceramic coating installer in Montreal. SiO₂ nanotechnology protection against Quebec road salt, calcium, and industrial fallout. 2-5 year warranty. Paint correction is a recommended prerequisite for optimal bonding.",
          url: "https://down2detail.ca/ceramic-coating",
          serviceType: "Ceramic Coating",
          areaServed: ["Montreal", "Laval", "Longueuil"],
          provider: { "@id": "https://down2detail.ca/#business" },
          isRelatedTo: {
            "@id":
              "https://down2detail.ca/services/paint-correction#service",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Interior Detailing",
          description:
            "Complete interior detailing with steam cleaning, fabric shampoo, leather treatment, and pet hair removal. Serving Montreal, Laval, and Longueuil.",
          url: "https://down2detail.ca/services/interior-detailing",
          serviceType: "Interior Detailing",
          provider: { "@id": "https://down2detail.ca/#business" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Exterior Detailing",
          description:
            "Professional exterior detailing with paint decontamination, iron removal, and clay bar treatment. Protection against Quebec winter road salt and calcium damage.",
          url: "https://down2detail.ca/services/exterior-detailing",
          serviceType: "Exterior Detailing",
          provider: { "@id": "https://down2detail.ca/#business" },
        },
      },
    ],
  },
  sameAs: [
    "https://www.instagram.com/down2detail.ca",
    "https://www.facebook.com/people/Down2Detail/61577327687487/",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  potentialAction: [
    {
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
    {
      "@type": "CommunicateAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://down2detail.ca/contact",
        actionPlatform: "http://schema.org/DesktopWebPlatform",
      },
      name: "Get a Free Quote",
    },
  ],
  knowsAbout: [
    "Paint Correction",
    "Ceramic Coating",
    "Tesla Detailing",
    "Electric Vehicle Detailing",
    "Road Salt Protection",
    "Calcium Removal",
    "Winter Paint Protection",
    "SiO₂ Nanotechnology",
  ],
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

        {/* Google Ads Conversion Tracking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17074659027"
          strategy="afterInteractive"
        />
        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17074659027');
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
              <StickyCTA />
            </>
          )}
        </I18nProvider>
      </body>
    </html>
  );
}
