import React from "react";

interface ButtonProps {
  children: JSX.Element | string;
  icon?: JSX.Element;
  variant?: "default" | "outlined" | "gradient";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  block?: boolean;
  buttonRef?: React.MutableRefObject<any>;
}

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  variant = "default",
  size = "medium",
  onClick,
  className,
  disabled = false,
  loading = false,
  block = false,
  buttonRef,
}) => {
  const buttonSizes = (() => {
    switch (size) {
      case "small":
        return "px-4 py-1 text-sm";
      case "medium":
        return "px-6 py-2";
      case "large":
        return "px-10 py-3 text-lg";
      default:
        return "px-6 py-2";
    }
  })();

  const buttonVariants = (() => {
    switch (variant) {
      case "default":
        return "bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80";
      case "outlined":
        return "border border-[#0bab7c] text-[#0bab7c]";
      case "gradient":
        return "bg-gradient-to-r text-white from-blue-600 to-cyan-400 hover:bg-gradient-to-l";
      default:
        return "bg-[#0bab7c] text-white hover:bg-[#0bab7c]/80";
    }
  })();
  return (
    <>
      <button
        className={`rounded-md ${buttonSizes} ${buttonVariants} ${
          disabled ? "opacity-60 !cursor-not-allowed" : ""
        } ${className || ""} ${
          icon || loading
            ? "flex items-center flex-shrink-0 gap-x-2 justify-center"
            : ""
        } ${block ? "block w-full" : ""}`}
        onClick={onClick}
        ref={buttonRef}
      >
        {icon && !loading && <span>{icon}</span>}
        {!icon && loading && (
          <div className="w-4 h-4 border-2 flex-shrink-0 border-slate-100 border-solid rounded-full animate-spin border-t-transparent"></div>
        )}
        {children}
      </button>
    </>
  );
};

export default Button;
