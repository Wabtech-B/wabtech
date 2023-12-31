"use client";

import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Simple from "./Simple";
import Image from "next/image";
import SnippetTabs from "@/components/common/SnippetTabs";
import {
  simplePaginationPreviewCodeJS,
  simplePaginationPreviewCodeJSNextjs,
  simplePaginationPreviewCodeTS,
  simplePaginationPreviewCodeTSNextjs,
} from "@/data/codeSnippets";

const SimpleSnippet = () => {
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
          <Simple />
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
              ? simplePaginationPreviewCodeTSNextjs
              : simplePaginationPreviewCodeJSNextjs
            : isTypeScript
            ? simplePaginationPreviewCodeTS
            : simplePaginationPreviewCodeJS}
        </SyntaxHighlighter>
      ),
      contentToCopy: isNextJs
        ? isTypeScript
          ? simplePaginationPreviewCodeTSNextjs
          : simplePaginationPreviewCodeJSNextjs
        : isTypeScript
        ? simplePaginationPreviewCodeTS
        : simplePaginationPreviewCodeJS,
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

export default SimpleSnippet;
