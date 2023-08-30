/* eslint-disable react/no-unescaped-entities */
import Alert from "@/components/wabtech/alert/Alert";
import React from "react";

const HooksOverviewPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Custom Hooks Overview
      </h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          Introduction to Custom Hooks
        </h2>
        <p>
          Custom hooks are a powerful way to encapsulate and reuse logic in your
          React/Next.js applications. They allow you to abstract complex
          functionalities into reusable functions that can be easily shared
          across different components.
        </p>
      </div>

      <div className="my-6">
        <Alert>
          <h1 className="text-xl font-semibold">Please note:</h1>
          <p className="mt-2">
            These hooks are supported in both pure React.js and Next.js
            applications.
          </p>
        </Alert>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Why Custom Hooks Matter</h2>
        <p>
          Custom hooks promote code organization, modularity, and reusability.
          By isolating specific functionalities, you can create hooks that
          address common use cases, making your codebase cleaner and more
          maintainable.
        </p>
      </div>

      <div className="gradient-box p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Getting Started with Custom Hooks
        </h2>
        <p>
          To use a custom hook, simply import it into your component and call
          it. Custom hooks can be easily integrated into components, enabling
          you to harness their benefits regardless of your preferred component
          style.
        </p>
      </div>

      <div className="bg-zinc-100 dark:bg-zinc-800 border dark:border-zinc-700 rounded-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-2">Examples of Custom Hooks</h2>
        <p>
          Below are some examples of custom hooks we've created that you can use
          in your projects:
        </p>
        <ul className="ml-8 list-disc">
          <li className="mt-2">
            <span className="code">useClipboard:</span> Manage clipboard
            interactions with ease.
          </li>
          <li className="mt-2">
            <span className="code">useDarkMode:</span> Toggle and manage dark
            mode settings.
          </li>
          <li className="mt-2">
            <span className="code">useFetch:</span> Simplify API data fetching
            and error handling.
          </li>
          <li className="mt-2">
            <span className="code">useHover:</span> Track whether an element is
            being hovered over.
          </li>
          <li className="mt-2">
            <span className="code">useKeyPress:</span> Detect key presses and
            trigger actions.
          </li>
          <li className="mt-2">
            <span className="code">useLocalStorage:</span> Easily manage state
            in local storage.
          </li>
          <li className="mt-2">
            <span className="code">useMediaQuery:</span> Respond to changes in
            media queries.
          </li>
          <li className="mt-2">
            <span className="code">useOnClickOutside:</span> Handle clicks
            outside of specific elements.
          </li>
          <li className="mt-2">
            <span className="code">useScroll:</span> Monitor scroll position in
            your components.
          </li>
          <li className="mt-2">
            <span className="code">useToggle:</span> Create toggleable states
            for components.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Harnessing the Benefits</h2>
        <p>
          Custom hooks help you reduce boilerplate code, enhance code
          reusability, and improve the overall structure of your application. By
          using these hooks, you can streamline your development process and
          focus more on building great user experiences.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Exploring More Hooks</h2>
        <p>
          In addition to the hooks mentioned here, you can create your own
          custom hooks to address specific needs within your application. As
          your project grows, having a library of reusable hooks will become
          invaluable in maintaining a scalable and efficient codebase.
        </p>
      </div>
    </div>
  );
};

export default HooksOverviewPage;
