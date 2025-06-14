export interface DetailPackage {
    id: string;
    category: string;
    name: string;
    description: string[];
    prices: {
      sedanCoupesCrossovers: number;
      compactMidFullSUVsPickups: number;
      fullSizeSUVsPickups?: number;
    };
    addOns?: string[];
  }
  
  export const packages: DetailPackage[] = [
    // Exterior Detailing
    {
      id: "exterior-basic",
      category: "Exterior Detailing",
      name: "BASIC",
      description: [
        "Wheel & Tire Cleaning",
        "Door Jamb Cleaning",
        "Contact Washing",
        "Air Blow Drying"
      ],
      prices: { sedanCoupesCrossovers: 49.99, compactMidFullSUVsPickups: 69.99 }
    },
    {
      id: "exterior-standard",
      category: "Exterior Detailing",
      name: "STANDARD",
      description: [
        "Everything in BASIC",
        "Pre-Rinse",
        "Snow Foam Application",
        "Detailed Brush Cleaning",
        "Glass Cleaning",
        "Tire Dressing",
        "Air Blow & Microfiber Towel Drying"
      ],
      prices: { sedanCoupesCrossovers: 69.99, compactMidFullSUVsPickups: 89.99 }
    },
    {
      id: "exterior-advanced",
      category: "Exterior Detailing",
      name: "ADVANCED",
      description: [
        "Everything in STANDARD",
        "Paint Decontamination",
        "Spray Wax Application"
      ],
      prices: { sedanCoupesCrossovers: 129.99, compactMidFullSUVsPickups: 159.99 },
      addOns: ["Paint Sealant", "Engine Bay Detailing"]
    },
  
    // Interior Detailing
    {
      id: "interior-basic",
      category: "Interior Detailing",
      name: "BASIC",
      description: [
        "Interior Vacuuming",
        "Interior Window Cleaning",
        "Dashboard, Door Panel & Center Console Wiping",
      ],
      prices: { sedanCoupesCrossovers: 49.99, compactMidFullSUVsPickups: 59.99, fullSizeSUVsPickups: 69.99 }
    },
    {
      id: "interior-standard",
      category: "Interior Detailing",
      name: "STANDARD",
      description: [
        "Everything in BASIC",
        "Floor & Carpet Detailing",
        "Steam Cleaning",
        "Air Vent, Button & Tight Space Detailing",
      ],
      prices: { sedanCoupesCrossovers: 149.99, compactMidFullSUVsPickups: 169.99, fullSizeSUVsPickups: 189.99 }
    },
    {
      id: "interior-advanced",
      category: "Interior Detailing",
      name: "ADVANCED",
      description: [
        "Everything in STANDARD",
        "Steering Wheel Deep Clean",
        "Headliner Detailing",
        "Fabric Seat Shampoo/Leather Seat Treatment",
      ],
      prices: { sedanCoupesCrossovers: 219.99, compactMidFullSUVsPickups: 239.99, fullSizeSUVsPickups: 259.99 },
      addOns: [
        "Pet Hair Removal",
        "Fabric & Textile Sealant",
        "Leather & Synthetic Interior Ceramic Coating"
      ]
    },
  
    // INT. & EXT. PACKAGES
    {
      id: "full-bronze",
      category: "Top2Bottom Detailing",
      name: "BRONZE",
      description: [
        "Interior Vacuuming",
        "Interior Window Cleaning", 
        "Dashboard, Door Panel & Center Console Wiping",
        "Carpet Shampoo",
        "Wheel & Tire Cleaning",
        "Door Jamb Cleaning",
        "Contact Washing",
        "Air Blow Drying"
      ],
      prices: { sedanCoupesCrossovers: 99.99, compactMidFullSUVsPickups: 119.99 }
    },
    {
      id: "full-gold",
      category: "Top2Bottom Detailing",
      name: "GOLD",
      description: [
        "Everything in BRONZE",
        "Floor & Carpet Detailing",
        "Steam Cleaning",
        "Air Vent, Button & Tight Space Detailing",
        "Pre-Rinse & Snow Foam Application",
        "Detailed Brush Cleaning",
        "Engine Bay Detailing",
        "Glass Cleaning & Tire Dressing",
        "Air Blow & Microfiber Towel Drying"
      ],
      prices: { sedanCoupesCrossovers: 199.99, compactMidFullSUVsPickups: 259.99 }
    },
    {
      id: "full-diamond",
      category: "Top2Bottom Detailing",
      name: "DIAMOND",
      description: [
        "Everything in GOLD",
        "Steering Wheel Deep Clean",
        "Headliner Detailing",
        "Fabric Seat Shampoo/Leather Seat Treatment",
        "Paint Decontamination",
        "Paint Sealant Application"
      ],
      prices: { sedanCoupesCrossovers: 369.99, compactMidFullSUVsPickups: 409.99 },
      addOns: [
        "Pet Hair Removal",
        "Fabric & Textile Sealant",
        "Leather & Synthetic Interior Ceramic Coating",
        "Paint Sealant",
        "Engine Bay Detailing"
      ]
    },
  
    // Paint Polish & PROTECTION PACKAGES
    {
      id: "paint-gold",
      category: "Paint Polish & Protection",
      name: "GOLD",
      description: [
        "STANDARD Exterior Detail",
        "Paint Decontamination",
        "Gloss Enhancer",
        "1-Year Graphene Ceramic Coating"
      ],
      prices: { sedanCoupesCrossovers: 499.99, compactMidFullSUVsPickups: 529.99, fullSizeSUVsPickups: 559.99 }
    },
    {
      id: "paint-platinum",
      category: "Paint Polish & Protection",
      name: "PLATINUM",
      description: [
        "STANDARD Exterior Detail",
        "Paint Decontamination",
        "One-Step Polish",
        "2-Year Ceramic Coating"
      ],
      prices: { sedanCoupesCrossovers: 899.99, compactMidFullSUVsPickups: 949.99, fullSizeSUVsPickups: 999.99 }
    },
    {
      id: "paint-diamond",
      category: "Paint Polish & Protection",
      name: "DIAMOND",
      description: [
        "ADVANCED Exterior Detail",
        "Paint Decontamination",
        "Paint Correction",
        "4-Year Ceramic Coating"
      ],
      prices: { sedanCoupesCrossovers: 1249.99, compactMidFullSUVsPickups: 1349.99, fullSizeSUVsPickups: 1599.99 },
      addOns: [
        "Wheel & Brake Caliper Ceramic Coating",
        "Windshield & Glass Ceramic Coating",
        "Plastics & Trim Ceramic Coating",
        "Leather & Synthetics Ceramic Coating"
      ]
    },
  
    // MAINTENANCE Packages
    {
      id: "maintenance-monthly",
      category: "Maintenance",
      name: "Monthly Refresh",
      description: [
        "BRONZE Top2Bottom Detailing Package",
        "This package is only offered to our loyal clients"
      ],
      prices: { sedanCoupesCrossovers: 79.99, compactMidFullSUVsPickups: 89.99 }
    },
    {
      id: "maintenance-ceramic",
      category: "Maintenance",
      name: "Ceramic Refresh (Every 4-6 Months)",
      description: [
        "STANDARD Interior Detailing Package",
        "ADVANCED Exterior Detailing Package",
        "Ceramic Coating Topper",
        "This package is only offered to our loyal clients"
      ],
      prices: { sedanCoupesCrossovers: 169.99, compactMidFullSUVsPickups: 199.99 }
    }
  ];
  