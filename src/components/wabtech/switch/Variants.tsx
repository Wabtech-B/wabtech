"use client";

import { useState } from "react";
import Switch from "./Switch";

const Variants = () => {
  const [isChecked, setIsChecked] = useState(true);
  const handleSwitchChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  console.log(isChecked);

  return (
    <div className="flex items-center gap-4 flex-wrap">
      <Switch checked={isChecked} onChange={handleSwitchChange} />
      <Switch
        checked={isChecked}
        onChange={handleSwitchChange}
        variant="primary"
      />
      <Switch
        checked={isChecked}
        onChange={handleSwitchChange}
        variant="warning"
      />
      <Switch
        checked={isChecked}
        onChange={handleSwitchChange}
        variant="success"
      />
      <Switch
        checked={isChecked}
        onChange={handleSwitchChange}
        variant="danger"
      />
    </div>
  );
};

export default Variants;
