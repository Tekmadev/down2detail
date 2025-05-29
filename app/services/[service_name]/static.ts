import { services } from "@/data/services";

export function generateStaticParams() {
    return services.map((service) => ({
        service_name: service.id,
    }));
}


export const metadata = {
    title: "Service | Down2Detail",
    description: "Explore our professional detailing services."
}; 