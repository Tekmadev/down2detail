"use client";

import Link from "next/link";
import Script from "next/script";
import NAPBlock from "@/components/geo/NAPBlock";
import Testimonials, { Testimonial } from "@/components/geo/Testimonials";
import MythBustingFAQ, { FAQItem } from "@/components/geo/MythBustingFAQ";

const lavalSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://down2detail.ca/detailing-laval#service",
  name: "Auto Detailing in Laval",
  description:
    "Professional auto detailing services in Laval, QC. Comprehensive interior and exterior detailing, paint correction, and ceramic coating. Specializing in Tesla, luxury vehicles, and protection against Quebec road salt and calcium. Serving Chomedey, Fabreville, Sainte-Dorothée, Vimont, Laval-des-Rapides, and Pont-Viau.",
  url: "https://down2detail.ca/detailing-laval",
  serviceType: "Auto Detailing",
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
    name: "Laval",
    "@id": "https://www.wikidata.org/wiki/Q139671",
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Quebec",
    },
  },
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "49.99",
    highPrice: "1339.99",
    priceCurrency: "CAD",
  },
};

const testimonials: Testimonial[] = [
  {
    name: "Nathalie B.",
    city: "Laval",
    rating: 5,
    text: "Found them after searching for car detailing in Chomedey. The interior detailing on my family SUV was incredible — they removed stains I thought were permanent. The kids' car seats area looks brand new.",
    service: "Interior Detailing — Advanced",
    vehicle: "Honda CR-V",
    date: "2025",
  },
  {
    name: "Roberto M.",
    city: "Laval",
    rating: 5,
    text: "Got the Platinum package — one-step polish and 4-year ceramic coating. After driving through Laval salt all winter, my car still looks amazing. Water beads off like magic. Excellent value.",
    service: "Platinum Package — Ceramic Coating",
    vehicle: "Audi Q5",
    date: "2025",
  },
  {
    name: "Samantha C.",
    city: "Laval",
    rating: 5,
    text: "I drive from Fabreville to their shop in Longueuil and it's absolutely worth the trip. No one in Laval offers the same level of care and attention to detail. My Tesla has never looked better.",
    service: "Full Paint Correction + Ceramic Coating",
    vehicle: "Tesla Model Y",
    date: "2025",
  },
];

const faqs: FAQItem[] = [
  {
    question: "Do you serve Laval even though you're located in Longueuil?",
    answer:
      "Yes! Many of our loyal clients drive from Laval (Chomedey, Fabreville, Sainte-Dorothée, Vimont) to our Longueuil location. The drive is typically 30-40 minutes via Autoroute 15 or the Pont-Viau bridge. Our clients tell us the trip is worth it for the quality of work we deliver. We treat Laval as one of our primary service markets.",
  },
  {
    question: "What's the difference between a car wash and professional detailing?",
    myth: "A $20 automatic car wash gives the same results as professional detailing.",
    reality: "Automatic car washes use dirty brushes that create swirl marks, harsh chemicals that strip protection, and miss 80% of the surfaces that need attention.",
    answer:
      "Professional detailing is a multi-hour, multi-step process using pH-neutral products, specialized tools, and techniques that clean, restore, and protect every surface of your vehicle. Our Exterior Detailing alone includes 10+ steps that automatic car washes simply cannot replicate — from snow foam pre-wash to clay bar decontamination to hand-drying with premium microfibers.",
  },
  {
    question: "How often should I get my car detailed in Laval?",
    answer:
      "For Laval drivers, we recommend: Interior detailing every 3-4 months (more frequently with kids or pets), exterior detailing every 2-4 weeks during salt season (November-April), and full decontamination + paint sealant every 6 months. Vehicles with ceramic coating require less frequent maintenance — our Monthly Refresh loyalty program at $99.99 keeps coated vehicles in perfect condition year-round.",
  },
  {
    question: "Do you offer packages that bundle interior and exterior detailing?",
    answer:
      "Yes. Our packages are designed to give you the best value. The Exterior STANDARD + Interior STANDARD combination is our most popular for Laval families. For maximum protection, our Paint Polish & Protection packages bundle paint correction with ceramic coating, saving you 15-20% versus booking services individually. Visit our Packages page for current pricing.",
  },
  {
    question: "Can you remove road salt and calcium stains from my car?",
    answer:
      "Absolutely. Salt and calcium removal is one of our most requested services for Laval clients. Our interior Advanced package includes salt extraction from carpets and floor mats. For exterior calcium deposits, our paint decontamination process uses iron removers and clay bar treatment to safely dissolve and lift these corrosive contaminants without damaging your clear coat.",
  },
  {
    question: "What is the best detailing package for winter in Laval?",
    answer:
      "For Laval winters, we recommend our Interior Advanced package ($269.99+ for sedans) which includes salt removal, carpet shampoo, and steam cleaning. For exterior, the Advanced package ($149.99+) includes decontamination and 3-month paint sealant. For ultimate winter protection, pair with ceramic coating — salt and calcium slide right off a properly coated vehicle.",
  },
];

