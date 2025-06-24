"use client";

import Image from "next/image";
import Link from "next/link";
import { CtaSection } from "../services/components/CtaSection";
import { ceramicCoating } from "@/data/ceramic";
import ParallaxBanner from "../../components/ParallaxBanner";
import { useI18n } from "@/hooks/useI18n";

// Note: This is a client component, so metadata should be in layout.tsx
// For now, ceramic coating metadata is handled by the main layout

export default function CeramicCoatingPage() {
  const { t } = useI18n("ceramic");

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
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
          <div className="relative w-full h-[300px] md:h-[500px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
            <Image
              src={ceramicCoating.imageShowcase}
              alt={ceramicCoating.id}
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
              priority
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Why Us? */}
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
                  {(
                    t("sections.benefits", { returnObjects: true }) as string[]
                  ).map((benefit: string, index: number) => (
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
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Protection Levels */}
              <div className="bg-gray-700 rounded-xl p-6">
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
              </div>
            </section>

            {/* How It Works */}
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
                        >
                          {item}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Parallax Banner Section */}
      <ParallaxBanner
        imageUrl="/images/services-detailing/Ceramic-coating.webp"
        title={t("parallax.title")}
        subtitle={t("parallax.subtitle")}
        height="60vh"
      />

      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Applicable Surfaces */}
            <section className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h2 className="text-2xl font-bold text-white mb-6">
                {t("sections.appliesTo.title")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Text Section */}
                <div className="space-y-4">
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {(
                      t("sections.appliesTo.surfaces", {
                        returnObjects: true,
                      }) as string[]
                    ).map((item: string, index: number) => (
                      <li
                        key={index}
                        className="transform hover:translate-x-2 transition-transform duration-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Media Section */}
                <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-500">
                  <Image
                    src="/images/services-detailing/ceramic-coatings.webp"
                    alt={t("sections.appliesTo.altText")}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </div>
            </section>

            {/* Durability */}
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

            {/* Why It's Worth It */}
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
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-1 space-y-12">
            {/* Add-ons */}
            <section className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h2 className="text-2xl font-bold text-white mb-6">
                {t("sections.addons.title")}
              </h2>
              <ul className="space-y-4">
                {(
                  t("sections.addons.items", { returnObjects: true }) as any[]
                ).map((addon: any, index: number) => (
                  <li
                    key={index}
                    className="bg-gray-700 border border-gray-600 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-white">
                          {addon.title}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {addon.duration}
                        </p>
                      </div>
                      <span className="text-orange-500 font-bold text-lg">
                        ${ceramicCoating.addons[index]?.price.toFixed(2)}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQs */}
            <section className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h2 className="text-2xl font-bold text-white mb-6">
                {t("sections.faqs.title")}
              </h2>
              <div className="space-y-6">
                {(
                  t("sections.faqs.items", { returnObjects: true }) as any[]
                ).map((faq: any, index: number) => (
                  <div
                    key={index}
                    className="transform hover:translate-x-2 transition-transform duration-300"
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-300 text-lg">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      <CtaSection />
    </div>
  );
}
