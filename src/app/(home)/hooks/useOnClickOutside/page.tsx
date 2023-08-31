/* eslint-disable react/no-unescaped-entities */
import HooksBottomLinks from "@/components/common/HooksBottomLinks";
import OnClickOutsideSnippet from "@/components/wabtech/hooks/useOnClickOutside/OnClickOutsideSnippet";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold">useOnClickOutside</h1>
      <div className="mt-4">
        <ul className="list-disc ml-4 text-muted">
          <li className=" leading-7">
            Have you ever tried to close a dropdown menu by clicking outside,
            but it stubbornly stayed open? It's like trying to turn off the
            lights by clapping your hands—ineffective and slightly embarrassing.
          </li>
          <li className="mt-3 leading-7">
            You're exploring a website's navigation menu, and you want to close
            the dropdown by clicking outside of it. However, no matter how many
            times you click, the dropdown menu refuses to budge. It's like
            dealing with a mischievous door that won't close properly.
          </li>
          <li className="mt-3 leading-7">
            Introducing the <span className="code">`useOnClickOutside`</span>{" "}
            hook! It's like having a reliable butler who discreetly closes the
            door behind you. With this hook, you can make sure that your menus
            and pop-ups obediently disappear when you click outside their
            boundaries.
          </li>
          <li className="mt-3 leading-7">
            The <span className="code">`useOnClickOutside`</span> hook
            simplifies the process of detecting clicks or touches that occur
            outside a specific element, allowing you to trigger custom behavior
            when the user interacts with areas outside the designated component.
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <h1 className="text-2xl md:text-3xl font-bold">Example & Usage</h1>
        <p className="mt-2">
          This shows an example of using this hook with respective code snippets
        </p>
        <div className="my-8">
          <OnClickOutsideSnippet />
        </div>
      </div>
      <div className="mt-6 mb-10">
        <HooksBottomLinks
          prevUrl="/hooks/useMediaQuery"
          nextUrl="/hooks/useScroll"
        />
      </div>
    </div>
  );
};

export default page;
