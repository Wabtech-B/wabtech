import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}
const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`p-4 bg-white shadow-sm border dark:border-zinc-600 dark:bg-zinc-700 rounded-lg ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
