/* eslint-disable react/no-unescaped-entities */
import ScrollSnippet from "@/components/wabtech/hooks/useScroll/ScrollSnippet";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold">useScroll</h1>
      <div className="mt-4">
        <ul className="list-disc ml-4 text-muted">
          <li className=" leading-7">
            Ever needed to create a "scroll to top" button for a long page? It's
            like trying to climb a mountain without any footholds—tedious and
            tiring.
          </li>
          <li className="mt-3 leading-7">
            You've designed a beautifully long webpage, but users are
            complaining about scrolling back to the top. It's like asking them
            to climb a mountain without any assistance.
          </li>
          <li className="mt-3 leading-7">
            Meet the <span className="code">`useScroll`</span> hook! It's like
            providing users with a magical elevator that whisks them back to the
            top of the page. By using this hook, you can easily create a smooth
            scrolling experience and save users from endless finger swipes.
          </li>
          <li className="mt-3 leading-7">
            The <span className="code">`useScroll`</span> hook equips you with
            real-time access to scroll coordinates, enabling you to create
            captivating scrolling experiences and responsive designs. By
            integrating scroll data into your components, you can effortlessly
            implement various effects, animations, and behaviors that respond
            dynamically to user interaction.
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <h1 className="text-2xl md:text-3xl font-bold">Example & Usage</h1>
        <p className="mt-2">
          This shows an example of using this hook with respective code snippets
        </p>
        <div className="my-8">
          <ScrollSnippet />
        </div>
      </div>
    </div>
  );
};

export default page;
