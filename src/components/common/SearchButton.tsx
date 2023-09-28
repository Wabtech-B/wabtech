"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import { BiSearchAlt } from "react-icons/bi";

import Button from "@/components/wabtech/button/Button";
const SearchButton = () => {
  const pathname = usePathname();
  const commandButtonRef = useRef(null);

  const handleClick = () => {
    const event = new KeyboardEvent("keydown", {
      ctrlKey: true,
      key: "k",
    });

    document.dispatchEvent(event);
  };

  return (
    <div>
      {pathname.startsWith("/components") ? (
        <Button
          buttonRef={commandButtonRef}
          className="hidden shadow shadow-primary/30 md:flex"
          variant="outlined"
          onClick={handleClick}
          icon={<BiSearchAlt />}
        >
          Ctrl + k
        </Button>
      ) : null}
    </div>
  );
};

export default SearchButton;
