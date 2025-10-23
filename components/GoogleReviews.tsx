"use client";

import Script from "next/script";
import { useI18n } from "@/hooks/useI18n";

const GoogleReviews = () => {
  const { t } = useI18n("home");
  
  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm md:text-base font-medium text-orange-400 uppercase tracking-wider mb-3">
            D<span className="text-white">2</span>D: {t("googleReviews.badgeText")}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t("googleReviews.subtitle")}
          </p>
        </div>

        <div
          className="elfsight-app-a8e7497f-e52c-49e0-8ed4-b4810964e97f"
          data-elfsight-app-lazy
        ></div>
      </div>

      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="afterInteractive"
      />
    </section>
  );
};

export default GoogleReviews;
