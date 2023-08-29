import React from "react";

interface RadioButtonProps {
  label: string;
  value: string;
  id?: string;
  checked?: boolean;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio: React.FC<RadioButtonProps> = ({
  label,
  checked,
  value,
  id,
  name,
  onChange,
}) => {
  return (
    <label className="flex items-center gap-x-2 mt-2 w-fit my-3 select-none cursor-pointer">
      <input
        type="radio"
        className="appearance-none w-5 h-5 border border-zinc-300 shadow-sm dark:border-zinc-600 rounded-full checked:bg-[#0bab7c] checked:border-2 checked:border-white dark:checked:border-[#1e1e1e] relative checked:before:absolute checked:before:w-6 checked:before:top-1/2 checked:before:left-1/2 checked:before:-translate-y-1/2 checked:before:-translate-x-1/2 checked:before:h-6 checked:before:border-2 checked:before:border-[#0bab7c] checked:before:rounded-full"
        value={value}
        id={id}
        name={name}
        onChange={onChange}
        checked={checked}
      />
      <span>{label}</span>
    </label>
  );
};

export default Radio;
