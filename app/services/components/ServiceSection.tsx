import { getServiceById, getServicesByCategory, services } from "@/data/services"
import { notFound } from "next/navigation";
import Image from "next/image";
import { RelatedServices } from "./ReletedService";
import { CtaSection } from "./CtaSection";

export function generateStaticParams() {
    return services.map((service) => ({
        service_name: service.id,
    }))
}

export const metadata = {
    title: "Service | Down2Detail",
    description: "Explore our professional detailing services."
}

export function ServiceSection({
    params,
}: {
    params: any;
}) {
    const service = getServiceById(params.service_name);

    if (!service) {
        notFound();
    }

    return (
        <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50 min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-white via-gray-50 to-white py-20">
                <div className="container mx-auto max-w-7xl px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-[#292524] mb-4 tracking-tight leading-tight">
                        {service.label}
                    </h1>
                    {service.subtitle && (
                        <p className="text-2xl text-[#292524]/80 mb-4 font-medium">
                            {service.subtitle}
                        </p>
                    )}
                    <p className="text-lg text-[#292524]/90 max-w-2xl mx-auto leading-relaxed">
                        {service.shortDescription}
                    </p>

                    <div className="relative w-full h-[500px] mt-12 rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src={service.imageShowcase}
                            alt={service.id}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto max-w-7xl px-4 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-12">
                    {/* About Section */}
                    <div className="bg-white rounded-3xl shadow-md ring-1 ring-gray-100 p-10">
                        <h2 className="text-3xl font-bold text-[#292524] mb-6">About This Service</h2>
                        <p className="text-lg text-[#292524] leading-relaxed">
                            {service.description}
                        </p>
                    </div>

                    {/* Features */}
                    <div className="bg-white rounded-3xl shadow-md ring-1 ring-gray-100 p-10">
                        <h2 className="text-3xl font-bold text-[#292524] mb-8">What We Offer</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {service.features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-start p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md hover:bg-white transition-all duration-300"
                                >
                                    <div className="text-[#d6781c] mr-4 mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
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
                                    <p className="text-lg text-[#292524]">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Benefits */}
                    <div className="bg-white rounded-3xl shadow-md ring-1 ring-gray-100 p-10">
                        <h2 className="text-3xl font-bold text-[#292524] mb-8">Benefits</h2>
                        <div className="space-y-6">
                            {service.benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex items-start bg-gray-50 p-6 rounded-xl hover:bg-white transition-all"
                                >
                                    <div className="text-[#d6781c] mr-4 mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
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
                                    <p className="text-lg text-[#292524]">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Explanation section */}
                    <div className="bg-white rounded-3xl shadow-lg ring-1 ring-gray-100 overflow-hidden grid grid-cols-1 md:grid-cols-2">
                        {/* Image à gauche */}
                        <div className="relative h-80 md:h-full">
                            <Image
                                src={service.imageShowcase}
                                alt={service.id}
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105 rounded-l-3xl"
                            />
                        </div>

                        {/* Texte à droite */}
                        <div className="p-10 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
                            <h2 className="text-4xl font-extrabold text-[#292524] mb-4">
                                Explanation
                            </h2>
                            <p className="text-lg text-[#292524]/90 leading-relaxed max-w-xl">
                                {service.description}
                            </p>
                        </div>
                    </div>


                    {/* Pricing */}
                    <div className="bg-white rounded-3xl shadow-md ring-1 ring-gray-100 p-10 text-center">
                        <h2 className="text-3xl font-bold text-[#292524] mb-6">Our Best Pricing</h2>

                        <p className="text-lg text-[#292524]/80">Starting Price:</p>
                        <div className="text-4xl font-extrabold text-[#0f2c47] mb-2">
                            <span className="line-through text-gray-400 mr-2">${service.price}</span>
                            ${service.price}
                        </div>
                        <button className="mt-6 px-6 py-3 border border-[#0f2c47] text-[#0f2c47] rounded-lg font-semibold tracking-wide hover:bg-[#0f2c47] hover:text-white transition">
                            RESERVE NOW
                        </button>
                    </div>
                </div>

                {/* FAQ Sidebar */}
                {service.faqs && service.faqs.length > 0 && (
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-3xl shadow-md ring-1 ring-gray-100 p-10 sticky top-8">
                            <h3 className="text-2xl font-bold text-[#292524] mb-8">
                                Frequently Asked Questions
                            </h3>
                            <div className="space-y-6">
                                {service.faqs.map((faq, index) => (
                                    <div key={index} className="bg-gray-50 p-6 rounded-xl">
                                        <h4 className="font-semibold text-[#292524] text-lg mb-3">
                                            {faq.question}
                                        </h4>
                                        <p className="text-[#292524]/80 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <RelatedServices params={params}/>
            {/*section Action */}
            <CtaSection/>
        </div>
    );
}