/* eslint-disable react/no-unescaped-entities */

import RightSidebar from "@/components/common/RightSidebar";
import Alert from "@/components/wabtech/alert/Alert";
import SizesSnippet from "@/components/wabtech/switch/SizesSnippet";
import SwitchSnippet from "@/components/wabtech/switch/SwitchSnippet";
import VariantsSnippet from "@/components/wabtech/switch/VariantsSnippet";

const Switch = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "default_switch", title: "Default Switch" },
    { id: "variants", title: "Variants" },
    { id: "sizes", title: "Sizes" },
    { id: "props", title: "Props" },
    { id: "css_customization", title: "Customization" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-auto-200">
      <div>
        <section id="introduction">
          <h1 className="text-3xl font-semibold mb-4">Switch</h1>
          <div className="my-4">
            <p>
              The Switch component allows users to toggle between two states,
              such as on and off.
            </p>
          </div>
        </section>
        <section id="default_switch">
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
                  The <span className="code">Switch.tsx</span> has the main code
                  for the component, the rest of the code in{" "}
                  <span className="code">App.tsx</span> shows you how to use the
                  component.
                </p>
              </Alert>
              <h1 className="text-xl mt-3">Default Switch</h1>
              <p className="mt-2">
                This is a default switch with default styles
              </p>
            </div>
          </div>
          <div className="mt-8">
            <SwitchSnippet />
          </div>
        </section>

        <section id="variants">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Variants</h1>
            <p className="mt-2">
              The Switch component supports different color variants:{" "}
              <span className="code">`default`</span>,{" "}
              <span className="code">`primary`</span>,{" "}
              <span className="code">`success`</span>,{" "}
              <span className="code">`warning`</span>, and{" "}
              <span className="code">`danger`</span>.
            </p>
            <div className="mt-8">
              <VariantsSnippet />
            </div>
          </div>
        </section>

        <section id="sizes">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Sizes</h1>
            <p className="mt-2">
              You can also adjust the size of the Switch component:{" "}
              <span className="code">`small`</span>,{" "}
              <span className="code">`medium`</span>, and{" "}
              <span className="code">`large`</span>
            </p>
            <div className="mt-8">
              <SizesSnippet />
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
                    <td className="font-semibold">`checked`</td>
                    <td>boolean</td>
                    <td>true</td>
                    <td>The current state of the switch.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`onChange`</td>
                    <td>(checked: boolean) =&gt; void (optional)</td>
                    <td></td>
                    <td>A function triggered when the switch state changes.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`variant`</td>
                    <td>
                      <span className="code">`default`</span> |{" "}
                      <span className="code">`primary`</span> |{" "}
                      <span className="code">`success`</span> |{" "}
                      <span className="code">`warning`</span> |{" "}
                      <span className="code">`danger`</span>. (optional)
                    </td>
                    <td>"default"</td>
                    <td>The color variant of the switch.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`size`</td>
                    <td>
                      {" "}
                      <span className="code">`small`</span> |{" "}
                      <span className="code">`medium`</span> | and{" "}
                      <span className="code">`large`</span> (optional)
                    </td>
                    <td>"medium"</td>
                    <td>The size of the switch.</td>
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
              You can further customize the appearance of the Switch component
              using CSS classes.
            </p>
          </div>
        </section>
        <section id="notes" className="pb-10">
          <div className="mt-10">
            <h1 className="text-2xl mt-3 font-semibold">Notes</h1>
            <div className="mt-4">
              <ul className="list-disc ml-6">
                <li>
                  The Switch component allows users to toggle between two
                  states.
                </li>
                <li>
                  It supports various color variants and sizes to match your
                  design.
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

export default Switch;
