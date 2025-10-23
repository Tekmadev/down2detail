"use client";

import Image from "next/image";
import Link from "next/link";
import { getServiceById, services } from "@/data/services";
import { notFound } from "next/navigation";
import { useI18n } from "@/hooks/useI18n";

export function generateStaticParams() {
  return services.map((service) => ({
    service_name: service.id,
  }));
}

export function HeroSection({ params }: { params: any }) {
  const service = getServiceById(params.service_name);
  const { t } = useI18n("services");
  const { t: tCommon } = useI18n("common");

  if (!service) {
    notFound();
  }

  // Get translated service data
  const translatedLabel = t(`serviceData.${service.id}.label`, { defaultValue: service.label });
  const translatedSubtitle = t(`serviceData.${service.id}.subtitle`, { defaultValue: service.subtitle });

  return (
    <div className="relative bg-secondary py-24 md:py-32 overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src={service.image}
          alt={service.label}
          fill
          priority
          className="object-cover object-center scale-110 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-block bg-[#d6781c]/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#d6781c]/20">
            <span className="text-[#d6781c] font-medium">{t("page.premiumService")}</span>
          </div>

          {/* Hero Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-lg bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
            {translatedLabel}
          </h1>

          {/* Hero Subtitle */}
          {translatedSubtitle && (
            <p className="text-xl md:text-2xl text-[#d6781c] font-medium mb-6 drop-shadow-sm">
              {translatedSubtitle}
            </p>
          )}

          {/* Hero Buttons */}
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center bg-[#d6781c] hover:bg-[#c66812] text-white font-semibold py-4 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {tCommon("common.bookNow")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
  );
}
