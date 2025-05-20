import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServicesByCategory, getServiceById } from "@/data/services";

export function RelatedServices({
    params,
}: {
    params: any;
}) {
    const service = getServiceById(params.service_name);

    if (!service) {
        notFound();
    }
    const relatedServices = getServicesByCategory(service.category || "")
        .filter((s) => s.id !== service.id)
        .slice(0, 3);
    return relatedServices.length > 0 && (
            <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#292524] mb-12 text-center">
                        <span className="bg-gradient-to-r from-[#d6781c] to-yellow-400 bg-clip-text text-transparent">
                            Related Services You Might Be Interested In
                        </span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedServices.map((relatedServices)=>(
                            <div key={relatedServices.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                                <div className="relative h-56">
                                    <Image
                                        src={relatedServices.imageShowcase}
                                        alt={relatedServices.label}
                                        fill
                                        className="object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#292524] mb-3">
                                        {relatedServices.label}
                                    </h3>
                                    <p className="text-[#292524]/80 mb-6 line-clamp-2 text-sm leading-relaxed">
                                        {relatedServices.description}
                                    </p>
                                    <Link
                                        href={relatedServices.href}
                                        className="inline-flex items-center font-medium text-[#d6781c] hover:text-[#c66812] transition-colors group"
                                    >
                                        Learn More
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1"
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
    );
}