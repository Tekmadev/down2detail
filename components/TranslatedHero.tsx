"use client";

import { useI18n } from "@/hooks/useI18n";

export default function TranslatedHero() {
  const { t } = useI18n();

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          {t("hero.title")}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
          {t("hero.subtitle")}
        </p>
        <button className="bg-[#FF4C00] hover:bg-[#e63e00] text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200">
          {t("hero.cta")}
        </button>
      </div>
    </section>
  );
}
