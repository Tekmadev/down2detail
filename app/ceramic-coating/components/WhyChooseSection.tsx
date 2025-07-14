import { useI18n } from "@/hooks/useI18n";
import { ceramicCoating } from "@/data/ceramic";

export function WhyChooseSection() {
  const { t } = useI18n("ceramic");

  return (
    <section className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
        {t("sections.whyChoose.title")}
      </h2>

      {/* Introduction */}
      <p className="text-gray-300 mb-6 text-lg leading-relaxed">
        {t("sections.whyChoose.introduction")}
      </p>

      {/* Key Benefits */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white mb-4">
          {t("sections.whyChoose.keyBenefitsTitle")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(t("sections.benefits", { returnObjects: true }) as string[]).map(
            (benefit: string, index: number) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="text-[#d6781c] mt-1">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span
                  className="text-gray-300"
                  dangerouslySetInnerHTML={{ __html: benefit }}
                />
              </div>
            )
          )}
        </div>
      </div>

      {/* Protection Levels */}
      {/* <div className="bg-gray-700 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-3">
          {t("sections.durability.tableHeaders.option")}s:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ceramicCoating.coatingLevels.map((level, index) => (
            <div key={index} className="text-center">
              <div className="text-[#d6781c] font-bold text-xl">
                {level.level}
              </div>
              <div className="text-gray-300 text-sm">
                {level.duration}
              </div>
              <div className="text-white font-semibold mt-1">
                ${level.price.toFixed(2)} {ceramicCoating.currency}
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}
