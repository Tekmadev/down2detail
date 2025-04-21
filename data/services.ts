export type Service = {
    id: string;
    label: string;
    href: string;
    category?: string;
    shortDescription: string;
    features: string[];
    benefits: string[];
    price: number;
    currency: string;
    image: string;
    description: string;
    imageShowcase: string;
    gallery?: string[];
    faqs?: Array<{ question: string; answer: string }>;
  };
  
  export const PremiumServices: Service[] = [
    {
      id: "interior-exterior-detailing",
      label: "Int. & Ext. Detailing",
      href: "/services/interior-exterior-detailing",
      category: "Interior Detailing",
      shortDescription: "Full-service detailing for the entire vehicle.",
      features: ["Full interior + exterior", "Vacuum & shampoo", "Wax & sealant"],
      benefits: ["All-in-one service", "Restores vehicle condition", "Time-saving bundle"],
      description:
        "Experience a high-quality interior detailing service with our specialized stain extraction techniques. We’ll target and remove stains from your carpets, fabric seats, and other surfaces.",
      imageShowcase: "/images/services-detailing/intext.jpg",
      price: 129.99,
      currency: "CAD",
      image: "/images/services/full-detailing.jpg"
    },
    {
      id: "gloss-enhancer",
      label: "Gloss Enhancer",
      href: "/services/gloss-enhancer",
      category: "Exterior Detailing",
      shortDescription: "Paint decontamination and gloss boosting.",
      features: ["Paint decontamination", "Gloss enhancer", "Brake dust removal"],
      benefits: ["Ultra clean surface", "Brilliant finish", "Better coating adherence"],
      description:
        "Enhance the appearance of your vehicle with our Deep Clean paint service, which eliminates stubborn contaminants like airborne compounds, brake dust, and rail dust while also boosting shine of the car.",
      imageShowcase: "/images/services-detailing/gloss.jpg",
      price: 369.99,
      currency: "CAD",
      image: "/images/services/gloss-enhancer.jpg"
    },
    {
      id: "engine-bay-cleaning",
      label: "Engine Bay Cleaning",
      href: "/services/engine-bay-cleaning",
      category: "Interior Detailing",
      shortDescription: "Degrease and detail your engine area.",
      features: ["Degreasing", "Steam clean", "Safe rinse"],
      benefits: ["Improves resale value", "Spot problems early", "Better engine cooling"],
      description:
        "Revitalize your car’s engine bay with our expert cleaning service, eliminating any build-up of dirt, grease, and grime for a spotless and well-maintained appearance.",
      imageShowcase: "/images/services-detailing/Cleaning-engine.webp",
      price: 109.99,
      currency: "CAD",
      image: "/images/services/engine-bay.jpg"
    },
  ]

  export const services: Service[] = [
    {
      id: "exterior-wash-wax",
      label: "Exterior Wash & Wax",
      href: "/services/exterior-wash-wax",
      category: "Exterior Detailing",
      shortDescription: "Exterior revitalization with wax and protection.",
      features: ["Paint-safe hand wash", "Clay bar treatment", "Premium wax finish"],
      benefits: ["Protects paint", "Boosts shine", "Enhances resale value"],
      description:
        "Revitalize your vehicle’s exterior with our meticulous detailing services, including paint correction, waxing, and professional sealant application for lasting shine and protection.",
      imageShowcase: "/images/services-detailing/wash.jpg",
      price: 119.99,
      currency: "CAD",
      image: "/images/services/wash-wax.jpg",
    },
    {
      id: "interior-detailing",
      label: "Interior Detailing",
      href: "/services/interior-detailing",
      category: "Interior Detailing",
      shortDescription: "Stain extraction, deep clean and protection inside.",
      features: ["Stain extraction", "Vacuuming", "Interior surface protection"],
      benefits: ["Removes odors", "Cleans deeply", "Protects interior materials"],
      description:
        "Experience a high-quality interior detailing service with our specialized stain extraction techniques. We’ll target and remove stains from your carpets, fabric seats, and other surfaces.",
      imageShowcase: "/images/services-detailing/interior.jpeg",
      price: 149.99 - 279.99,
      currency: "CAD",
      image: "/images/services/interior-detailing.jpg"
    },
    {
      id: "interior-exterior-detailing",
      label: "Int. & Ext. Detailing",
      href: "/services/interior-exterior-detailing",
      category: "Interior Detailing",
      shortDescription: "Full-service detailing for the entire vehicle.",
      features: ["Full interior + exterior", "Vacuum & shampoo", "Wax & sealant"],
      benefits: ["All-in-one service", "Restores vehicle condition", "Time-saving bundle"],
      description:
        "Experience a high-quality interior detailing service with our specialized stain extraction techniques. We’ll target and remove stains from your carpets, fabric seats, and other surfaces.",
      imageShowcase: "/images/services-detailing/intext.jpg",
      price: 129.99,
      currency: "CAD",
      image: "/images/services/full-detailing.jpg"
    },
    {
      id: "gloss-enhancer",
      label: "Gloss Enhancer",
      href: "/services/gloss-enhancer",
      category: "Exterior Detailing",
      shortDescription: "Paint decontamination and gloss boosting.",
      features: ["Paint decontamination", "Gloss enhancer", "Brake dust removal"],
      benefits: ["Ultra clean surface", "Brilliant finish", "Better coating adherence"],
      description:
        "Enhance the appearance of your vehicle with our Deep Clean paint service, which eliminates stubborn contaminants like airborne compounds, brake dust, and rail dust while also boosting shine of the car.",
      imageShowcase: "/images/services-detailing/gloss.jpg",
      price: 369.99,
      currency: "CAD",
      image: "/images/services/gloss-enhancer.jpg"
    },
    {
      id: "one-step-polish",
      label: "One Step Polish",
      href: "/services/one-step-polish",
      category: "Interior Detailing",
      shortDescription: "Removes 50%-70% of swirls and scratches.",
      features: ["Cut + polish combo", "Gloss restoration", "Swirl reduction"],
      benefits: ["Improves appearance", "Cost-effective solution", "Quick result"],
      description:
        "With our exceptional services, we can effectively eliminate 50%-70% of scratches and swirls, leaving your car with a flawless, glossy finish.",
      imageShowcase: "/images/services-detailing/One-ste.jpg",
      price: 449.99 - 549.99,
      currency: "CAD",
      image: "/images/services/one-step-polish.jpg"
    },
    {
      id: "paint-correction",
      label: "Paint Correction",
      href: "/services/paint-correction",
      category: "Exterior Detailing",
      shortDescription: "Up to 90% paint imperfection removal.",
      features: ["Multi-stage correction", "Professional polishing", "Paint restoration"],
      benefits: ["Like-new paint look", "Removes major defects", "Prepares for ceramic coating"],
      description:
        "Elevate your vehicle’s appearance with our professional auto detailing techniques and high-quality products, eliminating up to 90% of imperfections on your car’s paint.",
      imageShowcase: "/images/services-detailing/paint.jpg",
      price: 749.99 - 949.99,
      currency: "CAD",
      image: "/images/services/paint-correction.jpg"
    },
    {
      id: "ceramic-coating",
      label: "Ceramic Coating",
      href: "/services/ceramic-coating",
      category: "Exterior Detailing",
      shortDescription: "Durable nano-coating for long-term surface protection.",
      features: ["Hydrophobic protection", "UV & chemical resistance", "Lasts up to 4 years"],
      benefits: ["Easier cleaning", "Enhanced shine", "Long-term value"],
      description:
        "Experience the ultimate protection and enhancement for your car’s paint, wheels, windows, plastics, and leathers with our advanced ceramic coating. Lasts up to 1–4 years.",
      imageShowcase: "/images/services-detailing/ceramic.jpg",
      price: 159.99 - 359.99,
      currency: "CAD",
      image: "/images/services/ceramic-coating.jpg"
    },
    {
      id: "engine-bay-cleaning",
      label: "Engine Bay Cleaning",
      href: "/services/engine-bay-cleaning",
      category: "Interior Detailing",
      shortDescription: "Degrease and detail your engine area.",
      features: ["Degreasing", "Steam clean", "Safe rinse"],
      benefits: ["Improves resale value", "Spot problems early", "Better engine cooling"],
      description:
        "Revitalize your car’s engine bay with our expert cleaning service, eliminating any build-up of dirt, grease, and grime for a spotless and well-maintained appearance.",
      imageShowcase: "/images/services-detailing/Cleaning-engine.webp",
      price: 109.99,
      currency: "CAD",
      image: "/images/services/engine-bay.jpg"
    },
    {
      id: "headlight-restoration",
      label: "Headlight Restoration",
      href: "/services/headlight-restoration",
      category: "Exterior Detailing",
      shortDescription: "Restore clarity and visibility in headlights.",
      features: ["Sanding & polishing", "UV sealant", "Improves beam output"],
      benefits: ["Better night vision", "Saves replacement costs", "Increases safety"],
      description:
        "Enhance visibility and aesthetics with our headlight restoration, addressing cloudiness and yellowing to improve both safety and the overall look of your vehicle.",
      imageShowcase: "/images/services-detailing/headlight.jpeg",
      price: 129.99 - 259.99,
      currency: "CAD",
      image: "/images/services/headlight-restoration.jpg"
    },
    {
      id: "headlight-tint",
      label: "Headlight Tint",
      href: "/services/headlight-tint",
      category: "Exterior Detailing",
      shortDescription: "Protect headlights from UV damage.",
      features: ["UV protection", "Glare reduction", "Improves beam output"],
      benefits: ["Better night vision", "Saves replacement costs", "Increases safety"],
      description:
        "Reduce glare and improve visibility with a headlight tint that lasts up to 5 years.",
      imageShowcase: "/images/services-detailing/tint.jpg",
      price: 179.99,
      currency: "CAD",
      image: "/images/services/headlight-tint.jpg"
    },
    {
      id: "leather-seat-treatment",
      label: "Leather Seat Treatment",
      href: "/services/leather-seat-treatment",
      category: "Interior Detailing",
      shortDescription: "Condition and protect your leather seats.",
      features: ["Leather cleaner", "Premium conditioner", "UV protection"],
      benefits: ["Preserves softness", "Prevents aging", "Restores appearance"],
      description:
        "Indulge in luxurious leather seat treatment, including thorough cleaning and conditioning to preserve your vehicle’s leather upholstery.",
      imageShowcase: "/images/services-detailing/leather.jpg",
      price: 69.99,
      currency: "CAD",
      image: "/images/services/leather-treatment.jpg"
    }
  ];
  
  export function getServiceById(id :String): Service | undefined {
    return services.find((service) => service.id === id);
  }

  export function getServicesByCategory(category:string): Service[]{
    return services.filter((service) => service.category === category);
  }

  export function getAllServiceCategories(): string[] {
    const categories = new Set<string>();
    services.forEach((service) => {
      if(service.category){
        categories.add(service.category);
      }
    });
    return Array.from(categories);
  }
