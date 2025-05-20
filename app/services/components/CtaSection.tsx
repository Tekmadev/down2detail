import Link from "next/link"
export function CtaSection() {
    return (
        <div className="bg-gradient-to-r from-secondary via-secondary/95 to-secondary py-20 relative overflow-hidden">
            {/* Effet de fond décoratif */}
            <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"></div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#292524]">
                    Ready to Transform Your Car?
                </h2>
                <p className="max-w-2xl mx-auto mb-10 text-[#292524]/90 text-lg leading-relaxed">
                    Our team of experienced professionals is ready to help you with your{" "}
                    needs. Contact us today for a consultation.
                </p>
                <Link
                    href="/contact"
                    className="inline-block bg-[#d6781c] hover:bg-[#c66812] text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                    Contact Us
                </Link>
            </div>
        </div>
    );
}