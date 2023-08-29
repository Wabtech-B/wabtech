"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { componentLinks } from "@/data/componentLinks";
import { usePathname } from "next/navigation";

const ComponentSidebar = () => {
  const pathname = usePathname();

  return (
    <div>
      <div className="component-sidebar lg:w-[250px] pl-6 fixed left-0 top-0 overflow-y-auto mt-14 hidden lg:block overflow-x-hidden">
        <ul className="list-none flex flex-col pt-6">
          {componentLinks.map((link) => {
            const isActive = pathname === link.url;
            return (
              <motion.div key={link.linkText} whileHover={{ scale: 1.1 }}>
                <Link
                  href={link.url}
                  className={`block py-1 text-muted hover:opacity-100 hover:text-zinc-950 dark:hover:text-white ${
                    isActive ? "!text-primary" : ""
                  }`}
                >
                  {link.linkText}
                </Link>
              </motion.div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ComponentSidebar;
