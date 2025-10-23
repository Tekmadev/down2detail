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
  discountedPrice?: {
    sedanCoupesCrossovers: number;
    compactMidFullSUVsPickups: number;
    fullSizeSUVsPickups?: number;
  };
  addOns?: string[];
  label?: string;
  badge?: string;
}

export const packages: DetailPackage[] = [
  // Exterior Detailing
  // {
  //   id: "exterior-basic",
  //   category: "Exterior",
  //   name: "BASIC",
  //   description: [
  //     "Wheel & Tire Cleaning",
  //     "Door Jamb Cleaning",
  //     "Contact Washing",
  //     "Air Blow Drying",
  //   ],
  //   prices: { sedanCoupesCrossovers: 49.99, compactMidFullSUVsPickups: 69.99 },
  // },
  {
    id: "exterior-standard",
    category: "Exterior",
    name: "STANDARD",
    description: [
      "Wheel & Tire Detailing",
      "Pre-Rinse & Snow Foam Application",
      "Professional Contact Washing",
      "Detailed Brush Cleaning",
      "Door Jamb Degreasing",
      "Air Blow & Microfiber Towel Drying",
      "Tire Dressing",
      "Window & Glass Cleaning",
    ],
    prices: { sedanCoupesCrossovers: 49.99, compactMidFullSUVsPickups: 59.99, fullSizeSUVsPickups: 59.99 },
  },
  {
    id: "exterior-advanced",
    category: "Exterior",
    name: "ADVANCED",
    description: [
      "STANDARD Package Included",
      "Paint Decontamination",
      "Iron Removal Treatment",
      "Clay Treatment",
      "Paint Sealant Protection (up to 3 months)",
    ],
    prices: {
      sedanCoupesCrossovers: 149.99,
      compactMidFullSUVsPickups: 169.99,
      fullSizeSUVsPickups: 169.99,
    },
    addOns: ["Paint Sealant", "Engine Bay Detailing"],
  },

  // Interior Detailing
  {
    id: "interior-basic",
    category: "Interior",
    name: "BASIC",
    description: [
      "Interior Vacuuming",
      "Interior Wipe Down",
      "Wipe Down Cup Holders",
      "Floor Mat Cleaning",
      "Interior Window & Glass Cleaning",
    ],
    prices: {
      sedanCoupesCrossovers: 49.99,
      compactMidFullSUVsPickups: 59.99,
      fullSizeSUVsPickups: 69.99,
    },
  },
  {
    id: "interior-standard",
    category: "Interior",
    name: "STANDARD",
    description: [
      "BASIC Package Included",
      "Steam Cleaning",
      "Air Vent, Button & Tight Space Detailing",
      "Floor & Carpet Shampoo",
    ],
    prices: {
      sedanCoupesCrossovers: 189.99,
      compactMidFullSUVsPickups: 219.99,
      fullSizeSUVsPickups: 249.99,
    },
  },
  {
    id: "interior-advanced",
    category: "Interior",
    name: "ADVANCED",
    description: [
      "STANDARD Package Included",
      "Steering Wheel Deep Clean",
      "Headliner Detailing",
      "Fabric Seat Shampoo/Leather Seat Treatment",
      "Salt Removal",
    ],
    prices: {
      sedanCoupesCrossovers: 269.99,
      compactMidFullSUVsPickups: 299.99,
      fullSizeSUVsPickups: 369.99,
    },
    addOns: [
      "Pet Hair Removal",
      "Fabric & Textile Sealant",
      "Leather & Synthetic Interior Ceramic Coating",
    ],
  },

  // INT. & EXT. PACKAGES
  // {
  //   id: "full-bronze",
  //   category: "Top2Bottom Detailing",
  //   name: "BRONZE",
  //   description: [
  //     "Interior Vacuuming",
  //     "Interior Window Cleaning",
  //     "Dashboard, Door Panel & Center Console Wiping",
  //     "Carpet Shampoo",
  //     "Wheel & Tire Cleaning",
  //     "Door Jamb Cleaning",
  //     "Contact Washing",
  //     "Air Blow Drying",
  //   ],
  //   prices: { sedanCoupesCrossovers: 99.99, compactMidFullSUVsPickups: 119.99 },
  // },
  // {
  //   id: "full-gold",
  //   category: "Top2Bottom Detailing",
  //   name: "GOLD",
  //   description: [
  //     "Everything in BRONZE",
  //     "Floor & Carpet Detailing",
  //     "Steam Cleaning",
  //     "Air Vent, Button & Tight Space Detailing",
  //     "Pre-Rinse & Snow Foam Application",
  //     "Detailed Brush Cleaning",
  //     "Engine Bay Detailing",
  //     "Glass Cleaning & Tire Dressing",
  //     "Air Blow & Microfiber Towel Drying",
  //   ],
  //   prices: {
  //     sedanCoupesCrossovers: 199.99,
  //     compactMidFullSUVsPickups: 259.99,
  //   },
  // },
  // {
  //   id: "full-diamond",
  //   category: "Top2Bottom Detailing",
  //   name: "DIAMOND",
  //   description: [
  //     "Everything in GOLD",
  //     "Steering Wheel Deep Clean",
  //     "Headliner Detailing",
  //     "Fabric Seat Shampoo/Leather Seat Treatment",
  //     "Paint Decontamination",
  //     "Paint Sealant Application",
  //   ],
  //   prices: {
  //     sedanCoupesCrossovers: 369.99,
  //     compactMidFullSUVsPickups: 409.99,
  //   },
  //   addOns: [
  //     "Pet Hair Removal",
  //     "Fabric & Textile Sealant",
  //     "Leather & Synthetic Interior Ceramic Coating",
  //     "Paint Sealant",
  //     "Engine Bay Detailing",
  //   ],
  // },

  // Paint Polish & PROTECTION PACKAGES
  {
    id: "paint-gold",
    category: "Paint Polish & Protection",
    name: "GOLD",
    description: [
      "Hand Wash Detailing",
      "Iron Removal",
      "Paint Decontamination",
      "Gloss Enhancer",
      "1-Year Graphene Ceramic Coating",
      "Front Windshield Ceramic Coating",
    ],
    prices: {
      sedanCoupesCrossovers: 729.99,
      compactMidFullSUVsPickups: 789.99,
      fullSizeSUVsPickups: 839.99,
    },
    discountedPrice: {
      sedanCoupesCrossovers: 649.99,
      compactMidFullSUVsPickups: 719.99,
      fullSizeSUVsPickups: 779.99,
    },
  },
  {
    id: "paint-platinum",
    category: "Paint Polish & Protection",
    name: "PLATINUM",
    description: [
      "Hand Wash Detailing",
      "Iron Removal",
      "Paint Decontamination",
      "One-Step Polish",
      "4-Year Ceramic Coating",
      "Front Windshield Ceramic Coating",
    ],
    prices: {
      sedanCoupesCrossovers: 1199.99,
      compactMidFullSUVsPickups: 1289.99,
      fullSizeSUVsPickups: 1339.99,
    },
    discountedPrice: {
      sedanCoupesCrossovers: 999.99,
      compactMidFullSUVsPickups: 1099.99,
      fullSizeSUVsPickups: 1199.99,
    },
    badge: "Most Popular",
  },
  {
    id: "paint-diamond",
    category: "Paint Polish & Protection",
    name: "DIAMOND",
    description: [
      "Hand Wash Detailing",
      "Iron Removal",
      "Paint Decontamination",
      "Paint Correction",
      "5-Year Ceramic Coating",
      "Front Windshield Ceramic Coating",
    ],
    prices: {
      sedanCoupesCrossovers: 1499.99,
      compactMidFullSUVsPickups: 1609.99,
      fullSizeSUVsPickups: 1769.99,
    },
    discountedPrice: {
      sedanCoupesCrossovers: 1199.99,
      compactMidFullSUVsPickups: 1289.99,
      fullSizeSUVsPickups: 1339.99,
    },
    addOns: [
      "Wheel & Brake Caliper Ceramic Coating",
      "Windshield & Glass Ceramic Coating",
      "Plastics & Trim Ceramic Coating",
      "Leather & Synthetics Ceramic Coating",
    ],
  },

  // MAINTENANCE Packages
  {
    id: "maintenance-monthly",
    category: "Monthly Plans",
    name: "Monthly Refresh",
    label: "Loyalty Program",
    description: [
      "BASIC Exterior Package",
      "STANDARD Interior Package",
      "Summer Carpet/Winter Mat Detailing",
      "This package is only offered to our loyal clients",
    ],
    prices: { sedanCoupesCrossovers: 99.99, compactMidFullSUVsPickups: 119.99, fullSizeSUVsPickups: 119.99 },
  },
  {
    id: "maintenance-ceramic",
    category: "Monthly Plans",
    name: "Ceramic Refresh (Every 4-6 Months)",
    label: "Loyalty Program",
    description: [
      "ADVANCED Exterior Package",
      "STANDARD Interior Package",
      "Ceramic Coating Topper",
      "This package is only offered to our loyal clients",
    ],
    prices: {
      sedanCoupesCrossovers: 199.99,
      compactMidFullSUVsPickups: 219.99,
      fullSizeSUVsPickups: 219.99,
    },
  },
];
