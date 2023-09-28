"use client";

import React, { Dispatch, SetStateAction } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navbarLinks } from "@/data/navbarLinks";
import { dropdownVariants } from "@/utils/dropdownVariants";
import Link from "next/link";

interface MobileNavbarProps {
  isNavbarMenuOpen: boolean;
  setIsNavbarMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  setIsNavbarMenuOpen,
  isNavbarMenuOpen,
}) => {
  const pathname = usePathname();
  return (
    <div>
      {isNavbarMenuOpen && (
        <motion.ul
          className="z-30 absolute top-10 left-0 w-full p-4 border-b dark:border-b-0 mt-4 md:hidden flex flex-col space-y-2 bg-white dark:bg-zinc-700"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={dropdownVariants}
        >
          {navbarLinks.map((link) => {
            let isActive = pathname === link.url; // Check for exact match first

            if (!isActive) {
              if (
                link.url.startsWith("/components") &&
                pathname.startsWith("/components")
              ) {
                isActive = true; // Check for "/components" and its sub-routes
              } else if (
                pathname.startsWith(link.url) &&
                link.url !== "/components"
              ) {
                isActive = true; // Check for other links and their sub-routes
              }
            }

            return (
              <li key={link.linkText}>
                <Link
                  href={link.url}
                  className={`${isActive ? "text-primary" : ""}`}
                  onClick={() => setIsNavbarMenuOpen(false)}
                >
                  {link.linkText}
                </Link>
              </li>
            );
          })}
        </motion.ul>
      )}
    </div>
  );
};

export default MobileNavbar;
