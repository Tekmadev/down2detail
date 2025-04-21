import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "exterior-wash-wax",
    title: "Exterior Wash & Wax",
    description:
      "Revitalize your vehicle's exterior with our meticulous detailing services, including paint correction, waxing, and professional sealant application for lasting shine and protection.",
    image: "/images/services/wash-wax.jpg",
    href: "/services/exterior-wash-wax",
  },
  {
    id: "interior-detailing",
    title: "Interior Detailing",
    description:
      "Experience a high-quality interior detailing service with our specialized stain extraction techniques. We'll target and remove stains from your carpets, fabric seats, and other surfaces.",
    image: "/images/services/interior-detailing.jpg",
    href: "/services/interior-detailing",
  },
  {
    id: "interior-exterior-detailing",
    title: "Int. & Ext. Detailing",
    description:
      "Our interior and exterior detailing service rejuvenates your car's interior and exterior.",
    image: "/images/services/full-detailing.jpg",
    href: "/services/interior-exterior-detailing",
  },
  {
    id: "gloss-enhancer",
    title: "Gloss Enhancer",
    description:
      "Enhance the appearance of your vehicle with our Deep Clean paint service, which eliminates stubborn contaminants like airborne compounds, brake dust, and rail dust while also boosting shine of the car.",
    image: "/images/services/gloss-enhancer.jpg",
    href: "/services/gloss-enhancer",
  },
  {
    id: "one-step-polish",
    title: "One Step Polish",
    description:
      "With our exceptional services, we can effectively eliminate 50%-70% of scratches and swirls, leaving your car with a flawless, glossy finish.",
    image: "/images/services/one-step-polish.jpg",
    href: "/services/one-step-polish",
  },
  {
    id: "paint-correction",
    title: "Paint Correction",
    description:
      "Elevate your vehicle's appearance with our professional auto detailing techniques and high-quality products, eliminating up to 90% of imperfections on your car's paint.",
    image: "/images/services/paint-correction.jpg",
    href: "/services/paint-correction",
  },
  {
    id: "ceramic-coating",
    title: "Ceramic Coating",
    description:
      "Experience the ultimate protection and enhancement for your car's paint, wheels, windows, plastics, and leathers with our advanced ceramic coating. Lasts up to 1–4 years.",
    image: "/images/services/ceramic-coating.jpg",
    href: "/services/ceramic-coating",
  },
  {
    id: "engine-bay-cleaning",
    title: "Engine Bay Cleaning",
    description:
      "Revitalize your car's engine bay with our expert cleaning service, eliminating any build-up of dirt, grease, and grime for a spotless and well-maintained appearance.",
    image: "/images/services/engine-bay.jpg",
    href: "/services/engine-bay-cleaning",
  },
  {
    id: "headlight-restoration",
    title: "Headlight Restoration",
    description:
      "Enhance visibility and aesthetics with our headlight restoration, addressing cloudiness and yellowing to improve both safety and the overall look of your vehicle.",
    image: "/images/services/headlight-restoration.jpg",
    href: "/services/headlight-restoration",
  },
  {
    id: "leather-seat-treatment",
    title: "Leather Seat Treatment",
    description:
      "Indulge in luxurious leather seat treatment, including thorough cleaning and conditioning to preserve your vehicle's leather upholstery.",
    image: "/images/services/leather-treatment.jpg",
    href: "/services/leather-seat-treatment",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary uppercase tracking-wider text-sm md:text-base font-medium mb-3">
            OUR SPECIALTIES
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-secondary">
            Premium Services For Your Car
          </h3>
          <div className="w-20 h-1 bg-[#d6781c] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 border-t-4 border-[#d6781c]">
                <h4 className="text-xl font-bold text-secondary mb-3">
                  {service.title}
                </h4>
                <p className="text-secondary-light mb-4">
                  {service.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-[#d6781c] font-medium hover:text-secondary transition-colors"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
