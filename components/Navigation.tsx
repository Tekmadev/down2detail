"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "../data/navigation";
import NavLink from "./ui/NavLink";
import LogoWithSpinningDs from "./ui/LogoWithSpinningDs";
import { Menu, MenuItem, NavMenuLink, CategorySection } from "./ui/navbar-menu";
import { services } from "@/data/services";
import CalendlyPopText from "./CalendlyPopText";
import LanguageSwitcher from "./LanguageSwitcher";
import { useI18n } from "@/hooks/useI18n";
import {
  getTranslatedNavigation,
  getTranslatedServiceLabel,
  getTranslatedServiceCategory,
} from "@/lib/translations";

const Navigation = () => {
  const { t } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [openCategory, setOpenCategory] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
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

  const handleMobileItemClick = (category: string) => {
    if (activeItem === category) {
      setActiveItem(null);
    } else {
      setActiveItem(category);
    }
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      overflow: "hidden",
    },
    visible: {
      opacity: 1,
      height: "auto",
      overflow: "visible",
      transition: {
        duration: 0.3,
      },
    },
  };

  const SousCategory = (category: string) => {
    setOpenCategory((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 shadow-lg shadow-gray-800 py-4 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <LogoWithSpinningDs logoWidth={90} logoHeight={90} />

        <div className="hidden xl:flex items-center space-x-6  ">
          <Menu setActive={handleSetActive}>
            {navigation.map((item) => {
              if (item.label !== "Services") {
                return (
                  <NavLink key={item.href} href={item.href}>
                    {getTranslatedNavigation(t, item.label)}
                  </NavLink>
                );
              }
              if (item.label === "Services") {
                return (
                  <MenuItem
                    key={item.href}
                    setActive={handleSetActive}
                    active={activeItem}
                    item={item.label}
                    label={getTranslatedNavigation(t, item.label)}
                    href={item.href}
                  >
                    <div className="flex flex-col gap-4 min-w-[250px] p-4 bg-gray-800 ">
                      {Object.entries(servicesByCategory).map(
                        ([category, categoryServices]) => (
                          <div
                            key={category}
                            className="space-y-2 border-b border-gray-800 last:border-0 pb-3 last:pb-0"
                          >
                            <div
                              className="font-semibold text-secondary cursor-pointer hover:text-[#d6781c] flex items-center justify-between group transition-all duration-200"
                              onClick={() => SousCategory(category)}
                            >
                              <span>
                                {getTranslatedServiceCategory(t, category)}
                              </span>
                              <svg
                                className={`h-4 w-4 transition-transform duration-200 ${
                                  openCategory[category] ? "rotate-180" : ""
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>

                            <AnimatePresence>
                              {openCategory[category] && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="mt-2 pl-4 border-l-2 border-[#d6781c]"
                                >
                                  {categoryServices.map((service) => (
                                    <NavMenuLink
                                      key={service.href}
                                      href={service.href}
                                      className="block py-2 text-sm text-white hover:text-[#d6781c] transition-colors duration-200"
                                    >
                                      {getTranslatedServiceLabel(
                                        t,
                                        service.label
                                      )}
                                    </NavMenuLink>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        )
                      )}
                    </div>
                  </MenuItem>
                );
              }
            })}
            <CalendlyPopText />
          </Menu>
          <LanguageSwitcher />
        </div>
        <div className="xl:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-secondary focus:outline-none p-2"
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
            className="xl:hidden px-4 pt-2 pb-4"
          >
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => {
                if (item.label !== "Services") {
                  return (
                    <NavLink
                      key={item.href}
                      href={item.href}
                      isMobile
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {getTranslatedNavigation(t, item.label)}
                    </NavLink>
                  );
                }

                if (item.label == "Services") {
                  return (
                    <div key={item.href} className="space-y-2">
                      <div className="text-secondary hover:text-[#d6781c] font-medium transition-colors flex items-center justify-between cursor-pointer py-2">
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {getTranslatedNavigation(t, item.label)}
                        </Link>
                        <button
                          onClick={() => handleMobileItemClick(item.label)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-4 w-4 transition-transform ${
                              activeItem === item.label ? "rotate-180" : ""
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      </div>

                      <AnimatePresence>
                        {activeItem === item.label && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={dropdownVariants}
                            className="pl-4 border-l-2 border-[#d6781c] mt-2 overflow-hidden"
                          >
                            {Object.entries(servicesByCategory).map(
                              ([category, categoryServices]) => (
                                <div key={category} className="space-y-2 mb-4">
                                  <h4 className="font-semibold text-secondary">
                                    {getTranslatedServiceCategory(t, category)}
                                  </h4>
                                  <div className="space-y-2 pl-2">
                                    {categoryServices.map((service) => (
                                      <Link
                                        key={service.href}
                                        href={service.href}
                                        className="text-secondary hover:text-[#d6781c] block py-1 transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        {getTranslatedServiceLabel(
                                          t,
                                          service.label
                                        )}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              )
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return null;
              })}
              <CalendlyPopText />

              {/* Language Switcher - Mobile Only */}
              <div className="flex justify-center mt-4 pt-4 border-t border-gray-700">
                <LanguageSwitcher />
              </div>

              {/* Contact Icons - Mobile Only */}
              <div className="flex justify-center space-x-4 mt-4 pt-4 border-t border-gray-700">
                {/* Phone */}
                <a
                  href="tel:+14384838175"
                  className="bg-green-500 rounded-full w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity text-white"
                  title="Call us: +1 438 483 8175"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
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
                </a>

                {/* Email */}
                <a
                  href="mailto:down2detail.ca@gmail.com"
                  className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity text-white"
                  title="Email us: down2detail.ca@gmail.com"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/people/Down2Detail/61577327687487/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#3b5998] rounded-full w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity text-white"
                  title="Follow us on Facebook"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/down2detail.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity text-white"
                  title="Follow us on Instagram"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
