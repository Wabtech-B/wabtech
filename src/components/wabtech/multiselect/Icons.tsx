"use client";

import { useState } from "react";
import MultiSelect from "./MultiSelect";
import { FaAngular, FaReact, FaVuejs } from "react-icons/fa";
import { FiBriefcase, FiLayers } from "react-icons/fi";
import { BsClipboard } from "react-icons/bs";
import { GiRock } from "react-icons/gi";

const options = [
  {
    value: "React.js",
    label: "React.js",
    icon: <FaReact className="text-[#0bab7c]" />,
  },
  {
    value: "Next.js",
    label: "Next.js",
    icon: <FiLayers />,
  },
  {
    value: "Vue",
    label: "Vue",
    icon: <FaVuejs className="text-green-500" />,
  },
  {
    value: "Nuxt",
    label: "Nuxt",
    icon: <BsClipboard />,
  },
  {
    value: "Sveltkit",
    label: "Sveltkit",
    icon: <FiBriefcase />,
  },
  {
    value: "Solid.js",
    label: "Solid.js",
    icon: <GiRock />,
  },
  {
    value: "Angular",
    label: "Angular",
    icon: <FaAngular className="text-red-500" />,
  },
];

const Icons = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleMultiSelect = (selectedValues: string[]) => {
    setSelectedValues(selectedValues);
  };

  return (
    <>
      <MultiSelect options={options} onSelect={handleMultiSelect} />
      <div className="mt-3 flex items-center gap-x-4">
        Selected Values:{" "}
        {selectedValues.length > 0 ? selectedValues.join(", ") : "None"}
      </div>
    </>
  );
};

export default Icons;
