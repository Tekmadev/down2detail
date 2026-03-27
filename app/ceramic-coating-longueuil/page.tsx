"use client";

import Link from "next/link";
import Script from "next/script";
import NAPBlock from "@/components/geo/NAPBlock";
import Testimonials, { Testimonial } from "@/components/geo/Testimonials";
import MythBustingFAQ, { FAQItem } from "@/components/geo/MythBustingFAQ";

const longueuilSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://down2detail.ca/ceramic-coating-longueuil#service",
  name: "Ceramic Coating in Longueuil",
  description:
    "Professional ceramic coating installation in Longueuil, QC. SiO₂ nanotechnology protection against Quebec road salt, calcium chloride, and industrial fallout. Paint correction is a recommended prerequisite for optimal ceramic coating bonding. Serving Vieux-Longueuil, Saint-Hubert, Greenfield Park, and LeMoyne.",
  url: "https://down2detail.ca/ceramic-coating-longueuil",
  serviceType: "Ceramic Coating",
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
    name: "Longueuil",
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Montérégie",
    },
  },
  isRelatedTo: {
    "@type": "Service",
    "@id": "https://down2detail.ca/services/paint-correction#service",
    name: "Paint Correction",
    description: "Essential prerequisite for optimal ceramic coating bonding",
  },
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "369.99",
    highPrice: "1339.99",
    priceCurrency: "CAD",
    offerCount: 3,
  },
};

const testimonials: Testimonial[] = [
  {
    name: "Marc-André T.",
    city: "Longueuil",
    rating: 5,
    text: "Got ceramic coating on my Tesla Model 3. The road salt protection this winter has been incredible — water just beads right off. Best investment I've made for my car.",
    service: "Ceramic Coating + Paint Correction",
    vehicle: "Tesla Model 3",
    date: "2025",
  },
  {
    name: "Julie D.",
    city: "Longueuil",
    rating: 5,
    text: "After years of calcium damage on my previous car, I got ceramic coating on my new Mazda CX-5. Down2Detail did amazing work, and the 5-year warranty gives me peace of mind.",
    service: "Ceramic Coating — Level 3",
    vehicle: "Mazda CX-5",
    date: "2025",
  },
  {
    name: "Philippe R.",
    city: "Saint-Hubert",
    rating: 5,
    text: "Professional service from start to finish. They explained why paint correction was needed before the coating and the results speak for themselves. My BMW looks better than when I bought it.",
    service: "Paint Correction + Ceramic Coating",
    vehicle: "BMW 3 Series",
    date: "2025",
  },
];

const faqs: FAQItem[] = [
  {
    question: "Is ceramic coating worth it in Longueuil with Quebec winters?",
    answer:
      "Absolutely. Longueuil roads are heavily treated with road salt and calcium chloride from November through April. Ceramic coating creates a chemical-resistant barrier that prevents these corrosive agents from bonding to your paint. Without protection, salt and calcium cause etching, water spots, and premature clear coat failure.",
  },
  {
    question:
      "Do I need paint correction before ceramic coating?",
    myth: "You can apply ceramic coating directly on any paint surface.",
    reality:
      "Ceramic coating locks in whatever is underneath — including swirl marks, scratches, and oxidation.",
    answer:
      "Paint correction is the essential prerequisite for ceramic coating. It removes defects so the coating bonds to a flawless surface, maximizing protection and gloss. At Down2Detail, we always assess your paint and recommend the appropriate level of correction before coating.",
  },
  {
    question: "Can I apply ceramic coating myself (DIY) vs. professional?",
    myth: "DIY ceramic coating kits from Amazon provide the same protection as professional installation.",
    reality:
      "Consumer-grade ceramic coatings contain 10-20% SiO₂ concentration. Professional coatings use 70-80%+ SiO₂ with proper surface preparation, achieving 3-5x the durability.",
    answer:
      "Professional ceramic coating installation involves controlled environments, multi-stage paint decontamination, paint correction, and precision application with infrared curing. The result is a uniform, properly bonded coating that lasts years — not weeks. Our professional coatings come with manufacturer warranties that DIY products cannot match.",
  },
  {
    question: "How long does professional ceramic coating last?",
    answer:
      "We offer three protection levels: Level 1 provides 2 years / 30,000 km of protection, Level 2 offers 4 years / 60,000 km, and Level 3 delivers 5 years / 80,000 km. Each level uses progressively higher-grade SiO₂ formulations. With recommended maintenance washes every 2-4 weeks, your coating will perform at peak levels throughout its warranty period.",
  },
  {
    question: "What does ceramic coating protect against in Quebec?",
    answer:
      "In Quebec specifically, ceramic coating protects against: road salt (sodium chloride) used heavily on Highway 20 and Route 132, calcium chloride spread on municipal roads in Longueuil, industrial fallout from the Port of Montreal area, UV damage during summer months, bird droppings and tree sap, and minor stone chips from Autoroute 30 construction zones.",
  },
  {
    question:
      "How much does ceramic coating cost in Longueuil?",
    answer:
      "Our ceramic coating packages in Longueuil start at $369.99 for sedans (Level 1 — 2 year protection) and go up to $1,339.99 for our Diamond package (full-size SUVs with paint correction + 5-year ceramic coating). We offer free consultations to assess your vehicle and recommend the best package for your needs and budget.",
  },
];

