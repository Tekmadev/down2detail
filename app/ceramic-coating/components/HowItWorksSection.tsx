import Image from "next/image";
import { useI18n } from "@/hooks/useI18n";

export function HowItWorksSection() {
  const { t } = useI18n("ceramic");

  return (
    <section className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <h2 className="text-2xl font-bold text-white mb-6">
        {t("sections.howItWorks.title")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Media Section */}
        <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-500">
          <Image
            src="/images/services-detailing/ceramiccc.jpg"
            alt={t("sections.howItWorks.altText")}
            fill
            className="object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>
        {/* Text Section */}
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {(
              t("sections.benefits", {
                returnObjects: true,
              }) as string[]
            )
              .slice(0, 4)
              .map((item: string, index: number) => (
                <li
                  key={index}
                  className="transform hover:translate-x-2 transition-transform duration-300"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
