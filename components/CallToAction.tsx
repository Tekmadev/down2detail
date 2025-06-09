"use client";

import Button from "./ui/Button";
import { useI18n } from "@/hooks/useI18n";

const CallToAction = () => {
  const { t } = useI18n();
  return (
    <section className="py-16 md:py-24 bg-gray-900 relative overflow-hidden">
      {/* Background patterns with floating animations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 animate-float-1"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/3 translate-y-1/3 animate-float-2"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-white rounded-full animate-float-3"></div>
      </div>

      <style jsx>{`
        @keyframes float-1 {
          0%,
          100% {
            transform: translate(-50%, -50%) translateX(0px) translateY(0px);
          }
          25% {
            transform: translate(-50%, -50%) translateX(20px) translateY(-15px);
          }
          50% {
            transform: translate(-50%, -50%) translateX(-10px) translateY(-25px);
          }
          75% {
            transform: translate(-50%, -50%) translateX(-20px) translateY(10px);
          }
        }

        @keyframes float-2 {
          0%,
          100% {
            transform: translate(33%, 33%) translateX(0px) translateY(0px);
          }
          25% {
            transform: translate(33%, 33%) translateX(-30px) translateY(20px);
          }
          50% {
            transform: translate(33%, 33%) translateX(15px) translateY(30px);
          }
          75% {
            transform: translate(33%, 33%) translateX(25px) translateY(-15px);
          }
        }

        @keyframes float-3 {
          0%,
          100% {
            transform: translateX(0px) translateY(0px);
          }
          33% {
            transform: translateX(25px) translateY(-20px);
          }
          66% {
            transform: translateX(-15px) translateY(25px);
          }
        }

        .animate-float-1 {
          animation: float-1 8s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 12s ease-in-out infinite;
        }

        .animate-float-3 {
          animation: float-3 6s ease-in-out infinite;
        }
      `}</style>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {t("callToAction.title")}
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            {t("callToAction.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              variant="secondary"
              className="border-white text-white hover:bg-white hover:text-[#d6781c] min-w-[200px]"
            >
              {t("callToAction.buttons.getQuote")}
            </Button>
            <Button
              href="tel:+14384838175"
              variant="secondary"
              className="border-white text-white hover:bg-white hover:text-[#d6781c] min-w-[200px]"
            >
              {t("callToAction.buttons.callNow")}
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-white font-bold mb-2">
                {t("callToAction.features.freeConsultation.title")}
              </h3>
              <p className="text-white/80">
                {t("callToAction.features.freeConsultation.description")}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-white font-bold mb-2">
                {t("callToAction.features.detailedEstimate.title")}
              </h3>
              <p className="text-white/80">
                {t("callToAction.features.detailedEstimate.description")}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-white font-bold mb-2">
                {t("callToAction.features.qualityGuaranteed.title")}
              </h3>
              <p className="text-white/80">
                {t("callToAction.features.qualityGuaranteed.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
