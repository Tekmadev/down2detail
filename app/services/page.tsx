'use client'

import { getAllServiceCategories, services } from "@/data/services";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const metadata = {
  title: "Our Services | Down2Detail",
  description: "Down2Detail offers premium car detailing services designed to restore and protect your vehicle inside and out. From deep interior cleaning to professional exterior polishing, we treat every car with the care it deserves."
} 

export default function ServiePage(){
  const categories = getAllServiceCategories();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-secondary py-32 md:py-40 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d6781c]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#d6781c]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-0"></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-block mb-6 animate-fade-in">
              <span className="px-4 py-2 bg-[#d6781c]/10 text-[#d6781c] rounded-full text-sm font-medium border border-[#d6781c]/20">
                Premium Car Detailing Services
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight">
              <span className="relative">
                <span className="text-[#d6781c] drop-shadow-[0_0_15px_rgba(214,120,28,0.6)]">Our Professional</span>
                <span className="block mt-2 bg-gradient-to-r from-[#d6781c] via-yellow-400 to-[#d6781c] bg-clip-text text-transparent">
                  Services
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              From deep interior cleaning to professional exterior polishing,
              we treat every car with the care it deserves. Experience the difference
              with our premium detailing services.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center bg-[#d6781c] hover:bg-[#c66812] text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
                <svg 
                  className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services par Categorie */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        {categories.map((category, index) => (
          <motion.div 
            key={category} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-16 last:mb-0"
          >
            <h2 className="text-3xl font-bold text-primary mb-8 border-b border-primary/20 pb-2">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services
                .filter((service) => service.category === category)
                .map((service, serviceIndex) => (
                  <motion.div 
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-68 overflow-hidden">
                      <Image
                        src={service.imageShowcase}
                        alt={service.label}
                        fill
                        className="object-cover transform hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        {service.label}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {service.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <Link
                          href={service.href}
                          className="inline-flex items-center font-medium text-[#3b82f6] hover:text-[#d6781c] transition-colors group"
                        >
                          Learn More
                          <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            whileHover={{ x: 5 }}
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </motion.svg>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}   
      </div>

      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#292524] to-transparent my-16"></div>

      {/*section Action */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-[#d6781c]/10 via-[#d6781c]/5 to-[#d6781c]/10 py-16 relative overflow-hidden"
      >
        {/* Effet de particules */}
        <div className="absolute inset-0">
          <motion.div 
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#d6781c]/5 rounded-full blur-3xl"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2 
            {...fadeInUp}
            className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#292524] to-[#d6781c] bg-clip-text text-transparent"
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p 
            {...fadeInUp}
            className="max-w-2xl mx-auto mb-8 text-[#292524]"
          >
            Contact us today for a free consultation and quote on your next car detailing service.
            Our team is ready to make your vehicle shine — inside and out.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center bg-[#d6781c] hover:bg-[#c66812] text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contact Us
              <motion.svg 
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </motion.svg>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}