/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Hooks = () => {
  return (
    <div className="py-16 max-w-7xl mx-auto px-3">
      <div className="flex-align-center flex-wrap gap-10">
        <div className="flex-1 basis-80 order-2 sm:order-none">
          <img
            src="/hooks.png"
            alt="Hooks"
            className="w-full h-full hidden dark:block"
          />
          <img
            src="/hooks-light.png"
            alt="Hooks"
            className="w-full h-full dark:hidden"
          />
        </div>
        <div className="flex-1 basis-80">
          <h1 className="text-3xl font-bold capitalize">
            Reusable Custom Hooks
          </h1>
          <p className="mt-5">
            We leverage code efficiency and modularity. Our collection of React
            reusable hooks simplifies complex functionalities, enabling
            developers to integrate advanced features seamlessly. These hooks
            have been optimized for performance, ensuring that projects maintain
            high-speed responsiveness without compromising functionality.
          </p>
          <Link href="/hooks" className="btn btn-primary block w-max mt-5">
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hooks;
