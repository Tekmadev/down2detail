"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface LogoWithSpinningDsProps {
  logoWidth?: number;
  logoHeight?: number;
  textSize?: string;
  className?: string;
}

const LogoWithSpinningDs = ({
  logoWidth = 90,
  logoHeight = 90,
  textSize = "text-3xl",
  className = "",
}: LogoWithSpinningDsProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const spinAnimation = {
    rotate: -360,
    transition: {
      duration: 0.2,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop" as const,
    },
  };

  // Only render motion animations after component is mounted
  const renderText = () => {
    if (!isMounted) {
      return (
        <span className={`font-bold`} style={{ fontSize: "2.1rem", marginBottom: "-10px" }}>
          <span className="text-[#FF4C00]">D</span>
          own2
          <span className="text-[#FF4C00]">D</span>
          etail
        </span>
      );
    }

    return (
      <span className={`font-bold`} style={{ fontSize: "2.1rem", marginBottom: "-10px" }}>
        {isHovered ? (
          <motion.span
            className="text-[#FF4C00] inline-block"
            initial={{ rotate: 0 }}
            animate={spinAnimation}
          >
            D
          </motion.span>
        ) : (
          <span className="text-[#FF4C00]">D</span>
        )}
        own2
        {isHovered ? (
          <motion.span
            className="text-[#FF4C00] inline-block"
            initial={{ rotate: 0 }}
            animate={spinAnimation}
          >
            D
          </motion.span>
        ) : (
          <span className="text-[#FF4C00]">D</span>
        )}
        etail
      </span>
    );
  };

  return (
    <Link href="/" className={className} suppressHydrationWarning>
      <div
        className="flex items-end gap-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-end justify-center w-16 h-16 -mr-1 md:-mr-2">
          <Image
            src="/images/d2dlogo.png"
            alt="Down2Detail Logo"
            width={logoWidth * 0.7}
            height={logoHeight * 0.7}
            className="object-contain"
            priority
          />
        </div>
        {renderText()}
      </div>
    </Link>
  );
};

export default LogoWithSpinningDs;
