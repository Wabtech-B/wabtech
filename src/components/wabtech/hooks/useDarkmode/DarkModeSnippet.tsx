"use client";

import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import App from "./App";
import Image from "next/image";
import {
  useDarkModeCodeJS,
  useDarkModeCodeJSNextjs,
  useDarkModeCodeTS,
  useDarkModeCodeTSNextjs,
  useDarkModePreviewCodeJS,
  useDarkModePreviewCodeJSNextjs,
  useDarkModePreviewCodeTS,
  useDarkModePreviewCodeTSNextjs,
} from "@/data/codeSnippets";
import SnippetTabs from "@/components/common/SnippetTabs";

const DarkModeSnippet = () => {
  const [isTypeScript, setIsTypeScript] = useState(true);
  const [isNextJs, setIsNextJs] = useState(false);

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
          <span>{isTypeScript ? "useDarkMode.tsx" : "useDarkMode.js"}</span>
        </div>
      ),
      content: (
        <SyntaxHighlighter
          language="jsx"
          style={vscDarkPlus}
          showLineNumbers={true}
          wrapLines={true}
        >
          {isNextJs
            ? isTypeScript
              ? useDarkModeCodeTSNextjs
              : useDarkModeCodeJSNextjs
            : isTypeScript
            ? useDarkModeCodeTS
            : useDarkModeCodeJS}
        </SyntaxHighlighter>
      ),
      contentToCopy: isNextJs
        ? isTypeScript
          ? useDarkModeCodeTSNextjs
          : useDarkModeCodeJSNextjs
        : isTypeScript
        ? useDarkModeCodeTS
        : useDarkModeCodeJS,
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
          {isNextJs
            ? isTypeScript
              ? useDarkModePreviewCodeTSNextjs
              : useDarkModePreviewCodeJSNextjs
            : isTypeScript
            ? useDarkModePreviewCodeTS
            : useDarkModePreviewCodeJS}
        </SyntaxHighlighter>
      ),
      contentToCopy: isNextJs
        ? isTypeScript
          ? useDarkModePreviewCodeTSNextjs
          : useDarkModePreviewCodeJSNextjs
        : isTypeScript
        ? useDarkModePreviewCodeTS
        : useDarkModePreviewCodeJS,
    },
  ];
  return (
    <>
      <SnippetTabs
        tabs={codeTabs}
        isNextJs={isNextJs}
        setIsNextJs={setIsNextJs}
        isTypeScript={isTypeScript}
        setIsTypeScript={setIsTypeScript}
      />
    </>
  );
};

export default DarkModeSnippet;
