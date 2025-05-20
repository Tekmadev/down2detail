import { getServiceById, getServicesByCategory, services } from "@/data/services"
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CalendlyPopText from "@/components/CalendlyPopText";
import { HeroSection } from "../components/Hero";
import { RelatedServices } from "../components/ReletedService";
import { CtaSection } from "../components/CtaSection";
import { ServiceSection } from "../components/ServiceSection";

export function generateStaticParams(){
    return services.map((service) => ({
        service_name : service.id,
    }))
}

export const metadata = {
    title: "Service | Down2Detail",
    description: "Explore our professional detailing services."
}

export default function ServicePage({
    params,
}:{
    params: any;
}) {
    const service = getServiceById(params.service_name);

    if(!service){
        notFound();
    }

    if(service && ["gloss-enhancer","one-step-polish", "paint-correction", "paint-decontamination", "floor-carpet-shampoo", "Pet Hair Removal", "Paint Sealant", "car-wax"].includes(service.id)){
        return <ServiceSection params={params}/>
    }

    return(
        <div className="bg-background min-h-screen bg-black/5">
            {/* Section Hero */}
            <HeroSection params={params}/>

            {/* Service Detail */}
            <div className="container mx-auto px-4 py-16 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-6">
                            Summary
                        </h2>
                        <p className="text-[#292524] mb-8 text-lg leading-relaxed">
                            {service.description}
                        </p>

                        {/* Features */}
                        <h3 className="text-xl md:text-2xl font-bold text-[#292524] mb-4">
                            What We Offer
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                            {service.features.map((feature, index) => (
                                <div
                                key={index}
                                className="flex items-start bg-white p-4 rounded-lg shadow-sm"
                                >
                                <div className="text-[#d6781c] mr-3 mt-1">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                    </svg>
                                </div>
                                <p className="text-[#292524]">{feature}</p>
                            </div>
                        ))}
                        </div>
                        {/* Benefits */}
                        <h3 className="text-xl md:text-2xl font-bold text-[#292524] mb-4">
                            Benefits
                        </h3>
                        <ul className="list-disc pl-6 mb-12 space-y-2 text-[#292524]">
                            {service.benefits.map((benefit, index) => (
                                <li key={index} className="pl-2">
                                {benefit}
                                </li>
                            ))}
                        </ul>
                        {/*Price section */}
                        <h3 className="text-xl md:text-2xl font-bold text-[#292524] mb-4">
                            Pricing
                        </h3>
                        <p className="text-m font-semibold">
                            Our prices offer the best value, starting at <span className="text-[#d6781c] font-bold">{service.price} {service.currency}</span> for this service, and they may vary based on your specific needs.
                        </p>

                        {/* Gallery */}
                        {service.gallery && service.gallery.length > 0 && (
                        <>
                            <h3 className="text-xl md:text-2xl font-bold text-[#292524] mb-6">
                            Our Work
                            </h3>
                            {/*<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                            {service.gallery.map((image, index) => (
                                <div
                                key={index}
                                className="relative h-64 rounded-lg overflow-hidden"
                                >
                                <Image
                                    src={image}
                                    alt={`${cleanServiceLabel} - Gallery Image ${
                                    index + 1
                                    }`}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                                </div>
                            ))}
                            </div>*/}
                        </>
                        )}
                    </div>
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        {/* FAQ Section */}
                        {service.faqs && service.faqs.length > 0 && (
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-xl font-bold text-[#292524] mb-6">
                            Frequently Asked Questions
                            </h3>
                            <div className="space-y-6">
                            {service.faqs.map((faq, index) => (
                                <div key={index}>
                                <h4 className="font-semibold text-[#292524] mb-2">
                                    {faq.question}
                                </h4>
                                <p className="text-[#292524]/80">{faq.answer}</p>
                                </div>
                            ))}
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
            {/*Related Service */}
            <RelatedServices params={params}/>
            {/*section Action */}
            <CtaSection/>
        </div>
    );    
}