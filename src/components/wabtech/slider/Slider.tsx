"use client";

import React, { useState, useEffect, Children, cloneElement } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface SliderProps {
  children: React.ReactNode;
  className?: string;
  showControls?: boolean;
  showDots?: boolean;
  autoPlay?: boolean;
  leftControlIcon?: JSX.Element;
  rightControlIcon?: JSX.Element;
}

interface SliderItemProps {
  children: React.ReactNode;
  className?: string;
}

const SliderItem: React.FC<SliderItemProps> = ({ children, className }) => {
  return <div className={className || ""}>{children}</div>;
};

const Slider: React.FC<SliderProps> & {
  Item: React.FC<SliderItemProps>;
} = ({
  children,
  className,
  showControls = true,
  showDots = true,
  autoPlay = true,
  leftControlIcon: LeftControl,
  rightControlIcon: RightControl,
}) => {
  const [index, setIndex] = useState(0);
  const items = Children.toArray(children);

  useEffect(() => {
    if (autoPlay) {
      const slider = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, 3000);
      return () => clearInterval(slider);
    }
  }, [autoPlay, items]);

  return (
    <div
      className={`w-full h-[300px] relative overflow-hidden ${className || ""}`}
    >
      {items.map((child, currentIndex) => {
        const position =
          currentIndex === index
            ? "opacity-100 translate-x-0"
            : currentIndex === index - 1 ||
              (currentIndex === items.length - 1 && index === 0)
            ? "opacity-100 -translate-x-full"
            : "opacity-0 translate-x-full";

        return (
          <div
            key={currentIndex}
            className={`w-full text-center h-full transition absolute ${position}`}
          >
            {cloneElement(child as React.ReactElement, { index: currentIndex })}
          </div>
        );
      })}
      {showControls && (
        <div className="btns">
          <button
            className="w-10 h-10 grid place-items-center shadow rounded-full text-[#0bab7c] border bg-white border-[#0bab7c] flex-center-center absolute right-4 top-1/2 transform -translate-y-1/2"
            onClick={() =>
              setIndex((prevIndex) => (prevIndex + 1) % items.length)
            }
          >
            {RightControl ? RightControl : <BsChevronRight />}
          </button>
          <button
            className="w-10 h-10 grid place-items-center shadow rounded-full text-[#0bab7c] border bg-white border-[#0bab7c] flex-center-center absolute left-4 top-1/2 transform -translate-y-1/2"
            onClick={() =>
              setIndex((prevIndex) =>
                prevIndex === 0 ? items.length - 1 : prevIndex - 1
              )
            }
          >
            {LeftControl ? LeftControl : <BsChevronLeft />}
          </button>
        </div>
      )}
      {showDots && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-x-2">
          {items.map((_, i) => (
            <div
              className={`w-4 h-4 bg-white rounded-full drop-shadow cursor-pointer opacity-40 ${
                index === i ? "!opacity-100" : ""
              }`}
              key={i}
              onClick={() => setIndex(i)}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

Slider.Item = SliderItem;

export default Slider;
