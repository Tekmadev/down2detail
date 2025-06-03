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
        "Wheels & tire Cleaning",
        "Door Jamb cleaning",
        "Contact Wash (2 bucket method)",
        "Blow dry"
      ],
      prices: { sedanCoupesCrossovers: 49, compactMidFullSUVsPickups: 69 }
    },
    {
      id: "exterior-standard",
      category: "Exterior Detailing",
      name: "STANDARD",
      description: [
        "Everything in BASIC",
        "Pre rinse & Snow Foam Apply",
        "Detailed brush Cleaning",
        "Blow & microfiber drying towel for drying",
        "Tire dressing & glass Cleaning"
      ],
      prices: { sedanCoupesCrossovers: 69, compactMidFullSUVsPickups: 89 }
    },
    {
      id: "exterior-advanced",
      category: "Exterior Detailing",
      name: "ADVANCED",
      description: [
        "Everything in STANDARD",
        "Paint Decontamination",
        "Spray Wax"
      ],
      prices: { sedanCoupesCrossovers: 129, compactMidFullSUVsPickups: 159 },
      addOns: ["Paint Sealant (Protection)", "Engine Bay Detail"]
    },
  
    // Interior Detailing
    {
      id: "interior-basic",
      category: "Interior Detailing",
      name: "BASIC",
      description: [
        "Interior Vacuuming",
        "Dashboard, door panels & center console wiped",
        "Windows cleaning inside"
      ],
      prices: { sedanCoupesCrossovers: 49, compactMidFullSUVsPickups: 59, fullSizeSUVsPickups: 69 }
    },
    {
      id: "interior-standard",
      category: "Interior Detailing",
      name: "STANDARD",
      description: [
        "Everything in BASIC",
        "Air Vents, buttons, small areas detail",
        "Floor & Carpets detail",
        "Steam Cleaning"
      ],
      prices: { sedanCoupesCrossovers: 149, compactMidFullSUVsPickups: 169, fullSizeSUVsPickups: 189 }
    },
    {
      id: "interior-advanced",
      category: "Interior Detailing",
      name: "ADVANCED",
      description: [
        "Everything in STANDARD",
        "Steering Wheel Deep Clean",
        "Fabric Seat Shampoo/Leather Seat Treatment",
        "Headliner Detail"
      ],
      prices: { sedanCoupesCrossovers: 219, compactMidFullSUVsPickups: 239, fullSizeSUVsPickups: 259 },
      addOns: [
        "Pet Hair Removal",
        "Fabric & Textile Sealant",
        "Interior Leather and Synthetic Ceramic Coating"
      ]
    },
  
    // INT. & EXT. PACKAGES
    {
      id: "full-bronze",
      category: "Interior & Exterior",
      name: "BRONZE",
      description: ["Basic Int.& Ext.", "Carpets Shampoo"],
      prices: { sedanCoupesCrossovers: 99, compactMidFullSUVsPickups: 119 }
    },
    {
      id: "full-gold",
      category: "Interior & Exterior",
      name: "GOLD",
      description: ["STANDARD Int.& Ext.", "Engine Bay Detail"],
      prices: { sedanCoupesCrossovers: 199, compactMidFullSUVsPickups: 259 }
    },
    {
      id: "full-diamond",
      category: "Interior & Exterior",
      name: "DIAMOND",
      description: [
        "ADVANCED Int. & Ext.",
        "Engine Bay Detail",
        "Paint Sealant apply Instead of Spray Wax"
      ],
      prices: { sedanCoupesCrossovers: 369, compactMidFullSUVsPickups: 409 },
      addOns: [
        "Pet Hair Removal",
        "Fabric & Textile Sealant",
        "Interior Leather and Synthetic Ceramic Coating",
        "Paint Sealant (Protection)",
        "Engine Bay Detail"
      ]
    },
  
    // Paint Polish & PROTECTION PACKAGES
    {
      id: "paint-gold",
      category: "Paint Polish & Protection",
      name: "GOLD",
      description: [
        "STANDARD Exterior detail",
        "Paint decontamination",
        "Gloss enhancer",
        "1 Year Graphene Ceramic"
      ],
      prices: { sedanCoupesCrossovers: 499, compactMidFullSUVsPickups: 529, fullSizeSUVsPickups: 559 }
    },
    {
      id: "paint-platinum",
      category: "Paint Polish & Protection",
      name: "PLATINUM",
      description: [
        "STANDARD Exterior detail",
        "Paint decontamination",
        "One Step Polish",
        "2 Years Ceramic"
      ],
      prices: { sedanCoupesCrossovers: 899, compactMidFullSUVsPickups: 949, fullSizeSUVsPickups: 999 }
    },
    {
      id: "paint-diamond",
      category: "Paint Polish & Protection",
      name: "DIAMOND",
      description: [
        "ADVANCED Exterior detail",
        "Paint Decontamination",
        "Paint Correction",
        "4 Years Ceramic"
      ],
      prices: { sedanCoupesCrossovers: 1249, compactMidFullSUVsPickups: 1349, fullSizeSUVsPickups: 1599 },
      addOns: [
        "Wheels & Calipers Ceramic Coating",
        "Windshield & Glass Ceramic Coating",
        "Plastics Ceramic Coating",
        "Leather & Synthetics Ceramic Coating"
      ]
    },
  
    // MAINTENANCE Packages
    {
      id: "maintenance-monthly",
      category: "Maintenance",
      name: "Monthly Basis",
      description: ["These packages are offered only to our loyal customers","(Int. & Ext.) Bronze Package"],
      prices: { sedanCoupesCrossovers: 79, compactMidFullSUVsPickups: 89 }
    },
    {
      id: "maintenance-ceramic",
      category: "Maintenance",
      name: "Ceramic Refresh",
      description: [
        "These offers are exclusively for customers who have shown their loyalty",
        "STANDARD Int. & ADVANCED Ext.",
        "Ceramic Coating Topper",
        "Every (4-6 months)"
      ],
      prices: { sedanCoupesCrossovers: 169, compactMidFullSUVsPickups: 199 }
    }
  ];
  