export type Service = {
  id: string;
  label: string;
  href: string;
  category?: string;
  shortDescription: string;
  features: string[];
  benefits: string[];
  price: string;
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
    category: "Interior",
    shortDescription: "Full-service detailing for the entire vehicle.",
    features: ["Full interior + exterior", "Vacuum & shampoo", "Wax & sealant"],
    benefits: [
      "All-in-one service",
      "Restores vehicle condition",
      "Time-saving bundle",
    ],
    description:
      "Experience a high-quality interior detailing service with our specialized stain extraction techniques. We’ll target and remove stains from your carpets, fabric seats, and other surfaces.",
    imageShowcase: "/images/services-detailing/intext.jpg",
    price: "129.99",
    currency: "CAD",
    image: "/images/services/full-detailing.jpg",
  },
  {
    id: "gloss-enhancer",
    label: "Gloss Enhancer",
    href: "/services/gloss-enhancer",
    category: "Exterior",
    shortDescription: "Paint decontamination and gloss boosting.",
    features: ["Paint decontamination", "Gloss enhancer", "Brake dust removal"],
    benefits: [
      "Ultra clean surface",
      "Brilliant finish",
      "Better coating adherence",
    ],
    description:
      "Enhance the appearance of your vehicle with our Deep Clean paint service, which eliminates stubborn contaminants like airborne compounds, brake dust, and rail dust while also boosting shine of the car.",
    imageShowcase: "/images/services-detailing/gloss.jpg",
    price: "369.99",
    currency: "CAD",
    image: "/images/services/gloss-enhancer.jpg",
  },
  {
    id: "engine-bay-cleaning",
    label: "Engine Bay Cleaning",
    href: "/services/engine-bay-cleaning",
    category: "Interior",
    shortDescription: "Degrease and detail your engine area.",
    features: ["Degreasing", "Steam clean", "Safe rinse"],
    benefits: [
      "Improves resale value",
      "Spot problems early",
      "Better engine cooling",
    ],
    description:
      "Revitalize your car’s engine bay with our expert cleaning service, eliminating any build-up of dirt, grease, and grime for a spotless and well-maintained appearance.",
    imageShowcase: "/images/services-detailing/Cleaning-engine.webp",
    price: "109.99",
    currency: "CAD",
    image: "/images/services/engine-bay.jpg",
  },
];

