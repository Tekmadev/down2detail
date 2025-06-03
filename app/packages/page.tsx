"use client";

import { packages } from "@/data/packages";
import { CardBody, CardItem, CardContainer } from "@/components/ui/3d-card";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Carousel, Card as CarouselCard } from "@/components/ui/apple-cards-carousel";
import { IconX } from "@tabler/icons-react";

export default function Packages() {
    const selectedServices = Array.from(new Set(packages.map(pkg => pkg.category))).slice(0, 5);
    const router = useRouter();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedAddOns, setSelectedAddOns] = useState<string[] | null>(null);

    const getCategoryImage = (category: string) => {
        switch (category) {
            case "Exterior Detailing":
                return "/images/categories/exterior.jpg";
            case "Interior Detailing":
                return "/images/categories/interioir.avif";
            case "Interior & Exterior":
                return "/images/categories/full.jpg";
            case "Paint Polish & Protection":
                return "/images/categories/paint.jpg";
            case "Maintenance":
                return "/images/categories/maintenace.jpeg";    
            default:
                return "/images/categories/default.jpg";
        }
    };

    const handleViewPackages = (category: string) => {
        setSelectedCategory(category);
    };

    const getPackagesForCategory = (category: string) => {
        return packages
            .filter(pkg => pkg.category === category)
            .map(pkg => ({
                src: getCategoryImage(category),
                title: pkg.name,
                category: pkg.category,
                content: (
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-orange-400">Description</h3>
                            <ul className="list-disc list-inside space-y-1">
                                {pkg.description.map((item, index) => (
                                    <li key={index} className="text-white/90">{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-orange-400">Pricing</h3>
                            <div className="space-y-1">
                                <p className="text-white/90">
                                    Sedan/Coupes/Crossovers: <span className="text-orange-400 font-semibold">${pkg.prices.sedanCoupesCrossovers}</span>
                                </p>
                                <p className="text-white/90">
                                    Compact/Mid/Full SUVs/Pickups: <span className="text-orange-400 font-semibold">${pkg.prices.compactMidFullSUVsPickups}</span>
                                </p>
                                {pkg.prices.fullSizeSUVsPickups && (
                                    <p className="text-white/90">
                                        Full Size SUVs/Pickups: <span className="text-orange-400 font-semibold">${pkg.prices.fullSizeSUVsPickups}</span>
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                )
            }));
    };

    return (
        <div className="min-h-screen bg-black text-gray-300">
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-center mb-4 text-orange-600">Discover our Premium Packages</h1>

                {selectedCategory ? (
                    <div className="mt-8">
                        <div className="flex justify-between items-center mb-8">
                            <button
                                onClick={() => setSelectedCategory(null)}
                                className="flex items-center text-orange-600 hover:text-orange-700"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Back to Categories
                            </button>
                            
                            
                            <button
                                onClick={() => {
                                    const categoryPackages = packages.filter(pkg => pkg.category === selectedCategory);
                                    const allAddOnsForCategory = Array.from(new Set(categoryPackages.flatMap(pkg => pkg.addOns || [])));
                                    if(allAddOnsForCategory.length > 0){
                                        setSelectedAddOns(allAddOnsForCategory);
                                    }
                                }}
                                className="mt-4 px-4 py-2 rounded-xl bg-orange-600 text-white text-sm font-bold hover:bg-orange-700 transition-colors duration-300"
                            >
                                View Add-ons
                            </button>
                        </div>
                        <Carousel
                            items={getPackagesForCategory(selectedCategory).map((card, index) => (
                                <CarouselCard key={index} card={card} index={index} />
                            ))}
                        />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {selectedServices.map((category) => (
                            <CardContainer key={category} className="inter-var">
                                <CardBody className="bg-gray-800 relative group/card hover:shadow-2xl hover:shadow-orange-500/[0.1] border border-gray-700 rounded-xl p-6 shadow-lg text-gray-300 w-auto sm:w-[30rem] h-auto">
                                    <CardItem
                                        translateZ="50"
                                        className="text-xl font-bold text-orange-600"
                                    >
                                        {category}
                                    </CardItem>
                                    <CardItem
                                        as="p"
                                        translateZ="60"
                                        className="text-white text-sm max-w-sm mt-2"
                                    >
                                        {packages.find(pkg => pkg.category === category)?.description[0]}
                                    </CardItem>
                                    <CardItem
                                        translateZ="100"
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
                                            onClick={() => handleViewPackages(category)}
                                        >
                                            View Packages
                                        </CardItem>
                                    </div>
                                </CardBody>
                            </CardContainer>
                        ))}
                    </div>
                )}

                {/* Add-ons Modal */}
                {selectedAddOns && (
                    <div className="fixed inset-0 z-50 h-screen overflow-auto">
                        <div className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg" />
                        <div className="relative z-[60] mx-auto my-10 h-fit max-w-2xl rounded-3xl bg-white p-6 font-sans dark:bg-neutral-900">
                            <button
                                onClick={() => setSelectedAddOns(null)}
                                className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black dark:bg-white"
                            >
                                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
                            </button>
                            <h2 className="text-2xl font-bold text-neutral-700 dark:text-neutral-200 mb-4">Available Add-ons</h2>
                            <ul className="list-disc list-inside space-y-2">
                                {selectedAddOns.map((addon, index) => (
                                    <li key={index} className="text-gray-300">{addon}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}