export default function DetailingLavalPage() {
  return (
    <div className="bg-black min-h-screen">
      <Script
        id="detailing-laval-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lavalSchema) }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/services-detailing/full-detailing.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-[#d6781c] font-semibold text-sm uppercase tracking-widest mb-4">
            Professional Auto Detailing for Laval — Serving Chomedey & Fabreville
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl">
            Best Auto Detailing for{" "}
            <span className="text-[#d6781c]">Laval</span> Residents
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Comprehensive interior & exterior detailing, paint correction, and
            ceramic coating. Protect your vehicle from Quebec&apos;s road salt,
            calcium, and winter damage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#d6781c] hover:bg-[#c2410c] text-white font-bold rounded-lg transition-colors text-lg"
            >
              Get a Free Quote
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

      {/* Services Overview */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <h2 className="text-3xl font-bold text-white mb-3">
          Complete Detailing Services for{" "}
          <span className="text-[#d6781c]">Laval</span> Vehicles
        </h2>
        <p className="text-gray-400 mb-10 max-w-3xl">
          From quick maintenance washes to full paint correction and ceramic
          coating, we offer every level of care your vehicle needs to survive
          and thrive through Quebec seasons.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Exterior Detailing",
              desc: "More than just a wash — pH-neutral hand wash, snow foam, clay bar decontamination, iron removal, and paint sealant. Safe for ceramic-coated vehicles.",
              features: [
                "Two-bucket hand wash method",
                "Paint decontamination",
                "Tire dressing & glass cleaning",
              ],
              link: "/services/exterior-detailing",
              price: "From $49.99",
            },
            {
              title: "Interior Detailing",
              desc: "Deep clean every surface — steam cleaning, carpet shampoo, leather treatment, and salt extraction. Restore that new-car feeling.",
              features: [
                "Steam cleaning & sanitization",
                "Salt & calcium extraction",
                "Fabric/leather seat treatment",
              ],
              link: "/services/interior-detailing",
              price: "From $49.99",
            },
            {
              title: "Paint Correction",
              desc: "Three-tier system: Stage 1 (75%), Stage 2 (90%), Stage 3 (99%) defect removal. Essential before ceramic coating.",
              features: [
                "Multi-stage correction options",
                "LED light paint inspection",
                "Permanent defect removal",
              ],
              link: "/paint-correction-montreal",
              price: "From $369.99",
            },
            {
              title: "Ceramic Coating",
              desc: "Professional SiO₂ nanotechnology coating with 2-5 year warranty. The ultimate protection against Laval's road salt and calcium.",
              features: [
                "Hydrophobic surface protection",
                "UV & chemical resistance",
                "2-5 year manufacturer warranty",
              ],
              link: "/ceramic-coating-longueuil",
              price: "From $369.99",
            },
            {
              title: "Salt & Calcium Removal",
              desc: "Specialized winter service. Removes corrosive salt deposits from interior carpets and exterior paint to prevent permanent damage.",
              features: [
                "Interior salt extraction",
                "Exterior calcium dissolving",
                "Protective sealant application",
              ],
              link: "/services/paint-decontamination",
              price: "Included in packages",
            },
            {
              title: "Tesla & EV Detailing",
              desc: "Specialized service for Tesla Model 3, Y, S, and other EVs. Paint-safe correction techniques with thickness measurement.",
              features: [
                "Tesla-specific paint care",
                "Charging port protection",
                "Matte/satin finish options",
              ],
              link: "/ceramic-coating-longueuil",
              price: "From $649",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-[#d6781c] transition-colors flex flex-col"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {service.desc}
              </p>
              <ul className="space-y-1.5 mb-4 flex-grow">
                {service.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-gray-300 text-sm"
                  >
                    <svg
                      className="w-4 h-4 text-[#d6781c] shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-700">
                <span className="text-[#d6781c] font-semibold text-sm">
                  {service.price}
                </span>
                <Link
                  href={service.link}
                  className="text-gray-400 hover:text-[#d6781c] text-sm font-medium transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Packages Comparison */}
      <section className="bg-gray-900/50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-3">
            Value Bundles for{" "}
            <span className="text-[#d6781c]">Laval</span> Clients
          </h2>
          <p className="text-gray-400 mb-8 max-w-3xl">
            Save 15-20% by bundling services. Our most popular packages
            for Laval clients combine paint correction with ceramic coating
            for maximum winter protection.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-4 px-4 text-gray-400 font-medium text-sm">
                    Feature
                  </th>
                  <th className="py-4 px-4 text-center">
                    <span className="text-white font-bold">Gold</span>
                    <br />
                    <span className="text-[#d6781c] text-sm">From $649</span>
                  </th>
                  <th className="py-4 px-4 text-center bg-[#d6781c]/5 rounded-t-xl">
                    <span className="text-[#d6781c] font-bold">Platinum</span>
                    <br />
                    <span className="text-[#d6781c] text-sm">From $999</span>
                    <br />
                    <span className="bg-[#d6781c] text-white text-xs px-2 py-0.5 rounded-full">
                      Most Popular
                    </span>
                  </th>
                  <th className="py-4 px-4 text-center">
                    <span className="text-white font-bold">Diamond</span>
                    <br />
                    <span className="text-[#d6781c] text-sm">From $1,199</span>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  {
                    feature: "Hand Wash & Decontamination",
                    gold: true,
                    platinum: true,
                    diamond: true,
                  },
                  {
                    feature: "Iron Removal",
                    gold: true,
                    platinum: true,
                    diamond: true,
                  },
                  {
                    feature: "Paint Decontamination",
                    gold: true,
                    platinum: true,
                    diamond: true,
                  },
                  {
                    feature: "Gloss Enhancement (Stage 1)",
                    gold: true,
                    platinum: false,
                    diamond: false,
                  },
                  {
                    feature: "One-Step Polish (Stage 2)",
                    gold: false,
                    platinum: true,
                    diamond: false,
                  },
                  {
                    feature: "Full Paint Correction (Stage 3)",
                    gold: false,
                    platinum: false,
                    diamond: true,
                  },
                  {
                    feature: "Ceramic Coating Duration",
                    gold: "1 Year",
                    platinum: "4 Years",
                    diamond: "5 Years",
                  },
                  {
                    feature: "Windshield Ceramic Coating",
                    gold: true,
                    platinum: true,
                    diamond: true,
                  },
                  {
                    feature: "Salt & Calcium Resistance",
                    gold: "Standard",
                    platinum: "Enhanced",
                    diamond: "Maximum",
                  },
                  {
                    feature: "Warranty",
                    gold: "1 Year",
                    platinum: "4 Years",
                    diamond: "5 Years",
                  },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-800">
                    <td className="py-3 px-4 text-gray-300">{row.feature}</td>
                    <td className="py-3 px-4 text-center">
                      {typeof row.gold === "boolean" ? (
                        row.gold ? (
                          <svg
                            className="w-5 h-5 text-green-400 mx-auto"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <span className="text-gray-600">—</span>
                        )
                      ) : (
                        <span className="text-gray-300 text-xs">
                          {row.gold}
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center bg-[#d6781c]/5">
                      {typeof row.platinum === "boolean" ? (
                        row.platinum ? (
                          <svg
                            className="w-5 h-5 text-green-400 mx-auto"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <span className="text-gray-600">—</span>
                        )
                      ) : (
                        <span className="text-[#d6781c] text-xs font-medium">
                          {row.platinum}
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {typeof row.diamond === "boolean" ? (
                        row.diamond ? (
                          <svg
                            className="w-5 h-5 text-green-400 mx-auto"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <span className="text-gray-600">—</span>
                        )
                      ) : (
                        <span className="text-gray-300 text-xs">
                          {row.diamond}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/packages"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#d6781c] hover:bg-[#c2410c] text-white font-bold rounded-lg transition-colors text-lg"
            >
              View All Packages & Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Why Laval Vehicles Need Protection */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <h2 className="text-3xl font-bold text-white mb-6">
          Why Laval Vehicles Need{" "}
          <span className="text-[#d6781c]">Extra Protection</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Laval&apos;s road network — especially Autoroute 15, Autoroute 440,
              and Boulevard des Laurentides — receives some of the heaviest salt
              treatment in the Greater Montreal Area. The combination of highway
              salt spray, municipal calcium applications, and freeze-thaw
              cycles creates a uniquely hostile environment for automotive
              finishes.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Add to that the dust and particulates from ongoing construction
              projects along the A-15 corridor and the proximity to
              industrial zones, and Laval vehicles face year-round paint
              threats that basic car washes cannot address.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our recommended approach for Laval clients: thorough
              decontamination in spring, paint correction to address winter
              damage, and ceramic coating for year-round protection.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                stat: "6+ Months",
                label: "of heavy salt exposure annually in Laval",
              },
              {
                stat: "15-20%",
                label: "paint value lost from untreated salt damage per year",
              },
              {
                stat: "2-5 Years",
                label: "of protection from professional ceramic coating",
              },
              {
                stat: "$99/mo",
                label: "Monthly maintenance to keep your vehicle protected year-round",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-gray-800/50 rounded-xl p-5 border border-gray-700"
              >
                <span className="text-3xl font-black text-[#d6781c] whitespace-nowrap">
                  {item.stat}
                </span>
                <span className="text-gray-400 text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-900/50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <Testimonials
            testimonials={testimonials}
            title="What Laval Clients Say About Us"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <MythBustingFAQ
          faqs={faqs}
          title="Auto Detailing FAQ — Laval"
          subtitle="Common questions from Laval vehicle owners about professional detailing"
          schemaId="detailing-laval-faq"
        />
      </section>

      {/* NAP Block */}
      <section className="container mx-auto px-4 pb-16 md:pb-20">
        <NAPBlock
          city="Laval"
          neighborhoods={[
            "Chomedey",
            "Fabreville",
            "Sainte-Dorothée",
            "Vimont",
            "Laval-des-Rapides",
            "Pont-Viau",
            "Duvernay",
            "Saint-François",
          ]}
        />
      </section>
    </div>
  );
}
