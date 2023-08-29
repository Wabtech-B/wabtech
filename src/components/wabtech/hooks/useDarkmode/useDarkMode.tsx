"use client";

import { useEffect, useState } from "react";

type Mode = "dark" | "light" | "system";

const useDarkMode = (
  localStorageKey: string
): { mode: Mode; handleModeChange: (newMode: Mode) => void } => {
  const [mode, setMode] = useState<Mode>(
    (localStorage.getItem(localStorageKey) as Mode) || "system"
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, mode);
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (mode === "system") {
      if (prefersDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode, localStorageKey]);

  const handleModeChange = (newMode: Mode): void => {
    setMode(newMode);
  };

  return { mode, handleModeChange };
};

export default useDarkMode;
