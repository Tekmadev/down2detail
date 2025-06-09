import { TFunction } from "i18next";

// Navigation translation keys mapping
export const navigationTranslationKeys: Record<string, string> = {
  Home: "navigation.home",
  "About Us": "navigation.about",
  Services: "navigation.services",
  Packages: "navigation.packages",
  "Ceramic Coating": "navigation.ceramicCoating",
  "Contact Us": "navigation.contact",
};

// Service label translation keys mapping
export const serviceTranslationKeys: Record<string, string> = {
  "Gloss Enhancer": "serviceLabels.glossEnhancer",
  "One-Step Polish": "serviceLabels.oneStepPolish",
  "Paint Correction": "serviceLabels.paintCorrection",
  "Int. & Ext. Detailing": "serviceLabels.interiorExteriorDetailing",
  "Engine Bay Cleaning": "serviceLabels.engineBayCleaning",
  "Exterior Detailing": "serviceLabels.exteriorDetailing",
  "Paint Decontamination": "serviceLabels.paintDecontamination",
  "Engine Bay Detailing": "serviceLabels.engineBayDetailing",
  "Headlight Restoration": "serviceLabels.headlightRestoration",
  "Headlight & Taillight Tint": "serviceLabels.headlightTaillightTint",
  "Interior Detailing": "serviceLabels.interiorDetailing",
  "Floor & Carpet Shampoo": "serviceLabels.floorCarpetShampoo",
  "Pet Hair Removal": "serviceLabels.petHairRemoval",
  "Fabric Seat Shampoo": "serviceLabels.fabricSeatShampoo",
  "Leather Seat Treatment": "serviceLabels.leatherSeatTreatment",
  "Paint Polish": "serviceLabels.paintPolish",
  "Ceramic Coating": "serviceLabels.ceramicCoating",
  "Paint Sealant": "serviceLabels.paintSealant",
  "Car Wax": "serviceLabels.carWax",
};

// Service subtitle translation keys mapping
export const serviceSubtitleTranslationKeys: Record<string, string> = {
  "Ultimate Paint Shine & Protection": "serviceSubtitles.ultimatePaintShine",
  "Swirl Removal & Gloss Enhancement": "serviceSubtitles.swirlRemovalGloss",
  "Multi-Stage Perfection & Showroom Finish":
    "serviceSubtitles.multiStagePerfection",
  "Complete Exterior Care & Protection":
    "serviceSubtitles.completeExteriorCare",
  "Shine Boost & Deep Paint Clean": "serviceSubtitles.shineBoostDeepClean",
  "Safe, Detailed & Protected": "serviceSubtitles.safeDetailedProtected",
  "More Than Just a Wash": "serviceSubtitles.moreThanJustWash",
  "Remove What Washing Can't": "serviceSubtitles.removeWhatWashingCant",
  "Comprehensive Engine Bay Cleaning":
    "serviceSubtitles.comprehensiveEngineBay",
  "Clarity, Safety & Style": "serviceSubtitles.claritySafetyStyle",
  "Style, Protection & Custom Look": "serviceSubtitles.styleProtectionCustom",
  "Deep Clean, Restore & Refresh Your Cabin":
    "serviceSubtitles.deepCleanRestoreRefresh",
  "Deep Extraction for a Spotless, Odor-Free Cabin":
    "serviceSubtitles.deepExtractionSpotless",
  "Deep Interior Clean for a Fur-Free Finish":
    "serviceSubtitles.deepInteriorClean",
  "Deep Clean, Sanitize & Refresh Your Upholstery":
    "serviceSubtitles.deepCleanSanitizeRefresh",
  "Clean, Condition & Protect for a Luxurious Finish":
    "serviceSubtitles.cleanConditionProtect",
  "Professional Paint Enhancement & Correction":
    "serviceSubtitles.professionalPaintEnhancement",
  "Elevate Your Vehicle's Defense": "serviceSubtitles.elevateVehicleDefense",
  "Synthetic Protection & Enhanced Gloss":
    "serviceSubtitles.syntheticProtectionGloss",
  "Traditional Wax Protection": "serviceSubtitles.traditionalWaxProtection",
};

// Service category translation keys mapping
export const serviceCategoryTranslationKeys: Record<string, string> = {
  Protection: "serviceCategories.protection",
  Correction: "serviceCategories.correction",
  Detailing: "serviceCategories.detailing",
  Enhancement: "serviceCategories.enhancement",
};

// Helper functions to get translated text
export const getTranslatedNavigation = (
  t: TFunction,
  originalLabel: string
): string => {
  const key = navigationTranslationKeys[originalLabel];
  return key ? t(key) : originalLabel;
};

export const getTranslatedServiceLabel = (
  t: TFunction,
  originalLabel: string
): string => {
  const key = serviceTranslationKeys[originalLabel];
  return key ? t(key, { ns: "services" }) : originalLabel;
};

export const getTranslatedServiceSubtitle = (
  t: TFunction,
  originalSubtitle: string
): string => {
  const key = serviceSubtitleTranslationKeys[originalSubtitle];
  return key ? t(key, { ns: "services" }) : originalSubtitle;
};

export const getTranslatedServiceCategory = (
  t: TFunction,
  originalCategory: string
): string => {
  const key = serviceCategoryTranslationKeys[originalCategory];
  return key ? t(key, { ns: "services" }) : originalCategory;
};
