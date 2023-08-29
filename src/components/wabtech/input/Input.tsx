"use client";

import React, { useState } from "react";
import { FiInfo } from "react-icons/fi";

interface InputProps {
  label?: string;
  value: string;
  name?: string;
  id?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  autoFocus?: boolean;
  type?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  invalid?: boolean;
  multline?: boolean;
  cols?: number;
  rows?: number;
  errorText?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  name,
  id,
  onChange,
  onBlur = () => {},
  autoFocus = false,
  type = "text",
  placeholder,
  icon,
  invalid,
  multline = false,
  cols,
  rows,
  errorText,
}) => {
  const handleInputBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onBlur(e);
  };

  return (
    <>
      <label htmlFor={id}>{label}</label>
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
            onBlur={handleInputBlur}
            autoFocus={autoFocus}
            className={`flex w-full !rounded-md !border border-zinc-300 bg-white dark:border-zinc-600 dark:bg-zinc-800 px-3 py-1 pt-2 !shadow-sm transition-colors placeholder:text-slate-400 focus-visible:outline-none focus:border-transparent focus-visible:ring-2 focus-visible:ring-[#0bab7c] disabled:cursor-not-allowed disabled:opacity-50 ${
              invalid
                ? "!ring-2 !ring-red-500 focus-visible:!ring-red-500 !border-transparent"
                : ""
            } ${icon ? "pl-7" : ""}`}
            autoComplete="off"
            placeholder={placeholder}
          />
        ) : (
          <input
            type={type}
            value={value}
            id={id}
            name={name}
            onChange={onChange}
            onBlur={handleInputBlur}
            autoFocus={autoFocus}
            className={`flex h-9 w-full !rounded-md !border border-zinc-300 bg-white dark:border-zinc-600 dark:bg-zinc-800 px-3 py-1 !shadow-sm transition-colors placeholder:text-slate-400 focus-visible:outline-none focus:border-transparent focus-visible:ring-2 focus-visible:ring-[#0bab7c] disabled:cursor-not-allowed disabled:opacity-50 ${
              invalid
                ? "!ring-2 !ring-red-500 focus-visible:!ring-red-500 !border-transparent"
                : ""
            } ${icon ? "pl-7" : ""}`}
            autoComplete="off"
            placeholder={placeholder}
          />
        )}
      </div>
      {errorText && <p className="text-sm text-red-500 mt-2">{errorText}</p>}
    </>
  );
};

export default Input;