export default function CeramicCoatingLongueuilPage() {
  return (
    <div className="bg-black min-h-screen">
      <Script
        id="ceramic-coating-longueuil-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(longueuilSchema) }}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/services-detailing/Ceramic-coating.webp')",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-[#d6781c] font-semibold text-sm uppercase tracking-widest mb-4">
            Professional Ceramic Coating Installer in Longueuil
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl">
            Best Ceramic Coating in{" "}
            <span className="text-[#d6781c]">Longueuil</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Protect your vehicle from Quebec&apos;s harshest elements — road
            salt, calcium chloride, and industrial fallout — with professional
            SiO₂ ceramic coating. 2-5 year warranty included.
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

      {/* Why Longueuil Vehicles Need Ceramic Coating */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <h2 className="text-3xl font-bold text-white mb-6">
          Why Your Vehicle in Longueuil{" "}
          <span className="text-[#d6781c]">Needs</span> Ceramic Coating
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Longueuil sits at the crossroads of some of Quebec&apos;s most
              heavily salted highways — Route 132 and Autoroute 20. Every
              winter, your vehicle is bombarded with{" "}
              <strong className="text-white">
                road salt (sodium chloride), calcium chloride, and magnesium
                chloride
              </strong>{" "}
              that eat through clear coat, cause rust, and permanently damage
              paint.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Industrial fallout from the nearby Port of Montreal and
              Boucherville industrial zones adds another layer of corrosive
              contaminants. Without protection, these particles bond to your
              paint at a molecular level, causing etching and oxidation that no
              car wash can reverse.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Professional ceramic coating creates an impenetrable SiO₂ barrier
              that repels salt, calcium, water, and UV rays — keeping your
              vehicle looking showroom-new through the harshest Quebec winters.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              {
                title: "Road Salt Shield",
                desc: "Repels sodium chloride and calcium chloride used on Longueuil roads from November to April",
              },
              {
                title: "Industrial Fallout Barrier",
                desc: "Blocks microscopic iron particles and industrial deposits from Port of Montreal area",
              },
              {
                title: "UV & Summer Protection",
                desc: "Prevents paint oxidation and fading during intense Quebec summer heat",
              },
              {
                title: "Hydrophobic Self-Cleaning",
                desc: "Water beads and sheets off, carrying dirt and grime away. Easier washes year-round",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 rounded-xl p-5 border border-gray-700"
              >
                <h3 className="text-[#d6781c] font-semibold mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paint Correction as Prerequisite */}
      <section className="bg-gray-900/50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Why Paint Correction is{" "}
            <span className="text-[#d6781c]">Essential</span> Before Ceramic
            Coating
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                stage: "Stage 1",
                name: "Gloss Enhancement",
                removal: "~75%",
                desc: "Fine polishing that removes light swirls and boosts gloss. Ideal for newer vehicles or those with well-maintained paint. Prepares a clean surface for ceramic coating.",
                price: "From $369",
                ideal: "New or well-maintained vehicles",
              },
              {
                stage: "Stage 2",
                name: "One-Step Correction",
                removal: "~90%",
                desc: "Compound and polish blend that removes moderate swirls, scratches, and oxidation. Best for daily drivers exposed to Quebec winters. Significantly improves ceramic coating adhesion.",
                price: "From $599",
                ideal: "Daily drivers with visible defects",
              },
              {
                stage: "Stage 3",
                name: "Full Paint Correction",
                removal: "~99%",
                desc: "Multi-stage wet sanding, compounding, and refining process that removes virtually all paint defects. Delivers a mirror-like showroom finish — the ultimate base for ceramic coating.",
                price: "From $749",
                ideal: "Neglected paint or show-quality finish",
              },
            ].map((tier, idx) => (
              <div
                key={idx}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-[#d6781c] transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#d6781c] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {tier.stage}
                  </span>
                  <span className="text-2xl font-bold text-[#d6781c]">
                    {tier.removal}
                  </span>
                  <span className="text-gray-400 text-sm">defect removal</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {tier.desc}
                </p>
                <p className="text-[#d6781c] font-semibold">{tier.price}</p>
                <p className="text-gray-500 text-xs mt-2">
                  Best for: {tier.ideal}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-gray-800 rounded-xl p-6 border border-[#d6781c]/30">
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong className="text-[#d6781c]">Why it matters:</strong>{" "}
              Ceramic coating permanently locks in whatever is underneath.
              Without paint correction, you&apos;re sealing in swirl marks,
              scratches, and oxidation. Our technicians always assess your
              paint under specialized lighting and recommend the appropriate
              stage of correction before any ceramic coating application.
            </p>
          </div>
        </div>
      </section>

      {/* Tesla / EV Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ceramic Coating for{" "}
          <span className="text-[#d6781c]">Tesla & Electric Vehicles</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Electric vehicles like Tesla Model 3, Model Y, and Model S have
              unique paint characteristics. Tesla&apos;s water-based paint is
              notoriously thinner and softer than traditional automotive
              finishes, making it more susceptible to swirl marks, chips, and
              contamination from Quebec road salt.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our EV-specialized ceramic coating process uses gentler correction
              techniques with paint thickness measurements to ensure safe,
              optimal results. We protect not just the paint, but also wheels,
              glass, and the charging port area from calcium buildup.
            </p>
            <ul className="space-y-2">
              {[
                "Tesla-specific paint correction with thickness gauge",
                "Wheel and brake caliper ceramic coating",
                "Glass coating for improved winter visibility",
                "Charging port area protection from calcium",
                "Matte and satin finish coating available",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-gray-300 text-sm"
                >
                  <svg
                    className="w-5 h-5 text-[#d6781c] shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">
              Popular EV Packages
            </h3>
            <div className="space-y-3">
              {[
                {
                  name: "EV Essential",
                  desc: "Gloss Enhancement + 2-Year Ceramic Coating",
                  price: "From $649",
                },
                {
                  name: "EV Premium",
                  desc: "One-Step Polish + 4-Year Ceramic Coating + Glass",
                  price: "From $999",
                },
                {
                  name: "EV Ultimate",
                  desc: "Full Paint Correction + 5-Year Ceramic + Full Vehicle",
                  price: "From $1,199",
                },
              ].map((pkg, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-gray-800 rounded-lg"
                >
                  <div>
                    <p className="text-white font-medium text-sm">{pkg.name}</p>
                    <p className="text-gray-400 text-xs">{pkg.desc}</p>
                  </div>
                  <p className="text-[#d6781c] font-bold text-sm whitespace-nowrap ml-4">
                    {pkg.price}
                  </p>
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
            title="What Longueuil Clients Say About Us"
            filterCity="Longueuil"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <MythBustingFAQ
          faqs={faqs}
          title="Ceramic Coating FAQ — Longueuil"
          subtitle="Common questions from Longueuil vehicle owners about ceramic coating"
          schemaId="ceramic-coating-longueuil-faq"
        />
      </section>

      {/* NAP Block */}
      <section className="container mx-auto px-4 pb-16 md:pb-20">
        <NAPBlock
          city="Longueuil"
          neighborhoods={[
            "Vieux-Longueuil",
            "Saint-Hubert",
            "Greenfield Park",
            "LeMoyne",
            "Jacques-Cartier",
          ]}
        />
      </section>
    </div>
  );
}
