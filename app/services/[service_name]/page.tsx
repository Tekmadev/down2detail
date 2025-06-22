import { getServiceById, services } from "@/data/services";
import { notFound } from "next/navigation";
import { HeroSection } from "../components/Hero";
import { RelatedServices } from "../components/ReletedService";
import { CtaSection } from "../components/CtaSection";
import ServiceDetailsPage from "./ServiceDetailPage";
import ServiceSousSection from "../components/SectionSousSerivce";

export function generateStaticParams() {
  return services.map((service) => ({
    service_name: service.id,
  }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service_name: string }>;
}) {
  const resolvedParams = await params;
  const service = getServiceById(resolvedParams.service_name);
  if (!service) notFound();

  if (service.id === "paint-polish") {
    return <ServiceSousSection />;
  }

  return (
    <div className="bg-black from-gray-50 via-white to-gray-50 min-h-screen">
      <HeroSection params={resolvedParams} />
      <ServiceDetailsPage service={service} />
      <RelatedServices params={resolvedParams} />
      <CtaSection />
    </div>
  );
}
