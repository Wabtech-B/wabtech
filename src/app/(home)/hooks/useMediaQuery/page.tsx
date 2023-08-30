/* eslint-disable react/no-unescaped-entities */
import MediaQuerySnippet from "@/components/wabtech/hooks/useMediaQuery/MediaQuerySnippet";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold">useMediaQuery</h1>
      <div className="mt-4">
        <ul className="list-disc ml-4 text-muted">
          <li className=" leading-7">
            Remember when your website looked amazing on your laptop but turned
            into a mess on your friend's phone? It's like ordering a meal and
            getting a completely different dish—frustrating and disappointing.
          </li>
          <li className="mt-3 leading-7">
            You've spent hours perfecting the layout of your portfolio website,
            only to find out that it's a mess on smaller screens. It's like
            designing a beautiful dress that fits perfectly on the mannequin but
            doesn't look the same on a real person.
          </li>
          <li className="mt-3 leading-7">
            Enter the <span className="code">`useMediaQuery`</span> hook! It's
            like having a responsive design assistant that adapts your content
            to different screen sizes. By using this hook, you can adjust your
            website's appearance based on media queries, ensuring that it looks
            great on various devices.
          </li>
          <li className="mt-3 leading-7">
            The <span className="code">`useMediaQuery`</span> hook provides an
            intuitive way to dynamically respond to changes in media queries and
            adapt your application's layout and behavior accordingly. This hook
            simplifies the process of creating responsive designs and handling
            conditional rendering based on viewport size and other media
            features
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <h1 className="text-2xl md:text-3xl font-bold">Example & Usage</h1>
        <p className="mt-2">
          This shows an example of using this hook with respective code snippets
        </p>
        <div className="my-8">
          <MediaQuerySnippet />
        </div>
      </div>
    </div>
  );
};

export default page;
