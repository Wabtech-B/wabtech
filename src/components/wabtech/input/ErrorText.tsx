"use client";

import { FiBriefcase, FiUser } from "react-icons/fi";
import { useState } from "react";
import Input from "./Input";

const ErrorText = () => {
  const [value, setValue] = useState<string>("");
  const [value2, setValue2] = useState<string>("");
  console.log(value, value2);

  return (
    <>
      <Input
        label="Username*"
        name="username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        icon={<FiUser />}
        invalid
        errorText="User name is required"
      />
      <div className="mt-6">
        <Input
          label="Bio*"
          name="bio"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          multline
          rows={4}
          icon={<FiBriefcase />}
          invalid
          errorText="Please enter your bio"
        />
      </div>
    </>
  );
};

export default ErrorText;
