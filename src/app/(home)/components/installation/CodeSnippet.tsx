"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeSnippet = ({
  snippet,
  showLines = false,
  language = "bash",
}: {
  snippet: string;
  showLines?: boolean;
  language?: string;
}) => {
  return (
    <>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        wrapLines={true}
        showLineNumbers={showLines}
      >
        {snippet}
      </SyntaxHighlighter>
    </>
  );
};

export default CodeSnippet;
