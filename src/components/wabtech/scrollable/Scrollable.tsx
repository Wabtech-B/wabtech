"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface ScrollableProps {
  children: React.ReactNode;
  leftControl?: JSX.Element;
  rightControl?: JSX.Element;
  autoHideControls?: boolean;
}

const Scrollable: React.FC<ScrollableProps> = ({
  children,
  leftControl,
  rightControl,
  autoHideControls = false,
}) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = listRef.current!.scrollLeft;
    setScrollPosition(position);
  };

  useEffect(() => {
    listRef?.current?.addEventListener("scroll", handleScroll);
    return () => {
      listRef?.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNext = () => {
    listRef.current!.scrollLeft += 200;
  };

  const handleBack = () => {
    listRef.current!.scrollLeft -= 200;
  };
  return (
    <div>
      <div className="mt-6 relative">
        {/* Custom Controls */}
        <div className="flex items-center justify-end space-x-3">
          <div
            className={`${
              autoHideControls && scrollPosition === 0 ? "hidden" : "block"
            }`}
          >
            {leftControl &&
              React.cloneElement(leftControl as React.ReactElement, {
                onClick: () => handleBack(),
              })}
          </div>
          <div
            className={`${
              autoHideControls &&
              listRef.current &&
              scrollPosition + listRef.current.clientWidth ===
                listRef.current.scrollWidth
                ? "hidden"
                : "block"
            }`}
          >
            {rightControl &&
              React.cloneElement(rightControl as React.ReactElement, {
                onClick: () => handleNext(),
              })}
          </div>
        </div>

        {/* Default Left Control */}
        {!leftControl && (
          <button
            className={`${
              scrollPosition === 0 ? "hidden" : "block"
            } bg-gradient-to-r from-white dark:from-[#181818] via-white dark:via-[#181818] to-transparent h-full w-28 flex items-center justify-center  absolute left-0 top-1/2 -translate-y-1/2`}
            onClick={handleBack}
          >
            <BsChevronLeft className="text-xl" />
          </button>
        )}

        {/* Scrollable Content */}
        <div
          className="flex overflow-x-auto space-x-4 p-2 hide-scrollbar scroll-smooth"
          ref={listRef}
        >
          {children}
        </div>

        {/* Default Right Control */}
        {!rightControl && (
          <button
            className={`${
              listRef.current &&
              scrollPosition + listRef.current.clientWidth ===
                listRef.current.scrollWidth
                ? "hidden"
                : "block"
            } bg-gradient-to-l from-white dark:from-[#181818] via-white dark:via-[#181818] to-transparent h-full w-28 flex items-center justify-center  absolute right-0 top-1/2 -translate-y-1/2`}
            onClick={handleNext}
          >
            <BsChevronRight className="text-xl" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Scrollable;
