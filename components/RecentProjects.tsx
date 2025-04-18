import Link from "next/link";
import Button from "./ui/Button";
import Image from "next/image";


const projects = [
    {
      id: "black-suv-ceramic",
      title: "Ceramic Coating on Black SUV",
      category: "Ceramic Coating",
      image: "/images/car-detailing.jpeg",
      description:
        "Applied a high-gloss ceramic coating to a luxury SUV, providing long-lasting protection and enhanced shine.",
    },
    {
      id: "interior-deep-clean",
      title: "Interior Deep Cleaning",
      category: "Interior Detailing",
      image: "/images/Auto-detailing.png",
      description:
        "Full interior detailing including steam cleaning, stain removal, and leather conditioning for a refreshed cabin.",
    },
    {
      id: "paint-correction-sedan",
      title: "Paint Correction on Sedan",
      category: "Paint Correction",
      image: "/images/Auto-detailing.png",
      description:
        "Eliminated 90% of swirl marks and scratches on a black sedan using multi-stage correction and polishing.",
    },
    {
      id: "engine-bay-refresh",
      title: "Engine Bay Refresh",
      category: "Engine Detailing",
      image: "/images/Auto-detailing.png",
      description:
        "Degreased and detailed the engine bay for a spotless and professional finish under the hood.",
    },
  ];  


const RecentProjects = () => {
    return (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-primary uppercase tracking-wider text-sm md:text-base font-medium mb-3">
                RECENT PROJECTS
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-secondary">
                Our Craftsmanship in Action
              </h3>
              <div className="w-20 h-1 bg-[#d6781c] mx-auto mt-6"></div>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                    index === 0 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                >
                  <div
                    className={`relative ${
                      index === 0 ? "h-[600px]" : "h-[300px]"
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80"></div>
    
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <span className="inline-block px-3 py-1 bg-[#d6781c] text-white text-sm font-medium rounded-full mb-3">
                        {project.category}
                      </span>
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h4>
                      <p className="text-white/80 mb-4 line-clamp-2">
                        {project.description}
                      </p>
    
                      <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <Link
                          href={`/projects/${project.id}`}
                          className="inline-block text-white hover:text-[#d6781c] font-medium transition-colors"
                        >
                          View Project Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
    
            <div className="text-center mt-12">
              <Button href="/projects" variant="primary">
                VIEW ALL PROJECTS
              </Button>
            </div>
          </div>
        </section>
    );
};

export default RecentProjects;
