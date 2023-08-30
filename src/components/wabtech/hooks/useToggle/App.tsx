"use client";

import React from "react";
import useToggle from "./useToggle";

const items = [
  { id: 1, label: "Option 1" },
  { id: 2, label: "Option 2" },
  { id: 3, label: "Option 3" },
];

const App = () => {
  const [itemsList, toggleActiveState, selectedItem] = useToggle(
    items,
    items[0]
  );

  // Custom "active" property
  //  const [itemsList2, toggleActive, selected] = useToggle(
  //    items,
  //    items[0],
  //    "active"
  //  );

  return (
    <div>
      <ul className="flex items-center gap-3">
        {itemsList.map((item) => (
          <div
            key={item.id}
            onClick={() => toggleActiveState(item)}
            className={`w-20 h-20 flex items-center justify-center drop-shadow-md bg-white dark:bg-zinc-700 rounded-lg cursor-pointer ${
              item.isActive ? "!bg-[#0bab7c] text-white" : ""
            }`}
          >
            {item.label}
          </div>
        ))}
      </ul>
      {selectedItem && (
        <p className="mt-2">Selected item: {selectedItem.label}</p>
      )}
    </div>
  );
};

export default App;
