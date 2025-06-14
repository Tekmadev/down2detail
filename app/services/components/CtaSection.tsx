"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useI18n } from "@/hooks/useI18n";

export function CtaSection() {
  const { t } = useI18n("common");
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const pulse = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 py-24 relative overflow-hidden">
      {/* Effet de fond décoratif */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        //className="absolute inset-0 bg-[url('/images/pattern.png')]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent"
      />

      {/* Effet de particules */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#d6781c]/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.8, 0.5, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#d6781c]/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          {...fadeInUp}
          className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100"
        >
          <motion.h2
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6 pb-2 leading-tight bg-gradient-to-r from-[#292524] to-[#d6781c] bg-clip-text text-transparent"
          >
            {t("ctaSection.title")}
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="max-w-2xl mx-auto mb-10 text-[#292524]/90 text-lg leading-relaxed"
          >
            {t("ctaSection.description")}
          </motion.p>
          <motion.div
            {...fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center bg-[#d6781c] hover:bg-[#c66812] text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {t("ctaSection.buttons.contactUs")}
                <motion.svg
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </motion.svg>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/services"
                className="inline-flex items-center bg-white hover:bg-gray-50 text-[#292524] font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                {t("ctaSection.buttons.viewServices")}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
