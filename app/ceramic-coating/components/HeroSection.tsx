import Image from "next/image";
import { ceramicCoating } from "@/data/ceramic";
import { useI18n } from "@/hooks/useI18n";

export function HeroSection() {
  const { t } = useI18n("ceramic");

  return (
    <div className="relative bg-black py-20 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Title Section */}
        <div className="text-center mb-12 transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            {t("page.title")}
          </h1>
          <p className="text-2xl text-gray-300 mb-4 font-medium">
            {t("page.subtitle")}
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t("page.shortDescription")}
          </p>
        </div>
        {/* Main Image */}
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[700px] rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 bg-gray-900">
          <Image
            src={ceramicCoating.imageShowcase}
            alt={ceramicCoating.id}
            fill
            className="object-contain transition-transform duration-700 hover:scale-110"
            priority
          />
        </div>
      </div>
    </div>
  );
}
