/* eslint-disable react/no-unescaped-entities */

import RightSidebar from "@/components/common/RightSidebar";
import Alert from "@/components/wabtech/alert/Alert";
import AutoHideControlsSnippet from "@/components/wabtech/scrollable/AutoHideControlsSnippet";
import CustomControlsSnippet from "@/components/wabtech/scrollable/CustomControlsSnippet";
import ScrollableSnippet from "@/components/wabtech/scrollable/ScrollableSnippet";

const Scrollable = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "default", title: "Default Scrollable" },
    { id: "custom_controls", title: "Custom Controls" },
    { id: "auto_hide", title: "Auto-hide Controls" },
    { id: "props", title: "Props" },
    { id: "css_customization", title: "Customization" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-auto-200">
      <div>
        <section id="introduction">
          <h1 className="text-3xl font-semibold mb-4">Scrollable</h1>
          <div className="my-4">
            <p>
              The Scrollable component provides a container for horizontally
              scrolling content. It includes options for custom controls,
              auto-hiding controls, and default controls with chevron icons.
            </p>
          </div>
        </section>
        <section id="default">
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
                  The <span className="code">Scrollable.tsx</span> has the main
                  code for the component, the rest of the code in{" "}
                  <span className="code">App.tsx</span> shows you how to use the
                  component.
                </p>
              </Alert>
              <h1 className="text-xl mt-3">Default Scrollable</h1>
              <p className="mt-2">
                You can use the Scrollable component to create a horizontally
                scrolling container for your content. It comes with default
                controls.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <ScrollableSnippet />
          </div>
        </section>

        <section id="custom_controls">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Scrollable with Custom Controls</h1>
            <p className="mt-2">
              You can use the Scrollable component with custom controls using{" "}
              <span className="code">`rightControl`</span> and{" "}
              <span className="code">`leftControl`</span> props
            </p>
            <div className="mt-8">
              <CustomControlsSnippet />
            </div>
          </div>
        </section>

        <section id="auto_hide">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Auto-Hide Controls</h1>
            <p className="mt-2">
              he Scrollable component offers an "auto-hide" feature for
              controls, allowing them to automatically hide when they are not
              needed. This behavior occurs when the scrollable content reaches
              the end of its scrollable range in the respective direction.To
              allow this feature, pass the{" "}
              <span className="code">`autoHideControls`</span> prop to the
              component
            </p>
            <p>
              When the <span className="code">`autoHideControls`</span> prop is
              set to <span className="code">`true`</span>, the Scrollable
              component's controls will hide automatically under the following
              conditions:
            </p>
            <ol className="ml-6 mt-4 numbered-list">
              <li>
                <p>
                  <strong>Left Control Hiding</strong>: If the scrollable
                  content is scrolled to the beginning (leftmost position), the
                  left control will automatically hide.
                </p>
              </li>
              <li>
                <p>
                  <strong>Right Control Hiding</strong>: If the scrollable
                  content is scrolled to the end (rightmost position), the right
                  control will automatically hide.
                </p>
              </li>
            </ol>
            <div className="mt-8">
              <AutoHideControlsSnippet />
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
                    <th>Prop</th>
                    <th>Type</th>
                    <th>Sample Value</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-semibold">`children`</td>
                    <td>React.ReactNode</td>
                    <td>&lt;div&gt;Content&lt;/div&gt;</td>
                    <td>
                      Content to be displayed within the scrollable container.
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`leftControl`</td>
                    <td>JSX.Element (optional)</td>
                    <td>&lt;IconComponent /&gt;</td>
                    <td>
                      A custom control element for scrolling the content to the
                      left.
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`rightControl`</td>
                    <td>JSX.Element (optional)</td>
                    <td>&lt;IconComponent /&gt;</td>
                    <td>
                      A custom control element for scrolling the content to the
                      right.
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`autoHideControls`</td>
                    <td>boolean (optional)</td>
                    <td>true</td>
                    <td>
                      When set to true, controls will automatically hide when
                      not needed.
                    </td>
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
              You can customize the appearance of the Scrollable component using
              CSS classes. These classes can be used to adjust the styles of the
              scrollable container and its controls.
            </p>
          </div>
        </section>
        <section id="notes" className="pb-10">
          <div className="mt-10">
            <h1 className="text-2xl mt-3 font-semibold">Notes</h1>
            <div className="mt-4">
              <ul className="list-disc ml-6">
                <li>
                  The Scrollable component provides a horizontally scrolling
                  container for content.
                </li>
                <li>
                  You can use the <span className="code">`leftControl`</span>{" "}
                  and
                  <span className="code">`rightControl`</span> props to
                  customize the scrolling controls.
                </li>
                <li>
                  The <span className="code">`autoHideControls`</span> prop can
                  be used to automatically hide controls when not scrollable.
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

export default Scrollable;
