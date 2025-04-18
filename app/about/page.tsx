import Hero from "./components/Hero";
import StorySection from "./components/StorySection";
import ValuesSection from "./components/ValuesSection";
import Approach from "./components/Approach";
import CTASection from "./components/CTASection";

export const metadata = {
    title: "About Us | Down2Detail",
    description: "Learn more about Down2Detail, your trusted partner for home and commercial improvement services in Montreal",
  };

export default function About() {
    return (
        <div>
            <Hero />
            <StorySection />
            <ValuesSection />
            <Approach />
            <CTASection />
           
        </div>
    )
}
