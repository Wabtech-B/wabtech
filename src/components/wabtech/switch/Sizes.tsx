"use client";

import { useState } from "react";
import Switch from "./Switch";

const Sizes = () => {
  const [isChecked, setIsChecked] = useState(true);
  const handleSwitchChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  console.log(isChecked);

  return (
    <div className="flex items-center gap-x-4 flex-wrap">
      <Switch
        checked={isChecked}
        onChange={handleSwitchChange}
        variant="primary"
        size="small"
      />
      <Switch
        checked={isChecked}
        onChange={handleSwitchChange}
        variant="warning"
        size="medium"
      />
      <Switch
        checked={isChecked}
        onChange={handleSwitchChange}
        variant="success"
        size="large"
      />
    </div>
  );
};

export default Sizes;
