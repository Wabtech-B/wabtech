"use client";

import { useState } from "react";
import Input from "./Input";

const Type = () => {
  const [value, setValue] = useState<string>("");
  const [value2, setValue2] = useState<string>("");
  const [value3, setValue3] = useState<string>("");
  console.log(value, value2, value3);

  return (
    <>
      <Input
        type="email"
        label="Email*"
        name="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="mt-6">
        <Input
          type="password"
          label="Password*"
          name="password"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
      </div>
      <div className="mt-6">
        <Input
          type="number"
          label="Phone Number*"
          name="phone_number"
          value={value3}
          onChange={(e) => setValue3(e.target.value)}
        />
      </div>
    </>
  );
};

export default Type;
