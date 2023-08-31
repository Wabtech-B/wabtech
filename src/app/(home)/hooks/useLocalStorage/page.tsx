/* eslint-disable react/no-unescaped-entities */
import HooksBottomLinks from "@/components/common/HooksBottomLinks";
import LocalStorageSnippet from "@/components/wabtech/hooks/useLocalStorage/LocalStorageSnippet";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold">useLocalStorage</h1>
      <div className="mt-4">
        <ul className="list-disc ml-4 text-muted">
          <li className=" leading-7">
            Remember the struggle of syncing user preferences across different
            sessions? It's like juggling multiple balls in the air—tedious and
            error-prone.
          </li>
          <li className="mt-3 leading-7">
            You're working on a weather app and want to save users' preferred
            temperature units for their next visit. But managing these
            preferences across different sessions feels like trying to keep
            track of all those juggling balls without dropping any.
          </li>
          <li className="mt-3 leading-7">
            Say hello to the <span className="code">`useLocalStorage`</span>{" "}
            hook! It's like having a virtual assistant that handles user
            preferences effortlessly. By using this hook, you can store and
            retrieve data across sessions, making sure that users' settings
            remain consistent and enjoyable.
          </li>
          <li className="mt-3 leading-7">
            The <span className="code">`useLocalStorage`</span> hook streamlines
            data persistence and management by leveraging the browser's
            <span className="code">`localStorage`</span> functionality. With
            automatic initialization and dynamic state updates, you can create
            applications that offer personalized experiences and seamlessly
            retain user preferences between sessions.
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <h1 className="text-2xl md:text-3xl font-bold">Example & Usage</h1>
        <p className="mt-2">
          This shows an example of using this hook with respective code snippets
        </p>
        <div className="my-8">
          <LocalStorageSnippet />
        </div>
      </div>
      <div className="mt-6 mb-10">
        <HooksBottomLinks
          prevUrl="/hooks/useKeyPress"
          nextUrl="/hooks/useMediaQuery"
        />
      </div>
    </div>
  );
};

export default page;
