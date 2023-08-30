/* eslint-disable react/no-unescaped-entities */
import DarkModeSnippet from "@/components/wabtech/hooks/useDarkmode/DarkModeSnippet";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold">useDarkMode</h1>
      <div className="mt-4">
        <ul className="list-disc ml-4 text-muted">
          <li className=" leading-7">
            Remember that time you stayed up late, coding away, and suddenly
            your eyes felt like they were caught in a cosmic battle between
            light and dark mode? Ouch!
          </li>
          <li className="mt-3 leading-7">
            Burning the midnight oil is great until your app's light mode starts
            to feel like a blazing sunbeam. Dark mode beckons, but toggling it
            on and off manually is a mood killer. If only your app could adapt
            to your environment seamlessly.
          </li>
          <li className="mt-3 leading-7">
            Enter the <span className="code">`useDarkMode`</span> hook! It's
            like having an intelligent assistant for your app's appearance.
            Whether you prefer light, dark, or even system mode, this hook takes
            care of it. No more blinding sunbeams or cosmic battles—just smooth
            transitions for your tired eyes.
          </li>
          <li className="mt-3 leading-7">
            The <span className="code">`useDarkMode`</span> hook is a versatile
            utility that simplifies the implementation of dark mode in your
            React applications. This hook provides a convenient way to manage
            different dark mode preferences, including "dark," "light," and
            "system" modes, while ensuring the user's choice is persisted using
            local storage.
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
          <DarkModeSnippet />
        </div>
      </div>
    </div>
  );
};

export default page;
