"use client";

import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FaCss3, FaReact } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import App from "./App";
import Image from "next/image";
import {
  scrollableCSS,
  scrollablePreviewCodeJS,
  scrollablePreviewCodeJSNextjs,
  scrollablePreviewCodeTS,
  scrollablePreviewCodeTSNextjs,
  scrollbaleComponentCodeJS,
  scrollbaleComponentCodeJSNextjs,
  scrollbaleComponentCodeTS,
  scrollbaleComponentCodeTSNextjs,
} from "@/data/codeSnippets";
import SnippetTabs from "@/components/common/SnippetTabs";

const ScrollableSnippet = () => {
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
          <span>{isTypeScript ? "Scrollable.tsx" : "Scrollable.js"}</span>
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
              ? scrollbaleComponentCodeTSNextjs
              : scrollbaleComponentCodeJSNextjs
            : isTypeScript
            ? scrollbaleComponentCodeTS
            : scrollbaleComponentCodeJS}
        </SyntaxHighlighter>
      ),
      contentToCopy: isTypeScript
        ? scrollbaleComponentCodeTS
        : scrollbaleComponentCodeJS,
    },
    {
      title: (
        <div className="flex items-center gap-x-2">
          {isTypeScript ? (
            <FaCss3 />
          ) : (
            <Image
              src="/javascript.png"
              alt="javascript"
              width={24}
              height={24}
            />
          )}
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
          {scrollableCSS}
        </SyntaxHighlighter>
      ),
      contentToCopy: scrollableCSS,
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
              ? scrollablePreviewCodeTSNextjs
              : scrollablePreviewCodeJSNextjs
            : isTypeScript
            ? scrollablePreviewCodeTS
            : scrollablePreviewCodeJS}
        </SyntaxHighlighter>
      ),
      contentToCopy: isNextJs
        ? isTypeScript
          ? scrollablePreviewCodeTSNextjs
          : scrollablePreviewCodeJSNextjs
        : isTypeScript
        ? scrollablePreviewCodeTS
        : scrollablePreviewCodeJS,
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

export default ScrollableSnippet;
