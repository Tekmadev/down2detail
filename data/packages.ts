export interface AddOnDetail {
  name: string;
  price?: number; // undefined means "Contact for pricing"
  priceDisplay?: string; // overrides price display when set (e.g., "$59–$129")
}

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
  addOnDetails?: AddOnDetail[];
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
  // Exterior & Interior Detail (Combined)
  {
    id: "full-essential",
    category: "Exterior & Interior Detail",
    name: "ESSENTIAL",
    description: [
      "Wheel & Tire Cleaning",
      "Hand Wash",
      "Door Jamb Cleaning",
      "Interior Vacuum",
      "Interior Wipe Down",
      "Winter Mats Cleaning",
      "Windows & Glass Cleaning",
    ],
    prices: {
      sedanCoupesCrossovers: 99,
      compactMidFullSUVsPickups: 119,
      fullSizeSUVsPickups: 139,
    },
    addOnDetails: [
      { name: "Odor Treatment", price: 29 },
      { name: "Pet Hair Removal", priceDisplay: "$59–$129" },
      { name: "Fabric & Textile Sealant", price: 49 },
      { name: "Leather & Synthetic Ceramic Coating", price: 149 },
      { name: "Paint Decontamination (Clay Treatment)", price: 25 },
      { name: "Paint Sealant (up to 3 months)", price: 25 },
    ],
  },
  {
    id: "full-signature",
    category: "Exterior & Interior Detail",
    name: "SIGNATURE",
    description: [
      "Essential Included",
      "Detailed Brush Cleaning",
      "Tire Dressing",
      "Floor & Carpet Shampoo",
    ],
    prices: {
      sedanCoupesCrossovers: 249,
      compactMidFullSUVsPickups: 269,
      fullSizeSUVsPickups: 299,
    },
    addOnDetails: [
      { name: "Odor Treatment", price: 29 },
      { name: "Pet Hair Removal", priceDisplay: "$59–$129" },
      { name: "Fabric & Textile Sealant", price: 49 },
      { name: "Leather & Synthetic Ceramic Coating", price: 149 },
      { name: "Paint Decontamination (Clay Treatment)", price: 25 },
      { name: "Paint Sealant (up to 3 months)", price: 25 },
    ],
  },
  {
    id: "full-elite",
    category: "Exterior & Interior Detail",
    name: "ELITE",
    description: [
      "Signature Included",
      "Pre Rinse & Snow Foam Application",
      "Engine Bay Detail",
      "Fabric Seat Shampoo / Leather Seat Treatment",
    ],
    prices: {
      sedanCoupesCrossovers: 399,
      compactMidFullSUVsPickups: 449,
      fullSizeSUVsPickups: 499,
    },
    addOnDetails: [
      { name: "Odor Treatment", price: 29 },
      { name: "Pet Hair Removal", priceDisplay: "$59–$129" },
      { name: "Fabric & Textile Sealant", price: 49 },
      { name: "Leather & Synthetic Ceramic Coating", price: 149 },
      { name: "Paint Decontamination (Clay Treatment)", price: 25 },
      { name: "Paint Sealant (up to 3 months)", price: 25 },
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
    id: "paint-silver",
    category: "Paint Polish & Protection",
    name: "SILVER",
    description: [
      "Hand Wash",
      "Paint Decontamination",
      "Gloss Enhancer (Fine Machine Polish)",
      "Paint Sealant (up to 3 months)",
    ],
    prices: {
      sedanCoupesCrossovers: 349,
      compactMidFullSUVsPickups: 399,
      fullSizeSUVsPickups: 449,
    },
    addOnDetails: [
      { name: "1-Year Paint Ceramic Coating", price: 99 },
      { name: "2-Year Paint Ceramic Coating", price: 149 },
      { name: "3-Year Paint Ceramic Coating", price: 249 },
      { name: "8-Year Paint Ceramic Coating", price: 499 },
      { name: "Wheel & Brake Caliper Ceramic Coating" },
      { name: "Windshields & Glass Ceramic Coating", price: 149 },
      { name: "Plastics & Trim Ceramic Coating" },
      { name: "Leather & Synthetics Ceramic Coating" },
    ],
  },
  {
    id: "paint-gold",
    category: "Paint Polish & Protection",
    name: "GOLD",
    description: [
      "Hand Wash",
      "Paint Decontamination",
      "One-Step Polish (Light Swirls Removed — ~50–60% defect removal)",
      "Paint Sealant (up to 3 months)",
    ],
    prices: {
      sedanCoupesCrossovers: 699,
      compactMidFullSUVsPickups: 799,
      fullSizeSUVsPickups: 899,
    },
    addOnDetails: [
      { name: "1-Year Paint Ceramic Coating", price: 99 },
      { name: "2-Year Paint Ceramic Coating", price: 149 },
      { name: "3-Year Paint Ceramic Coating", price: 249 },
      { name: "8-Year Paint Ceramic Coating", price: 499 },
      { name: "Wheel & Brake Caliper Ceramic Coating" },
      { name: "Windshields & Glass Ceramic Coating", price: 149 },
      { name: "Plastics & Trim Ceramic Coating" },
      { name: "Leather & Synthetics Ceramic Coating" },
    ],
  },
  {
    id: "paint-platinum",
    category: "Paint Polish & Protection",
    name: "PLATINUM",
    description: [
      "Hand Wash",
      "Paint Decontamination",
      "2-Step Paint Correction (Rotary + Wool Pad, DA + Foam Pad — ~90% defect removal)",
      "Paint Sealant (up to 3 months)",
    ],
    prices: {
      sedanCoupesCrossovers: 999,
      compactMidFullSUVsPickups: 1199,
      fullSizeSUVsPickups: 1399,
    },
    badge: "Most Popular",
    addOnDetails: [
      { name: "1-Year Paint Ceramic Coating", price: 99 },
      { name: "2-Year Paint Ceramic Coating", price: 149 },
      { name: "3-Year Paint Ceramic Coating", price: 249 },
      { name: "8-Year Paint Ceramic Coating", price: 499 },
      { name: "Wheel & Brake Caliper Ceramic Coating" },
      { name: "Windshields & Glass Ceramic Coating", price: 149 },
      { name: "Plastics & Trim Ceramic Coating" },
      { name: "Leather & Synthetics Ceramic Coating" },
    ],
  },
  {
    id: "paint-diamond",
    category: "Paint Polish & Protection",
    name: "DIAMOND",
    description: [
      "Hand Wash",
      "Paint Decontamination",
      "3-Step Paint Correction (Rotary + Wool Pad, DA + Microfibre, DA + Foam — ~95–99% defect removal)",
      "1-Year Paint Ceramic Coating",
    ],
    prices: {
      sedanCoupesCrossovers: 1699,
      compactMidFullSUVsPickups: 1999,
      fullSizeSUVsPickups: 2399,
    },
    addOnDetails: [
      { name: "2-Year Paint Ceramic Coating Upgrade", price: 149 },
      { name: "3-Year Paint Ceramic Coating Upgrade", price: 249 },
      { name: "8-Year Paint Ceramic Coating Upgrade", price: 499 },
      { name: "Wheel & Brake Caliper Ceramic Coating" },
      { name: "Windshields & Glass Ceramic Coating", price: 149 },
      { name: "Plastics & Trim Ceramic Coating" },
      { name: "Leather & Synthetics Ceramic Coating" },
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
