"use client";

import { useState } from "react";
import MultiSelect from "./MultiSelect";
import Image from "next/image";

const options = [
  {
    value: "Wabz Braize",
    label: "Wabz Braize",
    icon: (
      <Image
        src="/user.jpg"
        alt="Option 1 Icon"
        width={32}
        height={32}
        className="rounded-full"
      />
    ),
  },
  {
    value: "Raven Kent",
    label: "Raven Kent",
    icon: (
      <Image
        src="/2.png"
        alt="Option 1 Icon"
        width={32}
        height={32}
        className="rounded-full"
      />
    ),
  },
  {
    value: "Olivia Pope",
    label: "Olivia Pope",
    icon: (
      <Image
        src="/6.png"
        alt="Option 1 Icon"
        width={32}
        height={32}
        className="rounded-full"
      />
    ),
  },
  {
    value: "Annalise Keating",
    label: "Annalise Keating",
    icon: (
      <Image
        src="/8.png"
        alt="Option 1 Icon"
        width={32}
        height={32}
        className="rounded-full"
      />
    ),
  },
  {
    value: "Fitzgerald Grant",
    label: "Fitzgerald Grant",
    icon: (
      <Image
        src="/1.png"
        alt="Option 1 Icon"
        width={32}
        height={32}
        className="rounded-full"
      />
    ),
  },
  {
    value: "Jack Bauer",
    label: "Jack Bauer",
    icon: (
      <Image
        src="/7.png"
        alt="Option 1 Icon"
        width={32}
        height={32}
        className="rounded-full"
      />
    ),
  },
  {
    value: "John Snow",
    label: "John Snow",
    icon: (
      <Image
        src="/11.png"
        alt="Option 1 Icon"
        width={32}
        height={32}
        className="rounded-full"
      />
    ),
  },
];

const Images = () => {
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

export default Images;
