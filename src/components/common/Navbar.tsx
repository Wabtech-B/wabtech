"use client";

import { FiArrowRight, FiSun, FiMonitor, FiMoon } from "react-icons/fi";
import Dropdown from "@/components/wabtech/dropdown/Dropdown";
import Link from "next/link";
import Image from "next/image";
import NavbarLinks from "./NavbarLinks";
import MobileToggleButton from "./MobileToggleButton";
import SearchButton from "./SearchButton";
import MobileNavbar from "./MobileNavbar";
import useDarkMode from "../wabtech/hooks/useDarkmode/useDarkMode";
import { useState } from "react";

const Navbar = () => {
  const { mode, handleModeChange } = useDarkMode("darkModePreference");
  const [isNavbarMenuOpen, setIsNavbarMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 bg-white/80 border-b dark:border-b-zinc-800 dark:bg-zinc-900/80 backdrop-blur-sm px-2 md:px-8 h-14 z-20">
      <div className="flex-center-between">
        <Link href="/" className="my-4 flex-align-center">
          <Image src="/logo.png" alt="" width={40} height={40} />
          <h1 className="text-2xl font-bold">Wabtech</h1>
        </Link>
        <div className="flex-align-center gap-x-10">
          <NavbarLinks />

          <div className="flex-align-center">
            {/* Theme toggle */}
            <Dropdown
              general
              className="!w-[200px] !right-full p-4 !mt-2 dark:!border-zinc-600"
              trigger={
                <div className="w-10 h-10 mr-2 bg-slate-200 dark:bg-zinc-700 hover:bg-slate-300 dark:hover:bg-zinc-800 rounded-lg grid place-items-center">
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
            {/* <a
              href="#"
              className="hidden btn btn-primary md:flex-align-center gap-x-2"
            >
              <span> Sign in</span>
              <FiArrowRight />
            </a> */}
            {/* Mobile button toggle */}
            <MobileToggleButton
              isNavbarMenuOpen={isNavbarMenuOpen}
              setIsNavbarMenuOpen={setIsNavbarMenuOpen}
            />

            {/* Mobile Navigation */}
            <MobileNavbar
              isNavbarMenuOpen={isNavbarMenuOpen}
              setIsNavbarMenuOpen={setIsNavbarMenuOpen}
            />

            {/* Search Button */}
            <SearchButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
