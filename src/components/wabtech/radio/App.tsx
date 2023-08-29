"use client";

/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Radio from "./Radio";

const App = () => {
  const [selectedGender, setSelectedGender] = useState("");
  console.log(selectedGender);
  return (
    <>
      <h1 className="text-xl mb-3">What's your gender</h1>
      <Radio
        label="Male"
        value="Male"
        name="gender"
        onChange={(e) => setSelectedGender(e.target.value)}
      />
      <Radio
        label="Female"
        value="Female"
        name="gender"
        onChange={(e) => setSelectedGender(e.target.value)}
      />
    </>
  );
};

export default App;
