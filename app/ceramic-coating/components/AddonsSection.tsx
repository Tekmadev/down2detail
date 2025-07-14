import { ceramicCoating } from "@/data/ceramic";
import { useI18n } from "@/hooks/useI18n";

export function AddonsSection() {
  const { t } = useI18n("ceramic");

  return (
    <section className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <h2 className="text-2xl font-bold text-white mb-6">
        {t("sections.addons.title")}
      </h2>
      <ul className="space-y-4">
        {(t("sections.addons.items", { returnObjects: true }) as any[]).map(
          (addon: any, index: number) => (
            <li
              key={index}
              className="bg-gray-700 border border-gray-600 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-white">{addon.title}</p>
                  <p className="text-gray-400 text-sm">{addon.duration}</p>
                </div>
                <span className="text-orange-500 font-bold text-lg">
                  ${ceramicCoating.addons[index]?.price.toFixed(2)}
                </span>
              </div>
            </li>
          )
        )}
      </ul>
    </section>
  );
}
