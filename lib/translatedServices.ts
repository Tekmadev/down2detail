import { services, Service } from "@/data/services";
import i18n from "./i18n";
import { TFunction } from "i18next";

// Basic functions using global i18n (legacy support)
export function getBasicTranslatedServices(): Service[] {
  const currentLanguage = i18n.language || "en";
  // For now, return original services data
  // TODO: Implement full translation logic once all services are added to translation files
  return services;
}

export function getBasicTranslatedService(id: string): Service | undefined {
  const translatedServices = getBasicTranslatedServices();
  return translatedServices.find((service) => service.id === id);
}

export function getBasicTranslatedServicesByCategory(
  category: string
): Service[] {
  const translatedServices = getBasicTranslatedServices();
  return translatedServices.filter((service) => service.category === category);
}

export function getAllTranslatedServiceCategories(): string[] {
  const translatedServices = getBasicTranslatedServices();
  const categories = new Set<string>();

  translatedServices.forEach((service) => {
    if (service.category) {
      categories.add(service.category);
    }
  });

  return Array.from(categories);
}

// Advanced functions using passed t function for better translation control
export function getTranslatedService(
  originalService: Service,
  t: TFunction,
  namespace: string = "services"
): Service {
  // Check if this service has translation data
  const hasTranslation = t(
    `${namespace}:serviceData.${originalService.id}.label`,
    { defaultValue: null }
  );

  if (!hasTranslation) {
    // Return original service if no translation exists
    return originalService;
  }

  // Return service with translated content
  return {
    ...originalService,
    label: t(`${namespace}:serviceData.${originalService.id}.label`),
    subtitle: t(`${namespace}:serviceData.${originalService.id}.subtitle`),
    shortDescription: t(
      `${namespace}:serviceData.${originalService.id}.shortDescription`
    ),
    description: t(
      `${namespace}:serviceData.${originalService.id}.description`
    ),
    features: t(`${namespace}:serviceData.${originalService.id}.features`, {
      returnObjects: true,
    }) as string[],
    benefits: t(`${namespace}:serviceData.${originalService.id}.benefits`, {
      returnObjects: true,
    }) as string[],
    faqs:
      (t(`${namespace}:serviceData.${originalService.id}.faqs`, {
        returnObjects: true,
      }) as Array<{ question: string; answer: string }>) ||
      originalService.faqs ||
      [],
  };
}

// Get all services with translations applied
export function getTranslatedServices(
  originalServices: Service[],
  t: TFunction,
  namespace: string = "services"
): Service[] {
  return originalServices.map((service) =>
    getTranslatedService(service, t, namespace)
  );
}

// Get services by category with translations
export function getTranslatedServicesByCategory(
  originalServices: Service[],
  category: string,
  t: TFunction,
  namespace: string = "services"
): Service[] {
  const categoryServices = originalServices.filter(
    (service) => service.category === category
  );
  return getTranslatedServices(categoryServices, t, namespace);
}
