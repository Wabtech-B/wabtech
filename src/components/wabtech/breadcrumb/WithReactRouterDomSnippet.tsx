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
  breadcrumbWithReactRouterComponentCodeJSNextjs,
  breadcrumbWithReactRouterComponentCodeTS,
  breadcrumbWithReactRouterComponentCodeTSNextjs,
  routerBreadcrumbPreviewCode,
  routerBreadcrumbPreviewCodeNextjs,
} from "@/data/codeSnippets";
import SnippetTabs from "@/components/common/SnippetTabs";

const WithReactRouterDomSnippet = () => {
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
          {isNextJs
            ? isTypeScript
              ? breadcrumbWithReactRouterComponentCodeTSNextjs
              : breadcrumbWithReactRouterComponentCodeJSNextjs
            : isTypeScript
            ? breadcrumbWithReactRouterComponentCodeTS
            : breadcrumbWithReactRouterComponentCodeJS}
        </SyntaxHighlighter>
      ),
      contentToCopy: isNextJs
        ? isTypeScript
          ? breadcrumbWithReactRouterComponentCodeTSNextjs
          : breadcrumbWithReactRouterComponentCodeJSNextjs
        : isTypeScript
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
          {isNextJs
            ? routerBreadcrumbPreviewCodeNextjs
            : routerBreadcrumbPreviewCode}
        </SyntaxHighlighter>
      ),
      contentToCopy: isNextJs
        ? routerBreadcrumbPreviewCodeNextjs
        : routerBreadcrumbPreviewCode,
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

export default WithReactRouterDomSnippet;
