"use client";

import React from "react";
import { useRef } from "react";
import useOnClickOutside from "./useOnClickOutside";

const App = () => {
  const handleClickOutside = () => {
    console.log("Clicked outside");
  };

  const ref = useRef(null);
  useOnClickOutside(ref, handleClickOutside);

  return (
    <div ref={ref} className="p-3 bg-slate-100 dark:bg-zinc-700 mt-5">
      Click outside me and watch the console
    </div>
  );
};

export default App;
