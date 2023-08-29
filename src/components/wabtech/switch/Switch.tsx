"use client";

import React, { useState } from "react";
import classNames from "classnames";

interface SwitchProps {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  variant?: "default" | "primary" | "success" | "warning" | "danger";
  size?: "small" | "medium" | "large";
}

const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  variant = "default",
  size = "medium",
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleSwitchChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const switchWidth = (() => {
    switch (size) {
      case "small":
        return "w-6";
      case "medium":
        return "w-8";
      case "large":
        return "w-10";
      default:
        return "w-8";
    }
  })();

  const switchClasses = classNames(
    "relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200",
    {
      "w-14 h-8": size === "medium",
      "w-12 h-6": size === "small",
      "w-16 h-10": size === "large",
    }
  );

  const thumbClasses = classNames(
    `inline-block h-full transform rounded-full transition-transform ease-in-out duration-200 ${switchWidth} bg-gray-200`,
    {
      "translate-x-0": !isChecked,
      "translate-x-6": isChecked,
    }
  );

  const trackClasses = classNames(
    "absolute block w-full h-full rounded-full bg-gray-300",
    {
      "bg-gray-500": isChecked && variant === "default",
      "!bg-[#0bab7c]": isChecked && variant === "primary",
      "!bg-green-500": isChecked && variant === "success",
      "!bg-yellow-500": isChecked && variant === "warning",
      "!bg-red-500": isChecked && variant === "danger",
    }
  );

  return (
    <div className={switchClasses} onClick={handleSwitchChange}>
      <div className={trackClasses} />
      <div className={thumbClasses} />
    </div>
  );
};

export default Switch;
