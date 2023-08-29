import React from "react";

interface CheckboxProps {
  label: string;
  value: string;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  value,
  id,
  onChange,
  checked,
}) => {
  return (
    <label
      className="flex items-center gap-x-2 w-fit my-3 select-none cursor-pointer"
      htmlFor={id}
    >
      <input
        type="checkbox"
        className="appearance-none w-5 h-5 border border-zinc-300 shadow-sm dark:border-zinc-600 rounded grid place-items-center checked:before:content-['\002714'] checked:text-white checked:text-[0.6rem] checked:bg-[#0bab7c] checked:border-2 checked:border-white dark:checked:border-[#1e1e1e]  relative checked:after:absolute checked:after:w-6 checked:after:h-6 checked:after:border-2 checked:after:border-[#0bab7c] checked:after:rounded"
        value={value}
        id={id}
        onChange={onChange}
        checked={checked}
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
