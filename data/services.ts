type VehiculesPrice = {
  sedan: string;
  suv: string;
}

export type Service = {
    id: string;
    label: string;
    href: string;
    category?: string;
    shortDescription: string;
    features: string[];
    benefits: string[];
    price: VehiculesPrice;
    currency: string;
    image: string;
    description: string;
    imageShowcase: string;
    gallery?: string[];
    faqs?: Array<{ question: string; answer: string }>;
    subtitle: string;
  };

export const PaintPolishService: Service[] =[
  {
    id: "gloss-enhancer",
    label: "Gloss Enhancer",
    subtitle: "Ultimate Paint Shine & Protection",
    href: "/services/gloss-enhancer",
    category: "",
    shortDescription: "Enhance paint gloss and shine.",
    features: [
      "Fine machine polish to boost gloss",
      "Microfiber hand-buffing for finish",
      "Final inspection for shine & uniformity",
      "6-month polymer sealant (optional if ceramic coating is selected)"
    ],
    benefits: [
      "Even if your paint doesn't have scratches, contaminants can build up and dull the finish. Gloss enhancement safely revives your vehicle's natural shine without aggressive polishing, making it ideal for new or regularly maintained cars."
    ],
    description: "A great option for newer or well-maintained vehicles, our Gloss Enhancer service deeply cleans the paint and boosts shine — removing embedded contaminants like brake dust, airborne particles, and rail dust. Finished with a fine polish to bring out clarity and gloss.",
    imageShowcase: "/images/services-detailing/gloss.jpg",
    price: {
      sedan: "309.99",
      suv: "369.99"
    },
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
    subtitle: "Swirl Removal & Gloss Enhancement",
    href: "/services/one-step-polish",
    category: "",
    shortDescription: "Quick paint enhancement and correction.",
    features: [
      "One-step machine polish with cutting pad",
      "Removes 50–70% of paint defects",
      "6-month polymer sealant (optional if ceramic coating is selected)",
      "Gloss inspection and touch-up as needed"
    ],
    benefits: [
      "Daily driving exposes your vehicle to elements that cause swirls, oxidation, and light scratches. A one-step polish not only improves the look of your paint but also extends its life by removing defects."
    ],
    description: "A balanced level of paint correction using a cutting pad and compound-polish blend. This removes 50–70% of visible swirls and scratches, restoring the surface clarity and shine. Great for daily drivers or vehicles that need more than just gloss enhancement.",
    imageShowcase: "/images/services-detailing/one-step.jpg",
    price: {
      sedan: "469.99",
      suv: "569.99"
    },
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
    subtitle: "Multi-Stage Perfection & Showroom Finish",
    href: "/services/paint-correction",
    category: "",
    shortDescription: "Professional paint correction service.",
    features: [
      "Multi-stage paint correction (wet sanding, compounding + polish)",
      "Removes up to 90% of paint defects",
      "6-month polymer sealant (optional if ceramic coating is selected)",
      "Final surface inspection under detailing lights"
    ],
    benefits: [
      "If your vehicle's paint has heavy swirling, oxidation, or water spot damage, paint correction is the only method to safely restore it. This process dramatically improves resale value and appearance, making your vehicle look better than new."
    ],
    description: "Our most advanced polishing service — using multiple machine steps of cutting and refining compounds, this service removes up to 90% of imperfections like heavy swirls, oxidation, scratches, and etching. The result is a mirror-like, showroom-quality finish with unmatched clarity and depth.",
    imageShowcase: "/images/services-detailing/paint-correction.jpg",
    price: {
      sedan: "749.99",
      suv: "909.99"
    },
    currency: "CAD",
    image: "/images/services/paint-correction.jpg",
    faqs: [
      {
        question: "How long does paint correction last?",
        answer: "Results are permanent, but proper maintenance is required to maintain them."
      }
    ]
  },
]

  
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
      price:{
        sedan: "99.99",
        suv: "119.99"
      },
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
      price: {
        sedan: "309.99",
        suv: "369.99"
      },
      currency: "CAD",
      image: "/images/services/gloss-enhancer.jpg",
      subtitle: "Shine Boost & Deep Paint Clean"
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
      price: {
        sedan: "109.99",
        suv: "109.99"
      },
      currency: "CAD",
      image: "/images/services/engine-bay.jpg",
      subtitle: "Safe, Detailed & Protected"
    },
  ]

  export const services: Service[] = [
    {
      id: "exterior-detailing",
      label: "Exterior Detailing",
      subtitle: "More Than Just a Wash",
      href: "/services/exterior-detailing",
      category: "Exterior",
      shortDescription: "Complete exterior cleaning and protection.",
      features: [
        "Wheels & tires deep cleaned with pH-balanced wheel cleaner",
        "Pre-rinse and snow foam application",
        "Detailed brush cleaning (grilles, emblems, trim, fuel cap, etc.)",
        "Door jamb cleaning (doors jambs & trunk jamb)",
        "Contact Wash (Two-bucket method) with pH-neutral shampoo",
        "Paint decontamination treatment (iron remover + clay bar/mitt)",
        "Blow & microfiber drying towel for drying",
        "Tire dressing, glass cleaning",
        "Final quality check"
      ],
      benefits: [
        "Prevents swirl marks and micro-scratches",
        "Safe for ceramic-coated, waxed and polymer sealed vehicles",
        "Cleans areas basic washes miss",
        "Prepares car for protection or polishing",
        "Maintains paint health and long-term shine",
        "100% pH-neutral & coating-safe process"
      ],
      description: "Basic car washes often use dirty sponges, harsh chemicals, or automated brushes that leave behind swirl marks, scratches, and miss hidden areas like grilles or door jambs. Our Exterior Detail Wash is designed to do the opposite — it safely and thoroughly cleans every part of your car's exterior using pH-neutral products and precise hand techniques.",
      imageShowcase: "/images/services-detailing/exterior.jpg",
      price: {
        sedan: "99.99",
        suv: "119.99"
      },
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
      subtitle: "Remove What Washing Can't",
      href: "/services/paint-decontamination",
      category: "Exterior",
      shortDescription: "Remove embedded contaminants from paint.",
      features: [
        "Iron Remover (Chemical Decontamination)",
        "Tar Remover (Spot Cleaning)",
        "Clay Bar/Mitt Treatment (Mechanical Decontamination)"
      ],
      benefits: [
        "Restores smoothness to your paint",
        "Enhances gloss and clarity",
        "Prepares surface for ceramic coating or wax",
        "Extends the life of your paint protection",
        "Helps prevent long-term damage from embedded grime"
      ],
      description: "Even after a proper wash, your car's paint can still feel rough or look dull. That's because microscopic contaminants like brake dust, industrial fallout, road tar, and tree sap embed themselves into your paint over time — and regular washing won't remove them.",
      imageShowcase: "/images/services-detailing/decontamination.jpg",
      price: {
        sedan: "199.99",
        suv: "249.99"
      },
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
      features: [
        "Full inspection and preparation of engine bay",
        "Covering of sensitive components (fuse boxes, alternator, wiring, sensors, etc.)",
        "Degreasing and dirt removal by hand",
        "Soft detailing brushes for tight spots",
        "No pressure washer used – low-risk cleaning only",
        "Application of a non-greasy dressing that restores shine and provides UV protection",
        "Final wipe-down and inspection"
      ],
      benefits: [
        "Improves engine appearance and resale value",
        "Removes built-up grease, oil, and debris",
        "Helps prevent long-term corrosion and wear",
        "Maintains safer operating temperatures",
        "Adds a professional touch to your vehicle presentation"
      ],
      description: "Your engine bay is one of the most overlooked areas in car detailing — yet it's one of the most impactful when done right. Our Engine Bay Cleaning service focuses on a safe, meticulous approach without using high-pressure water. We protect critical components, remove built-up grime, and finish with a non-greasy dressing that restores a deep, clean factory look and long-lasting protection.",
      imageShowcase: "/images/services-detailing/engine-bay.jpg",
      price: {
        sedan: "109.99",
        suv: "109.99"
      },
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
      subtitle: "Clarity, Safety & Style",
      href: "/services/headlight-restoration",
      category: "Exterior",
      shortDescription: "Restore cloudy headlights to like-new condition.",
      features: [
        "Full surface prep and masking",
        "Wet sanding (multi-stage, as needed)",
        "Machine polishing to restore optical clarity",
        "Ceramic coating application for long-term protection",
        "Final inspection and light output check"
      ],
      benefits: [
        "Restores nighttime visibility and safety",
        "Improves vehicle appearance and resale value",
        "Saves money vs. costly headlight replacement",
        "Prevents further UV and oxidation damage",
        "Enhances the overall finish of a detail job"
      ],
      description: "Faded, yellowed, or hazy headlights don't just look bad — they also reduce night visibility and compromise safety. Our professional Headlight Restoration service brings them back to life using a multi-stage sanding and polishing process that restores clarity, shine, and light output.",
      imageShowcase: "/images/services-detailing/headlight.jpg",
      price: {
        sedan: "179.99",
        suv: "179.99"
      },
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
      subtitle: "Style, Protection & Custom Look",
      href: "/services/headlight-taillight-tint",
      category: "Exterior",
      shortDescription: "Professional tinting for lights.",
      features: [
        "Full surface prep and cleaning",
        "Precision-cut tint film in your choice of color",
        "Professional installation with heat-shrinking for a seamless fit",
        "2-year warranty against bubbling, peeling, or fading",
        "Final inspection and alignment check"
      ],
      benefits: [
        "Achieves a blacked-out, performance look",
        "Shields lights from UV, fading, and scratching",
        "Backed by a 2-year no-fade, no-bubble warranty",
        "Enhances both headlights and taillights",
        "Fully removable with no damage to factory lenses"
      ],
      description: "Looking to enhance the look of your car's front or rear lights? Our Tint Film Service adds a sleek, custom appearance to both headlights and taillights, while offering protection against UV rays, scratches, and oxidation. Choose from two bold shades, professionally installed with a 2-year warranty.",
      imageShowcase: "/images/services-detailing/light-tint.jpg",
      price: {
        sedan: "179.99",
        suv: "179.99"
      },
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
      id: "interior-detailing",
      label: "Interior Detailing",
      subtitle: "Deep Clean, Restore & Refresh Your Cabin",
      href: "/services/interior-detailing",
      category: "Interior",
      shortDescription: "Complete interior cleaning and detailing.",
      features: [
        "Interior vacuuming (floor, mats, trunk/cargo area)",
        "Dashboard, door panels, and center console wiped and detailed",
        "Vents, buttons, knobs, and trim cleaned with dedicated soft detailing brushes",
        "Steering wheel deep cleaned to a factory matte finish",
        "Cup holders and small compartments cleaned",
        "Windows and mirrors cleaned from inside",
        "Steam cleaning of high-touch surfaces for sanitization",
        "Headliner spot-cleaning (where applicable)",
        "Final interior fragrance applied (optional)"
      ],
      benefits: [
        "Unlike quick wipe-downs, our professional detailing reaches the cracks, gaps, and deep corners most miss. This not only improves air quality and hygiene but also protects surfaces from wear, fading, and long-term damage. Interior detailing is essential to maintaining both the comfort and value of your vehicle."
      ],
      description: "Most quick car washes offer rushed interior wipe-downs that leave behind dust in vents, smudges on screens, and grime in tight spaces. But your vehicle deserves better. At our detailing studio, Interior Detailing is an art — not a surface-level clean. We don't just make it look clean; we deep clean every accessible area using safe, professional-grade tools and products.",
      imageShowcase: "/images/services-detailing/interior.jpg",
      price: {
        sedan: "99.99",
        suv: "119.99"
      },
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
      subtitle: "Deep Extraction for a Spotless, Odor-Free Cabin",
      href: "/services/floor-carpet-shampoo",
      category: "Interior",
      shortDescription: "Deep cleaning for floors and carpets.",
      features: [
        "Complete vacuuming of carpeted floors and mats",
        "Floor mats removed and individually shampooed & extracted",
        "Carpeted footwells, under-seat areas, and transmission tunnels shampooed",
        "Low-moisture cleaning process to preserve underlying electronics",
        "Spot-treatment for stubborn stains",
        "Odor-neutralizing finish applied"
      ],
      benefits: [
        "Carpet and floor areas are the most abused parts of a vehicle's interior, absorbing dirt, salt, moisture, and bacteria. Over time, this leads to odors, discoloration, and even mold growth. Our low-moisture, electronics-safe shampooing method restores cleanliness and hygiene without compromising your vehicle's sensitive under-floor components."
      ],
      description: "Your car's floors and carpets absorb dirt, salt, spills, and bacteria daily — and basic vacuuming won't cut it. Our Floor & Carpet Shampoo service goes far beyond surface cleaning by using moisture-controlled, upholstery-safe cleaning methods to deep clean and sanitize carpets without risking electrical components commonly located underfoot.",
      imageShowcase: "/images/services-detailing/carpet.jpg",
      price: {
        sedan: "69.99",
        suv: "89.99"
      },
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
      subtitle: "Deep Interior Clean for a Fur-Free Finish",
      href: "/services/pet-hair-removal",
      category: "Interior",
      shortDescription: "Professional pet hair removal service.",
      features: [
        "Full inspection of interior pet hair buildup",
        "Complete interior vacuum",
        "Specialized tools used to lift embedded fur from fabric and carpet",
        "Hair removed from seats, carpets, floor mats, seat creases, and cargo area",
        "Optional: Air vents and tight areas cleaned with static or compressed tools",
        "Final vacuum pass to ensure a fur-free finish"
      ],
      benefits: [
        "Pet hair is more than a nuisance — it can cause allergens, retain odors, and damage upholstery fibers over time. Regular cleaning often fails to address the deeper, embedded hair that hides in your interior. Our professional pet hair removal restores cleanliness, improves air quality, and protects interior materials for a more comfortable and hygienic ride."
      ],
      description: "Pet hair isn't just unsightly — it embeds itself into upholstery, floor fibers, and hard-to-reach crevices, making it extremely difficult to remove with standard vacuuming. Our Pet Hair Removal service is designed to fully extract stubborn pet hair using specialized tools and techniques that protect your interior while restoring a clean, hygienic environment.",
      imageShowcase: "/images/services-detailing/pet-hair.jpg",
      price: {
        sedan: "89.99",
        suv: "109.99"
      },
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
      subtitle: "Deep Clean, Sanitize & Refresh Your Upholstery",
      href: "/services/fabric-seat-shampoo",
      category: "Interior",
      shortDescription: "Deep cleaning for fabric seats.",
      features: [
        "Fabric seats thoroughly vacuumed",
        "Pre-treatment with enzyme-based stain removers",
        "Shampooing and hot-water extraction of seat fabric",
        "Spot stain treatment as needed",
        "Seats are lightly deodorized for a clean, fresh scent"
      ],
      benefits: [
        "Fabric seats act like sponges, absorbing moisture, oils, and contaminants. Over time, this creates not just visible stains, but lingering smells and potential bacteria buildup. Professional fabric shampooing improves hygiene, extends upholstery lifespan, and enhances the comfort of your ride — especially important for allergy sufferers and families with kids or pets."
      ],
      description: "Fabric seats are notorious for trapping dirt, sweat, odors, and spills over time — things a simple vacuum or wipe-down can't fix. At our studio, we go beyond surface cleaning. Our Fabric Seat Shampoo service deep-cleans your cloth upholstery, removing embedded stains, bacteria, and lingering odors to restore a fresh, hygienic cabin.",
      imageShowcase: "/images/services-detailing/fabric-seats.jpg",
      price: {
        sedan: "69.99",
        suv: "89.99"
      },
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
      subtitle: "Clean, Condition & Protect for a Luxurious Finish",
      href: "/services/leather-seat-treatment",
      category: "Interior",
      shortDescription: "Professional leather care and protection.",
      features: [
        "Full vacuum of leather seating areas",
        "Gentle yet effective leather-safe cleaner applied",
        "Dirt, sweat, and oils extracted with soft brushes and microfiber",
        "Leather is conditioned with premium UV-protectant cream",
        "Matte, natural finish (no greasy shine)",
        "Optional: Leather UV sealant for extended protection"
      ],
      benefits: [
        "Leather is a natural material that requires ongoing care to prevent cracking, fading, and hardening. Generic cleaners and harsh chemicals can damage its surface. Our tailored leather care process extends the life and appearance of your seats, making them more comfortable and preserving your vehicle's value."
      ],
      description: "Leather seats add elegance to your vehicle, but without proper care, they quickly become dull, cracked, and discolored. Our Leather Seat Treatment service is designed to clean deep into the leather grain, lifting dirt and body oils, then condition and protect the surface to maintain its supple, factory-like feel.",
      imageShowcase: "/images/services-detailing/leather.jpg",
      price: {
        sedan: "49.99",
        suv: "149.99"
      },
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
      id: "paint-polish",
      label: "Paint Polish",
      subtitle: "Professional Paint Enhancement & Correction",
      href: "/services/paint-polish",
      category: "Paint Polish",
      shortDescription: "Professional paint polishing services.",
      features: [],
      benefits: [],
      description: "Our paint polishing services are designed to enhance and protect your vehicle's paintwork. We offer three levels of service to meet your specific needs: Gloss Enhancer for maintaining shine, One-Step Polish for moderate correction, and Paint Correction for comprehensive restoration.",
      imageShowcase: "/images/services-detailing/paint-polish.jpg",
      price: {
        sedan: "0.00",
        suv: "0.00"
      },
      currency: "CAD",
      image: "/images/services/paint-polish.jpg",
      faqs: []
    },
    {
      id: "ceramic-coating",
      label: "Ceramic Coating",
      subtitle: "Elevate Your Vehicle's Defense",
      href: "/ceramic_coating",
      category: "Protection",
      shortDescription: "Long-lasting paint protection with nanotechnology.",
      features: [
        "Paint preparation and decontamination",
        "Surface-specific coating application",
        "Professional curing process",
        "Multiple protection levels available",
        "Comprehensive surface coverage"
      ],
      benefits: [
        "Hydrophobic surface repels water and contaminants",
        "UV-resistant protection prevents paint fading",
        "Scratch-resistant layer against light abrasions",
        "Chemical-resistant shield against acids and detergents",
        "Enhanced gloss and mirror-like finish",
        "Long-term protection (2-5 years depending on level)",
        "Easier cleaning and maintenance",
        "Increased resale value"
      ],
      description: "Ceramic coating is a liquid polymer made from nanotechnology-based SiO₂ (silicon dioxide). Once cured, it chemically bonds to the factory paint (or any other surface it's applied to), creating a hydrophobic, slick, and ultra-durable shield. Unlike traditional waxes or sealants, ceramic coatings provide a long-lasting, hydrophobic surface that repels dirt, water, road grime, bird droppings, bug splatter, and more. The coating's molecular structure forms a tight, glass-like layer that offers UV resistance, scratch protection, chemical resistance, and enhanced gloss. Available in three levels of protection: Level 1 (2 years/30,000 km), Level 2 (4 years/60,000 km), and Level 3 (5 years/100,000 km).",
      imageShowcase: "/images/services-detailing/ceramic.jpg",
      price: {
        sedan: "369.99",
        suv: "469.99"
      },
      currency: "CAD",
      image: "/images/services/ceramic.jpg",
      faqs: [
        {
          question: "How long does ceramic coating last?",
          answer: "Our ceramic coating offers three levels of protection: Level 1 (2 years/30,000 km), Level 2 (4 years/60,000 km), and Level 3 (5 years/100,000 km). The longevity depends on the quality of the product, application process, and maintenance."
        },
        {
          question: "What surfaces can be coated?",
          answer: "Our ceramic coatings can be applied to multiple surfaces including paint, wheels & brake calipers, glass surfaces, exterior plastics & trims, and interior leather & synthetics. Each surface requires a specific formulation for optimal bonding and protection."
        },
        {
          question: "Is ceramic coating worth the investment?",
          answer: "Yes, ceramic coating is a worthwhile investment as it provides long-term protection, enhances appearance, makes cleaning easier, increases resale value, and minimizes long-term paint correction costs."
        }
      ]
    },
    {
      id: "paint-sealant",
      label: "Paint Sealant",
      subtitle: "Synthetic Protection & Enhanced Gloss",
      href: "/services/paint-sealant",
      category: "Protection",
      shortDescription: "Synthetic paint protection.",
      features: [
        "Paint preparation",
        "Sealant application",
        "Curing"
      ],
      benefits: [
        "Good protection",
        "Enhanced shine",
        "Easy maintenance"
      ],
      description: "A Paint Sealant is a synthetic, polymer-based protective coating that bonds to your vehicle's paint to create a long-lasting barrier against the elements. Unlike traditional waxes, this advanced sealant forms a durable layer that protects against UV rays, bird droppings, acid rain, and other contaminants while enhancing your car's gloss and slickness.",
      imageShowcase: "/images/services-detailing/sealant.jpg",
      price: {
        sedan: "299.99",
        suv: "399.99"
      },
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
      features: [
        "Paint preparation",
        "Wax application",
        "Buffing"
      ],
      benefits: [
        "Classic shine",
        "Good protection",
        "Warm glow"
      ],
      description: "Car Wax is a classic protective layer used to enhance your vehicle's appearance while offering short-term protection. Unlike most dealerships and car washes that apply cheap spray waxes lasting only 2–3 days, we use premium-grade paste or liquid waxes blended with carnauba and synthetic polymers.",
      imageShowcase: "/images/services-detailing/wax.jpg",
      price: {
        sedan: "59.99",
        suv: "79.99"
      },
      currency: "CAD",
      image: "/images/services/wax.jpg",
      faqs: [
        {
          question: "How long does car wax last?",
          answer: "Typically 4-6 weeks with proper maintenance."
        }
      ]
    },
    
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
