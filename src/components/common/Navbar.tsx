"use client";
import { FiArrowRight, FiMonitor, FiMoon, FiSun } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import { useRef } from "react";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import Dropdown from "@/components/wabtech/dropdown/Dropdown";
import Drawer from "@/components/wabtech/drawer/Drawer";
import Button from "@/components/wabtech/button/Button";
import useDarkMode from "@/components/wabtech/hooks/useDarkmode/useDarkMode";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const { mode, handleModeChange } = useDarkMode("darkModePreference");
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  const [isNavbarMenuOpen, setIsNavbarMenuOpen] = useState(false);
  const pathname = usePathname();
  const commandButtonRef = useRef(null);
  const handleClick = () => {
    const event = new KeyboardEvent("keydown", {
      ctrlKey: true,
      key: "k",
    });

    document.dispatchEvent(event);
  };

  const navbarLinks = [
    {
      linkText: "Components",
      url: "/components/getting-started",
    },
    {
      linkText: "Hooks",
      url: "/hooks",
    },
    {
      linkText: "Templates",
      url: "/templates",
    },
    {
      linkText: "Blog",
      url: "/blog",
    },
    {
      linkText: "Contact",
      url: "/contact",
    },
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <nav className="fixed w-full top-0 left-0 bg-white/80 border-b dark:border-b-zinc-800 dark:bg-zinc-900/80 backdrop-blur-sm px-4 md:px-8 h-14 z-20">
      <div className="flex-center-between">
        <Link
          href="/components/getting-started"
          className="my-4 flex-align-center"
        >
          <Image src="/logo.png" alt="" width={40} height={40} />
          <h1 className="text-2xl font-bold">Wabtech</h1>
        </Link>
        <div className="flex-align-center gap-x-10">
          <ul className="hidden md:flex ml-6 space-x-4 navbar-links">
            {navbarLinks.map((link) => {
              const isActive = pathname === link.url;
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

          <div className="flex-align-center gap-x-4">
            {/* Theme toggle */}
            <Dropdown
              general
              className="!w-[200px] p-4 !mt-2 dark:!border-zinc-600"
              trigger={
                <div className="w-10 h-10 bg-slate-200 dark:bg-zinc-700 hover:bg-slate-300 dark:hover:bg-zinc-800 rounded-lg grid place-items-center">
                  <FiSun />
                </div>
              }
            >
              <div>
                <div
                  className={`flex items-center gap-x-3 p-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-zinc-700 rounded-md ${
                    mode === "light" ? "!bg-primary text-white" : ""
                  }`}
                  onClick={() => handleModeChange("light")}
                >
                  <FiSun />
                  <p>Light</p>
                </div>
                <div
                  className={`mt-1 flex items-center gap-x-3 p-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-zinc-700 rounded-md ${
                    mode === "dark" ? "!bg-primary text-white" : ""
                  }`}
                  onClick={() => handleModeChange("dark")}
                >
                  <FiMoon />
                  <p>Dark</p>
                </div>
                <div
                  className={`mt-1 flex items-center gap-x-3 p-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-zinc-700 rounded-md ${
                    mode === "system" ? "!bg-primary text-white" : ""
                  }`}
                  onClick={() => handleModeChange("system")}
                >
                  <FiMonitor />
                  <p>System</p>
                </div>
              </div>
            </Dropdown>

            {/* Sign in button */}
            <a href="#" className="btn btn-primary flex-align-center gap-x-2">
              <span> Sign in</span>
              <FiArrowRight />
            </a>

            {/* Drawer */}
            <div className="lg:hidden">
              <div
                className="cursor-pointer w-10 h-10 bg-slate-200 dark:bg-zinc-700 hover:bg-slate-300 dark:hover:bg-zinc-800 rounded-lg grid place-items-center"
                onClick={() => setIsNavbarMenuOpen(!isNavbarMenuOpen)}
              >
                <FiMenu />
              </div>
              <Drawer
                size="small"
                isOpen={isDrawerOpen}
                onClose={() => setisDrawerOpen(false)}
              >
                <ul className="list-none flex flex-col pl-4 component-drawer">
                  {navbarLinks.map((link) => {
                    const isActive = pathname === link.url;
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
              </Drawer>
            </div>

            <Button
              buttonRef={commandButtonRef}
              className="hidden shadow shadow-primary/30 md:flex"
              variant="outlined"
              onClick={handleClick}
              icon={<BiSearchAlt />}
            >
              Ctrl + k
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isNavbarMenuOpen && (
        <motion.ul
          className="absolute top-10 left-0 w-full p-4 border-b dark:border-b-0 mt-4 md:hidden flex flex-col space-y-2 bg-white dark:bg-zinc-700"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={dropdownVariants}
        >
          {navbarLinks.map((link) => (
            <li key={link.linkText}>
              <Link href={link.url}>{link.linkText}</Link>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
