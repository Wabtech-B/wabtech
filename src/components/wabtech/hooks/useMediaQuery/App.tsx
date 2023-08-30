"use client";

import React from "react";
import useMediaQuery from "./useMediaQuery";

const App = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <div className="w-fit px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-200 text-yellow-700">
        {isMobile ? "Mobile view" : "Desktop view"}
      </div>
      <p className="mt2">Resize your browser and watch the label</p>
    </>
  );
};

export default App;
