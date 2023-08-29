"use client";

import React, { useRef, useState } from "react";

interface TabProps {
  title: string | JSX.Element;
  children: React.ReactNode;
}

interface TabsProps {
  variant?: "pills" | "indicator";
  full?: boolean;
  children: React.ReactNode;
}

const Tab: React.FC<TabProps> = ({ children }) => {
  return <div className="relative">{children}</div>;
};

const Tabs: React.FC<TabsProps> = ({
  variant = "indicator",
  full = false,
  children,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    tabRef.current!.style.left = `calc(calc(100% / ${React.Children.count(
      children
    )}) * ${index})`;
  };

  return (
    <div className="w-full">
      <div className={`flex w-fit relative ${full ? "w-full" : ""}`}>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return (
              <button
                key={index}
                className={`relative z-10 py-2 flex items-center justify-center text-sm font-medium focus:outline-none w-fit px-6 flex-shrink-0 ${
                  full ? "flex-1 w-full" : ""
                } ${
                  index === activeTab
                    ? variant === "pills"
                      ? "text-white"
                      : "text-[#0bab7c]"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400"
                }`}
                onClick={() => handleTabClick(index)}
              >
                {child.props.title}
              </button>
            );
          }
          return null;
        })}
        {variant === "indicator" && (
          <div
            className="absolute w-full h-[3px] left-0 bottom-0 bg-[#0bab7c]"
            ref={tabRef}
            style={{
              width: `calc(100% / ${React.Children.count(children)})`,
              transition: "left 0.3s ease-in-out",
            }}
          />
        )}
        {variant === "pills" && (
          <div
            className="absolute w-full left-0 top-0 h-full bg-[#0bab7c] rounded-full"
            ref={tabRef}
            style={{
              width: `calc(100% / ${React.Children.count(children)})`,
              transition: "left 0.3s ease-in-out",
            }}
          />
        )}
      </div>
      <div className="p-4">{React.Children.toArray(children)[activeTab]}</div>
    </div>
  );
};

export { Tabs, Tab };
