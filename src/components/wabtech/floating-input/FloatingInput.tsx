"use client";

import React, { useState } from "react";
import { FiInfo } from "react-icons/fi";

interface InputProps {
  label: string;
  value: string;
  name?: string;
  id?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: string;
  icon?: JSX.Element;
  invalid?: boolean;
  multline?: boolean;
  cols?: number;
  rows?: number;
  errorText?: string;
}

const FloatingInput: React.FC<InputProps> = ({
  label,
  value,
  name,
  id,
  onChange,
  onBlur = () => {},
  type = "text",
  icon,
  invalid,
  multline = false,
  cols,
  rows,
  errorText,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setIsFocused(false);
    onBlur(e);
  };

  const getInputClasses = () => {
    let inputClasses = `bg-white dark:bg-zinc-900 text-inherit font-inherit px-3 py-2 border border-zinc-300 dark:border-zinc-600 outline-none transition-a w-full text-base !rounded-md ${
      icon && "!pl-8"
    }`;

    if (isFocused) {
      inputClasses += " focus:ring-2 !border-transparent focus:ring-[#0bab7c]";
    }
    if (invalid) {
      inputClasses += " !ring-2 !ring-red-600 !border-transparent";
    }
    if (invalid && isFocused) {
      inputClasses += " !ring-2 !ring-red-600";
    }
    return inputClasses;
  };

  return (
    <>
      <div className="relative block rounded-md">
        <label
          className={`absolute z-20 top-[9px] left-2 text-[#8d9193] transition-a px-[0.15rem] pointer-events-none font-medium ${
            (isFocused || value) &&
            "!-top-[12px] !left-[12px] text-sm text-[#0bab7c] !bg-white dark:!bg-zinc-900"
          } ${invalid && "!text-red-500"} ${
            icon && "left-7"
          } transition-all duration-200`}
        >
          {label}
        </label>
        <div className="relative">
          {icon && (
            <div
              className={`absolute top-1/2 -translate-y-1/2 left-2 text-slate-400 ${
                invalid && "!text-red-500"
              } ${multline && "!top-3 translate-y-0"}`}
            >
              {icon}
            </div>
          )}
          {invalid && (
            <div
              className={`absolute top-1/2 -translate-y-1/2 right-2 ${
                multline && "!top-3 translate-y-0"
              }`}
            >
              <FiInfo className="text-red-500" />
            </div>
          )}
          {multline ? (
            <textarea
              cols={cols}
              rows={rows}
              value={value}
              id={id}
              name={name}
              onChange={onChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              className={getInputClasses()}
              autoComplete="off"
            />
          ) : (
            <input
              type={type}
              value={value}
              id={id}
              name={name}
              onChange={onChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              className={getInputClasses()}
              autoComplete="off"
            />
          )}
        </div>
      </div>
      {errorText && <p className="text-sm text-red-500 mt-2">{errorText}</p>}
    </>
  );
};

export default FloatingInput;
