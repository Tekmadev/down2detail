import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Professional Ceramic Coating Installer Montreal | SiO₂ Protection | Down2Detail",
  description:
    "Professional ceramic coating installer in Montreal, Laval & Longueuil. SiO₂ nanotechnology protection against Quebec road salt, calcium, and UV damage. 2-5 year warranty. Paint correction prerequisite included. Tesla and luxury vehicle specialists. Free consultation.",
  openGraph: {
    title: "Professional Ceramic Coating Installer Montreal | Down2Detail",
    description:
      "Best ceramic coating installer in Montreal. SiO₂ protection against road salt & calcium. 2-5 year warranty. Paint correction prerequisite ensures perfect bonding.",
    url: "https://down2detail.ca/ceramic-coating",
    siteName: "Down2Detail",
    images: [
      {
        url: "/images/services-detailing/Ceramic-coating.webp",
        width: 1200,
        height: 630,
        alt: "Professional Ceramic Coating Installer in Montreal - Down2Detail",
      },
    ],
    type: "website",
  },
  keywords: [
    "ceramic coating Montreal",
    "ceramic coating installer Montreal",
    "best ceramic coating Montreal",
    "professional ceramic coating Montreal",
    "SiO2 ceramic coating Montreal",
    "ceramic coating Longueuil",
    "ceramic coating Laval",
    "Tesla ceramic coating Montreal",
    "road salt protection Montreal",
    "paint protection Montreal",
    "ceramic coating near me",
    "ceramic coating warranty Quebec",
  ],
  alternates: {
    canonical: "https://down2detail.ca/ceramic-coating",
  },
};

export default function CeramicCoatingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
