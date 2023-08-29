"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface DropdownProps {
  options?: {
    label: string;
    icon?: JSX.Element;
    link: string;
  }[];
  general?: true;
  children?: React.ReactNode;
  className?: string;
  trigger: JSX.Element; // Custom trigger component
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  general,
  children,
  className,
  trigger,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the component to close the dropdown
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Toggle the dropdown's visibility
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={dropdownRef} className="relative w-fit">
      <div className="cursor-pointer">
        {React.cloneElement(trigger as React.ReactElement, {
          onClick: handleToggle,
        })}
      </div>
      {/* Render the custom trigger */}
      {isOpen && (
        <motion.ul
          className={`absolute z-10 mt-1 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-800 rounded-md shadow-sm overflow-hidden ${
            className || ""
          } ${
            /* Positioning based on available space */
            window.innerHeight -
              dropdownRef?.current!.getBoundingClientRect().bottom >=
            200
              ? "top-full"
              : "bottom-full"
          }`} // Apply custom classes to the container
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={dropdownVariants}
        >
          {general ? (
            <>{children}</>
          ) : (
            <>
              {options?.map((option) => (
                <li
                  key={option.label}
                  className="flex items-center px-4 py-2 cursor-pointer hover:bg-slate-200 dark:hover:bg-zinc-700"
                >
                  {option.icon && <span className="mr-2">{option.icon}</span>}
                  <a
                    href={option.link}
                    className="text-slate-500 dark:text-slate-200"
                  >
                    {option.label}
                  </a>
                </li>
              ))}
            </>
          )}
        </motion.ul>
      )}
    </div>
  );
};

export default Dropdown;
