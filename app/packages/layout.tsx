import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Auto Detailing Packages & Pricing | Gold, Platinum, Diamond | Down2Detail",
  description:
    "Compare Down2Detail's auto detailing packages in Montreal: Gold ($649), Platinum ($999), and Diamond ($1,199). Bundle paint correction with ceramic coating and save 15-20%. Exterior, interior, and winter salt protection packages. Serving Montreal, Laval & Longueuil.",
  openGraph: {
    title: "Auto Detailing Packages & Pricing | Down2Detail Montreal",
    description:
      "Compare Gold, Platinum & Diamond detailing packages. Bundle paint correction + ceramic coating. Save 15-20%. Serving Montreal, Laval & Longueuil.",
    url: "https://down2detail.ca/packages",
    siteName: "Down2Detail",
    images: [
      {
        url: "/images/categories/ceramic-sealant-spray.jpg",
        width: 1200,
        height: 630,
        alt: "Down2Detail Auto Detailing Packages - Gold, Platinum, Diamond",
      },
    ],
    type: "website",
  },
  keywords: [
    "auto detailing packages Montreal",
    "car detailing prices Montreal",
    "ceramic coating packages Montreal",
    "paint correction packages Montreal",
    "best detailing deals Montreal",
    "car detailing bundles Montreal",
    "ceramic coating price Longueuil",
    "detailing packages Laval",
    "salt protection package Montreal",
    "Tesla detailing package Montreal",
  ],
  alternates: {
    canonical: "https://down2detail.ca/packages",
  },
};

export default function PackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
