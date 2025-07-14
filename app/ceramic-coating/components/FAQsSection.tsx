import { useI18n } from "@/hooks/useI18n";

export function FAQsSection() {
  const { t } = useI18n("ceramic");

  return (
    <section className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <h2 className="text-2xl font-bold text-white mb-6">
        {t("sections.faqs.title")}
      </h2>
      <div className="space-y-6">
        {(t("sections.faqs.items", { returnObjects: true }) as any[]).map(
          (faq: any, index: number) => (
            <div
              key={index}
              className="transform hover:translate-x-2 transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-300 text-lg">{faq.answer}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
}
