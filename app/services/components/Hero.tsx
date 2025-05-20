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
    );
}