export const services: Service[] = [
  {
    id: "exterior-wash-wax",
    label: "Exterior Wash & Wax",
    href: "/services/exterior-wash-wax",
    category: "Exterior",
    shortDescription: "Exterior revitalization with wax and protection.",
    features: [
      "Pre-wash",
      "Deep clean paint with hand",
      "Paint Decontamination to remove embedded contaminants such as brake dust, rail dust, ferrous (iron containing) particles, paint overspray",
      "Clay Treatment",
      "Wax protection to protect the paint finish from future contaminants",
    ],
    benefits: ["Protects paint", "Boosts shine", "Enhances resale value"],
    description:
      "Deep clean paint, remove embedded contaminants and protective wax application to restore your vehicle's shine and shield it from environmental elements, ensuring a lasting glossy finish.",
    imageShowcase: "/images/services-detailing/wash.jpg",
    price: "119.99",
    currency: "CAD",
    image: "/images/services/wash-wax.jpg",
    faqs: [
      {
        question: "What is included in the Exterior Wash & Wax service?",
        answer:
          "We provide a paint-safe hand wash, clay bar treatment, and a premium wax finish to protect your paint and enhance shine.",
      },
      {
        question: "How long does a typical detailing service take?",
        answer:
          "Most services take between 1 to 4 hours, depending on the package and condition of the vehicle.",
      },
      {
        question: "Are your products safe for all vehicles?",
        answer:
          "Yes! We use professional-grade, paint-safe and interior-safe products suitable for all vehicle types.",
      },
    ],
  },
  {
    id: "interior-detailing",
    label: "Interior Detailing",
    href: "/services/interior-detailing",
    category: "Interior",
    shortDescription: "Stain extraction, deep clean and protection inside.",
    features: [
      "Vacuuming all over the inside",
      "Cleaning of door contours",
      "Cleaning of door frames, trunk & cash registers",
      "Deep cleaning of removable carpets, floor, & fabric seats",
      "Meticulous cleaning of the dashboard",
      "Cleaning of the centre console",
    ],
    benefits: ["Removes odors", "Cleans deeply", "Protects interior materials"],
    description:
      "Experience a high-quality interior detailing service with our specialized stain extraction techniques. We'll target and remove stains from your carpets, fabric seats, and any other surfaces, giving you a truly flawless and inviting cabin. Deep cleaning of all interior surfaces, followed by a meticulous vacuuming to eliminate dirt, and creating a fresh and pristine interior environment.",
    imageShowcase: "/images/services-detailing/interior.jpeg",
    price: "149.99 - 279.99",
    currency: "CAD",
    image: "/images/services/interior-detailing.jpg",
    faqs: [
      {
        question: "Will detailing help with resale value?",
        answer:
          "Yes! A well-detailed car looks newer and more appealing to buyers, often increasing resale value.",
      },
      {
        question: "Can I drop off my car early or late?",
        answer:
          "Yes, we offer flexible drop-off and pickup times. Let us know ahead, and we’ll do our best to accommodate you.",
      },
      {
        question: "Is there a cancellation policy?",
        answer:
          "Yes — we kindly ask for 24 hours' notice for cancellations or rescheduling, so we can manage bookings efficiently.",
      },
    ],
  },
  {
    id: "interior-exterior-detailing",
    label: "Int. & Ext. Detailing",
    href: "/services/interior-exterior-detailing",
    category: "Interior",
    shortDescription: "Full-service detailing for the entire vehicle.",
    features: [
      "Pre-wash",
      "Exterior foam wash",
      "Wheels & calipers cleaning",
      "Tire dressing",
      "Vacuuming all over the inside & deep surface cleaning with soft bristle brush",
      "Wiping down the interior panels, windows, seats, windshields & air vents",
    ],
    benefits: [
      "All-in-one service",
      "Restores vehicle condition",
      "Time-saving bundle",
    ],
    description:
      "Experience a high-quality interior detailing service with our specialized stain extraction techniques. Our interior and exterior detailing service rejuvenates your car's interior and exterior.",
    imageShowcase: "/images/services-detailing/intext.jpg",
    price: "129.99",
    currency: "CAD",
    image: "/images/services/full-detailing.jpg",
    faqs: [
      {
        question: "Will detailing help with resale value?",
        answer:
          "Yes! A well-detailed car looks newer and more appealing to buyers, often increasing resale value.",
      },
      {
        question: "Can I drop off my car early or late?",
        answer:
          "Yes, we offer flexible drop-off and pickup times. Let us know ahead, and we’ll do our best to accommodate you.",
      },
      {
        question: "Is there a cancellation policy?",
        answer:
          "Yes — we kindly ask for 24 hours' notice for cancellations or rescheduling, so we can manage bookings efficiently.",
      },
    ],
  },
  {
    id: "gloss-enhancer",
    label: "Gloss Enhancer",
    href: "/services/gloss-enhancer",
    category: "Polish",
    shortDescription: "Paint decontamination and gloss boosting.",
    features: [
      "Deep clean paint & paint decontamination included",
      "Clay Treatment",
      "Enhance paint gloss with soft pad/polish",
      "Paint sealant apply (Lasts 6 months)",
    ],
    benefits: [
      "Ultra clean surface",
      "Brilliant finish",
      "Better coating adherence",
    ],
    description:
      "Enhance the appearance of your vehicle with our Deep Clean paint service, which eliminates stubborn contaminants like airborne compounds, brake dust, and rail dust while also boosting shine of the car.",
    imageShowcase: "/images/services-detailing/gloss.jpg",
    price: "369.99",
    currency: "CAD",
    image: "/images/services/gloss-enhancer.jpg",
    faqs: [
      {
        question: "Do I need to make an appointment?",
        answer:
          "Yes, appointments help us ensure high-quality service and availability. You can book directly from the service pages.",
      },
      {
        question: "Will detailing help with resale value?",
        answer:
          "Yes! A well-detailed car looks newer and more appealing to buyers, often increasing resale value.",
      },
      {
        question: "Can I drop off my car early or late?",
        answer:
          "Yes, we offer flexible drop-off and pickup times. Let us know ahead, and we’ll do our best to accommodate you.",
      },
    ],
  },
  {
    id: "one-step-polish",
    label: "One Step Polish",
    href: "/services/one-step-polish",
    category: "Polish",
    shortDescription: "Removes 50%-70% of swirls and scratches.",
    features: [
      "Deep clean paint & paint decontamination included",
      "Clay Treatment",
      "One step paint correction with cutting pad",
      "Paint sealant apply (Lasts 6 months)",
    ],
    benefits: [
      "Improves appearance",
      "Cost-effective solution",
      "Quick result",
    ],
    description:
      "With our exceptional services, we can effectively eliminate 50%-70% of scratches and swirls, leaving your car with a flawless, glossy finish.",
    imageShowcase: "/images/services-detailing/One-ste.jpg",
    price: "449.99 - 549.99",
    currency: "CAD",
    image: "/images/services/one-step-polish.jpg",
    faqs: [
      {
        question: "Are your products safe for all vehicles?",
        answer:
          "Yes! We use professional-grade, paint-safe and interior-safe products suitable for all vehicle types.",
      },
      {
        question: "Do I need to make an appointment?",
        answer:
          "Yes, appointments help us ensure high-quality service and availability. You can book directly from the service pages.",
      },
      {
        question: "Will detailing help with resale value?",
        answer:
          "Yes! A well-detailed car looks newer and more appealing to buyers, often increasing resale value.",
      },
    ],
  },
  {
    id: "paint-correction",
    label: "Paint Correction",
    href: "/services/paint-correction",
    category: "Polish",
    shortDescription: "Up to 90% paint imperfection removal.",
    features: [
      "Deep clean paint & paint decontamination included",
      "Clay Treatment",
      "Multiple steps of compound & polish",
      "Paint sealant apply (Lasts 6 months)",
    ],
    benefits: [
      "Like-new paint look",
      "Removes major defects",
      "Prepares for ceramic coating",
    ],
    description:
      "Elevate your vehicle’s appearance with our professional auto detailing techniques and high-quality products, eliminating up to 90% of imperfections on your car’s paint.",
    imageShowcase: "/images/services-detailing/paint.jpg",
    price: "749.99 - 949.99",
    currency: "CAD",
    image: "/images/services/paint-correction.jpg",
    faqs: [
      {
        question: "Will detailing help with resale value?",
        answer:
          "Yes! A well-detailed car looks newer and more appealing to buyers, often increasing resale value.",
      },
      {
        question: "Can I drop off my car early or late?",
        answer:
          "Yes, we offer flexible drop-off and pickup times. Let us know ahead, and we’ll do our best to accommodate you.",
      },
      {
        question: "Is there a cancellation policy?",
        answer:
          "Yes — we kindly ask for 24 hours' notice for cancellations or rescheduling, so we can manage bookings efficiently.",
      },
    ],
  },
  {
    id: "ceramic-coating",
    label: "Ceramic Coating",
    href: "/services/ceramic-coating",
    category: "Protection",
    shortDescription: "Durable nano-coating for long-term surface protection.",
    features: [
      "Ceramic coating on paint surface",
      "Ceramic coating on wheels & calipers",
      "Ceramic coating on windows & glasses",
      "Ceramic coating on plastics",
      "Ceramic coating on leathers",
    ],
    benefits: ["Easier cleaning", "Enhanced shine", "Long-term value"],
    description:
      "Experience the ultimate protection and enhancement for your car’s paint, wheels, windows, plastics, and leathers with our advanced ceramic coating. Lasts up to 1–4 years.",
    imageShowcase: "/images/services-detailing/ceramic.jpg",
    price: "159.99 - 359.99",
    currency: "CAD",
    image: "/images/services/ceramic-coating.jpg",
    faqs: [
      {
        question: "Are your products safe for all vehicles?",
        answer:
          "Yes! We use professional-grade, paint-safe and interior-safe products suitable for all vehicle types.",
      },
      {
        question: "Do I need to make an appointment?",
        answer:
          "Yes, appointments help us ensure high-quality service and availability. You can book directly from the service pages.",
      },
    ],
  },
  {
    id: "engine-bay-cleaning",
    label: "Engine Bay Cleaning",
    href: "/services/engine-bay-cleaning",
    category: "Interior",
    shortDescription: "Degrease and detail your engine area.",
    features: [
      "Remove any excess debris, cover any electrical components, air intakes and alarms to stop water damage",
      "Degrease the engine, underside bonnet & agitated with various brushes",
      "Application of protection to ensure the engine stays clean for long & is protected from the environment",
    ],
    benefits: [
      "Improves resale value",
      "Spot problems early",
      "Better engine cooling",
    ],
    description:
      "Revitalize your car’s engine bay with our expert cleaning service, eliminating any build-up of dirt, grease, and grime for a spotless and well-maintained appearance.",
    imageShowcase: "/images/services-detailing/Cleaning-engine.webp",
    price: "109.99",
    currency: "CAD",
    image: "/images/services/engine-bay.jpg",
    faqs: [
      {
        question: "Are your products safe for all vehicles?",
        answer:
          "Yes! We use professional-grade, paint-safe and interior-safe products suitable for all vehicle types.",
      },
      {
        question: "Do I need to make an appointment?",
        answer:
          "Yes, appointments help us ensure high-quality service and availability. You can book directly from the service pages.",
      },
      {
        question: "Will detailing help with resale value?",
        answer:
          "Yes! A well-detailed car looks newer and more appealing to buyers, often increasing resale value.",
      },
    ],
  },
  {
    id: "headlight-restoration",
    label: "Headlight Restoration",
    href: "/services/headlight-restoration",
    category: "Exterior",
    shortDescription: "Restore clarity and visibility in headlights.",
    features: [
      "Restoration of headlights",
      "Application of UV sealant to prevent the headlights from oxidizing again and maintain the clarity and functionality of your headlights",
    ],
    benefits: [
      "Better night vision",
      "Saves replacement costs",
      "Increases safety",
    ],
    description:
      "Enhance visibility and aesthetics with our headlight restoration, addressing cloudiness and yellowing to improve both safety and the overall look of your vehicle.",
    imageShowcase: "/images/services-detailing/headlight.jpeg",
    price: "129.99 - 259.99",
    currency: "CAD",
    image: "/images/services/headlight-restoration.jpg",
    faqs: [
      {
        question: "Will detailing help with resale value?",
        answer:
          "Yes! A well-detailed car looks newer and more appealing to buyers, often increasing resale value.",
      },
      {
        question: "Can I drop off my car early or late?",
        answer:
          "Yes, we offer flexible drop-off and pickup times. Let us know ahead, and we’ll do our best to accommodate you.",
      },
      {
        question: "Is there a cancellation policy?",
        answer:
          "Yes — we kindly ask for 24 hours' notice for cancellations or rescheduling, so we can manage bookings efficiently.",
      },
    ],
  },
  {
    id: "headlight-tint",
    label: "Headlight Tint",
    href: "/services/headlight-tint",
    category: "Exterior",
    shortDescription: "Protect headlights from UV damage.",
    features: ["UV protection", "Glare reduction", "Improves beam output"],
    benefits: [
      "Better night vision",
      "Saves replacement costs",
      "Increases safety",
    ],
    description:
      "Keep your car protected with tint film. Our kits contain tinted taillights and headlights covers that protect your car or truck from the environment. It covers for cars and trucks are available in several shades and colors. Choose between different levels of tail light & headlight tint film that can help with scratches or other imperfections.",
    imageShowcase: "/images/services-detailing/tint.jpg",
    price: "179.99",
    currency: "CAD",
    image: "/images/services/headlight-tint.jpg",
    faqs: [
      {
        question: "Do I need to make an appointment?",
        answer:
          "Yes, appointments help us ensure high-quality service and availability. You can book directly from the service pages.",
      },
      {
        question: "Will detailing help with resale value?",
        answer:
          "Yes! A well-detailed car looks newer and more appealing to buyers, often increasing resale value.",
      },
      {
        question: "Is there a cancellation policy?",
        answer:
          "Yes — we kindly ask for 24 hours' notice for cancellations or rescheduling, so we can manage bookings efficiently.",
      },
    ],
  },
  {
    id: "leather-seat-treatment",
    label: "Leather Seat Treatment",
    href: "/services/leather-seat-treatment",
    category: "Interior",
    shortDescription: "Condition and protect your leather seats.",
    features: [
      "Deep cleaning of leather seats",
      " Application of multiple coating of leather protection",
    ],
    benefits: ["Preserves softness", "Prevents aging", "Restores appearance"],
    description:
      "Experience the ultimate in leather seat care with our luxurious treatment, including meticulous cleaning and conditioning to preserve the elegance and durability of your vehicle's leather upholstery.",
    imageShowcase: "/images/services-detailing/leather.jpg",
    price: "69.99",
    currency: "CAD",
    image: "/images/services/leather-treatment.jpg",
    faqs: [
      {
        question: "How long does a typical detailing service take?",
        answer:
          "Most services take between 1 to 4 hours, depending on the package and condition of the vehicle.",
      },
      {
        question: "Are your products safe for all vehicles?",
        answer:
          "Yes! We use professional-grade, paint-safe and interior-safe products suitable for all vehicle types.",
      },
    ],
  },
  {
    id: "polymer-sealant",
    label: "Polymer Sealant",
    href: "/services/polymer-sealant",
    category: "Protection",
    shortDescription: "Long-lasting paint protection with polymer technology.",
    features: [
      "Synthetic sealant application",
      "Durable surface coating",
      "Enhanced paint gloss",
    ],
    benefits: [
      "Protects paint",
      "Shine lasts months",
      "UV & weather resistance",
    ],
    description:
      "Our polymer sealant forms a durable barrier against environmental contaminants, maintaining the glossy appearance of your paint for up to 6 months.",
    imageShowcase: "/images/services-detailing/polymer-sealant.jpg",
    price: "99.99",
    currency: "CAD",
    image: "/images/services/polymer-sealant.jpg",
    faqs: [
      {
        question: "What is a polymer sealant?",
        answer:
          "A synthetic coating that bonds to your car’s paint, offering protection and enhancing gloss for up to 6 months.",
      },
      {
        question: "Can it be applied over wax?",
        answer:
          "It’s recommended to apply the sealant on clean, decontaminated paint for best adhesion and longevity.",
      },
    ],
  },
  {
    id: "car-wax",
    label: "Car Wax",
    href: "/services/car-wax",
    category: "Protection",
    shortDescription: "Natural carnauba wax finish for enhanced shine.",
    features: ["Hand-applied wax", "Water beading effect", "Smooth finish"],
    benefits: ["Protects paint", "Easy maintenance", "Boosts gloss"],
    description:
      "Classic carnauba wax finish to enrich your vehicle's shine and provide short-term paint protection. Ideal as a maintenance option between details.",
    imageShowcase: "/images/services-detailing/car-wax.jpg",
    price: "79.99",
    currency: "CAD",
    image: "/images/services/car-wax.jpg",
    faqs: [
      {
        question: "How long does carnauba wax last?",
        answer:
          "Typically 1 to 2 months, depending on weather and washing habits.",
      },
      {
        question: "Is it safe for all paint types?",
        answer:
          "Yes, we use high-quality wax suitable for all vehicle finishes.",
      },
    ],
  },
  {
    id: "water-repellent-treatment",
    label: "Water Repellent Treatment",
    href: "/services/water-repellent-treatment",
    category: "Protection",
    shortDescription: "Hydrophobic coating for windows and mirrors.",
    features: [
      "Hydrophobic layer",
      "Better visibility",
      "Anti-streak technology",
    ],
    benefits: ["Rain slides off", "Safer driving", "Lasts several months"],
    description:
      "Improve your driving visibility with our water repellent coating applied to all glass surfaces. Water beads up and rolls off with ease during rain.",
    imageShowcase: "/images/services-detailing/water-repellent.jpg",
    price: "49.99",
    currency: "CAD",
    image: "/images/services/water-repellent.jpg",
    faqs: [
      {
        question: "How long does the water repellent last?",
        answer: "Usually 3 to 6 months, depending on weather and usage.",
      },
      {
        question: "Does it affect wipers?",
        answer:
          "No, it improves wiper performance and reduces the need for frequent use.",
      },
    ],
  },
  {
    id: "fabric-seat-cleaning",
    label: "Fabric Seat Cleaning",
    href: "/services/fabric-seat-cleaning",
    category: "Interior",
    shortDescription: "Deep stain removal for fabric seats.",
    features: [
      "Shampoo + extraction",
      "Odor neutralizer",
      "Safe for all fabrics",
    ],
    benefits: ["Fresh seats", "Removes stains", "Comfort restored"],
    description:
      "Our thorough fabric seat cleaning service removes stubborn stains and revitalizes upholstery with deep-clean technology and fresh scent finish.",
    imageShowcase: "/images/services-detailing/fabric-seats.jpg",
    price: "69.99",
    currency: "CAD",
    image: "/images/services/fabric-seat.jpg",
    faqs: [
      {
        question: "Will it remove old stains?",
        answer:
          "Yes, most food, drink, and mud stains can be eliminated with our process.",
      },
      {
        question: "Will the seats be wet after?",
        answer:
          "Slightly damp — full drying takes 1–2 hours depending on ventilation.",
      },
    ],
  },
  {
    id: "floor-carpet-cleaning",
    label: "Floor & Carpet Cleaning",
    href: "/services/floor-carpet-cleaning",
    category: "Interior",
    shortDescription:
      "Deep clean and stain removal for carpets and floor mats.",
    features: ["Hot water extraction", "Salt removal", "Drying included"],
    benefits: ["Odor-free cabin", "Like-new carpets", "Clean ride"],
    description:
      "Get rid of dirt, salt, and stains from your vehicle’s floors and carpets with our powerful extraction methods, ensuring a fresh interior experience.",
    imageShowcase: "/images/services-detailing/floor.jpg",
    price: "59.99",
    currency: "CAD",
    image: "/images/services/floor-cleaning.jpg",
    faqs: [
      {
        question: "Does it include trunk carpet?",
        answer:
          "Yes, we clean all floor surfaces including the trunk carpet if applicable.",
      },
      {
        question: "Can it remove winter salt stains?",
        answer:
          "Yes, our extraction process is designed for salt and deep grime removal.",
      },
    ],
  },
  {
    id: "pet-hair-removal",
    label: "Pet Hair Removal",
    href: "/services/pet-hair-removal",
    category: "Interior",
    shortDescription: "Specialized service to remove embedded pet hair.",
    features: [
      "Special brushes & vacuums",
      "Fur removal from all fabrics",
      "Odor treatment optional",
    ],
    benefits: ["Allergen reduction", "Cleaner air", "Hair-free cabin"],
    description:
      "Tired of pet hair everywhere? Our detailing team uses specialized tools to extract fur from carpets, seats, and crevices for a cleaner, fresher ride.",
    imageShowcase: "/images/services-detailing/pet-hair.jpg",
    price: "49.99 - 79.99",
    currency: "CAD",
    image: "/images/services/pet-hair.jpg",
    faqs: [
      {
        question: "Is it safe for sensitive fabrics?",
        answer: "Yes, our tools are safe and tested on all interior textiles.",
      },
      {
        question: "Does this remove pet odors too?",
        answer:
          "If odors persist, we offer an additional interior odor treatment option.",
      },
    ],
  },
  {
    id: "fabric-textile-sealant",
    label: "Fabric & Textile Sealant",
    href: "/services/fabric-textile-sealant",
    category: "Protection",
    shortDescription: "Protects fabrics from spills and stains.",
    features: [
      "Hydrophobic barrier",
      "UV protection",
      "Safe for all upholstery",
    ],
    benefits: ["Prevents future stains", "Easier cleaning", "Long-lasting"],
    description:
      "Protect your fabrics and textiles with our sealant that repels liquids, blocks UV damage, and keeps your interior looking new for longer.",
    imageShowcase: "/images/services-detailing/textile-sealant.jpg",
    price: "59.99",
    currency: "CAD",
    image: "/images/services/fabric-sealant.jpg",
    faqs: [
      {
        question: "Is it visible on fabrics?",
        answer: "No, it dries clear and does not alter the texture or color.",
      },
      {
        question: "How long does the protection last?",
        answer: "3 to 6 months depending on wear and tear.",
      },
    ],
  },
];

export function getServiceById(id: String): Service | undefined {
  return services.find((service) => service.id === id);
}

export function getServicesByCategory(category: string): Service[] {
  return services.filter((service) => service.category === category);
}

export function getAllServiceCategories(): string[] {
  const categories = new Set<string>();
  services.forEach((service) => {
    if (service.category) {
      categories.add(service.category);
    }
  });
  return Array.from(categories);
}
