import { getAllServiceCategories, services } from "@/data/services";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Services | Down2Detail",
  description: "Down2Detail offers premium car detailing services designed to restore and protect your vehicle inside and out. From deep interior cleaning to professional exterior polishing, we treat every car with the care it deserves."
}

export default function ServiePage(){
  const categories = getAllServiceCategories();

  return (
    <div className="bg-background min-h-screen  bg-black/10">
      <div className="relative bg-secondary py-20 md:py-28">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div  className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              <span className="text-[#d6781c] drop-shadow-[0_0_10px_rgba(214,120,28,0.6)]"> Our Professional Services</span>
            </h1>
            <p className="bg-gradient-to-r from-[#d6781c] to-yellow-400 bg-clip-text text-transparent">
              From deep interior cleaning to professional exterior polishing,
              we treat every car with the care it deserves. 
            </p>
          </div>
        </div>
      </div>
      {/* Services par Categorie */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        {categories.map((category) => (
          <div key={category} className="mb-16 last:mb-0">
            <h2 className="text-3xl font-bold text-primary mb-8 border-b border-primary/20 pb-2">
              {category} Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services
                .filter((service) => service.category === category)
                .map((service)=>(
                  <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-68">
                      <Image
                        src={service.imageShowcase}
                        alt={service.label}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        {service.label}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <Link
                          href={service.href}
                          className="inline-flex items-center font-medium text-[#3b82f6] hover:text-[#6b7280] transition-colors"
                        >
                          Learn More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-1"
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
        ))}   
      </div>
      {/*section Action */}
      <div className="bg-secondary text-[#292524] py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">
                    Ready to Start Your Project?
                </h2>
                <p className="max-w-2xl mx-auto mb-8 text-[#292524]">
                  Contact us today for a free consultation and quote on your next car detailing service.
                  Our team is ready to make your vehicle shine — inside and out.
                </p>
                <Link
                    href="/contact"
                    className="inline-block bg-[#dc7419] hover:bg-[#c66812] text-white drop-shadow-[0_0_10px_rgba(214,120,28,0.6)] font-medium py-3 px-8 rounded-md transition-colors duration-300"
                >
                    Contact Us
                </Link>
            </div>
        </div>
    </div>
  );

}