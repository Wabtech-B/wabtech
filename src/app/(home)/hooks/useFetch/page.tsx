/* eslint-disable react/no-unescaped-entities */
import FetchSnippet from "@/components/wabtech/hooks/useFetch/FetchSnippet";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold">useFetch</h1>
      <div className="mt-4">
        <ul className="list-disc ml-4 text-muted">
          <li className=" leading-7">
            Ever had to fetch data from an API, and you found yourself lost in a
            labyrinth of promises, loading states, and error handling? It's like
            trying to navigate a maze without a map, isn't it?
          </li>
          <li className="mt-3 leading-7">
            Imagine this: You're building an app that needs to display data from
            an external source. You dive into fetching data, and soon enough,
            you're juggling promises, loading spinners, and error messages. It's
            a coding adventure, but you're feeling more like Indiana Jones in
            the Temple of Code. 😀
          </li>
          <li className="mt-3 leading-7">
            Enter the <span className="code">`useFetch`</span> hook! It's like
            having a treasure map to smooth data fetching. With just a single
            hook, you get a neat package of data, loading status, and error
            handling. No more mazes to navigate, just a clean path to displaying
            your data.
          </li>
          <li className="mt-3 leading-7">
            The <span className="code">`useFetch`</span> hook is an
            indispensable tool for handling data fetching scenarios in your
            React applications. By managing loading states, error handling, and
            data retrieval, this hook ensures a streamlined and reliable
            approach to incorporating external data into your application's user
            interface.
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <h1 className="text-2xl md:text-3xl font-bold">Example & Usage</h1>
        <p className="mt-2">
          This shows an example of using this hook with respective code snippets
        </p>
        <div className="my-8">
          <FetchSnippet />
        </div>
      </div>
    </div>
  );
};

export default page;
