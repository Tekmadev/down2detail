import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";
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
    default: "Down2Detail - Premium Auto Detailing Services in Canada",
    template: "%s | Down2Detail - Auto Detailing Experts",
  },
  description:
    "Professional auto detailing services including paint correction, ceramic coating, interior detailing, and more. Premium car care in Canada with mobile and shop services.",
  keywords: [
    "auto detailing",
    "car detailing",
    "paint correction",
    "ceramic coating",
    "interior detailing",
    "car wash",
    "mobile detailing",
    "Canada",
    "professional car care",
    "automotive detailing",
    "paint protection",
    "headlight restoration",
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
    title: "Down2Detail - Premium Auto Detailing Services",
    description:
      "Professional auto detailing services including paint correction, ceramic coating, interior detailing, and more. Premium car care in Canada.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Down2Detail - Professional Auto Detailing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Down2Detail - Premium Auto Detailing Services",
    description:
      "Professional auto detailing services including paint correction, ceramic coating, interior detailing, and more.",
    images: ["/images/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code", // You'll need to add this
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
    "Professional auto detailing services including paint correction, ceramic coating, interior detailing, and mobile car washing services.",
  url: "https://down2detail.ca",
  telephone: "+1-438-483-8175",
  priceRange: "$$",
  image: "https://down2detail.ca/images/d2dlogo.png",
  logo: "https://down2detail.ca/images/d2dlogo.png",
  address: {
    "@type": "PostalAddress",
    addressCountry: "CA",
    addressRegion: "Canada",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "45.5017", // Update with actual coordinates
    longitude: "-73.5673",
  },
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  serviceArea: {
    "@type": "Country",
    name: "Canada",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Auto Detailing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Paint Correction",
          description: "Professional paint correction and polishing services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ceramic Coating",
          description:
            "Premium ceramic coating application for long-lasting protection",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Interior Detailing",
          description: "Complete interior cleaning and protection services",
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

        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#FF4C00" />
        <meta name="msapplication-TileColor" content="#FF4C00" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
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

        {MAINTENANCE_MODE ? (
          <ComingSoon />
        ) : (
          <>
            <Header />
            <main>{children}</main>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
