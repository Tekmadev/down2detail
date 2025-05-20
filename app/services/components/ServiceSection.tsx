import { getServiceById, getServicesByCategory, services } from "@/data/services"
import { notFound } from "next/navigation";
import Image from "next/image";
import { RelatedServices } from "./ReletedService";
import { CtaSection } from "./CtaSection";
import Link from "next/link";

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
                <div className="container mx-auto max-w-7xl px-6">
                    {/* Title Section */}
                    <div className="text-center mb-12">
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
                    </div>

                    {/* Summary Section */}
                    <div className="bg-white rounded-3xl shadow-lg p-8 mb-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-[#d6781c] mb-4">
                                    <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-[#292524] text-xl font-semibold mb-2">Premium Quality</h3>
                                <p className="text-[#292524]/80">Using only the finest products and techniques</p>
                            </div>
                            <div className="text-center">
                                <div className="text-[#d6781c] mb-4">
                                    <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-[#292524] text-xl font-semibold mb-2">Quick Service</h3>
                                <p className="text-[#292524]/80">Efficient and timely completion of all services</p>
                            </div>
                            <div className="text-center">
                                <div className="text-[#d6781c] mb-4">
                                    <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-[#292524] text-xl font-semibold mb-2">Expert Care</h3>
                                <p className="text-[#292524]/80">Professional attention to every detail</p>
                            </div>
                        </div>
                    </div>

                    {/* Main Image */}
                    <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
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

                    {/* Benefits Section */}
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

                    {/* Explanation section with Image */}
                    <div className="bg-white rounded-3xl shadow-md ring-1 ring-gray-100 p-10">
                        <h2 className="text-3xl font-bold text-[#292524] mb-6">How It Works</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative h-[300px] rounded-2xl overflow-hidden">
                                <Image
                                    src={service.imageShowcase}
                                    alt={service.id}
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="text-lg text-[#292524]/90 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Pricing Section */}
                    <div className="bg-white rounded-3xl shadow-md ring-1 ring-gray-100 p-10 text-center">
                        <h2 className="text-3xl font-bold text-[#292524] mb-6">Our Best Pricing</h2>
                        <div className="flex flex-col items-center">
                            <p className="text-lg text-[#292524]/80 mb-2">Starting Price:</p>
                            <div className="text-5xl font-extrabold text-[#d6781c] mb-6">
                                <span className="line-through text-gray-400 mr-2">${service.price}</span>
                                ${service.price}
                            </div>
                            <button className="mt-6 px-6 py-3 border border-[#0f2c47] text-[#0f2c47] rounded-lg font-semibold tracking-wide hover:bg-[#0f2c47] hover:text-white transition">
                            RESERVE NOW
                        </button>
                        </div>
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
            <CtaSection/>
        </div>
    );
}