"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

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

  const spinAnimation = {
    rotate: -360,
    transition: {
      duration: 0.2,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop" as const,
    },
  };

  return (
    <Link href="/" className={className}>
      <div
        className="flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center justify-center w-24 h-24">
          <Image
            src="/images/d2dlogo.png"
            alt="Down2Detail Logo"
            width={logoWidth}
            height={logoHeight}
            className="object-contain"
            priority
          />
        </div>
        <span className={`${textSize} font-bold`}>
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
      </div>
    </Link>
  );
};

export default LogoWithSpinningDs;
