"use client";

import { useState } from "react";
import Switch from "./Switch";

const App = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleSwitchChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  console.log(isChecked);

  return (
    <>
      <Switch checked={isChecked} onChange={handleSwitchChange} />
    </>
  );
};

export default App;
