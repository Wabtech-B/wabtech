"use client";

import Link from "next/link";
import { navbarLinks } from "@/data/navbarLinks";
import { usePathname } from "next/navigation";

const NavbarLinks = () => {
  const pathname = usePathname();
  return (
    <div>
      <ul className="hidden md:flex ml-6 space-x-4 navbar-links">
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
              >
                {link.linkText}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavbarLinks;
