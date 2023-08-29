"use client";

import { usePathname } from "next/navigation";

export const useActivePath = () => {
  const pathname = usePathname();

  const checkActivePath = (path: string) => {
    if (path === "/" && pathname !== path) {
      return false;
    }
    return pathname.startsWith(path);
  };

  return checkActivePath;
};
