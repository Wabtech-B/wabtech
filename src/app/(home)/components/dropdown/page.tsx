/* eslint-disable react/no-unescaped-entities */

import CopyIcon from "@/components/common/CopyIcon";
import CodeSnippet from "../installation/CodeSnippet";
import Alert from "@/components/wabtech/alert/Alert";
import DropdownSnippet from "@/components/wabtech/dropdown/DropdownSnippet";
import CustomDropdownSnippet from "@/components/wabtech/dropdown/CustomDropdownSnippet";
import RightSidebar from "@/components/common/RightSidebar";
import BottomLinks from "@/components/common/BottomLinks";

const Dropdown = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "default", title: "Default Dropdown" },
    { id: "custom", title: "Custom Content" },
    { id: "props", title: "Props" },
    { id: "css_customization", title: "Customization" },
  ];
  const installDeps = `npm install framer-motion`;
  return (
    <div className="grid grid-cols-1 md:grid-cols-auto-200">
      <div>
        <section id="introduction">
          <h1 className="text-3xl font-semibold mb-4">Dropdown</h1>
          <div className="my-4">
            <p>
              The Dropdown component creates a customizable dropdown menu that
              can be triggered by a button or any other custom component. It
              supports both general content and a list of options.
            </p>
          </div>
        </section>
        <section id="default">
          <div className="mt-8">
            <h1 className="text-2xl font-semibold">Installation</h1>
            <p className="mt-2">
              This component uses{" "}
              <a
                href="https://www.framer.com/api/motion/"
                target="_blank"
                className=" text-primary hover:underline"
              >
                framer-motion
              </a>{" "}
              for the slide-in animations. If you intend to use this component,
              make sure to install it.
            </p>
            <div className="bg-zinc-950 border border-zinc-700 p-2 rounded-lg my-4 relative">
              <CodeSnippet snippet={installDeps} />

              <div className="absolute top-5 right-4">
                <CopyIcon text={installDeps} />
              </div>
            </div>
            <h1 className="text-2xl font-semibold mt-6">Usage</h1>
            <div className="my-4">
              <Alert variant="warning">
                <h1 className="text-2xl">Please Note:</h1>
                <p className="mt-2">
                  The <span className="code">Dropdown.tsx</span> has the main
                  code for the component, the rest of the code in{" "}
                  <span className="code">App.tsx</span> shows you how to use the
                  component.
                </p>
              </Alert>
              <h1 className="text-xl mt-3">Default Dropdown with Options</h1>
              <p className="mt-2">
                The Dropdown component can be used to create a dropdown menu
                with a list of options.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <DropdownSnippet />
          </div>
        </section>

        <section id="custom">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Custom Dropdown Content</h1>
            <p className="mt-2">
              You can also provide custom content to the dropdown by passing{" "}
              <span className="code">`general`</span> prop and then providing
              the content.
            </p>
            <div className="mt-8">
              <CustomDropdownSnippet />
            </div>
          </div>
        </section>

        <section id="props" className="pb-10">
          <div className="mt-10">
            <h1 className="text-2xl mt-3 font-semibold">Props</h1>
            <div className="mt-4 overflow-auto table-wrapper border dark:border-zinc-600 rounded-lg">
              <table className="w-full rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-slate-100 dark:bg-zinc-800/60">
                    <th>Prop Name</th>
                    <th>Type</th>
                    <th>Sample Value</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-semibold">`options`</td>
                    <td>Array (optional)</td>
                    <td>See example above</td>
                    <td>An array of options for the dropdown.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`general`</td>
                    <td>true (optional)</td>
                    <td>true</td>
                    <td>
                      Indicates whether the dropdown should be used for general
                      content.
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`children`</td>
                    <td>React.ReactNode (optional)</td>
                    <td>&lt;p&gt;Dropdown content&lt;/p&gt;</td>
                    <td>The content to be displayed within the dropdown.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`className`</td>
                    <td>string (optional)</td>
                    <td>"custom-class"</td>
                    <td>
                      Additional CSS classes to apply to the dropdown container.
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`trigger`</td>
                    <td>JSX.Element</td>
                    <td>&lt;button&gt;Open Dropdown&lt;/button&gt;</td>
                    <td>The trigger component to open the dropdown.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section id="css_customization">
          <div className="mt-10">
            <h1 className="text-2xl mt-3 font-semibold">CSS Customization</h1>
            <p className="mt-2">
              The Dropdown component's appearance can be further customized
              using Tailwind CSS classes. You can adjust the styles, colors, and
              positions to match your design.
            </p>
          </div>
        </section>
        <section id="notes" className="pb-10">
          <div className="mt-10">
            <h1 className="text-2xl mt-3 font-semibold">Notes</h1>
            <div className="mt-4">
              <ul className="list-disc ml-6">
                <li>
                  The Dropdown component uses Framer Motion for animations.
                </li>
                <li>
                  Be sure to have the required dependencies, including Framer
                  Motion, in your project.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="mt-6 mb-10">
          <BottomLinks prevUrl="drawer" nextUrl="floating-input" />
        </div>
      </div>
      <RightSidebar sections={sections} />
    </div>
  );
};

export default Dropdown;
