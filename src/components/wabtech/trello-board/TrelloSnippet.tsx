"use client";

import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import App from "./App";
import Image from "next/image";
import {
  trelloCardsComponentCodeJS,
  trelloCardsComponentCodeJSNextjs,
  trelloCardsComponentCodeTS,
  trelloCardsComponentCodeTSNextjs,
  trelloColumnComponentCodeJS,
  trelloColumnComponentCodeJSNextjs,
  trelloColumnComponentCodeTS,
  trelloColumnComponentCodeTSNextjs,
  trelloComponentCodeJS,
  trelloComponentCodeJSNextjs,
  trelloComponentCodeTS,
  trelloComponentCodeTSNextjs,
  trelloPreviewCodeJS,
  trelloPreviewCodeJSNextjs,
  trelloPreviewCodeTS,
  trelloPreviewCodeTSNextjs,
} from "@/data/codeSnippets";
import SnippetTabs from "@/components/common/SnippetTabs";

const TrelloSnippet = () => {
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
          <span>{isTypeScript ? "Trello.tsx" : "Trello.js"}</span>
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
              ? trelloComponentCodeTSNextjs
              : trelloComponentCodeJSNextjs
            : isTypeScript
            ? trelloComponentCodeTS
            : trelloComponentCodeJS}
        </SyntaxHighlighter>
      ),
      contentToCopy: isNextJs
        ? isTypeScript
          ? trelloComponentCodeTSNextjs
          : trelloComponentCodeJSNextjs
        : isTypeScript
        ? trelloComponentCodeTS
        : trelloComponentCodeJS,
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
          <span>{isTypeScript ? "TrelloColumn.tsx" : "TrelloColumn.js"}</span>
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
              ? trelloColumnComponentCodeTSNextjs
              : trelloColumnComponentCodeJSNextjs
            : isTypeScript
            ? trelloColumnComponentCodeTS
            : trelloColumnComponentCodeJS}
        </SyntaxHighlighter>
      ),
      contentToCopy: isNextJs
        ? isTypeScript
          ? trelloColumnComponentCodeTSNextjs
          : trelloColumnComponentCodeJSNextjs
        : isTypeScript
        ? trelloColumnComponentCodeTS
        : trelloColumnComponentCodeJS,
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
          <span>{isTypeScript ? "TrelloCard.tsx" : "TrelloCard.js"}</span>
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
              ? trelloCardsComponentCodeTSNextjs
              : trelloCardsComponentCodeJSNextjs
            : isTypeScript
            ? trelloCardsComponentCodeTS
            : trelloCardsComponentCodeJS}
        </SyntaxHighlighter>
      ),
      contentToCopy: isNextJs
        ? isTypeScript
          ? trelloCardsComponentCodeTSNextjs
          : trelloCardsComponentCodeJSNextjs
        : isTypeScript
        ? trelloCardsComponentCodeTS
        : trelloCardsComponentCodeJS,
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
              ? trelloPreviewCodeTSNextjs
              : trelloPreviewCodeJSNextjs
            : isTypeScript
            ? trelloPreviewCodeTS
            : trelloPreviewCodeJS}
        </SyntaxHighlighter>
      ),
      contentToCopy: isNextJs
        ? isTypeScript
          ? trelloPreviewCodeTSNextjs
          : trelloPreviewCodeJSNextjs
        : isTypeScript
        ? trelloPreviewCodeTS
        : trelloPreviewCodeJS,
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

export default TrelloSnippet;
