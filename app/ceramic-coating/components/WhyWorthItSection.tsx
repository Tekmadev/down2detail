import { ceramicCoating } from "@/data/ceramic";
import { useI18n } from "@/hooks/useI18n";
import Image from "next/image";

export function WhyWorthItSection() {
  const { t } = useI18n("ceramic");

  return (
    <section className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <h2 className="text-2xl font-bold text-white mb-4">
        {t("sections.worthIt.title")}
      </h2>
      <ul className="list-disc list-inside space-y-3 text-gray-300 text-lg">
        {(
          t("sections.worthIt.reasons", {
            returnObjects: true,
          }) as string[]
        ).map((item: string, index: number) => (
          <li
            key={index}
            className="transform hover:translate-x-2 transition-transform duration-300"
            dangerouslySetInnerHTML={{ __html: item }}
          />
        ))}
      </ul>
      <Image
        src={ceramicCoating.beforeAfterImage}
        alt="Ceramic Coating Before and After"
        width={1000}
        height={1000}
        className="mt-4 rounded-lg shadow-lg"
      />
    </section>
  );
}
