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
    subtitle: string;
  };
  
  export const PremiumServices: Service[] = [
    {
      id: "interior-exterior-detailing",
      label: "Int. & Ext. Detailing",
      href: "/services/interior-exterior-detailing",
      category: "Interior",
      shortDescription: "Full-service detailing for the entire vehicle.",
      features: ["Full interior + exterior", "Vacuum & shampoo", "Wax & sealant"],
      benefits: ["All-in-one service", "Restores vehicle condition", "Time-saving bundle"],
      description:
        "Experience a high-quality interior detailing service with our specialized stain extraction techniques. We'll target and remove stains from your carpets, fabric seats, and other surfaces.",
      imageShowcase: "/images/services-detailing/intext.jpg",
      price: "129.99",
      currency: "CAD",
      image: "/images/services/full-detailing.jpg",
      subtitle: "Complete Exterior Care & Protection"
    },
    {
      id: "gloss-enhancer",
      label: "Gloss Enhancer",
      href: "/services/gloss-enhancer",
      category: "Exterior",
      shortDescription: "Paint decontamination and gloss boosting.",
      features: ["Paint decontamination", "Gloss enhancer", "Brake dust removal"],
      benefits: ["Ultra clean surface", "Brilliant finish", "Better coating adherence"],
      description:
        "Enhance the appearance of your vehicle with our Deep Clean paint service, which eliminates stubborn contaminants like airborne compounds, brake dust, and rail dust while also boosting shine of the car.",
      imageShowcase: "/images/services-detailing/gloss.jpg",
      price: "369.99",
      currency: "CAD",
      image: "/images/services/gloss-enhancer.jpg",
      subtitle: "Ultimate Paint Shine & Protection"
    },
    {
      id: "engine-bay-cleaning",
      label: "Engine Bay Cleaning",
      href: "/services/engine-bay-cleaning",
      category: "Interior",
      shortDescription: "Degrease and detail your engine area.",
      features: ["Degreasing", "Steam clean", "Safe rinse"],
      benefits: ["Improves resale value", "Spot problems early", "Better engine cooling"],
      description:
        "Revitalize your car's engine bay with our expert cleaning service, eliminating any build-up of dirt, grease, and grime for a spotless and well-maintained appearance.",
      imageShowcase: "/images/services-detailing/Cleaning-engine.webp",
      price: "109.99",
      currency: "CAD",
      image: "/images/services/engine-bay.jpg",
      subtitle: "Comprehensive Engine Bay Cleaning"
    },
  ]

  export const services: Service[] = [
    {
      id: "exterior-detailing",
      label: "Exterior Detailing",
      subtitle: "Complete Exterior Care & Protection",
      href: "/services/exterior-detailing",
      category: "Exterior",
      shortDescription: "Complete exterior cleaning and protection.",
      features: ["Pre-wash", "Deep clean paint", "Clay treatment", "Wax protection"],
      benefits: ["Restores shine", "Protects paint", "Enhances appearance"],
      description: "Professional exterior detailing service that includes thorough cleaning, paint decontamination, and protection.",
      imageShowcase: "/images/services-detailing/exterior.jpg",
      price: "149.99",
      currency: "CAD",
      image: "/images/services/exterior-detailing.jpg",
      faqs: [
        {
          question: "What is included in exterior detailing?",
          answer: "Our exterior detailing includes pre-wash, deep cleaning, clay treatment, and protective wax application."
        },
        {
          question: "How long does it take?",
          answer: "Typically 2-3 hours depending on the vehicle size and condition."
        }
      ]
    },
    {
      id: "paint-decontamination",
      label: "Paint Decontamination",
      subtitle: "Professional Paint Surface Restoration",
      href: "/services/paint-decontamination",
      category: "Exterior",
      shortDescription: "Remove embedded contaminants from paint.",
      features: ["Iron removal", "Clay treatment", "Surface preparation"],
      benefits: ["Smoother paint", "Better protection", "Enhanced shine"],
      description: "Professional paint decontamination service that removes embedded contaminants for a smoother surface.",
      imageShowcase: "/images/services-detailing/decontamination.jpg",
      price: "199.99",
      currency: "CAD",
      image: "/images/services/paint-decontamination.jpg",
      faqs: [
        {
          question: "How often should I decontaminate my paint?",
          answer: "We recommend every 6-12 months depending on driving conditions."
        }
      ]
    },
    {
      id: "engine-bay-detailing",
      label: "Engine Bay Detailing",
      subtitle: "Comprehensive Engine Bay Cleaning",
      href: "/services/engine-bay-detailing",
      category: "Exterior",
      shortDescription: "Professional engine bay cleaning.",
      features: ["Degreasing", "Steam cleaning", "Protection application"],
      benefits: ["Better cooling", "Easier maintenance", "Improved appearance"],
      description: "Thorough cleaning and protection of your engine bay area.",
      imageShowcase: "/images/services-detailing/engine-bay.jpg",
      price: "129.99",
      currency: "CAD",
      image: "/images/services/engine-bay.jpg",
      faqs: [
        {
          question: "Is it safe to clean the engine bay?",
          answer: "Yes, we take all necessary precautions to protect sensitive components."
        }
      ]
    },
    {
      id: "headlight-restoration",
      label: "Headlight Restoration",
      subtitle: "Restore Your Headlights to Like-New Condition",
      href: "/services/headlight-restoration",
      category: "Exterior",
      shortDescription: "Restore cloudy headlights to like-new condition.",
      features: ["Sanding", "Polishing", "UV protection"],
      benefits: ["Better visibility", "Improved safety", "Enhanced appearance"],
      description: "Professional headlight restoration service that removes oxidation and restores clarity.",
      imageShowcase: "/images/services-detailing/headlight.jpg",
      price: "149.99",
      currency: "CAD",
      image: "/images/services/headlight.jpg",
      faqs: [
        {
          question: "How long does the restoration last?",
          answer: "With proper maintenance, results can last 1-2 years."
        }
      ]
    },
    {
      id: "headlight-taillight-tint",
      label: "Headlight & Taillight Tint",
      subtitle: "Custom Light Tinting Services",
      href: "/services/headlight-taillight-tint",
      category: "Exterior",
      shortDescription: "Professional tinting for lights.",
      features: ["UV protection", "Custom tint levels", "Professional installation"],
      benefits: ["UV protection", "Custom look", "Enhanced appearance"],
      description: "Professional tinting service for headlights and taillights.",
      imageShowcase: "/images/services-detailing/light-tint.jpg",
      price: "199.99",
      currency: "CAD",
      image: "/images/services/light-tint.jpg",
      faqs: [
        {
          question: "Is tinting legal?",
          answer: "We ensure all tinting meets local regulations and safety standards."
        }
      ]
    },
    {
      id: "gloss-enhancer",
      label: "Gloss Enhancer",
      subtitle: "Ultimate Paint Shine & Protection",
      href: "/services/gloss-enhancer",
      category: "Exterior",
      shortDescription: "Enhance paint gloss and shine.",
      features: ["Paint preparation", "Gloss enhancement", "Protection"],
      benefits: ["Enhanced shine", "Better protection", "Improved appearance"],
      description: "Professional service to enhance your vehicle's paint gloss and shine.",
      imageShowcase: "/images/services-detailing/gloss.jpg",
      price: "179.99",
      currency: "CAD",
      image: "/images/services/gloss.jpg",
      faqs: [
        {
          question: "How long does the gloss enhancement last?",
          answer: "Results typically last 3-6 months with proper maintenance."
        }
      ]
    },
    {
      id: "one-step-polish",
      label: "One-Step Polish",
      subtitle: "Quick Paint Enhancement & Correction",
      href: "/services/one-step-polish",
      category: "Exterior",
      shortDescription: "Quick paint enhancement and correction.",
      features: ["Paint correction", "Polish application", "Protection"],
      benefits: ["Improved appearance", "Quick results", "Cost-effective"],
      description: "Single-step paint correction and enhancement service.",
      imageShowcase: "/images/services-detailing/one-step.jpg",
      price: "249.99",
      currency: "CAD",
      image: "/images/services/one-step.jpg",
      faqs: [
        {
          question: "What imperfections can be removed?",
          answer: "Light to moderate swirl marks and scratches can be significantly reduced."
        }
      ]
    },
    {
      id: "paint-correction",
      label: "Paint Correction",
      subtitle: "Professional Paint Perfection",
      href: "/services/paint-correction",
      category: "Exterior",
      shortDescription: "Professional paint correction service.",
      features: ["Multi-step correction", "Paint enhancement", "Protection"],
      benefits: ["Like-new finish", "Maximum correction", "Long-lasting results"],
      description: "Comprehensive paint correction service for maximum results.",
      imageShowcase: "/images/services-detailing/paint-correction.jpg",
      price: "399.99",
      currency: "CAD",
      image: "/images/services/paint-correction.jpg",
      faqs: [
        {
          question: "How long does paint correction last?",
          answer: "Results are permanent, but proper maintenance is required to maintain them."
        }
      ]
    },
    {
      id: "interior-detailing",
      label: "Interior Detailing",
      subtitle: "Complete Interior Care & Refresh",
      href: "/services/interior-detailing",
      category: "Interior",
      shortDescription: "Complete interior cleaning and detailing.",
      features: ["Vacuuming", "Surface cleaning", "Protection"],
      benefits: ["Fresh interior", "Better air quality", "Enhanced comfort"],
      description: "Professional interior detailing service for a fresh and clean cabin.",
      imageShowcase: "/images/services-detailing/interior.jpg",
      price: "149.99",
      currency: "CAD",
      image: "/images/services/interior.jpg",
      faqs: [
        {
          question: "What areas are cleaned?",
          answer: "We clean all interior surfaces including seats, carpets, dashboard, and more."
        }
      ]
    },
    {
      id: "floor-carpet-shampoo",
      label: "Floor & Carpet Shampoo",
      subtitle: "Deep Cleaning for Your Vehicle's Interior",
      href: "/services/floor-carpet-shampoo",
      category: "Interior",
      shortDescription: "Deep cleaning for floors and carpets.",
      features: ["Deep cleaning", "Stain removal", "Odor elimination"],
      benefits: ["Cleaner carpets", "Fresh smell", "Better appearance"],
      description: "Professional shampoo service for vehicle floors and carpets.",
      imageShowcase: "/images/services-detailing/carpet.jpg",
      price: "99.99",
      currency: "CAD",
      image: "/images/services/carpet.jpg",
      faqs: [
        {
          question: "How long does it take to dry?",
          answer: "Typically 2-4 hours depending on conditions."
        }
      ]
    },
    {
      id: "pet-hair-removal",
      label: "Pet Hair Removal",
      subtitle: "Specialized Pet Hair & Odor Treatment",
      href: "/services/pet-hair-removal",
      category: "Interior",
      shortDescription: "Professional pet hair removal service.",
      features: ["Specialized tools", "Thorough cleaning", "Odor treatment"],
      benefits: ["Clean interior", "No more pet hair", "Fresh smell"],
      description: "Professional service to remove pet hair and odors from your vehicle.",
      imageShowcase: "/images/services-detailing/pet-hair.jpg",
      price: "79.99",
      currency: "CAD",
      image: "/images/services/pet-hair.jpg",
      faqs: [
        {
          question: "Do you remove all pet hair?",
          answer: "Yes, we use specialized tools to remove even the most stubborn pet hair."
        }
      ]
    },
    {
      id: "fabric-seat-shampoo",
      label: "Fabric Seat Shampoo",
      subtitle: "Professional Fabric Seat Cleaning",
      href: "/services/fabric-seat-shampoo",
      category: "Interior",
      shortDescription: "Deep cleaning for fabric seats.",
      features: ["Deep cleaning", "Stain removal", "Protection"],
      benefits: ["Clean seats", "Fresh smell", "Better appearance"],
      description: "Professional shampoo service for fabric seats.",
      imageShowcase: "/images/services-detailing/fabric-seats.jpg",
      price: "89.99",
      currency: "CAD",
      image: "/images/services/fabric-seats.jpg",
      faqs: [
        {
          question: "How long does it take to dry?",
          answer: "Typically 2-3 hours depending on conditions."
        }
      ]
    },
    {
      id: "leather-seat-treatment",
      label: "Leather Seat Treatment",
      subtitle: "Premium Leather Care & Protection",
      href: "/services/leather-seat-treatment",
      category: "Interior",
      shortDescription: "Professional leather care and protection.",
      features: ["Cleaning", "Conditioning", "Protection"],
      benefits: ["Soft leather", "Longer life", "Better appearance"],
      description: "Professional leather care and protection service.",
      imageShowcase: "/images/services-detailing/leather.jpg",
      price: "129.99",
      currency: "CAD",
      image: "/images/services/leather.jpg",
      faqs: [
        {
          question: "How often should I treat my leather seats?",
          answer: "We recommend every 3-6 months for optimal protection."
        }
      ]
    },
    {
      id: "ceramic-coating",
      label: "Ceramic Coating",
      subtitle: "Long-Lasting Paint Protection",
      href: "/services/ceramic-coating",
      category: "Protection",
      shortDescription: "Long-lasting paint protection.",
      features: ["Paint preparation", "Coating application", "Curing"],
      benefits: ["Long protection", "Easy cleaning", "Enhanced shine"],
      description: "Professional ceramic coating service for maximum protection.",
      imageShowcase: "/images/services-detailing/ceramic.jpg",
      price: "999.99",
      currency: "CAD",
      image: "/images/services/ceramic.jpg",
      faqs: [
        {
          question: "How long does ceramic coating last?",
          answer: "Our ceramic coating typically lasts 2-5 years with proper maintenance."
        }
      ]
    },
    {
      id: "paint-sealant",
      label: "Paint Sealant",
      subtitle: "Synthetic Paint Protection",
      href: "/services/paint-sealant",
      category: "Protection",
      shortDescription: "Synthetic paint protection.",
      features: ["Paint preparation", "Sealant application", "Curing"],
      benefits: ["Good protection", "Enhanced shine", "Easy maintenance"],
      description: "Professional paint sealant application service.",
      imageShowcase: "/images/services-detailing/sealant.jpg",
      price: "299.99",
      currency: "CAD",
      image: "/images/services/sealant.jpg",
      faqs: [
        {
          question: "How long does paint sealant last?",
          answer: "Typically 6-12 months with proper maintenance."
        }
      ]
    },
    {
      id: "car-wax",
      label: "Car Wax",
      subtitle: "Traditional Wax Protection",
      href: "/services/car-wax",
      category: "Protection",
      shortDescription: "Traditional wax protection.",
      features: ["Paint preparation", "Wax application", "Buffing"],
      benefits: ["Classic shine", "Good protection", "Warm glow"],
      description: "Professional car wax application service.",
      imageShowcase: "/images/services-detailing/wax.jpg",
      price: "149.99",
      currency: "CAD",
      image: "/images/services/wax.jpg",
      faqs: [
        {
          question: "How long does car wax last?",
          answer: "Typically 2-3 months with proper maintenance."
        }
      ]
    },
    {
      id: "fabric-textile-sealant",
      label: "Fabric & Textile Sealant",
      subtitle: "Protection for Interior Fabrics",
      href: "/services/fabric-textile-sealant",
      category: "Protection",
      shortDescription: "Protection for fabric and textiles.",
      features: ["Cleaning", "Sealant application", "Curing"],
      benefits: ["Stain resistance", "Easy cleaning", "Longer life"],
      description: "Professional fabric and textile protection service.",
      imageShowcase: "/images/services-detailing/fabric-sealant.jpg",
      price: "199.99",
      currency: "CAD",
      image: "/images/services/fabric-sealant.jpg",
      faqs: [
        {
          question: "How long does the protection last?",
          answer: "Typically 6-12 months with proper maintenance."
        }
      ]
    },
    {
      id: "ceramic-coating-paint",
      label: "Paint",
      subtitle: "Premium Ceramic Paint Protection",
      href: "/services/ceramic-coating-paint",
      category: "Ceramic Coating",
      shortDescription: "Ceramic coating for paint.",
      features: ["Paint preparation", "Coating application", "Curing"],
      benefits: ["Maximum protection", "Enhanced shine", "Easy cleaning"],
      description: "Professional ceramic coating service for vehicle paint.",
      imageShowcase: "/images/services-detailing/ceramic-paint.jpg",
      price: "999.99",
      currency: "CAD",
      image: "/images/services/ceramic-paint.jpg",
      faqs: [
        {
          question: "How long does the coating last?",
          answer: "Our ceramic paint coating typically lasts 2-5 years with proper maintenance."
        }
      ]
    },
    {
      id: "ceramic-coating-wheels",
      label: "Wheel & Brake Calipers",
      subtitle: "Ceramic Protection for Wheels",
      href: "/services/ceramic-coating-wheels",
      category: "Ceramic Coating",
      shortDescription: "Ceramic coating for wheels and calipers.",
      features: ["Surface preparation", "Coating application", "Curing"],
      benefits: ["Brake dust resistance", "Easy cleaning", "Enhanced appearance"],
      description: "Professional ceramic coating service for wheels and brake calipers.",
      imageShowcase: "/images/services-detailing/ceramic-wheels.jpg",
      price: "399.99",
      currency: "CAD",
      image: "/images/services/ceramic-wheels.jpg",
      faqs: [
        {
          question: "How long does the wheel coating last?",
          answer: "The wheel and caliper coating typically lasts 1-2 years with proper maintenance."
        }
      ]
    },
    {
      id: "ceramic-coating-glass",
      label: "Glass Surfaces",
      subtitle: "Ceramic Protection for Glass",
      href: "/services/ceramic-coating-glass",
      category: "Ceramic Coating",
      shortDescription: "Ceramic coating for glass surfaces.",
      features: ["Glass preparation", "Coating application", "Curing"],
      benefits: ["Water repellency", "Easy cleaning", "Enhanced visibility"],
      description: "Professional ceramic coating service for all glass surfaces.",
      imageShowcase: "/images/services-detailing/ceramic-glass.jpg",
      price: "299.99",
      currency: "CAD",
      image: "/images/services/ceramic-glass.jpg",
      faqs: [
        {
          question: "How long does the glass coating last?",
          answer: "The glass coating typically lasts 1-2 years with proper maintenance."
        }
      ]
    },
    {
      id: "ceramic-coating-plastics",
      label: "Exterior Plastics & Trims",
      subtitle: "Ceramic Protection for Plastics",
      href: "/services/ceramic-coating-plastics",
      category: "Ceramic Coating",
      shortDescription: "Ceramic coating for exterior plastics and trims.",
      features: ["Surface preparation", "Coating application", "Curing"],
      benefits: ["UV protection", "Color preservation", "Enhanced appearance"],
      description: "Professional ceramic coating service for exterior plastics and trims.",
      imageShowcase: "/images/services-detailing/ceramic-plastics.jpg",
      price: "249.99",
      currency: "CAD",
      image: "/images/services/ceramic-plastics.jpg",
      faqs: [
        {
          question: "How long does the plastic coating last?",
          answer: "The plastic and trim coating typically lasts 1-2 years with proper maintenance."
        }
      ]
    },
    {
      id: "ceramic-coating-interior",
      label: "Interior Leather & Synthetics",
      subtitle: "Ceramic Protection for Interior",
      href: "/services/ceramic-coating-interior",
      category: "Ceramic Coating",
      shortDescription: "Ceramic coating for interior surfaces.",
      features: ["Surface preparation", "Coating application", "Curing"],
      benefits: ["Stain resistance", "UV protection", "Easy cleaning"],
      description: "Professional ceramic coating service for interior leather and synthetic surfaces.",
      imageShowcase: "/images/services-detailing/ceramic-interior.jpg",
      price: "349.99",
      currency: "CAD",
      image: "/images/services/ceramic-interior.jpg",
      faqs: [
        {
          question: "How long does the interior coating last?",
          answer: "The interior coating typically lasts 1-2 years with proper maintenance."
        }
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
