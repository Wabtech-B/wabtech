"use client";

import React, { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import Input from "../wabtech/input/Input";
import Link from "next/link";
import { componentLinks } from "@/data/componentLinks";

const ComponentSearchDialog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const refinedLinks = componentLinks.filter(
    (link) =>
      link.linkText !== "Overview" && link.linkText !== "Installation & Usage"
  );
  const filteredLinks = refinedLinks.filter((link) =>
    link.linkText.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if ((e.ctrlKey && e.key === "k") || e.key === "K") {
      e.preventDefault();
      setIsSearchVisible(true);
      setSearchQuery("");
    } else if (e.key === "Escape") {
      setIsSearchVisible(false);
    }
  };

  const closePopup = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("popup")) {
      setIsSearchVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      {isSearchVisible && (
        <div
          className="popup fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999]"
          onClick={closePopup}
        >
          <div className="max-w-2xl bg-white p-4 rounded-lg border dark:border-zinc-600 dark:bg-zinc-700 w-full mx-3 h-[80vh] overflow-y-auto">
            <div className="relative">
              <Input
                autoFocus
                type="text"
                placeholder="Search for links..."
                value={searchQuery}
                onChange={handleSearchChange}
                icon={<BiSearchAlt />}
              />
            </div>

            {filteredLinks.length > 0 ? (
              <div className="mt-5 grid grid-cols-2 md:grid-cols-3">
                {filteredLinks.map((link) => (
                  <motion.div key={link.linkText} whileHover={{ scale: 1.1 }}>
                    <Link
                      href={link.url}
                      className="py-1 flex items-center mb-2  text-gray-600 hover:text-gray-900 dark:text-slate-300 dark:hover:text-white"
                      onClick={() => setIsSearchVisible(false)}
                    >
                      {link.linkText}
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="flex-center-center py-6">
                <h1 className="text-2xl opacity-50">No results found</h1>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ComponentSearchDialog;
