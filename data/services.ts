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
      category: "Interior Detailing",
      shortDescription: "Full-service detailing for the entire vehicle.",
      features: ["Full interior + exterior", "Vacuum & shampoo", "Wax & sealant"],
      benefits: ["All-in-one service", "Restores vehicle condition", "Time-saving bundle"],
      description:
        "Experience a high-quality interior detailing service with our specialized stain extraction techniques. We’ll target and remove stains from your carpets, fabric seats, and other surfaces.",
      imageShowcase: "/images/services-detailing/intext.jpg",
      price: "129.99",
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
      price: "369.99",
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
      price: "109.99",
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
      features: ["Pre-wash",
                "Deep clean paint with hand",
                "Paint Decontamination to remove embedded contaminants such as brake dust, rail dust, ferrous (iron containing) particles, paint overspray",
                "Clay Treatment",
                "Wax protection to protect the paint finish from future contaminants"],
      benefits: ["Protects paint", "Boosts shine", "Enhances resale value"],
      description:
        "Deep clean paint, remove embedded contaminants and protective wax application to restore your vehicle's shine and shield it from environmental elements, ensuring a lasting glossy finish.",
      imageShowcase: "/images/services-detailing/wash.jpg",
      price: "119.99",
      currency: "CAD",
      image: "/images/services/wash-wax.jpg",
      faqs:[
        {
          question: "What is included in the Exterior Wash & Wax service?",
          answer : "We provide a paint-safe hand wash, clay bar treatment, and a premium wax finish to protect your paint and enhance shine."
        },
        {
          question: "How long does a typical detailing service take?",
          answer : "Most services take between 1 to 4 hours, depending on the package and condition of the vehicle."
        },
        {
          question: "Are your products safe for all vehicles?",
          answer : "Yes! We use professional-grade, paint-safe and interior-safe products suitable for all vehicle types."
        },
      ]
    },
    {
      id: "interior-detailing",
      label: "Interior Detailing",
      href: "/services/interior-detailing",
      category: "Interior Detailing",
      shortDescription: "Stain extraction, deep clean and protection inside.",
      features: ["Vacuuming all over the inside",
                "Cleaning of door contours",
                "Cleaning of door frames, trunk & cash registers",
                "Deep cleaning of removable carpets, floor, & fabric seats",
                "Meticulous cleaning of the dashboard",
                "Cleaning of the centre console"],
      benefits: ["Removes odors", "Cleans deeply", "Protects interior materials"],
      description:
        "Experience a high-quality interior detailing service with our specialized stain extraction techniques. We'll target and remove stains from your carpets, fabric seats, and any other surfaces, giving you a truly flawless and inviting cabin. Deep cleaning of all interior surfaces, followed by a meticulous vacuuming to eliminate dirt, and creating a fresh and pristine interior environment.",
      imageShowcase: "/images/services-detailing/interior.jpeg",
      price: "149.99 - 279.99",
      currency: "CAD",
      image: "/images/services/interior-detailing.jpg",
      faqs:[
        {
          question: "Will detailing help with resale value?",
          answer : "Yes! A well-detailed car looks newer and more appealing to buyers, often increasing resale value."
        },
        {
          question: "Can I drop off my car early or late?",
          answer : "Yes, we offer flexible drop-off and pickup times. Let us know ahead, and we’ll do our best to accommodate you."
        },
        {
          question: "Is there a cancellation policy?",
          answer : "Yes — we kindly ask for 24 hours' notice for cancellations or rescheduling, so we can manage bookings efficiently."
        },
      ]
    },
    {
      id: "interior-exterior-detailing",
      label: "Int. & Ext. Detailing",
      href: "/services/interior-exterior-detailing",
      category: "Interior Detailing",
      shortDescription: "Full-service detailing for the entire vehicle.",
      features: ["Pre-wash",
                "Exterior foam wash",
                "Wheels & calipers cleaning",
                "Tire dressing",
                "Vacuuming all over the inside & deep surface cleaning with soft bristle brush",
                "Wiping down the interior panels, windows, seats, windshields & air vents"],
      benefits: ["All-in-one service", "Restores vehicle condition", "Time-saving bundle"],
      description:
        "Experience a high-quality interior detailing service with our specialized stain extraction techniques. Our interior and exterior detailing service rejuvenates your car's interior and exterior.",
      imageShowcase: "/images/services-detailing/intext.jpg",
      price: "129.99",
      currency: "CAD",
      image: "/images/services/full-detailing.jpg",
      faqs:[
        {
          question: "Will detailing help with resale value?",
          answer : "Yes! A well-detailed car looks newer and more appealing to buyers, often increasing resale value."
        },
        {
          question: "Can I drop off my car early or late?",
          answer : "Yes, we offer flexible drop-off and pickup times. Let us know ahead, and we’ll do our best to accommodate you."
        },
        {
          question: "Is there a cancellation policy?",
          answer : "Yes — we kindly ask for 24 hours' notice for cancellations or rescheduling, so we can manage bookings efficiently."
        },
      ]
    },
    {
      id: "gloss-enhancer",
      label: "Gloss Enhancer",
      href: "/services/gloss-enhancer",
      category: "Exterior Detailing",
      shortDescription: "Paint decontamination and gloss boosting.",
      features: ["Deep clean paint & paint decontamination included",
                "Clay Treatment",
                "Enhance paint gloss with soft pad/polish",
                "Paint sealant apply (Lasts 6 months)"],
      benefits: ["Ultra clean surface", "Brilliant finish", "Better coating adherence"],
      description:
        "Enhance the appearance of your vehicle with our Deep Clean paint service, which eliminates stubborn contaminants like airborne compounds, brake dust, and rail dust while also boosting shine of the car.",
      imageShowcase: "/images/services-detailing/gloss.jpg",
      price: "369.99",
      currency: "CAD",
      image: "/images/services/gloss-enhancer.jpg",
      faqs:[
        {
          question: "Do I need to make an appointment?",
          answer : "Yes, appointments help us ensure high-quality service and availability. You can book directly from the service pages."
        },
        {
          question: "Will detailing help with resale value?",
          answer : "Yes! A well-detailed car looks newer and more appealing to buyers, often increasing resale value."
        },
        {
          question: "Can I drop off my car early or late?",
          answer : "Yes, we offer flexible drop-off and pickup times. Let us know ahead, and we’ll do our best to accommodate you."
        },
      ]
    },
    {
      id: "one-step-polish",
      label: "One Step Polish",
      href: "/services/one-step-polish",
      category: "Interior Detailing",
      shortDescription: "Removes 50%-70% of swirls and scratches.",
      features: ["Deep clean paint & paint decontamination included",
        "Clay Treatment",
        "One step paint correction with cutting pad",
        "Paint sealant apply (Lasts 6 months)"],
      benefits: ["Improves appearance", "Cost-effective solution", "Quick result"],
      description:
        "With our exceptional services, we can effectively eliminate 50%-70% of scratches and swirls, leaving your car with a flawless, glossy finish.",
      imageShowcase: "/images/services-detailing/One-ste.jpg",
      price: "449.99 - 549.99",
      currency: "CAD",
      image: "/images/services/one-step-polish.jpg",
      faqs:[
        {
          question: "Are your products safe for all vehicles?",
          answer : "Yes! We use professional-grade, paint-safe and interior-safe products suitable for all vehicle types."
        },
        {
          question: "Do I need to make an appointment?",
          answer : "Yes, appointments help us ensure high-quality service and availability. You can book directly from the service pages."
        },
        {
          question: "Will detailing help with resale value?",
          answer : "Yes! A well-detailed car looks newer and more appealing to buyers, often increasing resale value."
        },
      ]
    },
    {
      id: "paint-correction",
      label: "Paint Correction",
      href: "/services/paint-correction",
      category: "Exterior Detailing",
      shortDescription: "Up to 90% paint imperfection removal.",
      features: ["Deep clean paint & paint decontamination included",
        "Clay Treatment",
        "Multiple steps of compound & polish",
        "Paint sealant apply (Lasts 6 months)"],
      benefits: ["Like-new paint look", "Removes major defects", "Prepares for ceramic coating"],
      description:
        "Elevate your vehicle’s appearance with our professional auto detailing techniques and high-quality products, eliminating up to 90% of imperfections on your car’s paint.",
      imageShowcase: "/images/services-detailing/paint.jpg",
      price: "749.99 - 949.99",
      currency: "CAD",
      image: "/images/services/paint-correction.jpg",
      faqs:[
        {
          question: "Will detailing help with resale value?",
          answer : "Yes! A well-detailed car looks newer and more appealing to buyers, often increasing resale value."
        },
        {
          question: "Can I drop off my car early or late?",
          answer : "Yes, we offer flexible drop-off and pickup times. Let us know ahead, and we’ll do our best to accommodate you."
        },
        {
          question: "Is there a cancellation policy?",
          answer : "Yes — we kindly ask for 24 hours' notice for cancellations or rescheduling, so we can manage bookings efficiently."
        },
      ]
    },
    {
      id: "ceramic-coating",
      label: "Ceramic Coating",
      href: "/services/ceramic-coating",
      category: "Exterior Detailing",
      shortDescription: "Durable nano-coating for long-term surface protection.",
      features: ["Ceramic coating on paint surface",
                "Ceramic coating on wheels & calipers",
                "Ceramic coating on windows & glasses",
                "Ceramic coating on plastics",
                "Ceramic coating on leathers"],
      benefits: ["Easier cleaning", "Enhanced shine", "Long-term value"],
      description:
        "Experience the ultimate protection and enhancement for your car’s paint, wheels, windows, plastics, and leathers with our advanced ceramic coating. Lasts up to 1–4 years.",
      imageShowcase: "/images/services-detailing/ceramic.jpg",
      price: "159.99 - 359.99",
      currency: "CAD",
      image: "/images/services/ceramic-coating.jpg",
      faqs:[
        {
          question: "Are your products safe for all vehicles?",
          answer : "Yes! We use professional-grade, paint-safe and interior-safe products suitable for all vehicle types."
        },
        {
          question: "Do I need to make an appointment?",
          answer : "Yes, appointments help us ensure high-quality service and availability. You can book directly from the service pages."
        },
      ]
    },
    {
      id: "engine-bay-cleaning",
      label: "Engine Bay Cleaning",
      href: "/services/engine-bay-cleaning",
      category: "Interior Detailing",
      shortDescription: "Degrease and detail your engine area.",
      features: ["Remove any excess debris, cover any electrical components, air intakes and alarms to stop water damage",
                "Degrease the engine, underside bonnet & agitated with various brushes",
                "Application of protection to ensure the engine stays clean for long & is protected from the environment"],
      benefits: ["Improves resale value", "Spot problems early", "Better engine cooling"],
      description:
        "Revitalize your car’s engine bay with our expert cleaning service, eliminating any build-up of dirt, grease, and grime for a spotless and well-maintained appearance.",
      imageShowcase: "/images/services-detailing/Cleaning-engine.webp",
      price: "109.99",
      currency: "CAD",
      image: "/images/services/engine-bay.jpg",
      faqs:[
        {
          question: "Are your products safe for all vehicles?",
          answer : "Yes! We use professional-grade, paint-safe and interior-safe products suitable for all vehicle types."
        },
        {
          question: "Do I need to make an appointment?",
          answer : "Yes, appointments help us ensure high-quality service and availability. You can book directly from the service pages."
        },
        {
          question: "Will detailing help with resale value?",
          answer : "Yes! A well-detailed car looks newer and more appealing to buyers, often increasing resale value."
        },
      ]
    },
    {
      id: "headlight-restoration",
      label: "Headlight Restoration",
      href: "/services/headlight-restoration",
      category: "Exterior Detailing",
      shortDescription: "Restore clarity and visibility in headlights.",
      features: ["Restoration of headlights", "Application of UV sealant to prevent the headlights from oxidizing again and maintain the clarity and functionality of your headlights"],
      benefits: ["Better night vision", "Saves replacement costs", "Increases safety"],
      description:
        "Enhance visibility and aesthetics with our headlight restoration, addressing cloudiness and yellowing to improve both safety and the overall look of your vehicle.",
      imageShowcase: "/images/services-detailing/headlight.jpeg",
      price: "129.99 - 259.99",
      currency: "CAD",
      image: "/images/services/headlight-restoration.jpg",
      faqs:[
        {
          question: "Will detailing help with resale value?",
          answer : "Yes! A well-detailed car looks newer and more appealing to buyers, often increasing resale value."
        },
        {
          question: "Can I drop off my car early or late?",
          answer : "Yes, we offer flexible drop-off and pickup times. Let us know ahead, and we’ll do our best to accommodate you."
        },
        {
          question: "Is there a cancellation policy?",
          answer : "Yes — we kindly ask for 24 hours' notice for cancellations or rescheduling, so we can manage bookings efficiently."
        },
      ]
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
        "Keep your car protected with tint film. Our kits contain tinted taillights and headlights covers that protect your car or truck from the environment. It covers for cars and trucks are available in several shades and colors. Choose between different levels of tail light & headlight tint film that can help with scratches or other imperfections.",
      imageShowcase: "/images/services-detailing/tint.jpg",
      price: "179.99",
      currency: "CAD",
      image: "/images/services/headlight-tint.jpg",
      faqs:[
        {
          question: "Do I need to make an appointment?",
          answer : "Yes, appointments help us ensure high-quality service and availability. You can book directly from the service pages."
        },
        {
          question: "Will detailing help with resale value?",
          answer : "Yes! A well-detailed car looks newer and more appealing to buyers, often increasing resale value."
        },
        {
          question: "Is there a cancellation policy?",
          answer : "Yes — we kindly ask for 24 hours' notice for cancellations or rescheduling, so we can manage bookings efficiently."
        },
      ]
    },
    {
      id: "leather-seat-treatment",
      label: "Leather Seat Treatment",
      href: "/services/leather-seat-treatment",
      category: "Interior Detailing",
      shortDescription: "Condition and protect your leather seats.",
      features: ["Deep cleaning of leather seats", " Application of multiple coating of leather protection"],
      benefits: ["Preserves softness", "Prevents aging", "Restores appearance"],
      description:
        "Experience the ultimate in leather seat care with our luxurious treatment, including meticulous cleaning and conditioning to preserve the elegance and durability of your vehicle's leather upholstery.",
      imageShowcase: "/images/services-detailing/leather.jpg",
      price: "69.99",
      currency: "CAD",
      image: "/images/services/leather-treatment.jpg",
      faqs:[
        {
          question: "How long does a typical detailing service take?",
          answer : "Most services take between 1 to 4 hours, depending on the package and condition of the vehicle."
        },
        {
          question: "Are your products safe for all vehicles?",
          answer : "Yes! We use professional-grade, paint-safe and interior-safe products suitable for all vehicle types."
        },
      ]
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
