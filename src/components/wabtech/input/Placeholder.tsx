"use client";

import { useState } from "react";
import Input from "./Input";

const Placeholder = () => {
  const [value, setValue] = useState<string>("");
  const [value2, setValue2] = useState<string>("");
  console.log(value, value2);

  return (
    <>
      <Input
        name="username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Username"
      />
      <div className="mt-6">
        <Input
          name="bio"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          multline
          rows={4}
          placeholder="Bio"
        />
      </div>
    </>
  );
};

export default Placeholder;
