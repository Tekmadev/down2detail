import Image from "next/image";
import Link from "next/link";
import { CtaSection } from "../services/components/CtaSection";
import { ceramicCoating } from "@/data/ceramic";
import ParallaxBanner from "../../components/ParallaxBanner";

export default function CeramicCoatingPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-black py-20 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6">
          {/* Title Section */}
          <div className="text-center mb-12 transform hover:scale-105 transition-transform duration-300">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight">
              {ceramicCoating.label}
            </h1>
            {ceramicCoating.subtitle && (
              <p className="text-2xl text-gray-300 mb-4 font-medium">
                {ceramicCoating.subtitle}
              </p>
            )}
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {ceramicCoating.shortDescription}
            </p>
          </div>
          {/* Main Image */}
          <div className="relative w-full h-[700px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
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
                Why Us?
              </h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                {ceramicCoating.description}
              </p>
            </section>

            {/* How It Works */}
            <section className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h2 className="text-2xl font-bold text-white mb-6">
                How Does It Work?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Media Section */}
                <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-500">
                  <Image
                    src="/images/hiw-ceramic.png"
                    alt="Ceramic Coating Process"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                {/* Text Section */}
                <div className="space-y-4">
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {ceramicCoating.howItWorks
                      .slice(0, 4)
                      .map((item, index) => (
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
        title="Professional Ceramic Coating"
        subtitle="Ultimate Protection & Shine"
        height="60vh"
      />

      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Applicable Surfaces */}
            <section className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h2 className="text-2xl font-bold text-white mb-6">
                Can Ceramic Coating Be Applied to Any Surface?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Text Section */}
                <div className="space-y-4">
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {ceramicCoating.appliesTo.map((item, index) => (
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
                    src="/images/ceramic.png"
                    alt="Ceramic Coating Surfaces"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </div>
            </section>

            {/* Durability */}
            <section className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h2 className="text-2xl font-bold text-white mb-4">
                How Long Does Ceramic Coating Last?
              </h2>
              <div className="overflow-hidden rounded-xl">
                <table className="w-full text-left mb-4 text-gray-300">
                  <thead>
                    <tr className="bg-gray-700">
                      <th className="p-3 font-semibold text-white">Option</th>
                      <th className="p-3 font-semibold text-white">
                        Durability
                      </th>
                      <th className="p-3 font-semibold text-white">
                        Price (CAD)
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
                * All Paint Coating packages require prior{" "}
                <b>Paint Decontamination & Polishing </b> (additional cost if
                not already performed).
              </p>
            </section>

            {/* Why It's Worth It */}
            <section className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h2 className="text-2xl font-bold text-white mb-4">
                Is It Worth the Investment?
              </h2>
              <ul className="list-disc list-inside space-y-3 text-gray-300 text-lg">
                {ceramicCoating.whyWorthIt.map((item, index) => (
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
                Additional Surface Coatings
              </h2>
              <ul className="space-y-4">
                {ceramicCoating.addons.map((addon, index) => (
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
                        ${addon.price.toFixed(2)}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQs */}
            <section className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h2 className="text-2xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {ceramicCoating.faqs.map((faq, index) => (
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
