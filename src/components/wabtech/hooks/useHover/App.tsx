"use client";

import React from "react";
import useHover from "./useHover";

const App = () => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`w-[150px] h-[100px] mt-5 text-white ${
        isHovered ? "bg-[#0bab7c]" : "bg-red-500"
      } flex items-center justify-center`}
    >
      {isHovered ? "Hovered!" : "Hover over me"}
    </div>
  );
};

export default App;
