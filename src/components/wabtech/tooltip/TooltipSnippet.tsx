"use client";

import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FaCss3, FaReact } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import App from "./App";
import Image from "next/image";
import {
  tooltipCSS,
  tooltipComponentCodeJS,
  tooltipComponentCodeTS,
  tooltipPreviewCodeJS,
  tooltipPreviewCodeTS,
} from "@/data/codeSnippets";
import SnippetTabs from "@/components/common/SnippetTabs";

const TooltipSnippet = () => {
  const [isTypeScript, setIsTypeScript] = useState(true);
  const codeTabs = [
    {
      title: (
        <div className="flex items-center gap-x-2">
          <FiEye />
          <span>Preview</span>
        </div>
      ),
      content: (
        <div className="mt-6">
          <App />
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center gap-x-2">
          {isTypeScript ? (
            <FaReact />
          ) : (
            <Image
              src="/javascript.png"
              alt="javascript"
              width={24}
              height={24}
            />
          )}
          <span>{isTypeScript ? "Tooltip.tsx" : "Tooltip.js"}</span>
        </div>
      ),
      content: (
        <SyntaxHighlighter
          language="jsx"
          style={vscDarkPlus}
          showLineNumbers={true}
          wrapLines={true}
        >
          {isTypeScript ? tooltipComponentCodeTS : tooltipComponentCodeJS}
        </SyntaxHighlighter>
      ),
      contentToCopy: isTypeScript
        ? tooltipComponentCodeTS
        : tooltipComponentCodeJS,
    },
    {
      title: (
        <div className="flex items-center gap-x-2">
          <FaCss3 />
          <span>index.css</span>
        </div>
      ),
      content: (
        <SyntaxHighlighter
          language="css"
          style={vscDarkPlus}
          showLineNumbers={true}
          wrapLines={true}
        >
          {tooltipCSS}
        </SyntaxHighlighter>
      ),
      contentToCopy: tooltipCSS,
    },
    {
      title: (
        <div className="flex items-center gap-x-2">
          {isTypeScript ? (
            <FaReact />
          ) : (
            <Image
              src="/javascript.png"
              alt="javascript"
              width={24}
              height={24}
            />
          )}
          <span>{isTypeScript ? "App.tsx" : "App.js"}</span>
        </div>
      ),
      content: (
        <SyntaxHighlighter
          language="jsx"
          style={vscDarkPlus}
          showLineNumbers={true}
          wrapLines={true}
        >
          {isTypeScript ? tooltipPreviewCodeTS : tooltipPreviewCodeJS}
        </SyntaxHighlighter>
      ),
      contentToCopy: isTypeScript ? tooltipPreviewCodeTS : tooltipPreviewCodeJS,
    },
  ];
  return (
    <>
      <SnippetTabs
        tabs={codeTabs}
        isTypeScript={isTypeScript}
        setIsTypeScript={setIsTypeScript}
      />
    </>
  );
};

export default TooltipSnippet;
