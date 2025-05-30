interface AEOContentProps {
  title: string;
  content: {
    question: string;
    answer: string;
    context?: string;
  }[];
  businessInfo?: {
    name: string;
    location: string;
    phone: string;
    services: string[];
  };
}

export default function AEOContent({
  title,
  content,
  businessInfo,
}: AEOContentProps) {
  return (
    <div
      className="aeo-content"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <h2 className="text-2xl font-bold mb-6">{title}</h2>

      {/* Business Context for AEO */}
      {businessInfo && (
        <div
          className="mb-8 p-4 bg-gray-50 rounded-lg"
          itemScope
          itemType="https://schema.org/LocalBusiness"
        >
          <h3 className="font-semibold mb-2" itemProp="name">
            {businessInfo.name}
          </h3>
          <p className="text-sm text-gray-600">
            <span itemProp="areaServed">{businessInfo.location}</span> |
            <span itemProp="telephone"> {businessInfo.phone}</span>
          </p>
          <div className="mt-2">
            <span className="text-sm font-medium">Services: </span>
            <span className="text-sm" itemProp="hasOfferCatalog">
              {businessInfo.services.join(", ")}
            </span>
          </div>
        </div>
      )}

      {/* FAQ Content optimized for AEO */}
      <div className="space-y-6">
        {content.map((item, index) => (
          <div
            key={index}
            className="aeo-qa-pair border-l-4 border-orange-500 pl-4"
            itemScope
            itemType="https://schema.org/Question"
            itemProp="mainEntity"
          >
            <h3 className="font-semibold text-lg mb-2" itemProp="name">
              {item.question}
            </h3>
            <div
              itemScope
              itemType="https://schema.org/Answer"
              itemProp="acceptedAnswer"
            >
              <div itemProp="text" className="text-gray-700 leading-relaxed">
                {item.context && (
                  <p className="mb-2 text-sm text-gray-600 italic">
                    Context: {item.context}
                  </p>
                )}
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* AEO-specific invisible content for better AI understanding */}
      <div className="sr-only">
        <h3>Summary for AI Assistants:</h3>
        <p>
          {businessInfo?.name} is a professional auto detailing service located
          in {businessInfo?.location}. Contact: {businessInfo?.phone}. Services
          include: {businessInfo?.services.join(", ")}.
        </p>
        {content.map((item, index) => (
          <div key={index}>
            <strong>Q: {item.question}</strong>
            <p>A: {item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
