"use client";

import React, { useState } from "react";
import { IoClipboardOutline } from "react-icons/io5";
import { FiCheck } from "react-icons/fi";
import useClipboard from "../wabtech/hooks/useClipboard/useClipboard";
import Tooltip from "../wabtech/tooltip/Tooltip";
import Image from "next/image";

interface Tab {
  title: JSX.Element | string;
  content: JSX.Element | string;
  contentToCopy?: string;
}

interface TabsProps {
  tabs: Tab[];
  isNextJs: boolean;
  setIsNextJs: React.Dispatch<React.SetStateAction<boolean>>;
  isTypeScript: boolean;
  setIsTypeScript: React.Dispatch<React.SetStateAction<boolean>>;
}

const SnippetTabs: React.FC<TabsProps> = ({
  tabs,
  isNextJs,
  setIsNextJs,
  isTypeScript,
  setIsTypeScript,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [showToolbar, setShowToolbar] = useState(false);
  const { copied, copyToClipboard } = useClipboard();

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full overflow-hidden bg-white/70 dark:!bg-zinc-900/60 rounded-2xl border-2 border-neutral-300 dark:border-neutral-700 shadow relative">
      <div className="relative">
        <div className="relative">
          <div className="flex justify-between items-center bg-slate-200 dark:bg-zinc-800">
            <div className="flex relative max-w-[300px] sm:max-w-fit overflow-x-auto hide-scrollbar">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`py-2 px-5 font-medium focus:outline-none w-fit shrink-0 ${
                    index === activeTab
                      ? "text-[#0bab7c] bg-white dark:bg-zinc-900 border-t-2 border-t-[#0bab7c]"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400"
                  }`}
                  onClick={() => {
                    handleTabClick(index);
                    setShowToolbar(index > 0);
                  }}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            {showToolbar && (
              <>
                <div className="flex items-center gap-x-3 mr-5">
                  <div className="flex-shrink-0">
                    <Tooltip text="React.js" position="left">
                      <div
                        className={`flex-shrink-0 cursor-pointer bg-zinc-700 p-1  ${
                          !isNextJs
                            ? "border-2 border-[#0bab7c] shadow-md shadow-[#0bab7c]/40 rounded"
                            : ""
                        }`}
                        onClick={() => {
                          setIsNextJs(false);
                        }}
                      >
                        <Image
                          src="/react.png"
                          alt="React.js"
                          width={24}
                          height={24}
                        />
                      </div>
                    </Tooltip>
                  </div>
                  <div className="flex-shrink-0">
                    <Tooltip text="Next.js" position="left">
                      <div
                        className={`flex-shrink-0 cursor-pointer bg-zinc-700 p-1  ${
                          isNextJs
                            ? "border-2 border-[#0bab7c] shadow-md shadow-[#0bab7c]/40 rounded"
                            : "0"
                        }`}
                        onClick={() => {
                          setIsNextJs(true);
                        }}
                      >
                        <Image
                          src="/next.png"
                          alt="Next.js"
                          width={24}
                          height={24}
                        />
                      </div>
                    </Tooltip>
                  </div>
                  <div className="flex-shrink-0">
                    <Tooltip text={copied ? "Copied!" : "Copy"} position="left">
                      <div
                        className="flex-shrink-0 w-8 h-8 bg-slate-200 dark:bg-zinc-700 hover:bg-slate-300 dark:hover:bg-zinc-700/80 border border-zinc-400 dark:border-zinc-600 grid place-items-center rounded-md cursor-pointer"
                        onClick={() =>
                          copyToClipboard(
                            tabs[activeTab].contentToCopy as string
                          )
                        }
                      >
                        {copied ? (
                          <FiCheck className="text-green-500" />
                        ) : (
                          <IoClipboardOutline />
                        )}
                      </div>
                    </Tooltip>
                  </div>
                </div>

                <div className="flex items-center gap-x-3 absolute top-16 right-8">
                  <div
                    className={`cursor-pointer bg-zinc-700  ${
                      isTypeScript
                        ? "border-2 border-[#0bab7c] shadow-md shadow-[#0bab7c]/40 rounded"
                        : "0"
                    }`}
                    onClick={() => setIsTypeScript(true)}
                  >
                    <Image
                      src="/typescript.png"
                      alt="typescript"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div
                    className={`cursor-pointer bg-zinc-700  ${
                      !isTypeScript
                        ? "border-2 border-[#0bab7c] shadow-md shadow-[#0bab7c]/40 rounded"
                        : ""
                    }`}
                    onClick={() => setIsTypeScript(false)}
                  >
                    <Image
                      src="/javascript.png"
                      alt="typescript"
                      width={32}
                      height={32}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div
          className={`p-4 h-[400px] overflow-auto ${
            activeTab > 0 ? "bg-zinc-900 dark:bg-transparent" : ""
          }`}
        >
          {tabs[activeTab].content}
        </div>
      </div>
    </div>
  );
};

export default SnippetTabs;
