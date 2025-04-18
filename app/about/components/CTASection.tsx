import Link from "next/link";

export default function CTASection() {
    return (
        <section className="py-16 md:py-24 bg-[#d6781c]/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
          Ready to Transform Your Space?
        </h2>
        <p className="text-xl text-secondary/80 max-w-2xl mx-auto mb-8">
          Whether you're dreaming of a new floor, planning a kitchen renovation,
          or considering a complete home transformation, we're here to bring
          your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-3 bg-[#d6781c] text-white font-medium rounded-lg hover:bg-[#c2410c] transition-colors duration-300"
          >
            Get a Free Consultation
          </Link>
          <Link
            href="/gallery"
            className="px-8 py-3 border-2 border-[#d6781c] text-[#d6781c] font-medium rounded-lg hover:bg-[#d6781c] hover:text-white transition-colors duration-300"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
    )
}

