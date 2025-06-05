import VideoHero from "@/components/VideoHero";
import Services from "@/components/Services";
import ChooseUs from "@/components/ChooseUs";
import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import RecentProjects from "@/components/RecentProjects";
import BrandLogos from "@/components/BrandLogos";

export default function Home() {
  return (
    <>
      <VideoHero
        fallbackImage="/images/Auto-Detailing.png"
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
