import { DetailPackage } from "@/data/packages";

export function getTranslatedPackage(packageData: DetailPackage, t: (key: string) => string): DetailPackage {
  return {
    ...packageData,
    category: t(`packageCategories.${packageData.category}`) || packageData.category,
    name: t(`packageNames.${packageData.name}`) || packageData.name,
    description: packageData.description.map((item, index) => 
      t(`packageDescriptions.${packageData.id}.${index}`) || item
    ),
    addOns: packageData.addOns?.map((addon, index) => 
      t(`packageAddOns.${packageData.id}.${index}`) || addon
    ),
    label: packageData.label ? t(`packageLabels.${packageData.label}`) || packageData.label : undefined,
    badge: packageData.badge ? t(`packageBadges.${packageData.badge}`) || packageData.badge : undefined,
  };
}
