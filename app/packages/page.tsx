"use client";

import React from "react";
import { packages, type AddOnDetail } from "@/data/packages";
import { CardBody, CardItem, CardContainer } from "@/components/ui/3d-card";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Carousel,
  Card as CarouselCard,
} from "@/components/ui/apple-cards-carousel";
import { IconX } from "@tabler/icons-react";
import { useI18n } from "@/hooks/useI18n";
import { getTranslatedPackage } from "@/lib/translatedPackages";
// Note: This is a client component, so metadata is handled in layout.tsx

const UNDER_DEVELOPMENT = false;

export default function Packages() {
  const { t } = useI18n("packages");

  if (UNDER_DEVELOPMENT) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <div className="text-6xl mb-6">🔧</div>
          <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">
            New Packages Coming Soon
          </h1>
          <p className="text-gray-400 text-base md:text-lg mb-8">
            We&apos;re currently updating our packages to serve you better. Check back soon
            for our latest detailing options and pricing.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 rounded-xl bg-orange-600 text-white font-bold hover:bg-orange-700 transition-colors duration-300"
          >
            Contact Us for a Quote
          </a>
        </div>
      </div>
    );
  }
  const selectedServices = Array.from(
    new Set(packages.map((pkg) => pkg.category))
  ).slice(0, 5);
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<AddOnDetail[] | null>(null);

  const getCategoryImage = (category: string) => {
    switch (category) {
      case "Exterior & Interior Detail":
        return "/images/categories/exterior2.jpg";
      case "Paint Polish & Protection":
        return "/images/categories/ceramic-sealant-spray.jpg";
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
      .map((pkg) => {
        const translatedPackage = getTranslatedPackage(pkg, t);
        return {
          src: getCategoryImage(category),
          title: translatedPackage.name,
          category: translatedPackage.category,
          badge: translatedPackage.badge,
          content: (
            <div className="space-y-4">
              {/* Label badge */}
              {translatedPackage.label && (
                <span className="inline-block text-xs font-bold text-red-400 bg-red-400/10 border border-red-400/30 rounded-full px-3 py-1 tracking-wide">
                  {translatedPackage.label}
                </span>
              )}

              {/* Included services */}
              <div>
                <p className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-orange-400 mb-2">
                  {t("sections.description")}
                </p>
                <ul className="space-y-1.5">
                  {translatedPackage.description.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-white/85 text-xs leading-snug"
                    >
                      <span className="mt-0.5 shrink-0 w-3.5 h-3.5 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center">
                        <span className="w-1 h-1 rounded-full bg-orange-400 block" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10" />

              {/* Pricing rows */}
              <div>
                <p className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-orange-400 mb-2">
                  {t("sections.pricing")}
                </p>
                <div className="space-y-2">
                  {/* Sedan row */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-white/70 text-xs shrink-0">
                      {selectedCategory === "Paint Polish & Protection" || selectedCategory === "Exterior & Interior Detail"
                        ? "Sedan"
                        : t("pricing.sedanCoupesCrossovers")}
                    </span>
                    <span className="flex-1 border-b border-dashed border-white/15 mx-2" />
                    {pkg.discountedPrice ? (
                      <span className="flex items-center gap-1.5 shrink-0">
                        <span className="text-gray-500 text-xs line-through">
                          ${pkg.prices.sedanCoupesCrossovers}
                        </span>
                        <span className="text-orange-400 font-bold text-sm">
                          ${pkg.discountedPrice.sedanCoupesCrossovers}
                        </span>
                      </span>
                    ) : (
                      <span className="text-orange-400 font-bold text-sm shrink-0">
                        ${pkg.prices.sedanCoupesCrossovers}
                      </span>
                    )}
                  </div>

                  {/* Mid SUV row */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-white/70 text-xs shrink-0">
                      {selectedCategory === "Paint Polish & Protection" || selectedCategory === "Exterior & Interior Detail"
                        ? "Mid SUVs"
                        : t("pricing.compactMidFullSUVsPickups")}
                    </span>
                    <span className="flex-1 border-b border-dashed border-white/15 mx-2" />
                    {pkg.discountedPrice ? (
                      <span className="flex items-center gap-1.5 shrink-0">
                        <span className="text-gray-500 text-xs line-through">
                          ${pkg.prices.compactMidFullSUVsPickups}
                        </span>
                        <span className="text-orange-400 font-bold text-sm">
                          ${pkg.discountedPrice.compactMidFullSUVsPickups}
                        </span>
                      </span>
                    ) : (
                      <span className="text-orange-400 font-bold text-sm shrink-0">
                        ${pkg.prices.compactMidFullSUVsPickups}
                      </span>
                    )}
                  </div>

                  {/* Truck / Full SUV row */}
                  {pkg.prices.fullSizeSUVsPickups && (
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-white/70 text-xs shrink-0">
                        {selectedCategory === "Paint Polish & Protection" || selectedCategory === "Exterior & Interior Detail"
                          ? "Truck"
                          : t("pricing.fullSizeSUVsPickups")}
                      </span>
                      <span className="flex-1 border-b border-dashed border-white/15 mx-2" />
                      {pkg.discountedPrice?.fullSizeSUVsPickups ? (
                        <span className="flex items-center gap-1.5 shrink-0">
                          <span className="text-gray-500 text-xs line-through">
                            ${pkg.prices.fullSizeSUVsPickups}
                          </span>
                          <span className="text-orange-400 font-bold text-sm">
                            ${pkg.discountedPrice.fullSizeSUVsPickups}
                          </span>
                        </span>
                      ) : (
                        <span className="text-orange-400 font-bold text-sm shrink-0">
                          ${pkg.prices.fullSizeSUVsPickups}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ),

        };
      });
  };

  return (
    <div className="min-h-screen bg-black text-gray-300">
      <div className="container mx-auto px-6 md:px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4 text-orange-600">
          {t("page.title")}
        </h1>

        {selectedCategory ? (
          <div className="mt-8">
            {/* Buttons row stays inside the padded container */}
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

              {selectedCategory !== "Monthly Plans" && (
                <button
                  onClick={() => {
                    const categoryPackages = packages.filter(
                      (pkg) => pkg.category === selectedCategory
                    );
                    // Prefer addOnDetails (with pricing) over legacy addOns
                    const detailedAddOns = Array.from(
                      new Map(
                        categoryPackages
                          .flatMap((pkg) => pkg.addOnDetails || [])
                          .map((a) => [a.name, a])
                      ).values()
                    );
                    if (detailedAddOns.length > 0) {
                      setSelectedAddOns(detailedAddOns);
                    } else {
                      // Fallback to legacy string-only addOns
                      const legacyAddOns = Array.from(
                        new Set(
                          categoryPackages.flatMap((pkg) => pkg.addOns || [])
                        )
                      ).map((name) => ({ name }));
                      if (legacyAddOns.length > 0) {
                        setSelectedAddOns(legacyAddOns);
                      }
                    }
                  }}
                  className="px-4 py-2 rounded-xl bg-orange-600 text-white text-sm font-bold hover:bg-orange-700 transition-colors duration-300 whitespace-nowrap"
                >
                  {t("page.viewAddons")}
                </button>
              )}
            </div>
            {/* Break carousel out of container padding so the first card is never clipped on mobile */}
            <div className="-mx-6 md:-mx-4">
              <Carousel
                items={getPackagesForCategory(selectedCategory).map(
                  (card, index) => (
                    <CarouselCard key={index} card={card} index={index} />
                  )
                )}
              />
            </div>
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
                    {t(`packageCategories.${category}`)}
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
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t("addons.title")}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                Enhance your package with any of the following optional services.
              </p>
              <ul className="space-y-3">
                {selectedAddOns.map((addon, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between gap-4 py-2 border-b border-gray-200 dark:border-gray-700 last:border-0"
                  >
                    <span className="text-gray-800 dark:text-gray-200 text-sm md:text-base">
                      {addon.name}
                    </span>
                    <span className="shrink-0 font-bold text-orange-500 text-sm md:text-base">
                      {addon.priceDisplay
                        ? addon.priceDisplay
                        : addon.price !== undefined
                          ? `+$${addon.price}`
                          : "Contact for pricing"}
                    </span>
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
