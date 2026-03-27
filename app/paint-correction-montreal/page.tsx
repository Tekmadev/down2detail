"use client";

import Link from "next/link";
import Script from "next/script";
import NAPBlock from "@/components/geo/NAPBlock";
import Testimonials, { Testimonial } from "@/components/geo/Testimonials";
import MythBustingFAQ, { FAQItem } from "@/components/geo/MythBustingFAQ";

const montrealSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://down2detail.ca/paint-correction-montreal#service",
  name: "Paint Correction in Montreal",
  description:
    "Professional multi-stage paint correction in Montreal, QC. Stage 1 (75% defect removal), Stage 2 (90%), and Stage 3 (99%). Essential prerequisite before ceramic coating. Specializing in Tesla, BMW, Mercedes, and luxury vehicles. Serving Downtown Montreal, NDG, Plateau, Griffintown, and Verdun.",
  url: "https://down2detail.ca/paint-correction-montreal",
  serviceType: "Paint Correction",
  provider: {
    "@type": "AutoBodyShop",
    "@id": "https://down2detail.ca/#business",
    name: "Down2Detail",
    telephone: "+1-438-483-8175",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4500 Bd Kimber",
      addressLocality: "Saint-Hubert",
      addressRegion: "QC",
      postalCode: "J3Y 8K5",
      addressCountry: "CA",
    },
  },
  areaServed: {
    "@type": "City",
    name: "Montreal",
    "@id": "https://www.wikidata.org/wiki/Q340",
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Quebec",
    },
  },
  isRelatedTo: {
    "@type": "Service",
    "@id": "https://down2detail.ca/ceramic-coating-longueuil#service",
    name: "Ceramic Coating",
    description:
      "Professional ceramic coating — paint correction is the essential prerequisite for optimal bonding",
  },
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "369.99",
    highPrice: "999.99",
    priceCurrency: "CAD",
    offerCount: 3,
  },
};

const testimonials: Testimonial[] = [
  {
    name: "David L.",
    city: "Montreal",
    rating: 5,
    text: "Had a full paint correction done on my BMW M4. The swirl marks from the dealership are completely gone. It looks better than the day I picked it up. Worth every penny.",
    service: "Stage 3 Paint Correction",
    vehicle: "BMW M4",
    date: "2025",
  },
  {
    name: "Sarah K.",
    city: "Montreal",
    rating: 5,
    text: "Brought my Tesla Model Y in after one Quebec winter. The road salt damage was visible everywhere. After paint correction and ceramic coating, it looks brand new. Incredible work.",
    service: "Paint Correction + Ceramic Coating",
    vehicle: "Tesla Model Y",
    date: "2025",
  },
  {
    name: "Youssef A.",
    city: "Montreal",
    rating: 5,
    text: "Very thorough process. They showed me before and after with their inspection light. The difference is night and day. Highly recommend for anyone in Montreal who cares about their car.",
    service: "One-Step Polish",
    vehicle: "Mercedes C-Class",
    date: "2025",
  },
];

const faqs: FAQItem[] = [
  {
    question:
      "What is multi-stage paint correction and why does my car need it?",
    answer:
      "Multi-stage paint correction is a systematic process of removing paint defects using increasingly fine abrasives. Stage 1 (Gloss Enhancement) removes ~75% of defects using a fine polish. Stage 2 (One-Step Correction) uses a compound/polish blend to remove ~90% of defects. Stage 3 (Full Correction) combines wet sanding, compounding, and refining to eliminate ~99% of imperfections. Montreal driving conditions — road salt, calcium, stone chips from construction zones, and automatic car wash damage — create defects that only professional correction can remove.",
  },
  {
    question: "How much does paint correction cost in Montreal?",
    answer:
      "Paint correction pricing depends on the vehicle size and severity of defects. Stage 1 (Gloss Enhancement) starts at $369 for sedans, Stage 2 (One-Step Polish) starts at $599, and Stage 3 (Full Correction) starts at $749. SUVs and trucks are priced higher based on surface area. We offer free consultations with paint inspection under professional lighting to recommend the right level for your vehicle.",
  },
  {
    question:
      "Is paint correction permanent?",
    myth: "Paint correction wears off after a few months like wax.",
    reality:
      "Paint correction physically removes a microscopic layer of clear coat containing the defects. The correction itself is permanent.",
    answer:
      "The correction results are permanent because we physically level the clear coat to eliminate defects. However, new defects can form from improper washing, road debris, and environmental damage. That's why we recommend ceramic coating after paint correction — it adds a sacrificial protective layer that prevents new defects from reaching your corrected clear coat.",
  },
  {
    question: "Can paint correction fix deep scratches?",
    answer:
      "Paint correction can remove or significantly reduce scratches that haven't penetrated through the clear coat into the base coat. If you can feel a scratch with your fingernail, it may be too deep for correction alone. During our free inspection, we measure paint thickness and assess scratch depth to give you honest expectations. For scratches beyond correction, we can discuss touch-up or panel refinishing options.",
  },
  {
    question: "How long does paint correction take?",
    answer:
      "Stage 1 (Gloss Enhancement) typically takes 4-6 hours. Stage 2 (One-Step Polish) requires 6-8 hours. Stage 3 (Full Paint Correction) can take 8-16 hours depending on vehicle size and paint condition. We don't rush the process — each panel is inspected under high-intensity LED lights to ensure consistent, showroom-quality results across the entire vehicle.",
  },
  {
    question:
      "Should I get paint correction before or after winter in Montreal?",
    answer:
      "Both have advantages. Pre-winter correction + ceramic coating provides maximum salt and calcium protection throughout the harshest months. Post-winter correction addresses accumulated damage from salt, gravel, and de-icing chemicals. Our most popular approach with Montreal clients is a post-winter paint correction in April/May followed by ceramic coating for year-round protection.",
  },
];

