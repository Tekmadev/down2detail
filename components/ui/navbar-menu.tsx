"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  label,
  href,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  label?: string;
  href?: string;
  children?: React.ReactNode;
}) => {
  const [dropdownPosition, setDropdownPosition] = useState<
    "center" | "left" | "right"
  >("center");
  const menuItemRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle click for touch devices
  const handleClick = (e: React.MouseEvent) => {
    if (active !== item) {
      e.preventDefault();
      setActive(item);
    }
  };

  // Handle mouse enter on menu item
  const handleMenuMouseEnter = () => {
    // Clear any pending timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActive(item);
  };

  // Handle mouse leave from menu item or dropdown
  const handleMouseLeave = () => {
    // Set a timeout to close the menu
    timeoutRef.current = setTimeout(() => {
      setActive(null);
    }, 150);
  };

  // Handle mouse enter on dropdown
  const handleDropdownMouseEnter = () => {
    // Clear any pending timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // Calculate position of dropdown when it becomes active
  useEffect(() => {
    if (active === item && menuItemRef.current) {
      const rect = menuItemRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;

      // Calculate how much space we have on either side
      const spaceOnLeft = rect.left;
      const spaceOnRight = windowWidth - rect.right;

      // Default to center alignment
      let newPosition: "center" | "left" | "right" = "center";

      // If we're close to the right edge
      if (spaceOnRight < 200) {
        newPosition = "right";
      }
      // If we're close to the left edge
      else if (spaceOnLeft < 200) {
        newPosition = "left";
      }

      setDropdownPosition(newPosition);
    }
  }, [active, item]);

  // Cleanup timeouts when component unmounts
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Generate the right transform class based on position
  const getTransformClass = () => {
    switch (dropdownPosition) {
      case "left":
        return "left-0 transform-none";
      case "right":
        return "right-0 transform-none";
      case "center":
      default:
        return "left-1/2 transform -translate-x-1/2";
    }
  };

  return (
    <div
      ref={menuItemRef}
      className="relative"
      onMouseEnter={handleMenuMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {href ? (
        <Link href={href} className="block">
          <div
            className="cursor-pointer text-secondary hover:text-[#d6781c] font-medium transition-colors relative group pb-1"
            onClick={(e) => {
              if (active !== item) {
                // Just toggle dropdown on click if not navigating
                setActive(item);
              }
            }}
          >
            {label || item}
            <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#d6781c] group-hover:w-full group-hover:left-0 transition-all duration-300 ease-in-out" />
          </div>
        </Link>
      ) : (
        <div
          className="cursor-pointer text-secondary hover:text-[#d6781c] font-medium transition-colors relative group pb-1"
          onClick={handleClick}
        >
          {label || item}
          <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#d6781c] group-hover:w-full group-hover:left-0 transition-all duration-300 ease-in-out" />
        </div>
      )}
      <AnimatePresence>
        {active === item && (
          <motion.div
            key={`dropdown-${item}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
            transition={transition}
            className={`absolute top-full ${getTransformClass()} z-[1000] mt-2`}
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              transition={transition}
              layoutId="dropdown"
              className="bg-gray-800 rounded-md overflow-hidden border border-gray-700 shadow-xl max-h-[80vh] overflow-y-auto"
            >
              <motion.div layout className="w-max h-full p-4">
                {children}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return <div className="flex items-center space-x-8">{children}</div>;
};

export const NavMenuLink = ({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={`text-secondary hover:text-[#d6781c] transition-colors py-1 block ${className}`}
    >
      {children}
    </Link>
  );
};

export const BlogPostItem = ({
  title,
  description,
  href,
  src,
  date,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
  date: string;
}) => {
  return (
    <Link href={`/blog/${href}`} className="flex space-x-3 group">
      <div className="w-16 h-16 relative rounded-md overflow-hidden flex-shrink-0">
        <Image
          src={src}
          fill
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-secondary group-hover:text-[#d6781c] transition-colors">
          {title}
        </h4>
        <p className="text-xs text-secondary-light line-clamp-2">
          {description}
        </p>
        <p className="text-xs text-secondary-light">
          {new Date(date).toLocaleDateString()}
        </p>
      </div>
    </Link>
  );
};

export const CategorySection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="mb-4">
      <h3 className="text-sm font-bold text-secondary mb-2">{title}</h3>
      <div className="space-y-1">{children}</div>
    </div>
  );
};
