import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Professional Ceramic Coating in Longueuil | Best Installer | Down2Detail",
  description:
    "Looking for the best ceramic coating installer in Longueuil? Down2Detail offers professional SiO₂ nanotechnology ceramic coating with 2-5 year warranty. Protect your vehicle from Quebec road salt, calcium, and industrial fallout. Serving Vieux-Longueuil, Saint-Hubert, Greenfield Park, and LeMoyne.",
  keywords: [
    "ceramic coating Longueuil",
    "best ceramic coating Longueuil",
    "ceramic coating installer Longueuil",
    "professional ceramic coating Longueuil",
    "ceramic coating near me Longueuil",
    "paint protection Longueuil",
    "SiO2 coating Longueuil",
    "road salt protection Longueuil",
    "Tesla ceramic coating Longueuil",
    "car detailing Longueuil",
  ],
  openGraph: {
    title: "Professional Ceramic Coating in Longueuil | Down2Detail",
    description:
      "Best ceramic coating installer in Longueuil. SiO₂ nanotechnology protection against Quebec road salt and calcium. 2-5 year warranty. Free consultation.",
    url: "https://down2detail.ca/ceramic-coating-longueuil",
    type: "website",
    images: [
      {
        url: "/images/services-detailing/Ceramic-coating.webp",
        width: 1200,
        height: 630,
        alt: "Professional Ceramic Coating in Longueuil - Down2Detail",
      },
    ],
  },
  alternates: {
    canonical: "https://down2detail.ca/ceramic-coating-longueuil",
  },
};

export default function CeramicCoatingLongueuilLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
