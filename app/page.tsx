import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ChooseUs from "@/components/ChooseUs";
import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import RecentProjects from "@/components/RecentProjects";
export default function Home() {
  return (
    <>
    <Hero />
    {/* <Services /> */}
    <ChooseUs />
    <RecentProjects />
    <CallToAction />
    </>
  );
}
