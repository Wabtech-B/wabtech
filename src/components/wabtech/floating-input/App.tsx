"use client";

import FloatingInput from "./FloatingInput";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState<string>("");
  const [value2, setValue2] = useState<string>("");
  console.log(value, value2);

  return (
    <>
      <FloatingInput
        label="Username*"
        name="username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="mt-6">
        <FloatingInput
          label="Bio*"
          name="bio"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          multline
          rows={4}
        />
      </div>
    </>
  );
};

export default App;
