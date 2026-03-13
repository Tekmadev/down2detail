import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Professional Paint Correction in Montreal | Best Shop | Down2Detail",
  description:
    "Montreal's best paint correction shop. Multi-stage correction from Stage 1 (75% defect removal) to Stage 3 (99% perfection). Essential before ceramic coating. Specializing in Tesla, BMW, and luxury vehicles. Protect against Quebec road salt and calcium damage. Serving Downtown, NDG, Plateau, Griffintown, and Verdun.",
  keywords: [
    "paint correction Montreal",
    "best paint correction Montreal",
    "paint correction shop Montreal",
    "professional paint correction Montreal",
    "multi-stage paint correction Montreal",
    "swirl removal Montreal",
    "paint polishing Montreal",
    "Tesla paint correction Montreal",
    "luxury car paint correction Montreal",
    "paint correction near me Montreal",
    "stage 2 paint correction Montreal",
    "road salt damage repair Montreal",
  ],
  openGraph: {
    title: "Professional Paint Correction in Montreal | Down2Detail",
    description:
      "Montreal's best paint correction shop. Stage 1-3 correction for 75%-99% defect removal. Essential before ceramic coating. Free consultation.",
    url: "https://down2detail.ca/paint-correction-montreal",
    type: "website",
    images: [
      {
        url: "/images/services-detailing/paint-correction.webp",
        width: 1200,
        height: 630,
        alt: "Professional Paint Correction in Montreal - Down2Detail",
      },
    ],
  },
  alternates: {
    canonical: "https://down2detail.ca/paint-correction-montreal",
  },
};

export default function PaintCorrectionMontrealLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
