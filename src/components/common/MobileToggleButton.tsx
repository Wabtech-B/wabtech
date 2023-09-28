"use client";

import React, { Dispatch, SetStateAction } from "react";
import { FiMenu } from "react-icons/fi";

interface MobileToggleButtonProps {
  isNavbarMenuOpen: boolean;
  setIsNavbarMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileToggleButton: React.FC<MobileToggleButtonProps> = ({
  setIsNavbarMenuOpen,
  isNavbarMenuOpen,
}) => {
  return (
    <div>
      <div
        className="cursor-pointer w-10 h-10 bg-slate-200 dark:bg-zinc-700 hover:bg-slate-300 dark:hover:bg-zinc-800 rounded-lg grid place-items-center md:hidden"
        onClick={() => setIsNavbarMenuOpen(!isNavbarMenuOpen)}
      >
        <FiMenu />
      </div>
    </div>
  );
};

export default MobileToggleButton;
