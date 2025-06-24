import VideoHero from "@/components/VideoHero";
import Services from "@/components/Services";
import ChooseUs from "@/components/ChooseUs";
import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import RecentProjects from "@/components/RecentProjects";
import BrandLogos from "@/components/BrandLogos";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Down2Detail - Premium Auto Detailing Services in Montreal, QC",
  description:
    "Down2Detail offers professional auto detailing services in Montreal, Quebec. Specializing in paint correction, ceramic coating, interior detailing, and mobile car wash services. Serving Greater Montreal Area including Laval, Longueuil, and surrounding areas.",
  openGraph: {
    title: "Down2Detail - Premium Auto Detailing Services in Montreal",
    description:
      "Professional auto detailing services in Montreal, Quebec including paint correction, ceramic coating, exterior detailing, and interior detailing. Serving Greater Montreal Area.",
    url: "https://down2detail.ca",
    siteName: "Down2Detail",
    images: [
      {
        url: "/images/ceramic.png",
        width: 1200,
        height: 630,
        alt: "Down2Detail - Professional Auto Detailing Services in Montreal",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Down2Detail - Premium Auto Detailing Services in Montreal",
    description:
      "Professional auto detailing services in Montreal including paint correction, ceramic coating, exterior detailing, and interior detailing.",
    images: ["/images/ceramic.png"],
  },
};

export default function Home() {
  return (
    <>
      <VideoHero
        fallbackImage="/images/ceramic.png"
        videoSources={{
          mp4: "/videos/hero-video.mp4",
        }}
      />
      {/* <Services /> */}
      <ChooseUs />
      <BrandLogos />
      {/*<RecentProjects />*/}
      <CallToAction />
    </>
  );
}
