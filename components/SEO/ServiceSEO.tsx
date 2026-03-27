import { Service } from "@/data/services";
import Script from "next/script";

interface ServiceSEOProps {
  service: Service;
}

export default function ServiceSEO({ service }: ServiceSEOProps) {
  const isCeramicCoating = service.id === "ceramic-coating";
  const isPaintCorrection = service.id === "paint-correction";

  const structuredData: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://down2detail.ca${service.href}#service`,
    name: service.label,
    description: service.description,
    image: `https://down2detail.ca${service.image}`,
    url: `https://down2detail.ca${service.href}`,
    provider: {
      "@type": "AutoBodyShop",
      "@id": "https://down2detail.ca/#business",
      name: "Down2Detail",
      url: "https://down2detail.ca",
      telephone: "+1-438-483-8175",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4500 Bd Kimber",
        addressLocality: "Saint-Hubert",
        addressRegion: "QC",
        postalCode: "J3Y 8K5",
        addressCountry: "CA",
      },
    },
    areaServed: [
      { "@type": "City", name: "Montreal" },
      { "@type": "City", name: "Laval" },
      { "@type": "City", name: "Longueuil" },
    ],
    serviceType: service.category || "Auto Detailing",
    category: service.category || "Auto Detailing",
    offers: service.price.sedan !== "Package Pricing"
      ? {
          "@type": "Offer",
          price: service.price.sedan,
          priceCurrency: service.currency || "CAD",
          availability: "https://schema.org/InStock",
          validFrom: new Date().toISOString(),
          description: `${service.label} starting at $${service.price.sedan} CAD for sedans`,
          seller: {
            "@type": "AutoBodyShop",
            "@id": "https://down2detail.ca/#business",
          },
        }
      : undefined,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.label} Features`,
      itemListElement: service.features.map((feature, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: feature,
        },
      })),
    },
  };

  if (isCeramicCoating) {
    structuredData.isRelatedTo = {
      "@type": "Service",
      "@id": "https://down2detail.ca/services/paint-correction#service",
      name: "Paint Correction",
      description:
        "Essential prerequisite for optimal ceramic coating bonding. Removes paint defects before the coating is applied.",
    };
  }

  if (isPaintCorrection) {
    structuredData.isRelatedTo = {
      "@type": "Service",
      "@id": "https://down2detail.ca/ceramic-coating#service",
      name: "Ceramic Coating",
      description:
        "Recommended follow-up to paint correction. Ceramic coating protects and preserves the corrected finish for 2-5 years.",
    };
  }

  // FAQ Structured Data
  const faqStructuredData = service.faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <>
      {/* Service Structured Data */}
      <Script
        id={`service-structured-data-${service.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* FAQ Structured Data */}
      {faqStructuredData && (
        <Script
          id={`faq-structured-data-${service.id}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqStructuredData),
          }}
        />
      )}
    </>
  );
}
