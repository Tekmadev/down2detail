import Image from "next/image";
import Link from 'next/link';
import { CtaSection } from "./CtaSection";
import { HeroSection } from "./Hero";
import { ceramicCoating} from "@/data/ceramic";



export default function CeramicCoatingPage() {
  
    return (
      <div className="bg-white">
        {/* Hero Section */}
        <HeroSection params={{ service_name: "ceramic-coating" }} />
  
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Why Us? */}
              <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-6">Why Us?</h2>
                <p className="text-[#292524] mb-8 text-lg leading-relaxed">{ceramicCoating.description}</p>
              </section>

              {/* How It Works */}
              <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#292524] mb-4">How Does It Work?</h2>
                <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                  {ceramicCoating.howItWorks.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>
  
              {/* Durability */}
              <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#292524] mb-4">How Long Does Ceramic Coating Last?</h2>
                <table className="w-full text-left mb-4">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-3 font-semibold">Option</th>
                      <th className="p-3 font-semibold">Durability</th>
                      <th className="p-3 font-semibold">Price (CAD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ceramicCoating.  coatingLevels.map((level) => (
                      <tr key={level.level} className="border-t border-gray-200">
                        <td className="p-3">{level.level}</td>
                        <td className="p-3">{level.duration}</td>
                        <td className="p-3 text-orange-600 font-bold">${level.price.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-sm text-gray-500">
                  * All Paint Coating packages require prior Paint Decontamination & Polishing (additional cost if not already performed).
                </p>
              </section>
  
              {/* Why It's Worth It */}
              <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#292524] mb-4">Is It Worth the Investment?</h2>
                <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                  {ceramicCoating.whyWorthIt.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>
  
              {/* Applicable Surfaces */}
              <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#292524] mb-4">Can Ceramic Coating Be Applied to Any Surface?</h2>
                <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                  {ceramicCoating.appliesTo.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>
  
            {/* Sidebar Column */}
            <div className="lg:col-span-1 space-y-12">
              {/* Add-ons */}
              <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#292524] mb-6">Additional Surface Coatings</h2>
                <ul className="space-y-4">
                  {ceramicCoating.addons.map((addon, index) => (
                    <li key={index} className="bg-gray-50 border rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold text-[#292524]">{addon.title}</p>
                          <p className="text-gray-600 text-sm">{addon.duration}</p>
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
              <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#292524] mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {ceramicCoating.faqs.map((faq, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-semibold text-[#292524] mb-2">{faq.question}</h3>
                      <p className="text-gray-700 text-lg">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
        <CtaSection/>
      </div>
    );
  }
  