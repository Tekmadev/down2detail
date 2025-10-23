"use client";

import Link from "next/link";
import { useI18n } from "@/hooks/useI18n";

export default function CTASection() {
    const { t } = useI18n("about");
    
    return (
        <section className="py-16 md:py-24 bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
          {t("ctaSection.title")}
        </h2>
        <p className="text-xl text-secondary/80 max-w-2xl mx-auto mb-8">
          {t("ctaSection.description")}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-3 bg-[#d6781c] text-white font-medium rounded-lg hover:bg-[#c2410c] transition-colors duration-300"
          >
            {t("ctaSection.button")}
          </Link>
        </div>
      </div>
    </section>
    )
}

