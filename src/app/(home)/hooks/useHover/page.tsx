/* eslint-disable react/no-unescaped-entities */
import HooksBottomLinks from "@/components/common/HooksBottomLinks";
import HoverSnippet from "@/components/wabtech/hooks/useHover/HoverSnippet";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold">useHover</h1>
      <div className="mt-4">
        <ul className="list-disc ml-4 text-muted">
          <li className=" leading-7">
            Ever struggled to show tooltips or popups when a user hovers over an
            element? It's like trying to catch a butterfly with oven
            mitts—awkward and ineffective, right?
          </li>
          <li className="mt-3 leading-7">
            Imagine this: You want to create a delightful experience where
            tooltips appear when users hover over buttons. But the tooltips keep
            vanishing as soon as you try to interact with them. It's like trying
            to catch a disappearing act! 😥
          </li>
          <li className="mt-3 leading-7">
            Say hello to the <span className="code">`useHover`</span> hook! It's
            your secret sauce for creating smooth interactions. With this hook,
            you can effortlessly detect when an element is hovered over,
            ensuring that your tooltips and popups stay put and make users
            smile.
          </li>
          <li className="mt-3 leading-7">
            The <span className="code">`useHover`</span> hook empowers you to
            easily track the hover state of an element within your React
            components. This hook provides a straightforward way to add
            interactivity to your application by detecting when an element is
            being hovered over by the user.
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <h1 className="text-2xl md:text-3xl font-bold">Example & Usage</h1>
        <p className="mt-2">
          This shows an example of using this hook with respective code snippets
        </p>
        <div className="my-8">
          <HoverSnippet />
        </div>
      </div>
      <div className="mt-6 mb-10">
        <HooksBottomLinks
          prevUrl="/hooks/useFetch"
          nextUrl="/hooks/useKeyPress"
        />
      </div>
    </div>
  );
};

export default page;
