/* eslint-disable react/no-unescaped-entities */

import CopyIcon from "@/components/common/CopyIcon";
import CodeSnippet from "../installation/CodeSnippet";
import Alert from "@/components/wabtech/alert/Alert";
import StepperSnippet from "@/components/wabtech/stepper/StepperSnippet";
import VariantsSnippet from "@/components/wabtech/stepper/VariantsSnippet";
import IconsSnippet from "@/components/wabtech/stepper/IconsSnippet";
import RightSidebar from "@/components/common/RightSidebar";

const Stepper = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "default", title: "Default Stepper" },
    { id: "variants", title: "Variants" },
    { id: "icons", title: "With icons" },
    { id: "props", title: "Props" },
    { id: "css_customization", title: "Customization" },
  ];
  const installDeps = `npm install framer-motion`;
  return (
    <div className="grid grid-cols-1 md:grid-cols-auto-200">
      <div>
        <section id="introduction">
          <h1 className="text-3xl font-semibold mb-4">Stepper/Form Wizard</h1>
          <div className="my-4">
            <p>
              The Stepper component enables you to create a step-by-step form
              wizard or process indicator.
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
              for the animations. If you intend to use this component, make sure
              to install it.
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
                  The <span className="code">Stepper.tsx</span> has the main
                  code for the component, the rest of the code in{" "}
                  <span className="code">App.tsx</span> shows you how to use the
                  component.
                </p>
              </Alert>
              <h1 className="text-xl mt-3">Default Stepper/Form Wizard</h1>
              <p className="mt-2">
                You can use the Stepper component to create a form wizard with
                numbered steps.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <StepperSnippet />
          </div>
        </section>

        <section id="variants">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Variants</h1>
            <p className="mt-2">
              You can choose from different variants to style the Stepper
              component. There are three available variants:{" "}
              <span className="code">`one`</span>,{" "}
              <span className="code">`two`</span>, and{" "}
              <span className="code">`three`</span>.
            </p>
            <div className="mt-8">
              <VariantsSnippet />
            </div>
          </div>
        </section>

        <section id="icons">
          <div className="mt-10">
            <h1 className="text-xl mt-3">Icons</h1>
            <p className="mt-2">
              ou can display icons in the Stepper steps using the{" "}
              <span className="code">`icon`</span> type. Provide an icon or an
              SVG element as the icon property of each step.
            </p>
            <div className="mt-8">
              <IconsSnippet />
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
                    <td className="font-semibold">`steps`</td>
                    <td>Step[]</td>
                    <td>See Example</td>
                    <td>An array of Step objects representing each step.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`type`</td>
                    <td>
                      <span className="code">`icon`</span> |{" "}
                      <span className="code">`numbered`</span> (optional)
                    </td>
                    <td>"icon"</td>
                    <td>The type of stepper to display.</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">`variant`</td>
                    <td>
                      <span className="code">`one`</span>|{" "}
                      <span className="code">`two`</span>|{" "}
                      <span className="code">`three`</span> (optional)
                    </td>
                    <td>"one"</td>
                    <td>The visual style variant of the stepper.</td>
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
              You can further customize the appearance of the Stepper component
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
                  The Stepper component helps create step-by-step form wizards
                  or process indicators.
                </li>
                <li>It supports both numbered and icon-based step display.</li>
                <li>
                  The component is flexible and allows different styling
                  variants.
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

export default Stepper;
