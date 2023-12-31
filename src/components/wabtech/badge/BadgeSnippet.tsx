"use client";

import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import App from "./App";
import Image from "next/image";
import {
  badgeComponentCodeJS,
  badgeComponentCodeJSNextjs,
  badgeComponentCodeTS,
  badgeComponentCodeTSNextjs,
  badgePreviewCodeJS,
  badgePreviewCodeJSNextjs,
  badgePreviewCodeTS,
  badgePreviewCodeTSNextjs,
} from "@/data/codeSnippets";
import SnippetTabs from "@/components/common/SnippetTabs";

const BadgeSnippet = () => {
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
          <span>{isTypeScript ? "Badge.tsx" : "Badge.js"}</span>
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
              ? badgeComponentCodeTSNextjs
              : badgeComponentCodeJSNextjs
            : isTypeScript
            ? badgeComponentCodeTS
            : badgeComponentCodeJS}
        </SyntaxHighlighter>
      ),
      contentToCopy: isNextJs
        ? isTypeScript
          ? badgeComponentCodeTSNextjs
          : badgeComponentCodeJSNextjs
        : isTypeScript
        ? badgeComponentCodeTS
        : badgeComponentCodeJS,
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
              ? badgePreviewCodeTSNextjs
              : badgePreviewCodeJSNextjs
            : isTypeScript
            ? badgePreviewCodeTS
            : badgePreviewCodeJS}
        </SyntaxHighlighter>
      ),
      contentToCopy: isNextJs
        ? isTypeScript
          ? badgePreviewCodeTSNextjs
          : badgePreviewCodeJSNextjs
        : isTypeScript
        ? badgePreviewCodeTS
        : badgePreviewCodeJS,
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

export default BadgeSnippet;
