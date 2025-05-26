import { getServiceById, services } from "@/data/services";
import { notFound } from "next/navigation";
import { HeroSection } from "../components/Hero";
import { RelatedServices } from "../components/ReletedService";
import { CtaSection } from "../components/CtaSection";
import ServiceDetailsPage from "./ServiceDetailPage";


export function generateStaticParams() {
  return services.map((service) => ({
    service_name: service.id,
  }));
}

export default function ServicePage({
  params,
}: {
  params: { service_name: string };
}) {
  const service = getServiceById(params.service_name);
  if (!service) notFound();

  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50 min-h-screen">
      <HeroSection params={params} />
      <ServiceDetailsPage service={service} />
      <RelatedServices params={params} />
      <CtaSection />
    </div>
  );
}