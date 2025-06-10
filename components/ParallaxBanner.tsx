"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ParallaxBannerProps {
  imageUrl: string;
  title?: string;
  subtitle?: string;
  height?: string;
  overlayColor?: string;
  textColor?: string;
}

const ParallaxBanner: React.FC<ParallaxBannerProps> = ({
  imageUrl,
  title,
  subtitle,
  height = "80vh",
  overlayColor = "rgba(0, 0, 0, 0.4)",
  textColor = "white",
}) => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current && imageRef.current) {
        const rect = bannerRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(
          0,
          Math.min(
            1,
            (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
          )
        );

        // Calculate parallax offset - image moves slower than scroll
        const parallaxOffset = scrollProgress * 200 - 100; // Adjust multiplier for speed

        if (imageRef.current) {
          imageRef.current.style.transform = `translateY(${parallaxOffset}px) scale(1.1)`;
        }

        setScrollY(scrollProgress);
      }
    };

    // Initial call
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={bannerRef}
      className="relative overflow-hidden"
      style={{ height }}
    >
      {/* Background Image with Parallax Effect */}
      <div
        ref={imageRef}
        className="absolute inset-0 will-change-transform"
        style={{
          height: "120%", // Larger than container for parallax effect
          top: "-10%",
        }}
      >
        <Image
          src={imageUrl}
          alt="Parallax Banner"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: overlayColor }}
      />

      {/* Content */}
      {(title || subtitle) && (
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl mx-auto">
            {title && (
              <h2
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight leading-tight transform transition-all duration-1000 ease-out"
                style={{
                  color: textColor,
                  opacity: Math.max(0.3, 1 - scrollY * 0.8),
                  transform: `translateY(${scrollY * 50}px)`,
                }}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className="text-xl md:text-2xl lg:text-3xl font-medium opacity-90 transform transition-all duration-1000 ease-out"
                style={{
                  color: textColor,
                  opacity: Math.max(0.2, 1 - scrollY * 1.2),
                  transform: `translateY(${scrollY * 80}px)`,
                }}
              >
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div
          className="animate-bounce opacity-60"
          style={{
            opacity: Math.max(0, 0.6 - scrollY * 2),
          }}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ParallaxBanner;
