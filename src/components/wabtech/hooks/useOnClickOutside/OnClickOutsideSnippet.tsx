"use client";

import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import App from "./App";
import Image from "next/image";
import {
  useOnClickOutsideCodeJS,
  useOnClickOutsideCodeJSNextjs,
  useOnClickOutsideCodeTS,
  useOnClickOutsideCodeTSNextjs,
  useOnClickOutsidePreviewCodeJS,
  useOnClickOutsidePreviewCodeJSNextjs,
  useOnClickOutsidePreviewCodeTS,
  useOnClickOutsidePreviewCodeTSNextjs,
} from "@/data/codeSnippets";
import SnippetTabs from "@/components/common/SnippetTabs";

const OnClickOutsideSnippet = () => {
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
          <span>
            {isTypeScript ? "useOnClickOutside.tsx" : "useOnClickOutside.js"}
          </span>
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
              ? useOnClickOutsideCodeTSNextjs
              : useOnClickOutsideCodeJSNextjs
            : isTypeScript
            ? useOnClickOutsideCodeTS
            : useOnClickOutsideCodeJS}
        </SyntaxHighlighter>
      ),
      contentToCopy: isNextJs
        ? isTypeScript
          ? useOnClickOutsideCodeTSNextjs
          : useOnClickOutsideCodeJSNextjs
        : isTypeScript
        ? useOnClickOutsideCodeTS
        : useOnClickOutsideCodeJS,
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
              ? useOnClickOutsidePreviewCodeTSNextjs
              : useOnClickOutsidePreviewCodeJSNextjs
            : isTypeScript
            ? useOnClickOutsidePreviewCodeTS
            : useOnClickOutsidePreviewCodeJS}
        </SyntaxHighlighter>
      ),
      contentToCopy: isNextJs
        ? isTypeScript
          ? useOnClickOutsidePreviewCodeTSNextjs
          : useOnClickOutsidePreviewCodeJSNextjs
        : isTypeScript
        ? useOnClickOutsidePreviewCodeTS
        : useOnClickOutsidePreviewCodeJS,
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

export default OnClickOutsideSnippet;
