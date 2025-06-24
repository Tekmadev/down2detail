"use client";

import {
  FaCar,
  FaCarSide,
  FaTruckPickup,
  FaCheckCircle,
  FaLightbulb,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";
import { MdChecklist } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services";
import { useI18n } from "@/hooks/useI18n";
import { getTranslatedService } from "@/lib/translatedServices";

export default function ServiceDetailsPage(props: { service: Service }) {
  const { t } = useI18n("services");

  // Apply translations if this is an exterior service
  const service =
    props.service.category === "Exterior"
      ? getTranslatedService(props.service, t)
      : props.service;

  // Services that should redirect to packages instead of showing individual pricing
  const packageServices = [
    "exterior-detailing",
    "interior-detailing",
    "paint-decontamination",
    "floor-carpet-shampoo",
  ];

  // Dynamic mapping of service categories to package categories and URLs
  const getPackageInfo = (service: Service) => {
    const categoryMapping: Record<
      string,
      { packageCategory: string; url: string; description: string }
    > = {
      Exterior: {
        packageCategory: "Exterior",
        url: "/packages#exterior",
        description:
          "We offer multiple exterior detailing packages with different features and pricing levels to suit your needs and budget.",
      },
      Interior: {
        packageCategory: "Interior",
        url: "/packages#interior",
        description:
          "We offer multiple interior detailing packages with different features and pricing levels to suit your needs and budget.",
      },
      "Paint Polish": {
        packageCategory: "Paint Polish & Protection",
        url: "/packages#paint-polish",
        description:
          "We offer multiple paint polish and protection packages with different features and pricing levels to suit your needs and budget.",
      },
      Protection: {
        packageCategory: "Paint Polish & Protection",
        url: "/packages#protection",
        description:
          "We offer multiple protection packages with different features and pricing levels to suit your needs and budget.",
      },
    };

    return (
      categoryMapping[service.category || ""] || {
        packageCategory: "Package Options",
        url: "/packages",
        description:
          "We offer multiple package options with different features and pricing levels to suit your needs and budget.",
      }
    );
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-20 bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Why Us?
          </h2>
          <p className="text-white mb-8 text-lg leading-relaxed">
            {service.description}
          </p>

          {/* FEATURES -- "What's Included" */}
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-orange-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-lg">
                  <MdChecklist className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  What's Included
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="group flex items-start bg-gradient-to-r from-gray-700/50 to-gray-800/50 hover:from-orange-500/10 hover:to-red-500/10 p-3 md:p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border border-gray-600/30 hover:border-orange-500/30"
                  >
                    <div className="flex-shrink-0 p-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg mr-3 group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-all duration-300">
                      <FaCheckCircle className="h-4 w-4 md:h-5 md:w-5 text-orange-400 group-hover:text-orange-300" />
                    </div>
                    <p className="text-white text-sm md:text-base leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BENEFITS -- "Why It's Important" */}
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-sm rounded-3xl p-4 md:p-8 border border-orange-500/20">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="p-2 md:p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl md:rounded-2xl shadow-lg">
                  <FaLightbulb className="h-4 w-4 md:h-6 md:w-6 text-white" />
                </div>
                <h3 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Why It's Important
                </h3>
              </div>

              <div className="space-y-2 md:space-y-3">
                {service.benefits.map((benefit, index) => {
                  const icons = [FaCheckCircle];
                  const IconComponent = icons[index % icons.length];
                  const gradients = [
                    "from-orange-500/20 to-red-500/20",
                    "from-red-500/20 to-pink-500/20",
                    "from-orange-600/20 to-orange-400/20",
                    "from-amber-500/20 to-orange-500/20",
                  ];
                  const hoverGradients = [
                    "hover:from-orange-500/30 hover:to-red-500/30",
                    "hover:from-red-500/30 hover:to-pink-500/30",
                    "hover:from-orange-600/30 hover:to-orange-400/30",
                    "hover:from-amber-500/30 hover:to-orange-500/30",
                  ];
                  const iconColors = [
                    "text-orange-400 group-hover:text-orange-300",
                    "text-red-400 group-hover:text-red-300",
                    "text-orange-500 group-hover:text-orange-400",
                    "text-amber-400 group-hover:text-amber-300",
                  ];

                  return (
                    <div
                      key={index}
                      className={`group relative overflow-hidden bg-gradient-to-r ${
                        gradients[index % gradients.length]
                      } ${
                        hoverGradients[index % hoverGradients.length]
                      } p-3 md:p-5 rounded-xl md:rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl border border-gray-600/20 hover:border-orange-500/30`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></div>
                      <div className="relative flex items-start gap-3 md:gap-4">
                        <div
                          className={`flex-shrink-0 p-2 md:p-3 bg-gradient-to-r ${
                            gradients[index % gradients.length]
                          } rounded-lg md:rounded-xl border border-orange-500/20 group-hover:scale-110 transition-all duration-300`}
                        >
                          <IconComponent
                            className={`h-4 w-4 md:h-6 md:w-6 ${
                              iconColors[index % iconColors.length]
                            } transition-colors duration-300`}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-xs md:text-base leading-snug md:leading-relaxed group-hover:text-gray-100 transition-colors duration-300 font-medium">
                            {benefit}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* OPTIONAL IMAGE SECTION */}
          {service.optionalImage && (
            <div className="bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 border border-gray-700 mb-12">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
                Service Showcase
              </h3>
              <div className="relative w-full rounded-xl overflow-hidden">
                <Image
                  src={service.optionalImage}
                  alt={`${service.label} showcase`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
              </div>
              <p className="text-gray-300 text-center mt-4 text-sm md:text-base">
                Professional {service.label} service in action
              </p>
            </div>
          )}

          {/* PRICING SECTION */}
          {packageServices.includes(service.id) ? (
            // Show "View Packages" button for services that are offered as packages
            (() => {
              const packageInfo = getPackageInfo(service);
              return (
                <div className="bg-gray-800 p-6 md:p-8 rounded-xl flex flex-col items-center">
                  <h4 className="text-xl font-bold text-white mb-4 text-center">
                    This service is available in our{" "}
                    {packageInfo.packageCategory} packages
                  </h4>
                  <p className="text-gray-300 mb-6 text-center max-w-2xl">
                    {packageInfo.description}
                  </p>
                  <Link
                    href={packageInfo.url}
                    className="inline-flex items-center bg-[#d6781c] hover:bg-[#c66812] text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                    View {packageInfo.packageCategory} Packages
                  </Link>
                </div>
              );
            })()
          ) : (
            // Show individual pricing for services with specific prices
            <div className="bg-gray-800 p-6 md:p-8 rounded-xl flex flex-col items-center">
              <h4 className="text-xl font-bold text-white mb-6">
                Type of Vehicle
              </h4>
              <div className="grid grid-cols-3 gap-1 sm:gap-4 w-full max-w-4xl">
                {/* Sedan */}
                <div className="bg-gray-700 rounded-lg shadow-lg p-2 sm:p-4 md:p-6 flex flex-col items-center justify-between transition hover:shadow-2xl hover:-translate-y-1 min-h-[120px] sm:min-h-[140px]">
                  <FaCar className="h-6 w-6 sm:h-10 sm:w-10 md:h-16 md:w-16 text-white mb-1 sm:mb-3" />
                  <div className="text-xs sm:text-sm md:text-base font-semibold text-white text-center mb-1 sm:mb-2 leading-tight h-8 sm:h-10 flex items-center justify-center">
                    <span>
                      Sedan
                      <br />
                      Coupe
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-xs sm:text-lg md:text-xl font-bold text-[#d6781c] block">
                      {service.currency === "CAD"
                        ? "$"
                        : `Included in ${
                            getPackageInfo(service).packageCategory
                          }`}
                      {service.price.sedan}
                    </span>
                    {service.currency === "CAD" && (
                      <span className="text-gray-300 text-xs">
                        {service.currency}
                      </span>
                    )}
                  </div>
                </div>

                {/* Compact/Mid-size SUV */}
                <div className="bg-gray-700 rounded-lg shadow-lg p-2 sm:p-4 md:p-6 flex flex-col items-center justify-between transition hover:shadow-2xl hover:-translate-y-1 min-h-[120px] sm:min-h-[140px]">
                  <FaCarSide className="h-6 w-6 sm:h-10 sm:w-10 md:h-16 md:w-16 text-white mb-1 sm:mb-3" />
                  <div className="text-xs sm:text-sm md:text-base font-semibold text-white text-center mb-1 sm:mb-2 leading-tight h-8 sm:h-10 flex items-center justify-center">
                    <span>
                      Compact
                      <br />
                      Mid SUV
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-xs sm:text-lg md:text-xl font-bold text-[#d6781c] block">
                      {service.currency === "CAD"
                        ? "$"
                        : `Included in ${
                            getPackageInfo(service).packageCategory
                          }`}
                      {service.price.suv}
                    </span>
                    {service.currency === "CAD" && (
                      <span className="text-gray-300 text-xs">
                        {service.currency}
                      </span>
                    )}
                  </div>
                </div>

                {/* Full-size SUV/Trucks */}
                <div className="bg-gray-700 rounded-lg shadow-lg p-2 sm:p-4 md:p-6 flex flex-col items-center justify-between transition hover:shadow-2xl hover:-translate-y-1 min-h-[120px] sm:min-h-[140px]">
                  <FaTruckPickup className="h-6 w-6 sm:h-10 sm:w-10 md:h-16 md:w-16 text-white mb-1 sm:mb-3" />
                  <div className="text-xs sm:text-sm md:text-base font-semibold text-white text-center mb-1 sm:mb-2 leading-tight h-8 sm:h-10 flex items-center justify-center">
                    <span>
                      Full SUV
                      <br />
                      Trucks
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-xs sm:text-lg md:text-xl font-bold text-[#d6781c] block">
                      {service.currency === "CAD"
                        ? "$"
                        : `Included in ${
                            getPackageInfo(service).packageCategory
                          }`}
                      {service.price.fullSuv}
                    </span>
                    {service.currency === "CAD" && (
                      <span className="text-gray-300 text-xs">
                        {service.currency}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
