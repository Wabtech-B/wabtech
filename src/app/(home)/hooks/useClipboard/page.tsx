/* eslint-disable react/no-unescaped-entities */
import HooksBottomLinks from "@/components/common/HooksBottomLinks";
import ClipboardSnippet from "@/components/wabtech/hooks/useClipboard/ClipboardSnippet";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold">useClipboard</h1>
      <div className="mt-4">
        <ul className="list-disc ml-4 text-muted">
          <li className=" leading-7">
            Ever had a brilliant piece of text you wanted to share with the
            world, but copying it was like playing a game of cat and mouse with
            your cursor and the context menu?
          </li>
          <li className="mt-3 leading-7">
            We've all been there—ready to share a golden nugget of text but
            stuck in a copy-paste maze. You highlight, right-click, select
            "Copy," and hope it actually works. And when it doesn't, frustration
            kicks in. Wouldn't it be nice if you could just click a button and
            know that your text is copied?
          </li>
          <li className="mt-3 leading-7">
            Introducing the <span className="code">`useClipboard`</span> hook!
            It's like having a magic wand for copying text. With a simple
            function call, your text is whisked away to the clipboard. No more
            chasing your cursor around or hoping for the best. Share your
            brilliance with a click!
          </li>
          <li className="mt-3 leading-7">
            The <span className="code">`useClipboard`</span> hook is a simple
            and reusable utility that empowers you to easily interact with the
            clipboard functionality in your React applications. With this hook,
            you can effortlessly copy text to the clipboard and receive instant
            feedback on the copy action.
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <h1 className="text-2xl md:text-3xl font-bold">Example & Usage</h1>
        <p className="mt-2">
          This shows an example of using this hook with respective code
          snippets.
        </p>
        <div className="my-8">
          <ClipboardSnippet />
        </div>
      </div>
      <div className="mt-6 mb-10">
        <HooksBottomLinks prevUrl="/hooks" nextUrl="/hooks/useDarkMode" />
      </div>
    </div>
  );
};

export default page;
