"use client";

import Image from "next/image";
import { useI18n } from "@/hooks/useI18n";

export default function Hero() {
  const { t } = useI18n("about");

  return (
    <div className="relative bg-secondary overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <Image
          src="/images/services-detailing/headlight-Restoration.png"
          alt="Precision Flooring & Contracting team at work"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary mb-4">
            {t("about.title")}
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#d6781c] mb-8">
            {t("about.subtitle")}
          </h2>
          <p className="text-xl text-secondary mb-8">
            {t("about.description")}
          </p>
        </div>
      </div>
    </div>
  );
}
