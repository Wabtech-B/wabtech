/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";

const Components = () => {
  return (
    <div className="py-16 max-w-7xl mx-auto px-3">
      <div className="flex-align-center flex-wrap gap-10">
        <div className="flex-1 basis-80">
          <h1 className="text-3xl font-bold capitalize">
            Copy and Paste Components, <br /> No installation
          </h1>
          <p className="mt-4">
            Our flagship offering includes a meticulously curated collection of
            beautifully designed, reusable React.js/Next.js-TailwindCSS
            components. These components are crafted to enhance development
            efficiency, improve user experiences, and accelerate project
            timelines. With comprehensive documentation and easy-to-integrate
            code snippets, these components streamline the development process
            while maintaining high-quality standards.It's just a matter of copy
            and paste
          </p>

          <h1 className="text-2xl mt-5 font-bold capitalize">
            Get Started in Seconds
          </h1>
          <p className="mt-4">
            With our components, there's no need to worry about complex setup
            processes or managing dependencies. You can easily enhance your
            project's UI by following these straightforward steps:
          </p>
          <div className="mt-4 relative before:absolute before:h-full before:w-[2px] before:bg-primary">
            <div className="pl-4">
              <div>
                <h1 className="text-xl font-semibold relative before:absolute before:w-4 before:h-4 before:rounded-full before:bg-gradient-to-t before:from-primary before:to-yellow-500 before:-left-6 before:top-1/2 before:-translate-y-1/2">
                  Browse Our Documentation:
                </h1>
                <p className="mt-1">
                  Explore our user-friendly{" "}
                  <Link href="/components" className="text-primary underline">
                    documentation
                  </Link>{" "}
                  to find the perfect components for your project.
                </p>
              </div>

              <div className="mt-4">
                <h1 className="text-xl font-semibold relative before:absolute before:w-4 before:h-4 before:rounded-full before:bg-gradient-to-t before:from-primary before:to-yellow-500 before:-left-6 before:top-1/2 before:-translate-y-1/2">
                  Copy the Code:
                </h1>
                <p className="mt-1">
                  Select the component code snippet from the documentation.
                </p>
              </div>

              <div className="mt-4">
                <h1 className="text-xl font-semibold relative before:absolute before:w-4 before:h-4 before:rounded-full before:bg-gradient-to-t before:from-primary before:to-yellow-500 before:-left-6 before:top-1/2 before:-translate-y-1/2">
                  Paste and Customize:
                </h1>
                <p className="mt-1">
                  Drop the code into your React/Next project. Customize it to
                  match your design preferences and requirements.
                </p>
              </div>

              <div className="mt-4">
                <h1 className="text-xl font-semibold relative before:absolute before:w-4 before:h-4 before:rounded-full before:bg-gradient-to-t before:from-primary before:to-yellow-500 before:-left-6 before:top-1/2 before:-translate-y-1/2">
                  Run Your Project:
                </h1>
                <p className="mt-1">
                  Start your React/Next.js development server to instantly see
                  the components in action.
                </p>
              </div>
            </div>
          </div>
          <Link href="/components" className="btn btn-primary block w-max mt-5">
            Get started
          </Link>
        </div>
        <div className="flex-1 basis-80">
          <img
            src="/components.png"
            alt="Components"
            className="w-full h-full hidden dark:block"
          />
          <img
            src="/components-light.png"
            alt="Components"
            className="w-full h-full dark:hidden"
          />
          <div className="">
            <img
              src="/code.png"
              alt="Code Snippet"
              className="w-full h-full rounded-lg shadow-lg hidden dark:block"
            />
            <img
              src="/code-light.png"
              alt="Code Snippet"
              className="w-full h-full rounded-lg shadow-lg dark:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Components;
