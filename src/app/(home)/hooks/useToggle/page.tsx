/* eslint-disable react/no-unescaped-entities */
import HooksBottomLinks from "@/components/common/HooksBottomLinks";
import ToggleSnippet from "@/components/wabtech/hooks/useToggle/ToggleSnippet";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold">useToggle</h1>
      <div className="mt-4">
        <ul className="list-disc ml-4 text-muted">
          <li className=" leading-7">
            Have you ever struggled with building a navigation menu that
            highlights the active item as you navigate through different
            sections of your app? It's like trying to find a needle in a
            haystack when it comes to managing the active state of menu items,
            right?
          </li>
          <li className="mt-3 leading-7">
            Picture this: You're building a sleek navigation menu for your
            website. You've got a dozen menu items, and as users explore
            different sections, you want the active item to stand out. But the
            more you code, the more complicated things get. You're juggling
            states and event listeners, and it's turning into a coding circus!
            If only there were a quicker way to handle the active state without
            all the hoopla.
          </li>
          <li className="mt-3 leading-7">
            Introducing the <span className="code">`useToggle`</span> hook! With
            just a few lines of code, you can effortlessly toggle the active
            state of items in your list. Say goodbye to the circus and hello to
            simplified navigation menus that shine.
          </li>
          <li className="mt-3 leading-7">
            The <span className="code">`useToggle`</span> hook simplifies the
            management of toggleable items within a list, enabling you to
            effortlessly handle the active state of items. Whether you're
            building navigation menus, filters, or interactive components, this
            hook empowers you to toggle items' active state with ease.
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <h1 className="text-2xl md:text-3xl font-bold">Example & Usage</h1>
        <p className="mt-2">
          This shows an example of using this hook with respective code snippets
        </p>
        <div className="my-8">
          <ToggleSnippet />
        </div>
      </div>
      <div className="mt-6 mb-10">
        <HooksBottomLinks prevUrl="/hooks/useScroll" />
      </div>
    </div>
  );
};

export default page;
