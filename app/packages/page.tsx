"use client";

import { packages } from "@/data/packages";
import { CardBody, CardItem, CardContainer } from "@/components/ui/3d-card";

export default function Packages() {
    const selectedServices = Array.from(new Set(packages.map(pkg => pkg.category))).slice(0, 5);

    // Fonction pour obtenir l'image de la catégorie
    const getCategoryImage = (category: string) => {
        switch (category) {
            case "Exterior Detailing":
                return "/images/categories/exterior.jpg";
            case "Interior Detailing":
                return "/images/categories/interioir.avif";
            case "INT. & EXT. PACKAGES":
                return "/images/categories/full.jpg";
            case "Paint Polish & PROTECTION PACKAGES":
                return "/images/categories/paint.jpg";
            case "MAINTENANCE Packages":
                return "/images/categories/maintenance.webp";
            default:
                return "/images/categories/default.jpg";
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-center mb-4 text-orange-600">Discover our premium packages</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {selectedServices.map((category) => (
                        <CardContainer key={category} className="inter-var">
                            <CardBody className="bg-white relative group/card hover:shadow-2xl hover:shadow-orange-500/[0.1] border-orange-200 w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-orange-600"
                                >
                                    {category}
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-gray-500 text-sm max-w-sm mt-2"
                                >
                                    {packages.find(pkg => pkg.category === category)?.description[0]}
                                </CardItem>
                                <CardItem
                                    translateZ="100"
                                    //rotateX={20}
                                    //rotateZ={-10}
                                    className="w-full mt-4"
                                >
                                    <img
                                        src={getCategoryImage(category)}
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt={category}
                                    />
                                </CardItem>
                                <div className="flex justify-between items-center mt-20">
                                    <CardItem
                                        translateZ={20}
                                        translateX={-40}
                                        as="button"
                                        className="px-4 py-2 rounded-xl text-xs font-normal text-orange-600"
                                    >
                                        From ${packages.find(pkg => pkg.category === category)?.prices.sedanCoupesCrossovers}
                                    </CardItem>
                                    <CardItem
                                        translateZ={20}
                                        translateX={40}
                                        as="button"
                                        className="px-4 py-2 rounded-xl bg-orange-600 text-white text-xs font-bold hover:bg-orange-700"
                                    >
                                        View Packages
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    ))}
                </div>
            </div>
        </div>
    );
}