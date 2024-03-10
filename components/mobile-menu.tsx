"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Links from "./links";
import { useEffect, useRef, useState } from "react";
import ModeToggle from "./mode-toggle";

const MobileMenu = () => {
  const mobileWrapperRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    mobileWrapperRef.current!.style.height = isMobileMenuOpen ? "100vh" : "0px";
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <div ref={mobileMenuRef}>
      <Button variant="outline" size="icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </Button>
      <div
        ref={mobileWrapperRef}
        className="absolute w-full overflow-hidden h-0 top-full left-0 bg-white dark:bg-gray-900 transition-a"
      >
        <div
          ref={mobileNavRef}
          className="p-4 border border-border"
          onClick={closeMobileMenu}
        >
          <Links className="flex-col space-x-0 !items-start space-y-4" />
          <div className="mt-4">
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
