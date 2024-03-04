"use client";

import { sidebarLinks } from "@/constants/sidebarLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="fixed w-[250px] left-0 h-screen top-16 p-4 border-r border-r-border hidden lg:block">
      <ul>
        {sidebarLinks.map((link) => {
          const isActive =
            pathname === link.url ||
            (pathname.startsWith(link.url) && link.url !== "/dashboard");
          return (
            <li key={link.linkText}>
              <Link
                href={link.url}
                className={`py-3 flex-align-center ${
                  isActive ? "text-brand" : ""
                }`}
              >
                <div>{link.icon}</div>
                <span className="ml-2">{link.linkText}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
