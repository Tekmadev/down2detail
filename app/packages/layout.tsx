import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auto Detailing Packages | Down2Detail Montreal",
  description:
    "Choose from Down2Detail's premium auto detailing packages in Montreal. From basic exterior wash to full paint correction and ceramic coating packages. Professional detailing services for all vehicle types and budgets.",
  openGraph: {
    title: "Auto Detailing Packages | Down2Detail Montreal",
    description:
      "Premium auto detailing packages including paint correction, ceramic coating, interior detailing, and maintenance packages. Serving Montreal and Greater Montreal Area.",
    url: "https://down2detail.ca/packages",
    siteName: "Down2Detail",
    images: [
      {
        url: "/images/categories/full.jpg",
        width: 1200,
        height: 630,
        alt: "Down2Detail Auto Detailing Packages Montreal",
      },
    ],
    type: "website",
  },
  keywords: [
    "auto detailing packages Montreal",
    "car detailing packages Montreal",
    "paint correction packages Montreal",
    "ceramic coating packages Montreal",
    "exterior detailing packages Montreal",
    "interior detailing packages Montreal",
    "headlight restoration packages Montreal",
    "monthly car maintenance Montreal",
  ],
};

export default function PackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
