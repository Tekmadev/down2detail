import { ceramicCoating } from "@/data/ceramic";
import { useI18n } from "@/hooks/useI18n";

export function DurabilitySection() {
  const { t } = useI18n("ceramic");

  return (
    <section className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <h2 className="text-2xl font-bold text-white mb-4">
        {t("sections.durability.title")}
      </h2>
      <div className="overflow-hidden rounded-xl">
        <table className="w-full text-left mb-4 text-gray-300">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-3 font-semibold text-white">
                {t("sections.durability.tableHeaders.option")}
              </th>
              <th className="p-3 font-semibold text-white">
                {t("sections.durability.tableHeaders.durability")}
              </th>
              <th className="p-3 font-semibold text-white">
                {t("sections.durability.tableHeaders.price")}
              </th>
            </tr>
          </thead>
          <tbody>
            {ceramicCoating.coatingLevels.map((level) => (
              <tr
                key={level.level}
                className="border-t border-gray-700 hover:bg-gray-700/50 transition-colors duration-200"
              >
                <td className="p-3 text-gray-300">{level.level}</td>
                <td className="p-3">{level.duration}</td>
                <td className="p-3 text-orange-600 font-bold">
                  ${level.price.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-500">
        {t("sections.durability.disclaimer")}
      </p>
    </section>
  );
}
