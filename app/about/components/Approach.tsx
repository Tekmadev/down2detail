"use client";

import Image from "next/image";
import { useI18n } from "@/hooks/useI18n";

export default function Approach() {
  const { t } = useI18n("about");

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-medium text-[#d6781c] uppercase tracking-wider">
              {t("approach.title")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2 mb-6">
              {t("approach.subtitle")}
            </h2>
            <p className="text-secondary/90 mb-8">
              {t("approach.description")}
            </p>

            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#d6781c] flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-secondary mb-2">
                    {t("approach.step1Title")}
                  </h3>
                  <p className="text-secondary/80">
                    {t("approach.step1Description")}
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#d6781c] flex items-center justify-center text-white font-bold">
                    2
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-secondary mb-2">
                    {t("approach.step2Title")}
                  </h3>
                  <p className="text-secondary/80">
                    {t("approach.step2Description")}
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#d6781c] flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-secondary mb-2">
                    {t("approach.step3Title")}
                  </h3>
                  <p className="text-secondary/80">
                    {t("approach.step3Description")}
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#d6781c] flex items-center justify-center text-white font-bold">
                    4
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-secondary mb-2">
                    {t("approach.step4Title")}
                  </h3>
                  <p className="text-secondary/80">
                    {t("approach.step4Description")}
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#d6781c] flex items-center justify-center text-white font-bold">
                    5
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-secondary mb-2">
                    {t("approach.step5Title")}
                  </h3>
                  <p className="text-secondary/80">
                    {t("approach.step5Description")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/services-detailing/Interior.png"
              alt="Interior Detailing"
              width={300}
              height={400}
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
            <Image
              src="/images/services-detailing/paint-correction.webp"
              alt="Paint Correction"
              width={300}
              height={350}
              className="rounded-lg shadow-md w-full h-auto object-cover mt-12"
            />
            <Image
              src="/images/services-detailing/cleaning-engine.webp"
              alt="Ceramic Coating"
              width={300}
              height={400}
              className="rounded-lg shadow-md w-full h-auto object-cover mt-12"
            />
            <Image
              src="/images/services-detailing/gloss-enhancer.webp"
              alt="Engine Bay Detailing"
              width={300}
              height={350}
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
