"use client";
import { FiMenu } from "react-icons/fi";
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
        className="fixed right-0 top-20 z-20 cursor-pointer w-10 h-10 bg-slate-200 dark:bg-zinc-700 hover:bg-slate-300 dark:hover:bg-zinc-800 rounded-lg grid place-items-center"
        onClick={() => setIsDrawerOpen(true)}
      >
        <FiMenu />
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
