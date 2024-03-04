"use client";

import Drawer from "@/components/drawer";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants/sidebarLinks";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const MobileDrawer = () => {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div>
      <div className="lg:hidden">
        <Button
          size="icon"
          variant="outline"
          className="ml-2 w-8 h-8 sm:w-10 sm:h-10"
          onClick={() => setIsDrawerOpen(true)}
        >
          <MenuIcon className="w-[1.2rem] h-[1.2rem] text-slate-500 " />
        </Button>
        <Drawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          size="small"
        >
          <ul className="ml-4">
            {sidebarLinks.map((link) => {
              const isActive = pathname === link.url;
              return (
                <li key={link.linkText}>
                  <Link
                    href={link.url}
                    className={`py-3 flex-align-center ${
                      isActive ? "text-brand" : ""
                    }`}
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    <div>{link.icon}</div>
                    <span className="ml-2">{link.linkText}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Drawer>
      </div>
    </div>
  );
};

export default MobileDrawer;
