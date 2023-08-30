"use client";

import React from "react";
import useKeyPress from "./useKeyPress";

const App = () => {
  const isKeyPressed = useKeyPress("Enter");

  return (
    <div className="p-3 bg-slate-100 dark:bg-zinc-700 mt-5">
      {isKeyPressed ? <p>Enter key pressed</p> : <p>Press Enter key</p>}
    </div>
  );
};

export default App;