export default function PaintCorrectionMontrealPage() {
  return (
    <div className="bg-black min-h-screen">
      <Script
        id="paint-correction-montreal-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(montrealSchema) }}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/services-detailing/paint-correction.webp')",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-[#d6781c] font-semibold text-sm uppercase tracking-widest mb-4">
            Best Paint Correction Shop in Montreal
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl">
            Professional Paint Correction in{" "}
            <span className="text-[#d6781c]">Montreal</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Multi-stage paint correction from 75% to 99% defect removal.
            Restore your vehicle&apos;s showroom finish and protect it from
            Quebec&apos;s road salt, calcium, and environmental damage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#d6781c] hover:bg-[#c2410c] text-white font-bold rounded-lg transition-colors text-lg"
            >
              Book Free Paint Inspection
            </Link>
            <a
              href="tel:+14384838175"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black font-bold rounded-lg transition-colors text-lg"
            >
              Call (438) 483-8175
            </a>
          </div>
        </div>
      </section>

      {/* Stage 1/2/3 Paint Correction Tiers */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <h2 className="text-3xl font-bold text-white mb-3">
          Three Levels of Paint Correction for{" "}
          <span className="text-[#d6781c]">Every Situation</span>
        </h2>
        <p className="text-gray-400 mb-10 max-w-3xl">
          Not every vehicle needs the same level of correction. We assess your
          paint under professional LED lighting and recommend the tier that
          matches your paint condition, goals, and budget.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            {
              stage: "Stage 1",
              name: "Gloss Enhancement",
              percentage: "75%",
              color: "from-orange-600 to-yellow-500",
              process: [
                "Exterior detail wash & decontamination",
                "Paint thickness measurement",
                "Fine machine polish with finishing pad",
                "Microfiber hand-buffing for final shine",
                "Inspection under LED lighting",
                "3-month polymer sealant included",
              ],
              best: "Newer vehicles, well-maintained paint, pre-sale prep",
              time: "4–6 hours",
              sedan: "$369",
              suv: "$399",
              fullSuv: "$439",
            },
            {
              stage: "Stage 2",
              name: "One-Step Correction",
              percentage: "90%",
              color: "from-orange-500 to-red-500",
              process: [
                "Exterior detail wash & decontamination",
                "Paint thickness measurement",
                "Compound/polish blend with cutting pad",
                "Refining pass for maximum clarity",
                "Full panel-by-panel LED inspection",
                "3-month polymer sealant included",
              ],
              best: "Daily drivers, moderate swirls, post-winter restoration",
              time: "6–8 hours",
              sedan: "$599",
              suv: "$649",
              fullSuv: "$699",
              popular: true,
            },
            {
              stage: "Stage 3",
              name: "Full Paint Correction",
              percentage: "99%",
              color: "from-red-500 to-pink-500",
              process: [
                "Exterior detail wash & decontamination",
                "Paint thickness measurement",
                "Wet sanding for heavy defects",
                "Multi-step compound and polish",
                "Finishing pass with ultra-fine polish",
                "Detailed LED inspection on every panel",
              ],
              best: "Heavily damaged paint, show-quality finish, pre-ceramic coating",
              time: "8–16 hours",
              sedan: "$749",
              suv: "$839",
              fullSuv: "$999",
            },
          ].map((tier, idx) => (
            <div
              key={idx}
              className={`relative bg-gray-800 rounded-2xl p-6 border ${
                tier.popular
                  ? "border-[#d6781c] ring-2 ring-[#d6781c]/20"
                  : "border-gray-700"
              } hover:border-[#d6781c] transition-colors`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#d6781c] text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <div className="text-center mb-6">
                <span
                  className={`inline-block bg-gradient-to-r ${tier.color} text-white text-xs font-bold px-4 py-1 rounded-full mb-3`}
                >
                  {tier.stage}
                </span>
                <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                <div className="mt-2">
                  <span className="text-5xl font-black text-[#d6781c]">
                    {tier.percentage}
                  </span>
                  <p className="text-gray-400 text-sm">Defect Removal</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">
                    Process Includes
                  </p>
                  <ul className="space-y-1.5">
                    {tier.process.map((step, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-300 text-sm"
                      >
                        <svg
                          className="w-4 h-4 text-green-400 shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-700/30 rounded-lg p-3">
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                    Best For
                  </p>
                  <p className="text-white text-sm">{tier.best}</p>
                </div>

                <div className="bg-gray-700/30 rounded-lg p-3">
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                    Estimated Time
                  </p>
                  <p className="text-white text-sm">{tier.time}</p>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-4 space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Sedan/Coupe</span>
                  <span className="text-white font-semibold">{tier.sedan}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Compact/Mid SUV</span>
                  <span className="text-white font-semibold">{tier.suv}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Full SUV/Truck</span>
                  <span className="text-white font-semibold">
                    {tier.fullSuv}
                  </span>
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 bg-[#d6781c] hover:bg-[#c2410c] text-white font-bold rounded-lg transition-colors text-center"
              >
                Get a Free Quote
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Quebec Environmental Damage Section */}
      <section className="bg-gray-900/50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            How Montreal&apos;s Environment{" "}
            <span className="text-[#d6781c]">Damages</span> Your Paint
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                threat: "Road Salt",
                severity: "Critical",
                desc: "Montreal uses over 100,000 tonnes of road salt annually. Sodium chloride corrodes clear coat and causes micro-pitting that traps moisture, accelerating rust formation.",
                season: "November – April",
              },
              {
                threat: "Calcium Chloride",
                severity: "High",
                desc: "Applied as a pre-treatment and anti-icing agent on bridges and highways. Creates white residue that etches into paint if not removed within 48 hours.",
                season: "October – March",
              },
              {
                threat: "Industrial Fallout",
                severity: "Moderate",
                desc: "Microscopic iron particles from rail lines, construction, and the industrial port area embed in paint, causing orange spots (rail dust) and surface contamination.",
                season: "Year-round",
              },
              {
                threat: "UV Degradation",
                severity: "Moderate",
                desc: "Quebec summers deliver intense UV that oxidizes unprotected paint, causing fading, chalking, and clear coat failure — especially on dark-colored vehicles.",
                season: "May – September",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 rounded-xl p-5 border border-gray-700"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-bold">{item.threat}</h3>
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      item.severity === "Critical"
                        ? "bg-red-900/50 text-red-400"
                        : item.severity === "High"
                          ? "bg-orange-900/50 text-orange-400"
                          : "bg-yellow-900/50 text-yellow-400"
                    }`}
                  >
                    {item.severity}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-2">
                  {item.desc}
                </p>
                <p className="text-gray-500 text-xs">{item.season}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ceramic Coating Connection */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 border border-[#d6781c]/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Complete the Protection:{" "}
                <span className="text-[#d6781c]">Ceramic Coating</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Paint correction restores your vehicle&apos;s finish. Ceramic
                coating preserves it. Together, they form the ultimate
                protection system against Quebec&apos;s harsh conditions.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Save when you bundle paint correction with ceramic coating in
                our{" "}
                <Link
                  href="/packages"
                  className="text-[#d6781c] hover:underline font-semibold"
                >
                  Gold, Platinum, or Diamond packages
                </Link>
                .
              </p>
              <Link
                href="/ceramic-coating-longueuil"
                className="inline-flex items-center gap-2 text-[#d6781c] hover:text-orange-400 font-semibold transition-colors"
              >
                Learn about Ceramic Coating
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
            <div className="space-y-3">
              {[
                {
                  label: "Paint Correction Only",
                  desc: "Restores finish but leaves paint unprotected",
                  status: "Needs Protection",
                },
                {
                  label: "Paint Correction + Ceramic Coating",
                  desc: "Restores AND protects for 2-5 years",
                  status: "Best Value",
                  highlight: true,
                },
                {
                  label: "Ceramic Coating Without Correction",
                  desc: "Locks in existing defects under the coating",
                  status: "Not Recommended",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-lg border ${
                    item.highlight
                      ? "bg-[#d6781c]/10 border-[#d6781c]"
                      : "bg-gray-800/50 border-gray-700"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-white font-medium text-sm">
                      {item.label}
                    </p>
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        item.highlight
                          ? "bg-green-900/50 text-green-400"
                          : item.status === "Not Recommended"
                            ? "bg-red-900/50 text-red-400"
                            : "bg-yellow-900/50 text-yellow-400"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-900/50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <Testimonials
            testimonials={testimonials}
            title="What Montreal Clients Say"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <MythBustingFAQ
          faqs={faqs}
          title="Paint Correction FAQ — Montreal"
          subtitle="Common questions from Montreal vehicle owners about paint correction"
          schemaId="paint-correction-montreal-faq"
        />
      </section>

      {/* NAP Block */}
      <section className="container mx-auto px-4 pb-16 md:pb-20">
        <NAPBlock
          city="Montreal"
          neighborhoods={[
            "Downtown",
            "NDG",
            "Plateau Mont-Royal",
            "Griffintown",
            "Verdun",
            "Westmount",
            "Rosemont",
            "Villeray",
          ]}
        />
      </section>
    </div>
  );
}
