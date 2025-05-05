import { getServiceById, getServicesByCategory, services } from "@/data/services"
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CalendlyPopText from "@/components/CalendlyPopText";

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

    const relatedServices = getServicesByCategory(service.category || "")
        .filter((s) => s.id !== service.id)
        .slice(0, 3);

    return(
        <div className="bg-background min-h-screen bg-black/5">
            {/* Section Hero */}
            <div className="relative bg-secondary py-20 md:py-28">
                <div className="absolute inset-0 opacity-50">
                    <Image
                    src={service.imageShowcase}
                    alt={service.label}
                    fill
                    priority
                    className="object-cover object-center"
                    />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/50 z-0"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
                        {service.label}
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl drop-shadow-sm">
                        {service.shortDescription}
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                        <Link
                        href="/contact"
                        className="inline-block bg-[#d6781c] hover:bg-[#c66812] text-white font-semibold py-3 px-10 rounded-full shadow-md transition-transform duration-300 hover:scale-105"
                        >
                        Book Now
                        </Link>
                    </div>
                    </div>
                </div>
            </div>

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
                            Price
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
            {relatedServices.length > 0 && (
                <div className="bg-gray-50 py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-8 text-center">
                            Related Services You Might Be Interested In
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedServices.map((relatedServices)=>(
                                <div key={relatedServices.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                    <div className="relative h-48">
                                        <Image
                                            src={relatedServices.imageShowcase}
                                            alt={relatedServices.label}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                    <h3 className="text-xl font-semibold text-[#292524] mb-2">
                                        {relatedServices.label}
                                        </h3>
                                        <p className="text-[#292524]/80 mb-4 line-clamp-2">
                                            {relatedServices.description}
                                        </p>
                                        <Link
                                            href={relatedServices.href}
                                            className="inline-flex items-center font-medium text-[#3b82f6] hover:text-[#6b7280] transition-colors"
                                            >
                                            Learn More
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 ml-1"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                fillRule="evenodd"
                                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            {/*section Action */}
            <div className="bg-secondary text-[#292524] py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Transform Your Car?
                    </h2>
                    <p className="max-w-2xl mx-auto mb-8 text-[#292524]">
                        Our team of experienced professionals is ready to help you with your{" "}
                        needs. Contact us today for a consultation.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-[#d6781c] hover:bg-[#c66812] text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );    
}