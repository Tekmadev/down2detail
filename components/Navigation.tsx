"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "../data/navigation";
import NavLink from "./ui/NavLink";
import LogoWithSpinningDs from "./ui/LogoWithSpinningDs";
import { Menu, MenuItem, NavMenuLink, CategorySection } from "./ui/navbar-menu";
import { services } from "@/data/services";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const servicesByCategory = services.reduce((acc, service) => {
    const category = service.category || "Other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(service);
    return acc;
  }, {} as Record<string, typeof services>);

  const handleSetActive = (item: string | null) => {
    setActiveItem(item);
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.2 } },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  };

  return (
    <nav className="bg-white shadow-md py-4 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-left">
        <LogoWithSpinningDs logoWidth={90} logoHeight={90} />

        <div className="hidden md:flex items-center space-x-6 ">
          <Menu setActive={handleSetActive}>
            {navigation.map((item) => {
              if (item.label !== "Services") {
                return (
                  <NavLink key={item.href} href={item.href}>
                    {item.label}
                  </NavLink>
                )
              }
              // SErvice dropdown
              if (item.label === "Services") {
                return (
                  <MenuItem 
                  key={item.href} 
                  setActive={handleSetActive}
                  active={activeItem}
                  item={item.label}
                  label={item.label}
                  >
                    <div className="grid grid-cols-2 gap-6 min-w-[400px]">
                      {Object.entries(servicesByCategory).map(
                        ([category, categoryServices]) => (
                          <CategorySection key={category} title={category}>
                            {categoryServices.map((service) => (
                              <NavMenuLink
                                key={service.href}
                                href={service.href}
                              >
                                {service.label}
                              </NavMenuLink>
                            ))}
                          </CategorySection>
                        )
                      )}
                    </div>
                  </MenuItem>
                );
              }
            })}
            <Link
              href="/book"
              className="ml-4 px-5 py-2 bg-[#535251] text-white rounded-md hover:bg-[#161616] transition"
            >
              Book Now
            </Link>
          </Menu>
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
