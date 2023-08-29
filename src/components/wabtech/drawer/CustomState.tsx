"use client";

import { useState } from "react";
import Drawer from "./Drawer";

const CustomState = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <button
        className="px-6 py-2 bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80 rounded-md"
        onClick={() => setIsDrawerOpen(true)}
      >
        Open
      </button>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <h2 className="text-2xl font-semibold mb-2">Default Drawer</h2>
        <p>This is the content of the drawer.</p>
      </Drawer>
    </>
  );
};

export default CustomState;
