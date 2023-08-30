import React from "react";
import { FiMonitor, FiMoon, FiSun } from "react-icons/fi";
import useDarkMode from "./useDarkMode";

const App = () => {
  const { mode, handleModeChange } = useDarkMode("darkModePreference");
  return (
    <>
      <div className="mt-3 flex items-center gap-3">
        {/* Dark */}
        <button
          className={`px-6 py-2 rounded-md bg-slate-200 hover:bg-slate-300 text-slate-600 dark:text-slate-200 dark:bg-zinc-700 hover:dark:bg-zinc-600 flex items-center justify-center gap-x-2 ${
            mode === "dark"
              ? "!bg-[#0bab7c] hover:!bg-[#0bab7c]/80 !text-white"
              : ""
          }`}
          onClick={() => handleModeChange("dark")}
        >
          <div>
            <FiMoon />
          </div>
          Dark
        </button>

        {/* Light */}
        <button
          className={`px-6 py-2 rounded-md bg-slate-200 hover:bg-slate-300 text-slate-600 dark:text-slate-200 dark:bg-zinc-700 hover:dark:bg-zinc-600 flex items-center justify-center gap-x-2 ${
            mode === "light"
              ? "!bg-[#0bab7c] hover:!bg-[#0bab7c]/80 !text-white"
              : ""
          }`}
          onClick={() => handleModeChange("light")}
        >
          <div>
            <FiSun />
          </div>
          Light
        </button>

        {/* System */}
        <button
          className={`px-6 py-2 rounded-md bg-slate-200 hover:bg-slate-300 text-slate-600 dark:text-slate-200 dark:bg-zinc-700 hover:dark:bg-zinc-600 flex items-center justify-center gap-x-2 ${
            mode === "system"
              ? "!bg-[#0bab7c] hover:!bg-[#0bab7c]/80 !text-white"
              : ""
          }`}
          onClick={() => handleModeChange("system")}
        >
          <div>
            <FiMonitor />
          </div>
          System
        </button>
      </div>
    </>
  );
};

export default App;
