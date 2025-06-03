"use client";

import Image from "next/image";
import { brands } from "@/data/brands";

const BrandLogos = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm md:text-base font-medium text-orange-400 uppercase tracking-wider mb-3">
            D<span className="text-white">2</span>D: WORTHY OF YOUR TRUST
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Prestigious Vehicles We've Detailed
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            From luxury supercars to premium daily drivers, we've earned the
            trust of owners of the world's most prestigious automotive brands.
          </p>
        </div>

        {/* Infinite scroll container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {brands.map((brand, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-32 h-24 md:w-40 md:h-28 flex items-center justify-center mx-4 md:mx-6"
              >
                <div className="w-20 h-16 md:w-24 md:h-20 relative hover:scale-110 transition-transform duration-300">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
            {/* Second set of logos for seamless loop */}
            {brands.map((brand, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-32 h-24 md:w-40 md:h-28 flex items-center justify-center mx-4 md:mx-6"
              >
                <div className="w-20 h-16 md:w-24 md:h-20 relative hover:scale-110 transition-transform duration-300">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            <span className="text-orange-400 font-semibold">100+</span> premium
            vehicles detailed with perfection
          </p>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
          width: calc(200% + 2rem);
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default BrandLogos;
