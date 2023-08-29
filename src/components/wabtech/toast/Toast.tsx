"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCheckCircle,
  FiXCircle,
  FiInfo,
  FiAlertTriangle,
} from "react-icons/fi";

interface ToastProps {
  message: string;
  variant: "success" | "danger" | "info" | "warning";
  trigger?: JSX.Element;
}

const Toast: React.FC<ToastProps> = ({ message, variant, trigger }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isVisible]);

  let bgColor = "bg-white dark:bg-zinc-800";
  let borderColor = "";
  let iconColor = "";
  let Icon;

  switch (variant) {
    case "success":
      borderColor = "border-l-green-500";
      iconColor = "text-green-500";
      Icon = FiCheckCircle;
      break;
    case "danger":
      borderColor = "border-l-red-500";
      iconColor = "text-red-500";
      Icon = FiXCircle;
      break;
    case "info":
      borderColor = "border-l-[#0bab7c]";
      iconColor = "text-[#0bab7c]";
      Icon = FiInfo;
      break;
    case "warning":
      borderColor = "border-l-yellow-500";
      iconColor = "text-yellow-500";
      Icon = FiAlertTriangle;
      break;
    default:
      break;
  }

  return (
    <div className="relative">
      {trigger &&
        React.cloneElement(trigger as React.ReactElement, {
          onClick: () => setIsVisible(true),
        })}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={`fixed top-4 right-4 p-3 ${bgColor} text-slate-500 dark:text-slate-200 rounded-md shadow-md flex items-center border-l-2 z-[99] ${borderColor}`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            {Icon && <Icon className={`mr-2 ${iconColor}`} />}
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Toast;
