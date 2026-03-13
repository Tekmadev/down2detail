import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Professional Auto Detailing in Laval | Best Detailing Shop | Down2Detail",
  description:
    "Laval's best auto detailing shop. Professional exterior & interior detailing, paint correction, and ceramic coating. Specializing in Tesla, luxury vehicles, and winter salt/calcium protection. Serving Chomedey, Fabreville, Sainte-Dorothée, Vimont, Laval-des-Rapides, and Pont-Viau.",
  keywords: [
    "auto detailing Laval",
    "car detailing Laval",
    "best detailing Laval",
    "professional detailing Laval",
    "detailing shop Laval",
    "ceramic coating Laval",
    "paint correction Laval",
    "Tesla detailing Laval",
    "interior detailing Laval",
    "exterior detailing Laval",
    "detailing Chomedey",
    "detailing Fabreville",
    "car wash Laval",
    "detailing near me Laval",
    "salt removal Laval",
  ],
  openGraph: {
    title: "Professional Auto Detailing in Laval | Down2Detail",
    description:
      "Laval's best auto detailing — interior, exterior, paint correction & ceramic coating. Serving Chomedey, Fabreville, and all of Laval. Free consultation.",
    url: "https://down2detail.ca/detailing-laval",
    type: "website",
    images: [
      {
        url: "/images/services-detailing/full-detailing.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Auto Detailing in Laval - Down2Detail",
      },
    ],
  },
  alternates: {
    canonical: "https://down2detail.ca/detailing-laval",
  },
};

export default function DetailingLavalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
