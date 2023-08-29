"use client";

import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import App from "./App";
import Image from "next/image";
import {
  sliderComponentCodeJS,
  sliderComponentCodeTS,
  sliderPreviewCodeJS,
  sliderPreviewCodeTS,
} from "@/data/codeSnippets";
import SnippetTabs from "@/components/common/SnippetTabs";

const SliderSnippet = () => {
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
          <span>{isTypeScript ? "Slider.tsx" : "Slider.js"}</span>
        </div>
      ),
      content: (
        <SyntaxHighlighter
          language="jsx"
          style={vscDarkPlus}
          showLineNumbers={true}
          wrapLines={true}
        >
          {isTypeScript ? sliderComponentCodeTS : sliderComponentCodeJS}
        </SyntaxHighlighter>
      ),
      contentToCopy: isTypeScript
        ? sliderComponentCodeTS
        : sliderComponentCodeJS,
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
          {isTypeScript ? sliderPreviewCodeTS : sliderPreviewCodeJS}
        </SyntaxHighlighter>
      ),
      contentToCopy: isTypeScript ? sliderPreviewCodeTS : sliderPreviewCodeJS,
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

export default SliderSnippet;
