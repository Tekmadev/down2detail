import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Auto Detailing Services | Down2Detail Montreal",
  description:
    "Explore Down2Detail's comprehensive auto detailing services in Montreal. Professional paint correction, ceramic coating, interior detailing, exterior wash, headlight restoration, and mobile detailing services. Expert care for all vehicle types.",
  openGraph: {
    title: "Professional Auto Detailing Services | Down2Detail Montreal",
    description:
      "Comprehensive auto detailing services including paint correction, ceramic coating, interior detailing, and mobile services. Serving Montreal, Laval, and Greater Montreal Area.",
    url: "https://down2detail.ca/services",
    siteName: "Down2Detail",
    images: [
      {
        url: "/images/services-detailing/Ceramic-coating.webp",
        width: 1200,
        height: 630,
        alt: "Down2Detail Professional Auto Detailing Services Montreal",
      },
    ],
    type: "website",
  },
  keywords: [
    "auto detailing services Montreal",
    "paint correction Montreal",
    "ceramic coating Montreal",
    "interior detailing Montreal",
    "mobile detailing Montreal",
    "car wash services Montreal",
    "headlight restoration Montreal",
    "professional car detailing Quebec",
  ],
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
