"use client";

import React from "react";
import useScroll from "./useScroll";

const App = () => {
  const { scrollY, scrollX } = useScroll();
  return (
    <>
      <div className="fixed p-4 right-0 top-16 bg-white border dark:border-zinc-600 dark:bg-zinc-700 z-40">
        <div>
          <p>Scroll Y: {scrollY}</p>
          <p>Scroll X: {scrollX}</p>
        </div>
      </div>
      <p>
        Try scrolling and watch the box in the right corner of the browser
        window
      </p>
    </>
  );
};

export default App;
