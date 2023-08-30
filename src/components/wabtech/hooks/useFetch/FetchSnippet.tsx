"use client";

import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import App from "./App";
import Image from "next/image";
import {
  useFetchCodeJS,
  useFetchCodeJSNextjs,
  useFetchCodeTS,
  useFetchCodeTSNextjs,
  useFetchPreviewCodeJS,
  useFetchPreviewCodeJSNextjs,
  useFetchPreviewCodeTS,
  useFetchPreviewCodeTSNextjs,
} from "@/data/codeSnippets";
import SnippetTabs from "@/components/common/SnippetTabs";

const FetchSnippet = () => {
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
          <span>{isTypeScript ? "useFetch.tsx" : "useFetch.js"}</span>
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
              ? useFetchCodeTSNextjs
              : useFetchCodeJSNextjs
            : isTypeScript
            ? useFetchCodeTS
            : useFetchCodeJS}
        </SyntaxHighlighter>
      ),
      contentToCopy: isNextJs
        ? isTypeScript
          ? useFetchCodeTSNextjs
          : useFetchCodeJSNextjs
        : isTypeScript
        ? useFetchCodeTS
        : useFetchCodeJS,
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
              ? useFetchPreviewCodeTSNextjs
              : useFetchPreviewCodeJSNextjs
            : isTypeScript
            ? useFetchPreviewCodeTS
            : useFetchPreviewCodeJS}
        </SyntaxHighlighter>
      ),
      contentToCopy: isNextJs
        ? isTypeScript
          ? useFetchPreviewCodeTSNextjs
          : useFetchPreviewCodeJSNextjs
        : isTypeScript
        ? useFetchPreviewCodeTS
        : useFetchPreviewCodeJS,
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

export default FetchSnippet;
