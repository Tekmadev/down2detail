import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";

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
                  src={service.imageShowcase}
                  alt={service.id}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 border-t-4 border-[#423838]">
                <h4 className="text-xl font-bold text-secondary mb-3">
                  {service.label}
                </h4>
                <p className="text-secondary-light mb-4">
                  {service.id === "carpet-cleaning" ? (
                    <>
                      {service.description}
                      <a
                        href={service.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#d6781c] font-medium hover:underline"
                      >
                        {service.href}
                      </a>
                      {" for specialized cleaning services."}
                    </>
                  ) : (
                    service.description
                  )}
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
