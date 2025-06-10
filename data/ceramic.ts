export type Service = {
  id: string;
  label: string;
  subtitle: string;
  href: string;
  category: string;
  shortDescription: string;
  currency: string;
  image: string;
  imageShowcase: string;
  description: string;
  howItWorks: string[];
  coatingLevels: Array<{ level: string; duration: string; price: number }>;
  whyWorthIt: string[];
  appliesTo: string[];
  addons: Array<{ title: string; duration: string; price: number }>;
  faqs: Array<{ question: string; answer: string }>;
};


export const ceramicCoating: Service = {
    id: "ceramic-coating",
    label: "Ceramic Coating",
    subtitle: "Elevate Your Vehicle's Defense",
    href: "/services/ceramic-coating",
    category: "Protection",
    shortDescription: "Long-lasting paint protection with nanotechnology.",
    description:
      "Ceramic coating is a liquid polymer made from nanotechnology-based SiO₂ (silicon dioxide). Once cured, it chemically bonds to the factory paint (or any other surface it's applied to), creating a hydrophobic, slick, and ultra-durable shield. Unlike traditional waxes or sealants, ceramic coatings provide a long-lasting, hydrophobic surface that repels dirt, water, road grime, bird droppings, bug splatter, and more. The coating's molecular structure forms a tight, glass-like layer that offers UV resistance, scratch protection, chemical resistance, and enhanced gloss. Available in three levels of protection: Level 1 (2 years/30,000 km), Level 2 (4 years/60,000 km), and Level 3 (5 years/100,000 km).",
    imageShowcase: "/images/services-detailing/ceramic-coat.webp",
    image: "/images/services-detailing/Ceramic-coating.webp",
    currency: "CAD",
    howItWorks: [
      "Hydrophobic: Causes water to bead and slide off effortlessly, reducing water spotting.",
      "UV-Resistant: Prevents paint fading, chalking, and oxidation.",
      "Scratch Resistant: Offers protection from light abrasions and swirl marks.",
      "Chemical Resistant: Defends against acids, detergents, bird droppings, and brake dust.",
      "Gloss Enhancing: Leaves a deep, mirror-like finish that enhances paint clarity and color depth.",
      "Minor Scratches: Adds a level of scratch resistance."
    ],
    coatingLevels: [
      { level: "Level 1", duration: "Up to 2 years or 30,000 km", price: 369.99 },
      { level: "Level 2", duration: "Up to 4 years or 60,000 km", price: 469.99 },
      { level: "Level 3", duration: "Up to 5 years or 100,000 km", price: 569.99 }
    ],
    addons: [
      { title: "Wheels & Calipers Ceramic Coating", duration: "Up to 2 years or 40,000 km", price: 99.99 },
      { title: "Windshield & Glass Ceramic Coating", duration: "Up to 12 months", price: 69.99 },
      { title: "Plastics Ceramic Coating", duration: "Up to 2 years", price: 69.99 },
      { title: "Leather & Synthetics Ceramic Coating", duration: "Up to 2 years", price: 79.99 }
    ],
    whyWorthIt: [
      "Long-Term Protection: Reduces the need for frequent detailing.",
      "Enhanced Appearance: Maintains a glossy, showroom finish.",
      "Ease of Cleaning: Dirt and grime have a harder time sticking to the surface.",
      "Resale Value: A well-maintained exterior can increase vehicle resale value.",
      "Minimizes long-term paint correction costs"
    ],
    appliesTo: [
      "Paint (clear coat)",
      "Wheels & brake calipers",
      "Glass surfaces (windshields, windows)",
      "Exterior plastics & trims",
      "Interior leather and synthetics"
    ],
    faqs: [
      {
        question: "How long does ceramic coating last?",
        answer:
          "Our ceramic coating offers three levels of protection: Level 1 (2 years/30,000 km), Level 2 (4 years/60,000 km), and Level 3 (5 years/100,000 km). The longevity depends on the quality of the product, application process, and maintenance."
      },
      {
        question: "What surfaces can be coated?",
        answer:
          "Our ceramic coatings can be applied to multiple surfaces including paint, wheels & brake calipers, glass surfaces, exterior plastics & trims, and interior leather & synthetics. Each surface requires a specific formulation for optimal bonding and protection."
      },
      {
        question: "Is ceramic coating worth the investment?",
        answer:
          "Yes, ceramic coating is a worthwhile investment as it provides long-term protection, enhances appearance, makes cleaning easier, increases resale value, and minimizes long-term paint correction costs."
      }
    ]
  };

 
