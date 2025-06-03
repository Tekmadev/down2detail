import Image from "next/image";

export default function Approach() {
    return (
        <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
                <span className="text-sm font-medium text-[#d6781c] uppercase tracking-wider">
                Our Process
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2 mb-6">
                The Down2Detail Difference
                </h2>
                <p className="text-secondary/90 mb-8">
                At Down2Detail, it's not just about cleaning cars, it's about
                delivering a meticulous, high-end experience that protects and
                elevates your vehicle. Our refined process ensures your car looks
                and feels its absolute best, every time.
                </p>

                <div className="space-y-6">
                <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-[#d6781c] flex items-center justify-center text-white font-bold">
                        1
                    </div>
                    </div>
                    <div className="ml-4">
                    <h3 className="text-lg font-semibold text-secondary mb-2">
                        Initial Inspection
                    </h3>
                    <p className="text-secondary/80">
                        We perform a full assessment of your vehicle's condition —
                        identifying paint defects, interior wear, and contamination
                        levels before recommending the ideal service.
                    </p>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-[#d6781c] flex items-center justify-center text-white font-bold">
                        2
                    </div>
                    </div>
                    <div className="ml-4">
                    <h3 className="text-lg font-semibold text-secondary mb-2">
                        Deep Cleaning
                    </h3>
                    <p className="text-secondary/80">
                        Using industry-grade tools and products, we perform
                        high-pressure washes, foam treatments, decontamination, and
                        stain extractions inside and out.
                    </p>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-[#d6781c] flex items-center justify-center text-white font-bold">
                        3
                    </div>
                    </div>
                    <div className="ml-4">
                    <h3 className="text-lg font-semibold text-secondary mb-2">
                        Paint Correction & Polishing
                    </h3>
                    <p className="text-secondary/80">
                        We eliminate swirl marks, scratches, and oxidation through
                        multi-stage polishing, restoring depth, clarity, and gloss
                        to your vehicle's finish.
                    </p>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-[#d6781c] flex items-center justify-center text-white font-bold">
                        4
                    </div>
                    </div>
                    <div className="ml-4">
                    <h3 className="text-lg font-semibold text-secondary mb-2">
                        Protection & Coating
                    </h3>
                    <p className="text-secondary/80">
                        We apply high-performance sealants or ceramic coatings to
                        lock in the shine, protect the paint, and ensure long-term
                        durability.
                    </p>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-[#d6781c] flex items-center justify-center text-white font-bold">
                        5
                    </div>
                    </div>
                    <div className="ml-4">
                    <h3 className="text-lg font-semibold text-secondary mb-2">
                        Final Touch & Delivery
                    </h3>
                    <p className="text-secondary/80">
                        Every vehicle goes through a final inspection and touch-up
                        before we return it to you — looking brand new and ready to
                        turn heads.
                    </p>
                    </div>
                </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <Image
                src="/images/services-detailing/interior.jpeg"
                alt="Interior Detailing"
                width={300}
                height={400}
                className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <Image
                src="images/services-detailing/paint.jpg"
                alt="Paint Correction"
                width={300}
                height={350}
                className="rounded-lg shadow-md w-full h-auto object-cover mt-12"
                />
                <Image
                src="images/services-detailing/cleaning-engine.webp"
                alt="Ceramic Coating"
                width={300}
                height={400}
                className="rounded-lg shadow-md w-full h-auto object-cover mt-12"
                />
                <Image
                src="/images/services-detailing/gloss.jpg"
                alt="Engine Bay Detailing"
                width={300}
                height={350}
                className="rounded-lg shadow-md w-full h-auto object-cover"
                />
            </div>
            </div>
        </div>
        </section>
  );
}