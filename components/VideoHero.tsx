"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/hooks/useI18n";

interface VideoHeroProps {
  // Video sources - easily switchable between local and Firebase
  videoSources?: {
    webm?: string;
    mp4: string;
  };
  // Fallback image while video loads
  fallbackImage: string;
  // Firebase storage URL (for future use)
  firebaseVideoUrl?: string;
}

const VideoHero = ({
  videoSources = {
    mp4: "/videos/hero-video.mp4", // Updated to new compressed video
    webm: "/videos/hero-video.webm", // Optional WebM version for better compression
  },
  fallbackImage = "/images/Auto-Detailing.png",
  firebaseVideoUrl,
}: VideoHeroProps) => {
  const { t } = useI18n();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Lazy loading with Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVideoVisible) {
            setIsVideoVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVideoVisible]);

  // Handle video ready to play
  const handleCanPlay = () => {
    setIsVideoLoaded(true);
    setHasError(false);
  };

  // Handle video load error
  const handleVideoError = () => {
    setHasError(true);
    setIsVideoLoaded(false);
  };

  // Determine video source (Firebase or local)
  const getVideoSource = () => {
    if (firebaseVideoUrl) {
      return firebaseVideoUrl;
    }
    return videoSources.mp4;
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-[85vh] w-full flex items-center justify-center text-center px-4 overflow-hidden"
    >
      {/* Fallback Image - Always present, hidden when video loads */}
      <Image
        src={fallbackImage}
        alt="Hero Background"
        fill
        className={`object-cover z-0 transition-opacity duration-1000 ${
          isVideoLoaded ? "opacity-0" : "opacity-100"
        }`}
        priority
      />

      {/* Video Background - Fix z-index */}
      {isVideoVisible && !hasError && (
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          loop
          muted
          playsInline // Important for mobile autoplay
          preload="metadata" // Optimized for smaller file
          onCanPlay={handleCanPlay}
          onError={handleVideoError}
        >
          {/* WebM source for better compression (if available) */}
          {videoSources.webm && (
            <source src={videoSources.webm} type="video/webm" />
          )}
          {/* MP4 fallback */}
          <source src={getVideoSource()} type="video/mp4" />
          Your browser does not support the video tag - showing fallback image.
        </video>
      )}

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/30 z-20"></div>

      {/* Content */}
      <div className="relative z-30 max-w-3xl text-white">
        <h2 className="uppercase tracking-wider text-sm md:text-base text-primary mb-3">
          {t("hero.tagline")}
        </h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {t("hero.title")}
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-xl mx-auto mb-8">
          {t("hero.subtitle")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="inline-flex items-center bg-[#d6781c] hover:bg-[#c66812] text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[180px]"
          >
            {t("hero.ctaBook")}
            <svg
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
            </svg>
          </Link>

          <Link
            href="tel:+14384838175"
            className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-[#292524] font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 min-w-[180px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {t("hero.ctaCall")}
          </Link>
        </div>

        {/* Subtle loading indicator for better UX */}
        {isVideoVisible && !isVideoLoaded && !hasError && (
          <div className="absolute top-4 right-4 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              {t("hero.loading")}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoHero;
