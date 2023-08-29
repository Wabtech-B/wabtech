"use client";

import { useState } from "react";
import Checkbox from "./Checkbox";

const languages = [
  { value: "javascript", label: "JavaScript" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "csharp", label: "C#" },
  { value: "php", label: "PHP" },
  { value: "ruby", label: "Ruby" },
  { value: "swift", label: "Swift" },
  { value: "typescript", label: "TypeScript" },
];

const Group = () => {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const handleLanguageChange = (languageValue: string) => {
    const isSelected = selectedLanguages.includes(languageValue);
    if (isSelected) {
      const updatedLanguages = selectedLanguages.filter(
        (value) => value !== languageValue
      );
      setSelectedLanguages(updatedLanguages);
    } else {
      const updatedLanguages = [...selectedLanguages, languageValue];
      setSelectedLanguages(updatedLanguages);
    }
  };

  return (
    <div>
      <h2>Select Favorite Programming Languages:</h2>
      {languages.map((language) => (
        <Checkbox
          key={language.value}
          label={language.label}
          value={language.value}
          onChange={() => handleLanguageChange(language.value)}
          checked={selectedLanguages.includes(language.value)}
        />
      ))}
      <div>
        <h3>Selected Languages: {selectedLanguages.toString()}</h3>
      </div>
    </div>
  );
};

export default Group;
