/* eslint-disable react/no-unescaped-entities */
import KeyPressSnippet from "@/components/wabtech/hooks/useKeyPress/KeyPressSnippet";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold">useKeyPress</h1>
      <div className="mt-4">
        <ul className="list-disc ml-4 text-muted">
          <li className=" leading-7">
            Have you ever wished you could build a "Press 'X' to Continue"
            feature without writing lines of complicated code? It's like trying
            to explain advanced calculus to a cat—frustrating and unnecessary.
            😀
          </li>
          <li className="mt-3 leading-7">
            You're developing a game and want users to press a specific key to
            move to the next level. But dealing with key events in JavaScript
            feels like explaining physics to your furry feline friend.
          </li>
          <li className="mt-3 leading-7">
            Enter the <span className="code">`useKeyPress`</span> hook! It's
            your shortcut to creating user-friendly interactions. With just a
            few lines of code, you can make your app respond to key presses like
            a well-trained pet, enhancing the user experience.
          </li>
          <li className="mt-3 leading-7">
            The <span className="code">`useKeyPress`</span> hook enables you to
            effortlessly detect when a specific key is pressed on the keyboard
            within your React components. This hook provides an intuitive way to
            capture and respond to keyboard events, facilitating the creation of
            interactive and keyboard-driven user experiences.
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <h1 className="text-2xl md:text-3xl font-bold">Example & Usage</h1>
        <p className="mt-2">
          This shows an example of using this hook with respective code snippets
        </p>
        <div className="my-8">
          <KeyPressSnippet />
        </div>
      </div>
    </div>
  );
};

export default page;
