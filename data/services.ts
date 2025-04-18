export type Service = {
    id: string;
    label: string;
    href: string;
    category?: string;
    shortDescription: string;
    longDescription: string;
    features: string[];
    benefits: string[];
    price: number;
    currency: string;
    image: string;
    gallery?: string[];
    faqs?: Array<{ question: string; answer: string }>;
  };
  
  export const services: Service[] = [
    {
      id: "exterior-wash-wax",
      label: "Exterior Wash & Wax",
      href: "/services/exterior-wash-wax",
      category: "Detailing",
      shortDescription: "Exterior revitalization with wax and protection.",
      longDescription: "Revitalize your vehicle’s exterior with meticulous detailing including paint correction, waxing, and sealant application for lasting shine and protection.",
      features: ["Paint-safe hand wash", "Clay bar treatment", "Premium wax finish"],
      benefits: ["Protects paint", "Boosts shine", "Enhances resale value"],
      price: 119.99,
      currency: "CAD",
      image: "/images/services/wash-wax.jpg"
    },
    {
      id: "interior-detailing",
      label: "Interior Detailing",
      href: "/services/interior-detailing",
      category: "Detailing",
      shortDescription: "Stain extraction, deep clean and protection inside.",
      longDescription: "We target and remove stains from carpets, seats, and other surfaces. Includes deodorizing and protective finish.",
      features: ["Stain extraction", "Vacuuming", "Interior surface protection"],
      benefits: ["Removes odors", "Cleans deeply", "Protects interior materials"],
      price: 149.99,
      currency: "CAD",
      image: "/images/services/interior-detailing.jpg"
    },
    {
      id: "interior-exterior-detailing",
      label: "Int. & Ext. Detailing",
      href: "/services/interior-exterior-detailing",
      category: "Detailing",
      shortDescription: "Full-service detailing for the entire vehicle.",
      longDescription: "Complete cleaning and protection package for both interior and exterior surfaces.",
      features: ["Full interior + exterior", "Vacuum & shampoo", "Wax & sealant"],
      benefits: ["All-in-one service", "Restores vehicle condition", "Time-saving bundle"],
      price: 129.99,
      currency: "CAD",
      image: "/images/services/full-detailing.jpg"
    },
    {
      id: "gloss-enhancer",
      label: "Gloss Enhancer",
      href: "/services/gloss-enhancer",
      category: "Detailing",
      shortDescription: "Paint decontamination and gloss boosting.",
      longDescription: "Deep Clean paint service removing airborne contaminants, brake dust, and rail dust while enhancing gloss.",
      features: ["Paint decontamination", "Gloss enhancer", "Brake dust removal"],
      benefits: ["Ultra clean surface", "Brilliant finish", "Better coating adherence"],
      price: 369.99,
      currency: "CAD",
      image: "/images/services/gloss-enhancer.jpg"
    },
    {
      id: "one-step-polish",
      label: "One Step Polish",
      href: "/services/one-step-polish",
      category: "Detailing",
      shortDescription: "Removes 50%-70% of swirls and scratches.",
      longDescription: "Our polish removes major surface defects for a clearer and shinier finish.",
      features: ["Cut + polish combo", "Gloss restoration", "Swirl reduction"],
      benefits: ["Improves appearance", "Cost-effective solution", "Quick result"],
      price: 449.99,
      currency: "CAD",
      image: "/images/services/one-step-polish.jpg"
    },
    {
      id: "paint-correction",
      label: "Paint Correction",
      href: "/services/paint-correction",
      category: "Detailing",
      shortDescription: "Up to 90% paint imperfection removal.",
      longDescription: "High-end correction using compound and polish to restore clarity and color depth.",
      features: ["Multi-stage correction", "Professional polishing", "Paint restoration"],
      benefits: ["Like-new paint look", "Removes major defects", "Prepares for ceramic coating"],
      price: 749.99,
      currency: "CAD",
      image: "/images/services/paint-correction.jpg"
    },
    {
      id: "ceramic-coating",
      label: "Ceramic Coating",
      href: "/services/ceramic-coating",
      category: "Protection",
      shortDescription: "Durable nano-coating for long-term surface protection.",
      longDescription: "Protect your paint, glass, wheels, and plastics with ceramic coating technology that lasts 1-4 years.",
      features: ["Hydrophobic protection", "UV & chemical resistance", "Lasts up to 4 years"],
      benefits: ["Easier cleaning", "Enhanced shine", "Long-term value"],
      price: 159.99,
      currency: "CAD",
      image: "/images/services/ceramic-coating.jpg"
    },
    {
      id: "engine-bay-cleaning",
      label: "Engine Bay Cleaning",
      href: "/services/engine-bay-cleaning",
      category: "Detailing",
      shortDescription: "Degrease and detail your engine area.",
      longDescription: "Remove built-up grime, oil, and debris to improve appearance and prevent deterioration.",
      features: ["Degreasing", "Steam clean", "Safe rinse"],
      benefits: ["Improves resale value", "Spot problems early", "Better engine cooling"],
      price: 109.99,
      currency: "CAD",
      image: "/images/services/engine-bay.jpg"
    },
    {
      id: "headlight-restoration",
      label: "Headlight Restoration",
      href: "/services/headlight-restoration",
      category: "Detailing",
      shortDescription: "Restore clarity and visibility in headlights.",
      longDescription: "Remove oxidation, yellowing and cloudiness for safer driving and modern appearance.",
      features: ["Sanding & polishing", "UV sealant", "Improves beam output"],
      benefits: ["Better night vision", "Saves replacement costs", "Increases safety"],
      price: 129.99,
      currency: "CAD",
      image: "/images/services/headlight-restoration.jpg"
    },
    {
      id: "leather-seat-treatment",
      label: "Leather Seat Treatment",
      href: "/services/leather-seat-treatment",
      category: "Interior",
      shortDescription: "Condition and protect your leather seats.",
      longDescription: "Deep clean and nourish leather surfaces to prevent drying and cracking.",
      features: ["Leather cleaner", "Premium conditioner", "UV protection"],
      benefits: ["Preserves softness", "Prevents aging", "Restores appearance"],
      price: 69.99,
      currency: "CAD",
      image: "/images/services/leather-treatment.jpg"
    }
  ];
  