"use client";

import Link from "next/link";
import Image from "next/image";
import { FormEvent, useState } from "react";
import FooterLink from "./ui/FooterLink";
import { services } from "../data/services";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";
import LogoWithSpinningDs from "./ui/LogoWithSpinningDs";

const Footer = () => {
  const [email, setEmail] = useState("");
  const pathname = usePathname();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="bg-background-light text-secondary-dark">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Logo à gauche */}
          <div className="lg:col-span-2 text-left">
            <div className="mb-6">
              <LogoWithSpinningDs
                logoWidth={80}
                logoHeight={80}
                textSize="text-2xl"
                className="inline-block"
              />
              <p className="text-secondary mb-4">
                Your trusted partner for all auto detailing needs.
              </p>
            </div>
          </div>

          {/* Our Links + Services à droite */}
          <div className="lg:col-span-2 flex flex-col sm:flex-row gap-12">
            {/* Our Links */}
            <div className="flex-1 text-left">
              <h3 className="text-xl font-semibold mb-6 relative after:absolute after:content-[''] after:w-12 after:h-1 after:bg-[#d6781c] after:bottom-0 after:left-0 pb-3">
                Our Links
              </h3>
              <ul className="space-y-3">
                {navigation.map((link) => (
                  <li key={link.href}>
                    <FooterLink
                      href={link.href}
                      className={
                        pathname === link.href ||
                        (link.href === "/services" &&
                          pathname.includes("/services"))
                          ? "text-[#d6781c]"
                          : ""
                      }
                    >
                      {link.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div className="flex-1 text-left">
              <h3 className="text-xl font-semibold mb-6 relative after:absolute after:content-[''] after:w-12 after:h-1 after:bg-[#d6781c] after:bottom-0 after:left-0 pb-3">
                Our Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                {services.map((service) => (
                  <FooterLink
                    key={service.href}
                    href={service.href}
                    className={
                      pathname === service.href ? "text-[#d6781c]" : ""
                    }
                  >
                    {service.label}
                  </FooterLink>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 mt-8 border-t border-gray-300 text-center">
          <p className="text-secondary">
            &copy; {new Date().getFullYear()} Down2Detail. All rights reserved.
          </p>
          <p className="text-secondary mt-2">
            Developed by{" "}
            <a
              href="https://www.tekmadev.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tekmadev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
