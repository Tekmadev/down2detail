"use client";

import { CtaSection } from "../services/components/CtaSection";
import ParallaxBanner from "../../components/ParallaxBanner";
import { useI18n } from "@/hooks/useI18n";
import {
  HeroSection,
  WhyChooseSection,
  WhyWorthItSection,
  HowItWorksSection,
  ApplicableSurfacesSection,
  DurabilitySection,
  AddonsSection,
  FAQsSection,
} from "./components";

// Note: This is a client component, so metadata should be in layout.tsx
// For now, ceramic coating metadata is handled by the main layout

export default function CeramicCoatingPage() {
  const { t } = useI18n("ceramic");

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            <WhyChooseSection />
            <WhyWorthItSection />
            {/* <HowItWorksSection /> */}
          </div>
        </div>
      </div>

      {/* Parallax Banner Section */}
      <ParallaxBanner
        imageUrl="/images/services-detailing/Ceramic-coating.webp"
        title={t("parallax.title")}
        subtitle={t("parallax.subtitle")}
        height="60vh"
      />

      {/* Additional Content */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-12">
          {/* ApplicableSurfacesSection - Always first */}
          <div className="lg:col-span-2 order-1">
            <ApplicableSurfacesSection />
          </div>

          {/* DurabilitySection - Second on mobile, right column first on desktop */}
          <div className="lg:col-span-1 lg:row-start-1 lg:col-start-3 order-2">
            <DurabilitySection />
          </div>

          {/* AddonsSection - Third on mobile, right column second on desktop */}
          <div className="lg:col-span-1 lg:row-start-2 lg:col-start-3 order-3">
            <AddonsSection />
          </div>

          {/* FAQsSection - Fourth on mobile, left column second on desktop */}
          <div className="lg:col-span-2 lg:row-start-2 lg:col-start-1 order-4">
            <FAQsSection />
          </div>
        </div>
      </div>

      <CtaSection />
    </div>
  );
}
