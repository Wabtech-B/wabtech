"use client";

import React, { useState } from "react";

interface AlertProps {
  title?: string;
  variant?: "default" | "success" | "warning" | "error";
  removable?: boolean;
  children: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({
  title,
  variant = "default",
  removable,
  children,
}) => {
  const [dismissed, setDismissed] = useState(false);

  const getVariantClasses = (() => {
    switch (variant) {
      case "success":
        return "bg-green-100 border-l-4 border-green-500 text-green-500";
      case "warning":
        return "bg-yellow-100 border-l-4 border-yellow-500 text-yellow-500";
      case "error":
        return "bg-red-100 border-l-4 border-red-500 text-red-500";
      default:
        return "bg-blue-100 border-l-4 border-[#0bab7c] text-[#0bab7c]";
    }
  })();

  const getVariantIcon = () => {
    switch (variant) {
      case "success":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-check"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        );
      case "warning":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-alert-triangle"
          >
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        );
      case "error":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x-circle"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        );
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-info"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        );
    }
  };

  return dismissed ? null : (
    <div
      className={`px-4 py-2 flex items-center justify-between dark:bg-zinc-800 my-3 ${getVariantClasses}`}
    >
      <div className="flex gap-x-3">
        <div className="flex-shrink-0">{getVariantIcon()}</div>
        <div>
          {title && <div className="font-semibold">{title}</div>}
          {children}
        </div>
      </div>
      {removable && (
        <button
          onClick={() => setDismissed(true)}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Alert;
