"use client";

import { useState } from "react";
import MultiSelect from "./MultiSelect";

const options = [
  {
    value: "React.js",
    label: "React.js",
  },
  {
    value: "Next.js",
    label: "Next.js",
  },
  {
    value: "Vue",
    label: "Vue",
  },
  {
    value: "Nuxt",
    label: "Nuxt",
  },
  {
    value: "Sveltkit",
    label: "Sveltkit",
  },
  {
    value: "Solid.js",
    label: "Solid.js",
  },
  {
    value: "Angular",
    label: "Angular",
  },
];

const WithCheckbox = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleMultiSelect = (selectedValues: string[]) => {
    setSelectedValues(selectedValues);
  };

  return (
    <>
      <MultiSelect options={options} onSelect={handleMultiSelect} checkbox />
      <div className="mt-3 flex items-center gap-x-4">
        Selected Values:{" "}
        {selectedValues.length > 0 ? selectedValues.join(", ") : "None"}
      </div>
    </>
  );
};

export default WithCheckbox;
