import { Service } from "@/data/services";
import Script from "next/script";

interface ServiceSEOProps {
  service: Service;
}

export default function ServiceSEO({ service }: ServiceSEOProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://down2detail.ca${service.href}#service`,
    name: service.label,
    description: service.description,
    image: `https://down2detail.ca${service.image}`,
    url: `https://down2detail.ca${service.href}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://down2detail.ca/#business",
      name: "Down2Detail",
      url: "https://down2detail.ca",
      telephone: "+1-438-483-8175",
      address: {
        "@type": "PostalAddress",
        addressCountry: "CA",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "Canada",
    },
    serviceType: "Auto Detailing",
    category: service.category || "Auto Detailing",
    offers: {
      "@type": "Offer",
      price: service.price.sedan,
      priceCurrency: service.currency,
      availability: "https://schema.org/InStock",
      validFrom: new Date().toISOString(),
      description: `${service.label} starting at ${service.price.sedan} ${service.currency} for sedans`,
      seller: {
        "@type": "LocalBusiness",
        "@id": "https://down2detail.ca/#business",
      },
    },
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
