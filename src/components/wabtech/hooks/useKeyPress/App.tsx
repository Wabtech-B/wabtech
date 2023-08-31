"use client";

import React from "react";
import useKeyPress from "./useKeyPress";

const App = () => {
  const isKeyPressed = useKeyPress("Enter");
  const isControlKeyPressed = useKeyPress("Control");
  const isMKeyPressed = useKeyPress("m");
  return (
    <>
      <div className="p-3 bg-slate-100 dark:bg-zinc-700 mt-5">
        {isKeyPressed ? <p>Enter key pressed</p> : <p>Press Enter key</p>}
      </div>
      <div className="p-3 bg-slate-100 dark:bg-zinc-700 mt-5">
        {isControlKeyPressed && isMKeyPressed ? (
          <p>
            <span className="code !bg-slate-300 dark:!bg-zinc-800">
              `Ctrl + m`
            </span>{" "}
            is pressed
          </p>
        ) : (
          <p>
            Press{" "}
            <span className="code !bg-slate-300 dark:!bg-zinc-800">
              `Ctrl + m`
            </span>
          </p>
        )}
      </div>
    </>
  );
};

export default App;
