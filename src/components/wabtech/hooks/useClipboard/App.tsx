"use client";

import React from "react";
import useClipboard from "./useClipboard";

const App = () => {
  const { copied, copyToClipboard } = useClipboard();
  return (
    <div>
      <button
        className="px-6 py-2 text-white bg-[#0bab7c] hover:bg-[#0bab7c]/80 rounded-md"
        onClick={() => copyToClipboard("Copy me")}
      >
        Copy me
      </button>
      {copied && <p className="mt-2">Text copied!</p>}
    </div>
  );
};

export default App;
