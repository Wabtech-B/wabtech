"use client";

import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import WithReactRouterDom from "./WithReactRouterDom";
import Image from "next/image";
import {
  breadcrumbWithReactRouterComponentCodeJS,
  breadcrumbWithReactRouterComponentCodeTS,
  routerBreadcrumbPreviewCode,
} from "@/data/codeSnippets";
import SnippetTabs from "@/components/common/SnippetTabs";

const WithReactRouterDomSnippet = () => {
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
          <WithReactRouterDom />
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
            {isTypeScript ? "RouterBreadcrumb.tsx" : "RouterBreadcrumb.js"}
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
          {isTypeScript
            ? breadcrumbWithReactRouterComponentCodeTS
            : breadcrumbWithReactRouterComponentCodeJS}
        </SyntaxHighlighter>
      ),
      contentToCopy: isTypeScript
        ? breadcrumbWithReactRouterComponentCodeTS
        : breadcrumbWithReactRouterComponentCodeJS,
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
          {routerBreadcrumbPreviewCode}
        </SyntaxHighlighter>
      ),
      contentToCopy: routerBreadcrumbPreviewCode,
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

export default WithReactRouterDomSnippet;
