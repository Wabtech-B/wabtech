"use client";
import { FiArrowLeft, FiMenu } from "react-icons/fi";
import { useState } from "react";
import Drawer from "@/components/wabtech/drawer/Drawer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { componentLinks } from "../../data/componentLinks";

const MobileComponentSidebar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <div
        className="fixed left-2 border dark:border-zinc-500 shadow-lg shadow-primary/50 top-1/2 -translate-y-1/2 z-20 cursor-pointer w-10 h-10 bg-slate-200 dark:bg-zinc-700 hover:bg-slate-300 dark:hover:bg-zinc-800 rounded-lg grid place-items-center"
        onClick={() => setIsDrawerOpen(true)}
      >
        <div className="arrow">
          <FiArrowLeft />
        </div>
      </div>
      <Drawer
        size="small"
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <ul className="list-none flex flex-col pl-4 component-drawer">
          {componentLinks.map((link) => {
            const isActive = pathname === link.url;
            return (
              <li key={link.linkText}>
                <Link
                  href={link.url}
                  className={`block py-1 text-muted hover:opacity-100 hover:text-zinc-950 dark:hover:text-white ${
                    isActive ? "active" : ""
                  }`}
                  onClick={() => setIsDrawerOpen(false)}
                >
                  {link.linkText}
                </Link>
              </li>
            );
          })}
        </ul>
      </Drawer>
    </div>
  );
};

export default MobileComponentSidebar;
