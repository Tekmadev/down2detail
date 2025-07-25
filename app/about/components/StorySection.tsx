"use client";

import Image from "next/image";
import { useI18n } from "@/hooks/useI18n";

export default function StorySection() {
  const { t } = useI18n("about");

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#d6781c]/20 rounded-full"></div>
              <Image
                src="/images/shutHero.jpg"
                alt="Down2Detail working on luxury vehicles"
                width={600}
                height={450}
                className="rounded-lg shadow-lg relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-[#d6781c]/10 rounded-full"></div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-4 inline-block">
              <span className="text-sm font-medium text-[#d6781c] uppercase tracking-wider">
                {t("story.title")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2">
                {t("story.subtitle")}
              </h2>
              <div className="w-20 h-1 bg-[#d6781c] mt-4"></div>
            </div>

            <p className="text-secondary/90 mb-6">{t("story.description1")}</p>

            <p className="text-secondary/90 mb-6">{t("story.description2")}</p>

            <p className="text-secondary/90 font-medium">
              {t("story.description3")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
