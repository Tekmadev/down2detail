import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Down2Detail Montreal Auto Detailing",
  description:
    "Contact Down2Detail for professional auto detailing services in Montreal. Call +1-438-483-8175 or book online. Serving Montreal, Laval, Longueuil, and Greater Montreal Area. Get your free quote today!",
  openGraph: {
    title: "Contact Down2Detail | Auto Detailing Montreal",
    description:
      "Get in touch with Montreal's premier auto detailing service. Professional paint correction, ceramic coating, and mobile detailing. Call +1-438-483-8175 for your free quote.",
    url: "https://down2detail.ca/contact",
    siteName: "Down2Detail",
    images: [
      {
        url: "/images/ceramic.png",
        width: 1200,
        height: 630,
        alt: "Contact Down2Detail Auto Detailing Montreal",
      },
    ],
    type: "website",
  },
  keywords: [
    "contact auto detailing Montreal",
    "car detailing phone number Montreal",
    "book auto detailing Montreal",
    "mobile detailing quote Montreal",
    "Down2Detail contact information",
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
