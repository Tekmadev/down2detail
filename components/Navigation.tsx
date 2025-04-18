"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "../data/navigation";
import NavLink from "./ui/NavLink";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.2 } },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  };

  return (
    <nav className="bg-white shadow-md py-4 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-left">
        <Link href="/" className="flex items-center">
          <div className="relative w-32 h-18 flex items-center">
            <Image
              src="/images/Logo.png"
              alt="Down2Detail Logo"
              width={90}
              height={105}
              className="object-contain"
              priority
            />
          </div>
        </Link>

        
        <div className="hidden md:flex items-center space-x-6 ">
          {navigation.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
          <Link
            href="/book"
            className="ml-4 px-5 py-2 bg-[#535251] text-white rounded-md hover:bg-[#161616] transition"
            >
            Book Now
        </Link>
        </div>

        
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-secondary focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="md:hidden px-4 pt-2 pb-4"
          >
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  isMobile
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
