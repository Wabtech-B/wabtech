"use client";

import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import App from "./App";
import Image from "next/image";
import {
  draggableListComponentCodeJS,
  draggableListComponentCodeJSNextjs,
  draggableListComponentCodeTS,
  draggableListComponentCodeTSNextjs,
  draggableListItemComponentCodeJS,
  draggableListItemComponentCodeJSNextjs,
  draggableListItemComponentCodeTS,
  draggableListItemComponentCodeTSNextjs,
  draggableListPreviewCodeJS,
  draggableListPreviewCodeJSNextjs,
  draggableListPreviewCodeTS,
  draggableListPreviewCodeTSNextjs,
} from "@/data/codeSnippets";
import SnippetTabs from "@/components/common/SnippetTabs";

const DraggableListSnippet = () => {
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
          <span>{isTypeScript ? "DraggableList.tsx" : "DraggableList.js"}</span>
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
              ? draggableListComponentCodeTSNextjs
              : draggableListComponentCodeJSNextjs
            : isTypeScript
            ? draggableListComponentCodeTS
            : draggableListComponentCodeJS}
        </SyntaxHighlighter>
      ),
      contentToCopy: isNextJs
        ? isTypeScript
          ? draggableListComponentCodeTSNextjs
          : draggableListComponentCodeJSNextjs
        : isTypeScript
        ? draggableListComponentCodeTS
        : draggableListComponentCodeJS,
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
          <span>{isTypeScript ? "ListItem.tsx" : "ListItem.js"}</span>
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
              ? draggableListItemComponentCodeTSNextjs
              : draggableListItemComponentCodeJSNextjs
            : isTypeScript
            ? draggableListItemComponentCodeTS
            : draggableListItemComponentCodeJS}
        </SyntaxHighlighter>
      ),
      contentToCopy: isNextJs
        ? isTypeScript
          ? draggableListItemComponentCodeTSNextjs
          : draggableListItemComponentCodeJSNextjs
        : isTypeScript
        ? draggableListItemComponentCodeTS
        : draggableListItemComponentCodeJS,
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
              ? draggableListPreviewCodeTSNextjs
              : draggableListPreviewCodeJSNextjs
            : isTypeScript
            ? draggableListPreviewCodeTS
            : draggableListPreviewCodeJS}
        </SyntaxHighlighter>
      ),
      contentToCopy: isNextJs
        ? isTypeScript
          ? draggableListPreviewCodeTSNextjs
          : draggableListPreviewCodeJSNextjs
        : isTypeScript
        ? draggableListPreviewCodeTS
        : draggableListPreviewCodeJS,
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

export default DraggableListSnippet;
