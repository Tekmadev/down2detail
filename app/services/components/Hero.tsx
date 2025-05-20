import Image from "next/image";
import Link from "next/link";
import { getServiceById, services } from "@/data/services";
import { notFound } from "next/navigation";

export function generateStaticParams(){
    return services.map((service) => ({
        service_name : service.id,
    }))
}

export function HeroSection({
    params,
}: {
    params: any;
}) {
    const service = getServiceById(params.service_name);

    if (!service) {
        notFound();
    }

    return (
        <div className="relative bg-secondary py-24 md:py-32 overflow-hidden">
            {/* Image de fond avec effet de parallaxe */}
            <div className="absolute inset-0">
                <Image
                    src={service.imageShowcase}
                    alt={service.label}
                    fill
                    priority
                    className="object-cover object-center scale-110 animate-subtle-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
            </div>

            {/* Contenu */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl">
                    {/* Badge */}
                    <div className="inline-block bg-[#d6781c]/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#d6781c]/20">
                        <span className="text-[#d6781c] font-medium">Premium Service</span>
                    </div>

                    {/* Titre avec effet de dégradé */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-lg bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                        {service.label}
                    </h1>

                    {/* Sous-titre */}
                    {service.subtitle && (
                        <p className="text-xl md:text-2xl text-[#d6781c] font-medium mb-6 drop-shadow-sm">
                            {service.subtitle}
                        </p>
                    )}


                    {/* Boutons d'action */}
                    <div className="flex flex-wrap items-center gap-6">
                        <Link
                            href="/contact"
                            className="inline-flex items-center bg-[#d6781c] hover:bg-[#c66812] text-white font-semibold py-4 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            Book Now
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Décoration en bas */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
    );
}