"use client";

import { FaCar, FaCarSide, FaTruckPickup } from "react-icons/fa";
import Image from "next/image";
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

          {/* PRICE CARD */}
          <div className="bg-gray-800 p-6 md:p-8 rounded-xl flex flex-col items-center">
            <h4 className="text-xl font-bold text-white mb-6">
              Type of Vehicle
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl">
              {/* Sedan */}
              <div className="bg-gray-700 rounded-xl shadow-lg p-4 md:p-6 flex flex-col items-center transition hover:shadow-2xl hover:-translate-y-1">
                <FaCar className="h-12 w-12 md:h-16 md:w-16 text-white mb-3" />
                <span className="text-sm md:text-base font-semibold text-white text-center mb-2">
                  Sedan/Coupe
                </span>
                <div className="text-center">
                  <span className="block text-gray-300 text-xs md:text-sm mb-1">
                    Small Price
                  </span>
                  <span className="text-lg md:text-xl font-bold text-[#d6781c]">
                    ${service.price.sedan}
                  </span>
                  <span className="text-gray-300 text-xs md:text-sm ml-1">
                    {service.currency}
                  </span>
                </div>
              </div>

              {/* Compact/Mid-size SUV */}
              <div className="bg-gray-700 rounded-xl shadow-lg p-4 md:p-6 flex flex-col items-center transition hover:shadow-2xl hover:-translate-y-1">
                <FaCarSide className="h-12 w-12 md:h-16 md:w-16 text-white mb-3" />
                <span className="text-sm md:text-base font-semibold text-white text-center mb-2">
                  Compact/Mid-size SUV
                </span>
                <div className="text-center">
                  <span className="block text-gray-300 text-xs md:text-sm mb-1">
                    Medium Price
                  </span>
                  <span className="text-lg md:text-xl font-bold text-[#d6781c]">
                    ${service.price.suv}
                  </span>
                  <span className="text-gray-300 text-xs md:text-sm ml-1">
                    {service.currency}
                  </span>
                </div>
              </div>

              {/* Full-size SUV/Trucks */}
              <div className="bg-gray-700 rounded-xl shadow-lg p-4 md:p-6 flex flex-col items-center transition hover:shadow-2xl hover:-translate-y-1">
                <FaTruckPickup className="h-12 w-12 md:h-16 md:w-16 text-white mb-3" />
                <span className="text-sm md:text-base font-semibold text-white text-center mb-2">
                  Full-size SUV/Trucks
                </span>
                <div className="text-center">
                  <span className="block text-gray-300 text-xs md:text-sm mb-1">
                    Large Price
                  </span>
                  <span className="text-lg md:text-xl font-bold text-[#d6781c]">
                    ${service.price.fullSuv}
                  </span>
                  <span className="text-gray-300 text-xs md:text-sm ml-1">
                    {service.currency}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
