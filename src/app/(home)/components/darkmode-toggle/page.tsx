/* eslint-disable react/no-unescaped-entities */

import RightSidebar from "@/components/common/RightSidebar";
import Alert from "@/components/wabtech/alert/Alert";
import DarkModeToggleSnippet from "@/components/wabtech/darkmode-toggle/DarkModeToggleSnippet";

const DarkModeToggle = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "hook_usage", title: "Using the hook" },
    { id: "hook_fun", title: "Hook Functionality" },
    { id: "css_customization", title: "Customization" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-auto-200">
      <div>
        <section id="introduction">
          <h1 className="text-3xl font-semibold mb-4">Darkmode Toggle</h1>
          <div className="my-4">
            <p>
              The Darkmode Toggle utility hook is used to enable dark mode for
              your application. This hook allows users to choose between
              different modes: <span className="code">"dark"</span>,{" "}
              <span className="code">"light"</span>, or{" "}
              <span className="code">"system"</span>.
            </p>
          </div>
        </section>
        <section id="hook_usage">
          <div className="mt-8">
            <h1 className="text-2xl font-semibold">Installation</h1>
            <p className="mt-2">
              No installation required, just copy and paste the component code
            </p>
            <h1 className="text-2xl font-semibold mt-6">Usage</h1>
            <div className="my-4">
              <Alert variant="warning">
                <h1 className="text-2xl">Please Note:</h1>
                <p className="mt-2">
                  The <span className="code">useDarkMode.tsx</span> has the main
                  code for the component, the rest of the code in{" "}
                  <span className="code">App.tsx</span> shows you how to use the
                  component.
                </p>
              </Alert>
              <h1 className="text-xl mt-3">Using the Hook</h1>
              <p className="mt-2">
                You can use the Darkmode Toggle hook in your application to
                manage the dark mode state and apply the corresponding styles.
                Make sure you set the <span className="code">darkMode</span>{" "}
                property to <span className="code">class</span> in your{" "}
                <span className="code">tailwind.config</span> file
              </p>
            </div>
          </div>
          <div className="mt-8">
            <DarkModeToggleSnippet />
          </div>
        </section>

        <section id="hook_fun" className="pb-10">
          <div className="mt-10">
            <h1 className="text-2xl mt-3 font-semibold">Hook Functionality</h1>
            The Darkmode Toggle hook provides the following functionality:
            <ul className="ml-6 list-disc mt-3">
              <li>
                <p>
                  <span className="font-semibold">mode</span>: The current mode,
                  which can be one of <span className="code">'dark'</span>,{" "}
                  <span className="code">'light'</span>, or{" "}
                  <span className="code">'system'</span>.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-semibold">handleModeChange</span>: A
                  function that allows you to change the mode. It accepts a new
                  mode as an argument.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section id="css_customization">
          <div className="mt-10">
            <h1 className="text-2xl mt-3 font-semibold">CSS Customization</h1>
            <p className="mt-2">
              The Darkmode Toggle hook applies the dark mode styles to the
              <span className="code">document.documentElement</span>. You can
              customize your CSS styles using the{" "}
              <span className="code">dark</span> class.
            </p>
          </div>
        </section>
        <section id="notes" className="pb-10">
          <div className="mt-10">
            <h1 className="text-2xl mt-3 font-semibold">Notes</h1>
            <div className="mt-4">
              <ul className="list-disc ml-6">
                <li>
                  <p>
                    Ensure that you have the necessary dependencies installed in
                    your project, including React and Tailwind CSS.
                  </p>
                </li>
                <li>
                  <p>
                    If using the <span className="code">system</span> mode, the
                    hook checks the user's system preference for dark mode using{" "}
                    <span className="code">
                      window.matchMedia("(prefers-color-scheme: dark)").matches
                    </span>
                    .
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <RightSidebar sections={sections} />
    </div>
  );
};

export default DarkModeToggle;
