"use client";

import { packages } from "@/data/packages";
import { CardBody, CardItem, CardContainer } from "@/components/ui/3d-card";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Carousel,
  Card as CarouselCard,
} from "@/components/ui/apple-cards-carousel";
import { IconX } from "@tabler/icons-react";
import { useI18n } from "@/hooks/useI18n";

export default function Packages() {
  const { t } = useI18n("packages");
  const selectedServices = Array.from(
    new Set(packages.map((pkg) => pkg.category))
  ).slice(0, 5);
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<string[] | null>(null);

  const getCategoryImage = (category: string) => {
    switch (category) {
      case "Exterior":
        return "/images/categories/exterior2.jpg";
      case "Interior":
        return "/images/categories/interior2.webp";
      // case "Top2Bottom Detailing":
      //   return "/images/categories/full.jpg";
      case "Paint Polish & Protection":
        return "/images/categories/paint.webp";
      case "Monthly Plans":
        return "/images/categories/monthly.webp";
      default:
        return "/images/categories/default.jpg";
    }
  };

  const handleViewPackages = (category: string) => {
    setSelectedCategory(category);
  };

  const getPackagesForCategory = (category: string) => {
    return packages
      .filter((pkg) => pkg.category === category)
      .map((pkg) => ({
        src: getCategoryImage(category),
        title: pkg.name,
        category: pkg.category,
        content: (
          <div className="space-y-3">
            <div className="space-y-2">
              <h3 className="text-base md:text-lg font-semibold text-orange-400">
                {t("sections.description")}
              </h3>
              <ul className="list-disc list-inside space-y-1 pl-1">
                {pkg.description.map((item, index) => (
                  <li
                    key={index}
                    className="text-white/90 text-xs md:text-sm leading-relaxed break-words"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-base md:text-lg font-semibold text-orange-400">
                {t("sections.pricing")}
              </h3>
              <div className="space-y-2 bg-gray-800/50 rounded-lg p-2">
                <div className="space-y-1">
                  <p className="text-white/90 text-xs md:text-sm break-words">
                    <span className="font-medium">
                      {t("pricing.sedanCoupesCrossovers")}
                    </span>
                  </p>
                  {pkg.discountedPrice ? (
                    <div className="flex items-center gap-2">
                      <p className="text-gray-500 font-bold text-sm md:text-base line-through">
                        ${pkg.prices.sedanCoupesCrossovers}
                      </p>
                      <p className="text-orange-400 font-bold text-base md:text-lg">
                        ${pkg.discountedPrice.sedanCoupesCrossovers}
                      </p>
                      <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg animate-pulse">
                        SAVE $
                        {(
                          pkg.prices.sedanCoupesCrossovers -
                          pkg.discountedPrice.sedanCoupesCrossovers
                        ).toFixed(0)}
                      </span>
                    </div>
                  ) : (
                    <p className="text-orange-400 font-bold text-base md:text-lg text-center">
                      ${pkg.prices.sedanCoupesCrossovers}
                    </p>
                  )}
                </div>
                <div className="space-y-1">
                  <p className="text-white/90 text-xs md:text-sm break-words">
                    <span className="font-medium">
                      {t("pricing.compactMidFullSUVsPickups")}
                    </span>
                  </p>
                  {pkg.discountedPrice ? (
                    <div className="flex items-center gap-2">
                      <p className="text-gray-500 font-bold text-sm md:text-base line-through">
                        ${pkg.prices.compactMidFullSUVsPickups}
                      </p>
                      <p className="text-orange-400 font-bold text-base md:text-lg">
                        ${pkg.discountedPrice.compactMidFullSUVsPickups}
                      </p>
                      <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg animate-pulse">
                        SAVE $
                        {(
                          pkg.prices.compactMidFullSUVsPickups -
                          pkg.discountedPrice.compactMidFullSUVsPickups
                        ).toFixed(0)}
                      </span>
                    </div>
                  ) : (
                    <p className="text-orange-400 font-bold text-base md:text-lg text-center">
                      ${pkg.prices.compactMidFullSUVsPickups}
                    </p>
                  )}
                </div>
                {pkg.prices.fullSizeSUVsPickups && (
                  <div className="space-y-1">
                    <p className="text-white/90 text-xs md:text-sm break-words">
                      <span className="font-medium">
                        {t("pricing.fullSizeSUVsPickups")}
                      </span>
                    </p>
                    {pkg.discountedPrice?.fullSizeSUVsPickups ? (
                      <div className="flex items-center gap-2">
                        <p className="text-gray-500 font-bold text-sm md:text-base line-through">
                          ${pkg.prices.fullSizeSUVsPickups}
                        </p>
                        <p className="text-orange-400 font-bold text-base md:text-lg">
                          ${pkg.discountedPrice.fullSizeSUVsPickups}
                        </p>
                        <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg animate-pulse">
                          SAVE $
                          {pkg.prices.fullSizeSUVsPickups &&
                          pkg.discountedPrice.fullSizeSUVsPickups
                            ? (
                                pkg.prices.fullSizeSUVsPickups -
                                pkg.discountedPrice.fullSizeSUVsPickups
                              ).toFixed(0)
                            : "0"}
                        </span>
                      </div>
                    ) : (
                      <p className="text-orange-400 font-bold text-base md:text-lg text-center">
                        ${pkg.prices.fullSizeSUVsPickups}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ),
      }));
  };

  return (
    <div className="min-h-screen bg-black text-gray-300">
      <div className="container mx-auto px-6 md:px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4 text-orange-600">
          {t("page.title")}
        </h1>

        {selectedCategory ? (
          <div className="mt-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 sm:gap-0">
              <button
                onClick={() => setSelectedCategory(null)}
                className="flex items-center text-orange-600 hover:text-orange-700 text-sm md:text-base"
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
                {t("page.backToCategories")}
              </button>

              <button
                onClick={() => {
                  const categoryPackages = packages.filter(
                    (pkg) => pkg.category === selectedCategory
                  );
                  const allAddOnsForCategory = Array.from(
                    new Set(categoryPackages.flatMap((pkg) => pkg.addOns || []))
                  );
                  if (allAddOnsForCategory.length > 0) {
                    setSelectedAddOns(allAddOnsForCategory);
                  }
                }}
                className="px-4 py-2 rounded-xl bg-orange-600 text-white text-sm font-bold hover:bg-orange-700 transition-colors duration-300 whitespace-nowrap"
              >
                {t("page.viewAddons")}
              </button>
            </div>
            <Carousel
              items={getPackagesForCategory(selectedCategory).map(
                (card, index) => (
                  <CarouselCard key={index} card={card} index={index} />
                )
              )}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {selectedServices.map((category) => (
              <CardContainer key={category} className="inter-var w-full">
                <CardBody className="bg-gray-800 relative group/card hover:shadow-2xl hover:shadow-orange-500/[0.1] border border-gray-700 rounded-xl p-8 md:p-6 shadow-lg text-gray-300 w-full max-w-full md:w-[30rem] h-auto">
                  <CardItem
                    translateZ="50"
                    className="text-lg md:text-xl font-bold text-orange-600 break-words"
                  >
                    {category}
                  </CardItem>
                  {/* <CardItem
                    as="p"
                    translateZ="60"
                    className="text-white text-sm max-w-full mt-2 break-words leading-relaxed"
                  >
                    {
                      packages.find((pkg) => pkg.category === category)
                        ?.description[0]
                    }
                  </CardItem> */}
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={getCategoryImage(category)}
                      height="1000"
                      width="1000"
                      className="h-48 md:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={category}
                    />
                  </CardItem>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 md:mt-20 gap-4 sm:gap-0">
                    <CardItem
                      translateZ={20}
                      translateX={-40}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal text-orange-600 break-words"
                    >
                      {(() => {
                        const pkg = packages.find(
                          (pkg) => pkg.category === category
                        );
                        const hasDiscount = pkg?.discountedPrice;
                        const price = hasDiscount
                          ? pkg.discountedPrice?.sedanCoupesCrossovers
                          : pkg?.prices.sedanCoupesCrossovers;
                        return (
                          <div className="flex items-center gap-1">
                            {hasDiscount && pkg && (
                              <span className="text-gray-500 line-through text-xs">
                                ${pkg.prices.sedanCoupesCrossovers}
                              </span>
                            )}
                            <span>
                              {t("pricing.from")}
                              {price}
                            </span>
                          </div>
                        );
                      })()}
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      translateX={40}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 whitespace-nowrap"
                      onClick={() => handleViewPackages(category)}
                    >
                      {t("page.viewPackages")}
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
            <div className="relative z-[60] mx-auto my-10 h-fit max-w-2xl rounded-3xl bg-white dark:bg-gray-900 p-6 md:p-8 font-sans mx-4 border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setSelectedAddOns(null)}
                className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
              >
                <IconX className="h-6 w-6 text-gray-700 dark:text-white" />
              </button>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t("addons.title")}
              </h2>
              <ul className="list-disc list-inside space-y-3">
                {selectedAddOns.map((addon, index) => (
                  <li
                    key={index}
                    className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed break-words"
                  >
                    {addon}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
