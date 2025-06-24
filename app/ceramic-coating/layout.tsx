import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Ceramic Coating Services | Down2Detail Montreal",
  description:
    "Premium ceramic coating services by Down2Detail in Montreal. Long-lasting paint protection, enhanced gloss, and easier maintenance. Professional ceramic coating application for all vehicle types.",
  openGraph: {
    title: "Professional Ceramic Coating Services | Down2Detail Montreal",
    description:
      "Premium ceramic coating services in Montreal providing long-lasting paint protection and enhanced gloss. Professional application by Down2Detail experts.",
    url: "https://down2detail.ca/ceramic-coating",
    siteName: "Down2Detail",
    images: [
      {
        url: "/images/ceramic.png",
        width: 1200,
        height: 630,
        alt: "Down2Detail Ceramic Coating Services Montreal",
      },
    ],
    type: "website",
  },
  keywords: [
    "ceramic coating Montreal",
    "paint protection Montreal",
    "ceramic coating services Montreal",
    "car ceramic coating Montreal",
    "paint protection film Montreal",
    "ceramic coating application Montreal",
    "long-lasting paint protection Quebec",
  ],
};

export default function CeramicCoatingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
