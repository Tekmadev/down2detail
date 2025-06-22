"use client";

import { FaCar, FaCarSide, FaTruckPickup } from "react-icons/fa";
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
  ];

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

          {/* FEATURES */}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
            What's Included
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start bg-gray-800 p-4 rounded-lg shadow-sm"
              >
                <div className="text-[#d6781c] mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586
                    7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-white">{feature}</p>
              </div>
            ))}
          </div>

          {/* BENEFITS */}
          <div className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700 mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
              Why It's Important
            </h3>
            <ul className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start bg-gray-700 p-4 rounded-xl"
                >
                  <div className="text-[#d6781c] mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586
                        7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-white">{benefit}</p>
                </li>
              ))}
            </ul>
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
            <div className="bg-gray-800 p-6 md:p-8 rounded-xl flex flex-col items-center">
              <h4 className="text-xl font-bold text-white mb-4 text-center">
                This service is available in different packages
              </h4>
              <p className="text-gray-300 mb-6 text-center max-w-2xl">
                We offer multiple package options with different features and
                pricing levels to suit your needs and budget.
              </p>
              <Link
                href="/packages"
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
                View Packages
              </Link>
            </div>
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
                        : "Included in Exterior Detailing"}
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
                        : "Included in Exterior Detailing"}
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
                        : "Included in Exterior Detailing"}
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
